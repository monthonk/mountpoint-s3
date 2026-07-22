#!/usr/bin/env bash
# Run Mountpoint integration tests in the Linux dev container against MinIO.
# Uses Linux FUSE (--device=/dev/fuse --privileged) so macFUSE is not required.
#
# Prerequisites:
#   ./scripts/minio/start.sh
#   ./dev-container/dev.py build   # once, if image missing
#
# Usage (from repo root):
#   ./scripts/minio/run-tests-docker.sh              # client s3_tests
#   ./scripts/minio/run-tests-docker.sh client
#   ./scripts/minio/run-tests-docker.sh fs
#   ./scripts/minio/run-tests-docker.sh all
#   ./scripts/minio/run-tests-docker.sh -- cargo nextest run -p mountpoint-s3-client --features s3_tests
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"

IMAGE="${MOUNTPOINT_DEV_IMAGE:-mountpoint-s3-dev}"
MINIO_NETWORK="${MINIO_NETWORK:-minio_default}"
MINIO_CONTAINER="${MINIO_CONTAINER:-mountpoint-minio}"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required" >&2
  exit 1
fi

if ! docker image inspect "$IMAGE" >/dev/null 2>&1; then
  echo "Dev image '$IMAGE' not found; building..."
  ./dev-container/dev.py build --image "$IMAGE"
fi

if ! docker inspect "$MINIO_CONTAINER" --format '{{.State.Running}}' 2>/dev/null | grep -q true; then
  echo "MinIO container '$MINIO_CONTAINER' is not running. Start it with:" >&2
  echo "  ./scripts/minio/start.sh" >&2
  exit 1
fi

if ! docker network inspect "$MINIO_NETWORK" >/dev/null 2>&1; then
  echo "Docker network '$MINIO_NETWORK' not found." >&2
  exit 1
fi

# Linking CRT + aws-lc is memory-heavy; default to few parallel jobs in Docker Desktop VMs.
CARGO_BUILD_JOBS="${CARGO_BUILD_JOBS:-2}"

# Prefer MinIO's container IP over hostname "minio". CRT Automatic addressing treats
# IP endpoints like host 127.0.0.1 (path-style-friendly); hostname virtual-host fails.
MINIO_IP="$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' "$MINIO_CONTAINER" 2>/dev/null || true)"
if [[ -z "$MINIO_IP" ]]; then
  echo "Could not resolve IP for container '$MINIO_CONTAINER'" >&2
  exit 1
fi
S3_ENDPOINT_URL="${S3_ENDPOINT_URL:-http://${MINIO_IP}:9000}"

run_in_container() {
  # Run a single shell command string inside the dev container.
  local shell_cmd=$1
  echo "Running in Docker image=$IMAGE network=$MINIO_NETWORK"
  echo "MinIO endpoint inside container: $S3_ENDPOINT_URL (ip of $MINIO_CONTAINER)"
  echo "CARGO_BUILD_JOBS=$CARGO_BUILD_JOBS"
  echo "Command: $shell_cmd"
  echo

  docker run --rm \
    --network "$MINIO_NETWORK" \
    --device=/dev/fuse \
    --privileged \
    -v "$ROOT:/workspace" \
    -v mountpoint-s3-cargo-cache:/home/dev-user/.cargo/registry \
    -v mountpoint-s3-target-cache:/workspace/target \
    -v mountpoint-s3-rustup-home:/home/dev-user/.rustup \
    -e AWS_ACCESS_KEY_ID=minioadmin \
    -e AWS_SECRET_ACCESS_KEY=minioadmin \
    -e "S3_ENDPOINT_URL=$S3_ENDPOINT_URL" \
    -e S3_FORCE_PATH_STYLE=1 \
    -e S3_TEST_CAPABILITIES=none \
    -e S3_BUCKET_NAME=mountpoint-test \
    -e S3_BUCKET_TEST_PREFIX=mountpoint-test/ \
    -e S3_REGION=us-east-1 \
    -e S3_BUCKET_OWNER=000000000000 \
    -e KMS_TEST_KEY_ID= \
    -e RUST_BACKTRACE=1 \
    -e CARGO_TERM_COLOR=always \
    -e "CARGO_BUILD_JOBS=$CARGO_BUILD_JOBS" \
    "$IMAGE" \
    /bin/bash -lc "$shell_cmd"
}

# Prefer cargo test over nextest in Docker: CRT logs DMI sysfs errors on LinuxKit
# during --list, which nextest treats as a hard failure ("did not end with ': test'").
CLIENT_CMD='cargo test -p mountpoint-s3-client --features s3_tests --no-fail-fast -- --nocapture'
# Serial FUSE mounts avoid flaky concurrent mounts in a single privileged container.
FS_CMD='cargo test -p mountpoint-s3-fs --features fuse_tests,s3_tests --no-fail-fast -- --nocapture --test-threads=1'

SUITE="${1:-client}"
case "$SUITE" in
  client)
    shift || true
    run_in_container "$CLIENT_CMD ${*:-}"
    ;;
  fs)
    shift || true
    run_in_container "$FS_CMD ${*:-}"
    ;;
  all)
    shift || true
    run_in_container "$CLIENT_CMD && $FS_CMD ${*:-}"
    ;;
  --)
    shift
    if [[ $# -eq 0 ]]; then
      echo "usage: $0 -- <command...>" >&2
      exit 1
    fi
    # Join remaining args as a shell command
    run_in_container "$*"
    ;;
  *)
    echo "Unknown suite '$SUITE' (use client|fs|all, or -- <cmd>)" >&2
    exit 1
    ;;
esac