window.BENCHMARK_DATA = {
  "lastUpdate": 1716218890419,
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
      }
    ]
  }
}