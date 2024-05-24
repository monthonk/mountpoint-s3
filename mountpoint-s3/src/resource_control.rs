#[derive(Debug)]
pub struct MemoryLimiter {
    current: u64,
    limit: u64,
}

impl MemoryLimiter {
    pub fn new(limit: u64) -> Self {
        Self { current: 0, limit }
    }

    pub fn allocate(&mut self, size: u64) {
        self.current += size;
    }

    pub fn release(&mut self, size: u64) {
        self.current -= size;
    }

    pub fn get_read_window(&self) -> u64 {
        if self.current >= self.limit {
            tracing::info!("hitting memory limit!");
            0
        } else {
            16 * 1024 * 1024
        }
    }
}
