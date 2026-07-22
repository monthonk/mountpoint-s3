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

# Client integration tests (skips tests that need capabilities MinIO lacks)
cargo nextest run -p mountpoint-s3-client --features s3_tests

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

## Linux FUSE tests via Docker (macOS-friendly)

On macOS, FUSE integration tests need **macFUSE**. To use **Linux FUSE** instead, run
the existing `mountpoint-s3-dev` container on the MinIO Compose network:

```bash
./scripts/minio/start.sh
# once, if the image is missing:
./dev-container/dev.py build

./scripts/minio/run-tests-docker.sh client   # mountpoint-s3-client s3_tests
./scripts/minio/run-tests-docker.sh fs       # mountpoint-s3-fs fuse_tests + s3_tests
./scripts/minio/run-tests-docker.sh all      # both
```

The runner attaches to `minio_default`, sets `S3_ENDPOINT_URL=http://minio:9000`,
and passes `--device=/dev/fuse --privileged`.


## Environment variables

`env.sh` exports:

| Variable | Default |
| -------- | ------- |
| `S3_ENDPOINT_URL` | `http://127.0.0.1:9000` |
| `S3_FORCE_PATH_STYLE` | `1` (required for MinIO) |
| `S3_TEST_CAPABILITIES` | `none` (baseline only; see below) |
| `S3_BUCKET_NAME` | `mountpoint-test` (only bucket; no second bucket) |
| `S3_REGION` | `us-east-1` |
| `S3_BUCKET_TEST_PREFIX` | `mountpoint-test/` |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | `minioadmin` / `minioadmin` |

Credentials match the MinIO root user in `docker-compose.yml`.

## Target capabilities (`S3_TEST_CAPABILITIES`)

Integration tests share a small **capability** model (see
`mountpoint_s3_client::test_capabilities` (in the `mountpoint-s3-client` crate).

| Value | Meaning |
| ----- | ------- |
| *(unset)* | **Auto:** `all` without `S3_ENDPOINT_URL` (real S3/CI); `none` when `S3_ENDPOINT_URL` is set (MinIO) |
| `all` | Every optional capability |
| `none` or empty | Baseline object API only |
| comma-separated names | Only those capabilities |

### Defined capabilities

| Name | What the test needs | MinIO |
| ---- | ------------------- | ----- |
| `list_object_checksums` | ListObjectsV2 returns `ChecksumAlgorithm` | No |
| `get_object_checksums` | GetObject/HeadObject return checksums | Partial / often no |
| `double_slash_object_keys` | Object keys containing `//` | No |
| `special_character_object_keys` | Awkward URL-encoding characters in keys | Often no |
| `long_object_keys` | Path components longer than ~255 bytes (up to S3’s 1024) | No |
| `conflicting_object_and_prefix` | Object `X` coexists with keys under `X/` | No |
| `iam_session_policies` | `S3_SUBSESSION_IAM_ROLE` / scoped IAM | No |
| `server_side_encryption` | SSE-S3 / SSE-KMS metadata | Partial / often no |
| `storage_classes` | Non-`STANDARD` storage classes | No |
| `list_multipart_uploads` | Incomplete MPUs after abort | Often no |
| `reject_bad_upload_checksum` | Wrong checksum → `BadChecksum` | Often no |
| `reject_append_on_standard_bucket` | Append → `NotImplemented` on GP buckets | Often no |
| `access_points` | Access Points / OLAP / MRAP env resources | No |
| `get_object_attributes` | GetObjectAttributes API shape | Often no |
| `object_restore` | Glacier restore status | No |
| `transfer_acceleration` | S3 Transfer Acceleration endpoints | No |
| `dual_stack` | Dual-stack (IPv6) endpoints | No |
| `fips` | FIPS endpoints | No |
| `network_interfaces` | Bind CRT client to host ENIs (`ip route`) | Host-dependent |
| `aws_s3_hostnames` | Metrics assert `*.amazonaws.com` hosts | No |
| `region_redirects` | Wrong-region HeadBucket redirect semantics | No |


Tests that need a capability call `require_capability(...)` and **return early**
when it is not advertised.

libtest still counts those tests as **passed** (no stable runtime `#[ignore]`).
Visibility:

1. Per-test line (with `--nocapture`): `SKIPPED (missing S3 capability \`…\`)`
2. **End-of-binary summary** (after `test result: …`): a block titled
   `S3 capability skips (libtest still counts these tests as PASSED)` listing
   totals, missing capabilities, and test names. Grep for `S3 capability skips`.

On first capability check you will see a line like:

```text
S3_TEST_CAPABILITIES effective: none (S3_ENDPOINT_URL set: true)
```

Amazon S3 CI leaves both `S3_ENDPOINT_URL` and `S3_TEST_CAPABILITIES` unset, so
behavior stays `all`.

Override when experimenting:

```bash
# force baseline only
export S3_TEST_CAPABILITIES=none

# force full Amazon S3 surface even against a custom endpoint
export S3_TEST_CAPABILITIES=all

# enable only selected extras
export S3_TEST_CAPABILITIES=list_object_checksums
```

## What still needs real AWS

Even with capabilities, these remain out of scope for MinIO (separate feature flags /
env resources):

* S3 Express One Zone (`s3express_tests`)
* KMS / SSE-KMS
* IAM session policies / STS web identity / Access Points / MRAP
* Glacier restore, requester-pays, Transfer Acceleration, dual-stack, FIPS

## Console

http://127.0.0.1:9001 — login `minioadmin` / `minioadmin`
