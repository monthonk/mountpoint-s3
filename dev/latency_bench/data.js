window.BENCHMARK_DATA = {
  "lastUpdate": 1688375701710,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "8d2b8721cbbae71b209e3beeb91bdebd6e5fca5c",
          "message": "set write status correctly\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-30T08:46:05Z",
          "tree_id": "c01356078e02bf67b1f000ede0589c5363028708",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8d2b8721cbbae71b209e3beeb91bdebd6e5fca5c"
        },
        "date": 1688115412862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.069,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.1735983,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.9164602,
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
          "id": "df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb",
          "message": "Avoid a copy when optimizing part size for checksums (#328)\n\nThe `chunks` iterator returns slices, so creating the `Bytes` for each\r\nchunk needs to do a copy. We can instead just do the `Bytes` conversion\r\nupfront from the `Box<[u8]>`, and then do O(1) splits of that `Bytes`\r\nobject for each chunk.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:15:04+01:00",
          "tree_id": "2cb7678c80405139d5e942e9f255c4b209a7d767",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb"
        },
        "date": 1688117992128,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.036,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.22917679999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.9495164,
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
          "id": "df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb",
          "message": "Avoid a copy when optimizing part size for checksums (#328)\n\nThe `chunks` iterator returns slices, so creating the `Bytes` for each\r\nchunk needs to do a copy. We can instead just do the `Bytes` conversion\r\nupfront from the `Box<[u8]>`, and then do O(1) splits of that `Bytes`\r\nobject for each chunk.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:15:04+01:00",
          "tree_id": "2cb7678c80405139d5e942e9f255c4b209a7d767",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb"
        },
        "date": 1688118071771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.307,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.59061,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.322799700000004,
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
          "id": "8fe154bbbce3d0db627a61d8508126b9201398c9",
          "message": "enable end fsync\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-30T10:37:38Z",
          "tree_id": "dee7aad8c44b309c6a746b3a4ebc6b9ef9ab6bea",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8fe154bbbce3d0db627a61d8508126b9201398c9"
        },
        "date": 1688122392162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.318,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.8168188,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.374502899999996,
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
          "id": "40a24830a3b6b94a4e3d87bc43e48d46b6eb0f40",
          "message": "don't pre-create files\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-30T14:14:32Z",
          "tree_id": "2bb8ffe92fb09fa5ee29bf6778793b71b0d60be1",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/40a24830a3b6b94a4e3d87bc43e48d46b6eb0f40"
        },
        "date": 1688135110480,
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
            "value": 1.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.365,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 67.89102009999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.3758124,
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
          "id": "e7bad12eca37ee46f91e9ecccfd1cd2657815f4e",
          "message": "Turn write support on (#327)\n\n* Turn write support on\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Enable delete feature in workflows\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Only run unlink tests under delete feature\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T16:15:47+01:00",
          "tree_id": "12376fb46b7bf8d60ee2a5ff3982ea62ee26d80d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e7bad12eca37ee46f91e9ecccfd1cd2657815f4e"
        },
        "date": 1688138997047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.256,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.493,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.29210409999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.6868557,
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
          "id": "e7bad12eca37ee46f91e9ecccfd1cd2657815f4e",
          "message": "Turn write support on (#327)\n\n* Turn write support on\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Enable delete feature in workflows\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Only run unlink tests under delete feature\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T16:15:47+01:00",
          "tree_id": "12376fb46b7bf8d60ee2a5ff3982ea62ee26d80d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e7bad12eca37ee46f91e9ecccfd1cd2657815f4e"
        },
        "date": 1688139034710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.107,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.5992277,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.5826849,
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
          "id": "15b062835a3d99c4b17d3742af1cba1b0bafdc7f",
          "message": "Explicitly prevent mounting over an existing mount (#348)\n\nIt's valid to mount multiple file systems to the same directory, but\r\ndoing so requires the first one to be mounted read-write, which is why\r\nthis wasn't a problem for us until #327. It seems libfuse2's version of\r\nfusermount explicitly checked this(?), but libfuse3 no longer rejects\r\nit.\r\n\r\nIn principle this might be something we'd want to allow, but I think the\r\nless surprising/error-prone customer experience is to refuse to do it,\r\nso let's explicitly forbid it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T18:47:00+01:00",
          "tree_id": "7218efb2e8616010d994131c38fcda7608cdacd6",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/15b062835a3d99c4b17d3742af1cba1b0bafdc7f"
        },
        "date": 1688375701216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.196,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.2185937,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.0362899,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}