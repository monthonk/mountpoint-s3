use std::ffi::OsStr;

use fuser::Notifier;

use crate::fs::InodeNo;

#[derive(Debug)]
pub struct S3FilesystemNotifier {
    notifier: Option<Notifier>,
}

impl S3FilesystemNotifier {
    pub fn new(notifier: Option<Notifier>) -> Self {
        Self { notifier }
    }

    pub fn register(&mut self, notifier: Notifier) {
        self.notifier = Some(notifier);
    }

    pub fn inval_entry(&self, parent: InodeNo, name: &str) {
        if let Some(notifier) = &self.notifier {
            tracing::info!("invalidating entry {parent} {name}");
            let _ = notifier.inval_entry(parent, OsStr::new(name));
        }
    }
}

impl Default for S3FilesystemNotifier {
    fn default() -> Self {
        Self { notifier: Default::default() }
    }
}
