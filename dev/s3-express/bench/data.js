window.BENCHMARK_DATA = {
  "lastUpdate": 1727975628493,
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
          "id": "6d498852520ba2f22ca3c76409f7b3faad9e2106",
          "message": "Update nix dependency from 0.27.1 to 0.29.0 (#1003)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-06T17:00:41Z",
          "tree_id": "1afbc653d279290796a7a6ab38338c500265fe29",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/6d498852520ba2f22ca3c76409f7b3faad9e2106"
        },
        "date": 1725872238051,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.4474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.43701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.506640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.2779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.7095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.13994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5933.55537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.8517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1292.64443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 225.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.98291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.20927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1511.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1442.2166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.3943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1742.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.809765625,
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
          "id": "cdb8ccdabff7d6ad3a6be379317f2ff7341d834f",
          "message": "Avoid extending part on backward seek (#1005)\n\n* Avoid extending part on backward seek\n\nCurrently, we combine parts from the seek window to `current_part` in the\npart queue whenever we seek backward which mean we also have to re-compute\nchecksums for this combined part. It particularly affect read throughput in\nsome use cases where backward seek rate is high. This change should improve\nthe throughput for those use cases.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-09T13:05:39Z",
          "tree_id": "360e3d8af2c73f8865d5d0ea88be24afac2d1ab2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cdb8ccdabff7d6ad3a6be379317f2ff7341d834f"
        },
        "date": 1725960362953,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.2837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.6541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.62509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.99814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6011.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 511.21220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2476.16396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.58017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1853.77021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.13076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1690.62138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1226.954296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.05390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1400.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.70166015625,
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
          "id": "9542728630fc61d316cb1772662a98d649848cb4",
          "message": "Fix mountpoint-s3-crt-sys build (#1011)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-12T16:53:30Z",
          "tree_id": "19cc4274eef18a10240dd5ffaac764d23afd7193",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/9542728630fc61d316cb1772662a98d649848cb4"
        },
        "date": 1726229066247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.5943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.153125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.11376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.96513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.0375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.57861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.74501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6151.12724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2383.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.56982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2020.499609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.7275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1562.57314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1451.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1470.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.05166015625,
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
          "id": "9ed8b6243f4511e2013b2f4303a9197c3ddd4071",
          "message": "Release 1.9.0 (#1016)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-13T13:44:17Z",
          "tree_id": "74c50d58f8bd92175dae44d35c32b1aac022a675",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/9ed8b6243f4511e2013b2f4303a9197c3ddd4071"
        },
        "date": 1726480331275,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.03779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.20986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.5560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.53388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.63759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.8216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5885.84248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.49365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2370.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.694140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1873.3744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.69443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1542.60302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1533.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.57001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1880.24306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.35068359375,
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
      }
    ]
  }
}