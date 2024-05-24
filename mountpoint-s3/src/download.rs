mod backpressure_stream;
mod caching_stream;
pub mod part_stream;
mod seek_window;
pub(crate) mod task;

use async_trait::async_trait;
use futures::task::Spawn;
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::ObjectClient;
use tracing::trace;

use crate::checksums::{ChecksummedBytes, IntegrityError};
use crate::data_cache::DataCache;
use crate::object::ObjectId;
use crate::prefetch::part::Part;
use crate::prefetch::part_stream::RequestRange;
use crate::prefetch::{PrefetchReadError, PrefetchResult};
use crate::sync::Arc;

use self::backpressure_stream::BackpressureStream;
use self::caching_stream::CachingPartStream;
use self::part_stream::PartStream;
use self::seek_window::SeekWindow;
use self::task::DownloadTask;

/// Generic interface to handle reading data from an object.
pub trait Download {
    type DownloadResult<Client: ObjectClient + Send + Sync + 'static>: PrefetchResult<Client>;

    /// Start a new prefetch request to the specified object.
    fn start<Client>(
        &self,
        client: Arc<Client>,
        bucket: &str,
        key: &str,
        size: u64,
        etag: ETag,
    ) -> Self::DownloadResult<Client>
    where
        Client: ObjectClient + Send + Sync + 'static;
}

/// Objects downloader
#[derive(Debug)]
pub struct Downloader<Stream> {
    part_stream: Arc<Stream>,
    config: DownloaderConfig,
}

pub type BackpressureDownload<Runtime> = Downloader<BackpressureStream<Runtime>>;

/// Creates an instance of a backpressure [Prefetch].
pub fn backpressure_download<Runtime>(runtime: Runtime) -> BackpressureDownload<Runtime>
where
    Runtime: Spawn + Send + Sync + 'static,
{
    let part_stream = BackpressureStream::new(runtime);
    Downloader::new(part_stream.into(), Default::default())
}

pub type CachingDownload<Cache, Runtime> = Downloader<CachingPartStream<Cache, Runtime>>;

/// Creates an instance of a caching [Prefetch].
pub fn caching_download<Cache, Runtime>(cache: Cache, runtime: Runtime) -> CachingDownload<Cache, Runtime>
where
    Cache: DataCache + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync + 'static,
{
    let part_stream = CachingPartStream::new(runtime, cache);
    Downloader::new(part_stream.into(), Default::default())
}

#[derive(Debug, Clone, Copy)]
pub struct DownloaderConfig {
    pub max_forward_seek_distance: u64,
    /// The maximum distance the prefetcher will seek backwards before resetting and starting a new
    /// S3 request. We keep this much data in memory in addition to any inflight requests.
    pub max_backward_seek_distance: u64,
}

impl Default for DownloaderConfig {
    fn default() -> Self {
        #[allow(clippy::identity_op)]
        Self {
            // We want these large enough to tolerate a single out-of-order Linux readahead, which
            // is at most 256KiB backwards and then 512KiB forwards. For forwards seeks, we're also
            // making a guess about where the optimal cut-off point is before it would be faster to
            // just start a new request instead.
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 1 * 1024 * 1024,
        }
    }
}

impl<Stream> Downloader<Stream>
where
    Stream: PartStream,
{
    /// Create a new [Downloader] from the given [PartStream] instance.
    pub fn new(part_stream: Arc<Stream>, config: DownloaderConfig) -> Self {
        Self { part_stream, config }
    }
}

impl<Stream> Download for Downloader<Stream>
where
    Stream: PartStream + Send + Sync + 'static,
{
    type DownloadResult<Client: ObjectClient + Send + Sync + 'static> = DownloadObject<Stream, Client>;

    fn start<Client>(
        &self,
        client: Arc<Client>,
        bucket: &str,
        key: &str,
        size: u64,
        etag: ETag,
    ) -> Self::DownloadResult<Client>
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        DownloadObject::new(
            client.clone(),
            self.part_stream.clone(),
            self.config,
            bucket,
            key,
            size,
            etag,
        )
    }
}

pub struct DownloadObject<Stream: PartStream, Client: ObjectClient> {
    client: Arc<Client>,
    part_stream: Arc<Stream>,
    config: DownloaderConfig,
    backpressure_task: Option<DownloadTask<Client::ClientError>>,
    backward_seek_window: SeekWindow,
    bucket: String,
    object_id: ObjectId,
    // preferred part size in the prefetcher's part queue, not the object part
    preferred_part_size: usize,
    next_sequential_read_offset: u64,
    size: u64,
}

impl<Stream, Client> DownloadObject<Stream, Client>
where
    Stream: PartStream,
    Client: ObjectClient + Send + Sync + 'static,
{
    /// Create and spawn a new prefetching request for an object
    fn new(
        client: Arc<Client>,
        part_stream: Arc<Stream>,
        config: DownloaderConfig,
        bucket: &str,
        key: &str,
        size: u64,
        etag: ETag,
    ) -> Self {
        DownloadObject {
            client,
            part_stream,
            config,
            backpressure_task: None,
            backward_seek_window: SeekWindow::new(config.max_backward_seek_distance as usize),
            bucket: bucket.to_owned(),
            object_id: ObjectId::new(key.to_owned(), etag),
            preferred_part_size: 128 * 1024,
            next_sequential_read_offset: 0,
            size,
        }
    }

    /// Reset this GetObject request to a new offset, clearing any existing tasks queued.
    async fn reset_to_offset(&mut self, offset: u64) {
        tracing::info!(
            "resetting offset expected:{} actual:{}",
            self.next_sequential_read_offset,
            offset
        );
        self.next_sequential_read_offset = offset;
        if let Some(task) = self.backpressure_task.take() {
            task.cancel().await;
        }
        self.backpressure_task = None;
    }

    /// Try to seek within the current inflight requests without restarting them. Returns true if
    /// the seek succeeded, in which case self.next_sequential_read_offset will be updated to the
    /// new offset. If this returns false, the prefetcher is in an unknown state and must be reset.
    async fn try_seek(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert_ne!(offset, self.next_sequential_read_offset);
        trace!(from = self.next_sequential_read_offset, to = offset, "trying to seek");
        if offset > self.next_sequential_read_offset {
            self.try_seek_forward(offset).await
        } else {
            self.try_seek_backward(offset).await
        }
    }

    async fn try_seek_forward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset > self.next_sequential_read_offset);
        let total_seek_distance = offset - self.next_sequential_read_offset;
        let Some(current_task) = self.backpressure_task.as_mut() else {
            // Can't seek if there's no requests in flight at all
            return Ok(false);
        };
        if total_seek_distance >= (current_task.remaining() as u64).min(self.config.max_forward_seek_distance) {
            // TODO maybe adjust the next_request_size somehow if we were still within
            // max_forward_seek_distance, so that strides > first_request_size can still get
            // prefetched.
            trace!(current_task_remaining=?current_task.remaining(), "seek failed: not enough inflight data");
            return Ok(false);
        }

        let mut seek_distance = offset - self.next_sequential_read_offset;
        let current_task = self
            .backpressure_task
            .as_mut()
            .expect("a request existed that covered this seek offset");
        while seek_distance > 0 {
            let part = current_task.read(seek_distance as usize).await?;
            seek_distance -= part.len() as u64;
            self.next_sequential_read_offset += part.len() as u64;
            // self.backward_seek_window.push(part);
        }

        metrics::histogram!("prefetch.seek_distance", "dir" => "forward").record(total_seek_distance as f64);
        Ok(true)
    }

    async fn try_seek_backward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset < self.next_sequential_read_offset);
        let backwards_length_needed = self.next_sequential_read_offset - offset;
        let Some(parts) = self.backward_seek_window.read_back(backwards_length_needed as usize) else {
            trace!("seek failed: not enough data in backwards seek window");
            return Ok(false);
        };

        // tracing::info!("seeking backward for {} KiB, offset={}", backwards_length_needed / 1024, offset);
        let mut combined_part = Part::new(self.object_id.clone(), offset, Default::default());
        for part in parts {
            // tracing::info!("extending part with offset={} length={}", part.offset(), part.len());
            let result = combined_part.extend(&part);
            if let Err(_error) = result {
                // tracing::warn!("combining parts failed {}", error);
                self.backward_seek_window.clear();
                return Ok(false);
            }
        }
        // Assume that the task exists for now
        if let Some(backpressure_task) = self.backpressure_task.as_mut() {
            let len = combined_part.len() as u64;
            backpressure_task.push_front(combined_part).await;
            self.next_sequential_read_offset -= len;
            metrics::histogram!("prefetch.seek_distance", "dir" => "backward").record(backwards_length_needed as f64);

            Ok(true)
        } else {
            Ok(false)
        }
    }

    /// Spawn read backpressure request
    fn spawn_read_backpressure_request(&mut self) -> DownloadTask<Client::ClientError> {
        let start = self.next_sequential_read_offset;
        let object_size = self.size as usize;
        let range = RequestRange::new(object_size, start, object_size);
        let task = self.part_stream.spawn_get_object_request(
            &self.client,
            &self.bucket,
            self.object_id.key(),
            self.object_id.etag().clone(),
            range,
            self.preferred_part_size,
        );
        task
    }
}

#[async_trait]
impl<Stream, Client> PrefetchResult<Client> for DownloadObject<Stream, Client>
where
    Stream: PartStream + Send + Sync + 'static,
    Client: ObjectClient + Send + Sync + 'static,
{
    /// Read some bytes from the object. This function will always return exactly `size` bytes,
    /// except at the end of the object where it will return however many bytes are left (including
    /// possibly 0 bytes).
    async fn read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> Result<ChecksummedBytes, PrefetchReadError<Client::ClientError>> {
        trace!(
            offset,
            length,
            next_seq_offset = self.next_sequential_read_offset,
            "read"
        );

        // Currently, we set preferred part size to the current read size.
        // Our assumption is that the read size will be the same for most sequential
        // read and it can be aligned to the size of prefetched chunks.
        //
        // We initialize this value to 128k as it is the Linux's readahead size
        // and it can also be used as a lower bound in case the read size is too small.
        // The upper bound is 1MiB since it should be a common IO size.
        let max_preferred_part_size = 1024 * 1024;
        self.preferred_part_size = self.preferred_part_size.max(length).min(max_preferred_part_size);

        let remaining = self.size.saturating_sub(offset);
        if remaining == 0 {
            return Ok(ChecksummedBytes::default());
        }
        let mut to_read = (length as u64).min(remaining);

        if self.next_sequential_read_offset != offset {
            if self.try_seek(offset).await? {
                trace!("seek succeeded");
            } else {
                // reset the downloader and start a new request
                self.reset_to_offset(offset).await;
            }
        }
        assert_eq!(self.next_sequential_read_offset, offset);

        if self.backpressure_task.is_none() {
            self.backpressure_task = Some(self.spawn_read_backpressure_request());
        }

        let mut response = ChecksummedBytes::default();
        while to_read > 0 {
            let Some(current_task) = self.backpressure_task.as_mut() else {
                // If [prepare_requests] didn't spawn a request, we've reached the end of the object.
                trace!(offset, length, "read beyond object size");
                break;
            };
            debug_assert!(current_task.remaining() > 0);

            let part = match current_task.read(to_read as usize).await {
                Err(e) => {
                    self.reset_to_offset(offset).await;
                    return Err(e);
                }
                Ok(part) => part,
            };
            self.backward_seek_window.push(part.clone());
            let part_bytes = part
                .into_bytes(&self.object_id, self.next_sequential_read_offset)
                .unwrap();

            self.next_sequential_read_offset += part_bytes.len() as u64;

            // If we can complete the read with just a single buffer, early return to avoid copying
            // into a new buffer. This should be the common case as long as part size is larger than
            // read size, which it almost always is for real S3 clients and FUSE.
            if response.is_empty() && part_bytes.len() == to_read as usize {
                return Ok(part_bytes);
            }

            let part_len = part_bytes.len() as u64;
            let result = response.extend(part_bytes);
            match result {
                Ok(()) => {}
                Err(e @ IntegrityError::ChecksumMismatch(_, _)) => {
                    // cancel inflight tasks
                    self.backpressure_task = None;
                    return Err(e.into());
                }
            }
            to_read -= part_len;
        }

        Ok(response)
    }
}
