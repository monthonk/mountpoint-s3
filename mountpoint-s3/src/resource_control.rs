pub trait MemoryAware {
    fn report(&self) -> u64;
    fn set_limit(&mut self, limit: u64);
}
