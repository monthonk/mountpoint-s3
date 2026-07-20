# Local MinIO for Mountpoint integration tests

Run Mountpoint `s3_tests` against a local [MinIO](https://min.io) server (via **Docker Compose**)
instead of real Amazon S3.

## Prerequisites

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or another Docker engine)
* Enough free disk space for Docker’s VM and images (Docker fails with `no space left on device` if the host or Docker disk is full)

`start.sh` will try to launch Docker Desktop on macOS if the daemon is not up yet.

## Quick start

```bash
# From the repo root
./scripts/minio/start.sh
source scripts/minio/env.sh

# Client tests (no FUSE) — prefer list/put; some get/delete tests use // keys MinIO rejects
cargo nextest run -p mountpoint-s3-client --features s3_tests \
  -E 'binary(list_objects) | binary(put_object)'

# FS / FUSE tests (Linux FUSE, or a working macFUSE kernel extension)
cargo nextest run -p mountpoint-s3-fs --features 'fuse_tests,s3_tests' \
  -E 'test(copy_rename_basic_s3)'
```

If FUSE fails on macOS with `mount_macfuse: the file system is not available`, open
**System Settings → Privacy & Security**, allow the macFUSE system extension, reboot if
prompted, then retry. Mock FUSE tests (`copy_rename_basic_mock`) do not need MinIO.

Stop with:

```bash
./scripts/minio/stop.sh
```

## Environment variables

`env.sh` exports:

| Variable | Default |
| -------- | ------- |
| `S3_ENDPOINT_URL` | `http://127.0.0.1:9000` |
| `S3_FORCE_PATH_STYLE` | `1` (required for MinIO) |
| `S3_BUCKET_NAME` | `mountpoint-test` |
| `S3_SECOND_BUCKET_NAME` | `mountpoint-test-2` |
| `S3_REGION` | `us-east-1` |
| `S3_BUCKET_TEST_PREFIX` | `mountpoint-test/` |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | `minioadmin` / `minioadmin` |

Credentials match the MinIO root user in `docker-compose.yml`.

## What works vs what does not

**Generally workable against MinIO** (basic S3 object APIs):

* `put_object` / `list_objects` style flows
* Path-style endpoint + static credentials via `env.sh`
* FS/unit tests that only need object CRUD (or the in-process mock client)

**Often fail against MinIO even with this setup:**

* Tests that build keys as `{prefix}/name` when `prefix` already ends with `/`
  (produces `//` in the key). Real S3 accepts that; MinIO returns
  `XMinioInvalidObjectName`. Prefer tests that use `{prefix}name`, or filter those out.
* S3 Express One Zone (`s3express_tests`)
* KMS / SSE-KMS (`KMS_TEST_KEY_ID`, encryption tests)
* IAM session policies / STS web identity / Access Points / MRAP
* Glacier restore, requester-pays, Transfer Acceleration, dual-stack, FIPS
* Full FUSE suite on macOS may need `allow_other` / macFUSE permissions

Example MinIO-friendly client subset:

```bash
source scripts/minio/env.sh
cargo nextest run -p mountpoint-s3-client --features s3_tests \
  -E 'binary(list_objects) | binary(put_object)'
```

Copy-rename FUSE against MinIO (Linux or macFUSE):

```bash
source scripts/minio/env.sh
cargo nextest run -p mountpoint-s3-fs --features 'fuse_tests,s3_tests' \
  -E 'test(copy_rename)'
```

## Console

http://127.0.0.1:9001 — login `minioadmin` / `minioadmin`
