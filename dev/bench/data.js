window.BENCHMARK_DATA = {
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
        "date": 1681876039399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1001.7197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6467.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1949.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.0458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.97265625,
            "unit": "MiB/s"
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
        "date": 1682013252438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.34765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 989.908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6244.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2226.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.62890625,
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
          "id": "f57561899ef2e5fc1be30e044c873e7ddf754221",
          "message": "Add time to first byte benchmark (#217)\n\nIn this commit, we add a new type of benchmark to measure the latency\r\naspect of the read operation.\r\n\r\nWe do this by running fio workloads that send one byte read request with\r\none byte block size against existing files. The time it takes to complete\r\nthis operation will be measured and recorded as time to first byte read.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-21T12:40:09-05:00",
          "tree_id": "04bfc5e1cb9a7d1a6331b8b286d05ad61f1f7013",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f57561899ef2e5fc1be30e044c873e7ddf754221"
        },
        "date": 1682100058838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 957.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6249.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2037.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.880859375,
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
          "id": "75b3d583e63ece7fff6c4435d04a16a328effaec",
          "message": "Remove children not found on lookup and refactor update methods (#216)\n\n* Remove children not found on lookup & refactor update methods\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Fail early on UpdateStatus::Neither.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Simplify ownership in UpdateStatus\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add tracing on key not found and make control flow clearer\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-25T10:50:47-05:00",
          "tree_id": "54772f57b2cc2f98cc283312481d4bc6b57a1221",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/75b3d583e63ece7fff6c4435d04a16a328effaec"
        },
        "date": 1682439111879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 823.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6156.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1888.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.4052734375,
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
          "id": "0962c03350cc2e48a287641210d6c0ceeeffc3a2",
          "message": "Update vendored fuser to 076c9d9 (#222)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-26T11:05:57+01:00",
          "tree_id": "f8a8a7160b164bf0820cfbb374e59c1f6979212c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0962c03350cc2e48a287641210d6c0ceeeffc3a2"
        },
        "date": 1682504809092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1003.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6345.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2129.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.16796875,
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
          "id": "fdfee3da27beb1c289243865cedf3cfe796a90c4",
          "message": "Bump aws-sigv4 from 0.54.1 to 0.54.2 (#223)\n\nBumps [aws-sigv4](https://github.com/awslabs/smithy-rs) from 0.54.1 to 0.54.2.\r\n- [Release notes](https://github.com/awslabs/smithy-rs/releases)\r\n- [Changelog](https://github.com/awslabs/smithy-rs/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/awslabs/smithy-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-sigv4\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-26T16:50:13Z",
          "tree_id": "b36fc04be3c55e4f5a31ca5fe33a8debcef91fce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdfee3da27beb1c289243865cedf3cfe796a90c4"
        },
        "date": 1682529098874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.1220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 882.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6358.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2236.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.88671875,
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
          "id": "330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd",
          "message": "Implement mkdir (#202)\n\n* Implement mkdir to create local directories\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Acquire locks from top to bottom in finish_writing\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use mount time for local directory stat\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add section for `mkdir` to SEMANTICS.md\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Improve comments and add check for cycles\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-26T20:07:30-05:00",
          "tree_id": "0763785cf0f51ede4b096dbc9c2c8b2a867407ee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd"
        },
        "date": 1682558886178,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1047.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6529.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 150.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.21875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1854.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.0615234375,
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
          "id": "14d7f37352e931c7ba5f82715d0d01e4e4840579",
          "message": "Test time to first byte benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T09:13:52Z",
          "tree_id": "c299f0bfd1e9c97f100a8b8d8184a108467f487c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/14d7f37352e931c7ba5f82715d0d01e4e4840579"
        },
        "date": 1682588821982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 23.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 166.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.62109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 884.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 222.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.5341796875,
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
          "id": "d2f9775ecdeef85f143bd404c323673b82e8f711",
          "message": "Less validation\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T09:56:05Z",
          "tree_id": "a3a6819ef360dc249cb0c7e679fdf8107ceb4b03",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d2f9775ecdeef85f143bd404c323673b82e8f711"
        },
        "date": 1682590597798,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 484.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1906.2119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.8828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1202.951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.439453125,
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
          "id": "c83dcabca4b74cd585b8c24d0e773b708eb85f65",
          "message": "Refactor benchmark\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T10:44:21Z",
          "tree_id": "37917989932640e100daed54d1eabe8465fb8ff6",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/c83dcabca4b74cd585b8c24d0e773b708eb85f65"
        },
        "date": 1682593700235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.14453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.0771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 753.7744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 11.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6589.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 182.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 15.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1927.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.1162109375,
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
          "id": "e05dc6bf46650bb62120732ed18bc8e2449a43f9",
          "message": "Add cpu info\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-27T10:51:37Z",
          "tree_id": "c64bdfe541161e9f6826f2a79280a42671b9e2ee",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e05dc6bf46650bb62120732ed18bc8e2449a43f9"
        },
        "date": 1682594117242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.14453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1281.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6788.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 172.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2350.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.8076171875,
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
          "id": "1a3f7b430d4fde708ad27f78934aaf5af48a0594",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-04-27T14:13:31Z",
          "tree_id": "a11b9f9dc3972ae79f16bcb65a3d9c03485dda8f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/1a3f7b430d4fde708ad27f78934aaf5af48a0594"
        },
        "date": 1682606268254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.0263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 146.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.5947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 874.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 157.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 178.123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.7744140625,
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
          "id": "b20a3e61a4c8fc3e4831a159ab317ccb1b7438fe",
          "message": "Merge branch 'internal_checksum' into bench_test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-28T09:09:42Z",
          "tree_id": "9b42234bef95935f9e5f98f043a1781fbdfb343c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/b20a3e61a4c8fc3e4831a159ab317ccb1b7438fe"
        },
        "date": 1682674353230,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 991.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4149.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 171.3408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1882.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.220703125,
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
          "id": "1bdc5375be4b8aff3466c57d73a227470b3c2db0",
          "message": "Merge branch 'part_queue' into bench_test",
          "timestamp": "2023-04-28T13:30:22Z",
          "tree_id": "11f9e6493d0fe201296672cddc8087cca3c151e4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/1bdc5375be4b8aff3466c57d73a227470b3c2db0"
        },
        "date": 1682691182296,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 333.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2552.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 170.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.2177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1097.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 29.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.3291015625,
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
          "id": "99b7e6045b522671670f44efa05dbddf373ef685",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-04-28T15:29:15Z",
          "tree_id": "c369e9a3124ea62737aa71b9b4fa05e0ca81116d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/99b7e6045b522671670f44efa05dbddf373ef685"
        },
        "date": 1682697143545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 206.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2736.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 167.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1080.46875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.4638671875,
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
          "id": "d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-05-02T09:33:13Z",
          "tree_id": "b77185559b40aa97f3a6e01f814bfa5e5cc4f84a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1"
        },
        "date": 1683021386840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.3203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 330.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3446.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 174.78125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1332.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 29.171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.728515625,
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
          "id": "d5bb12801832d9046ed18e0514a016fec7f493e1",
          "message": "Should be slower\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T12:35:22Z",
          "tree_id": "42f11d053a8da6ae8a808d659c3540bcd697eb77",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d5bb12801832d9046ed18e0514a016fec7f493e1"
        },
        "date": 1683032297116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 396.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1702.892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 168.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 479.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 29.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.1708984375,
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
          "id": "d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1",
          "message": "Merge branch 'internal_checksum' into bench_test",
          "timestamp": "2023-05-02T09:33:13Z",
          "tree_id": "b77185559b40aa97f3a6e01f814bfa5e5cc4f84a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/d6bb3f178e2858d1c93e4b2e3fbf31348c5ffca1"
        },
        "date": 1683032713911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.15234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 558.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3004.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.32421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1376.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.3974609375,
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
          "id": "48e3c75e8e72355a7dc764c257b09e5cef5a26f7",
          "message": "Remove third party library\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T12:50:25Z",
          "tree_id": "2212d049310f785a6a169ca7b8fca497763a1f9f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/48e3c75e8e72355a7dc764c257b09e5cef5a26f7"
        },
        "date": 1683033826409,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 366.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4457.734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1920.34375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.1845703125,
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
          "id": "711fc2724fe1f1263e7a7d9eb9b7fc021f746bf7",
          "message": "Validate with crt function\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-02T13:32:22Z",
          "tree_id": "f36131df1982ce47b87cb91ed38ec12e882c4915",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/711fc2724fe1f1263e7a7d9eb9b7fc021f746bf7"
        },
        "date": 1683035712088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.4375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.0673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 447.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.3212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4392.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1715.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.314453125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1683035713005,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3"
}