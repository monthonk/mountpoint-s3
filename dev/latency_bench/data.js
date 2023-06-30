window.BENCHMARK_DATA = {
  "lastUpdate": 1688113951044,
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
          "id": "00e6f8e8615f7c5cfd43163b88ecc02a52648199",
          "message": "Build the benchmark with feature flag\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T16:49:14Z",
          "tree_id": "0bcdf88b28689b854cda60e9bdbcb1254f4941f0",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/00e6f8e8615f7c5cfd43163b88ecc02a52648199"
        },
        "date": 1688057972869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.521,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.3842971,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.510717299999996,
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
          "id": "971b7575668dc658ce55e6731ebe8eef47b215a6",
          "message": "Optimize part size for checksummed read (#315)\n\n* Optimize part size for checksummed read\r\n\r\nThe prefetcher stores data received from each input stream as a part in\r\nthe part queue structure. Usually, the part size is pretty big (8 MB or\r\nmore) and the checksum validation always has to be done against an entire\r\npart even if we only read a small portion of that part.\r\n\r\nThis makes checksummed read much slower than non-checksummed read. We could\r\nmake it more efficient by making the part smaller or ideally align the part\r\nsize to the read size so that we don't have to compute the checksum on\r\nunnecessary bytes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:31:11-05:00",
          "tree_id": "2396fc27e4e988000e28b565d6f2db663bd46a62",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/971b7575668dc658ce55e6731ebe8eef47b215a6"
        },
        "date": 1688058023566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.233,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.1610355,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.0869606,
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
          "id": "971b7575668dc658ce55e6731ebe8eef47b215a6",
          "message": "Optimize part size for checksummed read (#315)\n\n* Optimize part size for checksummed read\r\n\r\nThe prefetcher stores data received from each input stream as a part in\r\nthe part queue structure. Usually, the part size is pretty big (8 MB or\r\nmore) and the checksum validation always has to be done against an entire\r\npart even if we only read a small portion of that part.\r\n\r\nThis makes checksummed read much slower than non-checksummed read. We could\r\nmake it more efficient by making the part smaller or ideally align the part\r\nsize to the read size so that we don't have to compute the checksum on\r\nunnecessary bytes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:31:11-05:00",
          "tree_id": "2396fc27e4e988000e28b565d6f2db663bd46a62",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/971b7575668dc658ce55e6731ebe8eef47b215a6"
        },
        "date": 1688058060750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.212,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.46,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.8771884,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.1826684,
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
          "id": "8b7e7ed13462f5e1f4fc7de0e630a1a5c141bb20",
          "message": "update bench scripts\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T22:35:39Z",
          "tree_id": "71154ed2d1412f29cd40e420826ee6c0fc5391ac",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8b7e7ed13462f5e1f4fc7de0e630a1a5c141bb20"
        },
        "date": 1688078809162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.218,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.6576562,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.2268217,
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
          "id": "edc8768a6b1b78cca6e29579df5fa8853028376b",
          "message": "fix write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T22:49:40Z",
          "tree_id": "83f708b761aa4295d64463b545fb20b419f7dc1c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/edc8768a6b1b78cca6e29579df5fa8853028376b"
        },
        "date": 1688079595771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.035,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.3628761,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.9328163,
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
          "id": "f1391945020c9ffdecdf48e2493db4877edb4d50",
          "message": "fix error\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T22:59:22Z",
          "tree_id": "593ff7fd77423d6cd94b728da4a9d1b6e19bc988",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/f1391945020c9ffdecdf48e2493db4877edb4d50"
        },
        "date": 1688080181794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.556,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.8221922,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.6909015,
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
          "id": "dcc908139717d02a5eef109306e8a709cf9a1c73",
          "message": "update mountpoint to support the benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-30T07:49:05Z",
          "tree_id": "a8902afb9cb298c69c851713562ac4a5585d1292",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/dcc908139717d02a5eef109306e8a709cf9a1c73"
        },
        "date": 1688111979462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.949,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.2437693,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.3751075,
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
          "id": "0e21a4080955b84062ad12719f3171c2b7cb8b5a",
          "message": "add cleanup step\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-30T08:16:53Z",
          "tree_id": "18d22ca68173ffc6086a72f6ca52aba659841856",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/0e21a4080955b84062ad12719f3171c2b7cb8b5a"
        },
        "date": 1688113950594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.067,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.464486,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.0490809,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}