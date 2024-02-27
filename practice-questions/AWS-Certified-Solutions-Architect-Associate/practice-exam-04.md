# Practice Exam 4

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. What is the maximum write throughput I can provision for a single Dynamic DB table?
    - A.  1,000 write capacity units.
    - B.  100,000 write capacity units.
    - C.  Dynamic DB is designed to scale without limits, but if you go beyond 10,000 you have to contact AWS first.
    - D.  10,000 write capacity units.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
2. Do Amazon EBS volumes persist independently from the running life of an Amazon EC2 instance?
    - A.  Yes, they do but only if they are detached from the instance.
    - B.  No, you cannot attach EBS volumes to an instance.
    - C.  No, they are dependent.
    - D.  Yes, they do.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
3. What is a Security Group?
    - A.  None of these.
    - B.  A list of users that can access Amazon EC2 instances.
    - C.  An Access Control List (ACL) for AWS resources.
    - D.  A firewall for inbound traffic, built-in around every Amazon EC2 instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
4. You need to set up a high level of security for an Amazon Relational Database Service (RDS) you have just built in order to protect the confidential information stored in it. What are all the possible security groups that RDS uses?
    - A.  DB security groups, VPC security groups, and EC2 security groups.
    - B.  DB security groups only.
    - C.  EC2 security groups only.
    - D.  VPC security groups, and EC2 security groups.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
5. In the ’Detailed’ monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send […] minute metrics to Amazon CloudWatch.
    - A.  3.
    - B.  1.
    - C.  5.
    - D.  2.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
6. You are looking at ways to improve some existing infrastructure as it seems a lot of engineering resources are being taken up with basic management and monitoring tasks and the costs seem to be excessive. You are thinking of deploying Amazon ElasticCache to help. Which of the following statements is true in regards to ElasticCache?
    - A.  You can improve load and response times to user actions and queries however the cost associated with scaling web applications will be more.
    - B.  You can’t improve load and response times to user actions and queries but you can reduce the cost associated with scaling web applications.
    - C.  You can improve load and response times to user actions and queries however the cost associated with scaling web applications will remain the same.
    - D.  You can improve load and response times to user actions and queries and also reduce the cost associated with scaling web applications.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
7. A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. The divisions want to maintain administrative control of the discrete AWS resources theyconsume and keep those resources separate from the resources of other divisions. Which of the following options, when used together will support the autonomy/control of divisions while enabling corporate IT to maintain governance and cost oversight? (Choose 2 answers)
    - A.  Use AWS Consolidated Billing and disable AWS root account access for the child accounts.
    - B.  Enable IAM cross-account access for all corporate IT administrators in each child account.
    - C.  Create separate VPCs for each division within the corporate IT AWS account.
    - D.  Use AWS Consolidated Billing to link the divisions’ accounts to a parent corporate account.
    - E.  Write all child AWS CloudTrail and Amazon CloudWatch logs to each child account’s Amazon S3 ’Log’ bucket.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D, E</p>
    </details>
  
8. After creating a new IAM user which of the following must be done before they can successfully make API calls?
    - A.  Add a password to the user.
    - B.  Enable Multi-Factor Authentication for the user.
    - C.  Assign a Password Policy to the user.
    - D.  Create a set of Access Keys for the user.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
9. A friend wants you to set up a small BitTorrent storage area for him on Amazon S3. You tell him it is highly unlikely that AWS would allow such a thing in their infrastructure. However you decide to investigate. Which of the following statements best describes using BitTorrent with Amazon S3?
    - A.  Amazon S3 does not support the BitTorrent protocol because it is used for pirated software.
    - B.  You can use the BitTorrent protocol but only for objects that are less than 100 GB in size.
    - C.  You can use the BitTorrent protocol but you need to ask AWS for specific permissions first.
    - D.  You can use the BitTorrent protocol but only for objects that are less than 5 GB in size.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
10. IAM’s Policy Evaluation Logic always starts with a default […] for every request, except for those that use the AWS account’s root security credentials?
    - A.  Permit.
    - B.  Deny.
    - C.  Cancel.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
11. You have been given a scope to deploy some AWS infrastructure for a large organization. The requirements are that you will have a lot of EC2 instances but may need to add more when the average utilization of your Amazon EC2 fleet is high and conversely remove them when CPU utilization is low. Which AWS services would be best to use to accomplish this?
    - A.  Auto Scaling, Amazon CloudWatch and AWS Elastic Beanstalk.
    - B.  Auto Scaling, Amazon CloudWatch and Elastic Load Balancing.
    - C.  Amazon CloudFront, Amazon CloudWatch and Elastic Load Balancing.
    - D.  AWS Elastic Beanstalk, Amazon CloudWatch and Elastic Load Balancing.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
12. When does the billing of an Amazon EC2 system begin?
    - A.  It starts when the Status column for your distribution changes from Creating to Deployed.
    - B.  It starts as soon as you click the create instance option on the main EC2 console.
    - C.  It starts when your instance reaches 720 instance hours.
    - D.  It starts when Amazon EC2 initiates the boot sequence of an AMI instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
13. A user is storing a large number of objects on AWS S3. The user wants to implement the search functionality among the objects. How can the user achieve this?
    - A.  Use the indexing feature of S3.
    - B.  Tag the objects with the metadata to search on that.
    - C.  Use the query functionality of S3.
    - D.  Make your own DB system which stores the S3 metadata for the search functionality.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
14. A corporate web application is deployed within an Amazon Virtual Private Cloud (VPC) and is connected to the corporate data center via an IPsec VPN. The application must authenticate against the on-premises LDAP server. After authentication, each logged-in user can only access an Amazon Simple Storage Space (S3) keyspace specific to that user. Which two approaches can satisfy these objectives? (Choose 2 answers)
    - A.  Develop an identity broker that authenticates against IAM security Token service to assume a Lam role in order to get temporary AWS security credentials The application calls the identity broker toget AWS temporary security credentials with access to the appropriate S3 bucket.
    - B.  The application authenticates against LDAP and retrieves the name of an IAM role associated with the user. The application then ca lls the IAM Security Token Service to assume that IAM role The application can use the temporary credentials to access the appropriate S3 bucket.
    - C.  Develop an identity broker that authenticates against LDAP and then calls IAM Security To ken Service to get IAM federated user credentials The application calls the identity broker to get IAMfederated user credentials with access to the appropriate S3 bucket.
    - D.  The application authenticates against LDAP the application then calls the AWS identity and Access Management (IAM) Security service to log in to IAM using the LDAP credentials the application can use the IAM temporary credentials to access the appropriate S3 bucket.
    - E.  The application authenticates against IAM Security Token Service using the LDAP credentials the application uses those temporary AWS security credentials to access the appropriate S3 bucket.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, C</p>
    </details>
  
15. A group can contain many users. Can a user belong to multiple groups?
    - A.  Yes always.
    - B.  No.
    - C.  Yes but only if they are using two factor authentication.
    - D.  Yes but only in VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
16. Does Dynamic DB support in-place atomic updates?
    - A.  It is not defined.
    - B.  Yes.
    - C.  It does support in-place non-atomic updates.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
17. Can you move a Reserved Instance from one Availability Zone to another?
    - A.  Yes, but each Reserved Instance is associated with a specific Region that cannot be changed.
    - B.  Yes, only in US-West-2.
    - C.  Yes, only in US-East-1.
    - D.  No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
18. You want to establish a dedicated network connection from your premises to AWS in order to save money by transferring data directly to AWS rather than through your internet service provider. You are sure there must be some other benefits beyond cost savings. Which of the following statements would be the best choice to put your client’s mind at rest?
    - A.  Different instances running on the same physical machine are isolated from each other via a 256-bit Advanced Encryption Standard (AES-256).
    - B.  Different instances running on the same physical machine are isolated from each other via the Xen hypervisor and via a 256-bit Advanced Encryption Standard (AES-256).
    - C.  Different instances running on the same physical machine are isolated from each other via the Xen hypervisor.
    - D.  Different instances running on the same physical machine are isolated from each other via IAM permissions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
19. Can I detach the primary (ethO) network interface when the instance is running or stopped?
    - A.  Yes, You can.
    - B.  No. You cannot.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
20. You have launched an Amazon Elastic Compute Cloud (EC2) instance into a public subnet with a primary private I P address assigned, an internet gateway is attached to the VPC, and the public route table is configured to send all Internet-based traffic to the Internet gateway. The instance security group is set to allow all outbound traffic but cannot access the internet. Why is the Internet unreachable from this instance?
    - A.  The instance does not have a public IP address.
    - B.  The internet gateway security group must allow all outbound traffic.
    - C.  The instance security group must allow all inbound traffic.
    - D.  The instance ‘Source/Destination check’ property must be enabled.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
21. Which of the following statements best describes the differences between Elastic Beanstalk and CloudFormation?
    - A.  Elastic Beanstalk uses Elastic load balancing and CloudFormation doesn’t.
    - B.  CloudFormation is faster in deploying applications than Elastic Beanstalk.
    - C.  Elastic Beanstalk is faster in deploying applications than CloudFormation.
    - D.  CloudFormation is much more powerful than Elastic Beanstalk, because you can actually design and script custom resources.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
22. It is advised that you watch the Amazon CloudWatch […] metric (available via the AWS Management Console or Amazon Cloud Watch APIs) carefully and recreate the Read Replica should it fall behind due to replication errors.
    - A.  Write Lag.
    - B.  Read Replica.
    - C.  Replica Lag.
    - D.  Single Replica.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
23. Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Fi les submitted by your premium customers must be transformed with the highest priority. How should you implement such a system?
    - A.  Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level.
    - B.  Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances.
    - C.  Use two SQS queues, one for high priority messages, the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue.
    - D.  Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
24. True or False: When you view the block device mapping for your instance, you can see only the EBS volumes, not the instance store volumes.
    - A.  Depends on the instance type.
    - B.  False.
    - C.  Depends on whether you use API call.
    - D.  True.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
25. Does AWS CloudFormation support Amazon EC2 tagging?
    - A.  Yes, AWS CloudFormation supports Amazon EC2 tagging.
    - B.  No, CloudFormation doesn’t support any tagging.
    - C.  No, it doesn’t support Amazon EC2 tagging.
    - D.  It depends if the Amazon EC2 tagging has been defined in the template.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
26. If I modify a DB Instance or the DB parameter group associated with the instance, should I reboot the instance for the changes to take effect?
    - A.  Yes.
    - B.  No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
27. If you are using Amazon RDS Provisioned IOPS storage with MySQL and Oracle database engines, you can scale the throughput of your database Instance by specifying the IOPS rate from […].
    - A.  1,000 to 100,000.
    - B.  100 to 1,000.
    - C.  10,000 to 100,000.
    - D.  1,000 to 10,000.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
28. To specify a resource in a policy statement, in Amazon EC2, can you use its Amazon Resource Name (ARN)?
    - A.   Yes, you can.
    - B.   No, you can’t because EC2 is not related to AR
    - C.   No, you can’t because you can’t specify a particular Amazon EC2 resource in an IAM policy.
    - D.   Yes, you can but only for the resources that are not affected by the action.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
29. An enterprise wants to use a third-party SaaS application. The SaaS application needs to have access to issue several API commands to discover Amazon EC2 resources running within the enterprise’s account The enterprise has internal security policies that require any outside access to their environment must conform to the principles of least privilege and there must be controls in place to ensure that the credentials used by the 5aa5 vendor cannot be used by any other third party. Which of the following would meet all of these conditions?
    - A.  From the AWS Management Console, navigate to the Security Credentials page and retrieve the access and secret key for your account.
    - B.  Create an IAM user within the enterprise account assign a user policy to the IAM user that allows only the actions required by the SaaS application create a new access and secret key for the user and provide these credentials to the 5aa5 provider.
    - C.  Create an IAM role for cross-account access allows the SaaS provider’s account to assume the role and assign it a policy that allows only the actions required by the SaaS application.
    - D.  Create an IAM role for EC2 instances, assign it a policy that allows only the actions required tor the Saas application to work, provide the role ARM to the SaaS provider to use when launching their application instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
30. By default what are ENIs that are automatically created and attached to instances using the EC2 console set to do when the attached instance terminates?
    - A.  Remain as is.
    - B.  Terminate.
    - C.  Hibernate.
    - D.  Pause.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
31. In EC2, what happens to the data in an instance store if an instance reboots (either intentionally or unintentionally)?
    - A.  Data is deleted from the instance store for security reasons.
    - B.  Data persists in the instance store.
    - C.  Data is partially present in the instance store.
    - D.  Data in the instance store will be lost.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
32. You are designing a social media site and are considering how to mitigate distributed denial-of service (DDoS) attacks. Which of the below are viable mitigation techniques? (Choose 3 answers)
    - A.  Add multiple elastic network interfaces (ENis) to each EC2 instance to increase the network bandwidth.
    - B.  Use dedicated instances to ensure that each instance has the maximum performance possible.
    - C.  Use an Amazon CloudFront distribution for both static and dynamic content.
    - D.  Use an Elastic Load Balancer with auto scaling groups at the web. App and Amazon Relational Database Service (RDS) tiers.
    - E.  Add alert Amazon CloudWatch to look for high Network in and CPU utilization.
    33. F. Create processes and capabilities to quickly add and remove rules to the instance OS firewall.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, D, E</p>
    </details>
  
34. In Amazon CloudFront, if you use Amazon EC2 instances and other custom origins with CloudFront, it is recommended to […].
    - A.  not use Elastic Load Balancing.
    - B.  restrict Internet communication to private instances while allowing outgoing traffic.
    - C.  enable access key rotation for CloudWatch metrics.
    - D.  specify the URL of the load balancer for the domain name of your origin server.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
35. Which of the following statements is true regarding attaching network interfaces to your instances in your VPC?
    - A.  You can attach 5 ENIs per instance type.
    - B.  You can attach as many ENIs as you want.
    - C.  The number of ENIs you can attach varies by instance type.
    - D.  You can attach 100 ENIs total regardless of instance type.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
36. What is the reason for this?
    - A.  For security reasons.
    - B.  Hardware restrictions.
    - C.  Public (IPV4) internet addresses are a scarce resource.
    - D.  There are only 5 network interfaces per instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
37. Can a ‘user’ be associated with multiple AWS accounts?
    - A.  Yes.
    - B.  No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
38. You have an application running on an Amazon Elastic Compute Cloud instance, that uploads 5 GB video objects to Amazon Simple Storage Service (S3). Video uploads are taking longer than expected, resulting in poor application performance. Which method will help improve performance of your application?
    - A.  Enable enhanced networking.
    - B.  Use Amazon S3 multipart upload.
    - C.  Leveraging Amazon CloudFront, use the HTTP POST method to reduce latency.
    - D.  Use Amazon Elastic Block Store Provisioned IOPs and use an Amazon EBS-optimized instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
39. You have been given a scope to set up an AWS Media Sharing Framework for a new start up photo sharing company similar to flickr. The first thing that comes to mind about this is that it will obviously need a huge amount of persistent data storage for this framework. Which of the following storage options would be appropriate for persistent storage?
    - A.  Amazon Glacier or Amazon S3.
    - B.  Amazon Glacier or AWS Import/Export.
    - C.  AWS Import/Export or Amazon CloudFront.
    - D.  Amazon EBS volumes or Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
40. You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls, which are usually a few calls/second. Put once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project. What database implementation would better fit this scenario, keeping costs as low as possible?
    - A.  Use RDS Multi-AZ with two tables, one for ’Active calls’ and one for ‘Terminated calls’. in this way the ’Active calls’ table is always small and effective to access.
    - B.  Use DynamoDB with a ‘Calls’ table and a Global Secondary Index on a ‘lsActive’ attribute that is present for active calls only in this way the Global Secondary index is sparse and more effective.
    - C.  Use DynamoDB with a ‘Calls’ table and a Global secondary index on a ‘State’ attribute that can equal to ‘active’ or ‘terminated’ in this way the Global Secondary index can be used for all Items in the table.
    - D.  Use RDS Multi-AZ with a ‘CALLS’ table and an Indexed ‘STATE* field that can be equal to ‘ACTIVE’ or ’TERMINATED’ in this way the SOL query Is optimized by the use of the Index.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
41. If you have chosen Multi-AZ deployment, in the event of a planned or unplanned outage of your primary DB Instance, Amazon RDS automatically switches to the standby replica. The automatic failover mechanism simply changes the record of the main DB Instance to point to the standby DB Instance.
    - A.  DNAME.
    - B.  CNAME.
    - C.  TXT.
    - D.  MX.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
42. All Amazon EC2 instances are assigned two IP addresses at launch. Which are those?
    - A.  2 Elastic IP addresses.
    - B.  A private IP address and an Elastic IP address.
    - C.  A public IP address and an Elastic IP address.
    - D.  A private IP address and a public IP address.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
43. You need to pass a custom script to new Amazon Linux instances created in your Auto Scaling group. Which feature allows you to accomplish this?
    - A.  User data.
    - B.  EC2Config service.
    - C.  IAM roles.
    - D.  AWS Config.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
44. A customer wants to track access to their Amazon Simple Storage Service (S3) buckets and also use this information for their internal security and access audits. Which of the following will meet the Customer requirement?
    - A.  Enable AWS CloudTrail to audit all Amazon S3 bucket access.
    - B.  Enable server access logging for all required Amazon S3 buckets.
    - C.  Enable the Requester Pays option to track access via AWS Billing.
    - D.  Enable Amazon S3 event notifications for Put and Post.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
45. Which DNS name can only be resolved within Amazon EC2?
    - A.  Public DNS name.
    - B.  Internal DNS name.
    - C.  External DNS name.
    - D.  Global DNS name.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
46. An AWS customer is deploying an application mat is composed of an AutoScaling group of EC2 Instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x 509 certificate that contains the specific instance-id. In addition an x 509 certificates must Designed by the customer’s Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?
    - A.  Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure me Auto Scaling group to launch instances with this role Have the instances bootstrap get the certificate from Amazon S3 upon first boot.
    - B.  Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group Have the launched instances generate a certificate signature request with the instance’s assigned instance- id to the Key management service for signature.
    - C.  Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.
    - D.  Configure the launched instances to generate a new certificate upon first boot Have the Key management service poll the AutoScaling group for associated instances and send new instances acertificate signature (hat contains the specific instance-id.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
47. A company is storing data on Amazon Simple Storage Service (S3). The company’s security policy mandates that data is encrypted at rest. Which of the following methods can achieve this? (Choose 3 answers)
    - A.  Use Amazon S3 server-side encryption with AWS Key Management Service managed keys.
    - B.  Use Amazon S3 server-side encryption with customer-provided keys.
    - C.  Use Amazon S3 server-side encryption with EC2 key pair.
    - D.  Use Amazon S3 bucket policies to restrict access to the data at rest.
    - E.  Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key.
    48. F. Use SSL to encrypt the data while in transit to Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B, E</p>
    </details>
  
49. In Amazon EC2, you are billed instance-hours when […].
    - A.  your EC2 instance is in a running state.
    - B.  the instance exits from Amazon S3 console.
    - C.  your instance still exits the EC2 console.
    - D.  EC2 instances stop.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
50. Which of the below mentioned options is a possible solution to avoid any security threat?
    - A.  Use the IAM based single sign between the AWS resources and the organization application.
    - B.  Use the IAM role and assign it to the instance.
    - C.  Since the application is hosted on EC2, it does not need credentials to access S3.
    - D.  Use the 509 certificates instead of the access and the secret access keys.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
51. In Amazon EC2 Container Service components, what is the name of a logical grouping of container instances on which you can place tasks?
    - A.  A cluster.
    - B.  A container instance.
    - C.  A container.
    - D.  A task definition.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
52. You are looking to migrate your Development (Dev) and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each accounts bill to a Master AWS account using Consolidated Billing. To make sure you Keep within budget you would like to implement a way for administrators in the Master account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which option will allow you to achieve this goal.
    - A.  Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.
    - B.  Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.
    - C.  Create IAM users in the Master account Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master.
    - D.  Link the accounts using Consolidated Billing. This will give IAM users in the Master account access to resources in the Dev and Test accounts.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)
