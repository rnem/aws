# Practice Exam 6

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Which Amazon Elastic Compute Cloud feature can you query from within the instance to access instance properties?
     - A. Instance user data.
     - B. Resource tags.
     - C. Instance metadata.
     - D. Amazon Machine Image.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
2. Making your snapshot public shares all snapshot data with everyone. Can the snapshots with AWS Market place product codes be made public?
     - A. Yes.
     - B. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
3. Which service enables AWS customers to manage users and permissions in AWS?
     - A. AWS Access Control Service (ACS).
     - B. AWS Identity and Access Management (IAM).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
4. You have launched an EC2 instance with four (4) 500 GB EBS Provisioned IOPS volumes attached. The EC2 instance is EBS-Optimized and supports 500 Mbps throughput between EC2 and EBS. The four EBS volumes are configured as a single RAID 0 device, and each Provisioned IOPS volume is provisioned with 4,000IOPS (4,000 16KB reads or writes), for a total of 16,000 random IOPS on the instance. The EC2 instance initially delivers the expected 16,000 IOPS random read and write performance. Sometime later, in order to increase the total random I/O performance of the instance, you add an additional two 500 GB EBS Provisioned IOPS volumes to the RAID. Each volume is provisioned to 4,000 IOPs like the original four, for a total of 24,000 IOPS on the EC2 instance. Monitoring shows that the EC2 instance CPU utilization increased from 50% to 70%, but the total random IOPS measured at the instance level does not increase at all. What is the problem and a valid solution?
     - A. Larger storage volumes support higher Provisioned IOPS rates; increase the provisioned volume storage of each of the 6 EBS volumes to 1TB.
     - B. The EBS-Optimized throughput limits the total IOPS that can be utilized; use an EBS Optimized instance that provides larger throughput. Mo
     - C. Small block sizes cause performance degradation, limiting the I/O throughput; configure the instance device driver and filesystem to use 64KB blocks to increase throughput.
     - D. The standard EBS Instance root volume limits the total IOPS rate; change the instance root volume to also be a 500GB 4,000 Provisioned IOPS volume.
     - E. RAID 0 only scales linearly to about 4 devices; use RAID 0 with 4 EBS Provisioned IOPS volumes, but increase each Provisioned IOPS EBS volume to 6,000 IOPS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
5. A user has configured a website and launched it using the Apache web server on port 80. The user is using ELB with the EC2 instances for Load Balancing. What should the user do to ensure that the EC2 instances accept requests only from ELB?
     - A. Configure the security group of EC2, which allows access to the ELB source security group.
     - B. Configure the EC2 instance so that it only listens on the ELB port.
     - C. Open the port for an ELB static IP in the EC2 security group.
     - D. Configure the security group of EC2, which allows access only to the ELB listener.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
6. You’re trying to delete an SSL certificate from the IAM certificate store, and you’re getting the message ’Certificate: &lt;certificate&lt; span=’’&gt;-id&gt; is being used by CloudFront.’ Which of the following statements is probably the reason why you are getting this error?
     - A. Before you can delete an SSL certificate, you need to either rotate SSL certificates or revert from using a custom SSL certificate to using the default CloudFront certificate.
     - B. You can’t delete SSL certificates. You need to request it from AW.
     - C. Before you can delete an SSL certificate, you need to set up the appropriate access level in IAM. Before you can delete an SSL certificate you need to set up https on your server.
     - D. Before you can delete an SSL certificate you need to set up https on your server.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
7. Which of the following is correct in regards to those security groups?
     - A. A security group that has port 22 (for SSH) or port 3389 (for RDP) open to your network.
     - B. A security group that has no ports open to your network.
     - C. A security group that has only port 3389 (for RDP) open to your network.
     - D. A security group that has only port 22 (for SSH) open to your network.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
8. How should they architect their solution to achieve these goals?
     - A. Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see an traffic across the VPC. Configure servers running in the VPC using the host-based ‘route’ commands to send all traffic through the platform to a scalable virtualized IDS/IP.
     - B. Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.
     - C. Configure servers running in the VPC using the host-based ‘route’ commands to send all traffic through the platform to a scalable virtualized IDS/IP.
     - D. Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
9. What is an effective method to mitigate this?
     - A. Remove public read access and use signed URLs with expiry dates.
     - B. Use Cloud Front distributions for static content.
     - C. Block the IPs of the offending websites in Security Groups.
     - D. Store photos on an EBS volume of the web server.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
10. Which of the following is not a true statement relating to the performance of your EBS volumes?
     - A. Frequent snapshots provide a higher level of data durability and they will not degrade the performance of your application while the snapshot is in progress.
     - B. General Purpose (SSD) and Provisioned IOPS (SSD) volumes have a throughput limit of 128 MB/s per volume.
     - C. There is a relationship between the maximum performance of your EBS volumes, the amount of I/O you are driving to them, and the amount of time it takes for each transaction to complete.
     - D. There is a 5 to 50 percent reduction in IOPS when you first access each block of data on a newly created or restored EBS volume.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
11. Changes to the backup window take effect […].
     - A. from the next billing cycle.
     - B. after 30 minutes.
     - C. immediately.
     - D. after 24 hours.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
12. Location of Instances are […].
     - A. regional.
     - B. based on Availability Zone.
     - C. global.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
13. You log in to IAM on your AWS console and notice the following message. ‘Delete your root access keys.’ Why do you think IAM is requesting this?
     - A. Because the root access keys will expire as soon as you log out.
     - B. Because the root access keys expire after 1 week.
     - C. Because the root access keys are the same for all users.
     - D. Because they provide unrestricted access to your AWS resources.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
14. What is the minimum charge for the data transferred between Amazon RDS and Amazon EC2 Instances in the same Availability Zone?
     - A. USD 0.10 per GB.
     - B. No charge. It is free.
     - C. USD 0.02 per GB
     - D. USD 0.01 per GB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
15. In DynamoDB, could you use IAM to grant access to Amazon DynamoDB resources and API actions?
     - A. In DynamoDB there is no need to grant access.
     - B. Depended to the type of access.
     - C. Yes.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
16. The common use cases for DynamoDB Fine-Grained Access Control (FGAC) are cases in which the end user wants […].
     - A. to change the hash keys of the table directly.
     - B. to check if an IAM policy requires the hash keys of the tables directly.
     - C. to read or modify any code commit key of the table directly, without a middle-tier service.
     - D. to read or modify the table directly, without a middle-tier service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
17. What are the initial settings of an user created security group?
     - A. Allow all inbound traffic and Allow no outbound traffic.
     - B. Al low no inbound traffic and Al low no outbound traffic.
     - C. Al low no inbound traffic and Al low all outbound traffic.
     - D. Allow all inbound traffic and Allow all outbound traffic.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
18. Which one of the following answers is not a possible state of Amazon CloudWatch Alarm?
     - A. INSUFFICIENT_DATA.
     - B. ALARM.
     - C. OK.
     - D. STATUS_CHECK_FAILED.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
19. […] let you categorize your EC2 resources in different ways, for example, by purpose, owner, or environment.
     - A. wildcards.
     - B. pointers.
     - C. tags.
     - D. special filters.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
20. Which of the below mentioned options is not available when an instance is launched by Auto Scaling with EC2 Classic?
     - A. Public IP.
     - B. Elastic IP.
     - C. Private DNS.
     - D. Private IP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
21. You have a lot of data stored in the AWS Storage Gateway and your manager has come to you asking about how the billing is calculated, specifically the Virtual Tape Shelf usage. What would be a correct response to this?
     - A. You are billed for the virtual tape data you store in Amazon Glacier and are billed for the size of the virtual tape.
     - B. You are billed for the virtual tape data you store in Amazon Glacier and billed for the portion of virtual tape capacity that you use, not for the size of the virtual tape.
     - C. You are billed for the virtual tape data you store in Amazon S3 and billed for the portion of virtual tape capacity that you use, not for the size of the virtual tape.
     - D. You are billed for the virtual tape data you store in Amazon S3 and are billed for the size of the virtual tape.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
22. True or False: The new DB Instance that is created when you promote a Read Replica retains the backup window period.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
23. […] is a fast, flexible, fully managed push messaging service.
     - A. Amazon SNS.
     - B. Amazon SES.
     - C. Amazon SQS.
     - D. Amazon FPS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
24. You are tasked with setting up a Linux bastion host for access to Amazon EC2 instances running in your VPC. Only clients connecting from the corporate external public IP address 72.34.51.100 should have SSH access to the host. Which option will meet the customer requirement?
     - A. Security Group Inbound Rule: Protocol – TC.
     - B. Port Range- 22, Source 72.34.51. 100/32.
     - C. Security Group Inbound Rule: Protocol – UDP, Port Range- 22, Source 72.34.51.100/32.
     - D. Network ACL Inbound Rule: Protocol – UDP, Port Range- 22, Source 72.34.51.100/32.
     - E. Network ACL Inbound Rule: Protocol – TCP, Port Range-22, Source 72.34.51.100/0.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
25. How can you secure data at rest on an EBS volume?
     - A. Attach the volume to an instance using EC2’s SSL interface.
     - B. Write the data randomly instead of sequentially.
     - C. Encrypt the volume using the S3 server-side encryption service.
     - D. Create an IAM policy that restricts read and write access to the volume.
     - E. Use an encrypted file system on top of the EBS volume.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: E</p>
    </details>
  
26. Is there a method in the IAM system to al low or deny access to a specific instance?
     - A. Only for VPC based instances.
     - B. Yes.
     - C. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
27. Using Amazon IAM, can I give permission based on organizational groups?
     - A. Yes but only in certain cases.
     - B. Yes.
     - C. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
28. Which services allow the customer to retain full administrative privileges of the underlying EC2 instances? (Choose 2 answers)
     - A. Amazon Relational Database Service.
     - B. Amazon Elastic Map Reduce.
     - C. Amazon ElastiCache.
     - D. Amazon DynamoDB.
     - E. AWS Elastic Beanstalk.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, E</p>
    </details>
  
29. While launching an RDS DB instance, on which page I can select the Availability Zone?
     - A. REVIEW.
     - B. DB INSTANCE DETAILS.
     - C. MANAGEMENT OPTIONS.
     - D. ADDITIONAL CONFIGURATION.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
30. You are responsible for a legacy web application whose server environment is approaching end of life. You would like to migrate this application to AWS as quickly as possible, since the application environment currently has the following limitations. The VM’s single 10GB VMDK is almost full Me virtual network interface still uses the 10Mbps driver, which leaves your 100Mbps WAN connection completely underutilized. It is currently running on a highly customized. Windows VM within a VMware environment: You do not have me installation media. This is a mission critical application with an RTO (Recovery Time Objective) of 8 hours. RPO (Recovery Point Objective) of 1 hour. How could you best migrate this application to AWS while meeting your business continuity requirements?
     - A. Use the EC2 VM Import Connector for vCenter to import the VM into EC2.
     - B. Use Import/Export to import the VM as an ESS snapshot and attach to EC2.
     - C. Use S3 to create a backup of the VM and restore the data into EC2.
     - D. Use me ec2-bundle-instance API to Import an Image of the VM into EC2.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
31. You are setting up some EBS volumes for a customer who has requested a setup which includes a RAID (redundant array of inexpensive disks). AWS has some recommendations for RAID setups. Which RAID setup is not recommended for Amazon EBS?
     - A. RAID 5 only.
     - B. RAID 5 and RAID 6.
     - C. RAID 1 only.
     - D. RAID 1 and RAID 6.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
32. Much of your company’s data does not need to be accessed often, and can take several hours for retrieval time, so it’s stored on Amazon Glacier. However someone within your organization has expressed concerns that his data is more sensitive than the other data, and is wondering whether the high level of encryption that he knows is on S3 is also used on the much cheaper Glacier service. Which of the following statements would be most applicable in regards to this concern?
     - A. There is no encryption on Amazon Glacier, that’s why it is cheaper.
     - B. Amazon Glacier automatically encrypts the data using AES-128 a lesser encryption method than Amazon S3 but you can change it to AES-256 if you are willing to pay more.
     - C. Amazon Glacier automatically encrypts the data using AES-256, the same as Amazon S3.
     - D. Amazon Glacier automatically encrypts the data using AES-128 a lesser encryption method than Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
33. Can I use Provisioned IOPS with VPC?
     - A. Only Oracle based RDS.
     - B. No.
     - C. Only with MSSQL based RDS.
     - D. Yes for all RDS instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
34. To ensure failover capabilities, consider using a […] for incoming traffic on a network interface.
     - A. primary public IP.
     - B. secondary private IP.
     - C. secondary public IP.
     - D. add on secondary IP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
35. By default, EBS volumes that are created and attached to an instance at launch are deleted when that instance is terminated. You can modify this behavior by changing the value of the flag […] to false when you launch the instance.
     - A. Delete On Termination.
     - B. Remove On Deletion.
     - C. Remove On Termination.
     - D. Terminate On Deletion.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
36. Which AWS service helps this functionality?
     - A. AWS Simple Queue Service.
     - B. AWS Simple Notification Service.
     - C. AWS Simple Workflow Service.
     - D. AWS Simple Email Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
37. Which of the below statements would be an incorrect response to your customers enquiry?
     - A. Amazon EMR customers can choose to send data to Amazon S3 using the HTTPS protocol for secure transmission.
     - B. Amazon S3 provides authentication mechanisms to ensure that stored data is secured against unauthorized access.
     - C. Every packet sent in the AWS network uses Internet Protocol Security (IPsec).
     - D. Customers may encrypt the input data before they upload it to Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
38. The one-time payment for Reserved Instances is […] refundable if the reservation is cancelled.
     - A. always.
     - B. in some circumstances.
     - C. never.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
39. Is it possible to get a history of all EC2 API calls made on your account for security analysis and operational troubleshooting purposes?
     - A. Yes, by default, the history of your API calls is logged.
     - B. Yes, you should turn on the CloudTrail in the AWS console.
     - C. No, you can only get a history of VPC API calls.
     - D. No, you cannot store history of EC2 API calls on Amazon.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
40. The Trusted Advisor service provides insight regarding which four categories of an AWS account?
     - A. Security, fault tolerance, high availability, and connectivity.
     - B. Security, access control, high availability, and performance.
     - C. Performance, cost optimization, security, and fault tolerance.
     - D. Performance, cost optimization, access control, and connectivity.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
41. An AWS customer runs a public blogging website. The site users upload two million blog entries a month. The average blog entry size is 200 KB. The access rate to blog entries drops to negligible 6 months after publication and users rarely access a blog entry 1 year after publication. Additionally, blog entries have a high update rate during the first 3 months following publication, this drops to noupdates after 6 months. The customer wants to use CloudFront to improve his user’s load times. Which of the following recommendations would you make to the customer?
     - A. Duplicate entries into two different buckets and create two separate CloudFront distributions where S3 access is restricted only to Cloud Front identity.
     - B. Create a CloudFront distribution with ’US’ Europe price class for US/ Europe users and a different CloudFront distribution with Al l Edge Locations’ for the remaining users.
     - C. Create a CloudFront distribution with S3 access restricted only to the CloudFront identity and partition the blog entry’s location in S3 according to the month it was uploaded to be used withCloudFront behaviors.
     - D. Create a CloudFronl distribution with Restrict Viewer Access Forward Query string set to true and minimum TTL of 0.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
42. Your supervisor has asked you to build a simple file synchronization service for your department. He doesn’t want to spend too much money and he wants to be notified of any changes to files by email. What do you think would be the best Amazon service to use for the email solution?
     - A. Amazon SES.
     - B. Amazon CloudSearch.
     - C. Amazon SWF.
     - D. Amazon AppStream.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
43. What are the Amazon EC2 API tools?
     - A. They don’t exist. The Amazon EC2 AMI tools, instead, are used to manage permissions.
     - B. Command-line tools to the Amazon EC2 web service.
     - C. They are a set of graphical tools to manage EC2 instances.
     - D. They don’t exist. The Amazon API tools are a client interface to Amazon Web Services.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
44. Your customer wishes to deploy an enterprise application to AWS which will consist of several web servers, several application servers and a small (50GB) Oracle database information is stored, both in the database and the file systems of the various servers. The backup system must support database recovery whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?
     - A. Backup RDS using automated daily DB backups Backup the EC2 instances using AMIs and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore.
     - B. Backup RDS using a Multi-AZ Deployment Backup the EC2 instances using Amis, and supplement by copying file system data to S3 to provide file-level restore.
     - C. Backup RDS using automated daily DB backups Backup the EC2 instances using EBS snapshots and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file-level restore.
     - D. Backup RDS database to S3 using Oracle RMAN Backup the EC2 instances using Amis, and supplement with EBS snapshots for individual volume restore.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
45. You are architecting a highly-scalable and reliable web application which will have a huge amount of content. You have decided to use Cloudfront as you know it will speed up distribution of your static and dynamic web content and know that Amazon CloudFront integrates with Amazon CloudWatch metrics so that you can monitor your web application. Because you live in Sydney you have chosen the the Asia Pacific (Sydney) region in the AWS console. However you have set up this up but no CloudFront metrics seem to be appearing in the CloudWatch console. What is the most likely reason from the possible choices below for this?
     - A. Metrics for CloudWatch are available only when you choose the same region as the application you are monitoring.
     - B. You need to pay for CloudWatch for it to become active.
     - C. Metrics for CloudWatch are available only when you choose the US East (Virginia).
     - D. Metrics for CloudWatch are not available for the Asia Pacific region as yet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
46. Is the SQL Server Audit feature supported in the Amazon RDS SQL Server engine?
     - A. Yes.
     - B. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
47. What is the command line instruction for running the remote desktop client in Windows?
     - A. desk.cpl.
     - B. mstsc.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
48. Which of the following cannot be used in Amazon EC2 to control who has access to specific Amazon EC2 instances?
     - A. Security Groups.
     - B. IAM System.
     - C. SSH keys.
     - D. Windows passwords.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
49. What is the charge for the data transfer incurred in replicating data between your primary and standby?
     - A. Same as the standard data transfer charge.
     - B. Double the standard data transfer charge.
     - C. No charge. It is free.
     - D. Half of the standard data transfer charge.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
50. You have a load balancer configured for VPC, and all back-end Amazon EC2 instances are in service. However, your web browser times out when connecting to the load balancer’s DNS name. Which options are probable causes of this behavior? (Choose 2 answers)
     - A. The load balancer was not configured to use a public subnet with an Internet gateway configured.
     - B. The Amazon EC2 instances do not have a dynamically allocated private IP address.
     - C. The security groups or network ACLs are not property configured for web traffic.
     - D. The load balancer is not configured in a private subnet with a NAT instance.
     - E. The VPC does not have a VGW configured.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C</p>
    </details>
   
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)