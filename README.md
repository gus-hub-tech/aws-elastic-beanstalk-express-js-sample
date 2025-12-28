# AWS Continuous Delivery Pipeline

This repository contains resources and documentation for creating a continuous delivery pipeline on AWS, based on the [AWS Hands-on Tutorial](https://docs.aws.amazon.com/hands-on/latest/create-continuous-delivery-pipeline/create-continuous-delivery-pipeline.html).

## Overview

Learn how to build an automated continuous delivery pipeline that deploys your applications to AWS using AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy. AWS Elastic Beanstalk

## Architecture
![alt text](image.png)

The pipeline includes:
- **Source Stage**: GitHub repository
- **Build Stage**: AWS CodeBuild for compilation and testing
- **Deploy Stage**: AWS CodeDeploy for application deployment

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI configured
- Basic understanding of CI/CD concepts

## Services Used

- **AWS CodePipeline**: Orchestrates the continuous delivery workflow
- **GitHub**: Source control repository
- **AWS CodeBuild**: Builds and tests the application
- **AWS CodeDeploy**: Deploys applications to EC2 instances
- **AWS Elastic Beanstalk**: Hosts the deployed application
- **AWS IAM**: Manages permissions and roles

## Getting Started

1. **Create GitHub Repository**
   ```bash
   gh repo create aws-elastic-beanstalk-express-js-sample --public --clone
   ```

2. **AWS Elastic Beanstalk**
   - Configure & create elastic beanstalk environment
   - Deploy sample web app to elastic beanstalk
   - Test the sample web app
![alt text](dev-env.png)
![alt text](elb.png)
![alt text](<current arc.png>)

3. **Create build project**
   ```bash
   Create build with CodeBuild
   Setup Github as source provider for build 
   Run build on AWS CodeBuild
   ```

4. **Build CodePipeline**
   - Configure source stage (CodeCommit)
   - Set up build stage (CodeBuild)
   - Configure deploy stage (CodeDeploy)

## Key Files

- `buildspec.yml`: Build specification for CodeBuild
- `appspec.yml`: Deployment specification for CodeDeploy
- Application source code

## Benefits

- Automated testing and deployment
- Reduced manual errors
- Faster time to market
- Consistent deployments
- Easy rollback capabilities

## Next Steps

- Add automated testing stages
- Implement blue/green deployments
- Set up monitoring and notifications
- Integrate with additional AWS services

## Resources

- [AWS CodePipeline Documentation](https://docs.aws.amazon.com/codepipeline/)
- [AWS CodeBuild Documentation](https://docs.aws.amazon.com/codebuild/)
- [AWS CodeDeploy Documentation](https://docs.aws.amazon.com/codedeploy/)

# AWS Elastic Beanstalk Node.js Sample App

This repository contains a sample Node.js web application built using [Express](https://expressjs.com/), meant to be used as part of the AWS DevOps Learning Path.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.