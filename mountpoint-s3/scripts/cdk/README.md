# A simple PyTorch benchmark for Mountpoint

## Prerequisites
1. valid AWS credentials
2. node v18+
3. cdk cli
4. python3

## Preparing EC2 instance

1. Create a new SSH key pair or use an existing key
2. Run `cdk bootstrap` if this is the first CDK deployment in your AWS account
2. Run the following commands to create an EC2 instance for the benchmark

    export AWS_ACCOUNT_NUMBER=<account_id>
    export AWS_REGION=<region>
    export SSH_KEY_NAME=<key_name>
    npm run build
    cdk synth
    cdk deploy --all

