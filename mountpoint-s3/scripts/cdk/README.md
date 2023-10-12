# A simple PyTorch benchmark for Mountpoint

## Prerequisites
1. valid AWS credentials
2. node v18+
3. cdk cli
4. python3

## Preparing EC2 instance

We need an EC2 instance with a GPU and AWS Deep Learning AMI GPU PyTorch 2.0.1 (Amazon Linux 2) AMI to run the benchmark.

1. Create a new SSH key pair or use an existing key
2. Run `cdk bootstrap` if this is the first CDK deployment in your AWS account
2. Run the following commands to create an EC2 instance for the benchmark

        export AWS_ACCOUNT_NUMBER=<account_id>
        export AWS_REGION=<region>
        export SSH_KEY_NAME=<key_name>
        npm run build
        cdk synth
        cdk deploy --all

## Running PyTorch benchmark
1. Connect to the EC2 instance from the previous step
2. Assign the right IAM role or credentials to the instance
2. Install mountpoint

        wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.rpm
        sudo yum install ./mount-s3.rpm

2. Clone mountpoint repository and run the benchmark script

        git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git
        cd mountpoint-s3/examples/pytorch/
        source activate pytorch
        python -m pip install -r requirements.txt
        cd ../../mountpoint-s3/scripts/
        export S3_BUCKET_NAME=<bucket_name>
        python ml_bench.py