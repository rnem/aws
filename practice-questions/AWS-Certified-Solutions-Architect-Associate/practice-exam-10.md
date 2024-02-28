# Practice Exam 10

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A/An […] is the concept of allowing (or disallowing) an entity such as a user, group, or role some type of access to one or more resources.
     - A. user.
     - B. AWS Account.
     - C. resource.
     - D. permission.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
2. You are running a successful multitier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publishstatus reports every 30 minutes from user-generated information that is being stored in your web application s database. You are currently running a Multi-AZ RDS MySQL instance for the databasetier. You also have implemented Elasticache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successful ly implement thereporting tier with as little impact as possible to your database.
     - A. Continually send transaction logs from your master database to an S3 bucket and generate the reports off the S3 bucket using S3 byte range requests.
     - B. Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.
     - C. Launch a RDS Read Replica connected to your Multi-AZ master database and generate reports by querying the Read Replica.
     - D. Generate the reports by querying the ElastiCache database caching tier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
3. Can I delete a snapshot of the root device of an EBS volume used by a registered AMI?
     - A. Only via API.
     - B. Only via Console.
     - C. Yes.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
4. MySQL installations default to port […].
     - A. 3306.
     - B. 443.
     - C. 80.
     - D. 1158.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
5. In the ‘Detailed ‘ monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send […] minute metrics to Amazon CloudWatch.
     - A. 5.
     - B. 2.
     - C. 1.
     - D. 3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
6. A user has deployed an application on his private cloud. The user is using his own monitoring tool. He wants to configure it so that whenever there is an error, the monitoring tool will notify him via SMS. Which of the below mentioned AWS services will help in this scenario?
     - A. AWS SES.
     - B. AWS SNS.
     - C. None because the user infrastructure is in the private cloud.
     - D. AWS SMS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
7. What does Amazon Route 53 provide?
     - A. A global Content Delivery Network.
     - B. None of these.
     - C. A scalable Domain Name System.
     - D. An SSH endpoint for Amazon EC2.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
8. The AWS CloudHSM service defines a resource known as a high-availability (HA) […], which is a virtual partition that represents a group of partitions, typically distributed between several physical HSMs for high-availability.
     - A. proxy group.
     - B. partition group.
     - C. functional group.
     - D. relational group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
9. In Amazon EC2, partial instance-hours are billed […].
     - A. per second used in the hour.
     - B. per minute used.
     - C. by combining partial segments into full hours.
     - D. as full hours.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
10. In Amazon EC2, what is the limit of Reserved Instances per Availability Zone each month?
     - A. 5.
     - B. 20.
     - C. 50.
     - D. 10.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
11. True or False: When using IAM to control access to your RDS resources, the key names that can be used are case sensitive. For example, aws: CurrentTime is NOT equivalent to AWS: currenttime.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
12. You need to create a JSON-formatted text file for AWS CloudFormation. This is your first template and the only thing you know is that the templates include several major sections but there is only one that is required for it to work. What is the only section required?
     - A. Mappings.
     - B. Outputs.
     - C. Resources.
     - D. Conditions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
13. A user wants to use an EBS-backed Amazon EC2 instance for a temporary job. Based on the input data, the job is most likely to finish within a week. Which of the following steps should be followed to terminate the instance automatically once the job is finished?
     - A. Configure the EC2 instance with a stop instance to terminate it.
     - B. Configure the EC2 instance with ELB to terminate the instance when it remains idle.
     - C. Configure the Cloud Watch alarm on the instance that should perform the termination action once the instance is idle.
     - D. Configure the Auto Scaling schedule activity that terminates the instance after 7 days.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
14. You are building an automated transcription service in which Amazon EC2 worker instances process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know what the storage capacity requirements are. Which storage option is both cost-efficient and scalable?
     - A. Multiple Amazon EBS volume with snapshots.
     - B. A single Amazon Glacier vault.
     - C. A single Amazon S3 bucket.
     - D. Multiple instance stores.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
15. Your company has recently extended its datacenter into a VPC on AVVS to add burst computing capacity as needed Members of your Network Operations Center need to be able to go to the AWSManagement Console and administer Amazon EC2 instances as necessary You don’t want to create new IAM users for each NOC member and make those users sign in again to the AWS Management Console Which option below will meet the needs for your NOC members?
     - A. Use OAuth 2 0 to retrieve temporary AWS security credentials to enable your NOC members to sign in to the AVVS Management Console.
     - B. Use web Identity Federation to retrieve AWS temporary security credentials to enable your NOC members to sign in to the AWS Management Console.
     - C. Use your on-premises SAML 2.0-compliant identity provider (IOP) to grant the NOC members federated access to the AWS Management Console via the AWS sing le sign-on (550) endpoint.
     - D. Use your on-premises SAML2.0-compliam identity provider (IOP) to retrieve temporary security credentials to enable NOC members to sign in to the AWS Management Console.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
16. What is the maximum response time for a Business level Premium Support case?
     - A. 30 minutes.
     - B. You always get instant responses (within a few seconds).
     - C. 10 minutes.
     - D. 1 hour.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
17. You have just set up your first Elastic Load Balancer (ELB) but it does not seem to be configured properly. You discover that before you start using ELB, you have to configure the listeners for your load balancer. Which protocols does ELB use to support the load balancing of applications?
     - A. HTTP and HTTPS.
     - B. HTTP, HTTPS, TCP, SSL and SSH.
     - C. HTTP, HTTPS, TCP, and SSL.
     - D. HTTP, HTTPS, TCP, SSL and SFTP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
18. A t2.medium EC2 instance type must be launched with what type of Amazon Machine Image (AMI)?
     - A. An Instance store Hardware Virtual Machine AMI.
     - B. An Instance store Paravirtual AMI.
     - C. An Amazon EBS-backed Hardware Virtual Machine AMI.
     - D. An Amazon EBS-backed Paravirtual AMI.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
19. A user has created a subnet in VPC and launched an EC2 instance within it. The user has not selected the option to assign the IP address while launching the instance. The user has 3 elastic IPs and is trying to assign one of the Elastic IPs to the VPC instance from the console. The console does not show any instance in the IP assignment screen. What is a possible reason that the instance is unavailable in the assigned IP console?
     - A. The IP address may be attached to one of the instances.
     - B. The IP address belongs to a different zone than the subnet zone.
     - C. The user has not created an internet gateway.
     - D. The IP addresses belong to EC2 Classic; so they cannot be assigned to VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
20. Will I be alerted when automatic fail over occurs?
     - A. Only if SNS configured.
     - B. Yes.
     - C. No.
     - D. Only if Cloud watch configured.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
21. Amazon EC2 provides a […]. It is an HTTP or HTTPS request that uses the HTTP verbs GET or POST.
     - A. web database.
     - B. .NET framework.
     - C. Query API.
     - D. C library.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
22. Which of the following requires a custom Cloud Watch metric to monitor?
     - A. Memory Utilization of an EC2 instance.
     - B. CPU Utilization of an EC2 instance.
     - C. Disk usage activity of an EC2 instance.
     - D. Data transfer of an EC2 instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
23. An International company has deployed a multi-tier web application that relies on DynamoDB in a single region For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours They should synchronize their data on a regular basis and be able to provision me web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data and synchronize only the modified elements. Which design would you choose to meet these requirements?
     - A. Use AWS data Pipeline to schedule a DynamoDB cross region copy once a day. create a Last updated’ attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter.
     - B. Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to Dynamo DB in the second region.
     - C. Use AWS data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day then schedule another task immediately after it that will import data from S3 to DynamoDB in the other region.
     - D. Send also each Ante into an SQS queue in me second region; use an auto-scaling group behind the SQS queue to replay the write in the second region.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
24. An Elastic IP address (EIP) is a static IP address designed for dynamic cloud computing. With an EIP, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account. Your EIP is associated with your AWS account, not a particular EC2 instance, and it remains associated with your account until you choose to explicitly release it. By default how many EIPs is each AWS account limited to on a per region basis?
     - A. 1.
     - B. 5.
     - C. Unlimited.
     - D. 10.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
25. Which Amazon Storage behaves like raw, unformatted, external block devices that you can attach to your instances?
     - A. None of these.
     - B. Amazon Instance Storage
     - C. Amazon EBS
     - D. All of these.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
26. You currently operate a web application in the AWS US-East region The application runs on an autoscaled layer of EC2 instances and an RDS Multi-AZ database Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2.1AM And RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?
     - A. Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected Use IAM roles S3 bucket policies and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.
     - B. Create a new CloudTrail with one new S3 bucket to store the logs Configure SNS to send log file delivery notifications to your management system Use IAM roles and S3 bucket policies on the S3 bucket mat stores your logs.
     - C. Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.
     - D. Create three new CloudTrail trails with three new S3 buckets to store the logs one for the AWS Management console, one for AWS SDKs and one for command line tools Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
27. Does DynamoDB support in-place atomic updates?
     - A. Yes.
     - B. No.
     - C. It does support in-place non-atomic updates.
     - D. It is not defined.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
28. Which of the following is true of Amazon EC2 security group?
     - A. You can modify the outbound rules for EC2-Classic.
     - B. You can modify the rules for a security group only if the security group controls the traffic for just one instance.
     - C. You can modify the rules for a security group only when a new instance is created.
     - D. You can modify the rules for a security group at any time.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
29. You need to set up security for your VPC and you know that Amazon VPC provides two features that you can use to increase security for your VPC: security groups and network access control lists (ACLs). You have already looked into security groups and you are now trying to understand ACLs. Which statement below is incorrect in relation to ACLs?
     - A. Supports allow rules and deny rules.
     - B. Is stateful: Return traffic is automatically allowed, regardless of any rules.
     - C. Processes rules in number order when deciding whether to allow traffic.
     - D. Operates at the subnet level (second layer of defense).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
30. A user is trying to launch a similar EC2 instance from an existing instance with the option ‘Launch More like this’. The AMI of the selected instance is deleted. What will happen in this case?
     - A. AWS does not need an AMI for the ‘Launch more like this’ option.
     - B. AWS will launch the instance but will not create a new AMI.
     - C. AWS will create a new AMI and launch the instance.
     - D. AWS will throw an error saying that the AMI is deregistered.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
31. True or False: When you use the AWS Management Console to delete an IAM user, IAM also deletes any signing certificates and any access keys belonging to the user.
     - A. False.
     - B. This is configurable.
     - C. True.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
32. You are working with a customer who is using Chef configuration management in their data center. Which service is designed to let the customer leverage existing Chef recipes in AWS?
     - A. Amazon Simple Workflow Service.
     - B. AWS Elastic Beanstalk.
     - C. AWS CloudFormation.
     - D. AWS OpsWorks.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
33. Does Amazon RDS for SQL Server currently support importing data into the msdb database?
     - A. Yes.
     - B. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
34. How can an EBS volume that is currently attached to an EC2 instance be migrated from one Availability Zone to another?
     - A. Detach the volume and attach it to another EC2 instance in the other AZ.
     - B. Simply create a new volume in the other AZ and specify the original volume as the source.
     - C. Create a snapshot of the volume, and create a new volume from the snapshot in the other AZ.
     - D. Detach the volume, then use the ec2-migrate-voiume command to move it to another AZ.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
35. Having set up a website to automatically be redirected to a backup website if it fails, you realize that there are different types of failovers that are possible. You need all your resources to be available the majority of the time. Using Amazon Route 53 which configuration would best suit this requirement?
     - A. Active-active failover.
     - B. None. Route 53 can’t failover.
     - C. Active-passive failover.
     - D. Active-active-passive and other mixed configurations.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
36. A client application requires operating system privileges on a relational database server. What is an appropriate configuration for a highly available database architecture?
     - A. A standalone Amazon EC2 instance.
     - B. Amazon RDS in a Multi-AZ configuration.
     - C. Amazon EC2 instances in a replication configuration utilizing a single Availability Zone.
     - D. Amazon EC2 instances in a replication configuration utilizing two different Availability Zones.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
37. Is decreasing the storage size of a DB Instance permitted?
     - A. Depends on the ROMS used.
     - B. Yes.
     - C. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
38. Can you encrypt EBS volumes?
     - A.  Yes, you can enable encryption when you create a new EBS volume using the AWS Management Console, API, or CLI.
     - B.  No, you should use a third-party software to perform raw block-level encryption of an EBS volume.
     - C.  Yes, but you must use a third-party API for encrypting data before it’s loaded on EBS.
     - D.  Yes, you can encrypt with the special ‘ebs_encrypt’ command through Amazon APIs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
39. You must assign each server to at least […] security group.
     - A. 3.
     - B. 2.
     - C. 4.
     - D. 1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
40. Is the encryption of connections between my application and my DB Instance using SSL for the MySQL server engines available?
     - A. Yes.
     - B. Only in VPC.
     - C. Only in certain regions.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
41. Your manager has come to you saying that he is very confused about the bills he is receiving from AWS as he is getting different bills for every user and needs you to look into making it more understandable. Which of the following would be the best solution to meet his request?
     - A. AWS Billing Aggregation.
     - B. Consolidated Billing.
     - C. Deferred Billing.
     - D. Aggregated Billing.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
42. Regarding Amazon Route 53, if your application is running on Amazon EC2 instances in two or more Amazon EC2 regions and if you have more than one Amazon EC2 instance in one or more regions, you can use […] to route traffic to the correct region and then use […] route traffic to instances within the region, based on probabilities that you specify.
     - A. weighted-based routing; alias resource record sets.
     - B. latency-based routing; weighted resource record sets.
     - C. weighted-based routing; weighted resource record sets.
     - D. latency-based routing; alias resource record sets.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
43. If I scale the storage capacity provisioned to my DB Instance by mid of a billing month, how will I be charged?
     - A. You will be charged for the highest storage capacity you have used.
     - B. On a proration basis.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
44. When using the following AWS services, which should be implemented in multiple Availability Zones for high availability solutions? (Choose 2 answers)
     - A. Amazon Dynamo DB.
     - B. Amazon Elastic Compute Cloud (EC2).
     - C. Amazon Elastic Load Balancing.
     - D. Amazon Simple Notification Service (SNS).
     - E. Amazon Simple Storage Service (S3).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, C</p>
    </details>
  
45. A customer is hosting t heir company website on a cluster of web servers that are behind a public facing load balancer. The customer also uses Amazon Route 53 to manage their public DNS. How should the customer configure the DNS zone apex record to point to the load balancer?
     - A. Create an A record pointing to the IP address of the load balancer.
     - B. Create a CNAME record pointing to the load balancer DNS name.
     - C. Create a CNAME record aliased to the load balancer DNS name.
     - D. Create an A record aliased to the load balancer DNS name.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
46. True or False: REST or Query requests are HTTP or HTTPS requests that use an HTTP verb (such as GET or POST) and a parameter named Action or Operation that specifies the API you are calling.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
47. Which of the following features ensures even distribution of traffic to Amazon EC2 instances in multiple Availability Zones registered with a load balancer?
     - A. Elastic Load Balancing request routing.
     - B. An Amazon Route 53 weighted routing policy.
     - C. Elastic Load Balancing cross-zone load balancing.
     - D. An Amazon Route 53 latency routing pol icy.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
48. Groups can’t […].
     - A. be nested more than 3 levels.
     - B. be nested at all.
     - C. be nested more than 4 levels.
     - D. be nested more than 2 levels.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
49. You have been using T2 instances as your CPU requirements have not been that intensive. However you now start to think about larger instance types and start looking at M1 and M3 instances. You are a little confused as to the differences between them as they both seem to have the same ratio of CPU and memory. Which statement below is incorrect as to why you would use one over the other?
     - A. M3 instances are less expensive than M1 instances.
     - B. M3 instances are configured with more swap memory than M1 instances.
     - C. M3 instances provide better, more consistent performance that M1 instances for most use-cases.
     - D. M3 instances also offer SSD-based instance storage that delivers higher I/O performance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
50. Do the system resources on the Micro instance meet the recommended configuration for Oracle?
     - A. Yes, completely.
     - B. Yes, but only for certain situations.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)