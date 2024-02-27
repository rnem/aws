# Practice Exam 5

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A Company runs continuous integration/continuous delivery (CI/CD) pipelines for its application on AWS CodePipeline. A Developer must write unit tests and run them as part of the pipelines before staging the artifacts for testing. How should the Developer incorporate unit tests as part of CI/CD pipelines?
A. Create a separate CodePipeline pipeline to run unit tests.
B. Update the AWS CodeBuild specification to include a phase for running unit tests.
C. Install the AWS CodeDeploy agent on an Amazon EC2 instance to run unit tests.
D. Create a testing branch in AWS CodeCommit to run unit tests.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
2. An application has the following requirements: Performance efficiency of seconds with up to a minute of latency. The data storage size may grow up to thousands of terabytes. Per-message sizes may vary between 100 KB and 100 MB. Data can be stored as key/value stores supporting eventual consistency. What is the MOST cost-effective AWS service to meet these requirements?
A. Amazon DynamoDB.
B. Amazon S3.
C. Amazon RDS (with a MySQL engine).
D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
3. A Developer must allow guest users without logins to access an Amazon Cognito-enabled site to view files stored within an Amazon S3 bucket. How should the Developer meet these requirements?
A. Create a blank user ID in a user pool, add to the user group, and grant access to AWS resources.
B. Create a new identity pool, enable access to authenticated identities, and grant access to AWS resources.
C. Create a new user pool, enable access to authenticated identifies, and grant access to AWS resources.
D. Create a new user pool, disable authentication access, and grant access to AWS resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
4. A Developer has written code for an application and wants to share it with other Developers on the team to receive feedback. The shared application code needs to be stored long-term with multiple versions and batch change tracking. Which AWS service should the Developer use?
A. AWS CodeBuild.
B. Amazon S3.
C. AWS CodeCommit.
D. AWS Cloud9.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
5. A Developer has discovered that an application responsible for processing messages in an Amazon SQS queue is routinely falling behind. The application is capable of processing multiple messages in one execution, but is only receiving one message at a time. What should the Developer do to increase the number of messages the application receives?
A. Call the ChangeMessageVisibility API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.
B. Call the AddPermission API to set MaxNumberOfMessages for the ReceiveMessage action to a value greater than the default of 1.
C. Call the ReceiveMessage API to set MaxNumberOfMessages to a value greater than the default of 1.
D. Call the SetQueueAttributes API for the queue and set MaxNumberOfMessages to a value greater than the default of 1.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
6. A Developer registered an AWS Lambda function as a target for an Application Load Balancer (ALB) using a CLI command. However, the Lambda function is not being invoked when the client sends requests through the ALB.  Why is the Lambda function not being invoked?
A. A Lambda function cannot be registered as a target for an ALB.
B. A Lambda function can be registered with an ALB using AWS Management Console only.
C. The permissions to invoke the Lambda function are missing.
D. Cross-zone is not enabled on the ALB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
7. A company provides APIs as a service and commits to a service level agreement (SLA) with all its users. To comply with each SLA, what should the company do?
A. Enable throttling limits for each method in Amazon API Gateway.
B. Create a usage plan for each user and request API keys to access the APIs.
C. Enable API rate limiting in Amazon Cognito for each user.
D. Enable default throttling limits for each stage after deploying the APIs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
8. A Developer is preparing a deployment package using AWS CloudFormation. The package consists of two separate templates: one for the infrastructure and one for the application. The application has to be inside the VPC that is created from the infrastructure template. How can the application stack refer to the VPC created from the infrastructure template?
A. Use the Ref function to import the VPC into the application stack from the infrastructure template.
B. Use the export flag in the infrastructure template, and then use the Fn::ImportValue function in the application template.
C. Use the DependsOn attribute to specify that the application instance depends on the VPC in the application template.
D. Use the Fn::GetAtt function to include the attribute of the VPC in the application template.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
9. A Developer needs to create an application that supports Security Assertion Markup Language (SAML) and Facebook authentication. It must also allow access to AWS services, such as Amazon DynamoDB. Which AWS service or feature will meet these requirements with the LEAST amount of additional coding?
A. AWS AppSync.
B. Amazon Cognito identity pools.
C. Amazon Cognito user pools.
D. Amazon Lambda@Edge.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
10. A Developer is trying to monitor an application’s status by running a cron job that returns 1 if the service is up and 0 if the service is down. The Developer created code that uses an AWS CLI put-metric-alarm command to publish the custom metrics to Amazon CloudWatch and create an alarm. However, the Developer is unable to create an alarm as the custom metrics do not appear in the CloudWatch console. What is causing this issue?
A. Sending custom metrics using the CLI is not supported.
B. The Developer needs to use the put-metric-data command.
C. The Developer must use a unified CloudWatch agent to publish custom metrics.
D. The code is not running on an Amazon EC2 instance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
11. A Developer has written an application that runs on Amazon EC2 instances and generates a value every minute. The Developer wants to monitor and graph the values generated over time without logging in to the instance each time. Which approach should the Developer use to achieve this goal?
A. Use the Amazon CloudWatch metrics reported by default for all EC2 instances. View each value from the CloudWatch console.
B. Develop the application to store each value in a file on Amazon S3 every minute with the timestamp as the name.
C. Publish each generated value as a custom metric to Amazon CloudWatch using available AWS SDKs.
D. Store each value as a variable and add the variable to the list of EC2 metrics that should be reported to the Amazon CloudWatch console.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
12. A Development team decides to adopt a continuous integration/continuous delivery (CI/CD) process using AWS CodePipeline and AWS CodeCommit for a new application. However, management wants a person to review and approve the code before it is deployed to production. How can the Development team add a manual approver to the CI/CD pipeline?
A. Use AWS SES to send an email to approvers when their action is required. Develop a simple application that allows approvers to accept or reject a build. Invoke an AWS Lambda function to advance the pipeline when a build isaccepted.
B. If approved, add an approved tag when pushing changes to the CodeCommit repository. CodePipeline will proceed to build and deploy approved commits without interruption.
C. Add an approval step to CodeCommit. Commits will not be saved until approved.
D. Add an approval action to the pipeline. Configure the approval action to publish to an Amazon SNS topic when approval is required. The pipeline execution will stop and wait for an approval.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
13. A Developer is building a serverless application using AWS Lambda and must create a REST API using an HTTP GET method. What needs to be defined to meet this requirement? (Choose two.)
A. A Lambda@Edge function.
B. An Amazon API Gateway with a Lambda function.
C. An exposed GET method in an Amazon API Gateway.
D. An exposed GET method in the Lambda function.
E. An exposed GET method in Amazon Route 53.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  
14. A Developer is writing an application in AWS Lambda. To simplify testing and deployments, the Developer needs the database connection string to be easily changed without modifying the Lambda code. How can this requirement be met?
A. Store the connection string as a secret in AWS Secrets Manager.
B. Store the connection string in an IAM user account.
C. Store the connection string in AWS KMS.
D. Store the connection string as a Lambda layer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
15. A company is launching an ecommerce website and will host the static data in Amazon S3. The company expects approximately 1,000 transactions per second (TPS) for GET and PUT requests in total. Logging must be enabled to track all requests and must be retained for auditing purposes. What is the MOST cost-effective solution?
A. Enable AWS CloudTrail logging for the S3 bucket-level action and create a lifecycle policy to move the data from the log bucket to Amazon S3 Glacier in 90 days.
B. Enable S3 server access logging and create a lifecycle policy to expire the data in 90 days.
C. Enable AWS CloudTrail logging for the S3 bucket-level action and create a lifecycle policy to expire the data in 90 days.
D. Enable S3 server access logging and create a lifecycle policy to move the data to Amazon S3 Glacier in 90 days.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
16. A company is building a compute-intensive application that will run on a fleet of Amazon EC2 instances. The application uses attached Amazon EBS disks for storing data. The application will process sensitive information and all the data must be encrypted. What should a Developer do to ensure the data is encrypted on disk without impacting performance?
A. Configure the Amazon EC2 instance fleet to use encrypted EBS volumes for storing data.
B. Add logic to write all data to an encrypted Amazon S3 bucket.
C. Add a custom encryption algorithm to the application that will encrypt and decrypt all data.
D. Create a new Amazon Machine Image (AMI) with an encrypted root volume and store the data to ephemeral disks.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
17. A Developer decides to store highly secure data in Amazon S3 and wants to implement server-side encryption (SSE) with granular control of who can access the master key. Company policy requires that the master key be created, rotated, and disabled easily when needed, all for security reasons. Which solution should be used to meet these requirements?
A. SSE with Amazon S3 managed keys (SSE-S3).
B. SSE with AWS KMS managed keys (SSE-KMS).
C. SSE with AWS Secrets Manager.
D. SSE with customer-provided encryption keys.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
18. A Developer is migrating an on-premises application to AWS. The application currently takes user uploads and saves them to a local directory on the server. All uploads must be saved and made immediately available to all instances in an Auto Scaling group. Which approach will meet these requirements?
A. Use Amazon EBS and configure the application AMI to use a snapshot of the same EBS instance on boot.
B. Use Amazon S3 and rearchitect the application so all uploads are placed in S3.
C. Use instance storage and share it between instances launched from the same Amazon Machine Image (AMI).
D. Use Amazon EBS and file synchronization software to achieve eventual consistency among the Auto Scaling group.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
19. A Developer implemented a static website hosted in Amazon S3 that makes web service requests hosted in Amazon API Gateway and AWS Lambda. The site is showing an error that reads: “No ‘Access-Control-Allow-Origin’ header is present on the requested resource. Origin ‘null’ is therefore not allowed access.” What should the Developer do to resolve this issue?
A. Enable cross-origin resource sharing (CORS) on the S3 bucket.
B. Enable cross-origin resource sharing (CORS) for the method in API Gateway.
C. Add the Access-Control-Request-Method header to the request.
D. Add the Access-Control-Request-Headers header to the request.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
20. A Developer is building an application that needs to store data in Amazon S3. Management requires that the data be encrypted before it is sent to Amazon S3 for storage. The encryption keys need to be managed by the Security team. Which approach should the Developer take to meet these requirements?
A. Implement server-side encryption using customer-provided encryption keys (SSE-C).
B. Implement server-side encryption by using a client-side master key.
C. Implement client-side encryption using an AWS KMS managed customer master key (CMK).
D. Implement client-side encryption using Amazon S3 managed keys.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
21. A Developer has written an Amazon Kinesis Data Streams application. As usage grows and traffic increases over time, the application is regularly receiving ProvisionedThroughputExceededException error messages. Which steps should the Developer take to resolve the error? (Choose two.)
A. Use Auto Scaling to scale the stream for better performance.
B. Increase the delay between the GetRecords call and the PutRecords call.
C. Increase the number of shards in the data stream.
D. Specify a shard iterator using the ShardIterator parameter.
E. Implement exponential backoff on the GetRecords call and the PutRecords call.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  
22. A Developer is publishing critical log data to a log group in Amazon CloudWatch Logs, which was created 2 months ago. The Developer must encrypt the log data using an AWS KMS customer master key (CMK) so future data can be encrypted to comply with the company’s security policy. How can the Developer meet this requirement?
A. Use the CloudWatch Logs console and enable the encrypt feature on the log group.
B. Use the AWS CLI create-log-group command and specify the key Amazon Resource Name (ARN).
C. Use the KMS console and associate the CMK with the log group.
D. Use the AWS CLI associate-kms-key command and specify the key Amazon Resource Name (ARN)

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
23. A Developer has code running on Amazon EC2 instances that needs read-only access to an Amazon DynamoDB table. What is the MOST secure approach the Developer should take to accomplish this task?
A. Create a user access key for each EC2 instance with read-only access to DynamoDB. Place the keys in the code. Redeploy the code as keys rotate.
B. Use an IAM role with an AmazonDynamoDBReadOnlyAccess policy applied to the EC2 instances.
C. Run all code with only AWS account root user access keys to ensure maximum access to services.
D. Use an IAM role with Administrator access applied to the EC2 instance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
24. A Developer migrated a web application to AWS. As part of the migration, the Developer implemented an automated continuous integration/continuous improvement (CI/CD) process using a blue/green deployment. The deployment provisions new Amazon EC2 instances in an Auto Scaling group behind a new Application Load Balancer. After the migration was completed, the Developer began receiving complaints from users getting booted out of the system. The system also requires users to log in after every new deployment. How can these issues be resolved?
A. Use rolling updates instead of a blue/green deployment.
B. Externalize the user sessions to Amazon ElastiCache.
C. Turn on sticky sessions in the Application Load Balancer.
D. Use multicast to replicate session information.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
25. A Developer wants to insert a record into an Amazon DynamoDB table as soon as a new file is added to an Amazon S3 bucket. Which set of steps would be necessary to achieve this?
A. Create an event with Amazon CloudWatch Events that will monitor the S3 bucket and then insert the records into DynamoDB.
B. Configure an S3 event to invoke a Lambda function that inserts records into DynamoDB.
C. Create a Lambda function that will poll the S3 bucket and then insert the records into DynamoDB.
D. Create a cron job that will run at a scheduled time and insert the records into DynamoDB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
26. A company has implemented AWS CodeDeploy as part of its cloud native CI/CD stack. The company enables automatic rollbacks while deploying a new version of a popular web application from in-place to Amazon EC2. What occurs if the deployment of the new version fails due to code regression?
A. The last known good deployment is automatically restored using the snapshot stored in Amazon S3.
B. CodeDeploy switches the Amazon Route 53 alias records back to the known good green deployment and terminates the failed blue deployment.
C. A new deployment of the last known version of the application is deployed with a new deployment ID.
D. AWS CodePipeline promotes the most recent deployment with a SUCCEEDED status to production.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
27. A software company needs to make sure user-uploaded documents are securely stored in Amazon S3. The documents must be encrypted at rest in Amazon S3. The company does not want to manage the security infrastructure in-house, but the company still needs extra protection to ensure it has control over its encryption keys due to industry regulations. Which encryption strategy should a Developer use to meet these requirements?
A. Server-side encryption with Amazon S3 managed keys (SSE-S3).
B. Server-side encryption with customer-provided encryption keys (SSE-C).
C. Server-side encryption with AWS KMS managed keys (SSE-KMS).
D. Client-side encryption

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
28. A Developer uses Amazon S3 buckets for static website hosting. The Developer creates one S3 bucket for the code and another S3 bucket for the assets, such as image and video files. Access is denied when a user attempts to access the assets bucket from the code bucket, with the website application showing a 403 error. How should the Developer solve this issue?
A. Create an IAM role and apply it to the assets bucket for the code bucket to be granted access.
B. Edit the bucket policy of the assets bucket to open access to all principals.
C. Edit the bucket policy of the assets bucket to open access to all principals.
D. Change the code bucket to use AWS Lambda functions instead of static website hosting.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
29. A company has implemented AWS CodePipeline to automate its release pipelines. The Development team is writing an AWS Lambda function what will send notifications for state changes of each of the actions in the stages. Which steps must be taken to associate the Lambda function with the event source?
A. Create a trigger that invokes the Lambda function from the Lambda console by selecting CodePipeline as the event source.
B. Create an event trigger and specify the Lambda function from the CodePipeline console.
C. Create an Amazon CloudWatch alarm that monitors status changes in Code Pipeline and triggers the Lambda function.
D. Create an Amazon CloudWatch Events rule that uses CodePipeline as an event source.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
30. A Developer has built an application running on AWS Lambda using AWS Serverless Application Model (AWS SAM). What is the correct order of execution to successfully deploy the application?
A. 1. Build the SAM template in Amazon EC2. 2. Package the SAM template to Amazon EBS storage. 3. Deploy the SAM template from Amazon EBS.
B. 1. Build the SAM template locally. 2. Package the SAM template onto Amazon S3. 3. Deploy the SAM template from Amazon S3.
C. 1. Build the SAM template locally. 2. Deploy the SAM template from Amazon S3. 3. Package the SAM template for use.
D. 1. Build the SAM template locally. 2. Package the SAM template from AWS CodeCommit. 3. Deploy the SAM template to CodeCommit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
31. A company wants to migrate an imaging service to Amazon EC2 while following security best practices. The images are sourced and read from a non-public Amazon S3 bucket. What should a Developer do to meet these requirements?
A. Create an IAM user with read-only permissions for the S3 bucket. Temporarily store the user credentials in the Amazon EBS volume of the EC2 instance.
B. Create an IAM user with read-only permissions for the S3 bucket. Temporarily store the user credentials in the user data of the EC2 instance.
C. Create an EC2 service role with read-only permissions for the S3 bucket. Attach the role to the EC2 instance.
D. Create an S3 service role with read-only permissions for the S3 bucket. Attach the role to the EC2 instance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
32. A Development team wants to immediately build and deploy an application whenever there is a change to the source code. Which approaches could be used to trigger the deployment? (Choose two.)
A. Store the source code in an Amazon S3 bucket. Configure AWS CodePipeline to start whenever a file in the bucket changes.
B. Store the source code in an encrypted Amazon EBS volume. Configure AWS CodePipeline to start whenever a file in the volume changes.
C. Store the source code in an AWS CodeCommit repository. Configure AWS CodePipeline to start whenever a change is committed to the repository.
D. Store the source code in an Amazon S3 bucket. Configure AWS CodePipeline to start every 15 minutes.
E. Store the source code in an Amazon EC2 instance’s ephemeral storage. Configure the instance to start AWS CodePipeline whenever there are changes to the source code.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  
33. An application ingests a large number of small messages and stores them in a database. The application uses AWS Lambda. A Development team is making changes to the application’s processing logic. In testing, it is taking more than 15 minutes to process each message. The team is concerned the current backend may time out. Which changes should be made to the backend system to ensure each message is processed in the MOST scalable way?
A. Add the messages to an Amazon SQS queue. Set up and Amazon EC2 instance to poll the queue and process messages as they arrive.
B. Add the messages to an Amazon SQS queue. Set up Amazon EC2 instances in an Auto Scaling group to poll the queue and process the messages as they arrive.
C. Create a support ticket to increase the Lambda timeout to 60 minutes to allow for increased processing time.
D. Change the application to directly insert the body of the message into an Amazon RDS database.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
34. An advertising company has a dynamic website with heavy traffic. The company wants to migrate the website infrastructure to AWS to handle everything except website development. Which solution BEST meets these requirements?
A. Use AWS VM Import to migrate a web server image to AWS. Launch the image on a compute-optimized Amazon EC2 instance.
B. Launch multiple Amazon Lightsail instances behind a load balancer. Set up the website on those instances.
C. Deploy the website code in an AWS Elastic Beanstalk environment. Use Auto Scaling to scale the numbers of instances.
D. Use Amazon S3 to host the website. Use Amazon CloudFront to deliver the content at scale.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
35. A Software Engineer developed an AWS Lambda function in Node.js to do some CPU-intensive data processing. With the default settings, the Lambda function takes about 5 minutes to complete. Which approach should a Developer take to increase the speed of completion?
A. Instead of using Node.js, rewrite the Lambda function using Python.
B. Instead of packaging the libraries in the ZIP file with the function, move them to a Lambda layer and use the layer with the function.
C. Allocate the maximum available CPU units to the function.
D. Increase the available memory to the function.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
36. An online retail company has deployed a serverless application with AWS Lambda, Amazon API Gateway, Amazon S3, and Amazon DynamoDB using AWS CloudFormation. The company rolled out a new release with major upgrades to the Lambda function and deployed the release to production. Subsequently, the application stopped working. Which solution should bring the application back up as quickly as possible?
A. Redeploy the application on Amazon EC2 so the Lambda function can resolve dependencies.
B. Migrate DynamoDB to Amazon RDS and redeploy the Lambda function.
C. Roll back the Lambda function to the previous version.
D. Deploy the latest Lambda function in a different Region.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
37. A Developer is writing an application that will run on Amazon EC2 instances in an Auto Scaling group. The Developer wants to externalize session state to support the application. Which services will meet these needs? (Choose two.)
A. Amazon DynamoDB.
B. Amazon Cognito.
C. Amazon ElastiCache.
D. Amazon EBS.
E. Amazon SQS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
38. A Developer has a legacy application that is hosted on-premises. Other applications hosted on AWS depend on the on-premises application for proper functioning. In case of any application errors, the Developer wants to be able to use Amazon CloudWatch to monitor and troubleshoot all applications from one place. How can the Developer accomplish this?
A. Install an AWS SDK on the on-premises server to automatically send logs to CloudWatch.
B. Download the CloudWatch agent to the on-premises server. Configure the agent to use IAM user credentials with permissions for CloudWatch.
C. Upload log files from the on-premises server to Amazon S3 and have CloudWatch read the files.
D. Upload log files from the on-premises server to an Amazon EC2 instance and have the instance forward the logs to CloudWatch.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
39. A company is developing an application that will be accessed through the Amazon API Gateway REST API. Registered users should be the only ones who can access certain resources of this API. The token being used should expire automatically and needs to be refreshed periodically. How can a Developer meet these requirements?
A. Create an Amazon Cognito identity pool, configure the Amazon Cognito Authorizer in API Gateway, and use the temporary credentials generated by the identity pool.
B. Create and maintain a database record for each user with a corresponding token and use an AWS Lambda authorizer in API Gateway.
C. Create an Amazon Cognito user pool, configure the Cognito Authorizer in API Gateway, and use the identity or access token.
D. Create an IAM user for each API user, attach an invoke permissions policy to the API, and use an IAM authorizer in API Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
40. A Developer is working on a serverless project based in Java. Initial testing shows a cold start takes about 8 seconds on average for AWS Lambda functions. What should the Developer do to reduce the cold start time? (Choose two.)
A. Add the Spring Framework to the project and enable dependency injection.
B. Reduce the deployment package by including only needed modules from the AWS SDK for Java.
C. Increase the memory allocation setting for the Lambda function.
D. Increase the timeout setting for the Lambda function.
E. Change the Lambda invocation mode from synchronous to asynchronous.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  
41. A company’s ecommerce website is experiencing massive traffic spikes, which are causing performance problems in the company database. Users are reporting that accessing the website takes a long time. A Developer wants to implement a caching layer using Amazon ElastiCache. The website is required to be responsive no matter which product a user views, and the updates to product information and prices must be strongly consistent. Which cache writing policy will satisfy these requirements?
A. Write to the cache directly and sync the backend at a later time.
B. Write to the backend first and wait for the cache to expire.
C. Write to the cache and the backend at the same time.
D. Write to the backend first and invalidate the cache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
42. A Developer is leveraging a Border Gateway Protocol (BGP)-based AWS VPN connection to connect from on-premises to Amazon EC2 instances in the Developer’s account. The Developer is able to access an EC2 instance in subnet A, but is unable to access an EC2 instance in subnet B in the same VPC. Which logs can the Developer use to verify whether the traffic is reaching subnet B?
A. VPN logs.
B. BGP logs
C. VPC Flow Logs.
D. AWS CloudTrail logs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
43. A Developer has created a new AWS IAM user that has s3 putObject permission to write to a specific Amazon S3 bucket. This S3 bucket uses server-side encryption with AWS KMS managed keys (SSE-KMS) as the default encryption. Using the access key and secret key of the IAM user, the application received an access denied error when calling the PutObject API. How can this issue be resolved?
A. Update the policy of the IAM user to allow the s3 Encrypt action.
B. Update the bucket policy of the S3 bucket to allow the IAM user to upload objects.
C. Update the policy of the IAM user to allow the kms:GenerateDataKey action.
D. Update the ACL of the S3 bucket to allow the IAM user to upload objects.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
44. A company has a web application that uses an Amazon Cognito user pool for authentication. The company wants to create a login page with the company logo. What should a Developer do to meet these requirements?
A. Create a hosted user interface in Amazon Cognito and customize it with the company logo.
B. Create a login page with the company logo and upload it to Amazon Cognito.
C. Create a login page in Amazon API Gateway with the logo and save the link in Amazon Cognito.
D. Upload the logo to the Amazon Cognito app settings and point to the logo on a custom login page.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
45. A Developer wants the ability to roll back to a previous version of an AWS Lambda function in the event of errors caused by a new deployment. How can the Developer achieve this with MINIMAL impact on users?
A. Change the application to use an alias that points to the current version. Deploy the new version of the code. Update the alias to use the newly deployed version. If too many errors are encountered, point the alias back to the previousversion.
B. Change the application to use an alias that points to the current version. Deploy the new version of the code. Update the alias to direct 10% of users to the newly deployed version. If too many errors are encountered, send 100% of trafficto the previous version.
C. Do not make any changes to the application. Deploy the new version of the code. If too many errors are encountered, point the application back to the previous version using the version number in the Amazon Resource Name (ARN).
D. Create three aliases: new, existing, and router. Point the existing alias to the current version. Have the router alias direct 100% of users to the existing alias. Update the application to use the router alias. Deploy the new version of the code. Point the new alias to this version. Update the router alias to direct 10% of users to the new alias. If too many errors are encountered, send 100% of traffic to the existing alias.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
46. A Developer is working on an AWS Lambda function that accesses Amazon DynamoDB. The Lambda function must retrieve an item and update some of its attributes, or create the item if it does not exist. The Lambda function has access to the primary key. Which IAM permissions should the Developer request for the Lambda function to achieve this functionality?
A. dynamodb:DeleteItem dynamodb:GetItem dynamodb:PutItem.
B. dynamodb:UpdateItem dynamodb:GetItem dynamodb:DescribeTable.
C. dynamodb:GetRecords dynamodb:PutItem dynamodb:UpdateTable.
D. dynamodb:UpdateItem dynamodb:GetItem dynamodb:PutItem.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
47. A Developer is storing sensitive data generated by an application in Amazon S3. The Developer wants to encrypt the data at rest. A company policy requires an audit trail of when the master key was used and by whom. Which encryption option will meet these requirements?
A. Server-side encryption with Amazon S3 managed keys (SSE-S3).
B. Server-side encryption with AWS KMS managed keys (SSE-KMS).
C. Server-side encryption with customer-provided keys (SSE-C).
D. Server-side encryption with self-managed keys.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
48. A company’s website runs on an Amazon EC2 instance and uses Auto Scaling to scale the environment during peak times. Website users across the world are experiencing high latency due to static content on the EC2 instance, even during non-peak hours. Which combination of steps will resolve the latency issue? (Choose two.)
A. Double the Auto Scaling group’s maximum number of servers.
B. Host the application code on AWS Lambda.
C. Scale vertically by resizing the EC2 instances.
D. Create an Amazon CloudFront distribution to cache the static content.
E. Store the application’s static content in Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  
49. A company is developing a web application that allows its employees to upload a profile picture to a private Amazon S3 bucket. There is no size limit for the profile pictures, which should be displayed every time an employee logs in. For security reasons, the pictures cannot be publicly accessible. What is a viable long-term solution for this scenario?
A. Generate a presigned URL when a picture is uploaded. Save the URL in an Amazon DynamoDB table. Return the URL to the browser when the employee logs in.
B. Save the picture’s S3 key in an Amazon DynamoDB table. Create an Amazon S3 VPC endpoint to allow the employees to download pictures once they log in.
C. Encode a picture using base64. Save the base64 string in an Amazon DB table. Allow the browser to retrieve the string and convert it to a picture.
D. Save the picture’s S3 key in an Amazon DynamoDB table. Use a function to generate a presigned URL every time an employee logs in. Return the URL to the browser.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
50. A Developer is going to deploy an AWS Lambda function that requires significant CPU utilization. Which approach will MINIMIZE the average runtime of the function?
A. Deploy the function into multiple AWS Regions.
B. Deploy the function into multiple Availability Zones.
C. Deploy the function using Lambda layers.
D. Deploy the function with its memory allocation set to the maximum amount.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)

