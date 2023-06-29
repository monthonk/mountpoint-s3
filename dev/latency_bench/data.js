window.BENCHMARK_DATA = {
  "lastUpdate": 1688044724057,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "5431e8643c5d0f41c5de61d2b43a23436cdf42a8",
          "message": "Run benchmark with auto network throughput\n\nNow that we have auto network throughput configuration for Mountpoint\nwe can use default configuration in the benchmark. It also makes the\nbenchmark script more flexible when running on other types of instance.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T13:23:48Z",
          "tree_id": "01c90c016013035307c68d94017f5d59d6f1f4f2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/5431e8643c5d0f41c5de61d2b43a23436cdf42a8"
        },
        "date": 1686749781829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.302,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.8912614,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.7288493,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "b381e7c0f6ac4090d9199adfa53389accb8eae3b",
          "message": "force run ci\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T13:49:52Z",
          "tree_id": "72038754930567aabc381b4129515486b0e28a42",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b381e7c0f6ac4090d9199adfa53389accb8eae3b"
        },
        "date": 1686751238855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.06,
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
            "value": 10.923,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.6170423,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.068679,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "3e52728281f4730d8b017f40025ae64f23f19e43",
          "message": "bench with checksum feature\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T13:54:42Z",
          "tree_id": "386a141cb3812ae49ac8d1bd7c2529c9ac1ea7ec",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/3e52728281f4730d8b017f40025ae64f23f19e43"
        },
        "date": 1686751513138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.146,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.9604237,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.619096,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "b879157839a076f07752a332b7eae5a3d1319749",
          "message": "Use preferred part size\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T16:25:35Z",
          "tree_id": "a2ae5fb7171516f503c23a28e108ee6e72e94334",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b879157839a076f07752a332b7eae5a3d1319749"
        },
        "date": 1686760608823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.665,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.95198479999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 788.0623602999999,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "61833ab878c41a3ddc044ec98f8e1c248a2f8d3f",
          "message": "xl\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-15T09:54:47Z",
          "tree_id": "033a0e4197bb29f004e0caa6472581ce092c3770",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/61833ab878c41a3ddc044ec98f8e1c248a2f8d3f"
        },
        "date": 1686823573864,
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
            "value": 1.131,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.413,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 190.25159340000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 676.2419292999999,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "3bb605dd56974104a801027a22d9a5fe347c8474",
          "message": "should be slow\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-15T10:27:13Z",
          "tree_id": "9288ed37849b9eb883fdc5ce25f4e5660fe99a08",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/3bb605dd56974104a801027a22d9a5fe347c8474"
        },
        "date": 1686825456892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.025,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.1093542,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.4989183,
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
          "id": "b85e1f6ee0ce64adb453827c3275d2e71cd0769e",
          "message": "Pick up CRT async streaming fixes (#292)\n\nPicks up https://github.com/awslabs/aws-c-s3/pull/313, which fixes\r\nconcurrency in async streaming\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-14T22:51:19+01:00",
          "tree_id": "6a971958c263a8a4edb7ad4f89cb6693beb8db25",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b85e1f6ee0ce64adb453827c3275d2e71cd0769e"
        },
        "date": 1686826597577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.202,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.798,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.4603218,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.0123554,
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
          "id": "b85e1f6ee0ce64adb453827c3275d2e71cd0769e",
          "message": "Pick up CRT async streaming fixes (#292)\n\nPicks up https://github.com/awslabs/aws-c-s3/pull/313, which fixes\r\nconcurrency in async streaming\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-14T22:51:19+01:00",
          "tree_id": "6a971958c263a8a4edb7ad4f89cb6693beb8db25",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b85e1f6ee0ce64adb453827c3275d2e71cd0769e"
        },
        "date": 1686826599234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.093,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.665,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.8483704,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.9938693,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "2602780878313156f5b99a05bcdd942b4daae15e",
          "message": "run benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-15T12:28:24Z",
          "tree_id": "3111982bdee9117c8cf970d636e167fe7cbc9ebe",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/2602780878313156f5b99a05bcdd942b4daae15e"
        },
        "date": 1686832730773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.39178770000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.111712600000004,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "1a8d3c41ce9da1194f18d7dc2cbbfa0414e7ed5c",
          "message": "Add preferred part size\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-15T12:30:46Z",
          "tree_id": "78d233fcb3a081585c2cf34af01cb558ecd10128",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/1a8d3c41ce9da1194f18d7dc2cbbfa0414e7ed5c"
        },
        "date": 1686834791822,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.567,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 497.213059,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 377.5219018,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "248e0a25ba69c97655c175eef24e055fb1442702",
          "message": "fix\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-15T13:44:22Z",
          "tree_id": "b3f53d9e904fcaef7b856f34bfa855265e173043",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/248e0a25ba69c97655c175eef24e055fb1442702"
        },
        "date": 1686837278826,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.978,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.9144795,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.8805005,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "03dc7e50151fbddc2da3f256868d56671db84e56",
          "message": "512k block size\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-15T14:51:36Z",
          "tree_id": "8cee63fbb28b9148663aa33b8c5c0fcbf8f0b41c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/03dc7e50151fbddc2da3f256868d56671db84e56"
        },
        "date": 1686841319790,
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
            "value": 1.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.958,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.2790316,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.777002100000004,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "b88193e82f2e6d74049ebe3356f744f1b1f8a966",
          "message": "bs=2m\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-16T09:43:03Z",
          "tree_id": "d667bd34bceb2c41e87cf33aee7fda281aa3fbb5",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b88193e82f2e6d74049ebe3356f744f1b1f8a966"
        },
        "date": 1686909260952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.216,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.175,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 68.8804099,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.0693045,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "cf5b1edf39bc05c5ca858396dcd992728fdd0856",
          "message": "bench with checksum feature\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-16T12:55:35Z",
          "tree_id": "046deb6c33c7f71b92f9221aa8463592d4100dfa",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cf5b1edf39bc05c5ca858396dcd992728fdd0856"
        },
        "date": 1686920757619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.193,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.285,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.7339336,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.0035906,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "09aa5eaa1f308ace9acf0c279969173192bd441f",
          "message": "Merge commit '93c264173a4a23a54c5bd7d733ba0126ed9412f5' into checksum_bench",
          "timestamp": "2023-06-16T14:21:28Z",
          "tree_id": "901b757b5ea5220a3e57c2d9e48ffaa7e2bb8d02",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/09aa5eaa1f308ace9acf0c279969173192bd441f"
        },
        "date": 1686926091590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.095,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.73496890000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.6206842,
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
          "id": "4a3187b9fce63aac19e10ee59096533902da1991",
          "message": "Fix dependency installation in GitHub workflows (#314)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-24T00:03:30-05:00",
          "tree_id": "0e144bbacb4a2ad79a0b9b6da33ce207c865b0e0",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4a3187b9fce63aac19e10ee59096533902da1991"
        },
        "date": 1687777287933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.504,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.7171655,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.5097105,
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
          "id": "4a3187b9fce63aac19e10ee59096533902da1991",
          "message": "Fix dependency installation in GitHub workflows (#314)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-24T00:03:30-05:00",
          "tree_id": "0e144bbacb4a2ad79a0b9b6da33ce207c865b0e0",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4a3187b9fce63aac19e10ee59096533902da1991"
        },
        "date": 1687777348443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.386,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.102,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.109,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.4095975,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.1698325,
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
          "id": "68884556c4b07f5253cf1498601efb50639699d9",
          "message": "Add `mkdir` and `rmdir` to reftests (#316)\n\n* Add `mkdir` and `rmdir` to reftests\r\n\r\nNothing too surprising here -- we test that we can create directories as\r\nlong as a conflicting name doesn't already exist, and then we can remove\r\ndirectories if and only if they're local and empty.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Speed up `compare_file` in reftests\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-28T16:39:44-05:00",
          "tree_id": "8da7a2021cf17188cba1199f55008f60ede8cdf8",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/68884556c4b07f5253cf1498601efb50639699d9"
        },
        "date": 1688042075872,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.232,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.658,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.2848377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.794227799999994,
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
          "id": "68884556c4b07f5253cf1498601efb50639699d9",
          "message": "Add `mkdir` and `rmdir` to reftests (#316)\n\n* Add `mkdir` and `rmdir` to reftests\r\n\r\nNothing too surprising here -- we test that we can create directories as\r\nlong as a conflicting name doesn't already exist, and then we can remove\r\ndirectories if and only if they're local and empty.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Speed up `compare_file` in reftests\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-28T16:39:44-05:00",
          "tree_id": "8da7a2021cf17188cba1199f55008f60ede8cdf8",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/68884556c4b07f5253cf1498601efb50639699d9"
        },
        "date": 1688042086346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.198,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.213,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.361,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.586299600000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.625945200000004,
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
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "a3ff69c0c71e6bc49cfff5a920bd7c4cef284a04",
          "message": "Change runners label\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T13:07:18Z",
          "tree_id": "bd4b623dd1256aac7c5d63dd1acbf3738410a89c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a3ff69c0c71e6bc49cfff5a920bd7c4cef284a04"
        },
        "date": 1688044723650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.217,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.642,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.6404256,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.4271635,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}