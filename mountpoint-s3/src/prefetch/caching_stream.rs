use std::time::Instant;
use std::{ops::Range, sync::Arc};

use bytes::Bytes;
use futures::task::{Spawn, SpawnExt};
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::{types::GetObjectRequest, ObjectClient};
use tracing::{debug_span, trace, warn, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::data_cache::{BlockIndex, DataCache};
use crate::prefetch::backpressure_controller::new_backpressure_controller;
use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueueProducer};
use crate::prefetch::part_stream::{ObjectPartStream, RequestRange};
use crate::prefetch::task::RequestTask;
use crate::prefetch::PrefetchReadError;

use super::backpressure_controller::BackpressureLimiter;
use super::part_stream::RequestTaskConfig;

/// [ObjectPartStream] implementation which maintains a [DataCache] for the object data
/// retrieved by an [ObjectClient].
#[derive(Debug)]
pub struct CachingPartStream<Cache, Runtime> {
    cache: Arc<Cache>,
    runtime: Runtime,
}

impl<Cache, Runtime> CachingPartStream<Cache, Runtime> {
    pub fn new(runtime: Runtime, cache: Cache) -> Self {
        Self {
            cache: Arc::new(cache),
            runtime,
        }
    }
}

impl<Cache, Runtime> ObjectPartStream for CachingPartStream<Cache, Runtime>
where
    Cache: DataCache + Send + Sync + 'static,
    Runtime: Spawn,
{
    fn spawn_get_object_request<Client>(
        &self,
        client: Arc<Client>,
        config: RequestTaskConfig,
    ) -> RequestTask<<Client as ObjectClient>::ClientError>
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        let initial_read_window_offset = config.range.start() + config.initial_read_window_size as u64;
        let range = config.range;

        let (backpressure_controller, backpressure_limiter) = new_backpressure_controller(
            config.initial_read_window_size,
            config.max_read_window_size,
            config.read_window_size_multiplier,
            initial_read_window_offset,
            range.into(),
        );
        let (part_queue, part_queue_producer) = unbounded_part_queue(Some(backpressure_controller));
        trace!(range=?config.range, "spawning request");

        let request_task = {
            let request = CachingRequest::new(
                client.clone(),
                self.cache.clone(),
                part_queue_producer,
                backpressure_limiter,
                config,
            );
            let span = debug_span!("prefetch", range=?range);
            request
                .get_from_cache(range, initial_read_window_offset)
                .instrument(span)
        };

        let task_handle = self.runtime.spawn_with_handle(request_task).unwrap();

        RequestTask::from_handle(task_handle, range, part_queue)
    }
}

#[derive(Debug)]
struct CachingRequest<Client: ObjectClient, Cache> {
    client: Arc<Client>,
    cache: Arc<Cache>,
    part_queue_producer: PartQueueProducer<Client::ClientError>,
    backpressure_limiter: BackpressureLimiter,
    config: RequestTaskConfig,
}

impl<Client, Cache> CachingRequest<Client, Cache>
where
    Client: ObjectClient + Send + Sync + 'static,
    Cache: DataCache + Send + Sync,
{
    fn new(
        client: Arc<Client>,
        cache: Arc<Cache>,
        part_queue_producer: PartQueueProducer<Client::ClientError>,
        backpressure_limiter: BackpressureLimiter,
        config: RequestTaskConfig,
    ) -> Self {
        Self {
            client,
            cache,
            part_queue_producer,
            backpressure_limiter,
            config,
        }
    }

    async fn get_from_cache(mut self, range: RequestRange, initial_read_window_offset: u64) {
        let cache_key = &self.config.object_id;
        let block_size = self.cache.block_size();
        let block_range = self.block_indices_for_byte_range(&range);

        // Scan the blocks and feed them from the cache. If a block is missing or invalid,
        // start a GetObject request on the client for the remainder of the stream.
        // We could check for missing blocks in advance and pre-emptively start a GetObject
        // request, but since this stream is already behind the prefetcher, the delay is
        // already likely negligible.
        let mut block_offset = block_range.start * block_size;

        for block_index in block_range.clone() {
            match self.cache.get_block(cache_key, block_index, block_offset) {
                Ok(Some(block)) => {
                    trace!(?cache_key, ?range, block_index, "cache hit");

                    let part = self.make_part(block, block_index, block_offset, &range);
                    self.part_queue_producer.push(Ok(part));
                    block_offset += block_size;

                    if let Err(e) = self
                        .backpressure_limiter
                        .wait_for_read_window_increment(block_offset)
                        .await
                    {
                        self.part_queue_producer.push(Err(e));
                        break;
                    }
                    continue;
                }
                Ok(None) => trace!(?cache_key, block_index, ?range, "cache miss - no data for block"),
                Err(error) => warn!(
                    ?cache_key,
                    block_index,
                    ?range,
                    ?error,
                    "error reading block from cache",
                ),
            }
            // If a block is uncached or reading it fails, fallback to S3 for the rest of the stream.
            metrics::counter!("prefetch.blocks_served_from_cache").increment(block_index - block_range.start);
            metrics::counter!("prefetch.blocks_requested_to_client").increment(block_range.end - block_index);
            if let Err(e) = self
                .get_from_client(
                    range.trim_start(block_offset),
                    block_index..block_range.end,
                    initial_read_window_offset,
                )
                .await
            {
                self.part_queue_producer.push(Err(e));
            }
            return;
        }
        // We served the whole range from cache.
        metrics::counter!("prefetch.blocks_served_from_cache").increment(block_range.end - block_range.start);
    }

    async fn get_from_client(
        &mut self,
        range: RequestRange,
        block_range: Range<u64>,
        initial_read_window_offset: u64,
    ) -> Result<(), PrefetchReadError<Client::ClientError>> {
        let block_size = self.cache.block_size();
        assert!(block_size > 0);

        // Always request a range aligned with block boundaries (or to the end of the object).
        let block_aligned_byte_range =
            (block_range.start * block_size)..(block_range.end * block_size).min(range.object_size() as u64);
        let request_len = (block_aligned_byte_range.end - block_aligned_byte_range.start) as usize;
        let block_aligned_byte_range =
            RequestRange::new(range.object_size(), block_aligned_byte_range.start, request_len);

        trace!(
            key = self.config.object_id.key(),
            range =? block_aligned_byte_range,
            original_range =? range,
            "fetching data from client"
        );

        let mut block_index = block_range.start;
        let mut block_offset = block_range.start * block_size;
        let mut buffer = ChecksummedBytes::default();

        // Start by issuing the first request that has a range up to initial read window offset.
        // This is an optimization to lower time to first bytes, see more details in ClientPartStream about why this is needed.
        let first_req_range = block_aligned_byte_range.trim_end(initial_read_window_offset);
        if !first_req_range.is_empty() {
            self.get_object(
                first_req_range,
                range,
                block_size,
                &mut block_index,
                &mut block_offset,
                &mut buffer,
            )
            .await?;
        }

        // After the first request is completed we will create the second request for the rest of the stream,
        // but only if there is something left to be fetched.
        let range = block_aligned_byte_range.trim_start(initial_read_window_offset);
        if !range.is_empty() {
            self.get_object(
                range,
                range,
                block_size,
                &mut block_index,
                &mut block_offset,
                &mut buffer,
            )
            .await?;
        }

        if !buffer.is_empty() {
            // If we still have data in the buffer, this must be the last block for this object,
            // which can be smaller than block_size (and ends at the end of the object).
            assert_eq!(
                block_offset as usize + buffer.len(),
                range.object_size(),
                "a partial block is only allowed at the end of the object"
            );
            // Write the last block to the cache.
            self.update_cache(block_index, block_offset, &buffer);
            self.part_queue_producer
                .push(Ok(self.make_part(buffer, block_index, block_offset, &range)));
        }
        trace!("request finished");
        Ok(())
    }

    async fn get_object(
        &mut self,
        req_range: RequestRange,
        original_range: RequestRange,
        block_size: u64,
        block_index: &mut u64,
        block_offset: &mut u64,
        buffer: &mut ChecksummedBytes,
    ) -> Result<(), PrefetchReadError<Client::ClientError>> {
        let bucket = &self.config.bucket;
        let cache_key = &self.config.object_id;

        let request = self
            .client
            .get_object(
                bucket,
                cache_key.key(),
                Some(req_range.into()),
                Some(cache_key.etag().clone()),
            )
            .await
            .map_err(PrefetchReadError::GetRequestFailed)?;

        pin_mut!(request);

        let read_window_size_diff = self
            .backpressure_limiter
            .read_window_offset()
            .saturating_sub(request.as_ref().read_window_offset()) as usize;
        request.as_mut().increment_read_window(read_window_size_diff);

        loop {
            assert!(
                buffer.len() < block_size as usize,
                "buffer should be flushed when we get a full block"
            );
            let Some(next) = request.next().await else {
                break;
            };

            let (offset, body) = next.map_err(PrefetchReadError::GetRequestFailed)?;
            trace!(offset, length = body.len(), "received GetObject part");
            metrics::counter!("s3.client.total_bytes", "type" => "read").increment(body.len() as u64);

            let expected_offset = *block_offset + buffer.len() as u64;
            if offset != expected_offset {
                warn!(
                    key = cache_key.key(),
                    offset, expected_offset, "wrong offset for GetObject body part"
                );
                return Err(PrefetchReadError::GetRequestReturnedWrongOffset {
                    offset,
                    expected_offset,
                });
            }

            let body: Bytes = body.into();

            // Return some bytes to the part queue even before we can fill an entire caching block because we want to
            // start the feedback loop for the flow-control window.
            // We need to do this because the read window might be enough to fetch "some data" from S3 but not the entire block.
            // For example, consider that we got a file system read request with range 2MB to 4MB and we have to start
            // reading from block_offset=0 and block_size=5MB. The first read window might have a range up 4MB which is enough
            // to serve the read request but if the prefetcher is not able to read anything it cannot tell this stream to
            // move its read window.
            let part_range = original_range.trim_start(offset).trim_end(offset + body.len() as u64);
            let trim_start = (part_range.start().saturating_sub(offset)) as usize;
            let trim_end = (part_range.end().saturating_sub(offset)) as usize;
            // Put to the part queue only if returned data is in the actual request range.
            if trim_end > trim_start {
                self.part_queue_producer.split_and_push(
                    cache_key.clone(),
                    part_range.start(),
                    body.slice(trim_start..trim_end),
                    self.config.preferred_part_size,
                );
            }

            // Now we can fill the caching blocks.
            self.buffer_to_cache(body, buffer, block_size, block_index, block_offset)?;

            let next_offset = *block_offset + buffer.len() as u64;
            if let Some(next_read_window_offset) = self
                .backpressure_limiter
                .wait_for_read_window_increment(next_offset)
                .await?
            {
                let diff = next_read_window_offset.saturating_sub(request.as_ref().read_window_offset()) as usize;
                request.as_mut().increment_read_window(diff);
            }
        }
        Ok(())
    }

    fn buffer_to_cache(
        &self,
        mut body: Bytes,
        buffer: &mut ChecksummedBytes,
        block_size: u64,
        block_index: &mut u64,
        block_offset: &mut u64,
    ) -> Result<(), PrefetchReadError<Client::ClientError>> {
        while !body.is_empty() {
            let remaining = (block_size as usize).saturating_sub(buffer.len()).min(body.len());
            let chunk = body.split_to(remaining);
            if let Err(e) = buffer.extend(chunk.into()) {
                let key = self.config.object_id.key();
                warn!(key, error=?e, "integrity check for body part failed");
                return Err(e.into());
            }
            if buffer.len() < block_size as usize {
                break;
            }

            // We have a full block: write it to the cache, send it to the queue, and flush the buffer.
            self.update_cache(*block_index, *block_offset, &buffer);
            *block_index += 1;
            *block_offset += block_size;
            *buffer = ChecksummedBytes::default();
        }
        Ok(())
    }

    fn update_cache(&self, block_index: u64, block_offset: u64, block: &ChecksummedBytes) {
        // TODO: consider updating the cache asynchronously
        let start = Instant::now();
        let cache_key = &self.config.object_id;
        match self
            .cache
            .put_block(cache_key.clone(), block_index, block_offset, block.clone())
        {
            Ok(()) => {}
            Err(error) => {
                warn!(key=?cache_key.key(), block_index, ?error, "failed to update cache");
            }
        };
        metrics::histogram!("prefetch.cache_update_duration_us").record(start.elapsed().as_micros() as f64);
    }

    /// Creates a Part that can be streamed to the prefetcher from the given cache block.
    /// If required, trims the block bytes to the request range.
    fn make_part(&self, block: ChecksummedBytes, block_index: u64, block_offset: u64, range: &RequestRange) -> Part {
        assert_eq!(
            block_offset,
            block_index * self.cache.block_size(),
            "invalid block offset"
        );

        let cache_key = &self.config.object_id;
        let block_size = block.len();
        let part_range = range
            .trim_start(block_offset)
            .trim_end(block_offset + block_size as u64);
        trace!(
            ?cache_key,
            block_index,
            ?part_range,
            block_offset,
            block_size,
            "creating part from block data",
        );

        let trim_start = (part_range.start().saturating_sub(block_offset)) as usize;
        let trim_end = (part_range.end().saturating_sub(block_offset)) as usize;
        let bytes = block.slice(trim_start..trim_end);
        Part::new(cache_key.clone(), part_range.start(), bytes)
    }

    fn block_indices_for_byte_range(&self, range: &RequestRange) -> Range<BlockIndex> {
        let block_size = self.cache.block_size();
        let start_block = range.start() / block_size;
        let mut end_block = range.end() / block_size;
        if !range.is_empty() && range.end() % block_size != 0 {
            end_block += 1;
        }

        start_block..end_block
    }
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::{
        mock_client::{MockClient, MockClientConfig, MockObject, Operation},
        types::ETag,
    };
    use test_case::test_case;

    use crate::{data_cache::InMemoryDataCache, object::ObjectId};

    use super::*;

    const KB: usize = 1024;
    const MB: usize = 1024 * 1024;

    #[test_case(1 * MB, 8 * MB, 16 * MB, 0, 16 * MB; "whole object")]
    #[test_case(1 * MB, 8 * MB, 16 * MB, 1 * MB, 3 * MB + 512 * KB; "aligned offset")]
    #[test_case(1 * MB, 8 * MB, 16 * MB, 512 * KB, 3 * MB; "non-aligned range")]
    #[test_case(3 * MB, 8 * MB, 14 * MB, 0, 14 * MB; "whole object, size not aligned to parts or blocks")]
    #[test_case(3 * MB, 8 * MB, 14 * MB, 9 * MB, 100 * MB; "aligned offset, size not aligned to parts or blocks")]
    #[test_case(1 * MB, 8 * MB, 100 * KB, 0, 100 * KB; "small object")]
    #[test_case(8 * MB, 5 * MB, 16 * MB, 0, 16 * MB; "cache blocks larger than client parts")]
    fn test_read_from_cache(
        block_size: usize,
        client_part_size: usize,
        object_size: usize,
        offset: usize,
        preferred_size: usize,
    ) {
        let key = "object";
        let seed = 0xaa;
        let object = MockObject::ramp(seed, object_size, ETag::for_tests());
        let id = ObjectId::new(key.to_owned(), object.etag());

        // backpressure config
        let initial_read_window_size = 1 * MB;
        let max_read_window_size = 64 * MB;
        let read_window_size_multiplier = 2;

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
            enable_backpressure: true,
            initial_read_window_size,
            ..Default::default()
        };
        let mock_client = Arc::new(MockClient::new(config));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);
        let range = RequestRange::new(object_size, offset as u64, preferred_size);

        let first_read_count = {
            // First request (from client)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let config = RequestTaskConfig {
                bucket: bucket.to_owned(),
                object_id: id.clone(),
                range,
                preferred_part_size: 256 * KB,
                initial_read_window_size,
                max_read_window_size,
                read_window_size_multiplier,
            };
            let request_task = stream.spawn_get_object_request(mock_client.clone(), config);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert!(first_read_count > 0);

        let second_read_count = {
            // Second request (from cache)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let config = RequestTaskConfig {
                bucket: bucket.to_owned(),
                object_id: id.clone(),
                range,
                preferred_part_size: 256 * KB,
                initial_read_window_size,
                max_read_window_size,
                read_window_size_multiplier,
            };
            let request_task = stream.spawn_get_object_request(mock_client.clone(), config);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert_eq!(second_read_count, 0);
    }

    #[test_case(1 * MB, 8 * MB)]
    #[test_case(8 * MB, 8 * MB)]
    #[test_case(1 * MB, 5 * MB + 1)]
    #[test_case(1 * MB + 1, 5 * MB)]
    fn test_get_object_parts(block_size: usize, client_part_size: usize) {
        let key = "object";
        let object_size = 16 * MB;
        let seed = 0xaa;
        let object = MockObject::ramp(seed, object_size, ETag::for_tests());
        let id = ObjectId::new(key.to_owned(), object.etag());

        // backpressure config
        let initial_read_window_size = 1 * MB;
        let max_read_window_size = 64 * MB;
        let read_window_size_multiplier = 2;

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
            enable_backpressure: true,
            initial_read_window_size,
            ..Default::default()
        };
        let mock_client = Arc::new(MockClient::new(config));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);

        for offset in [0, 512 * KB, 1 * MB, 4 * MB, 9 * MB] {
            for preferred_size in [1 * KB, 512 * KB, 4 * MB, 12 * MB, 16 * MB] {
                let config = RequestTaskConfig {
                    bucket: bucket.to_owned(),
                    object_id: id.clone(),
                    range: RequestRange::new(object_size, offset as u64, preferred_size),
                    preferred_part_size: 256 * KB,
                    initial_read_window_size,
                    max_read_window_size,
                    read_window_size_multiplier,
                };
                let request_task = stream.spawn_get_object_request(mock_client.clone(), config);
                compare_read(&id, &object, request_task);
            }
        }
    }

    fn compare_read<E: std::error::Error + Send + Sync>(
        id: &ObjectId,
        object: &MockObject,
        mut request_task: RequestTask<E>,
    ) {
        let mut offset = request_task.start_offset();
        let mut remaining = request_task.total_size();
        while remaining > 0 {
            let part = block_on(request_task.read(remaining)).unwrap();
            let bytes = part.into_bytes(id, offset).unwrap();

            let expected = object.read(offset, bytes.len());
            let bytes = bytes.into_bytes().unwrap();
            assert_eq!(bytes, *expected);

            offset += bytes.len() as u64;
            remaining -= bytes.len();
        }
    }
}
