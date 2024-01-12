window.BENCHMARK_DATA = {
  "lastUpdate": 1705091162979,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d",
          "message": "Add field for cli arguments to the bug report form (#640)\n\nAlso expand the description of the behavior field to include reproduction steps.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-07T20:07:03Z",
          "tree_id": "57bc12eef9422b1aa8bec61772e78d4d7e20b2b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d"
        },
        "date": 1701982184484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.857,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.9267514,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.14057940000001,
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
          "id": "b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa",
          "message": "Add docs clarifications about which FS operations can be served from cache and when (#627)\n\n* Add clarification on which file system operations can be served from cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on caching behavior with writing\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T00:56:42Z",
          "tree_id": "2970551ed2a78be52c844a5cc46c366976f8314e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa"
        },
        "date": 1701999654262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.6391196,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.8194725,
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
          "id": "863087df20e999f9e90c278ab0f0c7b8afa4e9fc",
          "message": "Add CRT error to CRT request logs, move CRT per-request logs to DEBUG (#669)\n\n* Add CRT error to underlying request log entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move all CRT request logging to debug even on error\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T01:04:11Z",
          "tree_id": "b3d5c9bfa42c7626519410fbcc30c5a11c34a7ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/863087df20e999f9e90c278ab0f0c7b8afa4e9fc"
        },
        "date": 1701999911552,
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
            "value": 1.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.528,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 56.252989799999995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.3632506,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6fdc7830e55f6b09ca665a2fca89795553d6b2d8",
          "message": "Print successful mount for both foreground and background modes. (#668)\n\nAlso, update documentation for the `--no-log` argument.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2023-12-08T10:22:05Z",
          "tree_id": "e993751de460027dbf8281ec0bd09e8d93f546b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6fdc7830e55f6b09ca665a2fca89795553d6b2d8"
        },
        "date": 1702033467436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.741,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.42644270000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.2797138,
            "unit": "milliseconds"
          }
        ]
      },
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
          "distinct": true,
          "id": "342b256e91430350f2a3fe7fd78af9e13749b05c",
          "message": "Update PyTorch example to support single files and different models (#603)\n\n* Update PyTorch example to support single files and different models\n\nWe'd like to expand our testing to single files rather than only sharded\nrepresentations. This change adds the ability to create and train\nagainst that style of dataset. It also adds some other useful\nconfigurations for Mountpoint training and for configuring a different\nmodel to train rather than hardcoding ResNet-50.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-12-08T10:26:29Z",
          "tree_id": "d9fb6337f0988581e3d04ac31f99c43f20a02871",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/342b256e91430350f2a3fe7fd78af9e13749b05c"
        },
        "date": 1702033705654,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.703,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.791033399999996,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.1038779,
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
          "id": "2fe70d0a0094d8636c1967e4b3e932f86a753b88",
          "message": "Update CRT submodules to latest releases (#672)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-10T20:21:30Z",
          "tree_id": "7e867ee2283598d5d29fb1107ddfe13dec071fe8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fe70d0a0094d8636c1967e4b3e932f86a753b88"
        },
        "date": 1702241841064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.108,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.5189386,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.658732,
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
          "id": "5e453f1ffcf05adec373fec51250fbf50c6d46c0",
          "message": "Introduce ObjectId type to reference specific versions of S3 objects (#673)\n\nThe new `ObjectId` type holds an S3 object key and etag to identify a specific version of an object. It is used in the data cache, where it is a 1-1 replacement for `CacheKey`, and also in the prefetcher, where it replaces the S3 key previously used in `Part`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-11T20:06:02Z",
          "tree_id": "a7dd52390bbb323993ca177d688b35f2e2ed9f91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e453f1ffcf05adec373fec51250fbf50c6d46c0"
        },
        "date": 1702327343966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.567,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 97.9298289,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 94.8045917,
            "unit": "milliseconds"
          }
        ]
      },
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
          "distinct": true,
          "id": "88e4397961f3fb84d2ed70c89b7a225125d297e3",
          "message": "Add a dirty indicator to version strings (#678)\n\nThis lets us distinguish between clean and dirty builds of a certain Git\nrevision, so we know whether to trust the Git revision in the string or\nnot. Tested by running `mount-s3 -V` and checking that it's dirty when\nmy Git repo is dirty and not dirty otherwise.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-12-15T10:14:51Z",
          "tree_id": "767247285e78b0469605def368fafd2609dba1fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/88e4397961f3fb84d2ed70c89b7a225125d297e3"
        },
        "date": 1702637495265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.771,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.259244,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.82172209999999,
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
          "id": "83fa7c654623cba34b44f99c3b8930b693ebd0b1",
          "message": "Update cargo dependencies (#679)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-15T12:12:02Z",
          "tree_id": "9c0bddd464f64f4f8a2333987aac091b27518cf6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/83fa7c654623cba34b44f99c3b8930b693ebd0b1"
        },
        "date": 1702644200294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.392,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.595624,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.35619629999999,
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
          "id": "374a0f233c9ea890081d510bdbc6fb0bfca3d68d",
          "message": "Resolve clippy warnings introduced in Rust 1.75.0 (#686)\n\n* Appease clippy\n\nMaking changes based on new clippy rules.\nChanges are seen for the following update:\n\n    stable-x86_64-apple-darwin updated - rustc 1.75.0 (82e1608df 2023-12-21) (from rustc 1.74.1 (a28077b28 2023-12-04))\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Simplify tuple ref mapping\n\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-02T11:03:03Z",
          "tree_id": "e4703fd4c93b2ec53fa94cd6992d4d739c1fbfb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/374a0f233c9ea890081d510bdbc6fb0bfca3d68d"
        },
        "date": 1704195682645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.125,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.0896362,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.8284619,
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
          "id": "45414a235abf7463669daae41e0f37bc2fcd7531",
          "message": "Rework ChecksummedBytes internals to use a Range instead of a Bytes slice (#687)\n\n* Rework ChecksummedBytes internals to use a Range instead of a Bytes slice\n\nPreliminary refactor to prepare for adding integrity checks on the range itself. No changes in behavior.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix rustdoc\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve setup of slice tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-03T14:10:49Z",
          "tree_id": "4d98745d37ea9b38f0eba213fa0e1ffdbdff0d99",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/45414a235abf7463669daae41e0f37bc2fcd7531"
        },
        "date": 1704293019781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.369,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.1028759,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.374354,
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
          "id": "5e41487a27fce641f3f07fbab1dae50ee56ec2d2",
          "message": "Prevent build on crate verify workflow (#685)\n\nThis prevents issues where some of the crates are updated but not published yet.\nCargo tries to build the crate using the version of its dependency on crates.io, as if its about to be published.\nIn many cases, we want to update our crates over a few commits before later publishing each of the crates together.\n\nExample of the issue: https://github.com/awslabs/mountpoint-s3/actions/runs/7356232845/job/20026056240?pr=684#step:5:229\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-03T15:35:31Z",
          "tree_id": "03fe8f49336932477cbffb25f01153283856764b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e41487a27fce641f3f07fbab1dae50ee56ec2d2"
        },
        "date": 1704298080814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.333,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.7916535,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.7559376,
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
          "id": "4af1f2dade5c51400211b3377854e4c7682f0cbc",
          "message": "Add contiguous reading metric to prefetcher (#629)\n\n* Add metric tracking contiguous read length\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add metric tracking contiguous read length\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update 'prefetch.contiguous_read_len' metric to be recorded on Drop\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-03T22:52:42Z",
          "tree_id": "da9313ef8f127094e947c0f0cf807eabf0476cc2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4af1f2dade5c51400211b3377854e4c7682f0cbc"
        },
        "date": 1704324268789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.628,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.3501465,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 73.7015767,
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
          "id": "f4b420b2c9476c1d796dd502050c57b98a20fd04",
          "message": "Tidy up ChecksummedBytes public methods (#689)\n\n* Refactor ChecksummedBytes::shrink_to_fit to mutate self\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Refactor ChecksummedBytes initialization methods\n\nMost callers can use `ChecksummedBytes::new(Bytes)` to create new instances, rather than calculating the checksum explicitly.\n\nThis change also tidies up some of the existing `ChecksummedBytes` tests.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-04T08:06:52Z",
          "tree_id": "50b73612c06b59360dfc173ed4182cc20f5d873b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4b420b2c9476c1d796dd502050c57b98a20fd04"
        },
        "date": 1704357517295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.125,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.53177070000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.03782109999999,
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
          "id": "024a7f4a11057dfbad6c106c2115999f8dc972dd",
          "message": "Fix version number tests (#690)\n\nUse a regex recommended by semver.org to verify the cli version output. The change allows tests to pass even on dirty Git repos, where version includes the \"-dirty\" indicator introduced in #678).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-05T02:32:02Z",
          "tree_id": "54b389c691bcebb5b3f738c8c6ea1d5c6b1e7911",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/024a7f4a11057dfbad6c106c2115999f8dc972dd"
        },
        "date": 1704423812569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.042,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.8827695,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.29091190000001,
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
          "id": "6e7252dd2e54932e277e5b5ee7000f9bc816a682",
          "message": "Replace callback in FS read with simple Result instead (#691)\n\n* Remove fs::read callback to return simple Result instead\n\nWe're making this change primarily due to the risk of a race condition introduced.\nBefore this change, we reply directly to the FUSE driver before exiting the fs module code.\nThe risk here is that we've already replied to the driver before we drop things like the file handle guard.\nAlbeit small, this is a race condition and we intend to remove it to avoid any risk from it.\n\nThis race condition is suspected to be the root cause for this issue\nwhere FUSE release fails unable to unwrap the file handle reference: https://github.com/awslabs/mountpoint-s3/issues/670\n\nThis race condition risk could have a large impact since the file handle holds a reference to prefetched data.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove ReadReplier trait\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-06T05:51:35Z",
          "tree_id": "37b07489030dd6dd437d9afd5cbf04796fd755d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e7252dd2e54932e277e5b5ee7000f9bc816a682"
        },
        "date": 1704522208816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.465,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.0885586,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 90.9179572,
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
          "id": "261257bee200616028d52f676859d84e64e79851",
          "message": "Update CRT submodules to latest releases (#692)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-08T12:13:40Z",
          "tree_id": "d290294d80c4d64112c9710739173df6205625bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/261257bee200616028d52f676859d84e64e79851"
        },
        "date": 1704718237501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.372,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 85.7594514,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.9923572,
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
          "id": "b9ca6b3d502ecd13690e46726139b206f19876b9",
          "message": "Add information about `--log-metrics` flag to logging documentation (#695)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-09T16:09:16Z",
          "tree_id": "dd5ab8859ad97114c6cf9fc6271918e03f798282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b9ca6b3d502ecd13690e46726139b206f19876b9"
        },
        "date": 1704818533452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.273,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.574,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.7320066,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.6351808,
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
          "id": "7dcaee0966ca20c91d86b0d8b1388bcc72a24c38",
          "message": "Release v1.3.2 (#697)\n\n* Release v1.3.2\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Remove line\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-11T14:42:57Z",
          "tree_id": "ef9f49ffae0ade6b9907e2d9ecf319cef22dc5c9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dcaee0966ca20c91d86b0d8b1388bcc72a24c38"
        },
        "date": 1704984815605,
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
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.621,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.9025929,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8053309,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93394c8f666453cf04e6824b5a81d1f0d80a1010",
          "message": "Set CI parameters for sse-kms tests (#698)\n\n* Set CI parameters for sse-kms tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-12T19:50:48Z",
          "tree_id": "3b01bef31d62b3da3bc425dd9744fbd5ae5d2371",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93394c8f666453cf04e6824b5a81d1f0d80a1010"
        },
        "date": 1705091162406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.37,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.6404995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.9921057,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}