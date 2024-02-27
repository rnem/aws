# Practice Exam 6

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A company has a legacy application that was migrated to a fleet of Amazon EC2 instances. The application stores data in a MySQL database that is currently installed on a single EC2 instance. The company has decided to migrate the database from the EC2 instance to MySQL on Amazon RDS. What should the Developer do to update the application to support data storage in Amazon RDS?
    - A. Update the database connection parameters in the application to point to the new RDS instance.
    - B. Add a script to the EC2 instance that implements an AWS SDK for requesting database credentials.
    - C. Create a new EC2 instance with an IAM role that allows access to the new RDS database.
    - D. Create an AWS Lambda function that will route traffic, from the EC2 instance to the RDS database.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
2. A Developer has an e-commerce API hosted on Amazon ECS. Variable and spiking demand on the application is causing order processing to take too long. The application processes Amazon SQS queues. The ApproximateNumberOfMessagesVisible metric spikes at very high values throughout the day, which cause Amazon CloudWatch alarm breaches. Other ECS metrics for the API containers are well within limits. What can the Developer implement to improve performance while keeping costs low?
    - A. Target tracking scaling policy.
    - B. Docker Swarm.
    - C. Service scheduler.
    - D. Step scaling policy.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
3. A Developer wants to build an application that will allow new users to register and create new user accounts. The application must also allow users with social media accounts to log in using their social media credentials. Which AWS service or feature can be used to meet these requirements?
    - A. AWS IAM.
    - B. Amazon Cognito identity pools.
    - C. Amazon Cognito user pools.
    - D. AWS Directory Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
4. A company wants to implement authentication for its new REST service using Amazon API Gateway. To authenticate the calls, each request must include HTTP headers with a client ID and user I    - D. These credentials must be compared to authentication data in an Amazon DynamoDB table. What MUST the company do to implement this authentication in API Gateway?
    - A. Implement an AWS Lambda authorizer that references the DynamoDB authentication table.
    - B. Create a model that requires the credentials, then grant API Gateway access to the authentication table.
    - C. Modify the integration requests to require the credentials, then grant API Gateway access to the authentication table.
    - D. Implement an Amazon Cognito authorizer that references the DynamoDB authentication table.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
5. A Developer is trying to make API calls using SDK. The IAM user credentials used by the application require multi-factor authentication for all API calls. Which method the Developer use to access the multi-factor authentication protected API?
    - A. GetFederationToken.
    - B. GetCallerIdentity.
    - C. GetSessionToken.
    - D. DecodeAutherizationMessage.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
6. An application is running on a cluster of Amazon EC2 instances. While trying to read objects stored within a single Amazon S3 bucket that are encrypted with server-side encryption with AWS KMS managed keys (SSE-KMS), the application receives the following error: Which combination of steps should be taken to prevent this failure? (Choose two.)
    - A. Contact AWS Support to request an AWS KMS rate limit increase.
    - B. Perform error retries with exponential backoff in the application code.
    - C. Contact AWS Support to request a S3 rate limit increase.
    - D. Import a customer master key (CMK) with a larger key size.
    - E. Use more than one customer master key (CMK) to encrypt S3 data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C, D</p>
    </details>
  
7. When developing an AWS Lambda function that processes Amazon Kinesis Data Streams, Administrators within the company must receive a notice that includes the processed data. How should the Developer write the function to send processed data to the Administrators?
    - A. Separate the Lambda handler from the core logic.
    - B. Use Amazon CloudWatch Events to send the processed data.
    - C. Publish the processed data to an Amazon SNS topic.
    - D. Push the processed data to Amazon SQS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
8. A Developer is storing sensitive documents in Amazon S3 that will require encryption at rest. The encryption keys must be rotated annually, at least. What is the easiest way to achieve this?
    - A. Encrypt the data before sending it to Amazon S3.
    - B. Import a custom key into AWS KMS with annual rotation enabled.
    - C. Use AWS KMS with automatic key rotation.
    - D. Export a key from AWS KMS to encrypt the data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
9. A company is creating a REST service using an Amazon API Gateway with AWS Lambda integration. The service must run different versions for testing purposes. What would be the BEST way to accomplish this?
    - A. Use an x-Version header to denote which version is being called and pass that header to the Lambda function(s).
    - B. Create an API Gateway Lambda authorizer to route API clients to the correct API version.
    - C. Create an API Gateway resource policy to isolate versions and provide context to the Lambda function(s).
    - D. Deploy the API versions as unique stages with unique endpoints and use stage variables to provide further context.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
10. 
    <p>A Developer must encrypt a 100-GB object using AWS KMS. What is the BEST approach?</p>

    - A. Make an Encrypt API call to encrypt the plaintext data as ciphertext using a customer master key (CMK).
    - B. Make an Encrypt API call to encrypt the plaintext data as ciphertext using a customer master key (CMK) with imported key material.
    - C. Make an GenerateDataKey API call that returns a plaintext key and an encrypted copy of a data key. Use a plaintext key to encrypt the data.
    - D. Make an GenerateDataKeyWithoutPlaintext API call that returns an encrypted copy of a data key. Use an encrypted key to encrypt the data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
11. A Development team would like to migrate their existing application code from a GitHub repository to AWS CodeCommit. What needs to be created before they can migrate a cloned repository to CodeCommit over HTTPS?
    - A. A GitHub secure authentication token.
    - B. A public and private SSH key file.
    - C. A set of Git credentials generated from IAM.
    - D. An Amazon EC2 IAM role with CodeCommit permissions.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
12. A Developer is writing a REST service that will add items to a shopping list. The service is built on Amazon API Gateway with AWS Lambda integrations. The shopping list items are send as query string parameters in the method request. How should the Developer convert the query string parameters to arguments for the Lambda function?
    - A. Enable request validation.
    - B. Include the Amazon Resource Name (ARN) of the Lambda function.
    - C. Change the integration type.
    - D. Create a mapping template.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
13. What item operation allows the retrieval of multiple items from a DynamoDB table in a single API call?
    - A. Getltem.
    - B. BatchGetltem.
    - C. GetMultipleltems.
    - D. GetltemRange.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
14. After launching an instance that you intend to serve as a NAT (Network Address Translation) device in a public subnet you modify your route tables to have the NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the Internet from an instance in the private subnet, you are not successful. NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the Internet from an instance in the private subnet, you are not successful. Which of the following steps could resolve the issue?
    - A. Attaching a second Elastic Network interface (ENI) to the NAT instance, and placing it in the private subnet.
    - B. Attaching a second Elastic Network Interface (ENI) to the instance in the private subnet, and placing it in the public subnet.
    - C. Disabling the Source/Destination Check attribute on the NAT instance.
    - D. Attaching an Elastic IP address to the instance in the private subnet.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
15. You attempt to store an object in the US-STANDARD region in Amazon S3, and receive a confirmation that it has been successfully stored. You then immediately make another API call and attempt to read this object. S3 tells you that the object does not exist. What could explain this behavior?
    - A. US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket.
    - B. Objects in Amazon S3 do not become visible until they are replicated to a second region.
    - C. US-STANDARD imposes a 1 second delay before new objects are readable.
    - D. ou exceeded the bucket object limit, and once this limit is raised the object will be visible.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
16. What is the maximum number of S3 Buckets available per AWS account?
    - A. 100 per region.
    - B. there is no limit.
    - C. 100 per account.
    - D. 500 per account.
    - E. 100 per IAM user.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
17. Which of the following items are required to allow an application deployed on an EC2 instance to write data to a DynamoDB table? Assume that no security Keys are allowed to be stored on the EC2 instance. (Choose two.)
    - A. Create an IAM User that allows write access to the DynamoDB table.
    - B. Add an IAM Role to a running EC2 instance.
    - C. Add an IAM User to a running EC2 Instance.
    - D. Launch an EC2 Instance with the IAM Role included in the launch configuration.
    - E. Create an IAM Role that allows write access to the DynamoDB table.
F. Launch an EC2 Instance with the IAM User included in the launch configuration.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D, E</p>
    </details>
  
18. Which of the following are correct statements with policy evaluation logic in AWS Identity and Access Management? (Choose two.)
    - A. By default, all requests are denied.
    - B. An explicit allow overrides an explicit deny.
    - C. An explicit allow overrides default deny.
    - D. An explicit deny does not override an explicit allow.
    - E. By default, all request are allowed.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  
19. You have an environment that consists of a public subnet using Amazon VPC and 3 instances that are running in this subnet. These three instances can successfully communicate with other hosts on the Internet. You launch a fourth instance in the same subnet, using the same AMI and security group configuration you used for the others, but find that this instance cannot be accessed from the Internet. What should you do to enable internet access?
    - A. Deploy a NAT instance into the public subnet.
    - B. Modify the routing table for the public subnet.
    - C. Configure a publically routable IP Address In the host OS of the fourth instance.
    - D. Assign an Elastic IP address to the fourth instance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
20. If a message is retrieved from a queue in Amazon SQS, how long is the message inaccessible to other users by default?
    - A. 0 seconds.
    - B. 1 hour.
    - C. 1 day.
    - D. forever.
    - E. 30 seconds.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: E</p>
    </details>
  
21. What is the format of structured notification messages sent by Amazon SNS?
    - A. An XML object containing Messageld, UnsubscribeURL, Subject, Message and other values.
    - B. An JSON object containing Messageld, DuplicateFlag, Message and other values.
    - C. An XML object containing Messageld, DuplicateFlag, Message and other values.
    - D. An JSON object containing Messageld, unsubscribeURL, Subject, Message and other values.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
22. Which of the following services are key/value stores? (Choose three.)
    - A. Amazon ElastiCache.
    - B. Simple Notification Service.
    - C. DynamoDB.
    - D. Simple Workflow Service.
    - E. Simple Storage Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, C, D</p>
    </details>
  
23. When uploading an object, what request header can be explicitly specified in a request to Amazon S3 to encrypt object data when saved on the server side?
    - A. x-amz-storage-class.
    - B. Content-MD5.
    - C. x-amz-security-token.
    - D. x-amz-server-side-encryption.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
24. Company D is running their corporate website on Amazon S3 accessed from http//www.companyd.com. Their marketing team has published new web fonts to a separate S3 bucket accessed by the S3 endpoint <a href="https://s3-us-west-l">https://s3-us-west-l</a> .amazonaws.com/cdfonts. While testing the new web fonts, Company D recognized the web fonts are being blocked by the browser What should Company D do to prevent the web fonts from being blocked by the browser?
    - A. Enable versioning on the cdfonts bucket for each web font.
    - B. Create a policy on the cdfonts bucket to enable access to everyone.
    - C. Add the Content-MD5 header to the request for webfonts in the cdfonts bucket from the website.
    - D. Configure the cdfonts bucket to allow cross-origin requests by creating a CORS configuration.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
25. Which of the following platforms are supported by Elastic Beanstalk? (Choose two.)
    - A. Apache Tomcat
    - B. .NET
    - C. IBM Websphere
    - D. Oracle JBoss
    - E. Jetty

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, B</p>
    </details>
  
26. Which code snippet below returns the URL of a load balanced web site created in CloudFormation with an AWS::ElasticLoadBalancing::LoadBalancer resource name “ElasticLoad Balancer”?
    - A. “Fn::Join”:[ “”.[“http://”, {Fn::GetAtr”: [ “ElasticLoadBalancer”,”DNSName”]}]].
    - B. “Fn::Join”:[ “”.[“http://”, {Fn::GetAtr”: [ “ElasticLoadBalancer”,”Url”]}]].
    - C. “Fn::Join”:[ “”.[“http://”, {“Ref : “ElasticLoadBalancerUrl”}]].
    - D.  “Fn::Join”:[ “”.[“http://”, {“Ref : “ElasticLoadBalancer”,”DNSName”}]].

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
27. Which features can be used to restrict access to data in S3? (Choose two.)
    - A. Use S3 Virtual Hosting.
    - B. Set an S3 Bucket policy.
    - C. Enable IAM Identity Federation.
    - D. Set an S3 ACL on the bucket or the object.
    - E. Create a CloudFront distribution for the bucket.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
28. What happens, by default, when one of the resources in a CloudFormation stack cannot be created?
    - A. Previously-created resources are kept but the stack creation terminates.
    - B. Previously-created resources are deleted and the stack creation terminates.
    - C. The stack creation continues, and the final results indicate which steps failed.
    - D. CloudFormation templates are parsed in advance so stack creation is guaranteed to succeed.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
29. Which of the following are valid arguments for an SNS Publish request? (Choose three.)
    - A. TopicAm.
    - B. Subject.
    - C. Destination.
    - D. Format.
    - E. Message.
F. Language.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, C, E</p>
    </details>
  
30. How can software determine the public and private IP addresses of the Amazon EC2 instance that it is running on?
    - A. Query the appropriate Amazon CloudWatch metric.
    - B. Use ipconfig or ifconfig command.
    - C. Query the local instance userdata.
    - D. Query the local instance metadata.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
31. EC2 instances are launched from Amazon Machine images (AMIs). A given public AMI can:
    - A. Be used to launch EC2 Instances in any AWS region.
    - B. Only be used to launch EC2 instances in the same country as the AMI is stored.
    - C. Only be used to launch EC2 instances in the same AWS region as the AMI is stored.
    - D. Only be used to launch EC2 instances in the same AWS availability zone as the AMI is stored

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
32. Which EC2 API call would you use to retrieve a list of Amazon Machine Images (AMIs)?
    - A. Descnbelnstances.
    - B. DescribeAMIs.
    - C. Describelmages.
    - D. GetAMIs.
    - E. You cannot retrieve a list of AMIs as there are over 10,000 AMIs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
33. In AWS, which security aspects are the customer’s responsibility? (Choose four.)
    - A. Life-cycle management of IAM credentials.
    - B. Decommissioning storage devices.
    - C. Security Group and ACL (Access Control List) settings.
    - D. Encryption of EBS (Elastic Block Storage) volumes.
    - E. Controlling physical access to compute resources.
F. Patch management on the EC2 instance’s operating system.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, B, C, F</p>
    </details>
  
34. When using a large Scan operation in DynamoDB, what technique can be used to minimize the impact of a scan on a table’s provisioned throughput?
    - A. Set a smaller page size for the scan.
    - B. Use parallel scans.
    - C. Define a range index on the table.
    - D. Prewarm the table by updating all items.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
35. How can you secure data at rest on an EBS volume?
    - A. Attach the volume to an instance using EC2’s SSL interface.
    - B. Write the data randomly instead of sequentially.
    - C. Use an encrypted file system on top of the BBS volume.
    - D. Encrypt the volume using the S3 server-side encryption service.
    - E. Encrypt the volume using the S3 server-side encryption service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
36. Which of the following is chosen as the default region when making an API call with an AWS SDK?
    - A. ap-northeast-1.
    - B. us-west-2.
    - C. us-east-1.
    - D. eu-west-1.
    - E. us-central-1.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  
37. Which of the following statements about SWF are true? (Choose three.)
    - A. SWF tasks are assigned once and never duplicated.
    - B. SWF requires an S3 bucket for workflow storage.
    - C. SWF workflow executions can last up to a year.
    - D. SWF triggers SNS notifications on task assignment.
    - E. SWF uses deciders and workers to complete tasks.
F. SWF requires at least 1 EC2 instance per domain.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, C, E</p>
    </details>
  
38. A startup s photo-sharing site is deployed in a VP    - C. An ELB distributes web traffic across two subnets. ELB session stickiness is configured to use the AWSgenerated session cookie, with a session TTL of 5 minutes. The webserver Auto Scaling Group is configured as: min-size=4, max-size=4, The startups preparing for a public launch, by running load-testing software installed on a single EC2 instance running in us-west-2 After 60 minutes of load-testing, the webserver logs show: Which recommendations can help ensure load-testing HTTP requests are evenly distributed across the four webservers? (Choose two.)
    - A. Launch and run the load-tester EC2 instance from us-east-1 instead.
    - B. Re-configure the load-testing software to re-resolve DNS for each web request.
    - C. Use a 3rd-party load-testing service which offers globally-distributed test clients.
    - D. Configure ELB and Auto Scaling to distribute across us-west-2a and us-west-2c.
    - E. Configure ELB session stickiness to use the app-specific session cookie.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B, D</p>
    </details>
  
39. Which of the following are valid SNS delivery transports? (Choose two.)
    - A. HTTP.
    - B. UDP.
    - C. SMS.
    - D. DynamoDB.
    - E. Named Pipes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, C</p>
    </details>
  
40. Company C has recently launched an online commerce site for bicycles on AWS. They have a “Product” DynamoDB table that stores details for each bicycle, such as, manufacturer, color, price, quantity and size to display in the online store. Due to customer demand, they want to include an image for each bicycle along with the existing details. Which approach below provides the least impact to provisioned throughput on the “Product” table?
    - A. Serialize the image and store it in multiple DynamoDB tables.
    - B. Create an “Images” DynamoDB table to store the Image with a foreign key constraint to the “Product” table.
    - C. Add an image data type to the “Product” table to store the images in binary format.
    - D. Store the images in Amazon S3 and add an S3 URL pointer to the “Product” table item for each image.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: D</p>
    </details>
  
41. Which DynamoDB limits can be raised by contacting AWS support? (Choose two.)
    - A. The number of hash keys per account.
    - B. The maximum storage used per account.
    - C. The number of tables per account.
    - D. The number of local secondary indexes per account.
    - E. The number of provisioned throughput units per account.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  
42. When a Simple Queue Service message triggers a task that takes 5 minutes to complete, which process below will result in successful processing of the message and remove it from the queue while minimizing the chances of duplicate processing?
    - A. Retrieve the message with an increased visibility timeout, process the message, delete the message from the queue.
    - B. Retrieve the message with an increased visibility timeout, delete the message from the queue, process the message.
    - C. Retrieve the message with increased DelaySeconds, process the message, delete the message from the queue.
    - D. Retrieve the message with increased DelaySeconds, delete the message from the queue, process the message.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
43. Company A has an S3 bucket containing premier content that they intend to make available to only paid subscribers of their website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors. How can Company A provide only paid subscribers the ability to download a premier content file in the S3 bucket?
    - A. Apply a bucket policy that grants anonymous users to download the content from the S3 bucket.
    - B. Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download.
    - C. Add a bucket policy that requires Multi-Factor Authentication for requests to access the S3 bucket objects.
    - D. Enable server side encryption on the S3 bucket for data protection against the non-paying website visitors.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
44. Which of the following is an example of a good DynamoDB hash key schema for provisioned throughput efficiency?
    - A. User ID, where the application has many different users.
    - B. Status Code where most status codes are the same.
    - C. Device ID, where one is by far more popular than all the others.
    - D. Game Type, where there are three possible game types.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A</p>
    </details>
  
45. An application stores payroll information nightly in DynamoDB for a large number of employees across hundreds of offices. Item attributes consist of individual name, office identifier, and cumulative daily hours. Managers run reports for ranges of names working in their office. One query is. “Return all Items in this office for names starting with A through E”. Which table configuration will result in the lowest impact on provisioned throughput for this query?
    - A. Configure the table to have a hash index on the name attribute, and a rangeindex ontheoffice identifier.
    - B. Configure the table to have a range index on the name attribute, and a hashindex ontheofficeidentifier.
    - C. Configure a hash index on the name attribute and no range index.
    - D. Configure a hash index on the office Identifier attribute and no range index.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
46. What is one key difference between an Amazon EBS-backed and an instance-store backed instance?
    - A. Virtual Private Cloud requires EBS backed instances.
    - B. Amazon EBS-backed instances can be stopped and restarted.
    - C. Auto scaling requires using Amazon EBS-backed instances.
    - D. Instance-store backed instances can be stopped and restarted.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
47. Which of the following services are included at no additional cost with the use of the AWS platform?
    - A. Simple Storage Service.
    - B. Elastic Compute Cloud.
    - C. Auto Scaling.
    - D. Elastic Load Balancing.
    - E. CloudFormation.
F. Simple Workflow Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C, E</p>
    </details>
  
48. Your application is trying to upload a 6 GB file to Simple Storage Service and receive a “Your proposed upload exceeds the maximum allowed object size- error message. What is a possible solution for this?
    - A. None, Simple Storage Service objects are limited to 5 GB.
    - B. Use the multi-part upload API for this object.
    - C. Use the large object upload API for this object.
    - D. Contact support to increase your object size limit.
    - E. Upload to a different region.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: B</p>
    </details>
  
49. What AWS products and features can be deployed by Elastic Beanstalk? (Choose three.)
    - A. Auto scaling groups.
    - B. Route 53 hosted zones.
    - C. Elastic Load Balancers.
    - D. RDS Instances.
    - E. Elastic IP addresses.
F. SQS Queues.

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: A, C, D</p>
    </details>
  
50. Games-R-Us is launching a new game app for mobile devices. Users will log into the game using their existing Facebook account and the game will record player data and scoring information directly to a DynamoDB table. What is the most secure approach for signing requests to the DynamoDB API?
    - A. Create an IAM user with access credentials that are distributed with the mobile app to sign the requests.
    - B. Distribute the AWS root account access credentials with the mobile app to sign the requests.
    - C. Request temporary security credentials using web identity federation to sign the requests.
    - D. Establish cross account access between the mobile app and the DynamoDB table to sign the requests

    <details markdown=1><summary markdown='span'>Answer</summary>
      <p>Correct answer: C</p>
    </details>
  

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)