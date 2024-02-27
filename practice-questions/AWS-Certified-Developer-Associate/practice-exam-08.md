# Practice Exam 8

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A Developer is writing a mobile application that allows users to view images from an S3 bucket. The users must be able to log in with their Amazon login, as wellas Facebook® and/or Google® accounts. How can the Developer provide this authentication functionality?
    - A. Use Amazon Cognito with web identity federation.
    - B. Use Amazon Cognito with SAML-based identity federation.
    - C. Use AWS IAM Access/Secret keys in the application code to allow Get* on the S3 bucket.
    - D. Use AWS STS AssumeRole in the application code and assume a role with Get* permissions on the S3 bucket.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
2. A Developer wants access to make the log data of an application running on an EC2 instance available to systems administrators. Which of the following enables monitoring of this metric in Amazon CloudWatch?
    - A. Retrieve the log data from CloudWatch using the GetMetricData API call.
    - B. Retrieve the log data from AWS CloudTrail using the LookupEvents API call.
    - C. Launch a new EC2 instance, configure Amazon CloudWatch Events, and then install the application.
    - D. Install the Amazon CloudWatch Logs agent on the EC2 instance that the application is running on.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
3. A nightly batch job loads 1 million new records into a DynamoDB table. The records are only needed for one hour, and the table needs to be empty by the next night’s batch job. Which is the MOST efficient and cost-effective method to provide an empty table?
    - A. Use DeleteItem using a ConditionExpression.
    - B. Use BatchWriteItem to empty all of the rows.
    - C. Write a recursive function that scans and calls out DeleteItem.
    - D. Create and then delete the table after the task has completed.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
4. A company has an application that logs all information to Amazon S3. Whenever there is a new log file, an AWS Lambda function is invoked to process the log files. The code works, gathering all of the necessary information. However, when checking the Lambda function logs, duplicate entries with the same request ID are found. What is causing the duplicate entries?
    - A. The S3 bucket name was specified incorrectly.
    - B. The Lambda function failed, and the Lambda service retired the invocation with a delay.
    - C. There was an S3 outage, which caused duplicate entries of the sale log file.
    - D. The application stopped intermittently and then resumed.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
5. A company is providing services to many downstream consumers. Each consumer may connect to one or more services. This has resulted in a complex architecture that is difficult to manage and does not scale well. The company needs a single interface to manage these services to consumers. Which AWS service should be used to refactor this architecture?
    - A. AWS Lambda.
    - B. AWS X-Ray.
    - C. Amazon SQS.
    - D. Amazon API Gateway.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
6. A Developer is creating a serverless website with content that includes HTML files, images, videos, and JavaScript (client-side scripts). Which combination of services should the Developer use to create the website?
    - A. Amazon S3 and Amazon CloudFront.
    - B. Amazon EC2 and Amazon ElastiCache.
    - C. Amazon ECS and Redis.
    - D. AWS Lambda and Amazon API Gateway.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
7. A Development team has pushed out 10 applications running on several Amazon EC2 instances. The Operations team is asking for a graphical representation of one key performance metric for each application. These metrics should be available on one screen for easy monitoring. Which steps should the Developer take to accomplish this using Amazon CloudWatch?
    - A. Create a custom namespace with a unique metric name for each application.
    - B. Create a custom dimension with a unique metric name for each application.
    - C. Create a custom event with a unique metric name for each application.
    - D. Create a custom alarm with a unique metric name for each application.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
8. A company is creating an application that will require users to access AWS services and allow them to reset their own passwords. Which of the following would allow the company to manage users and authorization while allowing users to reset their own passwords?
    - A. Amazon Cognito identify pools and AWS STS.
    - B. Amazon Cognito identity pools and AWS IAM.
    - C. Amazon Cognito user pools and AWS KMS.
    - D. Amazon Cognito user pools and identity pools.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
9. A company has three different environments: Development, QA, and Production. The company wants to deploy its code first in the Development environment, then QA, and then Production. Which AWS service can be used to meet this requirement?
    - A. Use AWS CodeCommit to create multiple repositories to deploy the application.
    - B. Use AWS CodeBuild to create, configure, and deploy multiple build application projects.
    - C. Use AWS Data Pipeline to create multiple data pipeline provisions to deploy the application.
    - D. Use AWS CodeDeploy to create multiple deployment groups.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
10. A company uses Amazon DynamoDB for managing and tracking orders. The DynamoDB table is partitioned based on the order date. The company receives a huge increase in orders during a sales event, causing DynamoDB writes to throttle, and the consumed throughput is far below the provisioned throughput. According to AWS best practices, how can this issue be resolved with MINIMAL costs?
    - A. Create a new DynamoDB table for every order date.
    - B. Increase the read and write capacity units of the DynamoDB table.
    - C. Add a random number suffix to the partition key values.
    - D. Add a global secondary index to the DynamoDB table.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
11. A Development team currently supports an application that uses an in-memory store to save accumulated game results. Individual results are stored in a database. As part of migrating to AWS, the team needs to use automatic scaling. The team knows this will yield inconsistent results. Where should the team store these accumulated game results to BEST allow for consistent results without impacting performance?
    - A. Amazon S3.
    - B. Amazon RDS.
    - C. Amazon ElastiCache.
    - D. Amazon Kinesis.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
12. In a multi-container Docker environment in AWS Elastic Beanstalk, what is required to configure container instances in the environment?
    - A. An Amazon ECS task definition.
    - B. An Amazon ECS cluster.
    - C. A Dockerfile in an application package.
    - D. A CLI for Elastic Beanstalk.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
13. An application that runs on an Amazon EC2 instance needs to access and make API calls to multiple AWS services. What is the MOST secure way to provide access to the AWS services with MINIMAL management overhead?
    - A. Use AWS KMS to store and retrieve credentials.
    - B. Use EC2 instance profiles.
    - C. Use AWS root user to make requests to the application.
    - D. Store and retrieve credentials from AWS CodeCommit.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
14. A company maintains an application responsible for processing several thousand external callbacks each day. The company’s System administrators want to know how many callbacks are being received on a rolling basis, and they want this data available for 10 days. The company also wants the ability to issue automated alerts if the number of callbacks exceeds the defined thresholds. What is the MOST cost-effective way to address the need to track and alert on these statistics?
    - A. Push callback data to an Amazon RDS database that can be queried to show historical data and to alert on exceeded thresholds.
    - B. Push callback data to AWS X-Ray and use AWS Lambda to query, display, and alert on exceeded thresholds.
    - C. Push callback data to Amazon Kinesis Data Streams and invoke an AWS Lambda function that stores data in Amazon DynamoDB and sends the required alerts.
    - D. Push callback data to Amazon CloudWatch as a custom metric and use the CloudWatch alerting mechanisms to alert System Administrators.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
15. A company has a website that is developed in PHP and WordPress and is launched using AWS Elastic Beanstalk. There is a new version of the website that needs to be deployed in the Elastic Beanstalk environment. The company cannot tolerate having the website offline if an update fails. Deployments must have minimal impact and rollback as soon as possible. What deployment method should be used?
    - A. All at once.
    - B. Rolling.
    - C. Snapshots.
    - D. Immutable.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
16. A company has a multi-tiered web application on AWS. During a recent spike in traffic, one of the primary relational databases on Amazon RDS could not serve all the traffic. Some read queries for repeatedly accessed items failed, so users received error messages. What can be done to minimize the impact on database read queries MOST efficiently during future traffic spikes?
    - A. Use Amazon S3 to cache database query results.
    - B. Use Amazon RDS as a custom origin for Amazon CloudFront.
    - C. Use local storage and memory on Amazon EC2 instances to cache data.
    - D. Use Amazon ElastiCache in front of the primary database to cache data.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
17. A Developer must build an application that uses Amazon DynamoD    - B. The requirements state that the items being stored in the DynamoDB table will be 7KB in size and that reads must be strongly consistent. The maximum read rate is 3 items per second, and the maximum write rate is 10 items per second. How should the Developer size the DynamoDB table to meet these requirements?
    - A. Read: 3 read capacity unitsWrite: 70 write capacity units.
    - B. Read: 6 read capacity unitsWrite: 70 write capacity units.
    - C. Read: 6 read capacity unitsWrite: 10 write capacity units.
    - D. Read: 3 read capacity unitsWrite: 10 write capacity units.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
18. A Developer is creating an AWS Lambda function to process a stream of data from an Amazon Kinesis Data Stream. When the Lambda function parses the data and encounters a missing field, it exits the function with an error. The function is generating duplicate records from the Kinesis stream. When the Developer looks at the stream output without the Lambda function, there are no duplicate records. What is the reason for the duplicates?
    - A. The Lambda function did not advance the Kinesis stream pointer to the next record after the error.
    - B. The Lambda event source used asynchronous invocation, resulting in duplicate records.
    - C. The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data.
    - D. The Lambda function is not keeping up with the amount of data coming from the stream.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
19. A company is developing an application that will run on several Amazon EC2 instances in an Auto Scaling group and can access a database running on Amazon EC2. The application needs to store secrets required to connect to the database. The application must allow for periodic secret rotation, and there should be no changes to the application when a secret changes. What is the SAFEST way to meet these requirements?
    - A. Associate an IAM role to the EC2 instance where the application is running with permission to access the database.
    - B. Use AWS Systems Manager Parameter Store with the SecureString data type to store secrets.
    - C. Configure the application to store secrets in Amazon S3 object metadata.
    - D. Hard code the database secrets in the application code itself.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
20. A Developer writes an AWS Lambda function and uploads the code in a .ZIP file to Amazon S3. The Developer makes changes to the code and uploads a new.ZIP file to Amazon S3. However, Lambda executes the earlier code. How can the Developer fix this in the LEAST disruptive way?
    - A. Create another Lambda function and specify the new .ZIP file.
    - B. Call the update-function-code API.
    - C. Remove the earlier .ZIP file first, then add the new .ZIP file.
    - D. Call the create-alias API.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
21. An AWS Lambda function must read data from an Amazon RDS MySQL database in a VPC and also reach a public endpoint over the internet to get additional data. Which steps must be taken to allow the function to access both the RDS resource and the public endpoint? (Select TWO.)
    - A. Modify the default configuration for the Lambda function to associate it with an Amazon VPC private subnet.
    - B. Modify the default network access control list to allow outbound traffic.
    - C. Add a NAT Gateway to the VPC.
    - D. Modify the default configuration of the Lambda function to associate it with a VPC public subnet.
    - E. Add an environmental variable to the Lambda function to allow outbound internet access.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  
22. A Developer has been asked to make changes to the source code of an AWS Lambda function. The function is managed using an AWS CloudFormation template. The template is configured to load the source code from an Amazon S3 bucket. The Developer manually created a .ZIP file deployment package containing the changes and put the file into the correct location on Amazon S3. When the function is invoked, the code changes have not been applied. What step is required to update the function with the changes?
    - A. Delete the .ZIP file on S3, and re-upload by using a different object key name.
    - B. Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion.
    - C. Ensure that the function source code is base64-encoded before uploading the deployment package to S3.
    - D. Modify the execution role of the Lambda function to allow S3 access permission to the deployment package .ZIP file.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
23. A Developer wants to enable AWS X-Ray for a secure application that runs in an Amazon ECS environment. What combination of steps will enable X-Ray? (Select THREE.)
    - A. Create a Docker image that runs the X-Ray daemon.
    - B. Add instrumentation to the application code for X-Ray.
    - C. Install the X-Ray daemon on the underlying EC2 instance.
    - D. Configure and use an IAM EC2 instance role.
    - E. Register the application with X-Ray.
F. Configure and use an IAM role for tasks.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, C, D</p>
    </details>
  
24. A Developer is designing a new application that uses Amazon S3. To satisfy compliance requirements, the Developer must encrypt the data at rest. How can the Developer accomplish this?
    - A. Use s3:x-amz-acl as a condition in the S3 bucket policy.
    - B. Use Amazon RDS with default encryption.
    - C. Use aws:SecureTransport as a condition in the S3 bucket policy.
    - D. Turn on S3 default encryption for the S3 bucket.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
25. An AWS Elastic Beanstalk application needs to be deployed in multiple regions and requires a different Amazon Machine Image (AMI) in each region. Which AWS CloudFormation template key can be used to specify the correct AMI for each region?
    - A. Parameters.
    - B. Outputs.
    - C. Mappings.
    - D. Resources.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
26. A Developer wants to find a list of items in a global secondary index from an Amazon DynamoDB table. Which DynamoDB API call can the Developer use in order to consume the LEAST number of read capacity units?
    - A. Scan operation using eventually-consistent reads.
    - B. Query operation using strongly-consistent reads.
    - C. Query operation using eventually-consistent reads.
    - D. Scan operation using strongly-consistent reads.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
27. A Developer has published an update to an application that is served to a global user base using Amazon CloudFront. After deploying the application, users are not able to see the updated changes. How can the Developer resolve this issue?
    - A. Remove the origin from the CloudFront configuration and add it again.
    - B. Disable forwarding of query strings and request headers from the CloudFront distribution configuration.
    - C. Invalidate all the application objects from the edge caches.
    - D. Disable the CloudFront distribution and enable it again to update all the edge locations.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
28. A Developer must deploy a new AWS Lambda function using an AWS CloudFormation template. Which procedures will deploy a Lambda function? (Select TWO.)
    - A. Upload the code to an AWS CodeCommit repository, then add a reference to it in an AWS::Lambda::Function resource in the template.
    - B. Create an AWS::Lambda::Function resource in the template, then write the code directly inside the CloudFormation template.
    - C. Upload a .ZIP file containing the function code to Amazon S3, then add a reference to it in an AWS::Lambda::Function resource in the template.
    - D. Upload a .ZIP file to AWS CloudFormation containing the function code, then add a reference to it in an AWS::Lambda::Function resource in the template.
    - E. Upload the function code to a private Git repository, then add a reference to it in an AWS::Lambda::Function resource in the template.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
29. How should custom libraries be utilized in AWS Lambda?
    - A. Host the library on Amazon S3 and reference to it from the Lambda function.
    - B. Install the library locally and upload a ZIP file of the Lambda function.
    - C. Import the necessary Lambda blueprint when creating the function.
    - D. Modify the function runtime to include the necessary library.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
30. A company needs to secure its existing website running behind an Elastic Load Balancer. The website’s Amazon EC2 instances are CPU-constrained. What should be done to secure the website while not increasing the CPU load on the EC2 web servers? (Select TWO.)
    - A. Configure an Elastic Load Balancer with SSL pass-through.
    - B. Configure SSL certificates on an Elastic Load Balancer.
    - C. Configure an Elastic Load Balancer with a Loadable Storage System.
    - D. Install SSL certificates on the EC2 instances.
    - E. Configure an Elastic Load Balancer with SSL termination.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
31. A Developer is writing an imaging micro service on AWS Lambda. The service is dependent on several libraries that are not available in the Lambda runtime environment. Which strategy should the Developer follow to create the Lambda deployment package?
    - A. Create a ZIP file with the source code and all dependent libraries.
    - B. Create a ZIP file with the source code and a script that installs the dependent libraries at runtime.
    - C. Create a ZIP file with the source code. Stage the dependent libraries on an Amazon S3 bucket indicated by the Lambda environment variable LD_LIBRARY_PATH.
    - D. Create a ZIP file with the source code and a buildspec.yaml file that installs the dependent libraries on AWS Lambda.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
32. A Developer is designing a fault-tolerant environment where client sessions will be saved. How can the Developer ensure that no sessions are lost if an Amazon EC2 instance fails?
    - A. Use sticky sessions with an Elastic Load Balancer target group.
    - B. Use Amazon SQS to save session data.
    - C. Use Amazon DynamoDB to perform scalable session hadling.
    - D. Use Elastic Load Balancer connection draining to stop sending requests to failing instances.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
33. In a move toward using microservices, a company’s Management team has asked all Development teams to build their services so that API requests depend only on that service’s data store. One team is building a Payments service which has its own database; the service needs data that originates in the Accounts database. Both are using Amazon DynamoD    - B. What approach will result in the simplest, decoupled, and reliable method to get near-real time updates from the Accounts database?
    - A. Use Amazon Glue to perform frequent ETL updates from the Accounts database to the Payments database.
    - B. Use Amazon ElastiCache in Payments, with the cache updated by triggers in the Accounts database.
    - C. Use Amazon Kinesis Data Firehouse to deliver all changes from the Accounts database to the Payments database.
    - D. Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
34. A company needs a fully-managed source control service that will work in AWS. The service must ensure that revision control synchronizes multiple distributed repositories by exchanging sets of changes peer-to-peer. All users need to work productively even when not connected to a network. Which source control service should be used?
    - A. Subversion.
    - B. AWS CodeBuild.
    - C. AWS CodeCommit.
    - D. AWS CodeStar.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
35. A company is building an application to track athlete performance using an Amazon DynamoDB table. Each item in the table is identified by a partition key (user_id) and a sort key (sport_name). The table design is shown below:(Note: Not all table attributes are shown) A Developer is asked to write a leaderboard application to display the top performers (user_id) based on the score for each sport_name. What process will allow the Developer to extract results MOST efficiently from the DynamoDB table?
    - A. Use a DynamoDB query operation with the key attributes of user_id and sport_name and order the results based on the score attribute.
    - B. Create a global secondary index with a partition key of sport_name and a sort key of score, and get the results.
    - C. Use a DynamoDB scan operation to retrieve scores and user_id based on sport_name, and order the results based on the score attribute.
    - D. Create a local secondary index with a primary key of sport_name and a sort key of score and get the results based on the score attribute.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
36. A Developer is creating a mobile application that will not require users to log in. What is the MOST efficient method to grant users access to AWS resources?
    - A. Use an identity provider to securely authenticate with the application.
    - B. Create an AWS Lambda function to create an IAM user when a user accesses the application.
    - C. Create credentials using AWS KMS and apply these credentials to users when using the application.
    - D. Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
37. An application running on Amazon EC2 instances must access objects within an Amaon S3 busket that are encrypted using server-side encryption using AWS KMS encryption keys (SSE-KMS). The application must have access to the customer master key (CMK) to decrypt the objects. Which combination of steps will grant the application access? (Select TWO.)
    - A. Write an S3 bucket policy that grants the bucket access to the key.
    - B. Grant access to the key in the IAM EC2 role attached to the application’s EC2 instances.
    - C. Write a key policy that enables IAM policies to grant access to the key.
    - D. Grant access to the key in the S3 bucket’s ACL.
    - E. Create a Systems Manager parameter that exposes the KMS key to the EC2 instances.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  
38. What does an Amazon SQS delay queue accomplish?
    - A. Messages are hidden for a configurable amount of time when they are first added to the queue.
    - B. Messages are hidden for a configurable amount of time after they are consumed from the queue.
    - C. The consumer can poll the queue for a configurable amount of time before retrieving a message.
    - D. Message cannot be deleted for a configurable amount of time after they are consumed from the queue.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
39. A company has multiple Developers located across the globe who are updating code incrementally for a development project. When Developers upload code concurrently, internet connectivity is slow and it is taking a long time to upload code for deployment in AWS Elastic Beanstalk. Which step will result in minimized upload and deployment time with the LEAST amount of administrative effort?
    - A. Allow the Developers to upload the code to an Amazon S3 bucket, and deploy it directly to Elastic Beanstalk.
    - B. Allow the Developers to upload the code to a central FTP server to deploy the application to Elastic Beanstalk.
    - C. Create an AWS CodeCommit repository, allow the Developers to commit code to it, and then directly deploy the code to Elastic Beanstalk.
    - D. Create a code repository on an Amazon EC2 instance so that all Developers can update the code, and deploy the application from the instance to Elastic Beanstalk.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
40. A company recently migrated its web, application and NoSQL database tiers to AWS. The company is using Auto Scaling to scale the web and application tiers. More than 95 percent of the Amazon DynamoDB requests are repeated readrequests. How can the DynamoDB NoSQL tier be scaled up to cache these repeated requests?
    - A. Amazon EMR.
    - B. Amazon DynamoDB Accelerator.
    - C. Amazon SQS.
    - D. Amazon CloudFront.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
41. A Development team is working on a case management solution that allows medical claims to be processed and reviewed. Users log in to provide information related to their medical and financial situations. As part of the application, sensitive documents such as medical records, medical imaging, bank statements, and receipts are uploaded to Amazon S3. All documents must be securely transmitted and stored. All access to the documents must be recorded for auditing. What is the MOST secure approach?
    - A. Use S3 default encryption using Advanced Encryption Standard-256 (AES-256) on the destination bucket.
    - B. Use Amazon Cognito for authorization and authentication to ensure the security of the application and documents.
    - C. Use AWS Lambda to encrypt and decrypt objects as they are placed into the S3 bucket.
    - D. Use client-side encryption/decryption with Amazon S3 and AWS KMS.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
42. A company has an internet-facing application that uses Web Identity Federation to obtain a temporary credential from AWS Security Token Service (AWS STS). The app then uses the token to access AWS services. Review the following response: Based on the response displayed what permissions are associated with the call from the application?
    - A. Permissions associated with the role AROACLKWSDQRAOEXAMPLE:app1.
    - B. Permissions associated with the default role used when the AWS service was built.
    - C. Permission associated with the IAM principal that owns the AccessKeyID ASgeIAIOSFODNN7EXAMPLE.
    - D. Permissions associated with the account that owns the AWS service.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
43. A Developer is using AWS CLI, but when running list commands on a large number of resources, it is timing out. What can be done to avoid this time-out?
    - A. Use pagination.
    - B. Use shorthand syntax.
    - C. Use parameter values.
    - D. Use quoting strings.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
44. Where can PortMapping be defined when launching containers in Amazon ECS?
    - A. Security groups.
    - B. Amazon Elastic Container Registry (Amzon ECR).
    - C. Container agent.
    - D. Task definition.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
45. An application uses Amazon Kinesis Data Streams to ingest and process large streams of data records in real time. Amazon EC2 instances consume and process the data from the shards of the Kinesis data stream by using Amazon Kinesis Client Library (KCL). The application handles the failure scenarios and does not require standby workers. The application reports that a specific shard is receiving more data than expected. To adapt to the changes in the rate of data flow, the “hot” shard is resharded. Assuming that the initial number of shards in the Kinesis data stream is 4, and after resharding the number of shards increased to 6, what is the maximum number of EC2 instances that can be deployed to process data from all the shards?
    - A. 12.
    - B. 6.
    - C. 4.
    - D. 1.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
46. An organization is storing large files in Amazon S3, and is writing a web application to display meta-data about the files to end-users. Based on the metadata a user selects an object to download. The organization needs a mechanism to index the files and provide single-digit millisecond latency retrieval for the metadata. What AWS service should be used to accomplish this?
    - A. Amazon DynamoDB.
    - B. Amazon EC2.
    - C. AWS Lambda.
    - D. Amazon RDS.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
47. While developing an application that runs on Amazon EC2 in an Amazon VPC, a Developer identifies the need for centralized storage of application-level logs. Which AWS service can be used to securely store these logs?
    - A. Amazon EC2 VPC Flow Logs.
    - B. Amazon CloudWatch Logs.
    - C. Amazon CloudSearch.
    - D. AWS CloudTrail

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
48. A stock market monitoring application uses Amazon Kinesis for data ingestion. During simulated tests of peak data rates, the Kinesis stream cannot keep up with the incoming data. What step will allow Kinesis to accommodate the traffic during peak hours?
    - A. Install the Kinesis Producer Library (KPL) for ingesting data into the stream.
    - B. Reduce the data retention period to allow for more data ingestion using. DecreaseStreamRetentionPeriod.
    - C. Increase the shard count of the stream using UpdateShardCount.
    - D. Ingest multiple records into the stream in a single call using PutRecords.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
49. A company has an AWS CloudFormation template that is stored as a single file. The template is able to launch and create a full infrastructure stack. Which best practice would increase the maintainability of the template?
    - A. Use nested stacks for common template patterns.
    - B. Embed credentials to prevent typos.
    - C. Remove mappings to decrease the number of variables.
    - D. Use AWS::Include to reference publicly-hosted template files.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
50. A Developer wants to encrypt new objects that are being uploaded to an Amazon S3 bucket by an application. There must be an audit trail of who has used the key during this process. There should be no change to the performance of the application. Which type of encryption meets these requirements?
    - A. Server-side encryption using S3-managed keys.
    - B. Server-side encryption with AWS KMS-managed keys.
    - C. Client-side encryption with a client-side symmetric master key.
    - D. Client-side encryption with AWS KMS-managed keys.

     <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)