use async_channel::{unbounded, Receiver, Sender};
use tracing::trace;

use super::PrefetchReadError;

#[derive(Debug)]
pub struct BackpressureController {
    read_window_updater: Sender<usize>,
    preferred_read_window_size: usize,
    max_read_window_size: usize,
    read_window_size_multiplier: usize,
    read_window_range: u64,
    last_request_offset: u64,
}

#[derive(Debug)]
pub struct BackpressureLimiter {
    read_window_incrementing_queue: Receiver<usize>,
    read_window_range: u64,
}

/// Creates a [BackpressureController] and its related [BackpressureLimiter].
/// We use a pair of these to for providing feedback to backpressure stream.
///
/// [BackpressureLimiter] is used on producer side of the object stream, that is, any
/// [super::part_stream::ObjectPartStream] that support backpressure. The producer can call
/// `wait_for_read_window_increment` to wait for feedback from the consumer. This method
/// could block when they know that the producer requires read window incrementing.
///
/// [BackpressureController] will be given to the consumer side of the object stream.
/// It can be used anywhere to set preferred read window size for the stream and tell the
/// producer when its read window should be increased.
pub fn new_backpressure_controller(
    preferred_read_window_size: usize,
    max_read_window_size: usize,
    read_window_size_multiplier: usize,
    read_window_range: u64,
    last_request_offset: u64,
) -> (BackpressureController, BackpressureLimiter) {
    let (read_window_updater, read_window_incrementing_queue) = unbounded();
    let controller = BackpressureController {
        read_window_updater,
        preferred_read_window_size,
        max_read_window_size,
        read_window_size_multiplier,
        read_window_range,
        last_request_offset,
    };
    let limiter = BackpressureLimiter {
        read_window_incrementing_queue,
        read_window_range,
    };
    (controller, limiter)
}

impl BackpressureController {
    pub fn set_preferred_read_window_size(&mut self, preferred_read_window_size: usize) {
        self.preferred_read_window_size = preferred_read_window_size;
    }

    pub fn read_window_range(&self) -> u64 {
        self.read_window_range
    }

    // Try scaling up preferred read window size with a multiplier configured at initialization.
    pub fn try_scaling_up(&mut self) {
        if self.preferred_read_window_size < self.max_read_window_size {
            let new_read_window_size =
                (self.preferred_read_window_size * self.read_window_size_multiplier).min(self.max_read_window_size);
            trace!(
                current_size = self.preferred_read_window_size,
                new_size = new_read_window_size,
                "scaling up preferred read window"
            );
            self.preferred_read_window_size = new_read_window_size;
        }
    }

    /// Signal the stream producer about the next offset we might want to read from the stream. The backpressure controller
    /// will ensure that the read window size is enough to read this offset and that it is always close to `preferred_read_window_size`.
    pub async fn next_offset_hint<E>(&mut self, next_offset: u64) -> Result<(), PrefetchReadError<E>> {
        let mut remaining_window = self.read_window_range.saturating_sub(next_offset) as usize;
        // Increment the read window only if the remaining window reaches some threshold i.e. half of it left.
        while remaining_window < (self.preferred_read_window_size / 2)
            && self.read_window_range < self.last_request_offset
        {
            let to_increase = next_offset
                .saturating_add(self.preferred_read_window_size as u64)
                .saturating_sub(self.read_window_range) as usize;
            trace!(
                next_offset,
                read_window_range = self.read_window_range,
                preferred_read_window_size = self.preferred_read_window_size,
                to_increase,
                "incrementing read window"
            );
            self.increment_read_window(to_increase).await?;
            self.read_window_range += to_increase as u64;
            remaining_window = self.read_window_range.saturating_sub(next_offset) as usize;
        }
        Ok(())
    }

    // Send an increment read window request to the stream producer
    async fn increment_read_window<E>(&self, len: usize) -> Result<(), PrefetchReadError<E>> {
        // This should not block since the channel is unbounded
        self.read_window_updater
            .send(len)
            .await
            .map_err(|_| PrefetchReadError::ReadWindowIncrement)
    }
}

impl BackpressureLimiter {
    pub fn read_window_range(&self) -> u64 {
        self.read_window_range
    }

    /// Checks if there is enough read window to put the next item with a given offset to the stream.
    /// It blocks until receiving enough incrementing read window requests to serve the next part.
    ///
    /// Returns the new read window offset.
    pub async fn wait_for_read_window_increment<E>(
        &mut self,
        offset: u64,
    ) -> Result<Option<u64>, PrefetchReadError<E>> {
        if self.read_window_range > offset {
            if let Ok(len) = self.read_window_incrementing_queue.try_recv() {
                self.read_window_range += len as u64;
                Ok(Some(self.read_window_range))
            } else {
                Ok(None)
            }
        } else {
            // Block until we have enough read window to read the next chunk
            while self.read_window_range <= offset {
                trace!(
                    offset,
                    read_window_range = self.read_window_range,
                    "blocking for read window increment"
                );
                let recv = self.read_window_incrementing_queue.recv().await;
                match recv {
                    Ok(len) => self.read_window_range += len as u64,
                    Err(_) => return Err(PrefetchReadError::ReadWindowIncrement),
                }
            }
            Ok(Some(self.read_window_range))
        }
    }
}
