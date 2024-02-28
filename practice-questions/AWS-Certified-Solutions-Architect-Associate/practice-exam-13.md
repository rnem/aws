# Practice Exam 13

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. You want to use AWS Import/Export to send data from your S3 bucket to several of your branch offices. What should you do if you want to send 10 storage units to AWS?
     - A. Make sure your disks are encrypted prior to shipping.
     - B. Make sure you format your disks prior to shipping.
     - C. Make sure your disks are 1TB or more.
     - D. Make sure you submit a separate job request for each device.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
2. You are deploying an application to track GPS coordinates of delivery trucks in the United States. Coordinates are transmitted from each delivery t ruck once every three seconds. You need to design an architecture that will enable real-time processing of these coordinates from multiple consumers. Which service should you use to implement data ingestion?
     - A. Amazon Kinesis.
     - B. AWS Data Pipeline.
     - C. Amazon AppStream.
     - D. Amazon Simple Queue Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
3. While performing the volume status checks, if the status is insufficient-data, what does it mean?
     - A. The checks may still be in progress on the volume.
     - B. The check has passed.
     - C. The check has failed.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
4. Can you create IAM security credentials for existing users?
     - A. Yes, existing users can have security credentials associated with their account.
     - B. No, IAM requires that all users who have credentials set up are not existing users.
     - C. No, security credentials are created within GROUPS, and then users are associated to GROUPS at a later time.
     - D. Yes, but only IAM credentials, not ordinary security credentials.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
5. Can I move a Reserved Instance from one Region to another?
     - A. No.
     - B. Only if they are moving into GovCloud.
     - C. Yes.
     - D. Only if they are moving to US East from another region.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
6. A user has created an ELB with the Availability Zone US-East-1A. The user wants to add more zones to ELB to achieve High Availability. How can the user add more zones to the existing ELB?
     - A. The user should stop the ELB and add zones and instances as required.
     - B. The only option is to launch instances in different zones and add to ELB.
     - C. It is not possible to add more zones to the existing ELB.
     - D. The user can add zones on the fly from the AWS console.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
7. Amazon SWF is designed to help users
     - A. Design graphical user interface interactions.
     - B. Manage user identification and authorization.
     - C. Store Web content.
     - D. Coordinate synchronous and asynchronous tasks which are distributed and fault tolerant.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
8. Which technique can be used to integrate AWS IAM (Identity and Access Management) with an on-premise LDAP (Lightweight Directory Access Protocol) directory service?
     - A. Use an IAM policy that references the LDAP account identifiers and the AWS credentials.
     - B. Use SAML (Security Assertion Markup Language) to enable single sign-on between AWS and LDAP.
     - C. Use AWS Security Token Service from an identity broker to issue short-lived AWS credentials.
     - D. Use IAM roles to automatically rotate the IAM credentials when LDAP credentials are updated.
     - E. Use the LDAP credentials to restrict a group of users from launching specific EC2 instance types.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
9. You are building a solution for a customer to extend their on-premises data center to AWS. The customer requires a 50-Mbps dedicated and private connection to their VPC. Which AWS product or feature satisfies this requirement?
     - A. Amazon VPC peering.
     - B. Elastic IP Addresses.
     - C. AWS Direct Connect.
     - D. Amazon VPC virtual private gateway.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
10. A customer wants to leverage Amazon Simple Storage Service (S3) and Amazon Glacier as part of their backup and archive infrastructure. The customer plans to use third-party software to support this integration. Which approach will limit the access of the third party software to only the Amazon S3 bucket named ‘company-backup’?
     - A. A custom bucket policy limited to the Amazon S3 API in the Amazon Glacier archive ‘company backup’.
     - B. A custom bucket policy limited to the Amazon S3 API in ‘company-backup’.
     - C. A custom IAM user policy limited to the Amazon S3 API for the Amazon Glacier archive ‘company backup’.
     - D. A custom IAM user policy limited to the Amazon S3 API in ‘company-backup’.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
11. A user needs to run a batch process which runs for 10 minutes. This will only be run once, or at maximum twice, in the next month, so the processes will be temporary only. The process needs 15 X-Large instances. The process downloads the code from S3 on each instance when it is launched, and then generates a temporary log file. Once the instance is terminated, all the data will be lost. Which of the below mentioned pricing models should the user choose in this case?
     - A. Spot instance.
     - B. Reserved instance.
     - C. On-demand instance.
     - D. EBS optimized instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
12. You have been doing a lot of testing of your VPC Network by deliberately failing EC2 instances to test whether instances are failing over properly. Your customer who will be paying the AWS bill for all this asks you if he being charged for all these instances. You try to explain to him how the billing works on EC2 instances to the best of your knowledge. What would be an appropriate response to give to the customer in regards to this?
     - A. Billing commences when Amazon EC2 AMI instance is completely up and billing ends as soon as the instance starts to shutdown.
     - B. Billing only commences only after 1 hour of uptime and billing ends when the instance terminates.
     - C. Billing commences when Amazon EC2 initiates the boot sequence of an AMI instance and billing ends when the instance shuts down.
     - D. Billing commences when Amazon EC2 initiates the boot sequence of an AMI instance and billing ends as soon as the instance starts to shutdown.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
13. Refer to the architecture diagram above of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors Cloud Watch monitors the number of Job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in Cloud Watch alarms. You can use this architecture to implement which of the following features in a cost effective and efficient manner?
     - A. Reduce the overall lime for executing jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.
     - B. Implement fault tolerance against EC2 instance failure since messages would remain in SQS and worn can continue with recovery of EC2 instances implement fault tolerance against SQS failure by backing up messages to S3.
     - C. Implement message passing between EC2 instances within a batch by exchanging messages through SQS.
     - D. Coordinate number of EC2 instances with number of job requests automatically thus Improving cost effectiveness.
     - E. Handle high priority jobs before lower priority jobs by assigning a priority metadata fie ld to SQS messages.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
14. You are migrating an internal server on your DC to an EC2 instance with EBS volume. Your server disk usage is around 500GB so you just copied all your data to a 2TB disk to be used with AWS Import/Export. Where will the data be imported once it arrives at Amazon?
     - A. To a 2TB EBS volume.
     - B. To an S3 bucket with 2 objects of 1TB.
     - C. To an 500GB EBS volume.
     - D. To an S3 bucket as a 2TB snapshot.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
15. Is there any way to own a direct connection to Amazon Web Services?
     - A. You can create an encrypted tunnel to VPC, but you don’t own the connection.
     - B. Yes, it’s called Amazon Dedicated Connection.
     - C. No, AWS only allows access from the public Internet.
     - D. Yes, it’s called Direct Connect.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
16. Which of the following strategies can be used to control access to your Amazon EC2 instances?
     - A. DB security groups.
     - B. IAM policies.
     - C. None of these.
     - D. EC2 security groups.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
17. A client of yours has a huge amount of data stored on Amazon S3, but is concerned about someone stealing it while it is in transit. You know that all data is encrypted in transit on AWS, but which of the following is wrong when describing server-side encryption on AWS?
     - A. Amazon S3 server-side encryption employs strong multi-factor encryption.
     - B. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.
     - C. In server-side encryption, you manage encryption/decryption of your data, the encryption keys, and related tools.
     - D. Server-side encryption is about data encryption at rest―that is, Amazon S3 encrypts your data as it writes it to disks.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
18. When you run a DB Instance as a Multi-AZ deployment, the […] serves database writes and reads
     - A. secondary.
     - B. backup.
     - C. stand by.
     - D. primary.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
19. In Amazon EC2, how many Elastic IP addresses can you have by default?
     - A. 10.
     - B. 2.
     - C. 5.
     - D. 20.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
20. A user has created photo editing software and hosted it on EC2. The software accepts requests from the user about the photo format and resolution and sends a message to S3 to enhance the picture accordingly. Which of the below mentioned AWS services will help make a scalable software with the AWS infrastructure in this scenario?
     - A. AWS Simple Notification Service.
     - B. AWS Simple Queue Service.
     - C. AWS Elastic Transcoder.
     - D. AWS Glacier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
21. Using Amazon CloudWatch’s Free Tier, what is the frequency of metric updates which you receive?
     - A. 5 minutes.
     - B. 500 milliseconds.
     - C. 30 seconds
     - D. 1 minute.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
22. When you resize the Amazon RDS DB instance, Amazon RDS will perform the upgrade during the next maintenance window. If you want the upgrade to be performed now, rather than waiting for the maintenance window, specify the […] option.
     - A. Apply Now.
     - B. Apply Soon.
     - C. Apply This.
     - D. Apply Immediately.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
23. A user is running a webserver on EC2. The user wants to receive the SMS when the EC2 instance utilization is above the threshold limit. Which AWS services should the user configure in this case?
     - A.  AWS CloudWatch + AWS SQS.
     - B.  AWS CloudWatch + AWS SNS.
     - C.  AWS CloudWatch + AWS SES.
     - D.  AWS EC2 + AWS Cloudwatch.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
24. You’re running an application on-premises due to its dependency on non-x86 hardware and want to use AWS for data backup. Your backup application is only able to write to POSIX-compatible block based storage. You have 140TB of data and would like to mount it as a single folder on your file server Users must be able to access portions of this data while the backups are taking place. What backup solution would be most appropriate for this use case?
     - A. Use Storage Gateway and configure it to use Gateway Cached volumes.
     - B. Configure your backup software to use S3 as the target for your data backups.
     - C. Configure your backup software to use Glacier as the target for your data backups.
     - D. Use Storage Gateway and configure it to use Gateway Stored volumes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
25. What happens to Amazon EBS root device volumes, by default, when an instance terminates?
     - A.  Amazon EBS root device volumes are moved to IA
     - B.  Amazon EBS root device volumes are copied into Amazon RD
     - C.  Amazon EBS root device volumes are automatically deleted.
     - D.  Amazon EBS root device volumes remain in the database until you delete them.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
26. You require the ability to analyze a customer’s clickstream data on a website so they can do behavioral analysis. Your customer needs to know what sequence of pages and ads their customer clicked on. This data will be used in real time to modify the page layouts as customers click through the site to increase stickiness and advertising click-through. Which option meets the requirements for captioning and analyzing this data?
     - A. Log clicks in weblogs by URL store to Amazon S3, and then analyze with Elastic MapReduce.
     - B. Push web clicks by session to Amazon Kinesis and analyze behavior using Kinesis workers.
     - C. Write click events directly to Amazon Redshift and then analyze with SQL.
     - D. Publish web clicks by session to an Amazon SQS queue men periodically drain these events to Amazon RDS and analyze with SQL.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
27. What happens when you create a topic on Amazon SNS?
     - A. The topic is created, and it has the name you specified for it.
     - B. An ARN (Amazon Resource Name) is created.
     - C. You can create a topic on Amazon SQS, not on Amazon SNS.
     - D. This question doesn’t make sense.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
28. A company needs to deploy virtual desktops to its customers in a virtual private cloud, leveraging existing security controls. Which set of AWS services and features will meet the company’s requirements?
     - A. Virtual Private Network connection. AWS Directory Services, and Classic link.
     - B. Virtual Private Network connection. AWS Di rectory Services, and Amazon Workspaces.
     - C. AWS Directory Service, Amazon Workspaces, and AWS Identity and Access Management.
     - D. Amazon Elastic Compute Cloud, and AWS Identity and Access Management.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
29. You are designing a multi-platform web application for AWS The application will run on EC2 instances and will be accessed from PCs. tablets and smart phones Supported accessing platforms are Windows. MACOS. lOS and Android Separate sticky session and SSL certificate setups are required for different platform types which of the following describes the most cost effective and performance efficient architecture setup?
     - A. Setup a hybrid architecture to handle session state and SSL certificates on-prem and separate EC2 Instance groups running web applications for different platform types running in a VPC.
     - B. Set up one ELB for all platforms to distribute load among multiple instance under it Each EC2 instance implements ail functionality for a particular platform.
     - C. Set up two ELBs The first ELB handles SSL certificates for all platforms and the second ELB handles session stickiness for all platforms for each ELB run separate EC2 instance groups to handle the web application for each platform.
     - D. Assign multiple ELBS to an EC2 instance or group of EC2 instances running the common components of the web application, one ELB for each platform type Session stickiness and SSLtermination are done at the ELBs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
30. A company is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower Overall CPU resources for the web tier?
     - A. Amazon EBS volume.
     - B. Amazon S3.
     - C. Amazon EC2 instance store.
     - D. Amazon RD5 instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
31. Select the incorrect statement.
     - A. In Amazon EC2, the private IP addresses only returned to Amazon EC2 when the instance is stopped or terminated.
     - B. In Amazon VPC, an instance retains its private IP addresses when the instance is stopped.
     - C. In Amazon VPC, an instance does NOT retain its private IP addresses when the instance is stopped.
     - D. In Amazon EC2, the private IP address is associated exclusive ly with the instance for its lifetime.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
32. An organization has a statutory requirement to protect the data at rest for data stored in EBS volumes. Which of the below mentioned options can the organization use to achieve data protection?
     - A. Data replication.
     - B. Data encryption.
     - C. Data snapshot.
     - D. All the options listed here.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
33. A web design company currently runs several FTP servers that their 250 customers use to upload and download large graphic files They wish to move this system to AWS to make it more scalable, butthey wish to maintain customer privacy and Keep costs to a minimum. What AWS architecture would you recommend?
     - A. Ask their customers to use an S3 client instead of an FTP client. Create a single S3 bucket Create an IAM user for each customer Put the IAM Users in a Group that has an IAM policy that permits access to sub-directories within the bucket via use of the ‘username’ Policy variable.
     - B. Create a single S3 bucket with Reduced Redundancy Storage turned on and ask their customers to use an S3 client instead of an FTP client Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.
     - C. Create an auto-scaling group of FTP servers with a scaling policy to automatically scale-in when minimum network traffic on the auto-scaling group is below a given threshold. Load a central list of ftp users from S3 as part of the user Data startup script on each Instance.
     - D. Create a single S3 bucket with Requester Pays turned on and ask their customers to use an S3 client instead of an FTP client Create a bucket tor each customer with a Bucket Policy that permits access only to that one customer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
34. Amazon RDS DB snapshots and automated backups are stored in:
     - A. Amazon S3.
     - B. Amazon ECS Volume.
     - C. Amazon RDS.
     - D. Amazon EMR.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
35. Can Amazon S3 uploads resume on failure or do they need to restart?
     - A. Restart from beginning.
     - B. You can resume them, if you flag the ‘resume on fai lure’ option before uploading.
     - C. Resume on failure.
     - D. Depends on the file size.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
36. Prior to the introduction of this function, the HA feature provided redundancy and performance, but required that a failed/lost group member be […] reinstated.
     - A. automatically.
     - B. periodically.
     - C. manually.
     - D. continuosly.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
37. A company has a workflow that sends video files from their on-premise system to AWS for transcoding. They use EC2 worker instances that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?
     - A. SQS guarantees the order of the messages.
     - B. SQS synchronously provides transcoding output.
     - C. SQS checks the health of the worker instances.
     - D. SQS helps to facilitate horizontal scaling of encoding tasks.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
38. Which statement below best describes what thresholds you can set to trigger a CloudWatch Alarm?
     - A. Set a target value and choose whether the alarm will trigger when the value is greater than (&gt;), greater than or equal to (&gt;=), less than (&lt;), or less than or equal to (&lt;=) that value.
     - B. Thresholds need to be set in IAM not CloudWatch.
     - C. Only default thresholds can be set you can’t choose your own thresholds.
     - D. Set a target value and choose whether the alarm will trigger when the value hits this threshold.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
39. You are designing a web application that stores static assets in an Amazon Simple Storage Service (S3) bucket. You expect this bucket to immediately receive over 150 PUT requests per second. What should you do to ensure optimal performance?
     - A. Use multi-part upload.
     - B. Add a random prefix to the key names.
     - C. Amazon S3 will automatically manage performance at this scale.
     - D. Use a predictable naming scheme, such as sequential numbers or date time sequences, in the key names.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
40. What does Amazon EC2 provide?
     - A. Virtual servers in the Cloud.
     - B. A platform to run code (Java, PHP, Python), paying on an hourly basis.
     - C. Computer Clusters in the Cloud.
     - D. Physical servers, remotely managed by the customer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
41. A customer has a single 3-TB volume on-premises that is used to hold a large repository of images and print layout files. This repository is growing at 500 GB a year and must be presented as a single logical volume. The customer is becoming increasingly constrained with their local storage capacity and wants an off-site backup of this data, while maintaining low-latency access to their frequently accessed data. Which AWS Storage Gateway configuration meets the customer requirements?
     - A. Gateway-Cached volumes with snapshots scheduled to Amazon S3.
     - B. Gateway-Stored volumes with snapshots scheduled to Amazon S3.
     - C. Gateway-Virtual Tape Library with snapshots to Amazon S3.
     - D. Gateway-Virtual Tape Library with snapshots to Amazon Glacier.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
42. You are architecting an auto-scalable batch processing system using video processing pipelines and Amazon Simple Queue Service (Amazon SQS) for a customer. You are unsure of the limitations of SQS and need to find out. What do you think is a correct statement about the limitations of Amazon SQS?
     - A. It supports an unlimited number of queues but a limited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 weeks.
     - B. It supports an unlimited number of queues and unlimited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 days.
     - C. It supports an unlimited number of queues but a limited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 days.
     - D. It supports an unlimited number of queues and unlimited number of messages per queue for each user but automatically deletes messages that have been in the queue for more than 4 weeks.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
43. Which Amazon service can I use to define a virtual network that closely resembles a traditional data center?
     - A. Amazon VPC.
     - B. Amazon Service Bus.
     - C. Amazon EMR.
     - D. Amazon RDS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
44. Select the correct set of options. These are the initial settings for the default security group:
     - A. Allow no inbound traffic, Allow all outbound traffic and Allow instances associated with this security group to talk to each other.
     - B. Allow all inbound traffic, Allow no outbound traffic and Allow instances associated with this security group to talk to each other.
     - C. Allow no inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other.
     - D. Al low all inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
45. You need to migrate a large amount of data into the cloud that you have stored on a hard disk and you decide that the best way to accomplish this is with AWS Import/Export and you mail the hard disk to AWS. Which of the following statements is incorrect in regards to AWS Import/Export?
     - A. It can export from Amazon S3.
     - B. It can Import to Amazon Glacier.
     - C. It can export from Amazon Glacier.
     - D. It can Import to Amazon EBS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
46. Can I control if and when MySQL based RDS Instance is upgraded to new supported versions?
     - A. No.
     - B. Only in VPC.
     - C. Yes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
47. If I have multiple Read Replicas for my master DB Instance and I promote one of them, what happens to the rest of the Read Replicas?
     - A. The remaining Read Replicas will still replicate from the older master DB Instance.
     - B. The remaining Read Replicas will be deleted.
     - C. The remaining Read Replicas will be combined to one read replica.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
48. A user is running a batch process which runs for 1 hour every day. Which of the below mentioned options is the right instance type and costing model in this case if the user performs the same task for the whole year?
     - A. EBS backed instance with on-demand instance pricing.
     - B. EBS backed instance with heavy utilized reserved instance pricing.
     - C. EBS backed instance with low utilized reserved instance pricing.
     - D. Instance store backed instance with spot instance pricing.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
49. You are in the process of building an online gaming site for a client and one of the requirements is that it must be able to process vast amounts of data easily. Which AWS Service would be very helpful in processing all this data?
     - A. Amazon S3.
     - B. AWS Data Pipeline.
     - C. AWS Direct Connect.
     - D. Amazon EMR.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
50. Your team has a tomcat-based Java application you need to deploy into development, test and production environments. After some research, you opt to use Elastic Beanstalk due to its tight integration with your developer tools and RDS due to its ease of management. Your QA team lead points out that you need to roll a sanitized set of production data into your environment on a nightly basis. Similarly, other software teams in your org want access to that same restored data via their EC2 instances in your VPC. The optimal setup for persistence and security that meets the above requirements would be the following:
     - A. Create your RDS instance as part of your Elastic Beanstalk definition and alter its security group to allow access to it from hosts in your application subnets.
     - B. Create your RDS instance separately and add its IP address to your application’s DB connection strings in your code Alter its security group to allow access to it from hosts within your VPC’s IPaddress block.
     - C. Create your RDS instance separately and pass its DNS name to your app’s DB connection string as an environment variable. Create a security group for client machines and add it as a valid source for DB traffic to the security group of the RDS instance itself.
     - D. Create your RDS instance separately and pass its DNS name to your’s DB connection string as an environment variable Alter its security group to allow access to It from hosts in your application subnets.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
    
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)