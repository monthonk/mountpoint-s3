use std::str::FromStr as _;

use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::ObjectClient;
use tracing::{debug, error, trace};

use crate::object::ObjectId;
use crate::prefetch::Prefetch;
use crate::superblock::{Inode, LookedUp, ReadHandle, ReaddirHandle, WriteHandle};
use crate::sync::atomic::{AtomicI64, Ordering};
use crate::sync::AsyncMutex;
use crate::upload::{AppendUploadRequest, UploadRequest};

use super::{DirectoryEntry, Error, InodeNo, OpenFlags, S3Filesystem, ToErrno};

#[derive(Debug)]
pub struct DirHandle {
    #[allow(unused)]
    ino: InodeNo,
    pub handle: AsyncMutex<ReaddirHandle>,
    offset: AtomicI64,
    pub last_response: AsyncMutex<Option<(i64, Vec<DirectoryEntry>)>>,
}

impl DirHandle {
    pub fn new(ino: InodeNo, readdir_handle: ReaddirHandle) -> Self {
        Self {
            ino,
            handle: AsyncMutex::new(readdir_handle),
            offset: AtomicI64::new(0),
            last_response: AsyncMutex::new(None),
        }
    }
    pub fn offset(&self) -> i64 {
        self.offset.load(Ordering::SeqCst)
    }

    pub fn next_offset(&self) {
        self.offset.fetch_add(1, Ordering::SeqCst);
    }

    pub fn rewind_offset(&self) {
        self.offset.store(0, Ordering::SeqCst);
    }
}

#[derive(Debug)]
pub struct FileHandle<Client, Prefetcher>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    pub inode: Inode,
    pub full_key: String,
    pub state: AsyncMutex<FileHandleState<Client, Prefetcher>>,
    /// Process that created the handle
    pub open_pid: u32,
}

pub enum FileHandleState<Client, Prefetcher>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    /// The file handle has been assigned as a read handle
    Read {
        handle: ReadHandle,
        request: Prefetcher::PrefetchResult<Client>,
    },
    /// The file handle has been assigned as a write handle
    Write(UploadState<Client>),
}

impl<Client, Prefetcher> std::fmt::Debug for FileHandleState<Client, Prefetcher>
where
    Client: ObjectClient + Clone + Send + Sync + 'static + std::fmt::Debug,
    Prefetcher: Prefetch,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            FileHandleState::Read { handle, .. } => f.debug_struct("Read").field("handle", handle).finish(),
            FileHandleState::Write(arg0) => f.debug_tuple("Write").field(arg0).finish(),
        }
    }
}

impl<Client, Prefetcher> FileHandleState<Client, Prefetcher>
where
    Client: ObjectClient + Clone + Send + Sync,
    Prefetcher: Prefetch,
{
    pub async fn new_write_handle(
        lookup: &LookedUp,
        ino: InodeNo,
        flags: OpenFlags,
        fs: &S3Filesystem<Client, Prefetcher>,
    ) -> Result<FileHandleState<Client, Prefetcher>, Error> {
        let is_truncate = flags.contains(OpenFlags::O_TRUNC);
        let write_mode = fs.config.write_mode();
        let handle = fs.superblock.write(&fs.client, ino, &write_mode, is_truncate).await?;
        let bucket = &fs.bucket;
        let key = lookup.inode.full_key();
        let handle = if write_mode.incremental_upload {
            let initial_etag = if is_truncate {
                None
            } else {
                lookup.stat.etag.as_ref().map(|e| e.into())
            };
            let current_offset = if is_truncate { 0 } else { lookup.stat.size as u64 };
            let request = fs.append_uploader.start_upload(
                bucket.to_owned(),
                key.to_owned(),
                current_offset,
                initial_etag.clone(),
            );
            FileHandleState::Write(UploadState::AppendInProgress {
                request,
                handle,
                initial_etag,
                written_bytes: 0,
            })
        } else {
            match fs.uploader.put(bucket, key).await {
                Err(e) => return Err(err!(libc::EIO, source:e, "put failed to start")),
                Ok(request) => FileHandleState::Write(UploadState::MPUInProgress { request, handle }),
            }
        };
        metrics::gauge!("fs.current_handles", "type" => "write").increment(1.0);
        Ok(handle)
    }

    pub async fn new_read_handle(
        lookup: &LookedUp,
        fs: &S3Filesystem<Client, Prefetcher>,
    ) -> Result<FileHandleState<Client, Prefetcher>, Error> {
        if !lookup.stat.is_readable {
            return Err(err!(
                libc::EACCES,
                "objects in flexible retrieval storage classes are not accessible",
            ));
        }
        let handle = fs.superblock.read(&fs.client, lookup.inode.ino()).await?;
        let full_key = lookup.inode.full_key().to_owned();
        let object_size = lookup.stat.size as u64;
        let etag = match &lookup.stat.etag {
            None => return Err(err!(libc::EBADF, "no E-Tag for inode {}", lookup.inode.ino())),
            Some(etag) => ETag::from_str(etag).expect("E-Tag should be set"),
        };
        let object_id = ObjectId::new(full_key, etag);
        let request = fs.prefetcher.prefetch(
            fs.client.clone(),
            fs.mem_limiter.clone(),
            fs.bucket.clone(),
            object_id,
            object_size,
        );
        let handle = FileHandleState::Read { handle, request };
        metrics::gauge!("fs.current_handles", "type" => "read").increment(1.0);
        Ok(handle)
    }
}

#[derive(Debug)]
pub enum UploadState<Client: ObjectClient> {
    AppendInProgress {
        request: AppendUploadRequest<Client>,
        handle: WriteHandle,
        initial_etag: Option<ETag>,
        written_bytes: usize,
    },
    MPUInProgress {
        request: UploadRequest<Client>,
        handle: WriteHandle,
    },
    Completed,
    // Remember the failure reason to respond to retries
    Failed(libc::c_int),
}

impl<Client> UploadState<Client>
where
    Client: ObjectClient + Send + Sync + Clone + 'static,
{
    pub async fn write(&mut self, offset: i64, data: &[u8], key: &str) -> Result<u32, Error> {
        let result: Result<_, Error> = match self {
            UploadState::AppendInProgress {
                request,
                handle,
                written_bytes,
                ..
            } => match request.write(offset as u64, data).await {
                Ok(len) => {
                    *written_bytes += len;
                    Ok((handle, len))
                }
                Err(e) => Err(e.into()),
            },
            UploadState::MPUInProgress { request, handle, .. } => match request.write(offset, data).await {
                Ok(len) => Ok((handle, len)),
                Err(e) => Err(e.into()),
            },
            UploadState::Completed => return Err(err!(libc::EIO, "upload already completed for key {:?}", key)),
            UploadState::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", key)),
        };

        match result {
            Ok((handle, len)) => {
                handle.inc_file_size(len);
                Ok(len as u32)
            }
            Err(e) => {
                // Abort the request.
                match std::mem::replace(self, UploadState::Failed(e.to_errno())) {
                    UploadState::MPUInProgress { handle, .. } | UploadState::AppendInProgress { handle, .. } => {
                        if let Err(err) = handle.finish(None) {
                            // Log the issue but still return the write error.
                            error!(?err, ?key, "error updating the inode status");
                        }
                    }
                    UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
                };
                Err(e)
            }
        }
    }

    pub async fn commit<Prefetcher: Prefetch>(
        &mut self,
        key: &str,
        fs: &S3Filesystem<Client, Prefetcher>,
    ) -> Result<(), Error> {
        match &self {
            UploadState::Completed => return Ok(()),
            UploadState::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", key)),
            _ => {}
        };

        match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request,
                handle,
                initial_etag,
                written_bytes,
            } => {
                let current_offset = request.current_offset();
                match Self::commit_append(request, key).await {
                    Ok(etag) => {
                        // Restart append request.
                        let initial_etag = etag.or(initial_etag);
                        let request = fs.append_uploader.start_upload(
                            fs.bucket.clone(),
                            key.to_owned(),
                            current_offset,
                            initial_etag.clone(),
                        );
                        *self = UploadState::AppendInProgress {
                            request,
                            handle,
                            initial_etag,
                            written_bytes,
                        };
                        Ok(())
                    }
                    Err(e) => {
                        *self = UploadState::Failed(e.to_errno());
                        Err(e)
                    }
                }
            }
            UploadState::MPUInProgress { request, handle, .. } => {
                let result = Self::complete_upload(request, key, handle).await;
                if let Err(e) = &result {
                    *self = UploadState::Failed(e.to_errno());
                }
                result
            }
            UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
        }
    }

    pub async fn complete<Prefetcher: Prefetch>(
        &mut self,
        key: &str,
        pid: u32,
        open_pid: u32,
        fs: &S3Filesystem<Client, Prefetcher>,
    ) -> Result<(), Error> {
        match self {
            UploadState::AppendInProgress { written_bytes, .. } => {
                if *written_bytes == 0 || !are_from_same_process(open_pid, pid) {
                    // Commit current changes, but do not close the write handle.
                    return self.commit(key, fs).await;
                }
            }
            UploadState::MPUInProgress { request, .. } => {
                if request.size() == 0 {
                    trace!(key, "not completing upload because nothing was written");
                    return Ok(());
                }
                if !are_from_same_process(open_pid, pid) {
                    trace!(
                        key,
                        pid,
                        open_pid,
                        "not completing upload because current pid differs from pid at open"
                    );
                    return Ok(());
                }
            }
            UploadState::Completed => return Ok(()),
            UploadState::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", key)),
        };

        let result = match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request,
                handle,
                initial_etag,
                ..
            } => Self::complete_append(request, key, handle, initial_etag).await,
            UploadState::MPUInProgress { request, handle, .. } => Self::complete_upload(request, key, handle).await,
            UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
        };

        if let Err(e) = &result {
            *self = UploadState::Failed(e.to_errno());
        }
        result
    }

    pub async fn complete_if_in_progress(self, key: &str) -> Result<(), Error> {
        match self {
            UploadState::AppendInProgress {
                request,
                handle,
                initial_etag,
                ..
            } => Self::complete_append(request, key, handle, initial_etag).await,
            UploadState::MPUInProgress { request, handle, .. } => Self::complete_upload(request, key, handle).await,
            UploadState::Failed(_) | UploadState::Completed => Ok(()),
        }
    }

    async fn complete_upload(upload: UploadRequest<Client>, key: &str, handle: WriteHandle) -> Result<(), Error> {
        let size = upload.size();
        let (put_result, etag) = match upload.complete().await {
            Ok(result) => {
                debug!(key, size, "put succeeded");
                (Ok(()), Some(result.etag))
            }
            Err(e) => (Err(err!(libc::EIO, source:e, "put failed")), None),
        };
        if let Err(err) = handle.finish(etag) {
            // Log the issue but still return put_result.
            error!(?err, ?key, "error updating the inode status");
        }
        put_result
    }

    async fn complete_append(
        upload: AppendUploadRequest<Client>,
        key: &str,
        handle: WriteHandle,
        initial_etag: Option<ETag>,
    ) -> Result<(), Error> {
        match Self::commit_append(upload, key).await {
            Ok(etag) => {
                Self::finish(handle, etag.or(initial_etag));
                Ok(())
            }
            Err(err) => {
                Self::finish(handle, None);
                Err(err)
            }
        }
    }

    async fn commit_append(upload: AppendUploadRequest<Client>, key: &str) -> Result<Option<ETag>, Error> {
        match upload.complete().await {
            Ok(Some(result)) => {
                debug!(key, "put succeeded");
                Ok(Some(result.etag))
            }
            Ok(None) => {
                debug!(key, "no put required");
                Ok(None)
            }
            Err(e) => Err(err!(libc::EIO, source:e, "put failed")),
        }
    }

    fn finish(handle: WriteHandle, etag: Option<ETag>) {
        if let Err(err) = handle.finish(etag) {
            // Log the issue but still return put_result.
            error!(?err, "error updating the inode status");
        }
    }
}

/// Get the thread-group id (tgid) from a process id (pid).
/// Despite the names, the process id is actually the thread id
/// and the thread-group id is the parent process id.
/// Returns `None` if unable to find or parse the task status.
/// Not supported on macOS.
fn get_tgid(pid: u32) -> Option<u32> {
    if cfg!(not(target_os = "macos")) {
        use std::fs::File;
        use std::io::{BufRead, BufReader};

        let path = format!("/proc/{}/task/{}/status", pid, pid);
        let file = File::open(path).ok()?;
        for line in BufReader::new(file).lines() {
            let line = line.ok()?;
            if line.starts_with("Tgid:") {
                return line["Tgid: ".len()..].trim().parse::<u32>().ok();
            }
        }
    }

    None
}

/// Check whether two pids correspond to the same process.
fn are_from_same_process(pid1: u32, pid2: u32) -> bool {
    if pid1 == pid2 {
        return true;
    }
    let Some(tgid1) = get_tgid(pid1) else {
        return false;
    };
    let Some(tgid2) = get_tgid(pid2) else {
        return false;
    };
    tgid1 == tgid2
}