#!/usr/bin/env bash
# Stop MinIO Docker Compose stack.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required but not found in PATH" >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Docker daemon is not running; nothing to stop (or start Docker to clean up)." >&2
  exit 1
fi

docker compose -f "$ROOT/docker-compose.yml" down
echo "MinIO Docker Compose stack stopped."
