# Practice Exam 1

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Which of the following are good use cases for how Amazon ElastiCache can help an application? (Select TWO.)

A. Improve the performance of S3 PUT operations.
B. Improve the latency of deployments performed by AWS CodeDeploy.
C. Improve latency and throughput for read-heavy application workloads.
D. Reduce the time required to merge AWS CodeCommit branchesImprove performance of compute-intensive applications.
E. Improve performance of compute-intensive applications.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E 
    </details>

2. Which of the following services are key/value stores? Choose 3 answers

A. Amazon ElastiCache.
B. Simple Notification Service.
C. DynamoDB.
D. Simple Workflow Service.
E. Simple Storage Service.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C, E
    </details>

3. A developer wants to send multi-value headers to an AWS Lambda function that is registered as a target with an Application Load Balancer (ALB). What should the developer do to achieve this?

A. Place the Lambda function and target group in the same account.
B. Send the request body to the Lambda function with a size less than 1 MB 0.
C. Include the Base64 encoding status status code, status description, and headers in the Lambda function.
D. Enable the multi-value headers on the ALB.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

4. A company’s ecommerce website is experiencing massive traffic spikes, which are causing performance problems in the company database. Users are reporting that accessing the website takes a long time. A developer wants to implement a caching layer using Amazon ElastiCache. The website is required to be responsive no matter which product a user views, and the updates to product information and prices must be strongly consistent

A. Which cache writing policy will satisfy these requirements?.
B. Write to the cache directly and sync the backend at a later time.
C. Write to the backend first and wait for the cache to expire.
D. Write to the cache and the backend at the same timeWrite to the backend first and invalidate the cache.
E. Write to the backend first and invalidate the cache.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: E
    </details>

5. A Developer wants to upload data to Amazon S3 and must encrypt the data in transit. Which of the following solutions will accomplish this task? (Choose two.)

A. Set up hardware VPN tunnels to a VPC and access S3 through a VPC endpoint.
B. Set up Client-Side Encryption with an AWS KMS-Managed Customer Master Key.
C. Set up Server-Side Encryption with AWS KMS-Managed Keys.
D. Transfer the data over an SSL connectionSet up Server-Side Encryption with S3-Managed Keys.
E. Set up Server-Side Encryption with S3-Managed Keys.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

6. A Developer wants to encrypt new objects that are being uploaded to an Amazon S3 bucket by an application. There must be an audit trail of who has used the key during this process. There should be no change to the performance of the application. Which type of encryption meets these requirements?

A. Server-side encryption using S3-managed keys.
B. Server-side encryption with AWS KMS-managed keys.
C. Client-side encryption with a client-side symmetric master key.
D. Client-side encryption with AWS KMS-managed keys.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

7. An application is being developed to audit several AWS accounts. The application will run in Account A and must access AWS services in Accounts B and C. What is the MOST secure way to allow the application to call AWS services in each audited account?

A. Configure cross-account roles in each audited account. Write code in Account A that assumes those roles.
B. Use S3 cross-region replication to communicate among accounts, with Amazon S3 event notifications to trigger Lambda functions.
C. Deploy an application in each audited account with its own role. Have Account A authenticate with the application.
D. Create an IAM user with an access key in each audited account. Write code in Account A that uses those access keys.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

8. A Developer wants to use AWS X-Ray to trace a user request end-to-end throughput the software stack. The Developer made the necessary changes in the application tested it, and found that the application is able to send the traces to AWS X-Ray. However, when the application is deployed to an EC2 instance, the traces are not available. Which of the following could create this situation? (Select two.)

A. The traces are reaching X-Ray, but the Developer does not have access to view the records.
B. The X-Ray daemon is not installed on the EC2 instance.
C. The X-Ray endpoint specified in the application configuration is incorrect.
D. The instance role does not have ‘xray:BatchGetTraces’ and ‘xray:GetTraceGraph’ permissions.The instance role does not have ‘xray:PutTraceSegments’ and ‘xray:PutTelemetryRecords’ permissions.
E. The instance role does not have ‘xray:PutTraceSegments’ and ‘xray:PutTelemetryRecords’ permissions.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

9. A company uses a third-party tool to build, bundle, and package rts applications on-premises. and store them locally. The company uses Amazon EC2 instances to run its front-end applications. How can an application be deployed from the source control system onto the EC2 instances?

A. Use AWS CodeDeploy and point it to the local storage to directly deploy a bundle m a zip. tar. or tar.gz format.
B. Upload the bundle to an Amazon S3 bucket and specify the S3 location when doing a deployment using AWS CodeDeploy.
C. Create a repository using AWS CodeCommit to automatically trigger a deployment to the EC2 instances.
D. Use AWS CodeBuild to automatically deploy the latest build to the latest EC2 instances.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

10. A developer is writing a web application that must share secure documents with end users. The documents are stored in a private Amazon S3 bucket. The application must allow only authenticated users to download specific documents when requested, and only for a duration of 15 minutes. How can the developer meet these requirements?

A. Copy the documents to a separate S3 bucket that has a lifecycle policy for deletion after 15 minutes.
B. Create a presigned S3 URL using the AWS SDK with an expiration time of 15 minutes.
C. Use server-side encryption with AWS KMS managed keys (SSE-KMS) and download the documents using HTTPS.
D. Modify the S3 bucket policy to only allow specific users to download the documents Revert the change after 15 minutes.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

11. A Developer has developed a web application and wants to deploy it quickly on a Tomcat server on AWS. The Developer wants to avoid having to manage the underlying infrastructure. What is the easiest way to deploy the application, based on these requirements?

A. AWS CloudFormation.
B. AWS Elastic Beanstalk.
C. Amazon S3.
D. AWS CodePipeline.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

12. A company is building a compute-intensive application that will run on a fleet of Amazon EC2 instances. The application uses attached Amazon EBS disks for storing data. The application will process sensitive information and all the data must be encrypted. What should a developer do to ensure the data is encrypted on disk without impacting performance?

A. Configure the Amazon EC2 instance fleet to use encrypted EBS volumes for storing data.
B. Add logic to write all data to an encrypted Amazon S3 bucket.
C. Add a custom encryption algorithm to the application that will encrypt and decrypt all data.
D. Create a new Amazon Machine Image (AMI) with an encrypted root volume and store the data to ephemeral disks.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

13. A global company has an application running on Amazon EC2 instances that serves image files from Amazon S3. User requests from the browser are causing high traffic, which results in degraded performance. Which optimization solution should a Developer implement to increase application performance?

A. Create multiple prefix in the S3 bucket to increase the request rate.
B. Create an Amazon ElastiCache cluster to cache and serve frequently accessed items.
C. Use Amazon CloudFront to serve the content of images stored in Amazon S3.
D. Submit a ticket to AWS support to request a rate limit increase for the S3 bucket.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

14. A Developer has setup an Amazon Kinesis Stream with 4 shards to ingest a maximum of 2500 records per second. A Lambda function has been configured to process these records. In which order will these records be processed?

A. Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, first-out) method.
B. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (first-in, first-out) method.
C. Lambda will receive each record in the exact order it was placed into the shard following a FIFO (first-in, first-out) method. There is no guarantee of order across shards.
D. The Developer can select FIFO, (first-in, first-out), LIFO (last-in, last-out), random, or request specific record using the getRecords AP.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

15. An AWS Lambda function generates a 3MB JSON file and then uploads it to an Amazon S3 bucket daily. The file contains sensitive information, so the Developer must ensure that it is encrypted before uploading to the bucket. Which of the following modifications should the Developer make to ensure that the data is encrypted before uploading it to the bucket?

A. Use the default AWS KMS customer master key for S3 in the Lambda function code.
B. Use the S3 managed key and call the GenerateDataKey API to encrypt the file.
C. Use the GenerateDateKey API, then use that data key to encrypt the file in the Lambda function code.
D. Use a custom KMS customer master key created for S3 in the Lambda function code.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

16. Company D is running their corporate website on Amazon S3 accessed from http//www.companyd.com. Their marketing team has published new web fonts to a separate S3 bucket accessed by the S3 endpoint https://s3-us-west-1.amazonaws.com/cdfonts. While testing the new web fonts, Company D recognized the web fonts are being blocked by the browser. What should Company D do to prevent the web fonts from being blocked by the browser?

A. Enable versioning on the cdfonts bucket for each web font.
B. Create a policy on the cdfonts bucket to enable access to everyone.
C. Add the Content-MD5 header to the request for webfonts in the cdfonts bucket from the website.
D. Configure the cdfonts bucket to allow cross-origin requests by creating a CORS configuration.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

17. A developer must extend an existing application that is based on the AWS Services Application Model (AWS SAM). The developer has used the AWS SAM CLI to create the project. The project contains different AWS Lambda functions. Which combination of commands must the developer use to redeploy the AWS SAM application? (Select TWO.)

A. Sam init.
B. Sam validate.
C. Sam build.
D. Sam deploySam publish.
E. Sam publish.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

18. An application deployed on AWS Elastic Beanstalk experiences increased error rates during deployments of new application versions, resulting in service degradation for users. The Development team believes that this is because of the reduction in capacity during the deployment steps. The team would like to change the deployment policy configuration of the environment to an option that maintains full capacity during deployment while using the existing instances. Which deployment policy will meet these requirements while using the existing instances?

A. All at once.
B. Rolling.
C. Rolling with additional batch.
D. Immutable.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

19. A Developer is creating an application that needs to locate the public IPv4 address of the Amazon EC2 instance on which it runs . How can the application locate this information?

A. Get the instance metadata by retrieving http://169.254.169.254/latest/metadata/.
B. Get the instance user data by retrieving http://169.254.169.254/latest/userdata/.
C. Get the application to run IFCONFIG to get the public IP address.
D. Get the application to run IPCONFIG to get the public IP address.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

20. The development team is working on an API that will be served from Amazon API gateway. The API will be served from three environments: development, test, and production. The API Gateway is configured to use 237 GB of cache in all three stages. Which is the MOST cost-efficient deployment strategy?

A. Create a single API Gateway with all three stages.
B. Create three API Gateways, one for each stage in a single AWS account.
C. Create an API Gateway in three separate AWS accounts.
D. Enable the cache for development and test environments only when needed.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

21. A company is migrating its on-premises database to Amazon RDS for MySQL. The company has read-heavy workloads, and wants to make sure it re-factors its code to achieve optimum read performance for its queries. How can this objective be met?

A. Add database retries to effectively use RDS with vertical scaling.
B. Use RDS with multi-AZ deployment.
C. Add a connection string to use an RDS read replica for read queries.
D. Add a connection string to use a read replica on an EC2 instance.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

22. A developer needs to modify an application architecture to meet new functional requirements. Application data is stored in Amazon DynamoDB and processed for analysis in a rightly batch. The system analysts do not want to wait unit the next day to view the processed data and have asked to have it available in near-real time. Which application architect pattern would enables the data to be processed as it is received?

A. Evert driven.
B. Client served driven.
C. Fan-out driven.
D. Schedule driven.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

23. You are developing an HTTP API hosted on a Compute Engine virtual machine instance that needs to be invoked by multiple clients within the same Virtual Private Cloud (VPC). You want clients to be able to get the IP address of the service. What should you do?

A. Reserve a static external IP address and assign it to an HTTP(S) load balancing service’s forwarding rule. Clients should use this IP address to connect to the service.
B. Reserve a static external IP address and assign it to an HTTP(S) load balancing service’s forwarding rule. Then, define an A record in Cloud DN.
C. Clients should use the name of the A record to connect to the service.
D. Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal/.Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[API_NAME]/[API_VERSION]/.
E. Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[API_NAME]/[API_VERSION]/.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

24. A legacy service has an XML-based SOAP interface. The Developer wants to expose the functionality of the service to external clients with the Amazon API Gateway. Which technique will accomplish this?

A. Create a RESTful API with the API Gateway; transform the incoming JSON into a valid XML message for the SOAP interface using mapping templates.
B. Create a RESTful API with the API Gateway; pass the incoming JSON to the SOAP interface through an Application Load Balancer.
C. Create a RESTful API with the API Gateway; pass the incoming XML to the SOAP interface through an Application Load Balancer.
D. Create a RESTful API with the API Gateway; transform the incoming XML into a valid message for the SOAP interface using mapping templates.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

25. A software company needs to make sure user-uploaded documents are securely stored in Amazon S3. The documents must be encrypted at rest in Amazon S3. The company does not want to manage the security infrastructure in-house, but the company still needs extra protection to ensure it has control over its encryption keys due to industry regulations. Which encryption strategy should a developer use to meet these requirements?

A. Server-side encryption with Amazon S3 managed keys (SSE-S3).
B. Server-side encryption with customer-provided encryption keys (SSE-C).
C. Server-side encryption with AWS KMS managed keys (SSE-KMS).
D. Client-side encryption.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

26. A Developer is testing a Docker-based application that uses the AWS SDK to interact with AmazonDynamoDB. In the local development environment, the application has used IAM access keys. The application is now ready for deployment onto an ECS cluster. How should the application authenticate with AWS services in production?

A. Configure an ECS task IAM role for the application to use.
B. Refactor the application to call AWS STS AssumeRole based on an instance role.
C. Configure AWS access key/secret access key environment variables with new credentials.
D. Configure the credentials file with a new access key/secret access key.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

27. An application uses Amazon Kinesis Data Streams to ingest and process large streams of data records in real time. Amazon EC2 instances consume and process the data from the shards of the Kinesis data stream by using Amazon Kinesis Client Library (KCL). The application handles the failure scenarios and does not require standby workers. The application reports that a specific shard is receiving more data than expected. To adapt to the chnages in the rate of data flow, the “hot” shard is resharded. Assuming that the initial number of shards in the Kinesis data stream is 4, and after resharding the number of shards increased to 6, what is the maximum number of EC2 instances that can be deployed to process data from all the shards?

A. 12.
B. 6.
C. 4.
D. 1.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

28. An ecommerce startup is preparing for an annual sales event As the traffic to the company’s application increases, the development team wants to be notified when the Amazon EC2 instance’s CPU utilization exceeds 80%. Which solution will meet this requirement?

A. Create a custom Amazon CloudWatch alarm that sends a notification to an Amazon SNS topic when the CPU utilization exceeds 80%.
B. Create a custom AWS CloudTrail alarm that sends a notification to an Amazon SNS topic when the CPU utilization exceeds 80%.
C. Create a cron job on the EC2 instance that executes the –describe-instance-information command on the host instance every 15 minutes and sends the results to an Amazon SNS topic.
D. Create an AWS Lambda function that queries the AWS CloudTrail logs for the CPU Utihzation metric every 15 minutes and sends a notification to an Amazon SNS topic when the CPU utilization exceeds 80%.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

29. A gaming company is developing a mobile game application for iOS® and Android® platforms. This mobile game securely stores user data locally on the device. The company wants to allow users to use multiple device for the game, which requires user data synchronization across device.Which service should be used to synchronize user data across devices without the need to create a backend application?

A. AWS Lambda.
B. Amazon S3.
C. Amazon DynamoDB.
D. Amazon Cognito.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

30. A Developer is writing a serverless application that requires that an AWS Lambda function be invoked every 10 minutes. What is an automated and serverless way to trigger the function?

A. Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab file by adding a command to periodically invoke the Lambda function.
B. Configure an environment variable named PERIOD for the Lambda function. Set the value to 600.
C. Create an Amazon CloudWatch Events rule that triggers on a regular schedule to invoke the Lambda function.
D. Create an Amazon SNS topic that has a subscription to the Lambda function with a 600-second timer.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

31. A company is using Amazon API Gateway to manage its public-facing API. The CISO requires that the APIs be used by test account users only. What is the MOST secure way to restrict API access to users of this particular AWS account?

A. Client-side SSL certificates for authentication.
B. API Gateway resource policies.
C. Cross-origin resource sharing (CORS).
D. Usage plans.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

32. Where should the appspec.yml file be placed in order for AWS CodeDeploy to work?

A. In the root of the application source code directory structure.
B. In the bin folder along with all the complied code.
C. In an S3 bucket.
D. In the same folder as the application configuration files.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

33. A Developer is making changes to a custom application that is currently using AWS Elastic Beanstalk. After the Developer completes the changes, what solutions will update the Elastic Beanstalk environment with the new application version? (Choose two.)

A. Package the application code into a .zip file, and upload, then deploy the packaged application from the AWS Management Console.
B. Package the application code into a .tar file, create a new application version from the AWS Management Console, then update the environment by using AWS CLI.
C. Package the application code into a .tar file, and upload and deploy the packaged application from the AWS Management Console.
D. Package the application code into a .zip file, create a new application version from the packaged application by using AWS CLI, then update the environment by using AWS CLIPackage the application code into a .zip file, create a new application version from the AWS Management Console, then rebuild the environment by using AWS CLI.
E. Package the application code into a .zip file, create a new application version from the AWS Management Console, then rebuild the environment by using AWS CLI.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

34. A company is running an application built on AWS Lambda functions. One Lambda function has performance issues when it has to download a 50MB file from the Internet in every execution. This function is called multiple times a second. What solution would give the BEST performance increase?

A. Cache the file in the /tmp directory.
B. Increase the Lambda maximum execution time.
C. Put an Elastic Load Balancer in front of the Lambda function.
D. Cache the file in Amazon S3.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

35. A Developer is writing transactions into a DynamoDB table called “SystemUpdates” that has 5 write capacity units. Which option has the highest read throughput?

A. Eventually consistent reads of 5 read capacity units reading items that are 4 KB in size.
B. Strongly consistent reads of 5 read capacity units reading items that are 4 KB in size.
C. Eventually consistent reads of 15 read capacity units reading items that are 1 KB in size.
D. Strongly consistent reads of 15 read capacity units reading items that are 1 KB in size.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

36. Queries to an Amazon DynamoDB table are consuming a large amount of read capacity. The table has a significant number of large attributes. The application does not need all of the attribute data. How can DynamoDB costs be minimized while maximizing application performance?

A. Batch all the writes, and perform the write operations when no or few reads are being performed.
B. Create a global secondary index with a minimum set of projected attributes.
C. Implement exponential backoffs in the application.
D. Load balance the reads to the table using an Application Load Balancer.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

37. A Developer is writing a REST service that will add items to a shopping list. The service is built on Amazon API Gateway with AWS Lambda integrations. The shopping list items are send as query string parameters in the method request. How should the Developer convert the query string parameters to arguments for the Lambda function?

A. Enable request validation.
B. Include the Amazon Resource Name (ARN) of the Lambda function.
C. Change the integration type.
D. Create a mapping template.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

38. A development team is creating a new application designed to run on AWS. While the test and production environments will run on Amazon EC2 instances, developers will each run their own environment on their laptops. Which of the following is the simplest and MOST secure way to access AWS services from the local development machines?

A. Use an IAM role to assume a role and execute API calls using the role.
B. Create an IAM user to be shared with the entire development team, provide the development team with the access key.
C. Create an IAM user for each developer on the team: provide each developer with a unique access key.
D. Set up a federation through an Amazon Cognito user pool.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

39. How is provisioned throughput affected by the chosen consistency model when reading data from a DynamoDB table?

A. Strongly consistent reads use the same amount of throughput as eventually consistent reads.
B. Strongly consistent reads use more throughput than eventually consistent reads.
C. Strongly consistent reads use less throughput than eventually consistent reads.
D. Strongly consistent reads use variable throughput depending on read activity.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

40. A developer needs to deploy a new version to an AWS Elastic Beanstalk application. How can the developer accomplish this task?

A. Upload and deploy the new application version in the Elastic Beanstalk console.
B. Use the eb init CLI command to deploy a new version ‘.
C. Terminate the current Elastic Beanstalk environment and create a new one.
D. Modify the ebextensions folder to add a source option to services.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

41. A gaming application stores scores for players in an Amazon DynamoDB table that has four attributes user_id, user_name, user_score, and user_rank. The users are allowed to update their names only A user is authenticated by web identity federation. Which set of conditions should be added in the policy attached to the role for the dynamodb: PutItem API call? [???]

A. Option A.
B. Option B.
C. Option C.
D. Option D.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

42. A company needs a version control system for collaborative software development.Features of the system must include the following: Support for batches of changes across multiple files. Parallel branching. Version tracking. Which AWS service will meet these requirements?

A. AWS CodePipeline.
B. Amazon S3.
C. AWS Code Build.
D. AWS CodeCommit.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

43. A company is migrating from a monolithic architecture to a microservices-based architecture. The Developers need to refactor the application so that the many microservices can asynchronously communicate with each other without impacting performance. Use of which managed AWS services will enable asynchronous message passing? (Choose two.)

A. Amazon SQS.
B. Amazon Cognito.
C. Amazon Kinesis.
D. Amazon SNSAmazon ElastiCache.
E. Amazon ElastiCache.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

44. A Developer must repeatedly and consistently deploy a serverless RESTful API on AWS. Which techniques will work? (Choose two.)

A. Define a Swagger file. Use AWS Elastic Beanstalk to deploy the Swagger file.
B. Define a Swagger file. Use AWS CodeDeploy to deploy the Swagger file.
C. Deploy a SAM template with an inline Swagger definition.
D. Define a Swagger file. Deploy a SAM template that references the Swagger file.Define an inline Swagger definition in a Lambda function. Invoke the Lambda function.
E. Define an inline Swagger definition in a Lambda function. Invoke the Lambda function.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

45. A company is using Amazon API Gateway to manage access to a set of microservices implemented as AWS Lambda functions. Following a bug report, the company makes a minor breaking change to one of the APIs. In order to avoid impacting existing clients when the new API is deployed, the company wants to allow clients six months to migrate from v1 to v2.Which approach should the Developer use to handle this change?

A. Update the underlying Lambda function and provide clients with the new Lambda invocation UR.
B. Use API Gateway to automatically propagate the change to clients, specifying 180 days in the phased deployment parameter.
C. Use API Gateway to deploy a new stage named v2 to the API and provide users with its UR.
D. Update the underlying Lambda function, create an Amazon CloudFront distribution with the updated Lambda function as its origin.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

46. A developer wants the ability to roll back to a previous version of an AWS Lambda function in the event of errors caused by a new deployment. How can the developer achieve this with MINIMAL impact on users?

A. Change the application to use an alias that points to the current version Deploy the new version of the code Update the alias to use the newly deployed version. If too many errors are encountered, point the alias back to the previous version.
B. Change the application to use an alias that points to the current version Deploy the new version of the code. Update the alias to direct 10% of users to the newly deployed version. If too many errors are encountered, send 100% of traffic to the previous version.
C. Do not make any changes to the application Deploy the new version of the code. If too many errors are encountered, point the application back to the previous version using the version number in the Amazon Resource Name (ARN).
D. Create three aliases: new, existing, and router Point the existing alias to the current version Have the router alias direct 100% of users to the existing alias Update the application to use the router alias Deploy the new version of the code Point the new alias to this version Update the router alias to direct 10% of users to the new alias If too many errors are encountered, send 100% of traffic to the existing alias.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

47. A Developer executed a AWS CLI command and received the error shown below: What action should the Developer perform to make this error human-readable?

A. Make a call to AWS KMS to decode the message.
B. Use the AWS STS decode-authorization-message API to decode the message.
C. Use an open source decoding library to decode the message.
D. Use the AWS IAM decode-authorization-message API to decode this message.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

48. You are developing an HTTP API hosted on a Compute Engine virtual machine instance that needs to be invoked by multiple clients within the same Virtual Private Cloud (VPC). You want clients to be able to get the IP address of the service. What should you do?

A. Reserve a static external IP address and assign it to an HTTP(S) load balancing service’s forwarding rule. Clients should use this IP address to connect to the service.
B. Reserve a static external IP address and assign it to an HTTP(S) load balancing service’s forwarding rule. Then, define an A record in Cloud DN.
C. Clients should use the name of the A record to connect to the service.
D. Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal/.
E. Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[API_NAME]/[API_VERSION]/.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

49. An application contains two components one component to handle HI IP requests, and another component to handle background processing tasks Bach component must scale independently. The developer wants to deploy this application using AWS Elastic Beanstalk. How should this application be deployed, based on these requirements?

A. Deploy the application in a single Elastic Beanstalk environment.
B. Deploy each component in a separate Elastic Beanstalk environment.
C. Use multiple Elastic Beanstalk environments for the HTTP component but one environment for the background task component.
D. Use multiple Elastic Beanstalk environments for the background task component but one environment tor the HTTP component.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

50. A developer is building an application that needs to store date in Amazon S3. Management requires that the data be encrypted before is it sent to Amazon S3 for storage. The encryption keys need to be managed by the security team. Which approach should the developer take to meet these requirements?

A. Implement server-side encryption using customer-provided encryption keys (SSE-C).
B. Implement server-side encryption by using client-side master key.
C. Implement client-side encryption using an AWS KMS managed customer master key (CMK).
D. Implement Client-side encryption using Amazon S3 managed keys.


    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)
