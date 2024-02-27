# Practice Exam 2

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A company is using AWS CloudFormation templates to deploy AWS resources. The company needs to update one of its AWS CloudFormation stacks. What can the company do to find out how the changes will impact the resources that are running?
    - A. Investigate the change sets.
    - B. Investigate the stack policies.
    - C. Investigate the Metadata section.
    - D. Investigate the Resources section.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
2. A developer is creating a serverless web application and maintains different branches of code. The developer wants to avoid updating the Amazon API Gateway target endpoint each time a new code push is performed. What solution would allow me developer toPerform a code push efficiently, without the need to update the API Gateway?
    - A. Associate different AWS Lambda functions to an API Gateway target endpoint.
    - B. Create different stages in API Gateway, then associate API Gateway with aws Lambda.
    - C. Create aliases and versions In AWS Lambda.
    - D. Tag the AWS Lambda functions with different names.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
3. An application running on EC2 instances is storing data in an S3 bucket. Security policy mandates that all data must be encrypted in transit. How can the Developer ensure that all traffic to the S3 bucket is encrypted?
    - A. Install certificates on the EC2 instances.
    - B. Create a bucket policy that allows traffic where SecureTransport is true.
    - C. Create an HTTPS redirect on the EC2 instances.
    - D. Create a bucket policy that denies traffic where SecureTransport is false.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
4. A supplier is writing a new RESTful API for customers to query the status of orders. The customers requested the following API endpoint.<a href="http://www.supplierdomain.com/status/customerID">http://www.supplierdomain.com/status/customerID</a> Which of the following application designs meet the requirements? (Select two.)
    - A. Amazon SQS; Amazon SNS.
    - B. Elastic Load Balancing; Amazon EC2.
    - C. Amazon ElastiCache; Amazon Elacticsearch Service.
    - D. Amazon API Gateway; AWS LambdaAmazon S3; Amazon CloudFront.
    - E. Amazon S3; Amazon CloudFront.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  
5. A developer Is designing an AWS Lambda function that create temporary files that are less than 10 MB during execution. The temporary files will be accessed and modified multiple times during execution. The developer has no need to save or retrieve these files in the future. Where should the temporary file be stored?
    - A. the /tmp directory.
    - B. Amazon EFS.
    - C. Amazon EBS.
    - D. Amazon S3.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
6. A website’s page load times are gradually increasing as more users access the system at the same time. Analysis indicates that a user profile is being loaded from a database in all the web pages being visited by each user and this is increasing the database load and the page load latency. To address this issue the Developer decides to cache the user profile data. Which caching strategy will address this situation MOST efficiently?
    - A. Create a new Amazon EC2 Instance and run a NoSQL database on it. Cache the profile data within this database using the write-through caching strategy.
    - B. Create an Amazon ElastiCache cluster to cache the user profile data. Use a cache-aside caching strategy.
    - C. Use a dedicated Amazon RDS instance for caching profile data. Use a write-through caching strategy.
    - D. Create an ElastiCache cluster to cache the user profile data. Use a write-through caching strategy.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
7. An advertising company has a dynamic website with heavy traffic. The company wants to migrate the website infrastructure to AWS to handle everything except website development. Which solution BEST meets these requirements?
    - A. Use AWS VM Import to migrate a web server image to AWS Launch the image on a compute-optimized Amazon EC2 instanceLaunch.
    - B. Launch multiple Amazon Lighsall instance behind a load balancer. Set up the website on those instances.
    - C. Deploy the website code in an AWS Elastic Beanstalk environment. Use Auto Scaling to scale the numbers of instance.
    - D. Use Amazon S3 to host the website. Use Amazon CloudFornt to deliver the content at scale.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
8. A developer is writing an AWS Lambda function. The developer wants to log key events that occur during the Lambda function and include a unique identifier to associate the events with a specific function invocation. Which of the following will help the developer accomplish this objective?
    - A. Obtain the request identifier from the Lambda context object Architect the application to write logs to the console.
    - B. Obtain the request identifier from the Lambda event object Architect the application to write logs to a file.
    - C. Obtain the request identifier from the Lambda event object Architect the application to write logs to the console.
    - D. Obtain the request identifier from the Lambda context object Architect the application to write logs to a file.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
9. You are developing an HTTP API hosted on a Compute Engine virtual machine instance that needs to be invoked by multiple clients within the same Virtual Private Cloud (VPC). You want clients to be able to get the IP address of the service. What should you do?
    - A. Reserve a static external IP address and assign it to an HTTP(S) load balancing service’s forwarding rule. Clients should use this IP address to connect to the service.
    - B. Reserve a static external IP address and assign it to an HTTP(S) load balancing service’s forwarding rule. Then, define an A record in Cloud DN.
    - C. Clients should use the name of the A record to connect to the service.
    - D. Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal/.Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[API_NAME]/[API_VERSION]/.
    - E. Ensure that clients use Compute Engine internal DNS by connecting to the instance name with the url https://[API_NAME]/[API_VERSION]/.
      
10. A company stores all personally identifiable information (PII) in an Amazon DynamoDB table named PII in Account     - A. An application running on Amazon EC2 instances in Account B requires access to the PII table. An administrators in Account A created an IAM role named AccessPII with privileges to access the PII table, and made account B a trusted entity. Which combination of actional steps should Developers take to access the table? (Select TWO )
    - A. Ask an Administrator in Account B to allow the EC2 IAM role permission to assume the AccessPII role.
    - B. Ask an Administrator in Account B to allow the EC2 IAM role permission to assume the AccessPll role with = predefined service control policies.
    - C. Ask an Administrator in Account A to allow the EG2 IAM role permission to assume the AccessPII role with predefined service control policies.
    - D. Include the AssumeRole API in the application code logic to obtain credentials to access the PlI table.
    - E. Include the GetSession token API in the application code logic to obtain credentials to access the Pll table.
        <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
11. An AWS Lambda function accesses two Amazon DynamoDB tables. A developer wants to improve the performance of the Lambda function by identifying bottlenecks in the function. How can the developer inspect the timing of the DynamoDB API calls?
    - A. Add DynamoDB as an event source to the Lambda function. View the performance with Amazon CloudWatch metrics.
    - B. Place an Application Load Balancer (ALB) in front of the two DynamoDB tables. Inspect the ALB logs.
    - C. Limit Lambda to no more than five concurrent invocations Monitor from the Lambda console.
    - D. Enable AWS X-Ray tracing for the function. View the traces from the X-Ray service.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
12. An Amazon RDS database instance is used by many applications to look up historical data. The query rate is relatively constant. When the historical data is updated each day, the resulting write traffic slows the read query performance and affects all application users. What can be done to eliminate the performance impact on application users?
    - A. Make sure Amazon RDS is Multi-AZ so it can better absorb increased traffic.
    - B. Create an RDS Read Replica and direct all read traffic to the replica.
    - C. Implement Amazon ElastiCache in front of Amazon RDS to buffer the write traffic.
    - D. Use Amazon DynamoDB instead of Amazon RDS to buffer the read traffic.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
13. A company is developing a serverless ecommerce web application. The application needs to make coordinated, all-or-nothing changes to multiple items in the company’s inventory table in Amazon DynamoD    - B. Which solution will meet these requirements?
    - A. Enable transactions for the DynamoDB table Use the Batch Writeltem operation to update the items.
    - B. Use the Transact Writeitem operation to group the changes Update the items in the table.
    - C. Set up a FIFO queue using Amazon SQ.
    - D. Group the changes in the queue. Update the table based on the grouped changesCreate a transaction table in an Amazon Aurora DB cluster to manage the transactions Write a backend process to sync the Aurora DB table and the DynamoDB table.
    - E. Create a transaction table in an Amazon Aurora DB cluster to manage the transactions Write a backend process to sync the Aurora DB table and the DynamoDB table.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
14. An application is running on an EC2 instance. The Developer wants to store an application metric in Amazon CloudWatch. What is the best practice for implementing this requirement?
    - A. Use the PUT Object API call to send data to an S3 bucket. Use an event notification to invoke a Lambda function to publish data to CloudWatch.
    - B. Publish the metric data to an Amazon Kinesis Stream using a PutRecord API call. Subscribe a Lambda function that publishes data to CloudWatch.
    - C. Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Provide the required credentials to enable the API call.
    - D. Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Launch the EC2 instance with the required IAM role to enable the API call.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
15. A Developer needs to design an application running on AWS that will be used to consume Amazon SQS messages that range from 1 KB up to 1GB in size. How should the Amazon SQS messages be managed?
    - A. Use Amazon S3 and the Amazon SQS CL.
    - B. Use Amazon S3 and the Amazon SQS Extended Client Library for Java.
    - C. Use Amazon EBS and the Amazon SQS CL.
    - D. Use Amazon EFS and the Amazon SQS CL.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
16. A developer has written a multi-threaded application that is running on a fleet of Amazon EC2 instances. The operations team has requested a graphical method to monitor the number of running threads over time. What is the MOST efficient way to fulfill this request?
    - A. Periodically send the thread count to AWS X-Ray segments, then generate a service graph on demand.
    - B. Create a custom Amazon CloudWatch metric and periodically perform a PutMetricData call with the current thread count.
    - C. Periodically log thread count data to Amazon S3. Use Amazon Kinesis to process the data into a graph.
    - D. Periodically write the current thread count to a table using Amazon DynarnoDB and use Amazon CloudFront to create a graph.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
17. An organization must store thousands of sensitive audio and video files in an Amazon S3 bucket. Organizational security policies require that all data written to this bucket be encrypted. How can compliance with this policy be ensured?
    - A. Use AWS Lambda to send notifications to the security team if unencrypted objects are pun in the bucket.
    - B. Configure an Amazon S3 bucket policy to prevent the upload of objects that do not contain the x-amzserver-side-encryption header.
    - C. Create an Amazon CloudWatch event rule to verify that all objects stored in the Amazon S3 bucket are encrypted.
    - D. Configure an Amazon S3 bucket policy to prevent the upload of objects that contain the x-amz-server-sideencryption header.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
18. A developer uses Amazon S3 buckets for static website hosting. The developer creates one S3 bucket for the code and another S3 bucket for the assets, such as image and video files. Access is denied when a user attempts to access the assets bucket from the code bucket, with the website application showing a 403 error. How should the developer solve this issue?
    - A. Create an IAM role and apply it to the assets bucket for the code bucket to be granted access.
    - B. Edit the bucket policy of the assets bucket to open access to all principals.
    - C. Edit the cross-origin resource sharing (CORS) configuration of the assets bucket to allow any origin to access the assets.
    - D. Change the code bucket to use AWS Lambda functions instead of static website hosting.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
19. A Developer has created an S3 bucket s3://mycoolappand has enabled server across logging that points to the folder s3://mycoolapp/logs.The Developer moved 100 KB of Cascading Style Sheets (CSS) documents to the folder s3://mycoolapp/css, and then stopped work. When the developer came back a few days later, the bucket was 50 G    - B. What is the MOST likely cause of this situation?
    - A. The CSS files were not compressed and S3 versioning was enabled.
    - B. S3 replication was enabled on the bucket.
    - C. Logging into the same bucket caused exponential log growth.
    - D. An S3 lifecycle policy has moved the entire CSS file to S3 Infrequent Access.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
20. A Developer created a dashboard for an application using Amazon API Gateway, Amazon S3, AWS Lambda, and Amazon RDS. The Developer needs an authentication mechanism allowing a user to sign in and view the dashboard. It must be accessible from mobile applications, desktops, and tablets, and must remember user preferences across platforms. Which AWS service should the Developer use to support this authentication scenario?
    - A. AWS KMS.
    - B. Amazon Cognito.
    - C. AWS Directory Service.
    - D. Amazon IAM.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
21. A Developer is creating an Auto Scaling group whose instances need to publish a custom metric to Amazon CloudWatch. Which method would be the MOST secure way to authenticate a CloudWatch PUT request?
    - A. Create an IAM user with PutMetricData permission and put the user credentials in a private repository; have applications pull the credentials as needed.
    - B. Create an IAM user with PutMetricData permission, and modify the Auto Scaling launch configuration to inject the user credentials into the instance user data.
    - C. Modify the CloudWatch metric policies to allow the PutMetricData permission to instances from the Auto Scaling group.
    - D. Create an IAM role with PutMetricData permission and modify the Auto Scaling launching configuration to launch instances using that role. The Lambda function below is being called through an API using Amazon API Gateway. The average execution time for the Lambda function is about 1 second. The pseudocode for the Lambda function is as shown in the exhibit.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
22. The Lambda function below is being called through an API using Amazon API Gateway. The average execution time for the Lambda function is about 1 second. The pseudocode for the Lambda function is as shown in the exhibit. What two actions can be taken to improve the performance of this Lambda function without increasing the cost of the solution?
    - A. Package only the modules the Lambda function requires.
    - B. Use Amazon DynamoDB instead of Amazon RDS.
    - C. Move the initialization of the variable Amazon RDS connection outside of the handler function.
    - D. Implement custom database connection pooling with the Lambda function.
    - E. Implement local caching of Amazon RDS data so Lambda can re-use the cache.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, E</p>
    </details>
  
23. An application on AWS is using third-party APIs. The Developer needs to monitor API errors in the code, and wants to receive notifications if failures go above a set threshold value. How can the Developer achieve these requirements?
    - A. Publish a custom metric on Amazon CloudWatch and use Amazon SES for notification.
    - B. Use an Amazon CloudWatch API-error metric and use Amazon SNS for notification.
    - C. Use an Amazon CloudWatch API-error metric and use Amazon SES for notification.
    - D. Publish a custom metric on Amazon CloudWatch and use Amazon SNS for notification.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
24. The release process workflow of an application requires a manual approval before the code is deployed into the production environment. What is the BEST way to achieve this using AWS CodePipeline?
    - A. Use multiple pipelines to allow approval.
    - B. Use an approval action in a stage.
    - C. Disable the stage transition to allow manual approval.
    - D. Disable a stage just prior the deployment stage.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
25. A Developer is asked to implement a caching layer in front of Amazon RDS. Cached content is expensive to regenerate in case of service failure. Which implementation below would work while maintaining maximum uptime?
    - A. Implement Amazon ElastiCache Redis in Cluster Mode.
    - B. Install Redis on an Amazon EC2 instance.
    - C. Implement Amazon ElastiCache Memcached.
    - D. Migrate the database to Amazon Redshift.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
26. How can thumbnail generation be added to the application, meeting user requirements while minimizing changes to existing code?
    - A. Change the existing Lambda function handling the uploads to create thumbnails at the time of upload. Have the function store both the image and thumbnail in Amazon S3.
    - B. Create a second Lambda function that handles thumbnail generation and storage. Change the existing Lambda function to invoke it asynchronously.
    - C. Create an S3 event notification with a Lambda function destination. Create a new Lambda function to generate and store thumbnails.
    - D. Create an S3 event notification to an SQS Queue. Create a scheduled Lambda function that processes the queue, and generates and stores thumbnails.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
27. A company has written a Java AWS Lambda function to be triggered whenever a user uploads an image to an Amazon S3 bucket. The function converts the original image to several different formats and then copies the resulting images to another Amazon S3 bucket. The Developers find that no images are being copied to the second Amazon S3 bucket. They have tested the code on an Amazon EC2 instance with 1GB of RAM, and it takes an average of 500 seconds to complete. What is the MOST likely cause of the problem?
    - A. The Lambda function has insufficient memory and needs to be increased to 1 GB to match the Amazon EC2 instance.
    - B. Files need to be copied to the same Amazon S3 bucket for processing, so the second bucket needs to be deleted.
    - C. Lambda functions have a maximum execution limit of 300 seconds, therefore the function is not completing.
    - D. There is a problem with the Java runtime for Lambda, and the function needs to be converted to node.js.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
28. A web application is using Amazon Kinesis Streams for clickstream data that may not be consumed for up to 12 hours. How can the Developer implement encryption at rest for data within the Kinesis Streams?
    - A. Enable SSL connections to Kinesis.
    - B. Use Amazon Kinesis Consumer Library.
    - C. Encrypt the data once it is at rest with a Lambda function.
    - D. Enable server-side encryption in Kinesis Streams.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
29. A company is using Amazon API Gateway to manage access to a set of microservices implemented as AWS Lambda functions. Following a bug report, the company makes a minor breaking change to one of the APIs. In order to avoid impacting existing clients when the new API is deployed, the company wants to allow clients six months to migrate from v1 to v2. Which approach should the Developer use to handle this change?
    - A. Update the underlying Lambda function and provide clients with the new Lambda invocation UR.
    - B. Use API Gateway to automatically propagate the change to clients, specifying 180 days in the phased deployment parameter.
    - C. Use API Gateway to deploy a new stage named v2 to the API and provide users with its UR.
    - D. Update the underlying Lambda function, create an Amazon CloudFront distribution with the updated Lambda function as its origin.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
30. A Developer is creating a mobile application with a limited budget. The solution requires a scalable service that will enable customers to sign up and authenticate into the mobile application while using the organization’s current SAML 2.0 identity provider. Which AWS service should be used to meet these requirements?
    - A. AWS Lambda.
    - B. Amazon Cognito.
    - C. AWS IAM.
    - D. Amazon EC2.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
31. An application running on EC2 instances is storing data in an S3 bucket. Security policy mandates that all data must be encrypted in transit. How can the Developer ensure that all traffic to the S3 bucket is encrypted?
    - A. Install certificates on the EC2 instances.
    - B. Create a bucket policy that allows traffic where SecureTransport is true.
    - C. Create an HTTPS redirect on the EC2 instances.
    - D. Create a bucket policy that denies traffic where SecureTransport is false.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
32. A company wants to migrate its web application to AWS and leverage Auto Scaling to handle pear workloads. The Solutions Architect determined that the best metric for an Auto Scaling event is the number of concurrent users. Based on this information, what should the Developer use to autoscale based on concurrent users?
    - A. An Amazon SNS topic to be triggered when a concurrent user threshold is met.
    - B. An Amazon Cloudwatch Networkin metric.
    - C. Amazon CloudFront to leverage AWS Edge Locations.
    - D. A Custom Amazon CloudWatch metric for concurrent users.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
33. A Developer has written a serverless application using multiple AWS services. The business logic is written as a Lambda function which has dependencies on third-party libraries. The Lambda function endpoints will be exposed using Amazon API Gateway. The Lambda function will write the information to Amazon DynamoD    - B. The Developer is ready to deploy the application but must have the ability to rollback. How can this deployment be automated, based on these requirements?
    - A. Deploy using Amazon Lambda API operations to create the Lambda function by providing a deployment package.
    - B. Use an AWS CloudFormation template and use CloudFormation syntax to define the Lambda function resource in the template.
    - C. Use syntax conforming to the Serverless Application Model in the AWS CloudFormation template to define the Lambda function resource.
    - D. Create a bash script which uses AWS CLI to package and deploy the application.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
34. A game stores user game data in an Amazon DynamoDB table. Individual users should not have access to other users’ game data. How can this be accomplished?
    - A. Encrypt the game data with individual user keys.
    - B. Restrict access to specific items based on certain primary key values.
    - C. Stage data in SQS queues to inject metadata before accessing DynamoD.
    - D. Read records from DynamoDB and discard irrelevant data client-side.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
35. A company developed a set of APIs that are being served through the Amazon API Gateway. The API calls need to be authenticated based on OpenID identity providers such as Amazon or Facebook. The APIs should allow access based on a custom authorization model.A company developed a set of APIs that are being served through the Amazon API Gateway. The API calls need to be authenticated based on OpenID identity providers such as Amazon or Facebook. The APIs should allow access based on a custom authorization model. Which is the simplest and MOST secure design to use to build an authentication and authorization model for the APIs?
    - A. Use Amazon Cognito user pools and a custom authorizer to authenticate and authorize users based.on JSON Web Tokens.
    - B. Build a OpenID token broker with Amazon and Facebook. Users will authenticate with these identify providers and pass the JSON Web Token to the API to authenticate each API call.
    - C. Store user credentials in Amazon DynamoDB and have the application retrieve temporary credentials from AWS ST.
    - D. Make API calls by passing user credentials to the APIs for authentication and authorization.
    - E. Use Amazon RDS to store user credentials and pass them to the APIs for authentications and authorization.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
36. A Developer is creating a web application that requires authentication, but also needs to support guest access to provide users limited access without having to authenticate. What service can provide support for the application to allow guest access?
    - A. IAM temporary credentials using AWS ST.
    - B. Amazon Directory Service.
    - C. Amazon Cognito with unauthenticated access enabled.
    - D. IAM with SAML integration.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
37. Given the source code for an AWS Lambda function in the local store.py containing a handler function called get_store and the following AWS CloudFormation template: What should be done to prepare the template so that it can be deployed using the AWS CLI command aws cloudformation deploy?
    - A. Use aws cloudformation compile to base64 encode and embed the source file into a modified CloudFormation template.
    - B. Use aws cloudformation package to upload the source code to an Amazon S3 bucket and produce a modified CloudFormation template.
    - C. Use aws lambda zip to package the source file together with the CloudFormation template and deploy the resulting zip archive.
    - D. Use aws serverless create-package to embed the source file directly into the existing CloudFormation template.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
38. A Developer has created a large Lambda function, and deployment is failing with the following error:ClientError: An error occurred (InvalidParameterValueException) when callingthe CreateFunction operation: Unzipped size must be smaller than XXXXXXXXX bytes’, where XXXXXXXXX is the current Lambda limit. What can the Developer do to fix this problem?
    - A. Submit a limit increase request to AWS Support to increase the function to the size needed.
    - B. Use a compression algorithm that is more efficient than ZI.
    - C. Break the function into multiple smaller Lambda functions.
    - D. ZIP the ZIP file twice to compress it further.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
39. A serverless application uses an API Gateway and AWS Lambda. Where should the Lambda function store its session information across function calls?
    - A. In an Amazon DynamoDB table.
    - B. In an Amazon SQS queue.
    - C. In the local filesystem.
    - D. In an SQLite session table using CDSQLITE_ENABLE_SESSION.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
40. An application reads data from an Amazon DynamoDB table. Several times a day, for a period of 15 seconds, the application receives multiple ProvisionedThroughputExceeded errors. How should this exception be handled?
    - A. Create a new global secondary index for the table to help with the additional requests.
    - B. Retry the failed read requests with exponential backoff.
    - C. Immediately retry the failed read requests.
    - D. Use the DynamoDB ‘UpdateItem’ API to increase the provisioned throughput capacity of the table.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
41. A Developer is writing a Linux-based application to run on AWS Elastic Beanstalk. Application requirements state that the application must maintain full capacity during updates while minimizing cost. Which type of Elastic Beanstalk deployment policy should the Developer specify for the environment?
    - A. Immutable.
    - B. Rolling.
    - C. All at Once.
    - D. Rolling with additional batch.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
42. When writing a Lambda function, what is the benefit of instantiating AWS clients outside the scope of the handler?
    - A. Legibility and stylistic convention.
    - B. Taking advantage of connection re-use.
    - C. Better error handling.
    - D. Creating a new instance per invocation.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
43. A current architecture uses many Lambda functions invoking one another as large state machine. The coordination of this state machine is legacy custom code that breaks easily. Which AWS Service can help refactor and manage the state machine?
    - A. AWS Data Pipeline.
    - B. AWS SNS with AWS SQS.
    - C. Amazon Elastic MapReduce.
    - D. AWS Step Functions.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
44. A company is developing a new online game that will run on top of Amazon ECS. Four distinct Amazon ECS services will be part of the architecture, each requiring specific permissions to various AWS services. The company wants to optimize the use of the underlying Amazon EC2 instances by bin packing the containers based on memory reservation. Which configuration would allow the Development team to meet these requirements MOST securely?
    - A. Create a new Identity and Access Management (IAM) instance profile containing the required permissions for the various ECS services, then associate that instance role with the underlying EC2 instances.
    - B. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS service to reference the associated IAM role.
    - C. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then, create an IAM group and configure the ECS cluster to reference that group.
    - D. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS task definition to referenсe the associated IAM role.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
45. A Developer must re-implement the business logic for an order fulfilment system. The business logic has to make requests to multiple vendors to decide where to purchase an item. The whole process can take up to a week to complete. What is the MOST efficient and SIMPLEST way to implement a system that meets these requirements?
    - A. Use AWS Step Functions to execute parallel Lambda functions, and join the results.
    - B. Create an AWS SQS for each vendor, poll the queue from a worker instance, and joint the results.
    - C. Use AWS Lambda to asynchronously call a Lambda function for each vendor, and join the results.
    - D. Use Amazon CloudWatch Events to orchestrate the Lambda functions.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
46. What best practice should first be applied to address this issue?
    - A. Contact AWS Support for a limit increase.
    - B. Use the AWS CLI to get the metrics.
    - C. Analyze the applications and remove the API call.
    - D. Retry the call with exponential backoff.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
47. A Developer is receiving HTTP 400: ThrottlingException errors intermittently when calling the Amazon CloudWatch API. When a call fails, no data is retrieved. Which techniques will work? (Choose two.)
    - A. Define a Swagger file. Use AWS Elastic Beanstalk to deploy the Swagger file.
    - B. Define a Swagger file. Use AWS CodeDeploy to deploy the Swagger file.
    - C. Deploy a SAM template with an inline Swagger definition.
    - D. Define a Swagger file. Deploy a SAM template that references the Swagger file.
    - E. Define an inline Swagger definition in a Lambda function. Invoke the Lambda function.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  
48. An application is real-time processing millions of events that are received through an API. What service could be used to allow multiple consumers to process the data concurrently and MOST cost-effectively?
    - A. Amazon SNS with fanout to an SQS queue for each application.
    - B. Amazon SNS with fanout to an SQS FIFO (first-in, firtst-out) queue for each application.
    - C. Amazon Kinesis Firehouse.
    - D. Amazon Kinesis Streams.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
49. An application will ingest data at a very high throughput from many sources and must store the data in an Amazon S3 bucket. Which service would BEST accomplish this task?
    - A. Amazon Kinesis Firehose.
    - B. Amazon S3 Acceleration Transfer.
    - C. Amazon SQS.
    - D. Amazon SNS.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
50. A Developer is creating a Lambda function and will be using external libraries that are not included in the standard Lambda libraries. What action would minimize the Lambda compute time consumed?
    - A. Install the dependencies and external libraries at the beginning of the Lambda function.
    - B. Create a Lambda deployment package that includes the external libraries.
    - C. Copy the external libraries to Amazon S3, and reference the external libraries to the S3 location.
    - D. Install the external libraries in Lambda to be available to all Lambda functions.
    
    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)