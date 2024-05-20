window.BENCHMARK_DATA = {
  "lastUpdate": 1716222590696,
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
          "id": "50720ab30b852929d2ab73810ac7806623d9c21c",
          "message": "Update CRT submodules to latest releases (#877)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-13T16:58:41Z",
          "tree_id": "afde2e462a548e5e0cc2996bcc54290f3473cc05",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/50720ab30b852929d2ab73810ac7806623d9c21c"
        },
        "date": 1716218889493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.521,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 2.46,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 14.578,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 144.7018526,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 133.194693,
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
          "id": "8c3e18e80a2fa1ee53eaf5cb5c286d003609683c",
          "message": "Use separate bench buckets in the ci (#881)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-20T10:14:21Z",
          "tree_id": "bc4d8c12201d3e9d7637b4499e67cf559cbb98e8",
          "url": "https://github.com/monthonk/mountpoint-s3/commit/8c3e18e80a2fa1ee53eaf5cb5c286d003609683c"
        },
        "date": 1716222589762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.445,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 1.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 2.319,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 14.302,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 132.1879325,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 125.144803,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}