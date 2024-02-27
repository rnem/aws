# Practice Exam 3

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. During non-peak hours, a Developer wants to minimize the execution time of a full Amazon DynamoDB table scan without affecting normal workloads. The workloads average half of the strongly consistent read capacity units during non-peak hours. How would the Developer optimize this scan?
A. Use parallel scans while limiting the rate.
B. Use sequential scans.
C. Increase read capacity units during the scan operation.
D. Change consistency to eventually consistent during the scan operation.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
2. A large e-commerce site is being designed to deliver static objects from Amazon S3. The Amazon S3 bucket will server more than 300 GET requests per second. What should be done to optimize performance? (Choose two.)
A. Integrate Amazon CloudFront with Amazon S3.
B. Enable Amazon S3 cross-region replication.
C. Delete expired Amazon S3 server log files.
D. Configure Amazon S3 lifecycle rules.Randomize Amazon S3 key name prefixes.
E. Randomize Amazon S3 key name prefixes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  
3. A legacy service has an XML-based SOAP interface. The Developer wants to expose the functionality of the service to external clients with the Amazon API Gateway. Which technique will accomplish this?
A. Create a RESTful API with the API Gateway; transform the incoming JSON into a valid XML message for the SOAP interface using mapping templates.
B. Create a RESTful API with the API Gateway; pass the incoming JSON to the SOAP interface through an Application Load Balancer.
C. Create a RESTful API with the API Gateway; pass the incoming XML to the SOAP interface through an Application Load Balancer.
D. Create a RESTful API with the API Gateway; transform the incoming XML into a valid message for the SOAP interface using mapping templates.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
4. A Developer is creating an application that needs to locate the public IPv4 address of the Amazon EC2 instance on which it runs. How can the application locate this information?
A. Get the instance metadata by retrieving <a href="http://169.254.169.254/latest/metadata/">http://169.254.169.254/latest/metadata/</a>.
B. Get the instance user data by retrieving <a href="http://169.254.169.254/latest/userdata/">http://169.254.169.254/latest/userdata/</a>.
C. Get the application to run IFCONFIG to get the public IP address.
D. Get the application to run IPCONFIG to get the public IP address.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
5. A Developer has an application that can upload tens of thousands of objects per second to Amazon S3 in parallel within a single AWS account. As part of new requirements, data stored in S3 must use server side encryption with AWS KMS (SSE-KMS). After creating this change, performance of the application is slower. Which of the following is MOST likely the cause of the application latency?
A. Amazon S3 throttles the rate at which uploaded objects can be encrypted using Customer Master Keys.
B. The AWS KMS API calls limit is less than needed to achieve the desired performance.
C. The client encryption of the objects is using a poor algorithm.
D. KMS requires that an alias be used to create an independent display name that can be mapped to a CM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
6. A customer wants to deploy its source code on an AWS Elastic Beanstalk environment. The customer needs to perform deployment with minimal outage and should only use existing instances to retain application access log. What deployment policy would satisfy these requirements?
A. Rolling.
B. All at once.
C. Rolling with an additional batch.
D. Immutable.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
7. A Developer has setup an Amazon Kinesis Stream with 4 shards to ingest a maximum of 2500 records per second. A Lambda function has been configured to process these records. In which order will these records be processed?
A. Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, first-out) method.
B. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (first­-in, first-out) method.
C. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (first­-in, first-out) method.
D. The Developer can select FIFO, (first-in, first-out), LIFO (last-in, last-out), random, or request specific record using the getRecords AP.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
8. An organization must store thousands of sensitive audio and video files in an Amazon S3 bucket. Organizational security policies require that all data written to this bucket be encrypted. How can compliance with this policy be ensured?
A. Use AWS Lambda to send notifications to the security team if unencrypted objects are pun in the bucket.
B. Configure an Amazon S3 bucket policy to prevent the upload of objects that do not contain the x-amz­server-side-encryption header.
C. Create an Amazon CloudWatch event rule to verify that all objects stored in the Amazon S3 bucket are encrypted.
D. Configure an Amazon S3 bucket policy to prevent the upload of objects that contain the x-amz-server­side-encryption header.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
9. An application is designed to use Amazon SQS to manage messages from many independent senders. Each sender’s messages must be processed in the order they are received. Which SQS feature should be implemented by the Developer?
A. Configure each sender with a unique MessageGroupId.
B. Enable MessageDeduplicationIds on the SQS queue.
C. Configure each message with unique MessageGroupIds.
D. Enable ContentBasedDeduplication on the SQS queue.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
10. A Lambda function is packaged for deployment to multiple environments, including development, test, production, etc. Each environment has unique set of resources such as databases, etc. How can the Lambda function use the resources for the current environment?
A. Apply tags to the Lambda functions.
B. Hardcore resources in the source code.
C. Use environment variables for the Lambda functions.
D. Use separate function for development and production.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
11. A current architecture uses many Lambda functions invoking one another as a large state machine. The coordination of this state machine is legacy custom code that breaks easily. Which AWS Service can help refactor and manage the state machine?
A. AWS Data Pipeline.
B. AWS SNS with AWS SQS.
C. Amazon Elastic MapReduce.
D. AWS Step Functions.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
12. A Developer needs temporary access to resources in a second account. What is the MOST secure way to achieve this?
A. Use the Amazon Cognito user pools to get short-lived credentials for the second account.
B. Create a dedicated IAM access key for the second account, and send it by mail.
C. Create a cross-account access role, and use sts: AssumeRole API to get short-lived credentials.
D. Establish trust, and add an SSH key for the second account to the IAM user.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
13. A Developer needs to use AWS X-Ray to monitor an application that is deployed on EC2 instances. What steps have to be executed to perform the monitoring?
A. Deploy the X-Ray SDK with the application and use X-Ray annotation.
B. Install the X-Ray daemon and instrument the application code.
C. Install the X-Ray daemon and configure it to forward data to Amazon CloudWatch Events.
D. Deploy the X-Ray SDK with the application and instrument the application code.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
14. A static website is hosted in an Amazon S3 bucket. Several HTML pages on the site use JavaScript to download images from another Amazon S3 bucket. These images are not displayed when users browse the site. What is the possible cause for the issue?
A. The referenced Amazon S3 bucket is in another region.
B. The images must be stored in the same Amazon S3 bucket.
C. Port 80 must be opened on the security group in which the Amazon S3 bucket is located.
D. Cross Origin Resource Sharing must be enabled on the Amazon S3 bucket.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
15. A Developer is creating an Auto Scaling group whose instances need to publish a custom metric to Amazon CloudWatch. Which method would be the MOST secure way to authenticate a CloudWatch PUT request?
A. Create an IAM user with PutMetricData permission and put the user credentials in a private repository; have applications pull the credentials as needed.
B. Create an IAM user with PutMetricData permission, and modify the Auto Scaling launch configuration to inject the user credentials into the instance user data.
C. Modify the CloudWatch metric policies to allow the PutMetricData permission to instances from the Auto Scaling group.
D. Create an IAM role with PutMetricData permission and modify the Auto Scaling launching configuration to launch instances using that role.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
16. A Developer is working on an application that tracks hundreds of millions of product reviews in an Amazon DynamoDB table. The records include the data elements shown in the table: Which field, when used as the partition key, would result in the MOST consistent performance using DynamoDB?
A. starRating.
B. reviewID.
C. comment.
D. productID.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
17. A development team consists of 10 team members. Similar to a home directory for each team member, the manager wants to grant access to user-specific folders in an Amazon S3 bucket. For the team member with the username “TeamMemberX”, the snippet of the IAM policy looks like this: Instead of creating distinct policies for each team member, what approach can be used to make this policy snippet generic for all team members?
A. Use IAM policy condition.
B. Use IAM policy principal.
C. Use IAM policy variables.
D. Use IAM policy resource.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
18. A company needs to encrypt data at rest, but it wants to leverage an AWS managed service using its own master key. Which of the following AWS service can be used to meet these requirements?
A. SSE with Amazon S3.
B. SSE with AWS KMS.
C. Client-side encryption.
D. AWS IAM roles and policies.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
19. A Developer has implemented a Lambda function that needs to add new customers to an RDS database that is expected to run hundreds of times per hour. The Lambda function is configured to use 512MB of RAM and is based on the following pseudo code: What should the Developer do to improve performance? After testing the Lambda function, the Developer notices that the Lambda execution time is much longer than expected.
A. Increase the amount of RAM allocated to the Lambda function, which will increase the number of threads the Lambda can use.
B. Increase the amount of RAM allocated to the Lambda function, which will increase the number of threads the Lambda can use.
C. Move the database connection and close statement out of the handler. Place the connection in the global space.
D. Replace RDS wit Amazon DynamoDB to implement control over the number of writes per second.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
20. A company wants to implement a continuous integration for its workloads on AWS. The company wants to trigger unit test in its pipeline for commits-on its code repository, and wants to be notified of failure events in the pipeline. How can these requirements be met?
A. Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon SNS to trigger notifications of failure events.
B. Store the source code in GitHub. Create a CodePipeline to automate unit testing. Use Amazon SES to trigger notifications of failure events.
C. Store the source code on GitHub. Create a CodePipeline to automate unit testing. Use Amazon CloudWatch to trigger notifications of failure events.
D. Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon CloudWatch to trigger notification of failure events.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
21. An application takes 40 seconds to process instructions received in an Amazon SQS message. Assuming the SQS queue is configured with the default VisibilityTimeout value, what is the BEST way, upon receiving a message, to ensure that no other instances can retrieve a message that has already been processed or is currently being processed?
A. Use the ChangeMessageVisibility API to increase the VisibilityTimeout, then use the DeleteMessage API to delete the message.
B. Use the DeleteMessage API call to delete the message from the queue, then call DeleteQueue API to remove the queue.
C. Use the ChangeMessageVisibility API to decrease the timeout value, then use the DeleteMessage API to delete the message.
D. Use the DeleteMessageVisibility API to cancel the VisibilityTimeout, then use the DeleteMessage API to delete the message.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
22. A Developer is developing an application that manages financial transactions. To improve security, multi-factor authentication (MFA) will be required as part of the login protocol. What services can the Developer use to meet these requirements?
A. Amazon DynamoDB to store MFA session data, and Amazon SNS to send MFA codes.
B. Amazon Cognito with MFA.
C. AWS Directory Service.
D. AWS IAM with MFA enabled.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
23. A set of APIs are exposed to customers using the Amazon API Gateway. These APIs have caching enabled on the API Gateway. Customers have asked for an option to invalidate this cache for each of the APIs. What action can be taken to allow API customers to invalidate the API Cache?
A. Ask customers to use AWS credentials to call the InvalidateCache AP.
B. Ask customers to invoke an AWS API endpoint which invalidates the cache.
C. Ask customers to pass an HTTP header called Cache-Control:max-age=0.
D. Ask customers to add a query string parameter called ‘INVALIDATE_CACHE’ when making an API call.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
24. What actions could be performed to verify IAM access to get records from Amazon Kinesis Streams? (Choose two.)
A. Use the AWS CLI to retrieve the IAM group.
B. Query Amazon EC2 metadata for in-line IAM policies.
C. Request a token from AWS STS, and perform a describe action.
D. Perform a get action using the C-dry-run argument.Validate the IAM role policy with the IAM policy simulator.
E. Validate the IAM role policy with the IAM policy simulator.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  
25. A Developer is testing a Docker-based application that uses the AWS SDK to interact with Amazon DynamoDB. In the local development environment, the application has used IAM access keys. The application is now ready for deployment onto an ECS cluster. How should the application authenticate with AWS services in production?
A. Configure an ECS task IAM role for the application to use.
B. Refactor the application to call AWS STS AssumeRole based on an instance role.
C. Configure AWS access key/secret access key environment variables with new credentials.
D. Configure the credentials file with a new access key/secret access key.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
26. A company is using AWS CodeBuild to compile a website from source code stored in AWS CodeCommit. A recent change to the source code has resulted in the CodeBuild project being unable to successfully compile the website. How should the Developer identify the cause of the failures?
A. Modify the buildspec.yml file to include steps to send the output of build commands to Amazon CloudWatch.
B. Use a custom Docker image that includes the AWS X-Ray agent in the AWS CodeBuild project configuration.
C. Check the build logs of the failed phase in the last build attempt in the AWS CodeBuild project build history.
D. Manually re-run the build process on a local machine so that the output can be visualized.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
27. For a deployment using AWS CodeDeploy, what is the run order of the hooks for in-place deployments?
A. Before Install -&gt; Application Stop -&gt; Application Start -&gt; After Install.
B. Application Stop -&gt; Before Install -&gt; After Install -&gt; Application Start.
C. Before Install -&gt; Application Stop -&gt; Validate Service -&gt; Application Start.
D. Application Stop -&gt; Before Install -&gt; Validate Service -&gt; Application Start.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
28. Where should an Elastic Beanstalk configuration file named healthcheckur1.configbe placed in the application source bundle?
A. In the root of the application.
B. In the bin folder.
C. In healthcheckur1.config.ebextension under root.
D. In the .ebextensions folder.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
29. The Developer for a retail company must integrate a fraud detection solution into the order processing solution. The fraud detection solution takes between ten and thirty minutes to verify an order. At peak, the web site can receive one hundred orders per minute. What is the most scalable method to add the fraud detection solution to the order processing pipeline?
A. Add all new orders to an Amazon SQS queue. Configure a fleet of 10 EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status.
B. Add all new orders to an SQS queue. Configure an Auto Scaling group that uses the queue depth metric as its unit of scale to launch a dynamically-sized fleet of EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status.
C. Add all new orders to an Amazon Kinesis Stream. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status.
D. Write all new orders to Amazon DynamoDConfigure DynamoDB Streams to include all new orders. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status.
E. Configure DynamoDB Streams to include all new orders. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
30. A Developer uses AWS CodeDeploy to automate application deployment that connects to an external MySQL database. The Developer wants to securely access the encrypted secrets, such as API keys and database passwords. Which of the following solutions would involve the LEAST administrative effort?
A. Save the secrets in Amazon S3 with AWS KMS server-side encryption, and use a signed URL to access them by using the IAM role from Amazon EC2 instances.
B. Use the instance metadata to store the secrets and to programmatically access the secrets from EC2 instances.
C. Use the Amazon DynamoDB client-side encryption library to save the secrets in DynamoDB and to programmatically access the secrets from EC2 instances.
D. Use AWS SSM Parameter Store to store the secrets and to programmatically access them by using the IAM role from EC2 instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
31. An application stops working with the following error: The specified bucket does not exist. Where is the BEST place to start the root cause analysis?
A. Check the Elastic Load Balancer logs for DeleteBucket requests.
B. Check the application logs in Amazon CloudWatch Logs for Amazon S3 DeleteBucket errors.
C. Check AWS X-Ray for Amazon S3 DeleteBucket alarms.
D. Check AWS CloudTrail for a DeleteBucket event.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
32. A Developer will be using the AWS CLI on a local development server to manage AWS services. What can be done to ensure that the CLI uses the Developer’s IAM permissions when making commands?
A. Specify the Developer’s IAM access key ID and secret access key as parameters for each CLI command.
B. Run the aws configure CLI command, and provide the Developer’s IAM access key ID and secret access key.
C. Specify the Developer’s IAM user name and password as parameters for each CLI command.
D. Use the Developer’s IAM role when making the CLI command.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
33. An application stores images in an S3 bucket. Amazon S3 event notifications are used to trigger a Lambda function that resizes the images. Processing each image takes less than a second. How will AWS Lambda handle the additional traffic?
A. Lambda will scale out to execute the requests concurrently.
B. Lambda will handle the requests sequentially in the order received.
C. Lambda will process multiple images in a single execution.
D. Lambda will add more compute to each execution to reduce processing time.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
34. A company is building a stock trading application that requires sub-millisecond latency in processing trading requests. Amazon DynamoDB is used to store all the trading data that is used to process each request. After load testing the application, the development team found that due to data retrieval times, the latency requirement is not satisfied. Because of sudden high spikes in the number of requests, DynamoDB read capacity has to be significantly over-provisioned to avoid throttling. What steps should be taken to meet latency requirements and reduce the cost of running the application?
A. Add Global Secondary Indexes for trading data.
B. Store trading data in Amazon S3 and use Transfer Acceleration.
C. Add retries with exponential back-off for DynamoDB queries.
D. Use DynamoDB Accelerator to cache trading data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
35. A Developer created a Lambda function for a web application backend. When testing the Lambda function from the AWS Lambda console, the Developer can see that the function is being executed, but there is no log data being generated in Amazon CloudWatch Logs, even after several minutes. What could cause this situation?
A. The Lambda function does not have any explicit log statements for the log data to send it to CloudWatch Logs.
B. The Lambda function is missing CloudWatch Logs as a source trigger to send log data.
C. The execution role for the Lambda function is missing permissions to write log data to the CloudWatch Logs.
D. The Lambda function is missing a target CloudWatch Log group.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
36. A Developer wants to use AWS X-Ray to trace a user request end-to-end throughput the software stack. The Developer made the necessary changes in the application tested it, and found that the application is able to send the traces to AWS X-Ray. However, when the application is deployed to an EC2 instance, the traces are not availableWhich of the following could create this situation? (Choose two.)
A. The traces are reaching X-Ray, but the Developer does not have access to view the records.
B. The X-Ray daemon is not installed on the EC2 instance.
C. The X-Ray endpoint specified in the application configuration is incorrect.
D. The instance role does not have ‘xray:BatchGetTraces’ and ‘xray:GetTraceGraph’ permissions.The instance role does not have ‘xray:PutTraceSegments’ and ‘xray:PutTelemetryRecords’ permissions.
E. The instance role does not have ‘xray:PutTraceSegments’ and ‘xray:PutTelemetryRecords’ permissions.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, E</p>
    </details>
  
37. Amazon S3 has the following structure: S3://BUCKET/FOLDERNAME/FILENAME.zip Which S3 best practice would optimize performance with thousands of PUT request each second to a single bucket?
A. Prefix folder names with user id; for example, s3://BUCKET/2013-FOLDERNAME/FILENAME.zip.
B. Prefix file names with timestamps; for example, s3://BUCKET/FOLDERNAME/2013-26-05-15-00-00-FILENAME.zip.
C. Prefix file names with random hex hashes; for example, s3://BUCKET/FOLDERNAME/23a6-FILENAME.zip.
D. Prefix folder names with random hex hashes; for example, s3://BUCKET/23a6-FOLDERNAME/FILENAME.zip.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
38. An application has hundreds of users. Each user may use multiple devices to access the application. The Developer wants to assign unique identifiers to these users regardless of the device they use. Which of the following methods should be used to obtain unique identifiers?
A. Create a user table in Amazon DynamoDB as key-value pairs of users and their devices. Use these keys as unique identifiers.
B. Use IAM-generated access key IDs for the users as the unique identifier, but do not store secret keys.
C. Implement developer-authenticated identities by using Amazon Cognito, and get credentials for these identities.
D. Assign IAM users and roles to the users. Use the unique IAM resource ID as the unique identifier.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
39. What are the steps to using the AWS CLI to launch a templatized serverless application?
A. Use AWS CloudFormation get-template then CloudFormation execute-change-set.
B. Use AWS CloudFormation validate-template then CloudFormation create-change-set.
C. Use AWS CloudFormation package then CloudFormation deploy.
D. Use AWS CloudFormation create-stack then CloudFormation update-stack.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
40. A deployment package uses the AWS CLI to copy files into any S3 bucket in the account, using access keys stored in environment variables. The package is running on EC2 instances, and the instances have been modified to run with an assumed IAM role and a more restrictive policy that allows access to only one bucket. After the change, the Developer logs into the host and still has the ability to write into all of the S3 buckets in that account. What is the MOST likely cause of this situation?
A. An IAM inline policy is being used on the IAM role.
B. An IAM managed policy is being used on the IAM role.
C. The AWS CLI is corrupt and needs to be reinstalled.
D. The AWS credential provider looks for instance profile credentials last.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
41. When a Developer tries to run an AWS CodeBuild project, it raises an error because the length of all environment variables exceeds the limit for the combined maximum of characters. What is the recommended solution?
A. Add the exportLC_ALL=’en_U.
B. utf8’command to the pre_buildsection to ensure POSIX localization.
C. Use Amazon Cognito to store key-value pairs for large numbers of environment variables.
D. Update the settings for the build project to use an Amazon S3 bucket for large numbers of environment variables.Use AWS Systems Manager Parameter Store to store large numbers of environment variables.
E. Use AWS Systems Manager Parameter Store to store large numbers of environment variables.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
42. A supplier is writing a new RESTful API for customers to query the status of orders. The customers requested the following API endpoint. <a href="http://www.supplierdomain.com/status/customerID">http://www.supplierdomain.com/status/customerID</a> Which of the following application designs meet the requirements? (Choose two.)
A. Amazon SQS; Amazon SNS.
B. Elastic Load Balancing; Amazon EC2.
C. Amazon ElastiCache; Amazon Elacticsearch Service.
D. Amazon API Gateway; AWS LambdaAmazon S3; Amazon CloudFront.
E. Amazon S3; Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  
43. An application overwrites an object in Amazon S3, and then immediately reads the same object. Why would the application sometimes retrieve the old version of the object?
A. S3 overwrite PUTS are eventually consistent, so the application may read the old object.
B. The application needs to add extra metadata to label the latest version when uploading to Amazon S3.
C. All S3 PUTS are eventually consistent, so the application may read the old object.
D. The application needs to explicitly specify latest version when retrieving the object.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
44. An application under development is required to store hundreds of video files. The data must be encrypted within the application prior to storage, with a unique key for each video file. How should the Developer code the application?
A. Use the KMS Encrypt API to encrypt the data. Store the encrypted data key and data.
B. Use a cryptography library to generate an encryption key for the application. Use the encryption key to encrypt the data. Store the encrypted data.
C. Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.
D. Upload the data to an S3 bucket using server side-encryption with an AWS KMS key.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
45. A developer is testing an application that invokes an AWS Lambda function asynchronously. During the testing phase, the Lambda function fails to process after two retries. How can the developer troubleshoot the failure?
A.  Configure AWS CloudTrail logging to investigate the invocation failures.
B. Configure Dead Letter Queues by sending events to Amazon SQS for investigatio.
C. Configure Amazon Simple Workflow Service to process any direct unprocessed events.
D. Configure AWS Config to process any direct unprocessed events.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
46. A developer is setting up Amazon API Gateway for their company’s products. The API will be used by registered developers to query and update their environments. The company wants to limit the amount of requests end users can send for both cost and security reasons. Management wants to offer registered developers the option of buying larger packages that allow for more requests. How can the developer accomplish this with the LEAST amount of overhead management?
A. Enable throttling for the API Gateway stage. Set a value for both the rate and burst capacity. If a registered user chooses a larger package, create a stage for them, adjust the values, and share the new URL with them.
B. Set up Amazon CloudWatch API logging in API Gateway. Create a filter based on the user and requestTime fields and create an alarm on this filter. Write an AWS Lambda function to analyze the values and requester information, andrespond accordingly. Set up the function as the target for the alarm. If a registered user chooses a larger package, update the Lambda code with the values.
C. Enable Amazon CloudWatch metrics for the API Gateway stage. Set up CloudWatch alarms based off the Count metric and the ApiName, Method, Resource, and Stage dimensions to alerts when request rates pass the threshold. Setthe alarm action to Deny. If a registered user chooses a larger package, create a user-specific alarm and adjust the values.
D. Set up a default usage plan, specify values for the rate and burst capacity, and associate it with a stage. If a registered user chooses a larger package, create a custom plan with the appropriate values and associate the plan with theuser.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
47. A developer is refactoring a monolithic application. The application takes a POST request and performs several operations. Some of the operations are in parallel while others run sequentially. These operations have been refactored into individual AWS Lambda functions. The POST request will be processed by Amazon API Gateway. How should the developer invoke the Lambda functions in the same sequence using API Gateway?
A. Use Amazon SQS to invoke the Lambda functions.
B. Use an AWS Step Functions activity to run the Lambda functions.
C. Use Amazon SNS to trigger the Lambda functions.
D. Use an AWS Step Functions state machine to orchestrate the Lambda functions.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
48. A company is adding stored value (or gift card) capability to its highly popular casual gaming website. Users need to be able to trade this value for other users’ items on the platform. This would require both users’ records be updated as a single transaction, or both users’ records to be completely rolled back. Which AWS database options can provide the transactional capability required for this new feature? (Choose two.)
A. Amazon DynamoDB with operations made with the ConsistentRead parameter set to true.
B. Amazon ElastiCache for Memcached with operations made within a transaction block.
C. Amazon Aurora MySQL with operations made within a transaction block.
D. Amazon DynamoDB with reads and writes made using Transact* operations.
E. Amazon Redshift with operations made within a transaction block.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
49. A developer is creating an AWS Lambda function that generates a new file each time it runs. Each new file must be checked into an AWS CodeCommit repository hosted in the same AWS account. How should the developer accomplish this?
A. When the Lambda function starts, use the Git CLI to clone the repository. Check the new file into the cloned repository and push the change.
B. After the new file is created in Lambda, use cURL to invoke the CodeCommit API. Send the file to the repository.
C. Use an AWS SDK to instantiate a CodeCommit client. Invoke the put_file method to add the file to the repository.
D. Upload the new to an Amazon S3 bucket. Create an AWS Step Function to accept S3 events. In the Step Function, add the new file to the repository.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
50. A developer must ensure that the IAM credentials used by an application in Amazon EC2 are not misused or compromised. What should the developer use to keep user credentials secure?
A. Environment variables.
B. AWS credentials file.
C. Instance profile credentials.
D. Command line options.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)