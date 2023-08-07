window.BENCHMARK_DATA = {
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
          "id": "839ccfd1ba98ca9613eae8686bb4c369e691fe29",
          "message": "Remove inodes from their parent in `forget` (#380)\n\n* Remove inodes from their parent in `forget`\r\n\r\nThe parent directory still holds onto an `Inode` (an `Arc<InodeInner>`),\r\nso right now our `forget` is leaking the actual inode. We need to remove\r\nit from its parent at `forget` time. Also updated the tests to check\r\nthat the inode is in fact free'd.\r\n\r\nI tested this by listing a directory with 2M objects on an instance with\r\n1GiB of memory, and saw constant memory usage.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't forget the wrong inode\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:55:27-05:00",
          "tree_id": "43b8c9e97bc4a356b830f058f2c753fa3dc62e5f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/839ccfd1ba98ca9613eae8686bb4c369e691fe29"
        },
        "date": 1689673158525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 52.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2738.85546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1916.994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 313.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.0283203125,
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
          "id": "4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53",
          "message": "Reconcile remote and existing inodes at `update` time (#386)\n\n* Reconcile remote and existing inodes at `update` time\r\n\r\nTo date we haven't thought too carefully about what happens if objects\r\nare put/deleted from the S3 bucket while conflicting state is present\r\nlocally. There are a lot of edge cases here -- the Cartesian product of\r\nexisting state (local/remote file/directory) and new remote state\r\n(file/directory), as well as two paths for inodes to be updated (readdir\r\nvs lookup).\r\n\r\nThis change defines a semantics for these permutations. The overall idea\r\nis that (a) remote state shadows local state, and (b) directories shadow\r\nfiles. But those axioms alone aren't enough to break all ties; for\r\nexample, what if the existing state is a local directory but the new\r\nstate is a remote file -- which should win? I chose to break the tie by\r\nsaying that remote directories > any local state > remote files. So, for\r\nexample, if a user creates a local directory, and then a conflicting\r\nobject appears in the remote bucket, the directory will still be\r\nvisible instead of the new file.\r\n\r\nI spent some time trying to patch the existing inode update path to do\r\nwhat I needed but it ended up being easier to just refactor it. I think\r\nwe could still find a better factoring for this path, but it now\r\nexplicitly accounts for all the permutations above and does the right\r\nthing (at least according to our reference model) for them all.\r\nHappily, proptest has done a good job at rooting out the many edge\r\ncases, as you can see by all the new regression tests in this change.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:54:35+01:00",
          "tree_id": "f6cf307ab27e2014dcf378a5e1ca71657aab26ea",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53"
        },
        "date": 1689762367139,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.0166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2683.234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.25390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1781.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 265.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.833984375,
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
          "id": "4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53",
          "message": "Reconcile remote and existing inodes at `update` time (#386)\n\n* Reconcile remote and existing inodes at `update` time\r\n\r\nTo date we haven't thought too carefully about what happens if objects\r\nare put/deleted from the S3 bucket while conflicting state is present\r\nlocally. There are a lot of edge cases here -- the Cartesian product of\r\nexisting state (local/remote file/directory) and new remote state\r\n(file/directory), as well as two paths for inodes to be updated (readdir\r\nvs lookup).\r\n\r\nThis change defines a semantics for these permutations. The overall idea\r\nis that (a) remote state shadows local state, and (b) directories shadow\r\nfiles. But those axioms alone aren't enough to break all ties; for\r\nexample, what if the existing state is a local directory but the new\r\nstate is a remote file -- which should win? I chose to break the tie by\r\nsaying that remote directories > any local state > remote files. So, for\r\nexample, if a user creates a local directory, and then a conflicting\r\nobject appears in the remote bucket, the directory will still be\r\nvisible instead of the new file.\r\n\r\nI spent some time trying to patch the existing inode update path to do\r\nwhat I needed but it ended up being easier to just refactor it. I think\r\nwe could still find a better factoring for this path, but it now\r\nexplicitly accounts for all the permutations above and does the right\r\nthing (at least according to our reference model) for them all.\r\nHappily, proptest has done a good job at rooting out the many edge\r\ncases, as you can see by all the new regression tests in this change.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* PR feedback\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:54:35+01:00",
          "tree_id": "f6cf307ab27e2014dcf378a5e1ca71657aab26ea",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53"
        },
        "date": 1689762397359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2760.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 259.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1876.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 253.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.82421875,
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
          "id": "7786053d72d2fe17e8a8d626bc33604616406b5f",
          "message": "Add merge_group as workflow trigger for tests and integ tests (#392)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-19T19:36:32-05:00",
          "tree_id": "165da5841a00ecab9327d1ed62ac1f0c95bcf966",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7786053d72d2fe17e8a8d626bc33604616406b5f"
        },
        "date": 1689845872980,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.64453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2629.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 258.376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1720.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 257.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1716.61,
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
          "id": "7786053d72d2fe17e8a8d626bc33604616406b5f",
          "message": "Add merge_group as workflow trigger for tests and integ tests (#392)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-19T19:36:32-05:00",
          "tree_id": "165da5841a00ecab9327d1ed62ac1f0c95bcf966",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/7786053d72d2fe17e8a8d626bc33604616406b5f"
        },
        "date": 1689845907016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2771.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1883.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 293.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.1171875,
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
          "id": "ef351495f187968c1560aa04289ecff67f9ef453",
          "message": "Fix sequential write test with O_RDWR flag (#393)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-20T13:39:44Z",
          "tree_id": "63d7d31461e454c0842eb6f2da239264cdcda5ad",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/ef351495f187968c1560aa04289ecff67f9ef453"
        },
        "date": 1689865523846,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.39453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2661.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.0947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1550.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 287.8828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1716.61,
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
          "id": "ef351495f187968c1560aa04289ecff67f9ef453",
          "message": "Fix sequential write test with O_RDWR flag (#393)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-20T13:39:44Z",
          "tree_id": "63d7d31461e454c0842eb6f2da239264cdcda5ad",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/ef351495f187968c1560aa04289ecff67f9ef453"
        },
        "date": 1689865565560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.83203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2757.953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.40625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1753.8828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 241.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.0068359375,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "183a20c9674a6d3bd29d8b52d675fec06658f3ee",
          "message": "Implement setattr to support changing time attributes (#391)\n\n* Implement setattr to support changing time attributes\n\nSome applications like `touch` requires the file system to support\nchanging file last access and modification times. We don't support this\noperation because the last modification time for objects can't be set\nvia S3 API. However, it's possible to allow this only for the files that\nare being written because at that time it's still a temporary stat in\nMountpoint.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix unit test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-07-21T09:08:07Z",
          "tree_id": "cf342407259005b6637707b616589c96a495585a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/183a20c9674a6d3bd29d8b52d675fec06658f3ee"
        },
        "date": 1689935519183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.07421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2622.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 267.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1780.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 289.4482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 42.5166015625,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "183a20c9674a6d3bd29d8b52d675fec06658f3ee",
          "message": "Implement setattr to support changing time attributes (#391)\n\n* Implement setattr to support changing time attributes\n\nSome applications like `touch` requires the file system to support\nchanging file last access and modification times. We don't support this\noperation because the last modification time for objects can't be set\nvia S3 API. However, it's possible to allow this only for the files that\nare being written because at that time it's still a temporary stat in\nMountpoint.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix unit test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-07-21T09:08:07Z",
          "tree_id": "cf342407259005b6637707b616589c96a495585a",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/183a20c9674a6d3bd29d8b52d675fec06658f3ee"
        },
        "date": 1689935541742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.97265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.3876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2765.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.1845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.75,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1880.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 298.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.9658203125,
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
          "id": "33fe81ff551ebd0031c94ca9f8761ed6e1a70c60",
          "message": "Bump some dependencies to mostly remove `atty` (#403)\n\n* Bump some dependencies to mostly remove `atty`\n\nIt's no longer in our release dependency closure, but still in the test\nclosure through two sources:\n* fuser uses clap v3 in its examples, which still depends on atty\n* fuser uses env-logger v0.9 in its examples, which still depends on\n  atty\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix list example\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T17:24:51Z",
          "tree_id": "3ce625cb4e3cf9507d942c71cf1d6e158613c49e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/33fe81ff551ebd0031c94ca9f8761ed6e1a70c60"
        },
        "date": 1690283661813,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.30078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.9208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2654.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1773.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 316.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.9814453125,
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
          "id": "33fe81ff551ebd0031c94ca9f8761ed6e1a70c60",
          "message": "Bump some dependencies to mostly remove `atty` (#403)\n\n* Bump some dependencies to mostly remove `atty`\n\nIt's no longer in our release dependency closure, but still in the test\nclosure through two sources:\n* fuser uses clap v3 in its examples, which still depends on atty\n* fuser uses env-logger v0.9 in its examples, which still depends on\n  atty\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix list example\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T17:24:51Z",
          "tree_id": "3ce625cb4e3cf9507d942c71cf1d6e158613c49e",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/33fe81ff551ebd0031c94ca9f8761ed6e1a70c60"
        },
        "date": 1690283688161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.85546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2783.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 258.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1875.0537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 305.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.65234375,
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
          "id": "cfe1f39bb2d7ebb32b6dd1a43134466578814df5",
          "message": "Present flexible retrieval objects with 000 permissions (#414)\n\n* Present flexible retrieval objects with 000 permissions\n\nObjects in the Glacier Flexible Retrieval and Glacier Deep Archive\nstorage classes (and their corresponding Intelligent Tiering tiers) are\nnot readable with GetObject without first triggering a restoration. We\ndon't offer the ability to do that (and it likely wouldn't make sense\nfor us given the latency), but these objects will still appear in the\nfile tree, so we give them 000 permissions and EACCES failures to make\nclear they're not accessible.\n\nIt would be nice to make this work for objects that have already been\nrestored, which still carry the GLACIER/DEEP_ARCHIVE storage class but\nalso return their restore state with HeadObject. But ListObjectsV2 gives\nus no way to find that out. We could probably make this work since we\nknow we always send a HeadObject on `open`, but it was more work than I\nwanted to do right now, and this at least prevents customers getting EIO\nerrors on these objects.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Intern storage classes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:54:03Z",
          "tree_id": "1eea8fe286a302fcd81ba7a923458cb378dd3a29",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cfe1f39bb2d7ebb32b6dd1a43134466578814df5"
        },
        "date": 1690549414127,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.0419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2652.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.25390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1791.123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 238.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.8427734375,
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
          "id": "cfe1f39bb2d7ebb32b6dd1a43134466578814df5",
          "message": "Present flexible retrieval objects with 000 permissions (#414)\n\n* Present flexible retrieval objects with 000 permissions\n\nObjects in the Glacier Flexible Retrieval and Glacier Deep Archive\nstorage classes (and their corresponding Intelligent Tiering tiers) are\nnot readable with GetObject without first triggering a restoration. We\ndon't offer the ability to do that (and it likely wouldn't make sense\nfor us given the latency), but these objects will still appear in the\nfile tree, so we give them 000 permissions and EACCES failures to make\nclear they're not accessible.\n\nIt would be nice to make this work for objects that have already been\nrestored, which still carry the GLACIER/DEEP_ARCHIVE storage class but\nalso return their restore state with HeadObject. But ListObjectsV2 gives\nus no way to find that out. We could probably make this work since we\nknow we always send a HeadObject on `open`, but it was more work than I\nwanted to do right now, and this at least prevents customers getting EIO\nerrors on these objects.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Intern storage classes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-27T21:54:03Z",
          "tree_id": "1eea8fe286a302fcd81ba7a923458cb378dd3a29",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/cfe1f39bb2d7ebb32b6dd1a43134466578814df5"
        },
        "date": 1690549444040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2736.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1948.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 273.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.806640625,
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
          "id": "a39424cfb842bd4e0df3137da784b8ec4c430945",
          "message": "Revamp semantics documentation (#418)\n\nThis tries to extract a higher-level story for the semantics\ndocumentation to lead with. It covers updates we've made since alpha,\nincluding consistency and durability.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-31T18:55:30Z",
          "tree_id": "e6e6ba6fca02968968374371d7b98ac41d64e2c3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a39424cfb842bd4e0df3137da784b8ec4c430945"
        },
        "date": 1690906504683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2531.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 6.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1618.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 231.3095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.1591796875,
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
          "id": "a39424cfb842bd4e0df3137da784b8ec4c430945",
          "message": "Revamp semantics documentation (#418)\n\nThis tries to extract a higher-level story for the semantics\ndocumentation to lead with. It covers updates we've made since alpha,\nincluding consistency and durability.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-31T18:55:30Z",
          "tree_id": "e6e6ba6fca02968968374371d7b98ac41d64e2c3",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a39424cfb842bd4e0df3137da784b8ec4c430945"
        },
        "date": 1690906574040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2734.4765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 6.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1701.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 249.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.80859375,
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
          "id": "a0060db02f54c73fd7b5cace76144b52c2694559",
          "message": "Build infrastructure for release packages (#420)\n\n* Build infrastructure for release packages\n\nThis commit adds a first pass at build infrastructure for assembling\nMountpoint releases. It builds RPM and DEB packages and a tar.gz archive\nfor distributions that don't use those package managers. The RPM and DEB\nare preferred because they check for the necessary dependencies.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Rename `release` -> `package`\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-01T15:51:50Z",
          "tree_id": "80caf928316d4df1ca13b81e8377b0b1b3a4a57d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a0060db02f54c73fd7b5cace76144b52c2694559"
        },
        "date": 1690973630676,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2677.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.0625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1834.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 220.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.845703125,
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
          "id": "a0060db02f54c73fd7b5cace76144b52c2694559",
          "message": "Build infrastructure for release packages (#420)\n\n* Build infrastructure for release packages\n\nThis commit adds a first pass at build infrastructure for assembling\nMountpoint releases. It builds RPM and DEB packages and a tar.gz archive\nfor distributions that don't use those package managers. The RPM and DEB\nare preferred because they check for the necessary dependencies.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Rename `release` -> `package`\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-01T15:51:50Z",
          "tree_id": "80caf928316d4df1ca13b81e8377b0b1b3a4a57d",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/a0060db02f54c73fd7b5cace76144b52c2694559"
        },
        "date": 1690973692777,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.9931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2769.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.8857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1856.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.2421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 247.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.8212890625,
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
          "id": "014b9c75c6f6df72455bd445dec16b56cbe240aa",
          "message": "Parse endpoint property of Auth Scheme from endpoint resolver (#423)\n\n* AuthScheme parsing from endpoint Resolver.\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Update mountpoint-s3-client/src/endpoint_config.rs\n\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-08-04T08:18:51Z",
          "tree_id": "673749397ecf2f8422d346f02cacef81406c9ff9",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/014b9c75c6f6df72455bd445dec16b56cbe240aa"
        },
        "date": 1691154857369,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.4541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2608.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.38671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1720.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.8603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 233.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.130859375,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00ecc60e7171a0cb9b40c695d96967b3ecbf82b5",
          "message": "Bump version of mountpoint-s3 to v0.4.1 (#432)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-04T16:11:10+01:00",
          "tree_id": "b5b697a1245dc25fcb26f9c79083b28f36646702",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/00ecc60e7171a0cb9b40c695d96967b3ecbf82b5"
        },
        "date": 1691400824282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2597.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.29296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1796.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 261.7939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.47265625,
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
          "id": "59f2ebbc786d98796e387a717e620d59e4853329",
          "message": "Build SigningConfig from AuthScheme for each request (#428)\n\n* Add default signing config for each request\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Build SigningConfig from AuthScheme\n\nUse the AuthScheme obtained from the EndpointResolver to build the SigningConfig\nfor each request. Also extend the initializer for SigningConfig to accept the\nadditional parameters: service name, signing algorithm, and the use_double_uri_encode\nflag.\n\nThe AuthScheme will now validate the `scheme_name` field (i.e. signing algorithm)\non parsing and store it as a `SigningAlgorithm`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Log auth_scheme\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Parse signingRegionSet if signingRegion is not present\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Make SigningConfig not Clone\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix order of error fields\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: Ankit Saurabh <sauraank@amazon.co.uk>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-05T04:03:21Z",
          "tree_id": "6bde27603cba49db94ceee56e8b075d0779d208c",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/59f2ebbc786d98796e387a717e620d59e4853329"
        },
        "date": 1691400862924,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.64453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.3759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2741.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1623.2119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.7705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 209.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4892578125,
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
      }
    ]
  },
  "lastUpdate": 1691400863416,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3"
}