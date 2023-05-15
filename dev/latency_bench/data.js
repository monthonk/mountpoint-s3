window.BENCHMARK_DATA = {
  "lastUpdate": 1684167157394,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "748e70878149412e29ad1f7b711f928750f8371b",
          "message": "Update CRT submodules and document the process (#224)\n\nAddress issue #219.\r\n\r\nUpdate CRT submodules to the latest tagged releases:\r\n\r\n* aws-c-auth v0.6.26\r\n* aws-c-cal v0.5.26\r\n* aws-c-common v0.8.17\r\n* aws-c-compression v0.2.16\r\n* aws-c-http v0.7.7\r\n* aws-c-io v0.13.21\r\n* aws-c-s3 v0.2.8\r\n* aws-c-sdkutils v0.1.9\r\n* aws-checksums v0.1.14\r\n* aws-lc v1.9.0\r\n* s2n-tls v1.3.42\r\n\r\nAlso add short document to describe the process.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-28T08:36:10Z",
          "tree_id": "be032113da4336de31b64378e620d235b0075724",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/748e70878149412e29ad1f7b711f928750f8371b"
        },
        "date": 1682671603482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.577,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.76330259999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.225685399999996,
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
          "id": "0329646254f252c2b1da508a214df3e249c2908f",
          "message": "Add range argument to client download example (#227)\n\nThis was helpful for debugging #218 and #226.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-28T12:45:35-05:00",
          "tree_id": "1c6a61f6710d44fb629b432813ea8da47445530b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0329646254f252c2b1da508a214df3e249c2908f"
        },
        "date": 1682704563557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
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
            "value": 10.998,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.98316759999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.5289125,
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
          "id": "977473426b192a21890da1777f11be6e0732c036",
          "message": "Bump aws-c-s3 to v0.2.9 (#228)\n\nThis picks up the fix for #218.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-02T10:46:44-05:00",
          "tree_id": "cfaa7073603a25d40cb5010675f1dcf3d8c42bb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/977473426b192a21890da1777f11be6e0732c036"
        },
        "date": 1683043059633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.9,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.7939262,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.7440844,
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
          "id": "a9ebe6ddb31c00e0c14ab84bab6f47e64dcf5215",
          "message": "Fuse Test Etag prefetcher (#225)\n\nAdded fuse test to check prefetching behaviour with Etag\r\n\r\nSigned-off-by:sauraank <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-02T13:02:55-05:00",
          "tree_id": "d981dd917e91ec27c4d02dd7fdc85bfb96bbbb6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a9ebe6ddb31c00e0c14ab84bab6f47e64dcf5215"
        },
        "date": 1683051250750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.273,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.2691707,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.457057799999994,
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
          "id": "beabd7fca0371c7e90bbb0e9936a3d179a9436ec",
          "message": "Add get_object test with 1 byte range (#231)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-03T18:56:09-05:00",
          "tree_id": "6106c887258d4998468bbce15df9871f3d56367f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/beabd7fca0371c7e90bbb0e9936a3d179a9436ec"
        },
        "date": 1683158801847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.994,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.8868816,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.1016131,
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
          "id": "ea5ba334d3e21b9b134c1c6e79c4578f8e30dd3a",
          "message": "Handle channel closure in PartQueue (#233)\n\nImprove PartQueue to report an error (rather than blocking indeterminately) when trying to read beyond the body returned by the GetObject request. \r\n\r\nThe previous behavior, compounded with a bug in the CRT (now fixed: #228) where GetObject unexpectedly returned an empty body, manifested in #218.\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-04T11:32:30-05:00",
          "tree_id": "18a24cc9c265b9c53ba0224109dedace8ca38a15",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea5ba334d3e21b9b134c1c6e79c4578f8e30dd3a"
        },
        "date": 1683218631046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.247,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.9549149,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.492359,
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
          "id": "1130719c55c6c8a60e3268034e7d849f30c22fba",
          "message": "Basic property-based tests for writes (#229)\n\n* Basic property-based tests for writes\r\n\r\nThis is the first step in property-based testing for the write path.\r\nRight now, it tests scenarios where the entire write sequence happens at\r\nonce: mknod, open, write once, release. It generates a vector of such\r\noperations, with random paths and random file contents/sizes. After each\r\noperations, the test checks that the file system has the expected\r\ncontents.\r\n\r\nI'm stopping this PR here because it's enough to get the testing off the\r\nground, but doesn't yet cover a lot of the interesting cases we'd like to\r\ncheck. The focus here is getting the infrastructure in place to start\r\nadding more complex operations to the `Op` structure in future PRs.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't do manual path manipulation + other PR comments\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Fix root directory\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-04T11:36:39-05:00",
          "tree_id": "c53517eb84199e10c63c4fcc8223c4ebd614379e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1130719c55c6c8a60e3268034e7d849f30c22fba"
        },
        "date": 1683218754171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.195,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 54.0137375,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.2884522,
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
          "id": "e6b072f4bb948b58974d5d773aa5292c5f3b2546",
          "message": "Extract `fn read_dir_to_entry_names` for FUSE tests (#237)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-05T13:06:19+01:00",
          "tree_id": "88c8def3077e7228aeb52a00133993a399bbb57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6b072f4bb948b58974d5d773aa5292c5f3b2546"
        },
        "date": 1683289128265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.818,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.4726445,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.5223407,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiri@jpospisil.com",
            "name": "Jiri Pospisil",
            "username": "jiripospisil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81152c243fac653bcbf36a091e4411288c83ab7e",
          "message": "Add info about the unofficial AUR package to README (#239)\n\nSigned-off-by: Jiri Pospisil <jiri@jpospisil.com>",
          "timestamp": "2023-05-09T23:59:42Z",
          "tree_id": "2e9facd2fc6588d8edf934374e0ef392dbe2d639",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81152c243fac653bcbf36a091e4411288c83ab7e"
        },
        "date": 1683677410319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.79,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.135574,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.3703349,
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
          "id": "e592d72d4df3687cb06af60256313b83fffc0501",
          "message": "Implement CRT bindings for CRC checksum functions (#240)\n\n* Implement CRT bindings for CRC checksum functions\r\n\r\nAdd rust interfaces for CRC32 and CRC32C functions. We will be using\r\nthese functions to do data integrity check in the future.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Fix clippy errors and some small changes\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-09T22:53:41-05:00",
          "tree_id": "fd87989d0ec14a5c279049a4ca8876e160520454",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e592d72d4df3687cb06af60256313b83fffc0501"
        },
        "date": 1683691443670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.102,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 67.4955547,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.362414799999996,
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
          "url": "https://github.com/awslabs/mountpoint-s3/commit/467fae3f4297dd24d5fac2c54f75cfcb20eaf2fe"
        },
        "date": 1683896988575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.763,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.79570559999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 45.3241561,
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
          "id": "4d493bdff9d2dd36b5ec081a792b152d8f5f037d",
          "message": "Fix shadowing semantics doc and add tests (#242)\n\nThe doc was backwards from what we actually do and what we intended.\r\nDirectories will shadow files of the same name, in the interest of\r\nmaking as many objects visible as possible.\r\n\r\nI also added a new integration test that just quotes the documentation\r\nand implements it directly.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-12T14:58:32Z",
          "tree_id": "16aa74efde04f4b3265cc9a06e90ab2426138159",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4d493bdff9d2dd36b5ec081a792b152d8f5f037d"
        },
        "date": 1683910147165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.587,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.8385229,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.6329314,
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
          "id": "4e045b417643aa82c91020d32ed6e0e65bb6205f",
          "message": "Refactor ReaddirHandle to lazily create inodes  (#238)\n\n* Move ReaddirHandle into its own file\r\n\r\n`inode.rs` is getting too long to be readable.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Refactor `ReaddirHandle` to lazily create inodes\r\n\r\nThe motivation here is that `readdir` calls from FUSE generally only\r\nretrieve a small number of entries, but ListObjectsV2 calls to S3\r\nretrieve many entries. In the current code, we instantiate inodes for\r\nthose entries as soon as the ListObjectsV2 call completes, but because\r\nof the small batch size of `readdir`, most of these inodes will not be\r\nreturned to FUSE until some time later. Because the TTL of an inode's\r\nattributes is chosen at inode creation time, it will have expired by\r\nthis point, and so the kernel will immediately re-`lookup` these entries\r\nwhen they're returned to `readdir`. That makes `readdir` do O(n)\r\n`lookup` calls back to S3, defeating the purpose of ListObjectsV2.\r\n\r\nTo solve this problem, this change refactors the `ReaddirHandle`\r\nimplementation to defer creating inodes until an entry is actually\r\nreturned to `readdir`. The big idea is that we now just create a new\r\n[ReaddirEntry] struct for each entry returned by ListObjectsV2, and all\r\nthe `readdir` logic works in terms of those things rather than directly\r\non inodes. The conversion from [ReaddirEntry] to an actual inode then\r\nhappens right before returning the entry to `readdir`.\r\n\r\nI took this opportunity to refactor this code (hopefully for the\r\nbetter!) since this change was adding yet another layer of complexity\r\ninto the logic for iterating directory entries. I also tried to capture\r\nmy understanding of this code in a new module comment. There is still a\r\nbug here around page sizes (#190) that I think this comment and refactor\r\nwill make it easier to fix, but let's do that separately to avoid making\r\nthis change bigger.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-12T12:27:36-05:00",
          "tree_id": "fcfc80546752ff1c34a9e9d8b57e514c5daa3101",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e045b417643aa82c91020d32ed6e0e65bb6205f"
        },
        "date": 1683913092674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.06,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.8337908,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.126852799999995,
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
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b153d819612fca772f06dd1be27e587554f28705"
        },
        "date": 1684167156864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.279,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.267,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.15033659999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.431531299999996,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}