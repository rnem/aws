# Practice Exam 11

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Which of the following are t rue regarding AWS CloudTrail? (Choose 3 answers)
     - A. CloudTrail is enabled globally.
     - B. CloudTrail is enabled by default.
     - C. CloudTrail is enabled on a per-region basis.
     - D. CloudTrail is enabled on a per-service basis.
     - E. Logs can be delivered to a single Amazon S3 bucket for aggregation.
     - F. Logs can only be processed and delivered to the region in which they are generated.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, D, E</p>
    </details>
  
2. If you’re unable to connect via SSH to your EC2 instance, which of the following should you check and possibly correct to restore connectivity?
     - A.  Adjust Security Group to permit egress traffic over TCP port 443 from your IP.
     - B. Configure the JAM role to permit changes to security group settings.
     - C. Modify the instance security group to allow ingress of ICMP packets from your IP.
     - D. Adjust the instance’s Security Group to permit ingress traffic over port 22 from your IP.
     - E. Apply the most recently released Operating System security patches.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
3. A major finance organisation has engaged your company to set up a large data mining application. Using AWS you decide the best service for this is Amazon Elastic Map Reduce (EMR) which you know uses Hadoop. Which of the following statements best describes Hadoop?
     - A. Hadoop is 3rd Party software which can be installed using AMI.
     - B. Hadoop is an open source python web framework.
     - C. Hadoop is an open source Java software framework.
     - D. Hadoop is an open source javascript framework.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
4. A customer has established an AWS Direct Connect connection to AWS. The link is up and routes are being advertised from the customer’s end, however the customer is unable to connect from EC2 instances inside its VPC to servers residing in its datacenter. Which of the following options provide a viable solution to remedy this situation? (Choose 2 answers)
     - A. Add a route to the route table with an IPsec VPN connection as the target.
     - B. Enable route propagation to the virtual pinnate gateway (VGW).
     - C. Enable route propagation to the customer gateway (CGW).
     - D. Modify the route table of all Instances using the ‘route’ command.
     - E. Modify the Instances VPC subnet route table by adding a route back to the customer’s on-premises environment.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, E</p>
    </details>
  
5. While creating a network in the VPC, which of the following is true of a NAT device?
     - A.  You have to administer the NAT Gateway Service provided by AW
     - B.  You can choose to use any of the three kinds of NAT devices offered by AWS for special purposes.
     - C.  You can use a NAT device to enable instances in a private subnet to connect to the Internet.
     - D.  You are recommended to use AWS NAT instances over NAT gateways, as the instances provide better availability and bandwidth.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
6. Which of the following statements is NOT true about using Elastic IP Address (EIP) in EC2-Classic and EC2-VPC platforms?
     - A. In the EC2-VPC platform, the Elastic IP Address (EIP) does not remain associated with the instance when you stop it.
     - B. In the EC2-Classic platform, stopping the instance disassociates the Elastic IP Address (EIP) from it.
     - C. In the EC2-VPC platform, if you have attached a second network interface to an instance, when you disassociate the Elastic IP Address (EIP) from that instance, a new public IP address is not assigned to the instance automatically; you’ll have to associate an EIP with it manually.
     - D. In the EC2-Classic platform, if you disassociate an Elastic IP Address (EIP) from the instance, the instance is automatically assigned a new public IP address within a few minutes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
7. A user has hosted an application on EC2 instances. The EC2 instances are configured with ELB and Auto Scaling. The application server session time out is 2 hours. The user wants to configure connection draining to ensure that all in-flight requests are supported by ELB even though the instance is being deregistered. What time out period should the user specify for connection draining?
     - A. 1 hour.
     - B. 30 minutes.
     - C. 5 minutes.
     - D. 2 hours.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
8. What does the following command do with respect to the Amazon EC2 security groups? ec2-create-group CreateSecurityGroup
     - A. Groups the user created security groups in to a new group for easy access.
     - B. Creates a new security group for use with your account.
     - C. Creates a new group inside the security group.
     - D. Creates a new rule inside the security group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
9. You are in the process of moving your friend’s WordPress site onto AWS to try and save him some money, and you have told him that he should probably also move his domain name. He asks why he can’t leave his domain name where it is and just have his infrastructure on AWS. What would be an incorrect response to his question?
     - A. Route 53 offers low query latency for your end users.
     - B. Route 53 is designed to automatically answer queries from the optimal location depending on network conditions.
     - C. The globally distributed nature of AWS’s DNS servers helps ensure a consistent ability to route your end users to your application.
     - D. Route 53 supports Domain Name System Security Extensions (DNSSEC).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
10. Which of the following are characteristics of a reserved instance? (Choose 3 answers)
     - A. It can be migrated across Availability Zones.
     - B. It is specific to an Amazon Machine Image (AMI).
     - C. It can be applied to instances launched by Auto Scaling.
     - D. It is specific to an instance Type.
     - E. It can be used to lower Total Cost of Ownership (TCO) of a system.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D, E</p>
    </details>
  
11. A user has defined an AutoScaling termination policy to first delete the instance with the nearest billing hour. AutoScaling has launched 3 instances in the US-East-1A region and 2 instances in the US-East-1B region. One of the instances in the US-East-1B region is running nearest to the billing hour. Which instance will AutoScaling terminate first while executing the termination action?
     - A. Random Instance from US-East-1A.
     - B. Instance with the nearest billing hour in US-East-1B.
     - C. Instance with the nearest billing hour in US-East-1A.
     - D. Random instance from US-East-1B.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
12. You have an environment that consists of a public subnet using Amazon VPC and 3 instances that are running in this subnet. These three instances can successfully communicate with other hosts on the Internet. You launch a fourth instance in the same subnet, using the same AMI and security group configuration you used for the others, but find that this instance cannot be accessed from the internet. What should you do to enable Internet access?
     - A. Deploy a NAT instance into the public subnet.
     - B. Assign an Elastic IP address to the fourth instance.
     - C. Configure a publically routable IP Address in the host OS of the fourth instance.
     - D. Modify the routing table for the public subnet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
13. What does the ‘Server Side Encryption’ option on Amazon S3 provide?
     - A. It provides an encrypted virtual disk in the Cloud.
     - B. It doesn’t exist for Amazon S3, but only for Amazon EC2.
     - C. It encrypts the files that you send to Amazon S3, on the server side.
     - D. It allows to upload fi les using an SSL endpoint, for a secure transfer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
14. What is a placement group?
     - A. A collection of Auto Scaling groups in the same region.
     - B. A feature that enables EC2 instances to interact with each other via high bandwidth, low latency connections.
     - C. A collection of authorized CloudFront edge locations for a distribution.
     - D. A collection of Elastic Load Balancers in the same Region or Availability Zone.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
15. You are checking the workload on some of your General Purpose (SSD) and Provisioned IOPS (SSD) volumes and it seems that the I/O latency is higher than you require. You should probably check the […] to make sure that your application is not trying to drive more IOPS than you have provisioned.
     - A. amount of IOPS that are available.
     - B. acknowledgement from the storage subsystem.
     - C. average queue length.
     - D. time it takes for the I/O operation to complete.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
16. Within the IAM service a GROUP is regarded as a:
     - A. A collection of AWS accounts.
     - B. It’s the group of EC2 machines that gain t he permissions specified in the GROUP.
     - C. There’s no GROUP in IAM, but only USERS and RESOURCES.
     - D. A collection of users.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
17. Doug has created a VPC with CIDR 10.201.0.0/16 in his AWS account. in this VPC he has created a public subnet with CIDR block 10.201.31.0/24. While launching a new EC2 from the console, he is not able to assign the private IP address 10.201.31.6 to this instance. Which is the most likely reason for this issue?
     - A. Private IP address 10.201.31.6 is blocked via ACLs in Amazon infrastructure as a part of platform security.
     - B. Private address IP 10.201.31.6 is currently assigned to another interface.
     - C. Private IP address 10.201.31.6 is not part of the associated subnet’s IP address range.
     - D. Private IP address 10.201.31.6 is reserved by Amazon for IP networking purposes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
18. A user is planning to make a mobile game which can be played online or offline and will be hosted on EC2. The user wants to ensure that if someone breaks the highest score or they achieve some milestone they can inform all their colleagues through email. Which of the below mentioned AWS services helps achieve this goal?
     - A. AWS Simple Workflow Service.
     - B. AWS Simple Email Service.
     - C. Amazon Cognito.
     - D. AWS Simple Queue Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
19. Is creating a Read Replica of another Read Replica supported?
     - A. Only in VPC.
     - B. Yes.
     - C. Only in certain regions.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
20. Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?
     - A. It can be used to launch as many or as few virtual servers as you need.
     - B. It increases the need to forecast traffic by providing dynamic IP addresses for static cloud computing.
     - C. It eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.
     - D. It offers scalable computing capacity in the Amazon Web Services (AWS) cloud.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
21. A user has launched one EC2 instance in the US East region and one in the US West region. The user has launched an RDS instance in the US East region. How can the user configure access from both the EC2 instances to RDS?
     - A. It is not possible to access RDS of the US East region from the US West region.
     - B. Configure the US West region’s security group to allow a request from the US East region’s instance and configure the RDS security group’s ingress rule for the US East EC2 group.
     - C. Configure the security group of the US East region to allow traffic from the US West region’s instance and configure the RDS security group’s ingress rule for the US East EC2 group.
     - D. Configure the security group of both instances in the ingress rule of the RDS security group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
22. What happens to the 1/0 operations while you take a database snapshot?
     - A. 1/0 operations to the database are suspended for an hour while the backup is in progress.
     - B. 1/0 operations to the database are sent to a Replica (if available) for a few minutes while the backup is in progress.
     - C. 1/0 operations will be functioning normally.
     - D. 1/0 operations to the database are suspended for a few minutes while the backup is in progress.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
23. When an EC2 EBS-backed (EBS root) instance is stopped, what happens to the data on any ephemeral store volumes?
     - A. Data is automatically saved in an EBS volume.
     - B. Data is unavailable until the instance is restarted.
     - C. Data will be deleted and will no longer be accessible.
     - D. Data is automatically saved as an EBS snapshot.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
24. […] is a durable, block-level storage volume that you can attach to a single, running Amazon EC2 instance.
     - A. Amazon S3.
     - B. Amazon EBS.
     - C. None of these.
     - D. All of these.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
25. A favored client needs you to quickly deploy a database that is a relational database service with minimal administration as he wants to spend the least amount of time administering it. Which database would be the best option?
     - A. Amazon SimpleDB.
     - B. Your choice of relational AMIs on Amazon EC2 and EB.
     - C. Amazon RDS.
     - D. Amazon Redshift.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
26. You have a number of image files to encode. in an Amazon SQS worker queue, you create an Amazon SQS message for each file specifying the command (jpeg-encode) and the location of the file in Amazon S3. Which of the following statements best describes the functionality of Amazon SQS?
     - A. Amazon SQS is a distributed queuing system that is optimized for horizontal scalability, not for single-threaded sending or receiving speeds.
     - B. Amazon SQS is for single-threaded sending or receiving speeds.
     - C. Amazon SQS is a non-distributed queuing system.
     - D. Amazon SQS is a distributed queuing system that is optimized for vertical scalability and for single-threaded sending or receiving speeds.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
27. While creating an Amazon RDS DB, your first task is to set up a DB […] that controls what IP addresses or EC2 instances have access to your DB Instance.
     - A. Security Pool.
     - B. Secure Zone.
     - C. Security Token Pool.
     - D. Security Group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
28. What happens to the 1/0 operations while you take a database snapshot?
     - A. 1/0 operations to the database are suspended for a few minutes while the backup is in progress.
     - B. 1/0 operations to the database are sent to a Replica (if available) for a few minutes while the backup is in progress.
     - C. 1/0 operations will be functioning normally.
     - D. 1/0 operations to the database are suspended for an hour while the backup is in progress.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
29. After launching an instance that you intend to serve as a NAT (Network Address Translation) device in a public subnet you modify your route tables to have the NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the internet from an instance in the private subnet, you are not successful. Which of the following steps could resolve the issue?
     - A. Disabling the Source/Destination Check attribute on the NAT instance.
     - B. Attaching an Elastic IP address to the instance in the private subnet.
     - C. Attaching a second Elastic Network Interface (EN I) to the NAT instance, and placing it in the private subnet.
     - D. Attaching a second Elastic Network Interface (ENI) to the instance in the private subnet, and placing it in the public subnet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
30. Which of the following would you use to list your AWS Import/Export jobs?
     - A. Amazon RDS.
     - B. AWS Import/Export Web Service Tool.
     - C. Amazon S3 REST API.
     - D. AWS Elastic Beanstalk.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
31. Company B is launching a new game app for mobile devices. Users will log into the game using their existing social media account to streamline data capture. Company B would like to directly saveplayer data and scoring information from the mobile app to a DynamoDS table named Score Data. When a user saves their game the progress data will be stored to the Game state S3 bucket. What is the best approach for storing data to DynamoDB and S3?
     - A. Use an EC2 Instance that is launched with an EC2 role providing access to the Score Data DynamoDB table and the GameState S3 bucket that communicates with the mobile app via web services.
     - B. Use temporary security credentials that assume a role providing access to the Score Data DynamoDB table and the Game State S3 bucket using web identity federation.
     - C. Use Login with Amazon allowing users to sign in with an Amazon account providing the mobile app with access to the Score Data DynamoDB table and the Game State S3 bucket.
     - D. Use an IAM user with access credentials assigned a role providing access to the Score Data DynamoDB table and the Game State S3 bucket for distribution with the mobile app.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
32. If your DB instance runs out of storage space or file system resources, its status will change to […] and your DB Instance will no longer be available.
     - A. storage-overflow.
     - B. storage-full.
     - C. storage-exceed.
     - D. storage-overage.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
33. Your application is using an ELB in front of an Auto Scaling group of web/application servers deployed across two AZs and a Multi-AZ RDS Instance for data persistence. The database CPU is often above 80% usage and 90% of 1/0 operations on the database are reads. To improve performance you recently added a single-node Memcached ElastiCache Cluster to cache frequent DB query results. in the next weeks the overall workload is expected to grow by 30%. Do you need to change anything in the architecture to maintain the high availability or the application with the anticipated additional load? Why?
     - A. Yes, you should deploy two Memcached ElastiCache Clusters in different AZs because the RDS instance will not be able to handle the load if the cache node fails.
     - B. No, if the cache node fails you can always get the same data from the DB without having any availability impact.
     - C. No, if the cache node fails the automated ElastiCache node recovery feature will prevent any availability impact.
     - D. Yes, you should deploy the Memcached ElastiCache Cluster with two nodes in the same AZ as the RDS DB master instance to handle the load if one cache node fails.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
34. How many Elastic IP by default in Amazon Account?
     - A. 1 Elastic IP.
     - B. 3 Elastic IP.
     - C. 5 Elastic IP.
     - D. 0 Elastic IP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
35. What would be the best way to retrieve the public IP address of your EC2 instance using the CLI?
     - A. Using tags.
     - B. Using traceroute.
     - C. Using ipconfig.
     - D. Using instance metadata.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
36. A company is building a two-tier web application to serve dynamic transaction-based content. The data tier is leveraging an Online Transactional Processing (OLTP) database. What services should youleverage to enable an elastic and scalable web tier?
     - A. Elastic Load Balancing, Amazon EC2, and Auto Scaling.
     - B. Elastic Load Balancing, Amazon RDS with Multi-AZ, and Amazon S3.
     - C. Amazon RDS with Multi-AZ and Auto Scaling.
     - D. Amazon EC2, Amazon DynamoDB, and Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
37. You are designing a connectivity solution between on-premises infrastructure and Amazon VPC. Your server’s on-premises will De communicating with your VPC instances. You will De establishing IPSec tunnels over the internet You will be using VPN gateways and terminating the IPsec tunnels on AWS supported customer gateways. Which of the following objectives would you achieve by implementing an IPSec tunnel as outlined above? (Choose 4 answers)
     - A. End-to-end protection of data in transit.
     - B. End-to-end Identity authentication.
     - C. Data encryption across the Internet.
     - D. Protection of data in transit over the Internet.
     - E. Peer identity authentication between VPN gateway and customer gateway.
     - F. Data integrity protection across the Internet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, D, E, F</p>
    </details>
  
38. You have been storing massive amounts of data on Amazon Glacier for the past 2 years and now start to wonder if there are any limitations on this. What is the correct answer to your question?
     - A. The total volume of data is limited but the number of archives you can store are unlimited.
     - B. The total volume of data is unlimited but the number of archives you can store are limited.
     - C. The total volume of data and number of archives you can store are unlimited.
     - D. The total volume of data is limited and the number of archives you can store are limited.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
39. How are the EBS snapshots saved on Amazon S3?
     - A. Exponentially.
     - B. Incrementally.
     - C. EBS snapshots are not stored in the Amazon S3.
     - D. Decrementally.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
40. An online gaming site asked you if you can deploy a database that is a fast, highly scalable NoSQL database service in AWS for a new site that he wants to build. Which database should you recommend?
     - A. Amazon DynamoDB.
     - B. Amazon RDS.
     - C. Amazon Redshift.
     - D. Amazon SimpleDB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
41. You have three Amazon EC2 instances with Elastic IP addresses in the US East (Virginia) region, and you want to distribute requests across all three IPs evenly for users for whom US East (Virginia) is the appropriate region. How many EC2 instances would be sufficient to distribute requests in other regions?
     - A. 3.
     - B. 9.
     - C. 2.
     - D. 1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
42. You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app is sending collected data points of 1 kilobyte every 5 minutes to your backend. The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night’s data on a per user basis, and store the results in Amazon S3. Users are notified via Amazon 5M5 mobile push notifications that new data is available, which is parsed and visualized by The mobile app Currently you have around lOOk users who are mostly based out of North America. You have been tasked to optimize the architecture of the backend system to lower cost what would you recommend? (Choose 2 answers)
     - A. Create a new Amazon DynamoDB able each day and drop the one for the previous day after its data is on Amazon S3.
     - B. Have the mobile app access Amazon DynamoDB directly instead of J50N files stored on Amazon S3.
     - C. Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.
     - D. Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.
     - E. Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C</p>
    </details>
  
43. You are implementing a URL whitelisting system for a company that wants to restrict outbound HTTP’S connections to specific domains from their EC2-hosted applications you deploy a single EC2 instance running proxy software and configure It to accept traffic from all subnets and EC2 instances in the VPC. You configure the proxy to only pass through traffic to domains that you define in its whitelist configuration You have a nightly maintenance window or 10 minutes where all instances fetch new software updates. Each update Is about 200MB in size and there are 500 instances in theVPC that routinely fetch updates After a few days you notice that some machines are failing to successfully download some, but not all of their updates within the maintenance window. The download URLs used for these updates are correctly listed in the proxy’s whitelist configuration and you are able to access them manually using a web browser on the instances. What might be happening? (Choose 2 answers)
     - A. You are running the proxy on an undersized EC2 instance type so network throughput is not sufficient for all instances to download their updates in time.
     - B. You are running the proxy on a sufficiently-sized EC2 instance in a private subnet and its network throughput is being throttled by a NAT running on an undersized EC2 instance.
     - C. The route table for the subnets containing the affected EC2 instances is not configured to direct network traffic for the software update locations to the proxy.
     - D. You have not allocated enough storage to t he EC2 instance running the proxy so the network buffer is filling up, causing some requests to fail.
     - E. You are running the proxy in a public subnet but have not allocated enough EIPs to support the needed network throughput through the Internet Gateway (IGW).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B</p>
    </details>
  
44. You are playing around with setting up stacks using JSON templates in CloudFormation to try and understand them a little better. You have set up about 5 or 6 but now start to wonder if you are being charged for these stacks. What is AWS’s billing policy regarding stack resources?
     - A. You are not charged for the stack resources if they are not taking any traffic.
     - B. You are charged for the stack resources for the time they were operating (even if you deleted the stack right away).
     - C. You are charged for the stack resources for the time they were operating (but not if you deleted the stack within 60 minutes).
     - D. You are charged for the stack resources for the time they were operating (but not if you deleted the stack within 30 minutes).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
45. What does Amazon Cloud Formation provide?
     - A. The ability to setup Autoscaling for Amazon EC2 instances.
     - B. None of these.
     - C. A templated resource creation for Amazon Web Services.
     - D. A template to map network resources for Amazon Web Services.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
46. You are signed in as root user on your account but there is an Amazon S3 bucket under your account that you cannot access. What is a possible reason for this?
     - A. An IAM user assigned a bucket policy to an Amazon S3 bucket and didn’t specify the root user as a principal
     - B. The S3 bucket is full.
     - C. The S3 bucket has reached the maximum number of objects allowed.
     - D. You are in the wrong Availability Zone.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
47. When creation of an EBS snapshot is initiated, but not completed, the EBS volume?
     - A. Can be used while the snapshot is in progress.
     - B. Cannot be detached or attached to an EC2 instance until the snapshot completes.
     - C. Can be used in read-only mode while the snapshot is in progress.
     - D. Cannot be used until the snapshot completes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
48. What does Amazon SES stand for?
     - A. Simple Elastic Server.
     - B. Simple Email Service.
     - C. Software Email Solution.
     - D. Software Enabled Server.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
49. You receive a bill from AWS but are confused because you see you are incurring different costs for the exact same storage size in different regions on Amazon S3. You ask AWS why this is so. What response would you expect to receive from AWS?
     - A. We charge less in different time zones.
     - B. We charge less where our costs are less.
     - C. This will balance out next bill.
     - D. It must be a mistake.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
50. Disabling automated backups […] disable the point-in-time recovery.
     - A. if configured to can.
     - B. will never.
     - C. will.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)