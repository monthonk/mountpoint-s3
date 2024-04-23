window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jchorl@users.noreply.github.com",
            "name": "Josh Chorlton",
            "username": "jchorl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243c4df87a5df171ecaaa5fdb33d327d65d0b894",
          "message": "decrease closed-channel log severity (#443)\n\n* decrease closed-channel log severity\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\n\n* switch to trace\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\n\n---------\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>",
          "timestamp": "2023-08-10T16:54:47Z",
          "tree_id": "e780dffdc8e8798b170c705d5ccb547bae937f40",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/243c4df87a5df171ecaaa5fdb33d327d65d0b894"
        },
        "date": 1692028221651,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.7744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.41796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2559.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1657.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 222.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.3515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
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
          "id": "32a4f17fb3a8433d9f043ea237839731ec8ea60e",
          "message": "Update credential duration\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-15T10:41:36Z",
          "tree_id": "0634a9d1047361564562c836f1a0d362a7ca44cd",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/32a4f17fb3a8433d9f043ea237839731ec8ea60e"
        },
        "date": 1692107309463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.37529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.5583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.972265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.00263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.04287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.43818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2718.3083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.25419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 24.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.76494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1750.5427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.51767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 231.905078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.09599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1211.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 843.54833984375,
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
          "id": "3380f0cb2177840386487ecc76ddc81aaad9b5f2",
          "message": "Increase credentials duration when assuming role for benchmark ci job (#459)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-16T02:00:18Z",
          "tree_id": "b2c9a74a6b34a8c148f4175dd6301d298be03e2d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/3380f0cb2177840386487ecc76ddc81aaad9b5f2"
        },
        "date": 1692183534226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2616.9111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1765.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 193.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.6416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
            "unit": "MiB/s"
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
          "id": "5556377c39ed69921a3977a5cb4ba3afa327925a",
          "message": "Small docs fixes (#464)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-21T10:54:39Z",
          "tree_id": "edd53bf1caf9ae1427c80e01dc185f77245c4f54",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/5556377c39ed69921a3977a5cb4ba3afa327925a"
        },
        "date": 1692651076352,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.99404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.186328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.57783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2730.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.15517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.49794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.51005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1777.44462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.58359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 240.70537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1411.99169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.24541015625,
            "unit": "MiB/s"
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
          "id": "b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601",
          "message": "Bump AWS SDKs to latest version (#476)\n\nThis removes webpki from our dependencies to fix this: https://rustsec.org/advisories/RUSTSEC-2023-0052\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-23T21:28:50Z",
          "tree_id": "d2a7a159ef1bbf9e5ea3f5e7cf4e672fe26c30d9",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601"
        },
        "date": 1692879198197,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.6375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.99482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.66982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.70107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.65888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.86455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.502734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.94873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2733.39267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.56142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.9810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1771.25166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 227.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1452.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.22822265625,
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
          "id": "6103a2f3ca90a603bec34d4d064099b13ce3bfe6",
          "message": "Make allow_other and allow_root mutually exclusive (#475)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-24T10:59:17Z",
          "tree_id": "f19be32f858092c7ab03020a1f813ecaa9e33988",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/6103a2f3ca90a603bec34d4d064099b13ce3bfe6"
        },
        "date": 1692897161780,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.13515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 11.4064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.32666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 4.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.2583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 0.37275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.26123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 0.38935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1363.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 66.29521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1.3890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 0.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 765.61650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 2.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 83.31337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2.462109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 941.29951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.7716796875,
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
          "id": "5626e204259e6a8141d798dbc0837ce3e3e3c3c3",
          "message": "Allow reading restored GFR/GDA objects (#434) (#467)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2023-08-30T22:33:46Z",
          "tree_id": "b6e1559cd71f934917f8e13028b3f7ddb68ef46a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/5626e204259e6a8141d798dbc0837ce3e3e3c3c3"
        },
        "date": 1693487950902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.63232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.00146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.114453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.48740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.394921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.75908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2740.1255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.70205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 30.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.659375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1789.01669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 43.21845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 176.84775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 43.067578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1449.71103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.79189453125,
            "unit": "MiB/s"
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
          "id": "7643a22ac362e6ace91b2a266f4cc91b7e6570bc",
          "message": "Bump version of Mountpoint to v1.0.1 (#494)\n\n* Bump version of Mountpoint to v1.0.1\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added description of changes in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T09:11:10Z",
          "tree_id": "eace6e6893afca2d09c22b628c500710f6a04933",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7643a22ac362e6ace91b2a266f4cc91b7e6570bc"
        },
        "date": 1693585390231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.73115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.0953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.20625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.68056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.63818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.07236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2742.3224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.11904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.7908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.37724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1810.02080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 44.97900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 169.00712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 45.48212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1557.21123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.2890625,
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
          "id": "0dec64473d3326b776adf2004b743471294cb0a4",
          "message": "Change release title\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-09-01T13:17:28Z",
          "tree_id": "5bf2d177a87bc23aa7b0dbe1351ce36a6ff10504",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/0dec64473d3326b776adf2004b743471294cb0a4"
        },
        "date": 1693585520801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.61943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.315234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.83154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2762.11201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.646875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.23330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1732.83955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 44.1111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 179.79951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 43.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1425.00498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 947.86611328125,
            "unit": "MiB/s"
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
          "id": "7643a22ac362e6ace91b2a266f4cc91b7e6570bc",
          "message": "Bump version of Mountpoint to v1.0.1 (#494)\n\n* Bump version of Mountpoint to v1.0.1\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added description of changes in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T09:11:10Z",
          "tree_id": "eace6e6893afca2d09c22b628c500710f6a04933",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7643a22ac362e6ace91b2a266f4cc91b7e6570bc"
        },
        "date": 1693585666165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.69716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.03017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.88310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.95107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.8951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2759.50654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.82060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2.68857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.23408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1853.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 46.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 190.24462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 45.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1552.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.447265625,
            "unit": "MiB/s"
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
          "id": "534c3ed7f53289587b9aa47778a7ffa76109f81e",
          "message": "Added Unreleased section in changelog (#497)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T15:57:58Z",
          "tree_id": "7fb39eccb7cba98135a54cd7b5f5f4eeeb3dfd9f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/534c3ed7f53289587b9aa47778a7ffa76109f81e"
        },
        "date": 1693853239958,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.24150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.1501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.48037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.84814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2722.8775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2.863671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.91376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1832.4826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 44.12626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 158.14931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 43.2201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1601.63857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1041.2298828125,
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
          "id": "4db11adabc77c365d052ad99b4d64fd19b7e73bb",
          "message": "Cancel unused in-flight prefetch tasks (#505)\n\nPreviously, mountpoint-s3 would not cancel prefetch tasks that it was going to ignore.\nInstead, they would continue to be polled by the executor despite the results never being checked.\nThis change ensures that the task handles are dropped which cancels the task/future.\n\nIn the future, we may want to retain some of these tasks where the prefetcher may still be able to make use of them.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-06T16:52:01Z",
          "tree_id": "a0e86d27049a74a659b94beb839ff541891b1e61",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4db11adabc77c365d052ad99b4d64fd19b7e73bb"
        },
        "date": 1694112609660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.31875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.66552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.49013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.22734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.52890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.88828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.50771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.47734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2730.33251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4.09873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.77255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1680.96572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 164.296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 942.25341796875,
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
          "id": "171c4200df20223e831dcc856103d52bc4029e15",
          "message": "Improve logging and error handling in benchmark script (#507)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-15T14:40:01Z",
          "tree_id": "5ceef93a7ccacff27d8a3786e112104808a86f98",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/171c4200df20223e831dcc856103d52bc4029e15"
        },
        "date": 1695043855076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.12451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.70546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.887109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.588671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.410546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.52041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.35732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2735.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.6154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4.1345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1715.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.728125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 162.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.23916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.973046875,
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
          "id": "73328cc64a2dbca78e879730d4d264aedd881c60",
          "message": "Silence unnecessary-cast clippy error on linux arm64 (#539)\n\nOn linux arm64 `::libc::c_char` (returned by `aws_log_subject_name`) is defined as `u8`,\nso a cast to `u8` is flagged as unnecessary by clippy, but it is required on other platforms.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-09-28T17:55:20Z",
          "tree_id": "a0ce5d536b517b256bd659209ff23308db318e09",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/73328cc64a2dbca78e879730d4d264aedd881c60"
        },
        "date": 1696262483285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.86396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.35361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.343359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.476953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.49814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2708.7650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 3.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.80810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1649.55537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.70869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 137.07119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 42.3166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1502.6259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.77265625,
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
          "id": "16efe55c27781f8a8728491b10d5040a492bd014",
          "message": "Update CONFIGURATION.md to mention HTTPS endpoint explicitly (#541)\n\nSome users reached out to clarify if mountpoint-s3 will use HTTPS or HTTP to access Amazon S3. By updating this documentation, this is mentioned and can be found when performing text searches, etc..\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-05T13:50:44Z",
          "tree_id": "8490834445020a8c4d96e10826752bd2707a0fe3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/16efe55c27781f8a8728491b10d5040a492bd014"
        },
        "date": 1696946307041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.50400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.58447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.79189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.36015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2691.73203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4.3744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 13.0150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1629.4763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 43.458203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 136.96953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 42.52314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1325.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 920.53203125,
            "unit": "MiB/s"
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
          "id": "5a219733940d7f9dd9cfa4aeabe4ddb94606f290",
          "message": "Fix a compiler warning (#817)\n\nWe forgot to re-export ChecksumAlgorithm in the public API.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-15T17:46:14Z",
          "tree_id": "fadf4e68b28f854fbe0bcdf079d9e8a3040860a3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/5a219733940d7f9dd9cfa4aeabe4ddb94606f290"
        },
        "date": 1711136302167,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 11.41875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.6033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 7.2345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.25205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 0.4484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.26005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 0.4546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 342.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 65.08896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.2736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 3.2955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 137.89462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 2.6654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 110.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 90.112109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2.62783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1221.3529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 809.16123046875,
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
          "id": "b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29",
          "message": "Fix failing CI jobs (#824)\n\n* Fix clippy errors\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update cargo about in packaging image\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-25T12:02:19Z",
          "tree_id": "287ebbdd68c77528b99a81c6ed8fb0ea3a40c82e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29"
        },
        "date": 1711379646363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.32998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 12.42177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.8787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 7.46826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.25771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 0.4390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.2515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 0.44423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 238.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 64.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 3.6384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 163.38251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 2.62841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 80.35576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 121.747265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2.58193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1280.348046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 844.1720703125,
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
          "id": "84827e7b07a1c5f8eca0d9508c71bbb9263099af",
          "message": "Expose memory consumption metrics (#820)\n\n* Add memory consumption metrics for the prefetcher\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Add buffer pool usage metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Report mountpoint total memory usage\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-30T03:42:01Z",
          "tree_id": "75d59e4b9095c5c00d3f8f5671ab60ceda722981",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/84827e7b07a1c5f8eca0d9508c71bbb9263099af"
        },
        "date": 1712059404701,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.50244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 12.8259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.11748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 8.209375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 0.48837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.26884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 0.49052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 468.354296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 69.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.85771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 4.21142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 173.58134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 2.84287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 126.30283203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 177.6625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 2.83564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 930.4388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 818.3564453125,
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
          "id": "cecd7e829fad24cdb52707a96260ca3c60a14845",
          "message": "Update CRT submodules to latest releases (#838)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-09T07:58:03Z",
          "tree_id": "7244ca953854c34512447bf25af063459d5c3cd1",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cecd7e829fad24cdb52707a96260ca3c60a14845"
        },
        "date": 1712665298083,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 13.5482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.53291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 15.7029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.0359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 3.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.06064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 3.4390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 550.21796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 71.64189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 14.78359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 23.9474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 170.72392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 18.131640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 135.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 120.37666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 17.98916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 861.32451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 799.92568359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "268b672c81b3b8820af29051b599deaf04207b88",
          "message": "Bump rustls from 0.21.10 to 0.21.11 (#857)\n\nBumps [rustls](https://github.com/rustls/rustls) from 0.21.10 to 0.21.11.\n- [Release notes](https://github.com/rustls/rustls/releases)\n- [Changelog](https://github.com/rustls/rustls/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/rustls/rustls/compare/v/0.21.10...v/0.21.11)\n\n---\nupdated-dependencies:\n- dependency-name: rustls\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-21T04:43:37Z",
          "tree_id": "56bb3f4b0bcbae137ece675cfccedd3af1f6b1b4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/268b672c81b3b8820af29051b599deaf04207b88"
        },
        "date": 1713881601495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.26943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 12.90224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.17177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 15.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.1837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 3.30537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 3.32001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 452.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 67.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 13.37734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 21.96123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 155.264453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 17.47783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 133.75,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 110.52578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 17.2712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 830.566015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 765.9609375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1713881602438,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3"
}