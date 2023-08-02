window.BENCHMARK_DATA = {
  "lastUpdate": 1690989817044,
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
          "id": "c90fe480c5562bbbeda7426f3c91c8d59861c8fc",
          "message": "Update inode status on fsync or write failure (#395)\n\n* Update inode status on fsync\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove sleep calls in tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove additional sleep calls\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-24T15:28:44Z",
          "tree_id": "211a1b6ca8bb7d523aaff0925b54db9b6031d910",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c90fe480c5562bbbeda7426f3c91c8d59861c8fc"
        },
        "date": 1690214785586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.888,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.6333704,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.8607041,
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
          "id": "33fe81ff551ebd0031c94ca9f8761ed6e1a70c60",
          "message": "Bump some dependencies to mostly remove `atty` (#403)\n\n* Bump some dependencies to mostly remove `atty`\n\nIt's no longer in our release dependency closure, but still in the test\nclosure through two sources:\n* fuser uses clap v3 in its examples, which still depends on atty\n* fuser uses env-logger v0.9 in its examples, which still depends on\n  atty\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix list example\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T17:24:51Z",
          "tree_id": "3ce625cb4e3cf9507d942c71cf1d6e158613c49e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33fe81ff551ebd0031c94ca9f8761ed6e1a70c60"
        },
        "date": 1690221399407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.4471653,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.7174329,
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
          "id": "147f0b3448be5b0cbeeb081ca3ee940420a81e53",
          "message": "Adds support for storage class in client (#406)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-25T12:51:17Z",
          "tree_id": "d7bf7d38c7ef3913bc3bba6c4fc8322e14ed30c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/147f0b3448be5b0cbeeb081ca3ee940420a81e53"
        },
        "date": 1690291388442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.102,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.716,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.0355165,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.193048299999994,
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
          "id": "c40ff340fcde9c6500d57982578bdcc4384a31f6",
          "message": "Update CRT submodules to latest releases (#407)\n\n* Update CRT\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update UPDATING_CRT.md to show diff for all CRT submodules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-25T12:53:01Z",
          "tree_id": "29af0fbd4d978fe3466394ae1a717140c62f41fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c40ff340fcde9c6500d57982578bdcc4384a31f6"
        },
        "date": 1690291401296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.516,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.0094647,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.9825278,
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
          "id": "173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a",
          "message": "fs: refactor to use a structured error type (#405)\n\nToday the `fs` layer's methods all return `libc::c_int`, which means the\nconversion to errno happens here. This throws away a lot of error\ninformation, and we find ourselves adding ad-hoc calls to `error!` to\nsave context we think is important.\n\nThis change refactors `fs`'s methods to return a new structured `Error`\ntype, which still includes the errno `c_int` but also a message and an\noptional source (an `anyhow::Error`). We could almost use\n`anyhow::Error` directly except that we need the errno conversion and\nwe'd like to attach a little extra context message to the errors. We\nconstruct this wrapper with a new `err!` macro that puts the message and\nsource in the right place.\n\nThis change removes the ad-hoc `error!` logging we were using in a few\nplaces in `fs` previously. I'll follow it up with another change that\nadds a new proc macro to annotate every `fs` function to automatically\nprint its error in failure cases, which will return these log messages\nand also add all the missing ones.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T15:03:35Z",
          "tree_id": "69a1c19d604bc27496bf24071621d04f7eab91d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a"
        },
        "date": 1690299097271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.849,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.8717515,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.5371491,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c419a6e86d6c32b5ceaf2c700291072754b4d9fa",
          "message": "Endpoint Resolver for each request (#396)\n\n* Included endpointConfig in S3Client and updated with latest codbase\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added regex for ARN and added region retries for special requests like transfer acceleration MRAP etc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the comment for ARN supporting Regex\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the path prefix of endpoint uri\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added specific regex for ARN matching\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary error cases and added arn bucket name test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Made a few changes according to recommendation\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added tests for ARN, still need to exclude objects from it\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added all the recommendations, some tests left\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added unit tests for endpoint config\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected borrowing\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed arg group of addressing style\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved error message for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes in ChangeLog for mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected gramatical mistake in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Simplified ARN even further\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added failure test for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes recommended and failure test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Remove unnecessary assert_matches dependency\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T19:35:05Z",
          "tree_id": "f3c2c380ea22cc7c936a723b826c0920ba056abd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c419a6e86d6c32b5ceaf2c700291072754b4d9fa"
        },
        "date": 1690315571558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.234,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.97668540000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.5566113,
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
          "id": "47d06c127d482212b89291ffc62a3604169c5db6",
          "message": "Fix region detection with specified region (#409)\n\n* Fix region detection with specified region\n\nWe weren't setting the region in the endpoint config if it was specified\nmanually. This passed our tests because it was defaulting to us-east-1\nand that's where our CI is. Instead, let's start with an obviously wrong\nplaceholder region and fill it in when creating the client.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix warning message\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T10:32:22Z",
          "tree_id": "1f8f7ef8166bb0826a3dfe764d766c116237b52b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47d06c127d482212b89291ffc62a3604169c5db6"
        },
        "date": 1690369868089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.186,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.6899559,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.968576799999994,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dfc30c1d591b273274ec870af9caf8a34dd3ca0",
          "message": "Adds storage class (#400)\n\n* Adds in support to configure storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* removes default storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds integration tests\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* changes as per review comments\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fix lint error\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds in tests for mock client\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* removes unused imports\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* return storage class in option\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* throw error if obj not found\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2023-07-26T14:22:08Z",
          "tree_id": "5820419ade3f78e5eb2a31b92c87f32bdd726f69",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dfc30c1d591b273274ec870af9caf8a34dd3ca0"
        },
        "date": 1690383311425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.162,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.04148070000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.2295033,
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
          "distinct": false,
          "id": "c1720bc41e22cf9c199285151218e0c41dd21200",
          "message": "Add flags for logging configuration (#404)\n\nThis simplifies how we ask customers to configure logging by no longer\nexposing them to RUST_LOG or filtering directives. Instead, we add a\n`--debug` flag to enable verbose logs, and `--debug-crt` to enable\nverbose CRT logs (which are spammier). We also add a `--no-log` flag to\ncompletely turn off logging, and `--log-metrics` to emit the summarized\nperformance metrics.\n\nThis change also fixes a bug in the syslog implementation with events\nthat come via `tracing-log` (the adapter for emitting `tracing` events\nfrom the `log` facade). We use this adapter for adapting CRT logs into\n`tracing`, since `tracing` is very picky about log events having static\nmetadata but CRT logs are necessarily dynamic. The `tracing-log` adapter\nrecords metadata in some custom fields, which we weren't correctly\nhandling, so our log messages had the wrong `target` and a bunch of\nextra fields. This change is annoying to write a test for because `log`\nis global, but I tested it manually.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:23:44Z",
          "tree_id": "c103b9eae65b848eb73ab31a92e460e33a8a970c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c1720bc41e22cf9c199285151218e0c41dd21200"
        },
        "date": 1690387114533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.467,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.58790859999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.6444631,
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
          "id": "3832ccadee82326a9adb19e38322bdbe6ff9bec5",
          "message": "fuse: log all operation failures (#408)\n\nI was going to do this in a proc macro but this is way simpler. This\njust follows up on #404 by recording all the errors, using a small macro\nin place of the existing calls to `reply.error(libc::c_int)`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T15:24:22Z",
          "tree_id": "6b928023b6fda77ffd055facd6f5e634ac98fd16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3832ccadee82326a9adb19e38322bdbe6ff9bec5"
        },
        "date": 1690387151185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.312,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.0277925,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.851445,
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
          "id": "c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a",
          "message": "Add S3_SUBSESSION_IAM_ROLE environment variable (#412)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T17:15:13Z",
          "tree_id": "36fd375f542617b4e3c07587e8aed7c3ed5b3260",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2bdecb01f2fd99e20c6b285169d6e4d840c0a2a"
        },
        "date": 1690393758572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.514,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.5009041,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.7914713,
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
          "id": "54851a95c609bcae7226cecb198d0a9fb9b59679",
          "message": "Add new subsession IAM role for auth integration tests (#410)\n\nWe want to be able to write tests with various permutations of IAM\ncredentials and policies (read only, prefix only, etc). Rather than\nmanually building new infrastructure for them, we're creating a single\nnew IAM role that tests can call AssumeRole on, using a session policy\nto scope down the credentials to those they want to test.\n\nI'll be using this in a follow-up commit to switch from HeadBucket to\nListObjects for region detection. I suspect we can also use it to get\nrid of our \"forbidden\" bucket, but don't plan on doing that right now.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T18:10:21Z",
          "tree_id": "ca4cf30996edbb4fad5511fa24b4b1de3b9e2ee2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54851a95c609bcae7226cecb198d0a9fb9b59679"
        },
        "date": 1690396902289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.209,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.419,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.1858736,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.0150985,
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
          "distinct": false,
          "id": "df4087bd63de7ff31984d9cc0e4a0db951359c11",
          "message": "Use ListObjectsV2 instead of HeadBucket for region detection  (#413)\n\n* Refactor error handling for S3CrtClient\n\nThere are some generic errors like region redirects and permissions that\nwe'd like to parse in only one place rather than all over the code. This\nchange moves those errors to S3RequestError and rejigs the parsing code\nappropriately.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Use ListObjectsV2 instead of HeadBucket for region detection\n\nHeadBucket requires `s3:ListBucket` permissions for the root of the\nbucket, but some customers scope their users' access down to only a\nprefix of the bucket. This makes it impossible for them to use prefix\nmounts today. Instead, we want to use ListObjects on the prefix as the\nregion detection mechanism.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:19:15Z",
          "tree_id": "233f258f7f59f2628e626917305d3675d057bebe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df4087bd63de7ff31984d9cc0e4a0db951359c11"
        },
        "date": 1690496763154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.377,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.2173245,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.210845,
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
          "id": "cfe1f39bb2d7ebb32b6dd1a43134466578814df5",
          "message": "Present flexible retrieval objects with 000 permissions (#414)\n\n* Present flexible retrieval objects with 000 permissions\n\nObjects in the Glacier Flexible Retrieval and Glacier Deep Archive\nstorage classes (and their corresponding Intelligent Tiering tiers) are\nnot readable with GetObject without first triggering a restoration. We\ndon't offer the ability to do that (and it likely wouldn't make sense\nfor us given the latency), but these objects will still appear in the\nfile tree, so we give them 000 permissions and EACCES failures to make\nclear they're not accessible.\n\nIt would be nice to make this work for objects that have already been\nrestored, which still carry the GLACIER/DEEP_ARCHIVE storage class but\nalso return their restore state with HeadObject. But ListObjectsV2 gives\nus no way to find that out. We could probably make this work since we\nknow we always send a HeadObject on `open`, but it was more work than I\nwanted to do right now, and this at least prevents customers getting EIO\nerrors on these objects.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Intern storage classes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:54:03Z",
          "tree_id": "1eea8fe286a302fcd81ba7a923458cb378dd3a29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfe1f39bb2d7ebb32b6dd1a43134466578814df5"
        },
        "date": 1690496816449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.285,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.8216756,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.1393615,
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
          "id": "d6b530f3dc6d5ea5c5c50e79afad283da16333a6",
          "message": "Dynamically scale fuse threads (#411)\n\n* Update vendored fuser to 07f1987\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Dynamically scale fuse threads\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Replace --thread-count with --max-threads\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update benchmark scripts\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-28T18:41:35Z",
          "tree_id": "0066a6468f3ac391fa53698f63152e4a4e7c438c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d6b530f3dc6d5ea5c5c50e79afad283da16333a6"
        },
        "date": 1690571720302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.161,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.9086966,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.5444695,
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
          "id": "0beb3227c1a1eedc2264ae2a2052c32719d9cf0d",
          "message": "Fix clippy error on macOS (#421)\n\nlibc::mode_t has a different width on macOS (u16 vs u32), so we need to cast the result of metadata.permissions().mode() before masking it.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-31T15:19:42Z",
          "tree_id": "0af61f336418dc1f5a4fcc863f647e887e6f1666",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0beb3227c1a1eedc2264ae2a2052c32719d9cf0d"
        },
        "date": 1690819235044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.941,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.40934159999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.9070582,
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
          "id": "a39424cfb842bd4e0df3137da784b8ec4c430945",
          "message": "Revamp semantics documentation (#418)\n\nThis tries to extract a higher-level story for the semantics\ndocumentation to lead with. It covers updates we've made since alpha,\nincluding consistency and durability.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-31T18:55:30Z",
          "tree_id": "e6e6ba6fca02968968374371d7b98ac41d64e2c3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a39424cfb842bd4e0df3137da784b8ec4c430945"
        },
        "date": 1690831813119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.099,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.2829103,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.8638087,
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
          "id": "a0060db02f54c73fd7b5cace76144b52c2694559",
          "message": "Build infrastructure for release packages (#420)\n\n* Build infrastructure for release packages\n\nThis commit adds a first pass at build infrastructure for assembling\nMountpoint releases. It builds RPM and DEB packages and a tar.gz archive\nfor distributions that don't use those package managers. The RPM and DEB\nare preferred because they check for the necessary dependencies.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Rename `release` -> `package`\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-01T15:51:50Z",
          "tree_id": "80caf928316d4df1ca13b81e8377b0b1b3a4a57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0060db02f54c73fd7b5cace76144b52c2694559"
        },
        "date": 1690907321906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.064,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.888456,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.9156641,
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
          "id": "c61d0cbca272f652fd11314a7d1e12453954067c",
          "message": "Prepare release workflow (#424)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-02T10:07:58-05:00",
          "tree_id": "0a7e9aa1670e9a62ddecde703ea8c1d96152ad00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c61d0cbca272f652fd11314a7d1e12453954067c"
        },
        "date": 1690989530793,
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
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 119.6654746,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.591325600000005,
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
          "id": "10110867188a2a53c6dd9c81a63e1b8cad9fdea6",
          "message": "Bump version of mountpoint-s3 to v0.4.0 (#425)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-08-02T10:13:13-05:00",
          "tree_id": "8bd870fb7566d745b9ac16d87bfd7e0891779362",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10110867188a2a53c6dd9c81a63e1b8cad9fdea6"
        },
        "date": 1690989816408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.458,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.7842377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.1580712,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}