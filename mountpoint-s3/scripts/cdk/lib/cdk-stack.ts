import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

require('dotenv').config()

// Set the account number, region, and key pair with these variables
const config = {
  env: {
    account: process.env.AWS_ACCOUNT_NUMBER,
    region: process.env.AWS_REGION,
    ssh_key_name: process.env.SSH_KEY_NAME
  }
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, { ...props, env: config.env })

    const defaultVpc = ec2.Vpc.fromLookup(this, 'VPC', { isDefault: true })

    const securityGroup = new ec2.SecurityGroup(
      this,
      'pytorch-instance-sg',
      {
        vpc: defaultVpc,
        allowAllOutbound: true,
        securityGroupName: 'pytorch-instance-sg',
      }
    );

    securityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      'Allows SSH access from Internet'
    );

    // Deep Learning AMI GPU PyTorch 2.0.1 (Amazon Linux 2)
    const deepLearningAmi = ec2.MachineImage.genericLinux({
      'eu-west-1': 'ami-0165d99481461d0b1',
    });
    const instance = new ec2.Instance(this, 'pytorch-instance', {
      vpc: defaultVpc,
      securityGroup: securityGroup,
      instanceName: 'pytorch-instance',
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.G5,
        ec2.InstanceSize.XLARGE2
      ),
      machineImage: deepLearningAmi,
      keyName: config.env.ssh_key_name,
    })

    new cdk.CfnOutput(this, 'pytorch-instance-public-ip', {
      value: instance.instancePublicIp,
      description: "Public IP of the instance"
    })
  }
}
