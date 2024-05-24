use mountpoint_s3_client::{types::ETag, ObjectClient};

use crate::prefetch::part_stream::RequestRange;

use super::task::DownloadTask;

/// A generic interface to retrieve data from objects in a S3-like store.
pub trait PartStream {
    /// Spawns a request to get the content of an object. The object data will be retrieved in fixed size
    /// parts and can then be consumed using [RequestTask::read]. Callers need to specify a preferred
    /// size for the parts, but implementations are allowed to ignore it.
    fn spawn_get_object_request<Client>(
        &self,
        client: &Client,
        bucket: &str,
        key: &str,
        if_match: ETag,
        range: RequestRange,
        preferred_part_size: usize,
    ) -> DownloadTask<Client::ClientError>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static;
}
