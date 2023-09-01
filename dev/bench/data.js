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
          "id": "8728575280a8f07ac4d92a935926928d816ff1fa",
          "message": "Document Mountpoint configuration options and defaults (#436)\n\n* Document Mountpoint configuration options and defaults\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-07T17:00:23Z",
          "tree_id": "b66137541ea1faedc609e9658263e163d9c77ab4",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8728575280a8f07ac4d92a935926928d816ff1fa"
        },
        "date": 1691498276617,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.1796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2566.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 6.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1711.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 239.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.798828125,
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
          "id": "e106f62c57d5e6922455006fc172129a6b897534",
          "message": "Bump version of mountpoint-s3 to v1.0.0 (#438)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-08T16:05:08+01:00",
          "tree_id": "fe55d2c2c1f772ff33c5b99c9197bf8358441c8f",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/e106f62c57d5e6922455006fc172129a6b897534"
        },
        "date": 1691765158571,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.3212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2565.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 6.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1687.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 225.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.7978515625,
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
        "date": 1691767208079,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2558.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.1318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1629.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 202.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.556640625,
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
      }
    ]
  },
  "lastUpdate": 1693585522115,
  "repoUrl": "https://github.com/monthonk/mountpoint-s3"
}