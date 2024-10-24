window.BENCHMARK_DATA = {
  "lastUpdate": 1729777934383,
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
          "id": "720effa8219edf730fd5dfeacaa7c34dd866373b",
          "message": "Enable backpressure in mock-mount-s3 binary (#1017)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-17T09:50:27Z",
          "tree_id": "a4320e58ec56f7edd55fd102859901cf215d2369",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/720effa8219edf730fd5dfeacaa7c34dd866373b"
        },
        "date": 1726573875727,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.19111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.95546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.684375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.63193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.92705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.575390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.895703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.024609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6122.45986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2376.9673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1948.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1623.24716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1373.949609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1449.8072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.33994140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba23586e6defdd5621adb3b1c213d0793af2ad23",
          "message": "Update CRT submodules to latest releases (#1019)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for CRT related crates\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-09-18T11:56:57Z",
          "tree_id": "576c8eb0b0ab03483414be62c3a170f12d37fb7b",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/ba23586e6defdd5621adb3b1c213d0793af2ad23"
        },
        "date": 1726676671361,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.51064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.6759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.52216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.89130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.18115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.66630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.5146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.36982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6021.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.24814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2427.73388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.075,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1839.67734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.093359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.15634765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1284.8423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.3458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1391.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1031.2970703125,
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
          "id": "532d36450cb0b95b5938e5eb1a00e8379c15115d",
          "message": "test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-18T16:05:55Z",
          "tree_id": "dae8742544f29b6b8bafe71c921cd908e902a9a2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/532d36450cb0b95b5938e5eb1a00e8379c15115d"
        },
        "date": 1726677109255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.50244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.30126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.33740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.00830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6202.00537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2399.66552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.89111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1586.79248046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1352.82177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1402.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 955.26611328125,
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
          "id": "532d36450cb0b95b5938e5eb1a00e8379c15115d",
          "message": "test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-18T16:05:55Z",
          "tree_id": "dae8742544f29b6b8bafe71c921cd908e902a9a2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/532d36450cb0b95b5938e5eb1a00e8379c15115d"
        },
        "date": 1726692663637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.37744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.46826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.98876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.19580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.24658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.60302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.31005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6063.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 513.02392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2355.7041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.23095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1889.54052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.16015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1627.86181640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1314.00439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1485.19189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1067.3876953125,
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
          "id": "f430895a096e3ebfe5d0fec59dece36910e133e6",
          "message": "Update CRT submodules to latest releases (#1024)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-19T08:45:10Z",
          "tree_id": "cbe85079414d977c48dc8bdcdcefe7569d7fe5ec",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/f430895a096e3ebfe5d0fec59dece36910e133e6"
        },
        "date": 1726742644140,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.0669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.81865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.414453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.52880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6117.23291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.00419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2340.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.51123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1711.3494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.04482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1507.0001953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1284.009375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1517.94716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.82578125,
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
          "id": "321a19f39d61867e459268b8daf184fd331cb39f",
          "message": "Fix bind command-line argument being ignored (#1020)\n\n* Fix bind argument being ignored\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad changelog message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-19T08:54:35Z",
          "tree_id": "b3827351b5353fa072b2a3909f4fc1c97a9cfc0c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/321a19f39d61867e459268b8daf184fd331cb39f"
        },
        "date": 1726746488282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.48916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.7873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.9513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.951953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.5189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.14921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6078.04853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.58427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2392.08232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.64228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1888.84404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1560.8525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1297.41513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.079296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1906.34365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.3732421875,
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
          "id": "f090d6f531dd2ef8b0b2300675b3886954b7997b",
          "message": "test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-19T13:01:01Z",
          "tree_id": "6cbe95f252c6c66d37d52d4d216e31ba58625fea",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/f090d6f531dd2ef8b0b2300675b3886954b7997b"
        },
        "date": 1726752525694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.4453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.21435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.5048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.1279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.10693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 30.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5817.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2426.6123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.8427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1794.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.03076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1748.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1431.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.55224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1778.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.34375,
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
          "id": "7f7e7f0558c7d9fe62b6f21295d2df3a2a2ea549",
          "message": "Expose `s3.client.buffer_pool.forced_used` metric (#1025)\n\n* Expose `s3.client.buffer_pool.forced_used` metric\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-19T10:06:42Z",
          "tree_id": "b273d49ab7246b1f21f4737bb78966cd81af1217",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7f7e7f0558c7d9fe62b6f21295d2df3a2a2ea549"
        },
        "date": 1726755392139,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.31787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.04853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.44853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.97734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.2921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.81025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.61513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6146.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2413.86103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.23544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1799.6501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1615.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1266.976953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.68486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1642.745703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1148.592578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9040066b18bf9922e45d61167939f9dc51b2cc16",
          "message": "Release 1.9.1 (#1026)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-09-19T13:06:03Z",
          "tree_id": "a2a5ad204d297a4d408f8f3125f2a9af2ac1ae4a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/9040066b18bf9922e45d61167939f9dc51b2cc16"
        },
        "date": 1726763138656,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.26328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.405078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6059.51337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.55087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2431.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.53798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.93564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.42919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1754.87265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.99208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1370.0984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.96376953125,
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
          "id": "5d5e0ac6ada23cb7075996e27be812681107b9b2",
          "message": "Add memory usage check to the CI (#1028)\n\n* Check resource utilization\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-24T12:46:21Z",
          "tree_id": "9469171f6d722d4ed6ad22f21c8f3825202c29ba",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/5d5e0ac6ada23cb7075996e27be812681107b9b2"
        },
        "date": 1727190789194,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.99951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.71533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.64658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.14140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.76123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.23134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5934.20322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.91630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2415.0546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.83173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1853.663671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1512.2806640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1294.7837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.76064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1948.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1073.57119140625,
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
          "id": "f92bf6c41e8b75f7e51770dc69afcc8332e33569",
          "message": "Add support for concurrent downloads to prefetch_benchmark example (#1022)\n\n* Fix prefetch_benchmark example\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add support for concurrent downloads to prefetch_benchmark example\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use CRT runtime\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-24T17:05:39Z",
          "tree_id": "f06430ab3fac7981589aacd6abaabcb9473e3d2d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/f92bf6c41e8b75f7e51770dc69afcc8332e33569"
        },
        "date": 1727263490337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.9306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 166.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.68212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.03310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.25166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.68974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 511.035546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2385.9923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.67568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1890.70986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.145703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1617.03896484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1369.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.334765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1824.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1118.075,
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
          "id": "a23665d1cdc982e74f5ba9f579930a85f2d7215f",
          "message": "Fix resource utilization check in the CI (#1033)\n\nOur CI workflows work by checking out the code from branch `gh-pages` to\nretrieve benchmark results from previous commits and compare them to values\nin the current run. However, the resource utilization check was done\nafter the benchmark result check which already has pulled in the branch\n`gh-pages` resulting in errors because the branch already exists. This\nchange fixes that.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-25T14:13:53Z",
          "tree_id": "1ebd4a233fc844aba04bdb98fac7cb539b994461",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a23665d1cdc982e74f5ba9f579930a85f2d7215f"
        },
        "date": 1727286910175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.6892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.5716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.46162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.585546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6119.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 511.60654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2451.303515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1941.8814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.13515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1534.9390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.12392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.79306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1438.95048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.7041015625,
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
          "id": "7e279a3cb11028f9892a5c16cd2b760723f5e339",
          "message": "Add clarification on behavior tenet for ownership/permissions (#1031)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T09:42:07Z",
          "tree_id": "d258d475dc481d2ef6d5dcd457f55e01d98d68e1",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7e279a3cb11028f9892a5c16cd2b760723f5e339"
        },
        "date": 1727361079987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.78623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.52265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.437890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 166.958203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.28232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.40126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.80146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6093.42802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 510.40830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2348.88134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.06650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1853.24345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1594.3279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1292.26533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.02705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1505.79208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1022.90087890625,
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
          "id": "0b7d0aed9c034a9e8d501cd7816ced3a7e07b587",
          "message": "Initial implementation of a shared cache on S3 Express (#1032)\n\n* Make cache block size user configurable (default 1024 KiB)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Require Clone on ObjectClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement initial draft of shared cache in Express\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Encode cache version and block size into keys\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Decouple DataCacheError from io::Error\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve error handling\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add unit test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Allow sharing the cache when mounting with different prefixes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix flow-control window\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-26T17:20:21Z",
          "tree_id": "e2b577fe57ac429d8c8791faa962bd549b18f128",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/0b7d0aed9c034a9e8d501cd7816ced3a7e07b587"
        },
        "date": 1727432671474,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.9359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.61865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.71669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.624609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.4939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.9103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.10234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6148.04248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 513.5720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2413.10361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1981.838671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.0662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1574.45791015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1329.15224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.07080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1395.20009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1113.08583984375,
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
          "id": "fda51030b360e1f63f7cab24a2ae2798a8d80410",
          "message": "Adjust read window based on used memory (#1013)\n\n* Mem limiter prototype\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Clean up development logging\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Scale up atomically, scale down after data was consumed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Remove Client from MemoryLimiter, document this structure\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Simplify the logic and include client metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Correct client mem usage stats\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Put the cli argument behind a feature flag\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix scaling logic and address comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-10-02T08:34:40Z",
          "tree_id": "cf541368e17bada06e3d3397b340a61301bebba2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/fda51030b360e1f63f7cab24a2ae2798a8d80410"
        },
        "date": 1727865306533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.4283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.0765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.2576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.37158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.81884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.42890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.5318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5898.03125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.54912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2383.49912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1847.22724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.42880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1539.3798828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1251.33212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1860.56357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1108.7390625,
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
          "id": "8c144755df4693218e694ad77b86aadd94eee33a",
          "message": "Add random 6-character suffix to log file names (#1041)\n\n* Add PID to log file names if log file already exists\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update log filenames to always include some random string following the timestamp\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename logging_config fn to make_logging_config\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move make_logging_config back to method of CliArgs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-03T10:36:59Z",
          "tree_id": "1ee8fb9471da0c08704765e07b7d52ad3f28bd89",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8c144755df4693218e694ad77b86aadd94eee33a"
        },
        "date": 1727975627740,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.52119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.3666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.75654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.25634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.77578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.2552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.23232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.9412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5876.3638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.02421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2196.10380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1720.4044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.8419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1399.07490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1335.2873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1822.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.28671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fa3a8f1cd06f6fb48a36137f05e9d936b951f6a",
          "message": "Update CRT submodules to latest releases (#1027)\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-04T12:33:12Z",
          "tree_id": "d8fcc77fb4d2f91dda2481013d14462d16a28b9e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/2fa3a8f1cd06f6fb48a36137f05e9d936b951f6a"
        },
        "date": 1728052346143,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.94609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.96201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.467578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.89765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.2205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.096484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5819.62802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2194.98916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.65703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1790.475,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.5818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1582.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1480.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.0119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.90966796875,
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
          "id": "0415b5c9e9e0be906ce17446834f2aadc2655b79",
          "message": "Update documentation related to the prefetcher (#1049)\n\n* Update documentation related to the prefetcher\n\nUpdate changelog to include changes in the prefetcher and document the\nunstable configuration to set maximum prefetch window size.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Change wording\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Apply PR suggestion\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-10-10T17:28:26Z",
          "tree_id": "958c3f335cc3f766fe9bcb55350473a7d9b75f1f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/0415b5c9e9e0be906ce17446834f2aadc2655b79"
        },
        "date": 1728648710190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.79677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.7072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.27705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 166.6576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.49345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.18955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6104.18056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.55263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2299.98876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1610.02626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.44814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1554.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1345.19404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.5779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1760.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.075390625,
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
          "id": "9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb",
          "message": "Add support for single PutObject in mountpoint-s3-client (#1046)\n\n* Reintroduce the CRT InputStream as an option for the Message body\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up comments and tests on InputStream\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments to PutObjectTrailingChecksums and S3Operation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce separate params type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-11T21:40:18Z",
          "tree_id": "36ba1fef659d9a9b638854ce10fc9e95e08ab5f9",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb"
        },
        "date": 1728922549459,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.575,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.45390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.00625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.36865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.3423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.68583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.74482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5884.41162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 511.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2207.88779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.4857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.1166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1504.06357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1249.18505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.5947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1503.05556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.03583984375,
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
          "id": "4dc8e7db1754e543977eeb32ee6670824d29dd44",
          "message": "Remove use of ObjectInfo in S3 client HeadObject response (#1058)\n\n* Remove use of ObjectInfo in S3 client HeadObject response\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Change HeadObjectResult etag field from String to ETag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-24T08:02:29Z",
          "tree_id": "a811bc5dd139884d431dc5351357eec29eac1307",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4dc8e7db1754e543977eeb32ee6670824d29dd44"
        },
        "date": 1729777933564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 88.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 162.81845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.46806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.77978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.4029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5832.86572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 506.00625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2221.809375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.94345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1829.91767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.5283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1352.45048828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.92998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.633203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1723.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.9810546875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}