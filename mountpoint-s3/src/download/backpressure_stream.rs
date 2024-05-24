use std::pin::Pin;

use bytes::Bytes;
use futures::{
    pin_mut,
    stream::{AbortHandle, Abortable},
    task::{Spawn, SpawnExt},
    StreamExt,
};
use tracing::{debug_span, error, trace, Instrument};
use mountpoint_s3_client::GetObjectRequest;

use crate::{
    checksums::ChecksummedBytes,
    object::ObjectId,
    prefetch::{part::Part, part_queue::unbounded_part_queue, part_stream::RequestRange, PrefetchReadError},
};

use super::{part_stream::PartStream, task::DownloadTask};

/// [PartStream] implementation which delegates retrieving object data to a [Client].
#[derive(Debug)]
pub struct BackpressureStream<Runtime> {
    runtime: Runtime,
}

impl<Runtime> BackpressureStream<Runtime>
where
    Runtime: Spawn,
{
    pub fn new(runtime: Runtime) -> Self {
        Self { runtime }
    }
}

impl<Runtime> PartStream for BackpressureStream<Runtime>
where
    Runtime: Spawn,
{
    fn spawn_get_object_request<Client>(
        &self,
        client: &Client,
        bucket: &str,
        key: &str,
        if_match: mountpoint_s3_client::types::ETag,
        range: RequestRange,
        preferred_part_size: usize,
    ) -> DownloadTask<Client::ClientError>
    where
        Client: mountpoint_s3_client::ObjectClient + Clone + Send + Sync + 'static,
    {
        let start = range.start();
        let size = range.len();

        let (part_queue, part_queue_producer) = unbounded_part_queue();
        trace!(range=?range, "spawning request");

        let request_task = {
            let client = client.clone();
            let bucket = bucket.to_owned();
            let id = ObjectId::new(key.to_owned(), if_match);
            let span = debug_span!("prefetch", range=?range);

            async move {
                let get_object_result = match client
                    .get_object(&bucket, id.key(), Some(range.into()), Some(id.etag().clone()))
                    .await
                {
                    Ok(get_object_result) => get_object_result,
                    Err(e) => {
                        error!(key=id.key(), error=?e, "GetObject request failed");
                        part_queue_producer.push(Err(PrefetchReadError::GetRequestFailed(e)));
                        return;
                    }
                };

                pin_mut!(get_object_result);
                loop {
                    match get_object_result.next().await {
                        Some(Ok((offset, body))) => {
                            trace!(offset, length = body.len(), "received GetObject part");
                            // we know this is safe because modifying a field doesn't move the whole struct
                            unsafe {
                                let mut_ref = get_object_result.as_mut();
                                let mut_pinned = Pin::get_unchecked_mut(mut_ref);
                                mut_pinned.set_read_window(16 * 1024 * 1024);
                            }
                            // pre-split the body into multiple parts as suggested by preferred part size
                            // in order to avoid validating checksum on large parts at read.
                            let mut body: Bytes = body.into();
                            let mut curr_offset = offset;
                            loop {
                                let chunk_size = preferred_part_size.min(body.len());
                                if chunk_size == 0 {
                                    break;
                                }
                                let chunk = body.split_to(chunk_size);
                                // S3 doesn't provide checksum for us if the request range is not aligned to
                                // object part boundaries, so we're computing our own checksum here.
                                let checksum_bytes = ChecksummedBytes::new(chunk);
                                let part = Part::new(id.clone(), curr_offset, checksum_bytes);
                                curr_offset += part.len() as u64;
                                part_queue_producer.push(Ok(part));
                            }
                        }
                        Some(Err(e)) => {
                            error!(key=id.key(), error=?e, "GetObject body part failed");
                            part_queue_producer.push(Err(PrefetchReadError::GetRequestFailed(e)));
                            break;
                        }
                        None => break,
                    }
                }
                trace!("request finished");
            }
            .instrument(span)
        };

        let (abort_handle, abort_registration) = AbortHandle::new_pair();
        let task_handle = self.runtime.spawn_with_handle(request_task).unwrap();
        let abortable = Abortable::new(task_handle, abort_registration);

        DownloadTask::from_handle(abort_handle, abortable, size, start, part_queue)
    }
}
