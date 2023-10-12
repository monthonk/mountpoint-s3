#!/usr/bin/env python3

from dataclasses import dataclass
import os
import subprocess
import sys
import time
import tempfile

@dataclass
class JobMetadata:
    bucket_name: str
    script_path: str
    log_dir: str
    dataset_uri: str

def log(msg: str):
    print(f"*** {msg}")
    sys.stdout.flush()

def check_environment_variables():
    log(f"Checking required environment variables")
    if os.environ.get('S3_BUCKET_NAME') is None:
        sys.exit('Environment variable S3_BUCKET_NAME is required to run the benchmark')

def get_job_metadata() -> JobMetadata:
    check_environment_variables()
    bucket_name = os.environ.get('S3_BUCKET_NAME')
    project_path = os.path.abspath(os.path.join(__file__ ,"../../.."))
    script_path = f'{project_path}/examples/pytorch/resnet.py'
    log_dir = tempfile.mkdtemp()
    dataset_uri = f's3://{bucket_name}/shard-data-new/'

    metadata = JobMetadata(
        bucket_name=bucket_name,
        script_path=script_path,
        log_dir=log_dir,
        dataset_uri=dataset_uri
    )
    return metadata

def generate_dataset(metadata: JobMetadata):
    log(f"Generating dataset")
    subprocess.check_output(["python", metadata.script_path, "make", metadata.dataset_uri, "--num-images", "1000", "--max-shard-size", "16384"])

def run_benchmark(metadata: JobMetadata):
    log(f"Running benchmark")
    start_time = time.perf_counter()
    subprocess.check_output(["python", metadata.script_path, "train", metadata.dataset_uri, "--source-kind", "mountpoint", "--batch-size", "256", "--max-epochs", "3", "--log-directory", metadata.log_dir])
    end_time = time.perf_counter()
    total_time_s = end_time - start_time
    log(f"Benchmark completed in {total_time_s} seconds")

def collect_metrics(metadata: JobMetadata):
    log(f"Collecting metrics")
    # There should be only one log file
    log_file = os.listdir(metadata.log_dir)[0]
    log_full_path = f"{metadata.log_dir}/{log_file}"

    latency_patterns = {
        'HeadObject': "s3.requests.total_latency_us\[op=head_object",
        'ListObjectsV2': "s3.requests.total_latency_us\[op=list_objects",
        'GetObject': "s3.requests.total_latency_us\[op=get_object",
        'lookup': 'fuse.op_latency_us\[op=lookup',
        'open': 'fuse.op_latency_us\[op=open\]',
        'read': 'fuse.op_latency_us\[op=read\]',
        'readdir': 'fuse.op_latency_us\[op=readdir\]',
        'readdirplus': 'fuse.op_latency_us\[op=readdirplus\]',
    }

    for operation in ["HeadObject", "ListObjectsV2", "GetObject", "lookup", "open", "readdir", "readdirplus"]:
        log(operation)
        count = int(subprocess.check_output(f"cat {log_full_path} | grep \"{latency_patterns.get(operation)}\" | cut -f6 -d \" \" | cut -d \"=\" -f2 | awk '{{s+=$1}} END {{printf \"%0.f\\n\", s}}'", shell=True))
        print("count", count)
        if count > 0:
            mean = int(subprocess.check_output(f"cat {log_full_path} | grep \"{latency_patterns.get(operation)}\" | cut -f6,10 -d \" \" | sed 's/://' | sed 's/n=//' | sed 's/avg=//' | awk '{{s+=$1*$2}} END {{printf \"%0.f\\n\", s}}'", shell=True)) / count
            p0 = int(subprocess.check_output(f"cat {log_full_path} | grep \"{latency_patterns.get(operation)}\" | cut -f7 -d \" \" | cut -d \"=\" -f2 | sort -V | head -n 1", shell=True))
            p100 = int(subprocess.check_output(f"cat {log_full_path} | grep \"{latency_patterns.get(operation)}\" | cut -f14 -d \" \" | cut -d \"=\" -f2 | sort -V | tail -n 1", shell=True))
            print("mean", mean)
            print("p0", p0)
            print("p100", p100)
        print()


if __name__ == "__main__":
    metadata = get_job_metadata()
    generate_dataset(metadata)
    run_benchmark(metadata)
    collect_metrics(metadata)
