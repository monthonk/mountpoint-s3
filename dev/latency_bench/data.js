window.BENCHMARK_DATA = {
  "lastUpdate": 1689329010408,
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
        "date": 1688375725862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.203,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.057,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.15986740000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.9778305,
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
          "id": "a48e030f9bdd9de394836c5e6483824b6c915583",
          "message": "run benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T11:22:19Z",
          "tree_id": "d968009e68fec302191c1d835758f73d791e092b",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a48e030f9bdd9de394836c5e6483824b6c915583"
        },
        "date": 1688470401023,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.322,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.8049863,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.1423396,
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
          "id": "bab64f2d477fb7c0f4893e3d943cd5ad8d2b73ad",
          "message": "Add sequential write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T12:39:25Z",
          "tree_id": "0e1cd956151b7c0a148b4db5c69818cfeb1ddce4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/bab64f2d477fb7c0f4893e3d943cd5ad8d2b73ad"
        },
        "date": 1688475027105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.343,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.9012232,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.306625600000004,
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
          "id": "19a918c6c7a16f3b768b749c57dc34d7dc4a039e",
          "message": "Add sequential write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T13:42:07Z",
          "tree_id": "c9f95ea7a7fc49d705fe405f588ab0e2090fbefe",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/19a918c6c7a16f3b768b749c57dc34d7dc4a039e"
        },
        "date": 1688478749636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.296,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.4388237,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.8968413,
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
          "id": "c751bb3a53adbae01b5309797b822887624d505a",
          "message": "Add sequential write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T14:09:27Z",
          "tree_id": "71c738c3c2bfa56575b34c94fea65b90703386d5",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/c751bb3a53adbae01b5309797b822887624d505a"
        },
        "date": 1688480429163,
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
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.492,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.5975904,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.2902806,
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
          "id": "55931c29a2ce20d6d0b40e0a2c0dda949fa9ed2f",
          "message": "Add sequential write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T14:33:30Z",
          "tree_id": "ed1168a5d46043be1752bcb8936ab931799baabf",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/55931c29a2ce20d6d0b40e0a2c0dda949fa9ed2f"
        },
        "date": 1688481827980,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.058,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.303,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 68.567748,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.5041201,
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
          "id": "c080e5eb816407f6af86b3e6b236a1c92df7af9c",
          "message": "Add sequential write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T14:54:11Z",
          "tree_id": "70f8d8693fa85d7954617c332f8f19ffac5409b5",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/c080e5eb816407f6af86b3e6b236a1c92df7af9c"
        },
        "date": 1688483067061,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.351,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.65574690000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.5453954,
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
          "id": "0b5591392b4a9a5100bc925973d3acd331da1df2",
          "message": "Add sequential write benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T15:00:47Z",
          "tree_id": "fb7085837d073da4412194c0aa7ff47abe82d7a3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/0b5591392b4a9a5100bc925973d3acd331da1df2"
        },
        "date": 1688483447103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.927,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 59.1279546,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.6216814,
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
          "id": "6cb1a3d71b74f9b56a8a7153b7a84109442f4005",
          "message": "Capture panics and pipe them to `tracing` (#357)\n\nWe want to make sure panics are captured in logs so we can debug them.\r\nThis change adds a new panic hook that pulls out the payload, location,\r\nand backtrace of a panic and emits them at error level through\r\n`tracing`. The `main.rs` file is getting a bit out of hand so I tried to\r\nleave it a little better than I found it by moving the logging stuff\r\ninto a submodule.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-07T10:44:40+01:00",
          "tree_id": "8df352b36562290d6b1b3f4be1fb882ebb53fd65",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/6cb1a3d71b74f9b56a8a7153b7a84109442f4005"
        },
        "date": 1688726723859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.473,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.01923459999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.3204984,
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
          "id": "6cb1a3d71b74f9b56a8a7153b7a84109442f4005",
          "message": "Capture panics and pipe them to `tracing` (#357)\n\nWe want to make sure panics are captured in logs so we can debug them.\r\nThis change adds a new panic hook that pulls out the payload, location,\r\nand backtrace of a panic and emits them at error level through\r\n`tracing`. The `main.rs` file is getting a bit out of hand so I tried to\r\nleave it a little better than I found it by moving the logging stuff\r\ninto a submodule.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-07T10:44:40+01:00",
          "tree_id": "8df352b36562290d6b1b3f4be1fb882ebb53fd65",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/6cb1a3d71b74f9b56a8a7153b7a84109442f4005"
        },
        "date": 1688726753451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.486,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.279,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 55.9799475,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.7694845,
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
          "id": "c971926cfd9fdeea5a143570ddbff1dfe5d444cc",
          "message": "run the benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-13T13:05:05Z",
          "tree_id": "411d99d320e19220bbb0f2171d1a443d3efbf920",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/c971926cfd9fdeea5a143570ddbff1dfe5d444cc"
        },
        "date": 1689255595887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.171,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.81221020000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.200976,
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
          "id": "caeff99448ec64b64bf6dfbbd7dbdebea13d847e",
          "message": "Add unlink to reference model tests (#368)\n\nThis is pretty annoying because of some weird edge cases around implicit\r\ndirectories being removed while local children are present. I think in\r\nthe long term we want to fix this, but it's a similar problem to what we\r\nsaw in #359 -- we need `readdir` to clean up removed directories\r\nproperly. So for now, I've changed the reference model to match our\r\ncurrent semantics, which is that if an ancestor of a local\r\nfile/directory is removed, that file/directory will no longer be visible\r\nthrough the filesystem. Of course, once that file/directory becomes\r\nremote it will become visible, and the model still captures that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:52:46Z",
          "tree_id": "fb7e90556bf7d806ff78ac94090986ec32396177",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/caeff99448ec64b64bf6dfbbd7dbdebea13d847e"
        },
        "date": 1689329009968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.261,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.5740897,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.0134064,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}