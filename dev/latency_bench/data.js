window.BENCHMARK_DATA = {
  "lastUpdate": 1716202325948,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "8728575280a8f07ac4d92a935926928d816ff1fa",
          "message": "Document Mountpoint configuration options and defaults (#436)\n\n* Document Mountpoint configuration options and defaults\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-07T17:00:23Z",
          "tree_id": "b66137541ea1faedc609e9658263e163d9c77ab4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8728575280a8f07ac4d92a935926928d816ff1fa"
        },
        "date": 1691497497233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.205,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.257,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.058,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.8438231,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.3090746,
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
          "id": "e106f62c57d5e6922455006fc172129a6b897534",
          "message": "Bump version of mountpoint-s3 to v1.0.0 (#438)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-08T16:05:08+01:00",
          "tree_id": "fe55d2c2c1f772ff33c5b99c9197bf8358441c8f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e106f62c57d5e6922455006fc172129a6b897534"
        },
        "date": 1691764483221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.231,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.981,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 104.2792386,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.17949990000001,
            "unit": "milliseconds"
          }
        ]
      },
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
        "date": 1691766490777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.237,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.928,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.24467,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.3296565,
            "unit": "milliseconds"
          }
        ]
      },
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
        "date": 1692027445540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.677,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 97.8055371,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.376188899999995,
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
          "id": "f74b830b35ae5dcd7f89af0393137ef9f1019119",
          "message": "Test the benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-15T08:58:48Z",
          "tree_id": "5b771d03ee2e69f6df43cc5046b1426c18f47033",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/f74b830b35ae5dcd7f89af0393137ef9f1019119"
        },
        "date": 1692090583187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.192,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.592,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.2664123,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.3963614,
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
          "id": "f94db297679afeae7f0a035cb60bf9860c348c8a",
          "message": "Refactor\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-15T09:20:29Z",
          "tree_id": "7608ce978422b83b1006070934f922ba5513f364",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/f94db297679afeae7f0a035cb60bf9860c348c8a"
        },
        "date": 1692091872414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.212,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.927,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.7514302,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.40476240000001,
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
          "id": "32a4f17fb3a8433d9f043ea237839731ec8ea60e",
          "message": "Update credential duration\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-15T10:41:36Z",
          "tree_id": "0634a9d1047361564562c836f1a0d362a7ca44cd",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/32a4f17fb3a8433d9f043ea237839731ec8ea60e"
        },
        "date": 1692096729225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.199,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.063,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.13896220000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.761682,
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
          "id": "3380f0cb2177840386487ecc76ddc81aaad9b5f2",
          "message": "Increase credentials duration when assuming role for benchmark ci job (#459)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-16T02:00:18Z",
          "tree_id": "b2c9a74a6b34a8c148f4175dd6301d298be03e2d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/3380f0cb2177840386487ecc76ddc81aaad9b5f2"
        },
        "date": 1692182826446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.192,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.918,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.639473,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.4351527,
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
          "id": "5556377c39ed69921a3977a5cb4ba3afa327925a",
          "message": "Small docs fixes (#464)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-21T10:54:39Z",
          "tree_id": "edd53bf1caf9ae1427c80e01dc185f77245c4f54",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/5556377c39ed69921a3977a5cb4ba3afa327925a"
        },
        "date": 1692640501945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.253,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.869,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.56201870000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.6905961,
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
          "id": "b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601",
          "message": "Bump AWS SDKs to latest version (#476)\n\nThis removes webpki from our dependencies to fix this: https://rustsec.org/advisories/RUSTSEC-2023-0052\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-23T21:28:50Z",
          "tree_id": "d2a7a159ef1bbf9e5ea3f5e7cf4e672fe26c30d9",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601"
        },
        "date": 1692868614357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.626,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 121.7410648,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.2989225,
            "unit": "milliseconds"
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
        "date": 1693477380965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.258,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.526,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 152.6135036,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.4844756,
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
          "id": "7643a22ac362e6ace91b2a266f4cc91b7e6570bc",
          "message": "Bump version of Mountpoint to v1.0.1 (#494)\n\n* Bump version of Mountpoint to v1.0.1\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added description of changes in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T09:11:10Z",
          "tree_id": "eace6e6893afca2d09c22b628c500710f6a04933",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7643a22ac362e6ace91b2a266f4cc91b7e6570bc"
        },
        "date": 1693574791520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.262,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.455,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 134.2926676,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.1408903,
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
          "id": "0dec64473d3326b776adf2004b743471294cb0a4",
          "message": "Change release title\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-09-01T13:17:28Z",
          "tree_id": "5bf2d177a87bc23aa7b0dbe1351ce36a6ff10504",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/0dec64473d3326b776adf2004b743471294cb0a4"
        },
        "date": 1693574921256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.207,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.457,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 133.5339658,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.9337065,
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
          "id": "7643a22ac362e6ace91b2a266f4cc91b7e6570bc",
          "message": "Bump version of Mountpoint to v1.0.1 (#494)\n\n* Bump version of Mountpoint to v1.0.1\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added description of changes in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T09:11:10Z",
          "tree_id": "eace6e6893afca2d09c22b628c500710f6a04933",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7643a22ac362e6ace91b2a266f4cc91b7e6570bc"
        },
        "date": 1693575040060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.285,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 13.234,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 122.69367190000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.0448428,
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
          "id": "534c3ed7f53289587b9aa47778a7ffa76109f81e",
          "message": "Added Unreleased section in changelog (#497)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T15:57:58Z",
          "tree_id": "7fb39eccb7cba98135a54cd7b5f5f4eeeb3dfd9f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/534c3ed7f53289587b9aa47778a7ffa76109f81e"
        },
        "date": 1693842648132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.258,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 13.239,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 150.8912212,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.588677,
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
          "id": "4db11adabc77c365d052ad99b4d64fd19b7e73bb",
          "message": "Cancel unused in-flight prefetch tasks (#505)\n\nPreviously, mountpoint-s3 would not cancel prefetch tasks that it was going to ignore.\nInstead, they would continue to be polled by the executor despite the results never being checked.\nThis change ensures that the task handles are dropped which cancels the task/future.\n\nIn the future, we may want to retain some of these tasks where the prefetcher may still be able to make use of them.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-06T16:52:01Z",
          "tree_id": "a0e86d27049a74a659b94beb839ff541891b1e61",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4db11adabc77c365d052ad99b4d64fd19b7e73bb"
        },
        "date": 1694101992568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.279,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 13.285,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 145.986635,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.1738899,
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
          "id": "171c4200df20223e831dcc856103d52bc4029e15",
          "message": "Improve logging and error handling in benchmark script (#507)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-15T14:40:01Z",
          "tree_id": "5ceef93a7ccacff27d8a3786e112104808a86f98",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/171c4200df20223e831dcc856103d52bc4029e15"
        },
        "date": 1695033237488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.297,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 13.595,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 394.8524834,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 87.0917118,
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
          "id": "73328cc64a2dbca78e879730d4d264aedd881c60",
          "message": "Silence unnecessary-cast clippy error on linux arm64 (#539)\n\nOn linux arm64 `::libc::c_char` (returned by `aws_log_subject_name`) is defined as `u8`,\nso a cast to `u8` is flagged as unnecessary by clippy, but it is required on other platforms.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-09-28T17:55:20Z",
          "tree_id": "a0ce5d536b517b256bd659209ff23308db318e09",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/73328cc64a2dbca78e879730d4d264aedd881c60"
        },
        "date": 1696251917083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.284,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.841,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 150.4147193,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 73.3794703,
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
          "id": "16efe55c27781f8a8728491b10d5040a492bd014",
          "message": "Update CONFIGURATION.md to mention HTTPS endpoint explicitly (#541)\n\nSome users reached out to clarify if mountpoint-s3 will use HTTPS or HTTP to access Amazon S3. By updating this documentation, this is mentioned and can be found when performing text searches, etc..\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-05T13:50:44Z",
          "tree_id": "8490834445020a8c4d96e10826752bd2707a0fe3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/16efe55c27781f8a8728491b10d5040a492bd014"
        },
        "date": 1696935668778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.262,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 13.068,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 143.0067866,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.5023738,
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
          "id": "50720ab30b852929d2ab73810ac7806623d9c21c",
          "message": "Update CRT submodules to latest releases (#877)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-13T16:58:41Z",
          "tree_id": "afde2e462a548e5e0cc2996bcc54290f3473cc05",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/50720ab30b852929d2ab73810ac7806623d9c21c"
        },
        "date": 1716202325013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.458,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.692,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 2.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 16.756,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 226.7468134,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 182.8553321,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}