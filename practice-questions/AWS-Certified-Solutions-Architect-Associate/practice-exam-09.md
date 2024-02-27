# Practice Exam 9

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. An EC2 instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens when you attach an ENI of a different subnet to this EC2 instance?
     - A. The EC2 instance follows the rules of the older subnet.
     - B. The EC2 instance follows the rules of both the subnets.
     - C. Not possible, cannot be connected to 2 ENIs.
     - D. The EC2 instance follows the rules of the newer subnet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
2. You have deployed a three-tier web application in a VPC with a CIDR block of 10.0.0.0/28. You initially deploy two web servers, two application servers, two database servers and one NAT instance tor a total of seven EC2 instances. The web, application and database servers are deployed across two Availability Zones (AZs). You also deploy an ELB in front of the two web servers, and use Route 53 for DNS Web. Raffle gradually increases in the first few days following the deployment, so you attempt to double the number of instances in each tier of the application to handle the new load unfortunately some of these new instances fail to launch.Which of the following could be the root caused? (Choose 2 answers)
     - A. AWS reserves the first and the last private IP address in each subnet’s CIDR block so you do not have enough addresses left to launch all of the new EC2 instances.
     - B. The Internet Gateway (IGW) of your VPC has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches.
     - C. The ELB has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches.
     - D. AWS reserves one IP address in each subnet’s CIDR block for Route 53 so you do not have enough addresses left to launch all of the new EC2 instances.
     - E. AWS reserves the first four and the last IP address in each subnet’s CIDR block so you do not have enough addresses left to launch all of the new EC2 instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, E</p>
    </details>
  
3. Which of the following will cause an immediate DB instance reboot to occur?
     - A. You change storage type from standard to PIOPS, and Apply Immediately is set to true.
     - B. You change the DB instance class, and Apply Immediately is set to false.
     - C. You change a static parameter in a DB parameter group.
     - D. You change the backup retention period for a DB instance from 0 to a nonzero value or from a nonzero value to 0, and Apply Immediately is set to false.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
4. EBS Snapshots occur […].
     - A. Asynchronously.
     - B. Synchronously.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
5. You are tasked with moving a legacy application from a virtual machine running Inside your datacenter to an Amazon VPC Unfortunately this app requires access to a number of on-premises services and no one who configured the app still works for your company. Even worse there’s no documentation for it. What will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured? (Choose 3 answers)
     - A. An AWS Direct Connect link between the VPC and the network housing the internal services.
     - B. An Internet Gateway to allow a VPN connection.
     - C. An Elastic IP address on the VPC instance.
     - D. An IP address space that does not conflict with the one on-premises.
     - E. Entries in Amazon Route 53 that allow the Instance to resolve its dependencies’ IP addresses.
     - F. A VM Import of the current virtual machine.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D, F</p>
    </details>
  
6. A company needs to deploy services to an AWS region which they have not previously used. The company currently has an AWS identity and Access Management (IAM) role for the Amazon EC2 instances, which permits the instance to have access to Amazon DynamoDB. The company wants their EC2 instances in the new region to have the same privileges. How should the company achievethis?
     - A. Create a new IAM role and associated policies within the new region.
     - B. Assign the existing IAM role to the Amazon EC2 instances in the new region.
     - C. Copy the IAM role and associated policies to the new region and attach it to the instances.
     - D. Create an Amazon Machine Image (AMI) of the instance and copy it to the desired region using the AMI Copy feature.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
7. If you want to launch Amazon Elastic Compute Cloud (EC2) instances and assign each instance a predetermined private IP address you should:
     - A. Launch the instance from a private Amazon Machine Image (AMI).
     - B. Assign a group of sequential Elastic IP address to the instances.
     - C. Launch the instances in the Amazon Virtual Private Cloud (VPC).
     - D. Launch the instances in a Placement Group.
     - E. Use standard EC2 instances since each instance gets a private Domain Name Service (DNS) already.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
8. When automatic failover occurs, Amazon RDS will emit a DB Instance event to inform you that automatic failover occurred. You can use the […] to return information about events related to your DB Instance.
     - A. FetchFailure.
     - B. DescriveFailure.
     - C. DescribeEvents.
     - D. FetchEvents.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
9. You have a Business support plan with AWS. One of your EC2 instances is running Microsoft Windows Server 2008 R2 and you are having problems with the software. Can you receive support from AWS for this software?
     - A. Yes.
     - B. No, AWS does not support any third-party software.
     - C. No, Microsoft Windows Server 2008 R2 is not supported.
     - D. No, you need to be on the enterprise support plan.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
10. A newspaper organization has a on-premises application which allows the public to search its back catalogue and retrieve individual newspaper pages via a website written in Java They have scanned the old newspapers into JPEGs (approx 17TB) and used Optical Character Recognition (OCR) to populate a commercial search product. The hosting platform and software are now end of life and the organization wants to migrate Its archive to AWS and produce a cost efficient architecture and still be designed for availability and durability. Which is the most appropriate?
     - A. Use S3 with reduced redundancy to store and serve the scanned files, install the commercial search application on EC2 Instances and configure with auto-scaling and an Elastic Load Balancer.
     - B. Model the environment using CloudFormation use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EB5 volumes together to store the JPEGs and search index.
     - C. Use S3 with standard redundancy to store and serve the scanned files, use Cloud5earch for query processing, and use Elastic Beanstalk to host the website across multiple Availability Zones.
     - D. Use a single-AZ RD5 My5QL instance to store the search index 33d the JPEG images use an EC2 instance to serve the website and translate user queries into 5Q
     - E. Use a CloudFront download distribution to serve the JPEGs to the end users and Install the current commercial search product, along with a Java Container Tor the website on EC2 instances and use Route 53 with DNS round-robin.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
11. A Provisioned IOPS volume must be at least […] GB in size.
     - A. 1.
     - B. 50.
     - C. 20.
     - D. 10.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
12. In Amazon EC2, while sharing an Amazon EBS snapshot, can the snapshots with AWS Marketplace product codes be public?
     - A. Yes, but only for US-based providers.
     - B. Yes, they can be public.
     - C. No, they cannot be made public.
     - D. Yes, they are automatically made public by the system.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
13. A company has an AWS account that contains three VPCs (Dev, Test, and Prod) in the same region. Test is peered to both Prod and Dev. All VPCs have non-overlapping CIDR blocks. The company wants to push minor code releases from Dev to Prod to speed up time to market. Which of the following options helps the company accomplish this?
     - A. Create a new peering connection Between Prod and Dev along with appropriate routes.
     - B. Create a new entry to Prod in the Dev route table using the peering connection as the target.
     - C. Attach a second gateway to Dev. Add a new entry in the Prod route table identifying the gateway as the target.
     - D. The VPCs have non-overlapping Cl DR blocks in the same account. The route tables contain local routes for all VPCs.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
14. The […] service is targeted at organizations with multiple users or systems that use AWS products such as Amazon EC2, Amazon SimpleDB, and the AWS Management Console.
     - A. Amazon RDS.
     - B. AWS Integrity Management.
     - C. AWS Identity and Access Management.
     - D. Amazon EMR.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
15. You have just been given a scope for a new client who has an enormous amount of data (petabytes) that he constantly needs analysed. Currently he is paying a huge amount of money for a data warehousing company to do this for him and is wondering if AWS can provide a cheaper solution. Do you think AWS has a solution for this?
     - A. Yes. Amazon SimpleDB.
     - B. No. Not presently.
     - C. Yes. Amazon Redshift.
     - D. Yes. Your choice of relational AMIs on Amazon EC2 and EBS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
16. You have set up an Elastic Load Balancer (ELB) with the usual default settings, which route each request independently to the application instance with the smallest load. However, someone has asked you to bind a user’s session to a specific application instance so as to ensure that all requests coming from the user during the session will be sent to the same application instance. AWS has a feature to do this. What is it called?
     - A. Connection draining.
     - B. Proxy protocol.
     - C. Tagging.
     - D. Sticky session.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
17. You have written a CloudFormation template that creates 1 Elastic Load Balancer fronting 2 EC2 Instances. Which section of the template should you edit so that the DNS of the load balancer is returned upon creation of the stack?
     - A. Resources.
     - B. Outputs.
     - C. Parameters.
     - D. Mappings.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
18. AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. What formatting is required for this template?
     - A. JSON-formatted document.
     - B. CSS-formatted document.
     - C. XML-formatted document.
     - D. HTML-formatted document.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
19. A user has created an application which will be hosted on EC2. The application makes calls to DynamoDB to fetch certain data. The application is using the DynamoDB SDK to connect with from theEC2 instance. Which of the below mentioned statements is true with respect to the best practice for security in this scenario?
     - A. The user should create an IAM user with DynamoDB access and use its credentials within the application to connect with DynamoDB.
     - B. The user should attach an IAM role with DynamoDB access to the EC2 instance.
     - C. The user should create an IAM role, which has EC2 access so that it will allow deploying the application.
     - D. The user should create an IAM user with DynamoDB and EC2 access. Attach the user with the application so that it does not use the root account credentials.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
20. After setting up an EC2 security group with a cluster of 20 EC2 instances, you find an error in the security group settings. You quickly make changes to the security group settings. When will the changes to the settings be effective?
     - A. The settings will be effective immediately for all the instances in the security group.
     - B. The settings will be effective only when all the instances are restarted.
     - C. The settings will be effective for all the instances only after 30 minutes.
     - D. The settings will be effective only for the new instances added to the security group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
21. Can a user get a notification of each instance start / terminate configured with Auto Scaling?
     - A. Yes, if configured with the Launch Config.
     - B. Yes, always.
     - C. Yes, if configured with the Auto Scaling group.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
22. Which Amazon storage do you think is the best for my database-style applications that frequently encounter many random reads and writes across the dataset?
     - A. None of these.
     - B. Amazon Instance Storage.
     - C. Any of these.
     - D. Amazon EBS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
23. In the Amazon RDS Oracle DB engine, the Database Diagnostic Pack and the Database Tuning Pack are only available with […].
     - A. Oracle Standard Edition.
     - B. Oracle Express Edition.
     - C. Oracle Enterprise Edition.
     - D. None of these.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
24. Will my standby RDS instance be in the same Availability Zone as my primary?
     - A. Only for Oracle RDS types.
     - B. Yes.
     - C. Only if configured at launch.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
25. An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage when creating theCloudFormation template which of the following would allow the application instance access to the DynamoDB tables without exposing API credentials?
     - A. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.
     - B. Use the Parameter section in the Cloud Formation template to nave the user input Access and Secret Keys from an already created IAM user that has me permissions required to read and write from the required DynamoDB table.
     - C. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.
     - D. Create an identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and secret keys and pass them to the application instance through user-data.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
26. In an experiment, if the minimum size for an Auto Scaling group is 1 instance, which of the following statements holds true when you terminate the running instance?
     - A. Auto Scaling must launch a new instance to replace it.
     - B. Auto Scaling will raise an alarm and send a notification to the user for action.
     - C. Auto Scaling must configure the schedule activity that terminates the instance after 5 days.
     - D. Auto Scaling will terminate the experiment.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
27. True or False: Manually created DB Snapshots are deleted after the DB Instance is deleted.
     - A. True.
     - B. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
28. Amazon S3 doesn’t automatically give a user who creates […] permission to perform other actions on that bucket or object.
     - A. a file.
     - B. a bucket or object.
     - C. a bucket or file.
     - D. a object or file.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
29. A company wants to review the security requirements of Glacier. Which of the below mentioned statements is true with respect to the AWS Glacier data security?
     - A. All data stored on Glacier is protected with AES-256 serverside encryption.
     - B. All data stored on Glacier is protected with AES-128 serverside encryption.
     - C. The user can set the serverside encryption flag to encrypt the data stored on Glacier.
     - D. The data stored on Glacier is not encrypted by default.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
30. What does Amazon EBS stand for?
     - A. Elastic Block Storage.
     - B. Elastic Business Server.
     - C. Elastic Blade Server.
     - D. Elastic Block Store.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
31. You have a distributed application that periodically processes large volumes of data across multiple Amazon EC2 Instances. The application is designed to recover gracefully from Amazon EC2 instance failures. You are required to accomplish this task in the most cost-effective way. Which of the following will meet your requirements?
     - A. Spot Instances.
     - B. Reserved instances.
     - C. Dedicated instances.
     - D. On-Demand instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
32. What does Amazon SWF stand for?
     - A. Simple Web Flow.
     - B. Simple Work Flow.
     - C. Simple Wireless Forms.
     - D. Simple Web Form.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
33. Can you specify the security group that you created for a VPC when you launch an instance in EC2-Classic?
     - A. No, you can specify the security group created for EC2-Classic when you launch a VPC instance.
     - B. Yes.
     - C. No.
     - D. No, you can specify the security group created for EC2-Classic to a non-VPC based instance only.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
34. Which two methods increases the fault tolerance of the connection to VPC-1? (Choose 2 answers)
     - A. Establish a hardware VPN over the internet between VPC-2 and the on-premises network.
     - B. Establish a hardware VPN over the internet between VPC-1 and the on-premises network.
     - C. Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2.
     - D. Establish a new AWS Direct Connect connection and private virtual interface in a different AWS region than VPC-1.
     - E. Establish a new AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, E</p>
    </details>
  
35. How would you improve page load times for your users? (Choose 3 answers)
     - A. Lower the scale up trigger of your Auto Scaling group to 30% so it scales more aggressively.
     - B. Add an Amazon ElastiCache caching layer to your application for storing sessions and frequent DB queries.
     - C. Configure Amazon CloudFront dynamic content support to enable caching of re-usable content from your site.
     - D. Switch Amazon RDS database to the high memory extra large Instance type.
     - E. Set up a second installation in another region, and use the Amazon Route 53 latency-based routing feature to select the right region.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, C, D</p>
    </details>
  
36. Typically, you want your application to check whether a request generated an error before you spend any time processing results. The easiest way to find out if an error occurred is to look for an […] node in the response from the Amazon RDS API.
     - A. incorrect.
     - B. error.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
37. Through which of the following interfaces is AWS Identity and Access Management available? A. AWS Management Console. B. Command line interface (CLI). C. IAM Query API. D. Existing libraries.
     - A. Only through Command line interface (CLI).
     - B. A, B and C.
     - C. A and C.
     - D. All of the above.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
38. A […] is a storage device that moves data in sequences of bytes or bits (blocks).
     - A. block map.
     - B. storage block.
     - C. mapping device.
     - D. block device.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
39. You have just finshed setting up an advertisement server in which one of the obvious choices for a service was Amazon Elastic Map Reduce( EMR) and are now troubleshooting some weird cluster states that you are seeing. Which of the below is not an Amazon EMR cluster state?
     - A. STARTING.
     - B. STOPPED.
     - C. RUNNING.
     - D. WAITING.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
40. A US-based company is expanding their web presence into Europe. The company wants to extend their AWS infrastructure from Northern Virginia (us-east-1) into the Dublin (eu-west-1) region. Which of the following options would enable an equivalent experience for users on both continents?
     - A. Use a public-facing load balancer per region to load-balance web traffic, and enable HTTP health checks.
     - B. Use a public-facing load balancer per region to load-balance web traffic, and enable sticky sessions.
     - C. Use Amazon Route 53, and apply a geolocation routing policy to distribute traffic across both regions.
     - D. Use Amazon Route 53, and apply a weighted routing policy to distribute traffic across both regions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
41. You are building infrastructure for a data warehousing solution and an extra request has come through that there will be a lot of business reporting queries running all the time and you are not sure if your current DB instance will be able to handle it. What would be the best solution for this?
     - A. DB Parameter Groups.
     - B. Read Replicas.
     - C. Multi-AZ DB Instance deployment.
     - D. Database Snapshots.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
42. One of the criteria for a new deployment is that the customer wants to use AWS Storage Gateway. However you are not sure whether you should use gateway-cached volumes or gateway-stored volumes or even what the differences are. Which statement below best describes those differences?
     - A. Gateway-cached lets you store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Gateway-stored enables you to configure your on-premises gateway to store all your data locally and then asynchronously back up point-in-time snapshots of this data to Amazon S3.
     - B. Gateway-cached is free whilst gateway-stored is not.
     - C. Gateway-cached is up to 10 times faster than gateway-stored.
     - D. Gateway-stored lets you store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Gateway-cached enables you to configure your on-premises gateway to store all your data locally and then asynchronously back up point-in-time snapshots of this data to Amazon S3.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
43. In Amazon RDS, security groups are ideally used to:
     - A. Define maintenance period for database engines.
     - B. Launch Amazon RDS instances in a subnet.
     - C. Create, describe, modify, and delete DB instances.
     - D. Control what IP addresses or EC2 instances can connect to your databases on a DB instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
44. How long does an AWS free usage tier EC2 last for?
     - A. Forever.
     - B. 12 Months upon signup.
     - C. 1 Month upon signup.
     - D. 6 Months upon signup.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
45. After you recommend Amazon Redshift to a client as an alternative solution to paying data warehouses to analyze his data, your client asks you to explain why you are recommending Redshift. Which of the following would be a reasonable response to his request?
     - A. It has high performance at scale as data and query complexity grows.
     - B. It prevents reporting and analytic processing from interfering with the performance of OLTP workloads.
     - C. You don’t have the administrative burden of running your own data warehouse and dealing with setup, durability, monitoring, scaling, and patching.
     - D. All answers listed are a reasonable response to his question.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>
  
46. You can seamlessly join an EC2 instance to your directory domain. What connectivity do you need to be able to connect remotely to this instance?
     - A. You must have IP connectivity to the instance from the network you are connecting from.
     - B. You must have the correct encryption keys to connect to the instance remotely.
     - C. You must have enough bandwidth to connect to the instance.
     - D. You must use MFA authentication to be able to connect to the instance remotely.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>
  
47. Does Amazon DynamoDB support both increment and decrement atomic operations?
     - A. Only increment, since decrement are inherently impossible with DynamoDB’s data model.
     - B. No, neither increment nor decrement operations.
     - C. Yes, both increment and decrement operations.
     - D. Only decrement, since increment are inherently impossible with DynamoDB’s data model.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
48. You nave multiple Amazon EC2 instances running in a cluster across multiple Availability Zones within the same region. What combination of the following should be used to ensure the highest network performance (packets per second), lowest latency, and lowest jitter? (Choose 3 answers)
     - A. Amazon EC2 placement groups.
     - B. Enhanced networking.
     - C. Amazon PV AMI.
     - D. Amazon HVM AMI.
     - E. Amazon Linux.
     - F. Amazon VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B, D</p>
    </details>
  
49. If an Amazon EBS volume is the root device of an instance, can I detach it without stopping the instance?
     - A. Yes but only if Windows instance.
     - B. Yes.
     - C. No.
     - D. Yes but only if a Linux instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>
  
50. True or False: When you add a rule to a DB security group, you do not need to specify port number or protocol.
     - A. Depends on the ROMS used.
     - B. True.
     - C. False.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>
  
  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)