# Source this file to export env vars for Mountpoint integration tests against local MinIO:
#   source scripts/minio/env.sh
#
# Then run e.g.:
#   cargo nextest run -p mountpoint-s3-client --features s3_tests get_object

export S3_REGION="${S3_REGION:-us-east-1}"
export S3_BUCKET_NAME="${S3_BUCKET_NAME:-mountpoint-test}"
export S3_SECOND_BUCKET_NAME="${S3_SECOND_BUCKET_NAME:-mountpoint-test-2}"
export S3_BUCKET_TEST_PREFIX="${S3_BUCKET_TEST_PREFIX:-mountpoint-test/}"
export S3_ENDPOINT_URL="${S3_ENDPOINT_URL:-http://127.0.0.1:9000}"
# Required for MinIO (and most S3-compatible servers): path-style addressing
export S3_FORCE_PATH_STYLE="${S3_FORCE_PATH_STYLE:-1}"

# Static MinIO credentials (match start.sh / docker-compose)
export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID:-minioadmin}"
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY:-minioadmin}"
# Avoid picking up a real AWS profile/session/web-identity that could override local keys
# or make the CRT try STS (noisy failures against MinIO).
unset AWS_PROFILE \
      AWS_SESSION_TOKEN \
      AWS_SECURITY_TOKEN \
      AWS_WEB_IDENTITY_TOKEN_FILE \
      AWS_ROLE_ARN \
      AWS_ROLE_SESSION_NAME \
      AWS_CONTAINER_CREDENTIALS_RELATIVE_URI \
      AWS_CONTAINER_CREDENTIALS_FULL_URI \
      2>/dev/null || true

# Optional placeholders so tests that only *read* these don't panic at startup
# (tests that actually exercise KMS/IAM/Express will still fail against MinIO).
export S3_BUCKET_OWNER="${S3_BUCKET_OWNER:-000000000000}"
export KMS_TEST_KEY_ID="${KMS_TEST_KEY_ID:-}"

echo "MinIO test env configured:"
echo "  S3_ENDPOINT_URL=$S3_ENDPOINT_URL"
echo "  S3_BUCKET_NAME=$S3_BUCKET_NAME"
echo "  S3_REGION=$S3_REGION"
echo "  S3_FORCE_PATH_STYLE=$S3_FORCE_PATH_STYLE"
