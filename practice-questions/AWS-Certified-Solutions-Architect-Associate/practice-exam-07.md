# Practice Exam 7

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Resources that are created in AWS are identified by a unique identifier called an
     - A. Amazon Resource Number.
     - B. Amazon Resource Nametag.
     - C. Amazon Resource Name.
     - D. Amazon Resource Namespace.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
2. What are the two types of licensing options available for using Amazon RDS for Oracle?
     - A. BYOL and Enterprise License.
     - B. BYOL and License Included.
     - C. Enterprise License and License Included.
     - D. Role based License and License Included.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
3. In AWS, which security aspects are the customer’s responsibility? (Choose 4 answers)
     - A. Security Group and ACL (Access Control List) settings.
     - B. Decommissioning storage devices.
     - C. Patch management on the EC2 instance’s operating system.
     - D. Life-cycle management of IAM credentials.
     - E. Controlling physical access to compute resources.
     - F. Encryption of EBS (Elastic Block Storage) volumes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C, D, F</p>
    </details>
  
4. You have a web application running on six Amazon EC2 instances, consuming about 45% of resources on each instance. You are using auto-scaling to make sure that six instances are running at all times. The number of requests this application processes is consistent and does not experience spikes. The application is critical to your business and you want high availability at all times. You want the load to be distributed evenly between all instances. You also want to use the same Amazon Machine Image (AMI) for all instances. Which of the following architectural choices should you make?
     - A. Deploy 6 EC2 instances in one Availability Zone and use Amazon Elastic Load Balancer.
     - B. Deploy 3 EC2 instances in one region and 3 in another region and use Amazon Elastic Load Balancer.
     - C. Deploy 3 EC2 instances in one Availability Zone and 3 in another Availability Zone and use Amazon Elastic Load Balancer.
     - D. Deploy 2 EC2 instances in three regions and use Amazon Elastic Load Balancer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
5. An ERP application is deployed across multiple AZs in a single region. in the event of failure, the Recovery Time Objective (RTO) must be less than 3 hours, and the Recovery Point Objective (RPO) must be 15 minutes the customer realizes that data corruption occurred roughly 1.5 hours ago. What DR strategy could be used to achieve this RTO and RPO in the event of this kind of failure?
     - A. Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.
     - B. Use synchronous database master-slave replication between two Availability Zones.
     - C. Take hourly DB backups to EC2 Instance store volumes with transaction logs stored in S3 every 5 minutes.
     - D. Take 15 minute DB backups stored in Glacier with transaction logs stored in S3 every 5 minutes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
6. You have been setting up an Amazon Virtual Private Cloud (Amazon VPC) for your company, including setting up subnets. Security is a concern, and you are not sure which is the best security practice for securing subnets in your VPC. Which statement below is correct in describing the protection of AWS resources in each subnet?
     - A.  You can use multiple layers of security, including security groups and network access control lists (ACL).
     - B.  You can only use access control lists (ACL).
     - C.  You don’t need any security in subnets.
     - D.  You can use multiple layers of security, including security groups, network access control lists (ACL) and CloudHS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
7. Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications. What is the monthly charge for using the public data sets?
     - A. A 1 time charge of 10$ for all the datasets.
     - B. 1$ per dataset per month.
     - C. 10$ per month for all the datasets.
     - D. There is no charge for using the public data sets.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
8. […] embodies the ‘share-nothing’ architecture and essentially involves breaking a large database into several smaller databases. Common ways to split a database include: 1. Splitting tables that are not joined in the same query onto different hosts or 2. Duplicating a table across multiple hosts and then using a hashing algorithm to determine which host receives a given update.
     - A. $harding.
     - B. Fai lure recovery.
     - C. Federation.
     - D. DOL operations.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
9. After deploying a new website for a client on AWS, he asks if you can set it up so that if it fails it can be automatically redirected to a backup website that he has stored on a dedicated server elsewhere. You are wondering whether Amazon Route 53 can do this. Which statement below is correct in regards to Amazon Route 53?
     - A. Amazon Route 53 can’t help detect an outage. You need to use another service.
     - B. Amazon Route 53 can help detect an outage of your website and redirect your end users to alternate locations.
     - C. Amazon Route 53 can help detect an outage of your website but can’t redirect your end users to alternate locations.
     - D. Amazon Route 53 can’t help detect an outage of your website, but can redirect your end users to alternate locations.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
10. Your company plans to host a large donation website on Amazon Web Services (AWS). You anticipate a large and undetermined amount of traffic that will create many database writes. To be certain that you do not drop any writes to a database hosted on AWS. Which service should you use?
     - A. Amazon RDS with provisioned IOPS up to the anticipated peak write throughput.
     - B. Amazon Simple Queue Service (SOS) for capturing the writes and draining the queue to write to the database.
     - C. Amazon ElastiCache to store the writes until the writes are committed to the database.
     - D. Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
11. You have set up an Auto Scaling group. The cool down period for the Auto Scaling group is 7 minutes. The first instance is launched after 3 minutes, while the second instance is launched after 4 minutes. How many minutes after the first instance is launched will Auto Scaling accept another scaling activity request?
     - A. 11 minutes.
     - B. 7 minutes.
     - C. 10 minutes.
     - D. 14 minutes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
12. You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. <www.example.com>) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database. During the migration you can change the application code, but you have to file a change request. How would you implement the architecture on AWS in order to maximize scalability and high availability?
</www.example.com>     - A. File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different AZs.
     - B. File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different AZs.
     - C. File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.
     - D. File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different AZs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
13. Can I test my DB Instance against a new version before upgrading?
     - A. Yes.
     - B. No.
     - C. Only in VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
14. Your system recently experienced down time during the troubleshooting process. You found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: Launch, start stop, and terminate development resources. Launch and start production instances.
     - A. Create an IAM user, which is not allowed to terminate instances by leveraging production EC2 termination protection.
     - B. Leverage resource based tagging along with an IAM user, which can prevent specific users from terminating production EC2 resources.
     - C. Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.
     - D. Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
15. You have just set up a large site for a client which involved a huge database which you set up with Amazon RDS to run as a Multi-AZ deployment. You now start to worry about what will happen if the database instance fails. Which statement best describes how this database will function if there is a database failure?
     - A. Updates to your DB Instance are synchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.
     - B. Your database will not resume operation without manual administrative intervention.
     - C. Updates to your DB Instance are asynchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.
     - D. Updates to your DB Instance are synchronously replicated across S3 to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
16. Your company has an on-premises multi-tier PHP web application, which recently experienced downtime due to a large burst in web traffic due to a company announcement Over the coming days, you are expecting similar announcements to drive similar unpredictable bursts, and are looking to find ways to quickly improve your infrastructures ability to handle unexpected increases in traffic. The application currently consists of 2 tiers a web tier which consists of a load balancer and several Linux Apache web servers as well as a database tier which hosts a Linux server hosting a MySQLdatabase. Which scenario below will provide full site functionality, while helping to improve the ability of your application in the short timeframe required?
     - A. Failover environment: Create an S3 bucket and configure it for website hosting. Migrate your DNS to Route 53 using zone file import, and leverage Route 53 DNS failover to failover to the S3 hosted website.
     - B. Hybrid environment: Create an AMI, which can be used to launch web servers in EC2. Create an Auto Scaling group, which uses the AMI to scale the web tier based on incoming traffic. LeverageElastic Load Balancing to balance traffic between on-premises web servers and those hosted in AWS.
     - C. Offload traffic from on-premises environment: Setup a CloudFront distribution, and configure CloudFront to cache objects from a custom origin. Choose to customize your object cache behavior, andselect a TIL that objects should exist in cache.
     - D. Migrate to AWS: Use VM Import/Export to quickly convert an on-premises web server to an AMI.
     - E. Create an Auto Scaling group, which uses the imported AMI to scale the web tier based on incoming traffic. Create an RDS read replica and setup replication between the RDS instance and on-premises MySQL server to migrate the database.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
17. When using consolidated billing there are two account types. What are they?
     - A. Paying account and Linked account.
     - B. Parent account and Child account.
     - C. Main account and Sub account.
     - D. Main account and Secondary account.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
18. You have a periodic Image analysis application that gets some files in Input analyzes them and tor each file writes some data in output to a ten file the number of files in input per day is high and concentrated in a few hours of the day. Currently you have a server on EC2 with a large EBS volume that hosts the input data and the results it takes almost 20 hours per day to complete the process What services could be used to reduce the elaboration time and improve the availability of the solution?
     - A. Amazon S3 to store 1/0 files. SQS to distribute elaboration commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the length of the SQS queue.
     - B. EBS with Provisioned IOPS (PIOPS) to store 1/0 files. SNS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications.
     - C. Amazon S3 to store 1/0 files, SNS to distribute evaporation commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the number of SNS notifications.
     - D. EBS with Provisioned IOPS (PIOPS) to store 1/0 files SOS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group ot hosts depending on the length of the SQS queue.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
19. While controlling access to Amazon EC2 resources, which of the following acts as a firewall that controls the traffic allowed to reach one or more instances?
     - A. A security group.
     - B. An instance type.
     - C. A storage cluster.
     - D. An object.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
20. The base URI for all requests for instance metadata is […].
     - A. <a href="http://254.169.169.254/latest/">http://254.169.169.254/latest/</a>.
     - B. <a href="http://169.169.254.254/latest/">http://169.169.254.254/latest/</a>.
     - C. <a href="http://127.0.0.1/latest/">http://127.0.0.1/latest/</a>.
     - D. <a href="http://169.254.169.254/latest/">http://169.254.169.254/latest/</a>.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
21. While using the EC2 GET requests as URLs, the […] is the URL that serves as the entry point for the web service.
     - A. token.
     - B. endpoint.
     - C. action.
     - D. None of these.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
22. A user is planning to launch a scalable web application. Which of the below mentioned options will not affect the latency of the application?
     - A. Region.
     - B. Provisioned IOPS.
     - C. Availability Zone.
     - D. Instance size.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
23. Your firm has uploaded a large amount of aerial image data to S3 in the past, in your on-premises environment, you used a dedicated group of servers to oaten process this data and used Rabbit MQAnopen source messaging system to get job information to the servers. Once processed the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost. Which is correct?
     - A. Use SQS for passing job messages use Cloud Watch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.
     - B. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SOS Once data is processed,
     - C. Change the storage class of the S3 objects to Reduced Redundancy Storage. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS Once data is processed, change the storage class of the S3 objects to Glacier.
     - D. Use SNS to pass job messages use Cloud Watch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
24. A user has launched 10 EC2 instances inside a placement group. Which of the below mentioned statements is true with respect to the placement group?
     - A. All instances must be in the same AZ.
     - B. All instances can be across multiple regions.
     - C. The placement group cannot have more than 5 instances.
     - D. All instances must be in the same region.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
25. A user has created a CloudFormation stack. The stack creates AWS services, such as EC2 instances, ELB, AutoScaling, and RDS. While creating the stack it created EC2, ELB and AutoScaling but failed to create RDS. What will CloudFormation do in this scenario?
     - A. Rollback all the changes and terminate all the created services.
     - B. It will wait for the user’s input about the error and correct the mistake after the input.
     - C. CloudFormation can never throw an error after launching a few services since it verifies all the steps before launching.
     - D. It will warn the user about the error and ask the user to manually create RDS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
26. You have been asked to design the storage layer for an application. The application requires disk performance of at least 100,000 IOPS. In addition, the storage layer must be able to survive the loss of an individual disk, EC2 instance, or Availability Zone without any data loss. The volume you provide must have a capacity of at least 3 TB. Which of the following designs will meet these objectives?
     - A. Instantiate a c3.8xlarge instance in us-east-1. Provision 4x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 5 volume. Ensure that EBS snapshots are performed every 15 minutes.
     - B. Instantiate a c3.8xlarge instance in us-east-1. Provision 3xlTB EBS volumes, attach them to the Instance, and configure them as a single RAID 0 volume. Ensure that EBS snapshots are performed every 15 minutes.
     - C. Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Provision 3x1TB EBS volumes, attach them to the instance, and configure them as a second RAID 0 volume. Configure synchronous, block-level replication from the ephemeral-backed volume to the EBS-backed volume.
     - D. Instantiate a c3.8xlarge instance in us-east-1. Provision an AWS Storage Gateway and configure it for 3 TB of storage and 100,000 IOPS. Attach the volume to the instance.
     - E. Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Configure synchronous, block-level replication to an identically configured instance in us-east-1b.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: E</p>
    </details>
  
27. A company is preparing to give AWS Management Console access to developers Company policy mandates identity federation and role-based access control. Roles are currently assigned using groups in the corporate Active Directory. What combination of the following will give developers access to the AWS console? (Choose 2 answers)
     - A. AWS Directory Service AD Connector.
     - B. AWS Directory Service Simple AD.
     - C. AWS Identity and Access Management groups.
     - D. AWS identity and Access Management roles.
     - E. AWS identity and Access Management users.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D</p>
    </details>
  
28. Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months you expect 10orders per day on your first day. 1000 orders per day after 6 months and 10,000 orders after 12 months. Orders coming in are checked for consistency men dispatched to your manufacturing plant for production quality control packaging shipment and payment processing If the product does not meet the quality standards at any stage of the process employees may force the process to repeat a step Customers are notified via email about order status and any critical issues with their orders such as payment failure. Your case architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders. How can you implement the order fulfillment process while making sure that the emails are delivered reliably?
     - A. Add a business process management application to your Elastic Beanstalk app servers and re-use the ROS database for tracking order status use one of the Elastic Beanstalk instances to send emails to customers.
     - B. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=l Use the decider instance to send emails to customers.
     - C. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=l use SES to send emails to customers.
     - D. Use an SQS queue to manage all process tasks Use an Auto Scaling group of EC2 Instances that poll the tasks and execute them. Use SES to send emails to customers.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
29. A, […] is an individual, system, or application that interacts with AWS programmatically.
     - A. user.
     - B. AWS Account.
     - C. group.
     - D. role.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
30. A user is accessing an EC2 instance on the SSH port for IP 10.20.30.40. Which one is a secure way to configure that the instance can be accessed only from this IP?
     - A. In the security group, open port 22 for IP 10.20.30.40.
     - B. In the security group, open port 22 for IP 10.20.30.40/32.
     - C. In the security group, open port 22 for IP 10.20.30.40/24.
     - D. In the security group, open port 22 for IP 10.20.30.40/0.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
31. Read Replicas require a transactional storage engine and are only supported for the […] storage engine.
     - A. OracleISAM.
     - B. MSSQLDB.
     - C. InnoDB.
     - D. MyISAM.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
32. What is Amazon Glacier?
     - A. You mean Amazon ‘Iceberg’: it’s a low-cost storage service.
     - B. A security tool that allows to ‘freeze’ an EBS volume and perform computer forensics on it.
     - C. A low-cost storage service that provides secure and durable storage for data archiving and backup.
     - D. It’s a security tool that allows to ‘freeze’ an EC2 instance and perform computer forensics on it.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
33. You have a content management system running on an Amazon EC2 instance that is approaching 100% CPU utilization. Which option will reduce load on the Amazon EC2 instance?
     - A. Create a load balancer, and register the Amazon EC2 instance with it.
     - B. Create a Cloud Front distribution, and configure the Amazon EC2 instance as the origin.
     - C. Create an Auto Scaling group from the instance using the Create AutoScaling Group action.
     - D. Create a launch configuration from the instance using the Create launch Configuration action.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
34. Can I initiate a ‘forced failover’ for my MySQL Multi-AZ DB Instance deployment?
     - A. Only in certain regions.
     - B. Only in VPC.
     - C. Yes.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
35. When controlling access to Amazon EC2 resources, each Amazon EBS Snapshot has a […] attribute that controls which AWS accounts can use the snapshot.
     - A. createVolumePermission.
     - B. LaunchPermission.
     - C. SharePermission.
     - D. RequestPermission.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
36. You have decided to change the instance type for instances running in your application tier that is using Auto Scaling. In which area below would you change the instance type definition?
     - A. Auto Scaling policy.
     - B. Auto Scaling group.
     - C. Auto Scaling tags.
     - D. Auto Scaling launch configuration.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
37. Which of the following statements is true of creating a launch configuration using an EC2 instance?
     - A. The launch configuration can be created only using the Query APIs.
     - B. Auto Scaling automatically creates a launch configuration directly from an EC2 instance.
     - C. A user should manually create a launch configuration before creating an Auto Scaling group.
     - D. The launch configuration should be created manually from the AWS CL.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
38. Your company has multiple IT departments, each with their own VPC. Some VPCs are located within the same AWS account, and others in a different AWS account. You want to peer together all VPCs to enable the IT departments to have full access to each others’ resources. There are certain limitations placed on VPC peering. Which of the following statements is incorrect in relation to VPC peering?
     - A. Private DNS values cannot be resolved between instances in peered VPCs.
     - B. You can have up to 3 VPC peering connections between the same two VPCs at the same time.
     - C. You cannot create a VPC peering connection between VPCs in different regions.
     - D. You have a limit on the number active and pending VPC peering connections that you can have per VP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
39. A gaming company comes to you and asks you to build them infrastructure for their site. They are not sure how big they will be as with all start ups they have limited money and big ideas. What they do tell you is that if the game becomes successful, like one of their previous games, it may rapidly grow to millions of users and generate tens (or even hundreds) of thousands of writes and reads per second. After considering all of this, you decide that they need a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. Which of the following databases do you think would best fit their needs?
     - A. Amazon DynamoDB.
     - B. Amazon Redshift.
     - C. Any non-relational database.
     - D. Amazon SimpleDB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
40. A/An […] acts as a firewall that controls the traffic allowed to reach one or more instances.
     - A. security group.
     - B. ACL.
     - C. IAM.
     - D. private IP Addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
41. Your manager has just given you access to multiple VPN connections that someone else has recently set up between all your company’s offices. She needs you to make sure that the communication between the VPNs is secure. Which of the following services would be best for providing a low-cost hub-and-spoke model for primary or backup connectivity between these remote offices?
     - A. Amazon CloudFront.
     - B. AWS Direct Connect.
     - C. AWS CloudHSM.
     - D. AWS VPN CloudHub.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
42. You need to create a management network using network interfaces for a virtual private cloud (VPC) network. Which of the following statements is incorrect pertaining to Best Practices for ConfiguringNetwork Interfaces.
     - A. You can detach secondary (ethN) network interfaces when the instance is running or stopped. However, you can’t detach the primary (eth0) interface.
     - B. Launching an instance with multiple network interfaces automatically configures interfaces, private IP addresses, and route tables on the operating system of the instance.
     - C. You can attach a network interface in one subnet to an instance in another subnet in the same VPC, however, both the network interface and the instance must reside in the same Availability Zone.
     - D. Attaching another network interface to an instance is a valid method to increase or double the network bandwidth to or from the dual-homed instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
43. A user has launched 10 EC2 instances inside a placement group. Which of the following statements is true in regards to what ability launching your instances into a VPC instead of EC2-Classic gives you?
     - A. All of the things listed here.
     - B. Change security group membership for your instances while they’re running.
     - C. Assign static private IP addresses to your instances that persist across starts and stops.
     - D. Define network interfaces, and attach one or more network interfaces to your instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
44. In the HQ region you run an hourly batch process reading data from every region to compute cross regional reports that are sent by email to all offices this batch process must be completed as fast as possible to quickly optimize logistics how do you build the database architecture in order to meet the requirements’?
     - A. For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region.
     - B. For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region.
     - C. For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region.
     - D. For each regional deployment, use MySQL on EC2 with a master in the region and use S3 to copy data files hourly to the HQ region.
     - E. Use Direct Connect to connect all regional MySQL deployments to the HQ region and reduce network latency for the batch process.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
45. What is the average IOPS that the user will get for most of the year as per EC2 SLA if the instance is attached to the EBS optimized instance?
     - A. 950.
     - B. 990.
     - C. 1000.
     - D. 900.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
46. You are working with a customer who has 10 TB of archival data that they want to migrate to Amazon Glacier. The customer has a 1-Mbps connection to the Internet. Which service or feature provides the fastest method of getting the data into Amazon Glacier?
     - A. Amazon Glacier multipart upload.
     - B. AWS Storage Gateway.
     - C. VM Import/Export.
     - D. AWS Import/Export.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
47. Your manager has asked you to set up a public subnet with instances that can send and receive internet traffic, and a private subnet that can’t receive traffic directly from the internet, but can initiate traffic to the internet (and receive responses) through a NAT instance in the public subnet. Hence, the following 3 rules need to be allowed: Inbound SSH traffic. Web servers in the public subnet to read and write to MS SQL servers in the private subnet. Inbound RDP traffic from the Microsoft Terminal Services gateway in the public private subnet. What are the respective ports that need to be opened for this?
     - A. Ports 22, 1433, 3389.
     - B. Ports 21, 1433, 3389.
     - C. Ports 25, 1433, 3389.
     - D. Ports 22, 1343, 3999.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
48. An EC2 instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens to the data on an instance if the instance reboots (intentionally or unintentionally)?
     - A. Data will be lost.
     - B. Data persists.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
49. Please select the Amazon EC2 resource which can be tagged.
     - A. Key pairs.
     - B. Elastic IP addresses.
     - C. Placement groups.
     - D. Amazon EBS snapshots.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
50. Without […] you must either create multiple AWS accounts-each with its own billing and subscriptions to AWS products-or your employees must share the security credentials of a single AWS account.
     - A. Amazon RDS.
     - B. Amazon Glacier.
     - C. Amazon EMR.
     - D. Amazon IAM.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)