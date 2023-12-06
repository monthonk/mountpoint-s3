window.BENCHMARK_DATA = {
  "lastUpdate": 1701860487711,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6922c9c0c322982705f9d07c9458c22dc33f007e",
          "message": "Add file system details to cache doc (#625)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-22T17:58:25Z",
          "tree_id": "18d183ecfcb31c468d0358a9da69863c2db64ff1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6922c9c0c322982705f9d07c9458c22dc33f007e"
        },
        "date": 1700677846365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.554,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.6295926,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.32641629999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801e4c175cb85e21f713cf919e0f18ac8d2a9188",
          "message": "Add scripts to validate a release package (#626)\n\n* Add scripts to validate a release package\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Set executable bit\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add minimal readme\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-23T09:36:06Z",
          "tree_id": "f23812c080a69ac38b47504b513d2b14dd06d62a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/801e4c175cb85e21f713cf919e0f18ac8d2a9188"
        },
        "date": 1700734082962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.103,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.265,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.647907,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.2151068,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f2860e74cd35681747a4c677c18776b5bd476021",
          "message": "Update cache directory to create content with MP owner access only (#637)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T10:10:10Z",
          "tree_id": "863597d1f9a4643af8bc0652345f3503233677b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2860e74cd35681747a4c677c18776b5bd476021"
        },
        "date": 1701168154357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.67,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 126.3754289,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 86.8557153,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3521f3de23dbbc9aaa752d5d29c88ef0a5e566c",
          "message": "Update CRT submodules to latest releases (#633)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update aws_s3_request_type bindings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T10:19:29Z",
          "tree_id": "ff7a34643526791088e8c5edb1c433a329640947",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3521f3de23dbbc9aaa752d5d29c88ef0a5e566c"
        },
        "date": 1701170474249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.391,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.6396907,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.7779776,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0245bc6c167bde595fa9a173eb689af71aabf244",
          "message": "Create .gitallowed for allowlisting secrets for git-secrets (#638)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T11:19:28Z",
          "tree_id": "088f6a8b81d39c514e33260593b79a3651df52e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0245bc6c167bde595fa9a173eb689af71aabf244"
        },
        "date": 1701172281853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.098,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.473,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.9693783,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.916488799999996,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "042a710a17576879ede1bc4a42712b5b84c22600",
          "message": "Update CRT submodules to latest releases (#641)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-11-28T15:42:18Z",
          "tree_id": "83650ef352ad65f2ab99bac688fbb7dc7ca72d53",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/042a710a17576879ede1bc4a42712b5b84c22600"
        },
        "date": 1701186796358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.437,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.910663,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.99384429999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4146fa3f33b332fa0625cd5142108ca64cc7cdc",
          "message": "Support S3 Express One Zone (#642)\n\n* Support S3 Express One Zone\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Implement support for unordered readdir\r\n\r\nListObjectsV2 is unordered on S3 Express. This is an issue for our\r\nshadowing semantics in readdir, which does a merge-sort of the local and\r\nremote keys, assuming they're both ordered.\r\n\r\nWe are going to give up on readdir being ordered on Express -- it's not\r\nrequired by VFS, and the alternative would be to buffer all directory\r\nentries in memory before returning any, which would be too expensive on\r\nlarge directories. So this change introduces a new unordered variant of\r\nthe readdir implementation. It just returns directory entries verbatim\r\nfrom ListObjectsV2, and then returns all otherwise-unreturned local\r\nentries at the end of the iterator.\r\n\r\nDoing this requires Mountpoint to know whether the bucket is a directory\r\nbucket or not, and so I added both a command-line flag and\r\nauto-detection for that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add new unordered list implementation that shuffles the entire prefix\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Add prefixed versions of list tests\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Small update to the test\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-28T16:05:35Z",
          "tree_id": "f88a94a2ab18a5f0296d364e55622f3b0d34f565",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4146fa3f33b332fa0625cd5142108ca64cc7cdc"
        },
        "date": 1701188184808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.316,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.07362020000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.39713429999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c34e70172e0b150b4e3b6246371109db00077ab4",
          "message": "Release new crate versions (#645)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-11-28T18:15:56Z",
          "tree_id": "a0b8dd24929bbe3533e8294048983ee728e79253",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c34e70172e0b150b4e3b6246371109db00077ab4"
        },
        "date": 1701196009197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.2348982,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8762798,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f25f323ed61b6a79f89b127ef3553beef460176",
          "message": "Exclude unused files from mountpoint-s3-crt-sys crate (#646)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T19:34:37Z",
          "tree_id": "d489e3876a4bf98bdb10b7b75a417d72ca38e7cc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3f25f323ed61b6a79f89b127ef3553beef460176"
        },
        "date": 1701200738977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.207,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.252,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.29633770000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.1697976,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "099638eede5fc34756e46b9eb6af6582c8fe1a55",
          "message": "Fix crash on invalid part size (#649)\n\n* Return CRT client initialization error instead of panicking\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of initialization errors\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-29T17:37:44Z",
          "tree_id": "5069f4802f987ff6745d34a3db6683c10762d804",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/099638eede5fc34756e46b9eb6af6582c8fe1a55"
        },
        "date": 1701281452820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.611,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.8071857,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 97.8556614,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc20c75bc036fae7b63675d7c00815c209024e87",
          "message": "Add workflow to verify crate packaging (#650)\n\n* Add workflow to verify crate packaging\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix indentation of workflow\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-30T08:58:13Z",
          "tree_id": "0b02989328a9c2a105759d10ae8777f034a07d2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc20c75bc036fae7b63675d7c00815c209024e87"
        },
        "date": 1701336612129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.103,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.414,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 112.0059377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.25144359999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "963258fbf9cea26adb93d69643f1fea5684288e1",
          "message": "Update CRT submodules to latest releases (#652)\n\n* Update CRT submodules to latest releases (aws-c-s3 0.4.3)\n\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 dc90010..de36fee:\n  > Bypass for CreateSession reqeust (#384)\n  > Mem limiter validation (#385)\n  > Fix tests to use net_test_case (#383)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update S3CrtClient test to reflect loosened part size constraint\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-30T12:12:11Z",
          "tree_id": "c994bd0895147c6c801639a60df7159b6943e938",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/963258fbf9cea26adb93d69643f1fea5684288e1"
        },
        "date": 1701348313034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.715,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.9438938,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.1259727,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7530462558e9edde1127cd8642ad3e7ce84e88a2",
          "message": "Release v1.3.1 (#654)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-30T16:40:36Z",
          "tree_id": "b49784de3208e570bc83a529f1572a75dd2a58b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7530462558e9edde1127cd8642ad3e7ce84e88a2"
        },
        "date": 1701364451977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.777,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.5666615,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 94.33559690000001,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bdf9dd20c89b712423baa58cb22554413484d7e",
          "message": "Add actions variables for S3 Express One Zone test (#648)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-01T12:04:16Z",
          "tree_id": "be62356cdb4bea6feb0f53213d88207632839c05",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5bdf9dd20c89b712423baa58cb22554413484d7e"
        },
        "date": 1701434489773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.140349,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.9615778,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53543a5e58adaf9ee962d990cb6af88fc3372817",
          "message": "Release new crate versions (#657)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-01T13:13:55Z",
          "tree_id": "bc76d407e8730cf2008342fa3e94e8a14db6b6f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53543a5e58adaf9ee962d990cb6af88fc3372817"
        },
        "date": 1701437114048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.696,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.4394499,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.584466899999995,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27bac02854e0290e2de057e0258f189c07ed0262",
          "message": "Add more details to CRT update guide (#655)\n\n* Add more details to CRT update guide\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Use numbered list with explicit numbered items\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note to check size of mountpoint-s3-crt-sys crate\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-01T17:49:31Z",
          "tree_id": "d473f55e39ae1a1739003df495090a4da135da3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27bac02854e0290e2de057e0258f189c07ed0262"
        },
        "date": 1701454876103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.583,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.40857129999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.2566788,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0b027d56d0ef63d168642d5da98135ddf34544e7",
          "message": "Update maintainer documentation for releasing new S3 client crates (#663)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-04T13:59:06Z",
          "tree_id": "a78750d6a4766c08105453b4a3f558ef3f40a327",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b027d56d0ef63d168642d5da98135ddf34544e7"
        },
        "date": 1701700330906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.29,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 109.60736920000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 107.88575940000001,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andres.santana@gmail.com",
            "name": "andres santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecc21622948f2315100f45fa5c69aff01975bb38",
          "message": "Fix intermittent issue with metrics tests. (#662)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2023-12-04T14:01:39Z",
          "tree_id": "8095c11895349cd83d6c4e39a8e9eb89e616c5a2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ecc21622948f2315100f45fa5c69aff01975bb38"
        },
        "date": 1701700835733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.287,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.7541186,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.1456284,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90f85a3b33cfc43e95e48559a0dba48329cfb1d7",
          "message": "Fix clippy warnings (#661)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-04T14:52:49Z",
          "tree_id": "43d906b8a5e7d26770b7b40390e363c3b7712458",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90f85a3b33cfc43e95e48559a0dba48329cfb1d7"
        },
        "date": 1701703871328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.959,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.3536787,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.1108344,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "64dc9c65685be417d323e1a6323baf9d91dbe675",
          "message": "Add S3 Express One Zone tests to the CI (#660)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-06T10:24:05Z",
          "tree_id": "e4c75a4b6e2107ecba0ef7290043b3e1b5fe6633",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/64dc9c65685be417d323e1a6323baf9d91dbe675"
        },
        "date": 1701860487175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.487,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.07815959999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 86.7150744,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}