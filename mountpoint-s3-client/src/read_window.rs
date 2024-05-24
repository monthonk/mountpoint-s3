#[derive(Debug)]
pub struct ReadWindow {
    target_read_window: u64,
}

impl ReadWindow {
    pub fn new(target_read_window: u64) -> Self {
        Self { target_read_window }
    }

    pub fn set_target(&mut self, target_read_window: u64) {
        self.target_read_window = target_read_window;
    }

    pub fn target_read_window(&self) -> u64 {
        self.target_read_window
    }
}
