//! Optional capabilities of the S3 *target* under test.
//!
//! Hidden helper for integration tests across the workspace. Not part of the stable API.
//!
//! Integration tests assume a baseline of ordinary object APIs (put/get/list/delete
//! with normal object keys). Features that are Amazon S3–specific — or that
//! S3-compatible servers such as MinIO do not implement fully — are modeled as
//! **capabilities**.
//!
//! ## Selecting capabilities
//!
//! Set `S3_TEST_CAPABILITIES` before running tests:
//!
//! | Value | Meaning |
//! | ----- | ------- |
//! | *(unset)* | **Auto:** `all` when `S3_ENDPOINT_URL` is unset (real Amazon S3 / CI);
//! |           | `none` when `S3_ENDPOINT_URL` is set (MinIO / custom endpoint) |
//! | `all` | Every optional capability |
//! | `none` or empty | Baseline only — skip any test that requires a capability |
//! | comma-separated names | Only the listed capabilities |
//!
//! Example (MinIO — auto baseline-only when endpoint is set):
//!
//! ```bash
//! export S3_ENDPOINT_URL=http://127.0.0.1:9000
//! # optional explicit: export S3_TEST_CAPABILITIES=none
//! ```
//!
//! Example (force full Amazon S3 surface even with a custom endpoint):
//!
//! ```bash
//! export S3_TEST_CAPABILITIES=all
//! ```
//!
//! Tests call [`require_capability`] at the start of the body. If the capability
//! is not advertised, the test returns early with a skip message.
//!
//! **Harness note:** libtest still counts those tests as *passed* (there is no
//! stable runtime `#[ignore]`). To make skips visible, this module tracks them and
//! prints a **final capability-skip summary** after the test binary exits (via
//! `atexit` on Unix). Grep the log for `S3 capability skips` or
//! `SKIPPED (missing S3 capability`.

use std::collections::{BTreeMap, HashSet};
use std::io::Write;
use std::sync::{LazyLock, Mutex, Once};

/// eprintln + flush so messages appear before libtest's `ok` when stdout/stderr are pipes.
fn eprint_flushed(args: std::fmt::Arguments<'_>) {
    let mut err = std::io::stderr().lock();
    let _ = writeln!(err, "{args}");
    let _ = err.flush();
}

/// Optional S3 target features beyond the baseline object API.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum S3Capability {
    /// ListObjectsV2 returns `ChecksumAlgorithm` when the client requests
    /// `OptionalObjectAttributes=Checksum` (Amazon S3). MinIO accepts checksums on
    /// PutObject but does not surface them on list.
    ListObjectChecksums,

    /// GetObject returns object checksum headers / trailer values for objects
    /// uploaded with a checksum algorithm.
    GetObjectChecksums,

    /// Object keys may contain consecutive slashes (`//`). Amazon S3 allows this;
    /// MinIO rejects it as `XMinioInvalidObjectName`.
    DoubleSlashObjectKeys,

    /// Object keys with arbitrary special / URL-encoding-sensitive characters.
    /// Some S3-compatible servers reject or mishandle these.
    SpecialCharacterObjectKeys,

    /// Object keys (or individual path components) longer than ~255 bytes up to Amazon S3's
    /// 1024-byte limit. MinIO rejects path components longer than 255 as `XMinioInvalidObjectName`.
    LongObjectKeys,

    /// Flat namespace: object key `X` may coexist with keys under prefix `X/` (Amazon S3).
    /// MinIO's hierarchical model silently drops nested keys when parent object `X` exists.
    ConflictingObjectAndPrefix,

    /// IAM session policies / assume-role style restricted credentials
    /// (tests that need `S3_SUBSESSION_IAM_ROLE`, etc.).
    IamSessionPolicies,

    /// Server-side encryption metadata (SSE-S3 / SSE-KMS) on PutObject / HeadObject
    /// as returned by Amazon S3.
    ServerSideEncryption,

    /// Non-`STANDARD` storage classes (e.g. `GLACIER`, `INTELLIGENT_TIERING`).
    StorageClasses,

    /// Incomplete multipart uploads are listed by ListMultipartUploads after an
    /// aborted writer (Amazon S3). Some S3-compatible servers do not.
    ListMultipartUploads,

    /// Uploading with a deliberately wrong checksum yields `BadChecksum` (Amazon S3).
    RejectBadUploadChecksum,

    /// Append (`WriteOffsetBytes`) on a general purpose bucket fails with
    /// `NotImplemented` (Amazon S3). Compatible servers may return a different error.
    RejectAppendOnStandardBucket,

    /// S3 Access Points / Object Lambda / Multi-Region Access Points
    /// (tests need `S3_ACCESS_POINT_*`, `S3_OLAP_*`, `S3_MRAP_ARN`, etc.).
    AccessPoints,

    /// GetObjectAttributes API with Amazon S3 response shape (parts, checksums, …).
    GetObjectAttributes,

    /// Glacier / restore lifecycle (`RestoreObject`, `RestoreStatus` on HeadObject).
    ObjectRestore,

    /// S3 Transfer Acceleration endpoints.
    TransferAcceleration,

    /// Dual-stack (IPv6) endpoints.
    DualStack,

    /// FIPS endpoints.
    Fips,

    /// Binding the CRT client to specific host network interfaces (EC2 ENIs).
    NetworkInterfaces,

    /// Client metrics that assume Amazon S3 hostnames (`*.amazonaws.com`).
    AwsS3Hostnames,

    /// Cross-region endpoint / permanent redirect behavior for wrong `S3_REGION`.
    RegionRedirects,
}

impl S3Capability {
    pub const fn as_str(self) -> &'static str {
        match self {
            Self::ListObjectChecksums => "list_object_checksums",
            Self::GetObjectChecksums => "get_object_checksums",
            Self::DoubleSlashObjectKeys => "double_slash_object_keys",
            Self::SpecialCharacterObjectKeys => "special_character_object_keys",
            Self::LongObjectKeys => "long_object_keys",
            Self::ConflictingObjectAndPrefix => "conflicting_object_and_prefix",
            Self::IamSessionPolicies => "iam_session_policies",
            Self::ServerSideEncryption => "server_side_encryption",
            Self::StorageClasses => "storage_classes",
            Self::ListMultipartUploads => "list_multipart_uploads",
            Self::RejectBadUploadChecksum => "reject_bad_upload_checksum",
            Self::RejectAppendOnStandardBucket => "reject_append_on_standard_bucket",
            Self::AccessPoints => "access_points",
            Self::GetObjectAttributes => "get_object_attributes",
            Self::ObjectRestore => "object_restore",
            Self::TransferAcceleration => "transfer_acceleration",
            Self::DualStack => "dual_stack",
            Self::Fips => "fips",
            Self::NetworkInterfaces => "network_interfaces",
            Self::AwsS3Hostnames => "aws_s3_hostnames",
            Self::RegionRedirects => "region_redirects",
        }
    }

    pub fn parse(name: &str) -> Option<Self> {
        match name.trim() {
            "list_object_checksums" => Some(Self::ListObjectChecksums),
            "get_object_checksums" => Some(Self::GetObjectChecksums),
            "double_slash_object_keys" => Some(Self::DoubleSlashObjectKeys),
            "special_character_object_keys" => Some(Self::SpecialCharacterObjectKeys),
            "long_object_keys" => Some(Self::LongObjectKeys),
            "conflicting_object_and_prefix" => Some(Self::ConflictingObjectAndPrefix),
            "iam_session_policies" => Some(Self::IamSessionPolicies),
            "server_side_encryption" => Some(Self::ServerSideEncryption),
            "storage_classes" => Some(Self::StorageClasses),
            "list_multipart_uploads" => Some(Self::ListMultipartUploads),
            "reject_bad_upload_checksum" => Some(Self::RejectBadUploadChecksum),
            "reject_append_on_standard_bucket" => Some(Self::RejectAppendOnStandardBucket),
            "access_points" => Some(Self::AccessPoints),
            "get_object_attributes" => Some(Self::GetObjectAttributes),
            "object_restore" => Some(Self::ObjectRestore),
            "transfer_acceleration" => Some(Self::TransferAcceleration),
            "dual_stack" => Some(Self::DualStack),
            "fips" => Some(Self::Fips),
            "network_interfaces" => Some(Self::NetworkInterfaces),
            "aws_s3_hostnames" => Some(Self::AwsS3Hostnames),
            "region_redirects" => Some(Self::RegionRedirects),
            _ => None,
        }
    }

    pub fn all() -> &'static [Self] {
        &[
            Self::ListObjectChecksums,
            Self::GetObjectChecksums,
            Self::DoubleSlashObjectKeys,
            Self::SpecialCharacterObjectKeys,
            Self::LongObjectKeys,
            Self::ConflictingObjectAndPrefix,
            Self::IamSessionPolicies,
            Self::ServerSideEncryption,
            Self::StorageClasses,
            Self::ListMultipartUploads,
            Self::RejectBadUploadChecksum,
            Self::RejectAppendOnStandardBucket,
            Self::AccessPoints,
            Self::GetObjectAttributes,
            Self::ObjectRestore,
            Self::TransferAcceleration,
            Self::DualStack,
            Self::Fips,
            Self::NetworkInterfaces,
            Self::AwsS3Hostnames,
            Self::RegionRedirects,
        ]
    }
}

impl std::fmt::Display for S3Capability {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str(self.as_str())
    }
}

#[derive(Debug)]
struct CapabilitySet {
    /// When true, every capability is enabled.
    all: bool,
    enabled: HashSet<S3Capability>,
}

impl CapabilitySet {
    fn from_env() -> Self {
        let set = match std::env::var("S3_TEST_CAPABILITIES") {
            // Unset → auto based on whether a custom endpoint is configured.
            Err(_) => {
                if custom_endpoint_configured() {
                    // MinIO / LocalStack / other S3-compatible servers.
                    Self {
                        all: false,
                        enabled: HashSet::new(),
                    }
                } else {
                    // Real Amazon S3 (CI default).
                    Self {
                        all: true,
                        enabled: HashSet::new(),
                    }
                }
            }
            Ok(raw) => {
                let raw = raw.trim();
                if raw.is_empty() || raw.eq_ignore_ascii_case("none") {
                    Self {
                        all: false,
                        enabled: HashSet::new(),
                    }
                } else if raw.eq_ignore_ascii_case("all") {
                    Self {
                        all: true,
                        enabled: HashSet::new(),
                    }
                } else {
                    let mut enabled = HashSet::new();
                    for part in raw.split(',') {
                        let part = part.trim();
                        if part.is_empty() {
                            continue;
                        }
                        if part.eq_ignore_ascii_case("all") {
                            return Self {
                                all: true,
                                enabled: HashSet::new(),
                            };
                        }
                        if part.eq_ignore_ascii_case("none") {
                            continue;
                        }
                        match S3Capability::parse(part) {
                            Some(cap) => {
                                enabled.insert(cap);
                            }
                            None => {
                                let known: Vec<_> = S3Capability::all().iter().map(|c| c.as_str()).collect();
                                panic!(
                                    "unknown S3_TEST_CAPABILITIES entry {part:?}; expected `all`, `none`, or one of: {}",
                                    known.join(", ")
                                );
                            }
                        }
                    }
                    Self { all: false, enabled }
                }
            }
        };

        eprint_flushed(format_args!(
            "S3_TEST_CAPABILITIES effective: {} (S3_ENDPOINT_URL set: {})",
            set.describe(),
            custom_endpoint_configured()
        ));
        set
    }

    fn describe(&self) -> String {
        if self.all {
            "all".to_string()
        } else if self.enabled.is_empty() {
            "none".to_string()
        } else {
            let mut names: Vec<_> = self.enabled.iter().map(|c| c.as_str()).collect();
            names.sort_unstable();
            names.join(",")
        }
    }

    fn has(&self, cap: S3Capability) -> bool {
        self.all || self.enabled.contains(&cap)
    }
}

/// True when tests are pointed at a non-default endpoint (MinIO, LocalStack, …).
fn custom_endpoint_configured() -> bool {
    std::env::var("S3_ENDPOINT_URL")
        .ok()
        .filter(|s| !s.trim().is_empty())
        .is_some()
}

static CAPABILITIES: LazyLock<CapabilitySet> = LazyLock::new(CapabilitySet::from_env);

/// Per-process record of capability-based test skips (for the end-of-run summary).
#[derive(Debug, Default)]
struct SkipStats {
    /// How many times each capability caused a skip.
    by_capability: BTreeMap<&'static str, usize>,
    /// `(test_thread_name, capability)` — one entry per distinct pair.
    tests: BTreeMap<String, BTreeMap<&'static str, usize>>,
    total: usize,
}

static SKIP_STATS: LazyLock<Mutex<SkipStats>> = LazyLock::new(|| Mutex::new(SkipStats::default()));
static ATEXIT_REGISTERED: Once = Once::new();

fn register_skip_summary_atexit() {
    ATEXIT_REGISTERED.call_once(|| {
        // libtest prints `test result: …` from main; atexit runs after that so the
        // skip summary appears as the final block of the test binary's output.
        #[cfg(unix)]
        {
            // libc is already linked via the CRT; avoid a hard dependency just for atexit.
            unsafe extern "C" {
                fn atexit(cb: extern "C" fn()) -> i32;
            }
            extern "C" fn atexit_print_skip_summary() {
                print_capability_skip_summary();
            }
            // SAFETY: callback is a plain extern "C" fn with no captures; atexit is
            // process-global and safe to call once.
            let rc = unsafe { atexit(atexit_print_skip_summary) };
            if rc != 0 {
                eprintln!("warning: failed to register S3 capability skip summary (atexit rc={rc})");
            }
        }
        #[cfg(not(unix))]
        {
            // No portable atexit without extra deps; summary only on Unix CI/dev hosts.
        }
    });
}

fn record_skip(cap: S3Capability) {
    register_skip_summary_atexit();

    let test_name = std::thread::current().name().unwrap_or("<unknown-test>").to_string();
    let cap_name = cap.as_str();

    if let Ok(mut stats) = SKIP_STATS.lock() {
        stats.total += 1;
        *stats.by_capability.entry(cap_name).or_insert(0) += 1;
        *stats.tests.entry(test_name).or_default().entry(cap_name).or_insert(0) += 1;
    }
}

/// Print the capability-skip summary (also registered via `atexit` on Unix).
///
/// Safe to call multiple times; useful for non-Unix or when embedding a custom harness.
pub fn print_capability_skip_summary() {
    let Ok(stats) = SKIP_STATS.lock() else {
        return;
    };
    if stats.total == 0 {
        return;
    }

    let effective = CAPABILITIES.describe();
    let endpoint = custom_endpoint_configured();

    let mut by_cap = String::new();
    for (cap, count) in &stats.by_capability {
        by_cap.push_str(&format!("    {cap}: {count}\n"));
    }

    let mut tests = String::new();
    for (test, caps) in &stats.tests {
        let mut parts: Vec<String> = caps
            .iter()
            .map(|(c, n)| {
                if *n > 1 {
                    format!("{c} (×{n})")
                } else {
                    (*c).to_string()
                }
            })
            .collect();
        parts.sort();
        tests.push_str(&format!("    - {test}\n        missing: {}\n", parts.join(", ")));
    }

    // One write so the block is not interleaved with other writers when stdout/stderr
    // are merged (e.g. `2>&1 | tee`). Flush stdout first so libtest's final lines are
    // more likely to appear before this block when they were only buffered.
    let _ = std::io::stdout().flush();
    std::thread::sleep(std::time::Duration::from_millis(20));

    let block = format!(
        "\n\
         ========================================================================\n\
         S3 capability skips (libtest still counts these tests as PASSED)\n\
         ------------------------------------------------------------------------\n\
           S3_TEST_CAPABILITIES effective: {effective}\n\
           S3_ENDPOINT_URL set: {endpoint}\n\
           Total skip events: {total}\n\
           Distinct tests that skipped: {n_tests}\n\
         \n\
           By missing capability:\n\
         {by_cap}\
         \n\
           Tests:\n\
         {tests}\
         \n\
           Tip: set S3_TEST_CAPABILITIES=all (or a comma-separated list) to run them.\n\
           Grep logs for: SKIPPED (missing S3 capability\n\
         ========================================================================\n",
        total = stats.total,
        n_tests = stats.tests.len(),
    );

    let mut err = std::io::stderr().lock();
    let _ = err.write_all(block.as_bytes());
    let _ = err.flush();

    // One-line stdout note so the skip is visible even if stderr is ignored.
    let mut out = std::io::stdout().lock();
    let _ = writeln!(
        out,
        "note: {} S3 capability skip(s) across {} test(s) — see 'S3 capability skips' summary (counted as passed)",
        stats.total,
        stats.tests.len()
    );
    let _ = out.flush();
}

/// Returns whether the test target advertises `cap`.
pub fn has_capability(cap: S3Capability) -> bool {
    CAPABILITIES.has(cap)
}

/// Returns `true` if the test should proceed. When `false`, the caller must `return`
/// (the skip was already logged and will appear in the end-of-run summary).
///
/// ```ignore
/// if !require_capability(S3Capability::ListObjectChecksums) {
///     return;
/// }
/// ```
///
/// **Note:** libtest has no stable runtime "ignore", so skipped tests still show as
/// `ok` / passed. A final summary is printed when the process exits (Unix `atexit`).
pub fn require_capability(cap: S3Capability) -> bool {
    if has_capability(cap) {
        return true;
    }
    record_skip(cap);
    // Prefix is easy to grep; libtest still prints `ok` after the test body returns.
    eprint_flushed(format_args!(
        "SKIPPED (missing S3 capability `{cap}`): set S3_TEST_CAPABILITIES to include it, \
         or `all` (current effective: {}; endpoint set: {})",
        CAPABILITIES.describe(),
        custom_endpoint_configured()
    ));
    false
}

/// Join a test prefix (empty, or trailing `/`) and object name without introducing `//`.
///
/// Prefer this over `format!("{{prefix}}/{{name}}")` when the prefix already ends with `/`.
/// An empty prefix is allowed (mock fuse sessions often use `""` as the mount prefix).
pub fn object_key(prefix: &str, name: &str) -> String {
    let name = name.trim_start_matches('/');
    if prefix.is_empty() {
        return name.to_string();
    }
    debug_assert!(prefix.ends_with('/'), "test prefixes must end with '/': {prefix:?}");
    format!("{prefix}{name}")
}

/// Like [`object_key`], but requires [`S3Capability::DoubleSlashObjectKeys`] when the
/// resulting key would contain `//` (e.g. name starts with `/` after join intent).
///
/// For intentionally awkward keys that embed `//` inside the name component.
pub fn object_key_with_capability_check(prefix: &str, name: &str) -> Option<String> {
    let key = object_key(prefix, name);
    if key.contains("//") && !has_capability(S3Capability::DoubleSlashObjectKeys) {
        eprintln!(
            "skipping test: object key {key:?} contains '//' and capability `{}` is not set",
            S3Capability::DoubleSlashObjectKeys
        );
        return None;
    }
    Some(key)
}
