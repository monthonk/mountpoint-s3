#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::{HeadObjectError, ObjectClientError, S3CrtClient, S3RequestError};
use test_case::test_case;

#[tokio::test]
async fn test_head_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("head_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert_eq!(result.object.size as usize, body.len());
}

#[test_case("INTELLIGENT_TIERING")]
#[test_case("GLACIER")]
#[tokio::test]
async fn test_head_object_storage_class(storage_class: &str) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .storage_class(storage_class.into())
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("head_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert_eq!(result.object.size as usize, body.len());
    assert_eq!(result.object.storage_class.as_deref(), Some(storage_class));
    assert!(!result.object.restored);
}

#[tokio::test]
async fn test_head_object_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object_404_key");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object(&bucket, &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
    ));
}

#[tokio::test]
async fn test_head_object_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_head_object_404_bucket");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object("DOC-EXAMPLE-BUCKET", &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
    ));
}

#[tokio::test]
async fn test_head_object_no_perm() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_head_object_no_perm");
    let bucket = get_test_bucket_without_permissions();

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object(&bucket, &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ClientError(S3RequestError::Forbidden(_)))
    ));
}

// This test relies on s3's expedited object restoration, it takes 1-5 minutes to complete
#[tokio::test]
async fn test_head_object_restored() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object_restored");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .storage_class("GLACIER".into())
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("head_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert!(
        !result.object.restored,
        "object should become restored only after restoration"
    );

    sdk_client
        .restore_object()
        .bucket(&bucket)
        .key(&key)
        .restore_request(
            aws_sdk_s3::model::RestoreRequest::builder()
                .set_days(Some(1))
                .set_glacier_job_parameters(Some(
                    aws_sdk_s3::model::GlacierJobParameters::builder()
                        .set_tier(Some(aws_sdk_s3::model::Tier::Expedited))
                        .build(),
                ))
                .build(),
        )
        .send()
        .await
        .unwrap();

    let timeout_s = 300;
    let mut i = 0;
    while i < timeout_s
        && !client
            .head_object(&bucket, &key)
            .await
            .expect("head_object failed")
            .object
            .restored
    {
        println!("restoration is in progress, timeout in: {}s", timeout_s - i);
        std::thread::sleep(std::time::Duration::from_secs(1));
        i += 1;
    }
    assert!(i < timeout_s, "timeouted while waiting for object become restored");
}
