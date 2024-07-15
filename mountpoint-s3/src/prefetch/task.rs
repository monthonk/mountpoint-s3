use futures::future::RemoteHandle;
use mountpoint_s3_client::types::ETag;

use crate::prefetch::part::Part;
use crate::prefetch::part_queue::PartQueue;
use crate::prefetch::PrefetchReadError;

use super::backpressure_controller::BackpressureController;
use super::part_stream::RequestRange;

pub struct RequestTaskConfig {
    pub(super) bucket: String,
    pub(super) key: String,
    pub(super) if_match: ETag,
    pub(super) range: RequestRange,
    pub(super) preferred_part_size: usize,
    pub(super) initial_read_window_size: usize,
    pub(super) max_read_window_size: usize,
    pub(super) read_window_size_multiplier: usize,
}

/// A single GetObject request submitted to the S3 client
#[derive(Debug)]
pub struct RequestTask<E: std::error::Error> {
    /// Handle on the task/future. The future is cancelled when handle is dropped. This is None if
    /// the request is fake (created by seeking backwards in the stream)
    _task_handle: RemoteHandle<()>,
    remaining: usize,
    range: RequestRange,
    part_queue: PartQueue<E>,
    backpressure_controller: BackpressureController,
}

impl<E: std::error::Error + Send + Sync> RequestTask<E> {
    pub fn from_handle(
        task_handle: RemoteHandle<()>,
        range: RequestRange,
        part_queue: PartQueue<E>,
        backpressure_controller: BackpressureController,
    ) -> Self {
        Self {
            _task_handle: task_handle,
            remaining: range.len(),
            range,
            part_queue,
            backpressure_controller,
        }
    }

    // Push a given list of parts in front of the part queue
    pub async fn push_front(&mut self, mut parts: Vec<Part>) -> Result<(), PrefetchReadError<E>> {
        // Merge all parts into one single part.
        // This could result in a really big part, but we normally use this only for backward seek
        // so its size should not be bigger than the prefetcher's `max_backward_seek_distance`.
        let part = parts.iter_mut().reduce(|acc, e| {
            acc.extend(e).unwrap();
            acc
        });
        if let Some(part) = part {
            self.remaining += part.len();
            self.part_queue.push_front(part.clone()).await;
        }
        Ok(())
    }

    pub async fn read(&mut self, length: usize) -> Result<Part, PrefetchReadError<E>> {
        tracing::trace!(length, "read");
        let part = self.part_queue.read(length).await?;
        debug_assert!(part.len() <= self.remaining);
        self.remaining -= part.len();

        // We read some data out of the part queue so the read window should be moved
        let next_offset = part.offset() + part.len() as u64;
        self.backpressure_controller.next_offset_hint(next_offset).await?;

        let remaining_in_queue = self.available_offset().saturating_sub(next_offset) as usize;
        // If the part queue is empty it means we are reading faster than the task could prefetch,
        // so we should use larger window for the task.
        if remaining_in_queue == 0 {
            self.backpressure_controller.try_scaling_up();
        }

        Ok(part)
    }

    pub fn start_offset(&self) -> u64 {
        self.range.start()
    }

    pub fn end_offset(&self) -> u64 {
        self.range.end()
    }

    pub fn total_size(&self) -> usize {
        self.range.len()
    }

    pub fn remaining(&self) -> usize {
        self.remaining
    }

    /// Maximum offset which data is known to be already in the `self.part_queue`
    pub fn available_offset(&self) -> u64 {
        self.start_offset() + self.part_queue.bytes_received()
    }

    pub fn read_window_range(&self) -> u64 {
        self.backpressure_controller.read_window_range()
    }
}
