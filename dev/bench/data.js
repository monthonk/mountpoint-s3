window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "971b7575668dc658ce55e6731ebe8eef47b215a6",
          "message": "Optimize part size for checksummed read (#315)\n\n* Optimize part size for checksummed read\r\n\r\nThe prefetcher stores data received from each input stream as a part in\r\nthe part queue structure. Usually, the part size is pretty big (8 MB or\r\nmore) and the checksum validation always has to be done against an entire\r\npart even if we only read a small portion of that part.\r\n\r\nThis makes checksummed read much slower than non-checksummed read. We could\r\nmake it more efficient by making the part smaller or ideally align the part\r\nsize to the read size so that we don't have to compute the checksum on\r\nunnecessary bytes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:31:11-05:00",
          "tree_id": "2396fc27e4e988000e28b565d6f2db663bd46a62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/971b7575668dc658ce55e6731ebe8eef47b215a6"
        },
        "date": 1688053936974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 852.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5200.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1897.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 18.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.5107421875,
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
          "id": "df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb",
          "message": "Avoid a copy when optimizing part size for checksums (#328)\n\nThe `chunks` iterator returns slices, so creating the `Bytes` for each\r\nchunk needs to do a copy. We can instead just do the `Bytes` conversion\r\nupfront from the `Box<[u8]>`, and then do O(1) splits of that `Bytes`\r\nobject for each chunk.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:15:04+01:00",
          "tree_id": "2cb7678c80405139d5e942e9f255c4b209a7d767",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb"
        },
        "date": 1688117752867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6269.140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.25,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1993.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.6328125,
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
          "id": "5946bb83b5baab5c75ca0f487aea9b1b2edd1184",
          "message": "Configure Dependabot to update Cargo and GitHub Action dependencies (#331)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T15:38:05+01:00",
          "tree_id": "550a4df365c6fd93bbc5697b0b1a587551a5ad30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5946bb83b5baab5c75ca0f487aea9b1b2edd1184"
        },
        "date": 1688137125293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.65625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1065.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6680.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1986.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.12109375,
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
          "id": "f90adbe516c0da7119c61c9facddad4c16ffd2b2",
          "message": "Readme shuffling and updates (#330)\n\n* Readme shuffling and updates\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Missing space\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T09:58:52-05:00",
          "tree_id": "e62f893e600f47da4b4de89efddb4913cecd852c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f90adbe516c0da7119c61c9facddad4c16ffd2b2"
        },
        "date": 1688138382113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.2802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1217.083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6246.525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1707.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.5302734375,
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
          "id": "38263d7856835b4a29798fee79245c49bc844a85",
          "message": "Bump aws-actions/configure-aws-credentials from 1 to 2 (#335)\n\nBumps [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) from 1 to 2.\r\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\r\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/v1...v2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-actions/configure-aws-credentials\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T15:07:57Z",
          "tree_id": "05c1c09cf91288b890c0fc37fd35f22d4376a7a6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/38263d7856835b4a29798fee79245c49bc844a85"
        },
        "date": 1688138959951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.9091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6697.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2399.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.9619140625,
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
          "id": "e1eed3830f1a4b7a254396db35419fbd72ef379b",
          "message": "Enforce maximum upload size (#329)\n\n* Expose part size from ObjectClient\r\n\r\nSome users of the client need to know what part size it's using\r\ninternally. Rather than plumbing that around everywhere, and deferring\r\nto CRT defaults if unspecified, let's just make it explicit everywhere.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Allow FUSE tests to set a part size\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Enforce maximum upload size\r\n\r\nUploads can fail if they require more than 10,000 parts. Right now we\r\nonly find out about that failure asynchronously when the CRT actually\r\nconstructs the 10,0001th part. This is bad because unlike other upload\r\nerrors, this one is a deterministic failure that we should be able to\r\nreport up front.\r\n\r\nOne trick here is that the kernel appears to retry failed writes from\r\npage cache when returning EFBIG, so we need to remember the reason the\r\nwrite failed.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Enforce part size bounds\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:09:42-05:00",
          "tree_id": "a130fc75afd1352b9c7db5c9a492b38c39fc1f00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1eed3830f1a4b7a254396db35419fbd72ef379b"
        },
        "date": 1688139039069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1333.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6630.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2409.98046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.9794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.671875,
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
          "id": "e7bad12eca37ee46f91e9ecccfd1cd2657815f4e",
          "message": "Turn write support on (#327)\n\n* Turn write support on\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Enable delete feature in workflows\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Only run unlink tests under delete feature\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T16:15:47+01:00",
          "tree_id": "12376fb46b7bf8d60ee2a5ff3982ea62ee26d80d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7bad12eca37ee46f91e9ecccfd1cd2657815f4e"
        },
        "date": 1688139374060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.09375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 18.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6661.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2357.8125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.6689453125,
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
          "id": "d71d4b437f3055eea8e53bf36b6ee67502ef9d11",
          "message": "Limit dependabot to focus on lockfile updates only (#342)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T10:34:28-05:00",
          "tree_id": "d26a1458fd0ef396572b60011e22a1b0510fccea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d71d4b437f3055eea8e53bf36b6ee67502ef9d11"
        },
        "date": 1688140501282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.9794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1335.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.25,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5989.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2227.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.4228515625,
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
          "id": "d992c790941ebf3490caf4501c694b89f6b533db",
          "message": "Disable dependabot for cargo (#347)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T11:28:38-05:00",
          "tree_id": "027ec96056595d9f9d7203b7a1fad9656ed72dd3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d992c790941ebf3490caf4501c694b89f6b533db"
        },
        "date": 1688143787832,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.17578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.0380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1181.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.21875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6364.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1954.9931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.16015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.625,
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
          "id": "69d9f90334fd77f54c7c1ae331e0ffb900fec60c",
          "message": "Abort upload on out-of-order writes (#341)\n\n* Add fuse test for out-of-order writes\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Abort upload after an out-of-order write attempt.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T11:29:44-05:00",
          "tree_id": "6656b398c77c324d0bb836ba0673fa3c6936b936",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/69d9f90334fd77f54c7c1ae331e0ffb900fec60c"
        },
        "date": 1688143822488,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.75,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1390.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6427.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2419.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.6513671875,
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
          "id": "15b062835a3d99c4b17d3742af1cba1b0bafdc7f",
          "message": "Explicitly prevent mounting over an existing mount (#348)\n\nIt's valid to mount multiple file systems to the same directory, but\r\ndoing so requires the first one to be mounted read-write, which is why\r\nthis wasn't a problem for us until #327. It seems libfuse2's version of\r\nfusermount explicitly checked this(?), but libfuse3 no longer rejects\r\nit.\r\n\r\nIn principle this might be something we'd want to allow, but I think the\r\nless surprising/error-prone customer experience is to refuse to do it,\r\nso let's explicitly forbid it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T18:47:00+01:00",
          "tree_id": "7218efb2e8616010d994131c38fcda7608cdacd6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15b062835a3d99c4b17d3742af1cba1b0bafdc7f"
        },
        "date": 1688148462097,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1714.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6364.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.0263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1948.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.6982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.255859375,
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
          "id": "eb5677d081b6e07457408b59bbf632ab47dd624e",
          "message": "Add automation to warn on comment visibility for closed issues (#333)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-03T17:22:02+01:00",
          "tree_id": "9d7c83f3f709000f57c1c62a2309afbba60db845",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb5677d081b6e07457408b59bbf632ab47dd624e"
        },
        "date": 1688402588839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 0.953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1148.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6304.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 258.9697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2208.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.5859375,
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
          "id": "6c80bb294460ee2b9dcbf6daf8b7a5010e97c54e",
          "message": "Pick up process credentials provider support (#351)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T11:57:10+01:00",
          "tree_id": "fb6dbb3226be14afe3a26ba76586155e98531268",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c80bb294460ee2b9dcbf6daf8b7a5010e97c54e"
        },
        "date": 1688469461624,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.07421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.5498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1260.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.8076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6349.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 263.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2298.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.90625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.4931640625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sum12@users.noreply.github.com",
            "name": "Sumit",
            "username": "sum12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "780cc75419b4ed228245ea655834695d151bea7c",
          "message": "Add expected bucket owner configuration (#349)\n\n* allow setting expected bucket owner and use it as condition for requests\r\n\r\nSigned-off-by: sum12 <sumitjami@gmail.com>\r\n\r\n* Update mountpoint-s3/src/main.rs\r\n\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\n\r\n* Update mountpoint-s3/src/main.rs\r\n\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\n\r\n* Update mountpoint-s3-client/src/s3_crt_client.rs\r\n\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\n\r\n* Update `--expected-bucket-owner` placeholder and help text\r\n\r\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\r\n\r\n---------\r\n\r\nSigned-off-by: sum12 <sumitjami@gmail.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\r\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-04T14:26:46+01:00",
          "tree_id": "9c462286f3ccb2aaeea2f5a0ae99c1d9e70fd1c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/780cc75419b4ed228245ea655834695d151bea7c"
        },
        "date": 1688478441912,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.1689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1097.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6607.41796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 264.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.5263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2352.5546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.81640625,
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
          "id": "44763b1e066a1b05fd2a889f021dbbab43104b86",
          "message": "Add sequential write benchmark (#352)\n\n* Add sequential write benchmark\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update document\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-06T10:19:39-05:00",
          "tree_id": "4ad5facea807f0263bb17356dcb3ac483d827a98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44763b1e066a1b05fd2a889f021dbbab43104b86"
        },
        "date": 1688658137374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6275.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.3466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2294.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1370.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "35a19317b60ac9a24e8831c154d7c0d75b73bea9",
          "message": "Fix cli help for prefix option (#360)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-06T17:42:53Z",
          "tree_id": "4125407f21e900452939fbf0ceaf726eb26cbaaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/35a19317b60ac9a24e8831c154d7c0d75b73bea9"
        },
        "date": 1688666727684,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6304.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2009.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1135.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "2d697695ec8ca2dc88136bb123b96b4337f83bcd",
          "message": "Rust Wrapper for CRT endpoint resolver (#317)\n\n* Squashing commits to rebase\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the error message and released the leaking pointer\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Consolidate tests with test cases for endpoint resolver\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Tested Invalid cases\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added region failure test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the recommended changes\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-07-06T14:31:03-05:00",
          "tree_id": "029c5f0d1ef3a52add957029ea2fc906f7684f67",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d697695ec8ca2dc88136bb123b96b4337f83bcd"
        },
        "date": 1688673229383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.7041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.21875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6265.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1953.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1169.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.6240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1907.35,
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
          "id": "52f5ddc2fc2ee691ddb99952d11abc344f9b5762",
          "message": "Tweak discussion of `.` and `..` (#361)\n\nThis was confusing -- it's about object keys, not files/directories. We\r\nwant to highlight that they work the same way you'd expect.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-07T07:15:56+01:00",
          "tree_id": "6802dfb54b68954342f077d9d4950c0d651a5095",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/52f5ddc2fc2ee691ddb99952d11abc344f9b5762"
        },
        "date": 1688711916817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6390.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 261.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.7021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1907.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1244.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
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
          "id": "6cb1a3d71b74f9b56a8a7153b7a84109442f4005",
          "message": "Capture panics and pipe them to `tracing` (#357)\n\nWe want to make sure panics are captured in logs so we can debug them.\r\nThis change adds a new panic hook that pulls out the payload, location,\r\nand backtrace of a panic and emits them at error level through\r\n`tracing`. The `main.rs` file is getting a bit out of hand so I tried to\r\nleave it a little better than I found it by moving the logging stuff\r\ninto a submodule.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-07T10:44:40+01:00",
          "tree_id": "8df352b36562290d6b1b3f4be1fb882ebb53fd65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cb1a3d71b74f9b56a8a7153b7a84109442f4005"
        },
        "date": 1688724442947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.0751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6531.248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 260.38671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2042.1982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.0107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1276.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.83203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
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
          "id": "1ce21dfb55e9832a83f27421d28d63a9795c4693",
          "message": "Implement forget (#359)\n\n* Implement forget\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* fix comparison\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* fix fmt\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Split readdir and readdirplus in fs\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove TODO\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-07T11:16:28-05:00",
          "tree_id": "988016ea49705858dcbda5e62078f0a75f9e4518",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ce21dfb55e9832a83f27421d28d63a9795c4693"
        },
        "date": 1688747950606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6580.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1913.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1304.59765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1239.78,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1811.98,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1688747951114,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}