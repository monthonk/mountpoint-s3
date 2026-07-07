# Unofficial features

This document describes **unofficial** Mountpoint features that exist on the
[`unofficial`](https://github.com/monthonk/mountpoint-s3/tree/unofficial) integration line of this
fork (and feature branches targeting it).

Unofficial features:

* are **not** part of upstream Mountpoint for Amazon S3’s supported product surface
* may change, break compatibility, or be removed without a formal deprecation cycle
* are not covered by AWS Support for Mountpoint
* should be evaluated carefully for production use (failure modes, IAM, atomicity, and cost)

Stable upstream behavior is documented in [CONFIGURATION.md](./CONFIGURATION.md),
[SEMANTICS.md](./SEMANTICS.md), and [TROUBLESHOOTING.md](./TROUBLESHOOTING.md). Where those docs
mention an unofficial feature, they point here for full detail.

## Index

| Feature | Opt-in | Status | Summary |
| ------- | ------ | ------ | ------- |
| [Copy-rename emulation](#copy-rename-emulation) | `--allow-copy-rename` (requires `--allow-delete`) | Unofficial | Emulate file rename on general purpose buckets via `CopyObject` + `DeleteObject` |

---

## Copy-rename emulation

### Motivation

Upstream Mountpoint supports **atomic** file rename only for objects in **S3 Express One Zone**
directory buckets, using the S3 `RenameObject` API. On **general purpose** buckets, `rename(2)` /
`mv` normally fails with `ENOSYS` (function not implemented).

Copy-rename is an **opt-in** emulation for general purpose buckets when applications need
`rename`/`mv` and can tolerate non-atomic semantics.

### Enabling

```bash
mount-s3 amzn-s3-demo-bucket /path/to/mount \
  --allow-delete \
  --allow-copy-rename
```

Constraints:

* Requires `--allow-delete` (source keys are removed after a successful copy).
* Conflicts with `--read-only`.
* Replacing an existing destination still requires `--allow-overwrite` (same rule as Express rename).

Example with overwrite:

```bash
mount-s3 amzn-s3-demo-bucket /path/to/mount \
  --allow-delete \
  --allow-overwrite \
  --allow-copy-rename
```

### How it works

When the bucket personality does **not** support `RenameObject` (typical for general purpose
buckets), Mountpoint:

1. Copies the source object to the destination key with `CopyObject` (server-side copy).
2. Deletes the source key with `DeleteObject`.
3. Refreshes destination metadata (including ETag via `HeadObject`) before updating local name
   bindings.

S3 Express directory buckets that support `RenameObject` still use the atomic API first; copy-rename
is the fallback path for buckets without that API.

### Limits

| Constraint | Behavior |
| ---------- | -------- |
| Object size | At most **5 GiB** (single-request `CopyObject` limit). Larger objects fail with `EFBIG`. |
| File state | Only **committed remote** files. Files still being written, or not yet uploaded, fail with `EPERM`. |
| Directories | Directory rename is **not** supported (`EPERM`). |
| Atomicity | **Not atomic.** The destination is a **new** object (new ETag / version). |

### IAM permissions

In addition to permissions required for a normal writable mount, copy-rename needs:

| Action | Why |
| ------ | --- |
| `s3:GetObject` | Source of the server-side copy |
| `s3:PutObject` | Destination of the server-side copy |
| `s3:DeleteObject` | Remove the source key after a successful copy |
| `s3:ListBucket` / `s3:HeadObject` (as used by the mount) | Lookup and post-copy metadata refresh |

Mountpoint does **not** verify these at startup. Missing permissions appear when a rename is
attempted.

### Failure behavior

| Situation | Result | Bucket state | Local mount view |
| --------- | ------ | ------------ | ---------------- |
| Destination exists and overwrite is disabled | `EEXIST` | Unchanged | Unchanged |
| Object too large | `EFBIG` | Unchanged | Unchanged |
| `CopyObject` fails (e.g. access denied) | Error (often client/`EIO`) | Unchanged | Unchanged; copy-rename may be **disabled for the rest of the mount** on authorization failures |
| `CopyObject` succeeds, `DeleteObject` fails | `EIO` (`CopyRenamePartialFailure`) | **Both** source and destination keys may exist | Name bindings **not** updated to claim success; copy-rename **disabled for the rest of the mount** on authorization failures |
| Success | No error | Source gone; destination present with a new object identity | Destination name visible; source name gone |

After an unrecoverable authorization failure (including delete denied after a successful copy),
Mountpoint **latches copy-rename off** for the remainder of the mount and logs a warning. Later
renames fail immediately with `ENOSYS` without creating more objects. Fix IAM and **remount** to
re-enable.

If a rename is partially applied, remove either key manually so the bucket is consistent, then
remount if the gate was disabled.

### Semantics notes

* Readers that already had the source or destination open may fail subsequent reads after the
  remote rename (same class of race as other mutating S3 operations).
* Because the destination is a new object, tools that rely on ETag / version identity will see a
  change even when bytes are identical.
* Content-Type is not updated on rename (same as other Mountpoint renames).

### Related documentation

* Configuration overview: [CONFIGURATION.md](./CONFIGURATION.md#file-modifications-and-deletions)
* Semantics: [SEMANTICS.md](./SEMANTICS.md#file-and-directory-rename)
* Troubleshooting: [TROUBLESHOOTING.md](./TROUBLESHOOTING.md#rename-rejected-where-unsupported)

### Metrics

When metrics are enabled, successful copy-renames increment `fuse.rename.copy_rename`. Partial
apply failures increment `fuse.rename.partial_failure`. See [METRICS.md](./METRICS.md) for general
metrics configuration.
