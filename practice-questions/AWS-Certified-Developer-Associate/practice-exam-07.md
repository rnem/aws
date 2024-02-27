# Practice Exam 7

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Which of the following programming languages have an officially supported AWS SDK? (Choose two.)
A. Perl.
B. PHP.
C. Pascal.
D. Java.
E. SQL.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
2. A meteorological system monitors 600 temperature gauges, obtaining temperature samples every minute and saving each sample to a DynamoDB table Each sample involves writing 1K of data and the writes are evenly distributed over time. How much write throughput is required for the target table?
A. 1 write capacity unit.
B. 10 write capacity units.
C. 60 write capacity units.
D. 600 write capacity units.
E. 3600 write capacity units.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
3. In DynamoDB, what type of HTTP response codes indicate that a problem was found with the client request sent to the service?
A. 5xx HTTP response code.
B. 200 HTTP response code.
C. 306 HTTP response code.
D. 4xx HTTP response code.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
4. Company B provides an online image recognition service and utilizes SQS to decouple system components for scalability The SQS consumers poll the imaging queue as often as possible to keep end-to-end throughput as high as possible. However, Company B is realizing that polling in tight loops is burning CPU cycles and increasing costs with empty responses. How can Company B reduce the number of empty responses?
A. Set the imaging queue visibility Timeout attribute to 20 seconds.
B. Set the Imaging queue ReceiveMessageWaitTimeSeconds attribute to 20 seconds.
C. Set the imaging queue MessageRetentionPeriod attribute to 20 seconds.
D. Set the DelaySeconds parameter of a message to 20 seconds.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
5. An Amazon S3 bucket, “myawsbucket” is configured with website hosting in Tokyo region, what is the region-specific website endpoint?
A. <www.myawsbucket.ap-northeast-1.amazonaws.com>.</www.myawsbucket.ap-northeast-1.amazonaws.com>
B. myawsbucket.s3-website-ap-northeast-1.amazonawscom.
C. myawsbucket.amazonaws.com.
D. myawsbucket.tokyo.amazonaws.com.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
6. You are inserting 1000 new items every second in a DynamoDB table. Once an hour these items are analyzed and then are no longer needed. You need to minimize provisioned throughput, storage, and API calls. Given these requirements, what is the most efficient way to manage these Items after the analysis?
A. Retain the items in a single table.
B. Delete items individually over a 24 hour period.
C. Delete the table and create a new table per hour.
D. Create a new table per hour.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
7. You have written an application that uses the Elastic Load Balancing service to spread traffic to several web servers. Your users complain that they are sometimes forced to login again in the middle of using your application, after they have already logged in. This is not behavior you have designed. What is a possible solution to prevent this happening?
A. Use instance memory to save session state.
B. Use instance storage to save session state.
C. Use EBS to save session state.
D. Use ElastiCache to save session state.
E. Use Glacier to save session slate.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
8. You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?
A. Store photos on an EBS volume of the web server.
B. Remove public read access and use signed URLs with expiry dates.
C. Use CloudFront distributions for static content.
D. Block the IPs of the offending websites in Security Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
9. Which statements about DynamoDB are true? (Choose two.)
A. DynamoDB uses a pessimistic locking model.
B. DynamoDB uses optimistic concurrency control.
C. DynamoDB uses conditional writes for consistency.
D. DynamoDB restricts item access during reads.
E. DynamoDB restricts item access during writes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, C</p>
    </details>
  
10. You are providing AWS consulting services for a company developing a new mobile application that will be leveraging Amazon SNS Mobile Push for push notifications. In order to send direct notification messages to individual devices each device registration identifier or token needs to be registered with SNS; however the developers are not sure of the best way to do this. You advise them to:
A. Bulk upload the device tokens contained in a CSV file via the AWS Management Console.
B. Let the push notification service (e.g. Amazon Device Messaging) handle the registration.
C. Implement a token vending service to handle the registration.
D. Call the CreatePlatformEndPoint API function to register multiple device tokens.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
11. You are writing to a DynamoDB table and receive the following exception:” ProvisionedThroughputExceededException”. though according to your Cloudwatch metrics for the table, you are not exceeding your provisioned throughput. What could be an explanation for this?
A. You haven’t provisioned enough DynamoDB storage instances.
B. You’re exceeding your capacity on a particular Range Key.
C. You’re exceeding your capacity on a particular Hash Key.
D. You’re exceeding your capacity on a particular Sort Key.
E. You haven’t configured DynamoDB Auto Scaling triggers.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
12. If an application is storing hourly log files from thousands of instances from a high traffic web site, which naming scheme would give optimal performance on S3?
A. Sequential.
B. instancelD_log-HH-DD-MM-YYYY.
C. instancelDJog-YYYY-MM-DD-HH.
D. HH-DD-MM-YYYY-log_instancelD.
E. YYYY-MM-DD-HH-logJnstancelD.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
13. Which of the following statements about SQS is true?
A. Messages will be delivered exactly once and messages will be delivered in First in, First out order.
B. Messages will be delivered exactly once and message delivery order is indeterminate.
C. Messages will be delivered one or more times and messages will be delivered in First in, First out order.
D. Messages will be delivered one or more times and message delivery order is indeterminate.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
14. A corporate web application is deployed within an Amazon VPC, and is connected to the corporate data center via IPSec VPN. The application must authenticate against the on-premise LDAP server. Once authenticated, logged-in users can only access an S3 keyspace specific to the user. Which two approaches can satisfy the objectives? (Choose two.)
A. The application authenticates against LDAP. The application then calls the IAM Security Service to login to IAM using the LDAP credentials. The application can use the 1AM temporary credentials to access the appropriate S3 bucket.
B. The application authenticates against LDAP, and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM Role. The application can use the temporary credentials to access the appropriate S3 bucket.
C. The application authenticates against IAM Security Token Service using the LDAP credentials. The application uses those temporary AWS security credentials to access the appropriate S3 bucket.
D. Develop an identity broker which authenticates against LDAP, and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.
E. Develop an identity broker which authenticates against IAM Security Token Service to assume an IAM Role to get temporary AWS security credentials. The application calls the identity broker to get AWS temporary security credentials with access to the appropriate S3 bucket.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
15. Company C is currently hosting their corporate site in an Amazon S3 bucket with Static Website Hosting enabled. Currently, when visitors go to <a href="http://www.companyc.com">http://www.companyc.com</a> the index.html page is returned. Company C now would like a new page welcome.html to be returned when a visitor enters <a href="http://www.companyc.com">http://www.companyc.com</a> in the browser. Which of the following steps will allow Company C to meet this requirement? (Choose two.)
A. Upload an html page named welcome.html to their S3 bucket.
B. Create a welcome subfolder in their S3 bucket.
C. Set the Index Document property to welcome.html.
D. Move the index.html page to a welcome subfolder.
E. Set the Error Document property to welcome.html.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  
16. What type of block cipher does Amazon S3 offer for server side encryption?
A. Triple DES.
B. Advanced Encryption Standard.
C. Blowfish.
D. RC5.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
17. A Development team wants to instrument their code to provide more detailed information to AWS X-Ray than simple outgoing and incoming requests. This will generate large amounts of data, so the Development team wants to implement indexing so they can filter the data. What should the Development team do to achieve this?
A. Add annotations to the segment document and the code.
B. Add metadata to the segment document and the code.
C. Configure the necessary X-Ray environment variables.
D. Install required plugins for the appropriate AWS SDK.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
18. A team of Developers must migrate an application running inside an AWS Elastic Beanstalk environment from a Classic Load Balancer to an Application Load Balancer. Which steps should be taken to accomplish the task using the AWS Management Console?
A. 1. Update the application code in the existing deployment. 2. Select a new load balancer type before running the deployment. 3. Deploy the new version of the application code to the environment.
B. 1. Create a new environment with the same configurations except for the load balancer type. 2. Deploy the same application version as used in the original environment. 3. Run the swap-environment-cnames action.
C. 1. Clone the existing environment, changing the associated load balancer type. 2. Deploy the same application version as used in the original environment. 3. Run the swap-environment-cnames action.
D. 1. Edit the environment definitions in the existing deployment. 2. Change the associated load balancer type according to the requirements. 3. Rebuild the environment with the new load balancer type.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
19. A company needs a version control system for collaborative software development. Features of the system must include the following: Support for batches of changes across multiple files Parallel branching Version tracking Which AWS service will meet these requirements?
A. AWS CodePipeline.
B. Amazon S3.
C. AWS Code Build.
D. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
20. A company is using continuous integration and continuous delivery systems. A Developer now needs to automate a software package deployment to both Amazon EC2 instances and virtual servers running on-premises. Which AWS service should be used to accomplish this?
A. AWS CodePipeline.
B. AWS CodeBuild.
C. AWS Elastic Beanstalk.
D. AWS CodeDeploy.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
21. A Developer created a new AWS account and must create a scalable AWS Lambda function that meets the following requirements for concurrent execution: Average execution time of 100 seconds 50 requests per second. Which step must be taken prior to deployment to prevent errors?
A. Implement dead-letter queues to capture invocation errors.
B. Add an event source from Amazon API Gateway to the Lambda function.
C. Implement error handling within the application code.
D. Contact AWS Support to increase the concurrent execution limits.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
22. A Developer is building a three-tier web application that should be able to handle a minimum of 5000 requests per minute. Requirements state that the web tier should be completely stateless while the application maintains session state for the users. How can session data be externalized, keeping latency at the LOWEST possible value?
A. Create an Amazon RDS instance, then implement session handling at the application level to leverage a database inside the RDS database instance for session data storage.
B. Implement a shared file system solution across the underlying Amazon EC2 instances, then implement session handling at the application level to leverage the shared file system for session data storage.
C. Create an Amazon ElastiCache Memcached cluster, then implement session handling at the application level to leverage the cluster for session data storage.
D. Create an Amazon DynamoDB table, then implement session handling at the application level to leverage the table for session data storage.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
23. An Amazon DynamoDB table uses a Global Secondary Index (GSI) to support read queries. The primary table is write-heavy, whereas the GSI is used for read operations. Looking at Amazon CloudWatch metrics, the Developer notices that write operations to the primary table are throttled frequently under heavy write activity. However, write capacity units to the primary table are available and not fully consumed. Why is the table being throttled?
A. The GSI write capacity units are underprovisioned.
B. There are not enough read capacity units on the primary table.
C. Amazon DynamoDB Streams is not enabled on the table.
D. A large write operation is being performed against another table.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
24. A company runs an e-commerce website that uses Amazon DynamoDB where pricing for items is dynamically updated in real time. At any given time, multiple updates may occur simultaneously for pricing information on a particular product. This is causing the original editor’s changes to be overwritten without a proper review process. Which DynamoDB write option should be selected to prevent this overwriting?
A. Concurrent writes.
B. Conditional writes.
C. Atomic writes.
D. Batch writes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
25. A Developer has been asked to create an AWS Lambda function that is triggered any time updates are made to items in an Amazon DynamoDB table. The function has been created, and appropriate permissions have been added to the Lambda execution role. Amazon DynamoDB streams have been enabled for the table, but the function is still not being triggered. Which option would enable DynamoDB table updates to trigger the Lambda function?
A. Change the StreamViewType parameter value to NEW_AND_OLD_IMAGES for the DynamoDB table.
B. Configure event source mapping for the Lambda function.
C. Map an Amazon SNS topic to the DynamoDB streams.
D. Increase the maximum execution time (timeout) setting of the Lambda function.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
26. An application is being developed to audit several AWS accounts. The application will run in Account A and must access AWS services in Accounts B and C. What is the MOST secure way to allow the application to call AWS services in each audited account?
A. Configure cross-account roles in each audited account. Write code in Account A that assumes those roles.
B. Use S3 cross-region replication to communicate among accounts, with Amazon S3 event notifications to trigger Lambda functions.
C. Deploy an application in each audited account with its own role. Have Account A authenticate with the application.
D.  Create an IAM user with an access key in each audited account. Write code in Account A that uses those access keys.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
27. A company is running a Docker application on Amazon ECS. The application must scale based on user load in the last 15 seconds. How should a Developer instrument the code so that the requirement can be met?
A. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds.
B. Create a high-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds.
C. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 30 seconds.
D. Create a standard-resolution custom Amazon CloudWatch metric for user activity data, then publish data every 5 seconds.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
28. A company needs to ingest terabytes of data each hour from thousands of sources that are delivered almost continually throughout the day. The volume of messages generated varies over the course of the day. Messages must be delivered in real time for fraud detection and live operational dashboards. Which approach will meet these requirements?
A. Send the messages to an Amazon SQS queue, then process the messages by using a fleet of Amazon EC2 instances.
B. Use the Amazon S3 API to write messages to an S3 bucket, then process the messages by using Amazon Redshift.
C. Use AWS Data Pipeline to automate the movement and transformation of data.
D. Use Amazon Kinesis Data Streams with Kinesis Client Library to ingest and deliver messages.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
29. A Developer accesses AWS CodeCommit over SSH. The SSH keys configured to access AWS CodeCommit are tied to a user with the following permissions: The Developer needs to create/delete branches. Which specific IAM permissions need to be added, based on the principle of least privilege?
A. “codecommit:CreateBranch” “codecommit:DeleteBranch”
B. “codecommit:Put*”
C. “codecommit:Update*”
D. “codecommit:*”

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
30. An AWS Lambda function must access an external site by using a regularly rotated user name and password. These items must be kept securely and cannot be stored in the function code. What combination of AWS services can be used to accomplish this? (Choose two.)
A. AWS Certificate Manager (ACM).
B. AWS Systems Manager Parameter Store.
C. AWS Trusted Advisor.
D. AWS KMS.
E. Amazon GuardDuty.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
31. A Developer is trying to deploy a serverless application using AWS CodeDeploy. The application was updated and needs to be redeployed. What file does the Developer need to update to push that change through CodeDeploy?
A. dockerrun.aws.json
B. buildspec.yml
C. appspec.yml
D. ebextensions.config

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
32. A Developer is working on an application that handles 10MB documents that contain highly-sensitive data. The application will use AWS KMS to perform clientside encryption. What steps must be followed?
A. Invoke the Encrypt API passing the plaintext data that must be encrypted, then reference the customer managed key ARN in the KeyId parameter.
B. Invoke the GenerateRandom API to get a data encryption key, then use the data encryption key to encrypt the data.
C. Invoke the GenerateDataKey API to retrieve the encrypted version of the data encryption key to encrypt the data.
D. Invoke the GenerateDataKey API to retrieve the plaintext version of the data encryption key to encrypt the data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
33. A Developer is building a web application that uses Amazon API Gateway to expose an AWS Lambda function to process requests from clients. During testing, the Developer notices that the API Gateway times out even though the Lambda function finishes under the set time limit. Which of the following API Gateway metrics in Amazon CloudWatch can help the Developer troubleshoot the issue? (Choose two.)
A. CacheHitCount.
B. IntegrationLatency.
C. CacheMissCount.
D. Latency.
E. Count.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, D</p>
    </details>
  
34. A company needs to distribute firmware updates to its customers around the world. Which service will allow easy and secure control of the access to the downloads at the lowest cost?
A. Use Amazon CloudFront with signed URLs for Amazon S3.
B. Create a dedicated Amazon CloudFront Distribution for each customer.
C. Use Amazon CloudFront with AWS Lambda@Edge.
D. Use Amazon API Gateway and AWS Lambda to control access to an S3 bucket.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
35. A company is running an application built on AWS Lambda functions. One Lambda function has performance issues when it has to download a 50MB file from the Internet in every execution. This function is called multiple times a second. What solution would give the BEST performance increase?
A. Cache the file in the /tmp directory.
B. Increase the Lambda maximum execution time.
C. Put an Elastic Load Balancer in front of the Lambda function.
D. Cache the file in Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
36. An application writes items to an Amazon DynamoDB table. As the application scales to thousands of instances, calls to the DynamoDB API generate occasional ThrottlingException errors. The application is coded in a language incompatible with the AWS SDK. How should the error be handled?
A. Add exponential backoff to the application logic.
B. Use Amazon SQS as an API message bus.
C. Pass API calls through Amazon API Gateway.
D. Send the items to DynamoDB through Amazon Kinesis Data Firehose.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
37. An e-commerce web application that shares session state on-premises is being migrated to AWS. The application must be fault tolerant, natively highly scalable, and any service interruption should not affect the user experience. What is the best option to store the session state?
A. Store the session state in Amazon ElastiCache.
B. Store the session state in Amazon CloudFront.
C. Store the session state in Amazon S3.
D. Enable session stickiness using elastic load balancers.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
38. A Developer is creating a template that uses AWS CloudFormation to deploy an application. This application is serverless and uses Amazon API Gateway, Amazon DynamoDB, and AWS Lambda. Which tool should the Developer use to define simplified syntax for expressing serverless resources?
A. CloudFormation serverless intrinsic functions.
B. AWS serverless express.
C. An AWS serverless application model.
D. A CloudFormation serverless plugin.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
39. A Developer has a stateful web server on-premises that is being migrated to AWS. The Developer must have greater elasticity in the new design. How should the Developer re-factor the application to make it more elastic? (Choose two.)
A. Use pessimistic concurrency on Amazon DynamoDB.
B. Use Amazon CloudFront with an Auto Scaling group.
C. Use Amazon CloudFront with an AWS Web Application Firewall.
D. Store session state data in an Amazon DynamoDB table.
E. Use an ELB with an Auto Scaling group.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  
40. A Developer must analyze performance issues with production-distributed applications written as AWS Lambda functions. These distributed Lambda applications invoke other components that make up the applications. How should the Developer identify and troubleshoot the root cause of the performance issues in production?
A. Add logging statements to the Lambda functions, then use Amazon CloudWatch to view the logs.
B. Use AWS Cloud Trail and then examine the logs.
C. Use AWS X-Ray, then examine the segments and errors.
D. Run Amazon Inspector agents and then analyze performance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
41. A Developer wants to debug an application by searching and filtering log data. The application logs are stored in Amazon CloudWatch Logs. The Developer creates a new metric filter to count exceptions in the application logs. However, no results are returned from the logs. What is the reason that no filtered results are being returned?
A. A setup of the Amazon CloudWatch interface VPC endpoint is required for filtering the CloudWatch Logs in the VPC.
B. CloudWatch Logs only publishes metric data for events that happen after the filter is created.
C. The log group for CloudWatch Logs should be first streamed to Amazon Elasticsearch Service before metric filtering returns the results.
D. Metric data points for logs groups can be filtered only after they are exported to an Amazon S3 bucket.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
42. To include objects defined by the AWS Serverless Application Model (SAM) in an AWS CloudFormation template, in addition to Resources, what section MUST be included in the document root?
A. Conditions.
B. Globals.
C. Transform.
D. Properties.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
43. A company is using Amazon RDS MySQL instances for its application database tier and Apache Tomcat servers for its web tier. Most of the database queries from web applications are repeated read requests. Use of which AWS service would increase in performance by adding in-memory store for repeated read queries?
A. Amazon RDS Multi-AZ.
B. Amazon SQS.
C. Amazon ElastiCache.
D. Amazon RDS read replica.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
44. A Developer is investigating an issue whereby certain requests are passing through an Amazon API Gateway endpoint /MyAPI, but the requests do not reach the AWS Lambda function backing /MyAPI. The Developer found that a second Lambda function sometimes runs at maximum concurrency allowed for the given AWS account. How can the Developer address this issue?
A. Manually reduce the concurrent execution limit at the account level.
B. Add another API Gateway stage for /MyAPI, and shard the requests.
C. Configure the second Lambda function’s concurrency execution limit.
D. Reduce the throttling limits in the API Gateway /MyAPI endpoint

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
45. A company is migrating a single-server, on-premises web application to AWS. The company intends to use multiple servers behind an Elastic Load Balancer (ELB) to balance the load, and will also store session data in memory on the web server. The company does not want to lose that session data if a server fails or goes offline, and it wants to minimize user’s downtime. Where should the company move session data to MOST effectively reduce downtime and make users’ session data more fault tolerant?
A. An Amazon ElastiCache for Redis cluster.
B. A second Amazon EBS volume.
C. The web server’s primary disk.
D. An Amazon EC2 instance dedicated to session data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
46. A Developer created configuration specifications for an AWS Elastic Beanstalk application in a file named healthcheckurl.yaml in the .ebextensions/directory of their application source bundle. The file contains the following: After the application launches, the health check is not being run on the correct path, even though it is valid. What can be done to correct this configuration file?
A. Convert the file to JSON format.
B. Rename the file to a .config extension.
C. Change the configuration section from options_settings to resources.
D. Change the namespace of the option settings to a custom namespace.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
47. A Developer has created a Lambda function and is finding that the function is taking longer to complete than expected. After some debugging, the Developer has discovered that increasing compute capacity would improve performance. How can the Developer increase the Lambda compute resources?
A. Run on a larger instance size with more compute capacity.
B. Increase the maximum execution time.
C. Specify a larger compute capacity when calling the Lambda function.
D. Increase the allocated memory for the Lambda function.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
48. An application is running on EC2 instances. Amazon RDS is used for the database that stores user accounts and preferences. The website freezes or is slow to load while waiting for the login step to complete. The remaining components of the site are well-optimized. Which of the following techniques will resolve this issue? (Select Two.)
A. Implement the user login page as an asynchronous Lambda function.
B. Use Amazon ElastiCache for MemCached to cache user data.
C. Use Amazon Application Load Balancer to load balance the traffic to the website.
D. Call the database asynchronously so the code can continue executing.
E. Batch login requests from hundreds of users together as a single read request to the database.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
49. A Developer is building a mobile application and needs any update to user profile data to be pushed to all devices accessing the specific identity. The Developer does not want to manage a back end to maintain the user profile data. What is the MOST efficient way for the Developer to achieve these requirements using Amazon Cognito?
A. Use Cognito federated identities.
B. Use a Cognito user pool.
C. Use Cognito Sync.
D. Use Cognito events.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
50. A company maintains a REST service using Amazon API Gateway and the API Gateway native API key validation. The company recently launched a new registration page, which allows users to sign up for the service. The registration page creates a new API key using CreateApiKey and sends the new key to the user. When the user attempts to call the API using this key, the user receives a 403 Forbidden error. Existing users are unaffected and can still call the API. What code updates will grant these new users access to the API?
A. The createDeployment method must be called so the API can be redeployed to include the newly created API key.
B. The updateAuthorizer method must be called to update the API’s authorizer to include the newly created API key.
C. The importApiKeys method must be called to import all newly created API keys into the current stage of the API.
D. The createUsagePlanKey method must be called to associate the newly created API key with the correct usage plan.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)
