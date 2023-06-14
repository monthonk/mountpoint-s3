window.BENCHMARK_DATA = {
  "lastUpdate": 1686749782387,
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
          "id": "48b51326d6ce4ba3d825a4428492917dc8bf5321",
          "message": "Add benchmarks for CRT checksum bindings (#246)\n\nJust a few simple benchmarks to make sure our bindings aren't\r\naffecting performance. This should also make it easy to play\r\nwith performance on Graviton.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-15T18:55:27+01:00",
          "tree_id": "b0f2f0be30f14134b1b34cbc8c28d4d43bd698f3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/48b51326d6ce4ba3d825a4428492917dc8bf5321"
        },
        "date": 1684228511587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.092,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.8409939,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 42.378250799999996,
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
          "id": "d96822beb25b631c2f266905fb7a6e196d8b85a7",
          "message": "Use more specific labels for self-hosted runners (#248)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-16T16:54:25+01:00",
          "tree_id": "592f736597371b34663ff2e2d460d03fa5cacdf8",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d96822beb25b631c2f266905fb7a6e196d8b85a7"
        },
        "date": 1684276581388,
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
            "value": 1.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.174,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.5290938,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.918122700000005,
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
          "id": "4da9ab1766e4a4c8b4c7113ac08aee4301714c35",
          "message": "Test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-16T21:50:31Z",
          "tree_id": "f7da35144b14806bbb6196f33e630c90f4cb6163",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4da9ab1766e4a4c8b4c7113ac08aee4301714c35"
        },
        "date": 1684315517672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
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
            "value": 11.549,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.8266381,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.9433784,
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
          "id": "a4316a5022800d97c9fd199fc8651c8d113871f6",
          "message": "Test CI\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-17T09:37:56Z",
          "tree_id": "6cf44f0b70d18a470dfdef9f33f3b6ebe2f730ac",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a4316a5022800d97c9fd199fc8651c8d113871f6"
        },
        "date": 1684316954320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.377,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 61.162795100000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.6577838,
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
          "id": "fe4d717eba54ad48d17e23a06cffff9bfb6c1591",
          "message": "Integrate new CRT telemetry APIs (#261)\n\n* Integrate new CRT telemetry APIs\r\n\r\nThe telemetry APIs let us get metrics at a per-request granularity. This\r\nlets us deprecate some of the code we used to have for parsing out\r\nthings like request IDs from a meta request, and also break out our\r\nmetrics by request type. The new telemetry callback is invoked once per\r\nrequest sent by the CRT.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Update mountpoint-s3-client/src/s3_crt_client.rs\r\n\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-05-26T09:59:13-05:00",
          "tree_id": "a1ca847c5c2e3f639cb6791f015967a3772a98c2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/fe4d717eba54ad48d17e23a06cffff9bfb6c1591"
        },
        "date": 1685116676343,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.787,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.364,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.349,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 66.966,
            "unit": "seconds"
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
          "id": "04ac3516882b07bacb24bf046b6da20829036b18",
          "message": "Update to aws-c-common v0.8.22 (#264)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-26T16:40:12Z",
          "tree_id": "f4fad569d3ace822a92534abb6b2d9ae83771601",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/04ac3516882b07bacb24bf046b6da20829036b18"
        },
        "date": 1685445929519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.727,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.386,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.34,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.534,
            "unit": "seconds"
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
          "id": "e243ef78523119a6a405ea869e862411b123cfa8",
          "message": "Exclude test files from crt-sys crate (#265)\n\nSignificantly reduce the size of the `mountpoint-s3-crt-sys` crate, in order to stay under the 10MB threshold.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T10:38:28+01:00",
          "tree_id": "57d41f424fca0dbc9bf92cd164cc63b0489cc0a6",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e243ef78523119a6a405ea869e862411b123cfa8"
        },
        "date": 1685541181670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.755,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.374,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.218,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.087,
            "unit": "seconds"
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
          "id": "e52ecb02e1739c94611ec3d4cb64e2f913a97f65",
          "message": "Increment mountpoint-s3-client version number to 0.2.2 (#270)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T13:54:08Z",
          "tree_id": "6d8c4892cdf674c8103d04bc0c3c41b42328872a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e52ecb02e1739c94611ec3d4cb64e2f913a97f65"
        },
        "date": 1685697223616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.76,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.38,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.297,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.37,
            "unit": "seconds"
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
          "id": "e52ecb02e1739c94611ec3d4cb64e2f913a97f65",
          "message": "Increment mountpoint-s3-client version number to 0.2.2 (#270)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T13:54:08Z",
          "tree_id": "6d8c4892cdf674c8103d04bc0c3c41b42328872a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e52ecb02e1739c94611ec3d4cb64e2f913a97f65"
        },
        "date": 1685697245748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.701,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.382,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.416,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.557,
            "unit": "seconds"
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
          "id": "843c9630081e3d8c82c595f31431155763094cd9",
          "message": "Bump xml-rs from 0.8.4 to 0.8.14 (#279)\n\nBumps [xml-rs](https://github.com/kornelski/xml-rs) from 0.8.4 to 0.8.14.\r\n- [Changelog](https://github.com/kornelski/xml-rs/blob/main/Changelog.md)\r\n- [Commits](https://github.com/kornelski/xml-rs/compare/0.8.4...0.8.14)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: xml-rs\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-06T05:32:47Z",
          "tree_id": "8ebb6116e56d3606900ecd10b61e81506277f8e7",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/843c9630081e3d8c82c595f31431155763094cd9"
        },
        "date": 1686050042530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.756,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.398,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.266,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.064,
            "unit": "seconds"
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
          "id": "843c9630081e3d8c82c595f31431155763094cd9",
          "message": "Bump xml-rs from 0.8.4 to 0.8.14 (#279)\n\nBumps [xml-rs](https://github.com/kornelski/xml-rs) from 0.8.4 to 0.8.14.\r\n- [Changelog](https://github.com/kornelski/xml-rs/blob/main/Changelog.md)\r\n- [Commits](https://github.com/kornelski/xml-rs/compare/0.8.4...0.8.14)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: xml-rs\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-06T05:32:47Z",
          "tree_id": "8ebb6116e56d3606900ecd10b61e81506277f8e7",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/843c9630081e3d8c82c595f31431155763094cd9"
        },
        "date": 1686050094353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.698,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.374,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 7.295,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 67.223,
            "unit": "seconds"
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
          "id": "aa992189e9cf918c19805a80eb61a3ce69376974",
          "message": "Run benchmark with auto throughput config\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T09:47:55Z",
          "tree_id": "e792aba73d7b740be114bfcc0354b9f84f71def2",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/aa992189e9cf918c19805a80eb61a3ce69376974"
        },
        "date": 1686736800941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.215,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.126,
            "unit": "seconds"
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
          "id": "a016e53712b3738b9c2fc1dd40b6d69bfd012090",
          "message": "Updating the CRT submodules with the following commits to latest releases- (#288)\n\nc3f95ebf3d6d1608e1656bb08eca05e303cc4fd3\r\n5d912b0dc53d383cdd1dd82df87c60e8ca95a1da\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-06-14T00:14:40-05:00",
          "tree_id": "b07a846d475fe6b119946a8fcb1b05346a4c3138",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a016e53712b3738b9c2fc1dd40b6d69bfd012090"
        },
        "date": 1686737772051,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.23,
            "unit": "seconds"
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
          "id": "a016e53712b3738b9c2fc1dd40b6d69bfd012090",
          "message": "Updating the CRT submodules with the following commits to latest releases- (#288)\n\nc3f95ebf3d6d1608e1656bb08eca05e303cc4fd3\r\n5d912b0dc53d383cdd1dd82df87c60e8ca95a1da\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-06-14T00:14:40-05:00",
          "tree_id": "b07a846d475fe6b119946a8fcb1b05346a4c3138",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a016e53712b3738b9c2fc1dd40b6d69bfd012090"
        },
        "date": 1686737825107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.174,
            "unit": "seconds"
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
          "id": "1d6b130f22c60b3a7feb418060260dffca993780",
          "message": "Use 24xlarge instance\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T10:13:24Z",
          "tree_id": "c41ca2055429f75964b3fa00e0b2553813e8278b",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/1d6b130f22c60b3a7feb418060260dffca993780"
        },
        "date": 1686738167584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.72,
            "unit": "seconds"
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
          "id": "4d58ada175cf1aac8d0aff73d7e940df6b47d0fb",
          "message": "Print bench.out\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T10:16:37Z",
          "tree_id": "674d3f287a09a7a1cb9ba9cfc8213490bb55666a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4d58ada175cf1aac8d0aff73d7e940df6b47d0fb"
        },
        "date": 1686738493374,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.371,
            "unit": "seconds"
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
          "id": "095255b43f3066902ab7ff44150232c8cbf942a1",
          "message": "change instance\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-14T10:45:31Z",
          "tree_id": "254af52d1f86d68ebe79adaaea063ed2869e662c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/095255b43f3066902ab7ff44150232c8cbf942a1"
        },
        "date": 1686740146647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.798,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.08641060000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.315790799999995,
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
      }
    ]
  }
}