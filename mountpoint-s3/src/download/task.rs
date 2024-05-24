use std::sync::{Arc, Mutex};

use futures::future::RemoteHandle;
use futures::stream::{AbortHandle, Abortable};

use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueue};
use crate::prefetch::PrefetchReadError;
use crate::resource_control::MemoryLimiter;

/// A single GetObject request submitted to the S3 client
#[derive(Debug)]
pub struct DownloadTask<E: std::error::Error> {
    /// Handle on the task/future. The future is cancelled when handle is dropped. This is None if
    /// the request is fake (created by seeking backwards in the stream)
    task_handle: Option<AbortHandle>,
    _abortable: Option<Abortable<RemoteHandle<()>>>,
    remaining: usize,
    start_offset: u64,
    total_size: usize,
    part_queue: PartQueue<E>,
    limiter: Arc<Mutex<MemoryLimiter>>,
}

impl<E: std::error::Error + Send + Sync> DownloadTask<E> {
    pub fn from_handle(
        task_handle: AbortHandle,
        abortable: Abortable<RemoteHandle<()>>,
        size: usize,
        offset: u64,
        part_queue: PartQueue<E>,
        limiter: Arc<Mutex<MemoryLimiter>>,
    ) -> Self {
        Self {
            task_handle: Some(task_handle),
            _abortable: Some(abortable),
            remaining: size,
            start_offset: offset,
            total_size: size,
            part_queue,
            limiter,
        }
    }

    pub fn from_parts(parts: impl IntoIterator<Item = Part>, offset: u64, limiter: Arc<Mutex<MemoryLimiter>>) -> Self {
        let mut size = 0;
        let (part_queue, part_queue_producer) = unbounded_part_queue();
        for part in parts {
            size += part.len();
            part_queue_producer.push(Ok(part));
        }
        Self {
            task_handle: None,
            _abortable: None,
            remaining: size,
            start_offset: offset,
            total_size: size,
            part_queue,
            limiter,
        }
    }

    pub async fn push_front(&mut self, part: Part) {
        self.remaining += part.len();
        self.part_queue.push_front(part).await;
    }

    pub async fn read(&mut self, length: usize) -> Result<Part, PrefetchReadError<E>> {
        let part = self.part_queue.read(length).await?;
        debug_assert!(part.len() <= self.remaining);
        self.remaining -= part.len();
        self.limiter.lock().unwrap().release(part.len() as u64);
        // metrics::decrement_gauge!("x.prefetched_bytes", part.len() as f64, "type" => "s3");
        Ok(part)
    }

    pub fn start_offset(&self) -> u64 {
        self.start_offset
    }

    pub fn end_offset(&self) -> u64 {
        self.start_offset + self.total_size as u64
    }

    pub fn total_size(&self) -> usize {
        self.total_size
    }

    pub fn remaining(&self) -> usize {
        self.remaining
    }

    /// Some requests aren't actually streaming data (they're fake, created by backwards seeks), and
    /// shouldn't be counted for prefetcher progress.
    pub fn is_streaming(&self) -> bool {
        self.task_handle.is_some()
    }

    pub async fn cancel(self) {
        if let Some(task) = &self.task_handle {
            tracing::info!("cancelling a task with remaining size {}", self.remaining);
            task.abort();
        }
        let remaining_data = self.part_queue.drain().await;
        self.limiter.lock().unwrap().release(remaining_data as u64);
        // metrics::decrement_gauge!("x.prefetched_bytes", remaining_data as f64, "type" => "s3");
    }
}

// impl<E: std::error::Error> Drop for DownloadTask<E> {
//     fn drop(&mut self) {
//         if self.task_handle.is_some() {
//             metrics::decrement_gauge!("x.perfetched_bytes", self.total_size as f64, "type" => "s3");
//         }
//     }
// }
