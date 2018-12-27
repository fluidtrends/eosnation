# Block Producer

EOSN is using a Hybrid approach for their Block Producer infrastructure. Our primary bare metal servers are located in Ottawa, Canada and our backup servers are hosted using Amazon Web Services (AWS) in various different geographical regions. Both cloud & bare metal servers are fully optimized for CPU performance and high available memory.

## Technical Specifications

Our cloud infrastructure is using [Amazon's latest EC2 z1d instances](https://aws.amazon.com/about-aws/whats-new/2018/07/introducing-amazon-ec2-z1d-instances/) which delivers a sustained all core frequency of up to 4.0 GHz, the fastest of any cloud instance. The combination of high compute performance and high memory makes z1d instances ideal for running high workload single threaded applications such as Nodeos.

## Geographical Regions

### Bare Metal

- Ottawa, ON
- Gatineau, QC

### Cloud

- North Virginia, US East
- Ireland, EU
- Singapore, Asia Pacific