window.BENCHMARK_DATA = {
  "lastUpdate": 1683035122028,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jb2cool@gmail.com",
            "name": "Jason Bramwell",
            "username": "jb2cool"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70b2b684e949c0966c5d2507f875279ae380a9f9",
          "message": "Adding instructions for building on Debian/Ubuntu (#215)\n\n* Adding instructions for building on Debian/Ubuntu\r\n\r\nAdded in dependencies for Debian/Ubuntu and broke RPM/Deb out into their own lines.\r\n\r\nSigned-off-by: Jason Bramwell <jb2cool@gmail.com>\r\n\r\n* Minor tweaks\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Jason Bramwell <jb2cool@gmail.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-19T03:26:46Z",
          "tree_id": "c4e5f1ee5bf2bcfb9718fdbd1118984fa74da9f4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70b2b684e949c0966c5d2507f875279ae380a9f9"
        },
        "date": 1681875355814,
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
            "value": 1.218,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.686,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f3b98086ab5f6b7c7454c50cc96bddeabf9f35f",
          "message": "Add support for AWS profile and unsigned requests as command line arguments (#209)\n\n* Add supports for AWS profile and unsigned requests.\r\n\r\nSupports profile and unsigned requests with the following:\r\n\r\n* Add option --profile for a specific profile in the AWS credentials file #151\r\n* Add support for unsigned requests #181\r\n\r\nThis commit also includes changes that rust defined signing_config owns a\r\ncredentials_provider so it can live as long as signing_conig.\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\n\r\n* Add header for no-sign-request help\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Charles Zhang <zyaoshen@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-20T17:33:22Z",
          "tree_id": "5b43b74f54597b39b9e2710b9a924f110ecc0790",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f3b98086ab5f6b7c7454c50cc96bddeabf9f35f"
        },
        "date": 1682012563160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.039,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f57561899ef2e5fc1be30e044c873e7ddf754221",
          "message": "Add time to first byte benchmark (#217)\n\nIn this commit, we add a new type of benchmark to measure the latency\r\naspect of the read operation.\r\n\r\nWe do this by running fio workloads that send one byte read request with\r\none byte block size against existing files. The time it takes to complete\r\nthis operation will be measured and recorded as time to first byte read.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-21T12:40:09-05:00",
          "tree_id": "04bfc5e1cb9a7d1a6331b8b286d05ad61f1f7013",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f57561899ef2e5fc1be30e044c873e7ddf754221"
        },
        "date": 1682099433917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.73,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.86362109999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.1648899,
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
          "id": "75b3d583e63ece7fff6c4435d04a16a328effaec",
          "message": "Remove children not found on lookup and refactor update methods (#216)\n\n* Remove children not found on lookup & refactor update methods\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Fail early on UpdateStatus::Neither.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Simplify ownership in UpdateStatus\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add tracing on key not found and make control flow clearer\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-25T10:50:47-05:00",
          "tree_id": "54772f57b2cc2f98cc283312481d4bc6b57a1221",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/75b3d583e63ece7fff6c4435d04a16a328effaec"
        },
        "date": 1682438498800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.783,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 103.22451579999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.4507301,
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
          "id": "0962c03350cc2e48a287641210d6c0ceeeffc3a2",
          "message": "Update vendored fuser to 076c9d9 (#222)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-26T11:05:57+01:00",
          "tree_id": "f8a8a7160b164bf0820cfbb374e59c1f6979212c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0962c03350cc2e48a287641210d6c0ceeeffc3a2"
        },
        "date": 1682504199978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.034,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.7565524,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.5862751,
            "unit": "milliseconds"
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
          "id": "fdfee3da27beb1c289243865cedf3cfe796a90c4",
          "message": "Bump aws-sigv4 from 0.54.1 to 0.54.2 (#223)\n\nBumps [aws-sigv4](https://github.com/awslabs/smithy-rs) from 0.54.1 to 0.54.2.\r\n- [Release notes](https://github.com/awslabs/smithy-rs/releases)\r\n- [Changelog](https://github.com/awslabs/smithy-rs/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/awslabs/smithy-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-sigv4\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-26T16:50:13Z",
          "tree_id": "b36fc04be3c55e4f5a31ca5fe33a8debcef91fce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdfee3da27beb1c289243865cedf3cfe796a90c4"
        },
        "date": 1682528485221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.933,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.4835529,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.8371392,
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
          "id": "330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd",
          "message": "Implement mkdir (#202)\n\n* Implement mkdir to create local directories\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Acquire locks from top to bottom in finish_writing\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use mount time for local directory stat\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add section for `mkdir` to SEMANTICS.md\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Improve comments and add check for cycles\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-26T20:07:30-05:00",
          "tree_id": "0763785cf0f51ede4b096dbc9c2c8b2a867407ee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd"
        },
        "date": 1682558263591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.945,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.7323526,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.66564,
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
      }
    ]
  }
}