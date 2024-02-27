# Practice Exam 5

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. What will be the status of the snapshot until the snapshot is complete?
     - A. Running.
     - B. Working.
     - C. Progressing.
     - D. Pending.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
2. A customer is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They have only authorized the bastion-security-group with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups, but the company wants to further limit administrative access to all of the instances in the VPC. Which of the following Bastion deployment scenarios will meet this requirement?
     - A. Deploy a Windows Bastion host on the corporate network that has RDP access to all instances in the VP.
     - B. Deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere.
     - C. Deploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses.
     - D. Deploy a Windows Bastion host with an auto-assigned Public IP address in the public subnet, and allow RDP access to the bastion from only the corporate public IP addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
3. True or False: Common points of failures like generators and cooling equipment are shared across Availability Zones.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
4. A company is building a voting system for a popular TV show, viewers win watch the performances then visit the show’s website to vote for their favorite performer. It is expected that in a short period of time after the show has finished the site will receive millions of visitors. The visitors will first login to the site using their Amazon.com credentials and then submit their vote. After the voting is completed the page will display the vote totals. The company needs to build the site such that can handle the rapid influx of traffic while maintaining good performance but also wants to keep costs to a minimum. Which of the design patterns below should they use?
     - A. Use Cloud Front and an Elastic Load balancer in front of an auto-scaled set of web servers, the web servers will first can the Login With Amazon service to authenticate the user then process the users vote and store the result into a multi-AZ Relational Database Service instance.
     - B. Use CloudFront and the static website hosting feature of S3 with the Javascript SDK to call the Login With Amazon service to authenticate the user, use IAM Roles to gain permissions to a DynamoDB table to store the users vote.
     - C. Use Cloud Front and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login with Amazon service to authenticate the user, the web servers will process the users vote and store the result into a DynamoDB table using IAM Roles for EC2 instances to gain permissions to the DynamoDB table.
     - D. Use Cloud Front and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login. With Amazon service to authenticate the user, the web servers win process the users vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
5. You are designing a photo sharing mobile app the application will store all pictures in a single Amazon S3 bucket. Users will upload pictures from their mobile device directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3. You want to configure security to handle potentially millions of users in the most secure manner possible. What should your server-side application do when a new user registers on the photo sharing mobile application?
     - A. Create a set of long-term credentials using AWS Security Token Service with appropriate permissions Store these credentials in the mobile app and use them to access Amazon S3.
     - B. Record the user’s Information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses their mobile app create temporary credentials using the AWS Security Token Service ’Assume Role’ function Store these credentials in the mobile app’s memory and use them to access Amazon S3 Generate new credentials the next time the user runs the mobile app.
     - C. Record the user’s Information in Amazon DynamoDB.
     - D. When the user uses their mobile app create temporary credentials using AWS Security Token Service with appropriate permissions Store these credentials in the mobile app’s memory and use them to access Amazon S3 Generate new credentials the next time the user runs the mobile app.
     - E. Create IAM user. Assign appropriate permissions to the IAM user Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.
     - F. Create an IAM user. Update the bucket policy with appropriate permissions for the IAM user Generate an access Key and secret Key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
6. Is there a limit to how many groups a user can be in?
     - A. Yes for all users.
     - B. Yes for all users except root.
     - C. No.
     - D. Yes unless special permission granted.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
7. Which is the default region in AWS?
     - A. eu-west-1.
     - B. us-east-1.
     - C. us-east-2.
     - D. ap-southeast-1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
8. Your company hosts a social media site supporting users in multiple countries. You have been asked to provide a highly available design tor the application that leverages multiple regions tor the most recently accessed content and latency sensitive portions of the wet) site The most latency sensitive component of the application involves reading user preferences to support web site personalization and ad selection. In addition to running your application in multiple regions, which option will support this application’s requirements?
     - A. Serve user content from S3. CloudFront and use Route 53 latency-based routing between ELBs in each region Retrieve user preferences from a local DynamoDB table in each region and leverage SQS to capture changes to user preferences with 505 workers for propagating updates to each table.
     - B. Use the 53 Copy API to copy recently accessed content to multiple regions and serve user content from S3. CloudFront with dynamic content and an ELB in each region Retrieve user preferences from an ElasticCache cluster in each region and leverage SNS notifications to propagate user preference changes to a worker node in each region.
     - C. Use the 53 Copy API to copy recently accessed content to multiple regions and serve user content from S3 CloudFront and Route 53 latency-based routing Between ELBs in each region Retrieve user preferences from a DynamoDB table and leverage SQS to capture changes to user preferences with 505 workers for propagating DynamoDB updates.
     - D. Serve user content from S3. CloudFront with dynamic content, and an ELB in each region Retrieve user preferences from an ElastiCache cluster in each region and leverage Simple Workflow (SWF) to manage the propagation of user preferences from a centralized OB to each ElastiCache cluster.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
9. A […] is a document that provides a formal statement of one or more permissions.
     - A. policy.
     - B. permission.
     - C. role.
     - D. resource.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
10. A company wants to implement their website in a virtual private cloud (VPC). The web tier will use an Auto Scaling group across multiple Availability Zones (AZs). The database will use Multi-AZ RDSMySQL and should not be publicly accessible. What is the minimum number of subnets that need to be configured in the VPC?
     - A. 1.
     - B. 2.
     - C. 3.
     - D. 4.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
11. Is there a limit to the number of groups you can have?
     - A. Yes for all users except root.
     - B. No.
     - C. Yes unless special permission granted.
     - D. Yes for all users.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
12. True or False: Automated backups are enabled by default for a new DB Instance
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
13. What is one key difference between an Amazon EBS-backed and an instance-store backed instance?
     - A. Amazon EBS-backed instances can be stopped and restarted.
     - B. Instance-store backed instances can be stopped and restarted.
     - C. Auto scaling requires using Amazon EBS-backed instances.
     - D. Virtual Private Cloud requires EBS backed instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
14. A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following statements is true of Amazon EC2 security groups?
     - A. Create and maintain AMIs of key servers where fast recovery is required.
     - B. Regularly run your servers, test them, and apply any software updates and configuration changes.
     - C. Ensure that you have all supporting custom software packages available in AW.
     - D. All items listed here are important when thinking about disaster recovery.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
15. Select a true statement about Amazon EC2 Security Groups (EC2-Classic).
     - A. After you launch an instance in EC2-Classic, you can’t change its security groups.
     - B. After you launch an instance in EC2-Classic, you can change its security groups only once.
     - C. After you launch an instance in EC2-Classic, you can only add rules to a security group.
     - D. After you launch an instance in EC2-Classic, you cannot add or remove rules from a security group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
16. To view information about an Amazon EBS volume, open the Amazon EC2 console at <a href="https://console.aws.amazon.com/ec2/">https://console.aws.amazon.com/ec2/</a>, click in the Navigation panel.
     - A. EBS.
     - B. Describe.
     - C. Details.
     - D. Volumes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
17. True or False: Provisioned IOPS Costs - you are charged for the IOPS and storage whether or not you use them in a given month.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
18. You have an EC2 Security Group with several running EC2 instances. You change the Security Group rules to allow inbound traffic on a new port and protocol, and launch several new instances in the same Security Group. The new rules apply:
     - A. Immediately to all instances in the security group.
     - B. Immediately to the new instances only.
     - C. Immediately to the new instances, but old instances must be stopped and restarted before the new rules apply.
     - D. To all instances, but it may take several minutes for old instances to see the changes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
19. An edge location refers to which Amazon Web Service?
     - A. An edge location is refered to the network configured within a Zone or Region.
     - B. An edge location is an AWS Region.
     - C. An edge location is the location of the data center used for Amazon CloudFront.
     - D. An edge location is a Zone within an AWS Region.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
20. If I want to run a database in an Amazon instance, which is the most recommended Amazon storage option?
     - A. Amazon Instance Storage.
     - B. Amazon EBS.
     - C. You can’t run a database inside an Amazon instance.
     - D. Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
21. A customer is leveraging Amazon Simple Storage Service in eu-west-1 to store static content for a web-based property. The customer is storing objects using the Standard Storage class. Where are the customers objects replicated?
     - A. A single facility in eu-west-1 and a single facility in eu-central-1.
     - B. A single facility in eu-west-1 and a single facility in us-east-1.
     - C. Multiple facilities in eu-west-1.
     - D. A single facility in eu-west-1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
22. You have set up an S3 bucket with a number of images in it and you have decided that you want anybody to be able to access these images, even anonymous users. To accomplish this you create a bucket policy. You will need to use an Amazon S3 bucket policy that specifies a […] in the principal element, which means anyone can access the bucket.
     - A. hash tag (#).
     - B. anonymous user.
     - C. wildcard (*).
     - D. S3 user.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
23. You try to connect via SSH to a newly created Amazon EC2 instance and get one of the following error messages: ‘Network error: Connection timed out’ or ‘Error connecting to [instance], reason: -&gt; Connection timed out: connect,’ You have confirmed that the network and security group rules are configured correctly and the instance is passing status checks. What steps should you take to identify the source of the behavior? (Choose 2 answers)
     - A. Verify that the private key file corresponds to the Amazon EC2 key pair assigned at launch.
     - B. Verify that your IAM user policy has permission to launch Amazon EC2 instances.
     - C. Verify that you are connecting with the appropriate user name for your AMI.
     - D. Verify that the Amazon EC2 Instance was launched with the proper IAM role.
     - E. Verify that your federation trust to AWS has been established.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C</p>
    </details>
  
24. An Auto-Scaling group spans 3 AZs and currently has 4 running EC2 instances. When Auto Scaling needs to terminate an EC2 instance by default, AutoScaling will: (Choose 2 answers)
     - A. Allow at least five minutes for Windows/Linux shutdown scripts to complete, before terminating the instance.
     - B. Terminate the instance with the least active network connections. If multiple instances meet this criterion, one will be randomly selected.
     - C. Send an SNS notification, if configured to do so.
     - D. Terminate an instance in the AZ which currently has 2 running EC2 instances.
     - E. Randomly select one of the 3 AZs, and then terminate an instance in that A.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, D</p>
    </details>
  
25. A photo-sharing service stores pictures in Amazon Simple Storage Service (S3) and allows application sign-in using an OpenID Connect-compatible identity provider. Which AWS Security Token Service approach to temporary access should you use for the Amazon S3 operations?
     - A. SAML-based Identity Federation.
     - B. Cross-Account Access.
     - C. AWS Identity and Access Management roles.
     - D. Web Identity Federation.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
26. What is the maximum key length of a tag?
     - A. 512 Unicode characters.
     - B. 64 Unicode characters.
     - C. 256 Unicode characters.
     - D. 128 Unicode characters.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
27. Does Amazon RDS allow direct host access via Telnet, Secure Shell (SSH), or Windows Remote Desktop Connection?
     - A. Yes.
     - B. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
28. A user wants to achieve High Availability with PostgreSQL DB. Which of the below mentioned functionalities helps achieve HA?
     - A. Multi-AZ.
     - B. Read Replica.
     - C. Multi region.
     - D. PostgreSQL does not support HA.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
29. Are penetration tests allowed as long as they are limited to the customer’s instances?
     - A. Yes, they are allowed but only for selected regions.
     - B. No, they are never allowed.
     - C. Yes, they are allowed without any permission.
     - D. Yes, they are allowed but only with approval.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
30. You are building a system to distribute confidential documents to employees. Using CloudFront, what method could be used to serve content that is stored in S3, but not publically accessible from S3 directly?
     - A. Add the CloudFront account security group ‘amazon-cf/amazon-cf-sg’ to the appropriate S3 bucket policy.
     - B. Create a S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN).
     - C. Create an Identity and Access Management (IAM) User for CloudFront and grant access to the objects in your S3 bucket to that IAM User.
     - D. Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OA.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
31. You require the ability to analyze a large amount of data, which is stored on Amazon S3 using Amazon Elastic Map Reduce. You are using the cc2 8x large Instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?
     - A. Create more smaller flies on Amazon S3.
     - B. Add additional cc2 8x large instances by introducing a task group.
     - C. Use smaller instances that have higher aggregate 1/0 performance.
     - D. Create fewer, larger fi les on Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
32. What is the name of licensing model in which I can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS?
     - A. Bring Your Own License.
     - B. Role Bases License.
     - C. Enterprise License.
     - D. License Included.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
33. Which of the following statements are true about Amazon Route 53 resource records? (Choose 2 answers)
     - A. An Alias record can map one DNS name to another Amazon Route 53 DNS name.
     - B. A CNAME record can be created for your zone apex.
     - C. An Amazon Route 53 CNAME record can point to any DNS record hosted anywhere.
     - D. TIL can be set for an Alias record in Amazon Route 53.
     - E. An Amazon Route 53 Alias record can point to any DNS record hosted anywhere.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C</p>
    </details>
  
34. Do you need to shutdown your EC2 instance when you create a snapshot of EBS volumes that serve as root devices?
     - A. No, you only need to shutdown an instance before deleting it.
     - B. Yes.
     - C. No, the snapshot would turn off your instance automatically.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
35. Can I initiate a ‘forced failover’ for my Oracle Multi-AZ DB Instance deployment?
     - A. Yes.
     - B. Only in certain regions.
     - C. Only in VPC.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
36. Amazon RDS provides high availability and failover support for DB instances using […].
     - A. customized deployments.
     - B. AppStream customizations.
     - C. log events.
     - D. Multi-AZ deployments.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
37. True or False: Amazon EC2 has no Amazon Resource Names (ARNs) because you can’t specify a particular Amazon EC2 resource in an IAM policy.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
38. A major client who has been spending a lot of money on his internet service provider asks you to set up an AWS Direct Connection to try and save him some money. You know he needs high-speed connectivity. Which connection port speeds are available on AWS Direct Connect?
     - A. 500Mbps and 1Gbps.
     - B. 1Gbps and 10Gbps.
     - C. 100Mbps and 1Gbps.
     - D. 1Gbps.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
39. What will be the state of the alarm at the end of 90 minutes, if the CPU utilization is constant at 80%?
     - A. ALERT.
     - B. ALARM.
     - C. OK.
     - D. INSUFFICIENT_DATA.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
40. A 3-tier e-commerce web application is current deployed on-premises and will be migrated to AWS for greater scalability and elasticity The web server currently shares read-only data using a network distributed file system The app server tier uses a clustering mechanism for discovery and shared session state that depends on I P multicast The database tier uses shared-storage clustering to provide database fail over capability, and uses several read slaves for scaling Data on all servers and the distributed file system directory is backed up weekly to off-site tapes. Which AWS storage and database architecture meets the requirements of the application?
     - A. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZdeployment and one or more read replicas. Backup: web servers, app servers, and database backed up weekly to Glacier using snapshots.
     - B. Web servers: store read-only data in an EC2 NFS server, mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.
     - C. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.
     - D. Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZdeployment. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
41. What are the four levels of AWS Premium Support?
     - A. Basic, Developer, Business, Enterprise.
     - B. Basic, Startup, Business, Enterprise.
     - C. Free, Bronze, Silver, Gold.
     - D. All support is free.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
42. What is the default maximum number of Access Keys per user?
     - A. 10.
     - B. 15.
     - C. 2.
     - D. 20.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
43. In the most recent company meeting, your CEO focused on the fact that everyone in the organization needs to make sure that all of the infrastructure that is built is truly scalable. Which of the following statements is incorrect in reference to scalable architecture?
     - A. A scalable service is capable of handling heterogeneity.
     - B. A scalable service is resilient.
     - C. A scalable architecture won’t be cost effective as it grows.
     - D. Increasing resources results in a proportional increase in performance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
44. What does Amazon S3 stand for?
     - A. Simple Storage Solution.
     - B. Storage Storage Storage (triple redundancy Storage).
     - C. Storage Server Solution.
     - D. Simple Storage Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
45. A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? (Choose 2 answers)
     - A. Amazon Simple Email Service.
     - B. Amazon CloudWatch.
     - C. Amazon Simple Queue Service.
     - D. Amazon Route 53.
     - E. Amazon Simple Notification Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, E</p>
    </details>
  
46. A user has configured ELB with two EBS backed EC2 instances. The user is trying to understand the DNS access and IP support for ELB. Which of the below mentioned statements may not help the user understand the IP mechanism supported by ELB?
     - A. The client can connect over IPV4 or IPV6 using Dualstack.
     - B. Communication between the load balancer and back-end instances is always through IPV4.
     - C. ELB DNS supports both IPV4 and IPV6.
     - D. The ELB supports either IPV4 or IPV6 but not both.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
47. What is Oracle SQL Developer?
     - A. An AWS developer who is an expert in Amazon RDS using both the Oracle and SQL Server DB engines.
     - B. A graphical Java tool distributed without cost by Oracle.
     - C. It is a variant of the SQL Server Management Studio designed by Microsoft to support Oracle DBMS functionalities.
     - D. A different DBMS released by Microsoft free of cost.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
48. You can use […] to help secure the instances in your VPC.
     - A. security groups and multi-factor authentication.
     - B. security groups and 2-Factor authentication.
     - C. security groups and biometric authentication.
     - D. security groups and network ACLs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
49. What is the type of monitoring data (for Amazon EBS volumes) which is available automatically in 5- minute periods at no charge called?
     - A. Basic.
     - B. Primary.
     - C. Detailed.
     - D. Local.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
50. A user comes to you and wants access to Amazon CloudWatch but only wants to monitor a specific LoadBalancer. Is it possible to give him access to a specific set of instances or a specific LoadBalancer?
     - A. No because you can’t use IAM to control access to CloudWatch data for specific resources.
     - B. Yes. You can use IAM to control access to CloudWatch data for specific resources.
     - C. No because you need to be Sysadmin to access CloudWatch data.
     - D. Yes. Any user can see all CloudWatch data and needs no access rights.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)
