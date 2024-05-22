window.BENCHMARK_DATA = {
  "lastUpdate": 1716395485043,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
        "date": 1713881589670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.06552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 16.46083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 17.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.91962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.676953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.27734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 517.00166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 83.03505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 18.33291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 23.33974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 111.27392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 20.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 93.723046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 93.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 20.70009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1283.13349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 845.8693359375,
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
          "id": "54a8e74c44d686cf90c317002ce1445e404d4d4c",
          "message": "Improve cancellation test for PutObject write (#884)\n\n* Improve cancellation test for PutObject write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Add TODO\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-22T14:23:47Z",
          "tree_id": "bcf94d568f57ac8c70a006fb673df076c8b72a96",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/54a8e74c44d686cf90c317002ce1445e404d4d4c"
        },
        "date": 1716395484099,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.69267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 25.11455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.50712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.4337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.7513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.13369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.13056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1073.58134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 130.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 34.37529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 39.917578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 426.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 332.9013671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 381.8044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1569.49951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1059.720703125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}