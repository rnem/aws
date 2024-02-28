# Practice Exam 9

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Before I delete an EBS volume, what can I do if I want to recreate the volume later?
    - A. Create a copy of the EBS volume (not a snapshot).
    - B. Store a snapshot of the volume.
    - C. Download the content to an EC2 instance
    - D. Back up the data in to a physical disk.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
2. An accountant asks you to design a small VPC network for him and, due to the nature of his business, just needs something where the workload on the network will be low, and dynamic data will be accessed infrequently. Being an accountant, low cost is also a major factor. Which EBS volume type would best suit his requirements?
    - A. Magnetic.
    - B. Any, as they all perform the same and cost the same.
    - C. General Purpose (SSD).
    - D. Magnetic or Provisioned IOPS (SSD).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
3. Uur company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past two months resulting in significant financial losses. Your CIO is strongly agreeing to move the application to AWS. While working on achieving buy-in from the other company executives, he asks you to develop a disaster recovery plan to help improve Business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?
    - A. Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELBresources to support deploying the application across Multiple- Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
    - B. Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
    - C. Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resultingfile to an S3 bucket using multi-part upload.
    - D. Install your application on a compute-optimized EC2 instance capable of supporting the application’s average load. Synchronously replicate transactions from your on-premises database to adatabase instance in AWS across a secure Direct Connect connection.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
4. A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. An event takes the link between the main and branch office offline. Which methods will enable the branch office to access their data? (Choose 3 answers)
    - A. Use a HTTPS GET to the Amazon S3 bucket where the files are located.
    - B. Restore by implementing a lifecycle policy on the Amazon S3 bucket.
    - C. Make an Amazon Glacier Restore API ca ll to load the files into another Amazon S3 bucket within four to six hours.
    - D. Launch a new AWS Storage Gateway instance AMI in Amazon EC2, and restore from a gateway snapshot.
    - E. Create an Amazon EBS volume from a gateway snapshot, and mount it to an Amazon EC2 instance.
    - F. Launch an AWS Storage Gateway virtual iSCSI device at the branch office, and restore from a gateway snapshot.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D, E, F</p>
    </details>
  
5. Your customer is willing to consolidate their log streams (access logs application logs security logs etc.) in one single system. Once consolidated, the customer wants to analyze these logs in real time based on heuristics. From time to time, the customer needs to validate heuristics, which requires going back to data samples extracted from the last 12 hours. What is the best approach to meet your customer’s requirements?
    - A. Send all the log events to Amazon SQS, setup an Auto Scaling group of EC2 servers to consume the logs and apply the heuristics.
    - B. Send all the log events to Amazon Kinesis develop a client process to apply heuristics on the logs.
    - C. Configure Amazon Cloud Trail to receive custom logs, use EMR to apply heuristics the logs.
    - D. Setup an Auto Scaling group of EC2 syslogd servers, store the logs on S3 use EMR to apply heuristics on the logs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
6. Can the string value of ‘Key’ be prefixed with laws?
    - A. No.
    - B. Only for EC2 not S3.
    - C. Yes.
    - D. Only for S3 not EC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
7. You are configuring your company’s application to use Auto Scaling and need to move user state information. Which of the following AWS services provides a shared data store with durability and lowlatency?
    - A. AWS ElastiCache Memcached.
    - B. Amazon Simple Storage Service.
    - C. Amazon EC2 instance storage.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
8. Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a DirectConnect connection and would like to start using the new connection. After configuring DirectConnect settings in the AWS Console, which of the following options win provide the most seamless transition for your users?
    - A. Delete your existing VPN connection to avoid routing loops configure your DirectConnect router with the appropriate settings and verity network traffic is leveraging DirectConnect.
    - B. Configure your DirectConnect router with a higher 8GP priority man your VPN router, verify network traffic is leveraging Directconnect and then delete your existing VPN connection.
    - C. Update your VPC route tables to point to the DirectConnect connection configure your DirectConnect router with the appropriate settings verify network traffic is leveraging DirectConnect and then delete the VPN connection.
    - D. Configure your DirectConnect router, update your VPC route tables to point to the DirectConnect connection, configure your VPN connection with a higher BGP pointy. And verify network traffic is leveraging the DirectConnect connection.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
9. 
    <p>If I modify a DB Instance or the DB parameter group associated with the instance, should I reboot the instance for the changes to take effect?</p>

    - A. Yes.
    - B. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
10. After setting up several database instances in Amazon Relational Database Service (Amazon RDS) you decide that you need to track the performance and health of your databases. How can you do this?
    - A. Subscribe to Amazon RDS events to be notified when changes occur with a DB instance, DB snapshot, DB parameter group, or DB security group.
    - B. Use the free Amazon CloudWatch service to monitor the performance and health of a DB instance.
    - C. All of the items listed will track the performance and health of a database.
    - D. View, download, or watch database log files using the Amazon RDS console or Amazon RDS APIs. You can also query some database log files that are loaded into database tables.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
11. You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic Map Reduce job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved overall performance of the website using Cloud Front for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude. How do you fix your usage dashboard?
    - A. Enable Cloud Front to deliver access logs to S3 and use them as input of the Elastic Map Reduce job.
    - B. Turn on Cloud Trail and use trail log tiles on S3 as input of the Elastic Map Reduce job.
    - C. Change your log collection process to use Cloud Watch ELB metrics as input of the Elastic Map Reduce job.
    - D. Use Elastic Beanstalk ‘Rebuild Environment’ option to update log delivery to the Elastic Map Reduce job.
    - E. Use Elastic Beanstalk ‘Restart App server(s)’ option to update log delivery to the Elastic Map Reduce job.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
12. A customer has a 10 GB AWS Direct Connect connection to an AWS region where they have a web application hosted on Amazon Elastic Computer Cloud (EC2). The application has dependencies on an on-premises mainframe database that uses a BASE (Basic Available. Sort stale Eventual consistency) rather than an ACID (Atomicity. Consistency isolation. Durability) consistency model. The application is exhibiting undesirable behavior because the database is not able to handle the volume of writes. How can you reduce the load on your on-premises database resources in the most cost-effective way?
    - A. Use an Amazon Elastic Map Reduce (EMR) S3DistCp as a synchronization mechanism between the on-premises database and a Hadoop cluster on AWS.
    - B. Modify the application to write to an Amazon SQS queue and develop a worker process to flush the queue to the on-premises database.
    - C. Modify the application to use DynamoDB to feed an EMR cluster which uses a map function to write to the on-premises database.
    - D. Provision an RDS read-replica database on AWS to handle the writes and synchronize the two databases using Data Pipeline.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
13. You are very concerned about security on your network because you have multiple programmers testing APIs and SDKs and you have no idea what is happening. You think CloudTrail may help but arenot sure what it does. Which of the following statements best describes the AWS service CloudTrail?
    - A. With AWS CloudTrail you can get a history of AWS API calls and related events for your account.
    - B. With AWS CloudTrail you can get a history of IAM users for your account.
    - C. With AWS CloudTrail you can get a history of S3 logfiles for your account.
    - D. With AWS CloudTrail you can get a history of CloudFormation JSON scripts used for your account.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
14. Every user you create in the IAM system starts with […].
    - A. partial permissions.
    - B. full permissions.
    - C. no permissions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
15. Amazon S3 allows you to set per-file permissions to grant read and/or write access. However you have decided that you want an entire bucket with 100 files already in it to be accessible to the public. You don’t want to go through 100 files individually and set permissions. What would be the best way to do this?
    - A. Move the bucket to a new region.
    - B. Add a bucket policy to the bucket.
    - C. Move the files to a new bucket.
    - D. Use Amazon EBS instead of S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
16. You are designing an SSUTLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient. Which of the following options would you consider for configuring the web server infrastructure? (Choose 2 answers)
    - A. Configure ELB with TCP listeners on TCP/4d3. And place the Web servers behind it.
    - B. Configure your Web servers with EIPS Place the Web servers in a Route 53 Record Set and configure health checks against all Web servers.
    - C. Configure ELB with HTTPS listeners, and place the Web servers behind it.
    - D. Configure your web servers as the origins for a Cloud Front distribution. Use custom SSL certificates on your Cloud Front distribution.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B</p>
    </details>
  
17. Which of the following are use cases for Amazon DynamoDB? (Choose 3 answers)
    - A. Storing BLOB data.
    - B. Managing web sessions.
    - C. Storing JSON documents.
    - D. Storing metadata for Amazon S3 objects.
    - E. Running relational joins and complex updates.
    - F. Storing large amounts of infrequently accessed data.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, E, F</p>
    </details>
  
18. You have been asked to set up a database in AWS that will require frequent and granular updates. You know that you will require a reasonable amount of storage space but are not sure of the best option. What is the recommended storage option when you run a database on an instance with the above criteria?
    - A. Amazon S3.
    - B. Amazon EBS.
    - C. AWS Storage Gateway.
    - D. Amazon Glacier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
19. An application hosted at the EC2 instance receives an HTTP request from ELB. The same request has an X-Forwarded-For header, which has three IP addresses. Which system’s IP will be a part of this header?
    - A. Previous Request IP address.
    - B. Client IP address.
    - C. All of the answers listed here.
    - D. Load Balancer IP address.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
20. An organization has developed a mobile application which allows end users to capture a photo on their mobile device, and store it inside an application. The application internally uploads the data to AWS S3. The organization wants each user to be able to directly upload data to S3 using their Google ID. How will the mobile app allow this?
    - A.  Use the AWS Web identity federation for mobile applications, and use it to generate temporary security credentials for each user.
    - B.  It is not possible to connect to AWS S3 with a Google I
    - C.  Create an IAM user every time a user registers with their Google ID and use IAM to upload files to S3.
    - D.  Create a bucket policy with a condition which allows everyone to upload if the login ID has a Google part to it.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
21. You must increase storage size in increments of at least […].
    - A. 40.
    - B. 20.
    - C. 50.
    - D. 10.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
22. You need to set up a security certificate for a client’s e-commerce website as it will use the HTTPS protocol. Which of the below AWS services do you need to access to manage your SSL server certificate?
    - A. AWS Directory Service.
    - B. AWS Identity &amp; Access Management.
    - C. AWS CloudFormation.
    - D. Amazon Route 53.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
23. After setting up a Virtual Private Cloud (VPC) network, a more experienced cloud engineer suggests that to achieve low network latency and high network throughput you should look into setting up a placement group. You know nothing about this, but begin to do some research about it and are especially curious about its limitations. Which of the below statements is wrong in describing the limitations of a placement group?
    - A. Although launching multiple instance types into a placement group is possible, this reduces the likelihood that the required capacity will be available for your launch to succeed.
    - B. A placement group can span multiple Availability Zones.
    - C. You can’t move an existing instance into a placement group.
    - D. A placement group can span peered VPCs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
24. True or False: When you perform a restore operation to a point in time or from a DB Snapshot, a new DB Instance is created with a new endpoint.
    - A. True.
    - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
25. What is the Reduced Redundancy option in Amazon S3?
    - A. Less redundancy for a lower cost.
    - B. It doesn’t exist in Amazon S3, but in Amazon EBS.
    - C. It allows you to destroy any copy of your files outside a specific jurisdiction.
    - D. It doesn’t exist at all.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
26. You are setting up your first Amazon Virtual Private Cloud (Amazon VPC) so you decide to use the VPC wizard in the AWS console to help make it easier for you. Which of the following statements is correct regarding instances that you launch into a default subnet via the VPC wizard?
    - A. Instances that you launch into a default subnet receive a public IP address and 10 private IP addresses.
    - B. Instances that you launch into a default subnet receive both a public IP address and a private IP address.
    - C. Instances that you launch into a default subnet don’t receive any ip addresses and you need to define them manually.
    - D. Instances that you launch into a default subnet receive a public IP address and 5 private IP addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
27. For which of the following use cases are Simple Workflow Service (SWF) and Amazon EC2 an appropriate solution? (Choose 2 answers)
    - A. Using as an endpoint to collect thousands of data points per hour from a distributed fleet of sensors.
    - B. Managing a multi-step and multi-decision checkout process of an e-commerce website.
    - C. Orchestrating the execution of distributed and auditable business processes.
    - D. Using as an SNS (Simple Notification Service) endpoint to trigger execution of video transcoding jobs.
    - E. Using as a distributed session store for your web application.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, C</p>
    </details>
  
28. Which of the following instance types are available as Amazon EBS-backed only? (Choose 2 answers)
    - A. General purpose T2.
    - B. General purpose M3.
    - C. Compute-optimized C4.
    - D. Compute-optimized C3.
    - E. Storage-optimized 12.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D</p>
    </details>
  
29. True or False: Without IAM, you cannot control the tasks a particular user or system can do and what AWS resources they might use.
    - A. True.
    - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
30. What does Amazon ELB stand for?
    - A. Elastic Linux Box.
    - B. Encrypted Linux Box.
    - C. Encrypted Load Balancing.
    - D. Elastic Load Balancing.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
31. A read only news reporting site with a combined web and application tier and a database tier that receives large and unpredictable traffic demands must be able to respond to these traffic fluctuations automatically. What AWS services should be used meet these requirements?
    - A. Stateless instances for the web and application tier synchronized using Elasticache Memcached in an autoscaimg group monitored with CloudWatch. And RDSwith read replicas.
    - B. Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and RDS with read replicas.
    - C. Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and multi-AZ RDS.
    - D. Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch and multi-AZ RDS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
32. In Amazon AWS, which of the following statements is true of key pairs?
    - A. Key pairs are used only for Amazon SDKs.
    - B. Key pairs are used only for Amazon EC2 and Amazon CloudFront.
    - C. Key pairs are used only for Elastic Load Balancing and AWS IA.
    - D. Key pairs are used for all Amazon services.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
33. What does Amazon ElastiCache provide?
    - A. A service by this name doesn’t exist. Perhaps you mean Amazon CloudCache.
    - B. A virtual server with a huge amount of memory.
    - C. A managed In-memory cache service.
    - D. An Amazon EC2 instance with the Memcached software already pre-installed.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
34. What are the two permission types used by AWS?
    - A. Resource-based and Product-based.
    - B. Product-based and Service-based.
    - C. Service-based.
    - D. User-based and Resource-based.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
35. In AWS CloudHSM, in addition to the AWS recommendation that you use two or more HSM appliances in a high-availability configuration to prevent the loss of keys and data, you can also perform a remote backup/restore of a Luna SA partition if you have purchased a:
    - A.  Luna Restore HS.
    - B.  Luna Backup HS.
    - C.  Luna HS.
    - D.  Luna SA HS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
36. An organization has a statutory requirement to protect the data at rest for the S3 objects. Which of the below mentioned options need not be enabled by the organization to achieve data security?
    - A. MFA delete for S3 objects.
    - B. Client side encryption.
    - C. Bucket versioning.
    - D. Data replication.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
37. Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal Management has tasked you to architect the collection platform ensuring the following requirements are met. Provide the ability for real-time analytics of the inbound biometric data. Ensure processing of the biometric data is highly durable. Elastic and parallel. The results of the analytic processing should be persisted for data mining. Which architecture outlined below win meet the initial requirements for the collection platform?
    - A. Utilize S3 to collect the inbound sensor data analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.
    - B. Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Red shift cluster using EMR.
    - C. Utilize SQS to collect the inbound sensor data analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS instance.
    - D. Utilize EMR to collect the inbound sensor data, analyze the data from EUR with Amazon Kinesis and save me results to Dynamo DB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
38. Which of the following approaches provides the lowest cost for Amazon Elastic Block Store snapshots while giving you the ability to fully restore data?
    - A. Maintain two snapshots: the original snapshot and the latest incremental snapshot.
    - B. Maintain a volume snapshot; subsequent snapshots will overwrite one another
    - C. Maintain a single snapshot the latest snapshot is both Incremental and complete.
    - D. Maintain the most current snapshot, archive the original and incremental to Amazon Glacier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
39. You have a video transcoding application running on Amazon EC2. Each instance pol ls a queue to find out which video should be transcoded, and then runs a transcoding process. If this process is interrupted, the video will be transcoded by another instance based on the queuing system. You have a large backlog of videos which need to be transcoded and would like to reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost efficient way?
    - A. Reserved instances.
    - B. Spot instances.
    - C. Dedicated instances.
    - D. On-demand instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
40. What does the AWS Storage Gateway provide?
    - A. It allows to integrate on-premises IT environments with Cloud Storage.
    - B. A direct encrypted connection to Amazon S3.
    - C. It’s a backup solution that provides an on-premises Cloud storage.
    - D. It provides an encrypted SSL endpoint for backups in the Cloud.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
41. You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS. During the pilot, you measured a peak or 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database. The current deployment consists of a load-balanced auto scaled Ingestion layer using EC2 instances and a PostgreSQL RDS database with 500GB standard storage. The pilot is considered a success and your CEO has managed to get the attention or some potential investors. The business plan requires a deployment of at least lOOK sensors which needs to besupported by the backend. You also need to store sensor data for at least two years to be able to compare year over year Improvements. To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling. Which setup win meet the requirements?
    - A. Add an SQS queue to the ingestion layer to buffer writes to the RDS instance.
    - B. Ingest data into a DynamoDB table and move old data to a Redshift cluster.
    - C. Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage.
    - D. Keep the current architecture but upgrade RDS storage to 3TB and lOK provisioned IOPS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
42. After a major security breach your manager has requested a report of all users and their credentials in AWS. You discover that in IAM you can generate and download a credential report that lists all users in your account and the status of their various credentials, including passwords, access keys, MFA devices, and signing certificates. Which following statement is incorrect in regards to the use of credential reports?
    - A.  Credential reports are downloaded XML files.
    - B.  You can get a credential report using the AWS Management Console, the AWS CLI, or the IAM API.
    - C.  You can use the report to audit the effects of credential lifecycle requirements, such as password rotation.
    - D.  You can generate a credential report as often as once every four hours.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
43. What is the maximum response time for a Business level Premium Support case?
    - A. 30 minutes.
    - B. 1 hour.
    - C. 12 hours.
    - D. 10 minutes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
44. Per the AWS Acceptable Use Policy, penetration testing of EC2 instances
    - A. May be performed by AWS, and will be performed by AWS upon customer request.
    - B. May be performed by AWS, and is periodically performed by AWS.
    - C. Are expressly prohibited under all circumstances.
    - D. May be performed by the customer on their own instances with prior authorization from AWS.
    - E. May be performed by the customer on their own instances, only if performed from EC2 instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
45. Which of the following features are provided by Amazon EC2?
    - A. Exadata Database Machine, Optimized Storage Management, Flashback Technology, and Data Warehousing.
    - B. Instances, Amazon Machine Images (AMIs), Key Pairs, Amazon EBS Volumes, Firewall, Elastic IP address, Tags, and Virtual Private Clouds (VPCs).
    - C. Real Application Clusters (RAC), Elasticache Machine Images (EMIs), Data Warehousing, Flashback Technology, Dynamic IP address.
    - D. Exadata Database Machine, Real Application Clusters (RAC), Data Guard, Table and Index Partitioning, and Data Pump Compression.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
46. True or False: If you add a tag that has the same key as an existing tag on a DB Instance, the new value overwrites the old value.
    - A. True.
    - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
47. You decide that you need to create a number of Auto Scaling groups to try and save some money as you have noticed that at certain times most of your EC2 instances are not being used. By default, what is the maximum number of Auto Scaling groups that AWS will allow you to create?
    - A. 12.
    - B. Unlimited.
    - C. 20.
    - D. 2.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
48. After moving an E-Commerce website for a client from a dedicated server to AWS you have also set up auto scaling to perform health checks on the instances in your group and replace instances that fail these checks. Your client has come to you with his own health check system that he wants you to use as it has proved to be very useful prior to his site running on AWS. What do you think would be an appropriate response to this given all that you know about auto scaling?
    - A. It is not possible to implement your own health check system. You need to use AWSs health check system.
    - B. It is not possible to implement your own health check system due to compatibility issues.
    - C. It is possible to implement your own health check system and then send the instance’s health information directly from your system to Cloud Watch.
    - D. It is possible to implement your own health check system and then send the instance’s health information directly from your system to Cloud Watch but only in the US East (Virginia) region.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
49. You’ve been brought in as solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC) The previous architect has already deployed a 3-tier VPC, The configuration is as follows. VPC: vpc-2f8bc447. IGW: igw-2d8bc445. NACL: ad-208bc448. 5ubnets and Route Tables: Web servers: subnet-258bc44d. Application servers: subnet-248bc44c. Database servers: subnet-9189c6f9. Route Tables: rrb-218bc449, rtb-238bc44b. Associations: subnet-258bc44d: rtb-218bc449, subnet-248bc44c: rtb-238bc44b, subnet-9189c6f9: rtb-238bc44b. You are now ready to begin deploying EC2 instances into the VPC Web servers must have direct access to the internet Application and database servers cannot have direct access to the internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?
    - A. Create a bastion and NAT instance in subnet-258bc44d, and add a route from rtb- 238bc44b to the NAT instance.
    - B. Add a route from rtb-238bc44b to igw-2d8bc445 and add a bastion and NAT instance within subnet-248bc44c.
    - C. Create a bastion and NAT instance in subnet-248bc44c, and add a route from rtb- 238bc44b to subnet-258bc44d.
    - D. Create a bastion and NAT instance in subnet-258bc44d, add a route from rtb-238bc44b to lgw- 2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet -248bc44c.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
50. After deciding that EMR will be useful in analyzing vast amounts of data for a gaming website that you are architecting you have just deployed an Amazon EMR Cluster and wish to monitor the cluster performance. Which of the following tools cannot be used to monitor the cluster performance?
    - A. Kinesis.
    - B. Ganglia.
    - C. CloudWatch Metrics.
    - D. Hadoop Web Interfaces.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
    
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)