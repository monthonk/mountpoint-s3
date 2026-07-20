#!/usr/bin/env bash
# Start MinIO via Docker Compose for Mountpoint integration tests.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required but not found in PATH" >&2
  exit 1
fi

wait_for_docker() {
  local i
  for i in $(seq 1 90); do
    if docker info >/dev/null 2>&1; then
      return 0
    fi
    sleep 2
  done
  return 1
}

if ! docker info >/dev/null 2>&1; then
  echo "Docker daemon is not running."
  if [[ "$(uname -s)" == "Darwin" ]] && [[ -d /Applications/Docker.app ]]; then
    echo "Attempting to start Docker Desktop..."
    open -a Docker || true
    if ! wait_for_docker; then
      echo "Docker Desktop did not become ready in time." >&2
      echo "If you see 'no space left on device', free disk space and/or prune Docker data:" >&2
      echo "  docker system prune -af --volumes" >&2
      echo "Then re-run this script." >&2
      exit 1
    fi
  else
    echo "Start Docker Desktop (or your Docker engine), then re-run this script." >&2
    exit 1
  fi
fi

echo "Starting MinIO with Docker Compose..."
docker compose -f "$ROOT/docker-compose.yml" up -d minio

echo "Waiting for MinIO health..."
for i in $(seq 1 60); do
  if curl -sf http://127.0.0.1:9000/minio/health/live >/dev/null 2>&1; then
    break
  fi
  # also try via docker health
  status="$(docker compose -f "$ROOT/docker-compose.yml" ps --format json 2>/dev/null | head -c 200 || true)"
  sleep 1
  if [[ "$i" -eq 60 ]]; then
    echo "MinIO did not become healthy in time" >&2
    docker compose -f "$ROOT/docker-compose.yml" logs --tail=50 minio >&2 || true
    exit 1
  fi
done

echo "Creating buckets..."
docker compose -f "$ROOT/docker-compose.yml" run --rm create-buckets

echo
echo "MinIO is ready (Docker Compose)."
echo "  API:     http://127.0.0.1:9000"
echo "  Console: http://127.0.0.1:9001  (minioadmin / minioadmin)"
echo
echo "Configure your shell with:"
echo "  source $ROOT/env.sh"
echo
echo "Example client integration tests:"
echo "  source $ROOT/env.sh"
echo "  cargo nextest run -p mountpoint-s3-client --features s3_tests \\"
echo "    -E 'binary(list_objects) | binary(put_object)'"
echo
echo "Note: tests that need real AWS features (KMS, S3 Express, IAM roles, Access Points)"
echo "will still fail against MinIO — filter those out or skip them."
