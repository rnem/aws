# Practice Exam 2

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Which set of Amazon S3 features helps to prevent and recover from accidental data loss?
      - A. Object lifecycle and service access logging.
      - B. Object versioning and Multi-factor authentication.
      - C. Access controls and server-side encryption.
      - D. Website hosting and Amazon S3 policies.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

2. What is the minimum time Interval for the data that Amazon CloudWatch receives and aggregates?
      - A. One second.
      - B. Five seconds.
      - C. One minute.
      - D. Three minutes.
      - E. Five minutes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

3. A user has launched an EC2 instance. The instance got terminated as soon as it was launched. Which of the below mentioned options is not a possible reason for this?
      - A. The user account has reached the maximum volume limit.
      - B. The AMI is missing. It is the required part.
      - C. The snapshot is corrupt.
      - D. The user account has reached the maximum EC2 instance limit.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

4. Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and it required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery’?
      - A. A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.
      - B. Elastic Transcoder to transcode original high-resolution MP4 videos to HL.
      - C. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.
      - D. Elastic Transcoder to transcode original high-resolution MP4 videos to HL.
      - E. Amazon S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLStranscoded videos from S3.
      - F.  A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

5. You are designing an intrusion detection prevention (IDS/IPS) solution for a customer web application in a single VPC. You are considering the options for implementing lOS IPS protection for traffic coming from the Internet. Which of the following options would you consider? (Choose 2 answers)
      - A. Implement IDS/IPS agents on each Instance running in VPC.
      - B. Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.
      - C. Implement Elastic Load Balancing with SSL listeners in front of the web applications.
      - D. Implement a reverse proxy layer in front of web servers and configure IDS/ IPS agents on each reverse proxy server.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D</p>
    </details>

6. Which of the following are valid statements about Amazon S3? (Choose 2 answers)
      - A. Amazon S3 provides read-after-write consistency for any type of PUT or DELETE.
      - B. Consistency is not guaranteed for any type of PUT or DELETE.
      - C. A successful response to a PUT request only occurs when a complete object is saved.
      - D. Partially saved objects are immediately readable with a GET after an overwrite PU.
      - E. S3 provides eventual consistency for overwrite PUTS and DELETE.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, E</p>
    </details>

7. How can the domain’s zone apex, for example, ‘myzoneapexdomain.com’, be pointed towards an Elastic Load Balancer?
      - A. By using an Amazon Route 53 Alias record.
      - B. By using an AAAA record.
      - C. By using an Amazon Route 53 CNAME record.
      - D. By using an A record.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

8. When should I choose Provisioned IOPS over Standard RDS storage?
      - A. If you have batch-oriented workloads.
      - B. If you use production online transaction processing (OLTP) workloads.
      - C. If you have workloads that are not sensitive to consistent performance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

9. Your department creates regular analytics reports from your company’s log files All log data is collected in Amazon S3 and processed by daily Amazon Elastic Map Reduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?
      - A. Use reduced redundancy storage (RRS) for all data in S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
      - B. Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.
      - C. Use reduced redundancy storage (RRS) for PDF and .csv data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
      - D. Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

10. Because of the extensibility limitations of striped storage attached to Windows Server, Amazon RDS does not currently support increasing storage on a […] DB Instance.
      - A. SQL Server.
      - B. MySQL.
      - C. Oracle.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

11. In regards to IAM you can edit user properties later, but you cannot use the console to change the […].
      - A. user name.
      - B. password.
      - C. default group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

12. In Amazon EC2 Container Service, are other container types supported?
      - A. Yes, EC2 Container Service supports any container service you need.
      - B. Yes, EC2 Container Service also supports Microsoft container service.
      - C. No, Docker is the only container platform supported by EC2 Container Service presently.
      - D. Yes, EC2 Container Service supports Microsoft container service and Openstack.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

13. Content and Media Server is the latest requirement that you need to meet for a client. The client has been very specific about his requirements such as low latency, high availability, durability, and access control. Potentially there will be millions of views on this server and because of ‘spiky’ usage patterns, operations teams will need to provision static hardware, network, and management resources to support the maximum expected need. The Customer base will be initially low but is expected to grow and become more geographically distributed. Which of the following would be a good solution for content distribution?
      - A. Amazon S3 as both the origin server and for caching.
      - B. AWS Storage Gateway as the origin server and Amazon EC2 for caching.
      - C. AWS CloudFront as both the origin server and for caching.
      - D. Amazon S3 as the origin server and Amazon CloudFront for caching.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

14. Name the disk storage supported by Amazon Elastic Compute Cloud (EC2)
      - A. None of these.
      - B. Amazon AppStream store.
      - C. Amazon SNS store.
      - D. Amazon Instance Store.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

15. After an Amazon VPC instance is launched, can I change the VPC security groups it belongs to?
      - A. Only if the tag ‘VPC_Change_Group’ is true.
      - B. Yes. You can.
      - C. No. You cannot.
      - D. Only if the tag ‘VPC Change Group’ is true.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

16. If I want an instance to have a public IP address, which IP address should I use?
      - A. Elastic IP Address.
      - B. Class B IP Address.
      - C. Class A IP Address.
      - D. Dynamic IP Address.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

17. Amazon RDS supports SOAP only through […].
      - A. HTTP or HTTPS.
      - B. TCP/IP.
      - C. HTTP.
      - D. HTTPS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

18. Which of the following services natively encrypts data at rest within an AWS region? (Choose 2 answers)
      - A. AWS Storage Gateway.
      - B. Amazon DynamoDB.
      - C. Amazon CloudFront.
      - D. Amazon Glacier.
      - E. Amazon Simple Queue Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D</p>
    </details>

19. Which one of the following can’t be used as an origin server with Amazon CloudFront?
      - A. A web server running in your infrastructure.
      - B. Amazon S3.
      - C. Amazon Glacier.
      - D. A web server running on Amazon EC2 instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

20. Select the most correct The device name /dev/sdal (within Amazon EC2) is […].
      - A. possible for EBS volumes.
      - B. reserved for the root device.
      - C. recommended for EBS volumes.
      - D. recommended for instance store volumes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

21. How can I change the security group membership for interfaces owned by other AWS, such as Elastic Load Balancing?
      - A. By using the service specific console or APICLI commands.
      - B. None of these.
      - C. Using Amazon EC2 API/CLI.
      - D. Using all these methods.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

22. You have created a Route 53 latency record set from your domain to a machine in Northern Virginia and a similar record to a machine in Sydney. When a user located in US visits your domain he will be routed to
      - A. Northern Virginia.
      - B. Sydney.
      - C. Both, Northern Virginia and Sydney.
      - D. Depends on the Weighted Resource Record Sets.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

23. In the context of MySQL, version numbers are organized as MySQL version = X.Y.Z. What does X denote here?
      - A. Release level.
      - B. Minor version.
      - C. Version number.
      - D. Major version.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

24. Which one of the below doesn’t affect Amazon CloudFront billing?
      - A. Distribution Type.
      - B. Data Transfer Out.
      - C. Dedicated IP SSL Certificates.
      - D. Requests.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

25. Just when you thought you knew every possible storage option on AWS you hear someone mention Reduced Redundancy Storage (RRS) within Amazon S3. What is the ideal scenario to use Reduced Redundancy Storage (RRS)?
      - A. Huge volumes of data.
      - B. Sensitve data.
      - C. Non-critical or reproducible data.
      - D. Critical data.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

26. <code class="language-plaintext highlighter-rouge">$ aws sqs receive-message –queue-url &lt;https://queue.amazonaws.com/546419318123/Test&gt;</code>
      - A. 3.
      - B. 4.
      - C. 2.
      - D. 1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

27. When running my DB Instance as a Multi-AZ deployment, can I use the standby for read or write operations?
      - A. Yes.
      - B. Only with MSSQL based RDS.
      - C. Only for Oracle RDS instances.
      - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

28. In the Launch Db Instance Wizard, where can I select the backup and maintenance options?
      - A. Under DB INSTANCE DETAILS.
      - B. Under REVI EW.
      - C. Under MANAGEMENT OPTIONS.
      - D. Under ENGINE SELECTION.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

29. What is the network performance offered by the c4.8xlarge instance in Amazon EC2?
      - A. 20 Gigabit.
      - B. 10 Gigabit.
      - C. Very High but variable.
      - D. 5 Gigabit.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

30. In Amazon EC2, if your EBS volume stays in the detaching state, you can force the detachment by clicking […].
      - A. Force Detach.
      - B. Detach Instance.
      - C. AttachVolume.
      - D. AttachInstance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

31. What does Amazon DynamoDB provide?
      - A. A predictable and scalable MySQL database.
      - B. A fast and reliable PL/SQL database cluster.
      - C. A standalone Cassandra database, managed by Amazon Web Services.
      - D. A fast, highly scalable managed NoSQL database service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

32. Security groups act like a firewall at the instance level, whereas […] are an additional layer of security that act at the subnet level.
      - A. DB Security Groups.
      - B. VPC Security Groups.
      - C. network ACLs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

33. You have been asked to tighten up the password policies in your organization after a serious security breach, so you need to consider every possible security measure. Which of the following is not an account password policy for IAM Users that can be set?
      - A. Force IAM users to contact an account administrator when the user has allowed his or her password to expire.
      - B. A minimum password length.
      - C. Force IAM users to contact an account administrator when the user has entered his password incorrectly.
      - D. Prevent IAM users from reusing previous passwords.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

34. Multi-AZ deployment […] supported for Microsoft SQL Server DB Instances.
      - A. is not currently.
      - B. is as of 2013.
      - C. is planned to be in 2014.
      - D. will never be.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

35. What does Amazon Elastic Beanstalk provide?
      - A. A scalable storage appliance on top of Amazon Web Services.
      - B. An application container on top of Amazon Web Services.
      - C. A service by this name doesn’t exist.
      - D. A scalable cluster of EC2 instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

36. You need to quickly set up an email-sending service because a client needs to start using it in the next hour. Amazon Simple Email Service (Amazon SES) seems to be the logical choice but there are several options available to set it up. Which of the following options to set up SES would best meet the needs of the client?
      - A. Amazon SES console.
      - B. AWS CloudFormation.
      - C. SMTP Interface.
      - D. AWS Elastic Beanstalk.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

37. A user is observing the EC2 CPU utilization metric on CloudWatch. The user has observed some interesting patterns while filtering over the 1 week period for a particular hour. The user wants to zoom that data point to a more granular period. How can the user do that easily with CloudWatch?
      - A. The user can zoom a particular period by selecting that period with the mouse and then releasing the mouse.
      - B. The user can zoom a particular period by specifying the aggregation data for that period.
      - C. The user can zoom a particular period by double clicking on that period with the mouse.
      - D. The user can zoom a particular period by specifying the period in the Time Range.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

38. A company is running a batch analysis every hour on their main transactional DB. running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift During the execution of the batch their transactional applications are very slow When the batch completes they need to update the top management dashboard with the new data The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required The on-premises system cannot be modified because is managed by anotherteam. How would you optimize this scenario to solve performance issues and automate the process as much as possible? How would you optimize this scenario to solve performance issues and automate the process as much as possible?
      - A. Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.
      - B. Replace ROS with Redshift for the oaten analysis and SQS to send a message to the on-premises system to update the dashboard.
      - C. Create an RDS Read Replica for the batch analysis and SNS to notify me on-premises system to update the dashboard.
      - D. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

39. You are configuring a new VPC for one of your clients for a cloud migration project, and only a public VPN will be in place. After you created your VPC, you created a new subnet, a new internet gateway, and attached your internet gateway to your VPC. When you launched your first instance into your VPC, you realized that you aren’t able to connect to the instance, even if it is configured with an elastic IP. What should be done to access the instance?
      - A. A route should be created as 0.0.0.0/0 and your internet gateway as target.
      - B. Attach another ENI to the instance and connect via new EN.
      - C. A NAT instance should be created and all traffic should be forwarded to NAT instance.
      - D. A NACL should be created that allows all outbound traffic.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

40. You have been asked to build a database warehouse using Amazon Redshift. You know a little about it, including that it is a SQL data warehouse solution, and uses industry standard ODBC and JDBCconnections and PostgreSQL drivers. However you are not sure about what sort of storage it uses for database tables. What sort of storage does Amazon Redshift use for database tables?
      - A. InnoDB Tables.
      - B. NDB data storage.
      - C. Columnar data storage.
      - D. NDB CLUSTER Storage.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

41. A user has attached 1 EBS volume to a VPC instance. The user wants to achieve the best fault tolerance of data possible. Which of the below mentioned options can help achieve fault tolerance?
      - A. Attach one more volume with RAID 1 configuration.
      - B. Attach one more volume with RAID 0 configuration.
      - C. Connect multiple volumes and stripe them with RAI.
      - D. Use the EBS volume as a root device.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

42. Which features can be used to restrict access to data in S3? (Choose 2 answers)
      - A. Set an S3 ACL on the bucket or the object.
      - B. Create a Cloud Front distribution for the bucket.
      - C. Set an S3 bucket policy.
      - D. Enable IAM Identity Federation.
      - E. Use S3 Virtual l Hosting.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C</p>
    </details>

43. You are in the process of creating a Route 53 DNS failover to direct traffic to two EC2 zones. Obviously, if one fails, you would like Route 53 to direct traffic to the other region. Each region has an ELB with some instances being distributed. What is the best way for you to configure the Route 53 health check?
      - A. Route 53 doesn’t support ELB with an internal health check.You need to create your own Route 53 health check of the ELB.
      - B. Route 53 natively supports ELB with an internal health check. Turn ‘Evaluate target health’ off and ’Associate with Health Check’ on and R53 will use the ELB’s internal health check.
      - C. Route 53 doesn’t support ELB with an internal health check. You need to associate your resource record set for the ELB with your own health check.
      - D. Route 53 natively supports ELB with an internal health check. Turn ‘Evaluate target health’ on and ’Associate with Health Check’ off and R53 will use the ELB’s internal health check.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

44. For each DB Instance class, what is the maximum size of associated storage capacity?
      - A. 5GB.
      - B. 1TB.
      - C. 2TB.
      - D. 500GB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

45. A user is planning a highly available application deployment with EC2. Which of the below mentioned options will not help to achieve HA?
      - A. Elastic IP address.
      - B. PIOPS.
      - C. AMI.
      - D. Availability Zones.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

46. What does specifying the mapping /dev/sdc=none when launching an instance do?
      - A. Prevents /dev/sdc from creating the instance.
      - B. Prevents /dev/sdc from deleting the instance.
      - C. Set the value of /dev/sdc to ‘zero’.
      - D. Prevents /dev/sdc from attaching to the instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

47. Which of the following statements is true of tagging an Amazon EC2 resource?
      - A. You don’t need to specify the resource identifier while terminating a resource.
      - B. You can terminate, stop, or delete a resource based solely on its tags.
      - C. You can’t terminate, stop, or delete a resource based solely on its tags.
      - D. You don’t need to specify the resource identifier while stopping a resource.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

48. You are deploying an application to collect votes for a very popular television show. Millions of users will submit votes using mobile devices. The votes must be collected into a durable, scalable, andhighly available data store for real-time public tabulation. Which service should you use?
      - A. Amazon DynamoDB.
      - B. Amazon Redshift.
      - C. Amazon Kinesis.
      - D. Amazon Simple Queue Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

49. Are Reserved Instances available for Multi-AZ Deployments?
      - A. Only for Cluster Compute instances.
      - B. Yes for all instance types.
      - C. Only for M3 instance types.
      - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

50. A […] for a VPC is a collection of subnets (typically private) that you may want to designate for your backend RDS DB Instances.
      - A. DB Subnet Set.
      - B. RDS Subnet Group.
      - C. DB Subnet Group.
      - D. DB Subnet Collection.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>


Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)