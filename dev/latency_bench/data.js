window.BENCHMARK_DATA = {
  "lastUpdate": 1684172867205,
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
          "id": "14d7f37352e931c7ba5f82715d0d01e4e4840579",
          "message": "Test time to first byte benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T09:13:52Z",
          "tree_id": "c299f0bfd1e9c97f100a8b8d8184a108467f487c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/14d7f37352e931c7ba5f82715d0d01e4e4840579"
        },
        "date": 1682588186491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.843,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 115.4985651,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.3145347,
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
          "id": "d2f9775ecdeef85f143bd404c323673b82e8f711",
          "message": "Less validation\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T09:56:05Z",
          "tree_id": "a3a6819ef360dc249cb0c7e679fdf8107ceb4b03",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d2f9775ecdeef85f143bd404c323673b82e8f711"
        },
        "date": 1682590002032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.619,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.7144021,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.9619797,
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
          "id": "c83dcabca4b74cd585b8c24d0e773b708eb85f65",
          "message": "Refactor benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T10:44:21Z",
          "tree_id": "37917989932640e100daed54d1eabe8465fb8ff6",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/c83dcabca4b74cd585b8c24d0e773b708eb85f65"
        },
        "date": 1682593046957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.914,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.439107,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.163742299999996,
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
          "id": "e05dc6bf46650bb62120732ed18bc8e2449a43f9",
          "message": "Add cpu info\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T10:51:37Z",
          "tree_id": "c64bdfe541161e9f6826f2a79280a42671b9e2ee",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e05dc6bf46650bb62120732ed18bc8e2449a43f9"
        },
        "date": 1682593452902,
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
            "value": 1.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.794,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 54.4751584,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.7762329,
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
          "id": "1a3f7b430d4fde708ad27f78934aaf5af48a0594",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-04-27T14:13:31Z",
          "tree_id": "a11b9f9dc3972ae79f16bcb65a3d9c03485dda8f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/1a3f7b430d4fde708ad27f78934aaf5af48a0594"
        },
        "date": 1682605649942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.881,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.2320632,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.7978478,
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
          "id": "b20a3e61a4c8fc3e4831a159ab317ccb1b7438fe",
          "message": "Merge branch 'internal_checksum' into bench_test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-28T09:09:42Z",
          "tree_id": "9b42234bef95935f9e5f98f043a1781fbdfb343c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b20a3e61a4c8fc3e4831a159ab317ccb1b7438fe"
        },
        "date": 1682673750968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.096,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.542,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.49077220000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.1776957,
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
          "id": "1bdc5375be4b8aff3466c57d73a227470b3c2db0",
          "message": "Merge branch 'part_queue' into bench_test",
          "timestamp": "2023-04-28T13:30:22Z",
          "tree_id": "11f9e6493d0fe201296672cddc8087cca3c151e4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/1bdc5375be4b8aff3466c57d73a227470b3c2db0"
        },
        "date": 1682690544119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.752,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 249.9900696,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.6674841,
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
          "id": "99b7e6045b522671670f44efa05dbddf373ef685",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-04-28T15:29:15Z",
          "tree_id": "c369e9a3124ea62737aa71b9b4fa05e0ca81116d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/99b7e6045b522671670f44efa05dbddf373ef685"
        },
        "date": 1682696536622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.745,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 187.2667851,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 139.5139997,
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
          "id": "d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-05-02T09:33:13Z",
          "tree_id": "b77185559b40aa97f3a6e01f814bfa5e5cc4f84a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1"
        },
        "date": 1683020791757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.95,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 209.9417569,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.51762240000001,
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
          "id": "d5bb12801832d9046ed18e0514a016fec7f493e1",
          "message": "Should be slower\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T12:35:22Z",
          "tree_id": "42f11d053a8da6ae8a808d659c3540bcd697eb77",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d5bb12801832d9046ed18e0514a016fec7f493e1"
        },
        "date": 1683031685805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.123,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.024,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.3847094,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.9610071,
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
          "id": "d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-05-02T09:33:13Z",
          "tree_id": "b77185559b40aa97f3a6e01f814bfa5e5cc4f84a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1"
        },
        "date": 1683032055778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
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
            "value": 10.766,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.22900870000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 90.54555509999999,
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
          "id": "48e3c75e8e72355a7dc764c257b09e5cef5a26f7",
          "message": "Remove third party library\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T12:50:25Z",
          "tree_id": "2212d049310f785a6a169ca7b8fca497763a1f9f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/48e3c75e8e72355a7dc764c257b09e5cef5a26f7"
        },
        "date": 1683033209682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.092,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.704,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.02227540000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.575943,
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
          "id": "711fc2724fe1f1263e7a7d9eb9b7fc021f746bf7",
          "message": "Validate with crt function\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T13:32:22Z",
          "tree_id": "f36131df1982ce47b87cb91ed38ec12e882c4915",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/711fc2724fe1f1263e7a7d9eb9b7fc021f746bf7"
        },
        "date": 1683035121064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.112,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.751,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.18781129999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.6343825,
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
          "id": "d92476dc2cfafc0e4a754fdacb2a207d0f53af2e",
          "message": "Remove preferred part size\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T13:39:29Z",
          "tree_id": "2c9e91a0d9e53db236ee7a3bc72f6fb0c189d258",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d92476dc2cfafc0e4a754fdacb2a207d0f53af2e"
        },
        "date": 1683035820837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.157,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.412,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 53.1349709,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.5828721,
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
          "id": "6523c7149b8a95bce496f04ff9daf3bc45d73e0f",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-05-03T16:09:01Z",
          "tree_id": "35b522c5f5df9fa013fb61791cbf48df65097721",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/6523c7149b8a95bce496f04ff9daf3bc45d73e0f"
        },
        "date": 1683130900364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.152,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.5339163,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.713978600000004,
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
          "id": "a00caf8d48e1e949b3fcac544cf6db6cea5991d0",
          "message": "Test benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-12T10:14:01Z",
          "tree_id": "dffbd08630bafe9dae76860b0bb9b68792e4040e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a00caf8d48e1e949b3fcac544cf6db6cea5991d0"
        },
        "date": 1683887146523,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.627,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 85.1545584,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.4680989,
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
          "id": "467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe",
          "message": "Use GitHub repository variables in the CI (#244)\n\nInstead of hard coding test variables like test bucket name or test\r\nbucket prefix in the CI, we will be using GitHub repository variables.\r\n\r\nThis allows us to change the values later without having to create a new\r\npull request, and also allows contributors to easily config these variables\r\nin their own forks.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-12T13:37:36+01:00",
          "tree_id": "9e6da8862917f8b1d0362fc2c4ba6ba364662eda",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe"
        },
        "date": 1683899523163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.692,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.355,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.8,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 70.653,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 756.7615785,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 757.8725007999999,
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
          "id": "b153d819612fca772f06dd1be27e587554f28705",
          "message": "Implement releasedir and clean up directory handles (#241)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-15T11:00:13-05:00",
          "tree_id": "2b0bc0dd4b3dc578448d72ade105d6c7fe036e3e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b153d819612fca772f06dd1be27e587554f28705"
        },
        "date": 1684170285359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.781,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.373,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.375,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 710.6695105,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 708.6502551,
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
          "id": "b153d819612fca772f06dd1be27e587554f28705",
          "message": "Implement releasedir and clean up directory handles (#241)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-15T11:00:13-05:00",
          "tree_id": "2b0bc0dd4b3dc578448d72ade105d6c7fe036e3e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b153d819612fca772f06dd1be27e587554f28705"
        },
        "date": 1684171457389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.569,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.7563142,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 44.9973496,
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
          "id": "980a8333703d36b2dd4459c76a617659771f3ca2",
          "message": "Change runners label\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-15T17:35:24Z",
          "tree_id": "ede0ade4d20f60a1dc40760f690d474b12ff2b93",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/980a8333703d36b2dd4459c76a617659771f3ca2"
        },
        "date": 1684172865905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.289,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 59.0319114,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 43.902651899999995,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}