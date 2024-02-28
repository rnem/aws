# Practice Exam 12

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A user has launched a large EBS backed EC2 instance in the US-East-1a region. The user wants to achieve Disaster Recovery (DR) for that instance by creating another small instance in Europe. How can the user achieve DR?
     - A. Copy the instance from the US East region to the EU region.
     - B. Use the ‘Launch more like this’ option to copy the instance from one region to another.
     - C. Copy the running instance using the ‘Instance Copy’ command to the EU region.
     - D. Create an AMI of the instance and copy the AMI to the EU region. Then launch the instance from the EU AMI.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
2. How many relational database engines does RDS currently support?
     - A. Three: MySQL, Oracle and Microsoft SQL Server.
     - B. Just two: MySQL and Oracle.
     - C. Five: MySQL, PostgreSQL, MongoDB, Cassandra and SQLite.
     - D. Just one: MySQL.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
3. Are you able to integrate a multi-factor token service with the AWS Platform?
     - A. Yes, you can integrate private multi-factor token devices to authenticate users to the AWS platform.
     - B. No, you cannot integrate multi-factor token devices with the AWS platform.
     - C. Yes, using the AWS multi-factor token devices to authenticate users on the AWS platform.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
4. What is the default maximum number of MFA devices in use per AWS account (at the root account level)?
     - A. 1.
     - B. 5.
     - C. 15.
     - D. 10.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
5. Select the correct statement: Within Amazon EC2, when using Linux instances, the device name /dev/sda1 is […].
     - A. reserved for EBS volumes.
     - B. recommended for EBS volumes.
     - C. recommended for instance store volumes.
     - D. reserved for the root device.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
6. Does Amazon Route 53 support NS Records?
     - A. Yes, it supports Name Service records.
     - B. No.
     - C. It supports only MX records.
     - D. Yes, it supports Name Server records.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
7. Your web application front end consists of multiple EC2 instances behind an Elastic Load Balancer. You configured ELB to perform health checks on these EC2 instances, if an instance fails to pass health checks, which statement will be true?
     - A. The instance gets terminated automatically by the ELB.
     - B. The instance gets quarantined by the ELB for root cause analysis.
     - C. The instance is replaced automatically by the ELB.
     - D. The ELB stops sending traffic to the instance that failed its health check.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
8. George has launched three EC2 instances inside the US-East-1a zone with his AWS account. Ray has launched two EC2 instances in the US-East-1a zone with his AWS account. Which of the below mentioned statements will help George and Ray understand the Availability Zone (AZ) concept better?
     - A. All the instances of George and Ray can communicate over a private IP with a minimal cost.
     - B. The US-East-1a region of George and Ray can be different Availability Zones.
     - C. All the instances of George and Ray can communicate over a private IP without any cost.
     - D. The instances of George and Ray will be running in the same data centre.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
9. Once again your customers are concerned about the security of their sensitive data and with their latest enquiry ask about what happens to old storage devices on AWS. What would be the best answer to this question?
     - A. AWS reformats the disks and uses them again.
     - B. AWS uses the techniques detailed in DoD 5220.22-M to destroy data as part of the decommissioning process.
     - C. AWS uses their own proprietary software to destroy data as part of the decommissioning process.
     - D. AWS uses a 3rd party security organization to destroy data as part of the decommissioning process.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
10. Which of the following are characteristics of Amazon VPC subnets? (Choose 2 answers)
     - A. Each subnet spans at least 2 Availability Zones to provide a high-availability environment.
     - B. Each subnet maps to a single Availability Zone.
     - C. CIDR block mask of/25 is the smallest range supported.
     - D. By default, all subnets can route between each other, whether they are private or public.
     - E. Instances in a private subnet can communicate with the Internet only if they have an Elastic IP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, E</p>
    </details>
  
11. Which AWS instance address has the following characteristics? ‘If you stop an instance, its Elastic IP address is unmapped, and you must remap it when you restart the instance.’
     - A. Both A and B.
     - B. None of these.
     - C. VPC Addresses.
     - D. EC2 Addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
12. You are designing a data leak prevention solution for your VPC environment. You want your VPC Instances to be able to access software depots and distributions on the Internet for product updates. The depots and distributions are accessible via third party CONs by their URLs. You want to explicitly deny any other outbound connections from your VPC instances to hosts on the internet. Which of the following options would you consider?
     - A. Configure a web proxy server in your VPC and enforce URL-based ru les for outbound access Remove default routes.
     - B. Implement security groups and configure outbound rules to only permit traffic to software depots.
     - C. Move all your instances into private VPC subnets remove default routes from all routing tables and add specific routes to the software depots and distributions only.
     - D. Implement network access control lists to all specific destinations, with an Implicit deny as a rule.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
13. What is an isolated database environment running in the cloud (Amazon RDS) called?
     - A. DB Instance.
     - B. DB Unit.
     - C. DB Server.
     - D. DB Volume.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
14. A user is sending bulk emails using AWS SES. The emails are not reaching some of the targeted audience because they are not authorized by the ISPs. How can the user ensure that the emails are all delivered?
     - A. Send an email using DKIM with SE.
     - B. Send an email using SMTP with SE.
     - C. Open a ticket with AWS support to get it authorized with the IS.
     - D. Authorize the ISP by sending emails from the development account.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
15. What’s an ECU?
     - A. Extended Cluster User.
     - B. None of these.
     - C. Elastic Computer Usage.
     - D. Elastic Compute Unit.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
16. You would like to create a mirror image of your production environment in another region for disaster recovery purposes. Which of the following AWS resources do not need to be recreated in thesecond region? (Choose 2 answers)
     - A. Route 53 Record Sets.
     - B. IAM Roles.
     - C. Elastic IP Addresses (EIP).
     - D. EC2 Key Pairs.
     - E. Launch configurations.
     - F. Security Groups.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B</p>
    </details>
  
17. Which procedure for backing up a relational database on EC2 that is using a set of RAIDed EBS volumes for storage minimizes the time during which the database cannot be written to and results in a consistent backup?
     - A. 1. Detach EBS volumes, 2. Start EBS snapshot of volumes, 3. Re-attach EBS volumes.
     - B. 1. Stop the EC2 Instance. 2. Snapshot the EBS volumes.
     - C. 1. Suspend disk 1/0, 2. Create an image of the EC2 Instance, 3. Resume disk 1/0.
     - D. 1. Suspend disk 1/0, 2. Start EBS snapshot of volumes, 3. Resume disk 1/0.
     - E. 1. Suspend disk 1/0, 2. Start EBS snapshot of volumes, 3. Wait for snapshots to complete, 4. Resume disk 1/0.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
18. My Read Replica appears ‘stuck’ after a Multi-AZ failover and is unable to obtain or apply updates from the source DB Instance. What do I do?
     - A. You will need to delete the Read Replica and create a new one to rep lace it.
     - B. You will need to disassociate the DB Engine and re associate it.
     - C. The instance should be deployed to Single AZ and then moved to Multi-AZ once again.
     - D. You will need to delete the DB Instance and create a new one to replace it.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
19. You are setting up some IAM user policies and have also become aware that some services support resource-based permissions, which let you attach policies to the service’s resources instead of to IAM users or groups. Which of the below statements is true in regards to resource-level permissions?
     - A. All services support resource-level permissions for all actions.
     - B. Resource-level permissions are supported by Amazon CloudFront.
     - C. All services support resource-level permissions only for some actions.
     - D. Some services support resource-level permissions only for some actions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
20. You have some very sensitive data stored on AWS S3 and want to try every possible alternative to keeping it secure in regards to access control. What are the mechanisms available for access control on AWS S3?
     - A. (IAM) policies, Access Control Lists (ACLs), bucket policies, and query string authentication.
     - B. (IAM) policies, Access Control Lists (ACLs) and bucket policies.
     - C. Access Control Lists (ACLs), bucket policies, and query string authentication.
     - D. (IAM) policies, Access Control Lists (ACLs), bucket policies, query string authentication and encryption.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
21. You are implementing AWS Direct Connect. You intend to use AWS public service end points such as Amazon S3, across the AWS Direct Connect link. You want other Internet traffic to use your existing link to an Internet Service Provider. What is the correct way to configure AWS Direct connect for access to services such as Amazon S3?
     - A. Configure a public Interface on your AWS Direct Connect link. Configure a static route via your AWS Direct Connect link that points to Amazon S3 Advertise a default route to AWS using BGP.
     - B. Create a private interface on your AWS Direct Connect link. Configure a static route via your AWS Direct connect link that points to Amazon S3 Configure specific routes to your network in your VPC.
     - C. Create a public interface on your AWS Direct Connect link. Redistribute BGP routes into your existing routing infrastructure; advertise specific routes for your network to AWS.
     - D. Create a private interface on your AWS Direct connect link. Redistribute BGP routes into your existing routing infrastructure and advertise a default route to AWS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
22. What is the charge for the data transfer incurred in replicating data between your primary and standby?
     - A. No charge. It is free.
     - B. Double the standard data transfer charge.
     - C. Same as the standard data transfer charge.
     - D. Half of the standard data transfer charge.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
23. You are setting up your first Amazon Virtual Private Cloud (Amazon VPC) network so you decide you should probably use the AWS Management Console and the VPC Wizard. Which of the following is not an option for network architectures after launching the ‘Start VPC Wizard’ in Amazon VPC page on the AWS Management Console?
     - A. VPC with a Single Public Subnet Only.
     - B. VPC with a Public Subnet Only and Hardware VPN Access.
     - C. VPC with Public and Private Subnets and Hardware VPN Access.
     - D. VPC with a Private Subnet Only and Hardware VPN Access.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
24. True or False: A VPC contains multiple subnets, where each subnet can span multiple Availability Zones.
     - A. This is true only if requested during the set-up of VPC.
     - B. This is true.
     - C. This is false.
     - D. This is true only for US regions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
25. Amazon RDS automated backups and DB Snapshots are currently supported for only the […] storage engine.
     - A. InnoDB.
     - B. MyISAM.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
26. While signing in REST/ Query requests, for additional security, you should transmit your requests using Secure Sockets Layer (SSL) by using […].
     - A. HTTP.
     - B. Internet Protocol Security (IPsec).
     - C. TLS (Transport Layer Security).
     - D. HTTPS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
27. Out of the stripping options available for the EBS volumes, which one has the following disadvantage: ’Doubles the amount of 1/0 required from the instance to EBS compared to RAID 0, because you’re mirroring all writes to a pair of volumes, limiting how much you can stripe.’?
     - A. Raid 0.
     - B. RAID 1+0 (RAID 10).
     - C. Raid 1.
     - D. Raid.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
28. Can I encrypt connections between my application and my DB Instance using SSL?
     - A. Yes.
     - B. Only in VPC.
     - C. Only in certain regions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
29. Which of the following items are required to allow an application deployed on an EC2 instance to write data to a DynamoDB table? Assume that no security keys are allowed to be stored on the EC2 instance. (Choose 3 answers)
     - A. Create an IAM Role that allows write access to the DynamoDB table.
     - B. Add an IAM Role to a running EC2 instance.
     - C. Create an IAM User that al lows write access to the Dynamo DB table.
     - D. Add an IAM User to a running EC2 instance.
     - E. Launch an EC2 Instance with the IAM Role included in the launch configuration.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B, E</p>
    </details>
  
30. Identify a true statement about the On-Demand instances purchasing option provided by Amazon EC2.
     - A. Pay for the instances that you use by the hour, with no long-term commitments or up-front payments.
     - B. Make a low, one-time, up-front payment for an instance, reserve it for a one- or three-year term, and pay a significantly lower hourly rate for these instances.
     - C. Pay for the instances that you use by the hour, with long-term commitments or up-front payments.
     - D. Make a high, one-time, all-front payment for an instance, reserve it for a one- or three-year term, and pay a significantly higher hourly rate for these instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
31. When will you incur costs with an Elastic IP address (EIP)?
     - A. When an EIP is allocated.
     - B. When it is allocated and associated with a running instance.
     - C. When it is allocated and associated with a stopped instance.
     - D. Costs are incurred regardless of whether the ElP is associated with a running instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
32. IAM provides several policy templates you can use to automatically assign permissions to the groups you create. The […] policy template gives the Admins group permission to access all accountresources, except your AWS account information.
     - A. Read Only Access.
     - B. Power User Access.
     - C. AWS Cloud Formation Read Only Access.
     - D. Administrator Access.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
33. What does RRS stand for when talking about S3?
     - A. Redundancy Removal System.
     - B. Relational Rights Storage.
     - C. Regional Rights Standard.
     - D. Reduced Redundancy Storage.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
34. Can I change the EC2 security groups after an instance is launched in EC2-Classic?
     - A. Yes, you can change security groups after you launch an instance in EC2-Classic.
     - B. No, you cannot change security groups after you launch an instance in EC2-Classic.
     - C. Yes, you can only when you remove rules from a security group.
     - D. Yes, you can only when you add rules to a security group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
35. Please select the Amazon EC2 resource which cannot be tagged.
     - A. Images (AMIs, kernels, RAM disks).
     - B. Amazon EBS volumes.
     - C. Elastic IP addresses.
     - D. VPCs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
36. Does Route 53 support MX Records?
     - A. Yes.
     - B. It supports CNAME records, but not MX records.
     - C. No.
     - D. Only Primary MX records. Secondary MX records are not supported.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
37. Which of the following notification endpoints or clients are supported by Amazon Simple Notification Service? (Choose 2 answers)
     - A. Email.
     - B. Cloud Front distribution.
     - C. File Transfer Protocol.
     - D. Short Message Service.
     - E. Simple Network Management Protocol.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D</p>
    </details>
  
38. AWS Identity and Access Management is a web service that enables Amazon Web Services (AWS) customers to manage users and user permissions in AWS. In addition to supporting IAM user policies, some services support resource-based permissions. Which of the following services are supported by resource-based permissions?
     - A. Amazon SNS, and Amazon SQS and AWS Direct Connect.
     - B. Amazon S3 and Amazon SQS and Amazon ElastiCache.
     - C. Amazon S3, Amazon SNS, Amazon SQS, Amazon Glacier and Amazon EB
     - D. Amazon Glacier, Amazon SNS, and Amazon CloudWatch.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
39. What does the following policy for Amazon EC2 do? { ‘Statement’:[{ ‘Effect’: ‘Allow’, ‘Action’:’ec2: Describe<em>’, ‘Resource’:’</em>’ }] }
     - A. Allow users to use actions that start with ‘Describe’ over all the EC2 resources.
     - B. Share an AMI with a partner.
     - C. Share an AMI within the account.
     - D. Allow a group to only be able to describe, run, stop, start, and terminate instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
40. Which IAM role do you use to grant AWS Lambda permission to access a DynamoDB Stream?
     - A. Dynamic role.
     - B. Invocation role.
     - C. Execution role.
     - D. Event Source role.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
41. Can resource record sets in a hosted zone have a different domain suffix (for example, <www.blog>. acme.com and <www.acme.ca>)?
</www.acme.ca></www.blog>     - A. Yes, it can have for a maximum of three different TLDs.
     - B. Yes.
     - C. Yes, it can have depending on the TL.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
42. In Amazon Elastic Compute Cloud, which of the following is used for communication between instances in the same network (EC2-Classic or a VPC)?
     - A. Private IP addresses.
     - B. Elastic IP addresses.
     - C. Static IP addresses.
     - D. Public IP addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
43. A user is planning to host a mobile game on EC2 which sends notifications to active users on either high score or the addition of new features. The user should get this notification when he is online on his mobile device. Which of the below mentioned AWS services can help achieve this functionality?
     - A. AWS Simple Notification Service.
     - B. AWS Simple Email Service.
     - C. AWS Mobile Communication Service.
     - D. AWS Simple Queue Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
44. You need to create an Amazon Machine Image (AMI) for a customer for an application which does not appear to be part of the standard AWS AMI template that you can see in the AWS console. What are the alternative possibilities for creating an AMI on AWS?
     - A.  You can purchase an AMIs from a third party but cannot create your own AMI.
     - B.  You can purchase an AMIs from a third party or can create your own AMI.
     - C.  Only AWS can create AMIs and you need to wait till it becomes available.
     - D.  Only AWS can create AMIs and you need to request them to create one for you.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
45. Will I be charged if the DB instance is idle?
     - A. Yes.
     - B. Only is running in GovCloud.
     - C. Only if running in VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
46. Your company has been storing a lot of data in Amazon Glacier and has asked for an inventory of what is in there exactly. So you have decided that you need to download a vault inventory. Which of the following statements is incorrect in relation to Vault Operations in Amazon Glacier?
     - A. You can use Amazon Simple Notification Service (Amazon SNS) notifications to notify you when the job completes.
     - B. A vault inventory refers to the list of archives in a vault.
     - C. You can use Amazon Simple Queue Service (Amazon SQS) notifications to notify you when the job completes.
     - D. Downloading a vault inventory is an asynchronous operation.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
47. Your fortune 500 company has under taken a TCO analysis evaluating the use of Amazon S3 versus acquiring more hardware The outcome was that ail employees would be granted access to use Amazon S3 for storage of their personal documents. Which of the following will you need to consider so you can set up a solution that incorporates single sign-on from your corporate AD or LDAP directory and restricts access for each user to a designated user folder in a bucket? (Choose 3 answers)
     - A. Setting up a federation proxy or identity provider.
     - B. Using AWS Security Token Service to generate temporary tokens.
     - C. Tagging each folder in the bucket.
     - D. Configuring IAM role.
     - E. Setting up a matching IAM user for every user in your corporate directory that needs access to a folder in the bucket.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B, D</p>
    </details>
  
48. Your company policies require encryption of sensitive data at rest. You are considering the possible options for protecting data while storing it at rest on an EBS data volume, attached to an EC2 instance. Which of these options would allow you to encrypt your data at rest? (Choose 3 answers)
     - A. Implement third party volume encryption tools.
     - B. Do nothing as EBS volumes are encrypted by default.
     - C. Encrypt data inside your applications before storing it on EBS.
     - D. Encrypt data using native data encryption drivers at the file system level.
     - E. Implement SSL/TLS for all services running on the server.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C, D</p>
    </details>
  
49. A scope has been handed to you to set up a super fast gaming server and you decide that you will use Amazon DynamoDB as your database. For efficient access to data in a table, Amazon DynamoDB creates and maintains indexes for the primary key attributes. A secondary index is a data structure that contains a subset of attributes from a table, along with an alternate key to support Query operations. How many types of secondary indexes does DynamoDB support?
     - A. 2.
     - B. 16.
     - C. 4.
     - D. As many as you need.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
50. True or False: in Amazon Route 53, you can create a hosted zone for a top-level domain (TLD).
     - A. False.
     - B. False, Amazon Route 53 automatically creates it for you.
     - C. True, only if you send an XML document with a CreateHostedZoneRequest element for TLD.
     - D. True.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)