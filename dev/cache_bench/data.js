window.BENCHMARK_DATA = {
  "lastUpdate": 1720121968387,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3",
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
          "id": "54a8e74c44d686cf90c317002ce1445e404d4d4c",
          "message": "Improve cancellation test for PutObject write (#884)\n\n* Improve cancellation test for PutObject write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Add TODO\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-22T14:23:47Z",
          "tree_id": "bcf94d568f57ac8c70a006fb673df076c8b72a96",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/54a8e74c44d686cf90c317002ce1445e404d4d4c"
        },
        "date": 1716396788910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1358.4763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2576.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 922.6427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2290.08134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 446.1419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 792.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 325.12763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 492.67822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4554.621875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5503.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 490.30791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2008.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1396.2814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1615.123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1332.2330078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1641.0923828125,
            "unit": "MiB/s"
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
          "id": "cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759",
          "message": "Add hourly integration test run (#892)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-05-29T10:24:49Z",
          "tree_id": "df019ca2b8bae2920b00a08ec2e04e6f7bfd9cb1",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759"
        },
        "date": 1717006317956,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1356.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2626.839453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 926.86279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2354.37919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 462.5658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 795.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 320.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 496.50703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4533.8517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5478.5744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 560.47578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2062.9353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1384.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1619.6947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1367.04462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1633.430078125,
            "unit": "MiB/s"
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
          "id": "036ed3bfeb2aec87de9b1717cfd63d4078d9c68f",
          "message": "Save dump files to S3 when tests are failing (#893)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T13:57:23Z",
          "tree_id": "84385b2029ab90bbd49aa606ba04d31a2222e741",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/036ed3bfeb2aec87de9b1717cfd63d4078d9c68f"
        },
        "date": 1717086347052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1381.3052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2573.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 929.128125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2373.85498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 452.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 816.16572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 326.28466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 502.10595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4590.948046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5541.9380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 542.47109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2088.82080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1414.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1624.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1402.57841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1623.01298828125,
            "unit": "MiB/s"
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
          "id": "320286ecbb8dc93cec7cd5072ee690b8cded91ca",
          "message": "Enable trace logs\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T15:50:47Z",
          "tree_id": "5412bcfbdbdded4f2db48937ea2b29d622dc5c33",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/320286ecbb8dc93cec7cd5072ee690b8cded91ca"
        },
        "date": 1717092156927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1367.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2568.28623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 926.70751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2368.6439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 455.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 802.427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 324.05263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 497.5271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4579.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5464.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 523.896875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2082.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1373.39306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1620.3521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.2505859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1611.5087890625,
            "unit": "MiB/s"
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
          "id": "036ed3bfeb2aec87de9b1717cfd63d4078d9c68f",
          "message": "Save dump files to S3 when tests are failing (#893)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T13:57:23Z",
          "tree_id": "84385b2029ab90bbd49aa606ba04d31a2222e741",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/036ed3bfeb2aec87de9b1717cfd63d4078d9c68f"
        },
        "date": 1717160324108,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1373.79404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2566.51298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 913.43642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2356.3087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 458.71611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 810.27578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 323.76796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 500.83447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4627.7271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5504.571875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 488.55263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2079.64833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1361.89248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1605.7966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1365.809765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1617.84677734375,
            "unit": "MiB/s"
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
          "id": "e5f9cf00d7a7b61974d9637e89de78eafc08277b",
          "message": "Save associated binary for core dump\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-31T13:00:42Z",
          "tree_id": "a5b8bca0bbdd28573e6f7bfce46b1f79c11914af",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e5f9cf00d7a7b61974d9637e89de78eafc08277b"
        },
        "date": 1717168033125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1332.9185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2580.02080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 882.20673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2366.9322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 430.5474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 805.4826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 314.40712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 502.81923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4032.53017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5507.25595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 534.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2078.5947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1276.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1615.11396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1291.81474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1645.8546875,
            "unit": "MiB/s"
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
          "id": "036ed3bfeb2aec87de9b1717cfd63d4078d9c68f",
          "message": "Save dump files to S3 when tests are failing (#893)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T13:57:23Z",
          "tree_id": "84385b2029ab90bbd49aa606ba04d31a2222e741",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/036ed3bfeb2aec87de9b1717cfd63d4078d9c68f"
        },
        "date": 1717168084715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1350.4083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2612.98330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 922.3314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2355.50107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 450.962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 801.1412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 320.15771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 502.35771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4594.679296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5446.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 524.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2093.43388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1389.9740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1590.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1346.4498046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1643.033203125,
            "unit": "MiB/s"
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
          "id": "4525331e9bc4896ca983bcd1cd7bb01e1dbe8640",
          "message": "Save associated binary for core dump (#896)\n\n* Save associated binary for core dump\n\nTo be able to analyze the core dump we also need\nthe binary it was generated from. This adds a new\nscript for uploading the binary associated with the\ncore dump when tests are failing in the CI.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update core dump pattern\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-31T14:41:07Z",
          "tree_id": "3a6f3e6505b3c597bb40d98fdfe7953a5c51c906",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4525331e9bc4896ca983bcd1cd7bb01e1dbe8640"
        },
        "date": 1717414529957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1372.68154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2578.2912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 932.172265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2373.40009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 452.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 795.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 323.47744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 497.97041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4564.2546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5524.1970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 530.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2041.03876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1428.1412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1601.5412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1373.176171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1624.06123046875,
            "unit": "MiB/s"
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
          "id": "9bdb2376011d621901c3b7e3f21e1bf93e254267",
          "message": "Improve coredump script for the tests workflow (#899)\n\n* List core dump records when tests are failing\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Improve the coredump script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-03T15:50:15+01:00",
          "tree_id": "2387b067dc34dee944ceef6dcb8aad68b82c3ae0",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/9bdb2376011d621901c3b7e3f21e1bf93e254267"
        },
        "date": 1717435049495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1386.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2580.77333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 907.1251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2372.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 457.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 806.41611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 324.49091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 499.88701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4638.83310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5537.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 579.26103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2092.4162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1442.7705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1600.46591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1378.2435546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1634.44189453125,
            "unit": "MiB/s"
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
          "id": "07dcd74236ce196bf9d8082469371196615a0a72",
          "message": "Add troubleshooting entry on slow metadata operations (#897)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-04T13:10:59Z",
          "tree_id": "d9e07d1957d77bcab43eccbffb56999286eda437",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/07dcd74236ce196bf9d8082469371196615a0a72"
        },
        "date": 1717523963981,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1369.96396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2571.9328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 923.2650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2377.12197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 454.028515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 802.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 322.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 506.75595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4545.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5535.97099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 529.4955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2100.17548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1402.0953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1610.6625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1369.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1635.804296875,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c",
          "message": "Introduced support for the AWS_ENDPOINT_URL environment variable (#895)\n\n* Adding support for AWS_ENDPOINT_URL.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Update CHANGELOG.md and CONFIGURATION.md\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Using rust_fork to run the tests.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Addressing comments.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Adding changes from Danny.\r\n\r\nhttps://github.com/awslabs/mountpoint-s3/commit/2303bd83d0e90bcd29f707bd939d02db6633cf9b\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-06-05T09:52:55+01:00",
          "tree_id": "ed823e29b354854c3aee278096b512618a05c976",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c"
        },
        "date": 1717587299788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1366.831640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2569.50478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 905.12353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2369.96640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 458.5833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 805.95078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 325.10771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 508.43017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4586.2552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5583.80224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 565.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2081.91953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1438.89658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1595.12470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1362.37314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1624.7279296875,
            "unit": "MiB/s"
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
          "id": "42007f7b5eb0483364cc02cbb5c62f709b5d62f3",
          "message": "Release v1.7.0 (#885)\n\n* Release v1.7.0\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update mountpoint-s3 changelog\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-06T08:12:17Z",
          "tree_id": "a40b569e9fad610659f95c091a2fa1a12051267b",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/42007f7b5eb0483364cc02cbb5c62f709b5d62f3"
        },
        "date": 1717689610919,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1333.341015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2548.29130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.75126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2293.1478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 435.30244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 797.92626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 308.02587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 495.56962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4057.11953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5497.7830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 469.66064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2015.50029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1275.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1593.52568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1276.10244140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1618.70556640625,
            "unit": "MiB/s"
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
          "id": "cbc8ec8d3886da07430f583d0121d028b5dfd020",
          "message": "Update integration test schedule from hourly to daily at 06:45Z (#905)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T10:40:02Z",
          "tree_id": "b0bc74cfd8abca7ffdd78752655c02d6a08a56d9",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cbc8ec8d3886da07430f583d0121d028b5dfd020"
        },
        "date": 1718107061158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1365.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2536.9392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 915.682421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2299.4587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 459.66162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 795.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 315.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 497.64775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4489.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5356.540625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 468.3025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2025.74091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1375.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1577.979296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1335.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1619.0083984375,
            "unit": "MiB/s"
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
          "id": "19faf760f3de5dc631aa68594564d926e9a667d3",
          "message": "Restrict `--sse-kms-key-id` to Key ARN only (#908)\n\n* Restrict --sse-kms-key-id to Key ARN only\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix inexistent key test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove Key ID from the doc, fix tested log message\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix format\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-12T13:24:51Z",
          "tree_id": "db0b9700e1691e1efffbf8e6915a1dbb43350d8f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/19faf760f3de5dc631aa68594564d926e9a667d3"
        },
        "date": 1718207600443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1379.6521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2616.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 927.1802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2384.10283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 455.3908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 816.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 329.90439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 507.26416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4588.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5553.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 558.03876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2169.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1401.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1598.84189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1374.6470703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1643.798046875,
            "unit": "MiB/s"
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
          "id": "e62951e87a9cc7f19ffe23f1637d531ca8ea8cab",
          "message": "Add additional logging around mount timeout failures (#910)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-13T10:12:48Z",
          "tree_id": "5eba9ca1b6f75e289e266b3c6c465e7ef91fa587",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e62951e87a9cc7f19ffe23f1637d531ca8ea8cab"
        },
        "date": 1718299876043,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1394.56494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2594.11552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 928.0658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2379.90986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 469.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 810.99501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 337.38701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 505.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4596.84755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5502.2427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 500.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2157.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1443.0546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1596.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1391.8748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1637.2107421875,
            "unit": "MiB/s"
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
          "id": "7155555a365cd2b8e4b330c2b16cff3d1b56cce8",
          "message": "Release v1.7.1 (#912)\n\n* Release v1.7.1\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-14T08:55:26Z",
          "tree_id": "d8b44fa654789f6fb2ab667f0775f9f2796c8100",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7155555a365cd2b8e4b330c2b16cff3d1b56cce8"
        },
        "date": 1718366080816,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1396.27373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2627.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 923.06103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2382.693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 466.910546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 806.15693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 328.51328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 497.70966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4482.85634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5511.55234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 501.156640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2178.0369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1390.4806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1592.28564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1370.60634765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1631.929296875,
            "unit": "MiB/s"
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
          "id": "d3b632d1b98dd32f37ab7ba0633c825933ececb9",
          "message": "Release v1.7.2 (#918)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-17T19:11:24Z",
          "tree_id": "8e4df354984977ea97c50a2386c3c6f737fadbc2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d3b632d1b98dd32f37ab7ba0633c825933ececb9"
        },
        "date": 1718808555095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1388.61552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2601.84189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 937.07265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2372.87412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 471.13095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 810.43515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 329.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 511.30322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4492.37587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5530.0275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 586.5984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2110.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1402.16279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1621.89140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1371.149609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1647.68125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37d980986555df887f7cb6cccdf2d442c92fbb4f",
          "message": "Release new crate versions (#923)\n\n* updates dependencies\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* addresses review feedback\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates change log\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T12:28:40Z",
          "tree_id": "38086a7371fc2d97b57119473a411eb1195600b4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/37d980986555df887f7cb6cccdf2d442c92fbb4f"
        },
        "date": 1719424371803,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1370.901171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2593.0189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 906.33583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2373.48037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 456.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 816.79052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 329.96591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 519.562890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4563.26015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5510.97275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 468.16533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2114.17490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1437.24423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1619.43974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1358.32509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1641.932421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cc8d3094f1a43df420470204d78c52670cd5f7d1",
          "message": "include test files in cargo (#924)\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T16:14:41Z",
          "tree_id": "e1302c0b125475220680150b56554cf761acca9e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cc8d3094f1a43df420470204d78c52670cd5f7d1"
        },
        "date": 1719578182458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1381.79580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2602.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 932.64150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2373.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 462.015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 816.678125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 326.79697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 505.140234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4578.53017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5473.93603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 470.375390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2092.19296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1409.86083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1617.99462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.88779296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1643.48505859375,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "936b805b1de5ace88faf083b0c6242232de2db63",
          "message": "Fixing 'package' CI workflow after CentOS 7 reached end of life. (#931)\n\n* Fixing 'package' CI workflow after CentOS 7 reached end of life.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Separate the installation of epel-release and centos-release-scl.\n\nI suspect this is why some packages like fakeroot are not found.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Using http instead of https for the repo URIs.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Trying removing repo centos-release-scl.\n\nWant to try this to see if it helps for ARM build.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding centos-release-scl back.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Trying CentOS 8.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Changing to dnf and using group install for dev tools.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding James' suggestion.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-07-03T16:42:43Z",
          "tree_id": "3df02f65f8a300904695a67bdba481d83852e59d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/936b805b1de5ace88faf083b0c6242232de2db63"
        },
        "date": 1720121967244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1388.84794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2596.60634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 929.501171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 2372.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 461.9828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 810.50986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 330.15634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 503.65859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4462.3861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5503.6001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 467.74130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 2047.29365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1403.37431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1625.66884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1388.73017578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1635.02666015625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}