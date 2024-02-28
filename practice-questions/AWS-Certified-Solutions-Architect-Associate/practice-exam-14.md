# Practice Exam 14

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. What are characteristics of Amazon S3? (Choose 2 answers)
     - A. Amazon S3 allows you to store objects of virtually unlimited size.
     - B. Amazon S3 offers Provisioned IOP.
     - C. Amazon S3 allows you to store unlimited amounts of data.
     - D. Amazon S3 should be used to host a relational database.
     - E. Objects are directly accessible via a URL.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, E</p>
    </details>

2. You need to set up a complex network infrastructure for your organization that will be reasonably easy to deploy, replicate, control, and track changes on. Which AWS service would be best to use to help you accomplish this?
     - A. AWS Import/Export.
     - B. AWS CloudFormation.
     - C. Amazon Route 53.
     - D. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

3. How should the application use AWS credentials to access the S3 bucket securely?
     - A. Use the AWS account access Keys the application retrieves the credentials from the source code of the application.
     - B. Create an IAM user for the application with permissions that allow list access to the S3 bucket launch the instance as the IAM user and retrieve the IAM user’s credentials from the EC2 instance user data.
     - C. Create an IAM role for EC2 that allows list access to objects in the S3 bucket. Launch the instance with the role, and retrieve the role’s credentials from the EC2 Instance metadata.
     - D. Create an IAM user for the application with permissions that allow list access to the S3 bucket. The application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the application user.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

4. You are setting up a VPC and you need to set up a public subnet within that VPC. Which following requirement must be met for this subnet to be considered a public subnet?
     - A. Subnet’s traffic is not routed to an internet gateway but has its traffic routed to a virtual private gateway.
     - B. Subnet’s traffic is routed to an internet gateway.
     - C. Subnet’s traffic is not routed to an internet gateway.
     - D. None of these answers can be considered a public subnet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

5. Is it possible to access your EBS snapshots?
     - A. Yes, through the Amazon S3 APIs.
     - B. Yes, through the Amazon EC2 APIs.
     - C. No, EBS snapshots cannot be accessed; they can only be used to create a new EBS volume.
     - D. EBS doesn’t provide snapshots.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

6. How many types of block devices does Amazon EC2 support?
     - A. 4.
     - B. 5.
     - C. 2.
     - D. 1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

7. SQL Server […] store log ins and passwords in the master database.
     - A. can be configured to but by default does not.
     - B. doesn’t.
     - C. does.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

8. You are using an m1.small EC2 Instance with one 300GB EBS volume to host a relational database. You determined that write throughput to the database needs to be increased. Which of the following approaches can help achieve this? (Choose 2 answers)
     - A. Use an array of EBS volumes.
     - B. Enable Multi-AZ mode.
     - C. Place the instance in an Auto Scaling Groups.
     - D. Add an EBS volume and place into RAID 5.
     - E. Increase the size of the EC2 Instance.
     - F. Put the database behind an Elastic Load Balancer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, E</p>
    </details>

9. A user is hosting a website in the US West-1 region. The website has the highest client base from the Asia-Pacific (Singapore / Japan) region. The application is accessing data from S3 before serving it to client. Which of the below mentioned regions gives a better performance for S3 objects?
     - A. Japan.
     - B. Singapore.
     - C. US East.
     - D. US West-1.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

10. You need to set up security for your VPC and you know that Amazon VPC provides two features that you can use to increase security for your VPC: Security groups and network access control lists (ACLs). You start to look into security groups first. Which statement below is incorrect in relation to security groups?
     - A. Are stateful: Return traffic is automatically allowed, regardless of any rules.
     - B. Evaluate all rules before deciding whether to allow traffic.
     - C. Support allow rules and deny rules.
     - D. Operate at the instance level (first layer of defense).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

11. Can a single EBS volume be attached to multiple EC2 instances at the same time?
     - A. Yes.
     - B. No.
     - C. Only for high-performance EBS volumes.
     - D. Only when the instances are located in the US regions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

12. You are planning and configuring some EBS volumes for an application. in order to get the most performance out of your EBS volumes, you should attach them to an instance with enough […] to support your volumes.
     - A. redundancy.
     - B. storage.
     - C. bandwidth.
     - D. memory.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

13. An organization has three separate AWS accounts, one each for development, testing, and production. The organization wants the testing team to have access to certain AWS resources in the production account. How can the organization achieve this?
     - A. It is not possible to access resources of one account with another account.
     - B. Create the IAM roles with cross account access.
     - C. Create the IAM user in a test account, and allow it access to the production environment with the IAM policy.
     - D. Create the IAM users with cross account access.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

14. A benefits enrollment company is hosting a 3-tier web application running in a VPC on AWS which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload tor the new fiscal year benefit enrollment period plus some extra overhead Enrollment proceeds nicely for two days and then the web tier becomes unresponsive, upon investigation using CloudWatch and other monitoring tools it is discovered that there is an extremely large and unanticipated amount of inbound traffic coming from a set of 15specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them. Which activity would be useful in defending against this attack?
     - A. Create a custom route table associated with the web tier and block the attacking IP addresses from the IGW (Internet Gateway).
     - B. Change the EIP (Elastic IP Address) of the NAT instance in the web tier subnet and update the Main Route Table with the new EIP.
     - C. Create 15 Security Group rules to block the attacking IP addresses over port 80.
     - D. Create an inbound NACL (Network Access control list) associated with the web tier subnet with deny rules to block the attacking IP addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

15. You launch an Amazon EC2 instance without an assigned AVVS identity and Access Management (IAM) role. Later, you decide that the instance should be running with an IAM role. Which action must you take in order to have a running Amazon EC2 instance with an IAM role assigned to it?
     - A. Create an image of the instance, and register the image with an IAM role assigned and an Amazon EBS volume mapping.
     - B. Create a new IAM role with the same permissions as an existing IAM role, and assign it to the running instance.
     - C. Create an image of the instance, add a new IAM role with the same permissions as the desired IAM role, and deregister the image with the new role assigned.
     - D. Create an image of the instance, and use this image to launch a new instance with the desired Lam role assigned.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

16. Does AWS Direct Connect allow you access to all Availabilities Zones within a Region?
     - A. Depends on the type of connection.
     - B. Yes.
     - C. No.
     - D. Only when there’s just one Availability Zone in a region. If there are more than one, only one availability zone can be accessed directly.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

17. What is the durability of S3 RRS?
     - A. 99.99%.
     - B. 99.95%.
     - C. 99.995%.
     - D. 99.999999999%.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

18. Your organization is in the business of architecting complex transactional databases. For a variety of reasons, this has been done on EBS. What is AWS’s recommendation for customers who have architected databases using EBS for backups?
     - A. Backups to Amazon S3 be performed through the database management system.
     - B. Backups to AWS Storage Gateway be performed through the database management system.
     - C. If you take regular snapshots no further backups are required.
     - D. Backups to Amazon Glacier be performed through the database management system.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

19. You need to create a load balancer in a VPC network that you are building. You can make your load balancer internal (private) or internet-facing (public). When you make your load balancer internal, a DNS name will be created, and it will contain the private IP address of the load balancer. An internal load balancer is not exposed to the internet. When you make your load balancer internet-facing, a DNS name will be created with the public IP address. If you want the Internet-facing load balancer to be connected to the Internet, where must this load balancer reside?
     - A. The load balancer must reside in a subnet that is connected to the internet using the internet gateway.
     - B. The load balancer must reside in a subnet that is not connected to the internet.
     - C. The load balancer must not reside in a subnet that is connected to the internet.
     - D. The load balancer must be completely outside of your IP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

20. In the Amazon CloudWatch, which metric should I be checking to ensure that your DB Instance has enough free storage space?
     - A. Free Storage.
     - B. Free Storage Space.
     - C. Free Storage Volume.
     - D. Free DB Storage Space.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

21. A web-startup runs its very successful social news application on Amazon EC2 with an Elastic Load Balancer, an Auto-Scaling group of Java/Tomcat application-servers, and DynamoDB as data store. The main web-application best runs on m2 x large instances since it is highly memory- bound Each new deployment requires semi-automated creation and testing of a new AMI for the application servers which takes quite a while ana is therefore only done once per week. Recently, a new chat feature has been implemented in nodejs and wails to be integrated in the architecture. First tests show that the new component is CPU bound Because the company has some experience with using Chef, they decided to streamline the deployment process and use AWS OpsWorks as an application life cycle tool to simplify management of the application and reduce the deployment cycles. What configuration in AWS OpsWorks is necessary to integrate the new chat module in the most cost-efficient and flexible way?
     - A. Create one AWS OpsWorks stack, create one AWS OpsWorks layer, create one custom recipe.
     - B. Create one AWS OpsWorks stack create two AWS OpsWorks layers create one custom recipe.
     - C. Create two AWS OpsWorks stacks create two AWS OpsWorks layers create one custom recipe.
     - D. Create two AWS OpsWorks stacks create two AWS OpsWorks layers create two custom recipe.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

22. A client needs you to import some existing infrastructure from a dedicated hosting provider to AWS to try and save on the cost of running his current website. He also needs an automated process that manages backups, software patching, automatic failure detection, and recovery. You are aware that his existing set up currently uses an Oracle database. Which of the following AWS databases would be best for accomplishing this task?
     - A. Amazon RDS.
     - B. Amazon Redshift.
     - C. Amazon SimpleDB.
     - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

23. A user is currently building a website which will require a large number of instances in six months, when a demonstration of the new site will be given upon launch. Which of the below mentioned options allows the user to procure the resources beforehand so that they need not worry about infrastructure availability during the demonstration?
     - A. Procure all the instances as reserved instances beforehand.
     - B. Launch all the instances as part of the cluster group to ensure resource availability.
     - C. Pre-warm all the instances one month prior to ensure resource availability.
     - D. Ask AWS now to procure the dedicated instances in 6 months.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

24. Amazon RDS creates an SSL certificate and installs the certificate on the DB Instance when Amazon RDS provisions the instance. These certificates are signed by a certificate authority. The […] is stored at <a href="https://rds.amazonaws.com/doc/rds-ssl-ca-cert.pem">https://rds.amazonaws.com/doc/rds-ssl-ca-cert.pem</a>.
     - A. private key.
     - B. foreign key.
     - C. public key.
     - D. protected key.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

25. What happens to data on an ephemeral volume of an EBS-backed EC2 instance if it is terminated or if it fails?
     - A. Data is automatically copied to another volume.
     - B. The volume snapshot is saved in S3.
     - C. Data persists.
     - D. Data is deleted.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

26. You manually launch a NAT AMI in a public subnet. The network is properly configured. Security groups and network access control lists are property configured. Instances in a private subnet canaccess the NAT. The NAT can access the Internet. However, private instances cannot access the Internet. What additional step is required to allow access from the private instances?
     - A. Enable Source/Destination Check on the private Instances.
     - B. Enable Source/Destination Check on the NAT instance.
     - C. Disable Source/Destination Check on the private instances.
     - D. Disable Source/Destination Check on the NAT instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

27. You have just discovered that you can upload your objects to Amazon S3 using Multipart Upload API. You start to test it out but are unsure of the benefits that it would provide. Which of the following is not a benefit of using multipart uploads?
     - A. You can begin an upload before you know the final object size.
     - B. Quick recovery from any network issues.
     - C. Pause and resume object uploads.
     - D. It’s more secure than normal upload.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

28. To help you manage your Amazon EC2 instances, images, and other Amazon EC2 resources, you can assign your own metadata to each resource in the form of […].
     - A. special filters.
     - B. functions.
     - C. tags.
     - D. wildcards.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

29. Are you able to integrate a multi-factor token service with the AWS Platform?
     - A. Yes, using the AWS multi-factor token devices to authenticate users on the AWS platform.
     - B. No, you cannot integrate multi-factor token devices with the AWS platform.
     - C. Yes, you can integrate private multi-factor token devices to authenticate users to the AWS platform.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

30. Do the Amazon EBS volumes persist independently from the running life of an Amazon EC2 instance?
     - A. No.
     - B. Only if instructed to when created.
     - C. Yes.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

31. If I write the below command, what does it do? ec2-run ami-e3a5408a -n 20 -g appserver
     - A. Start twenty instances as members of appserver group.
     - B. Creates 20 rules in the security group named appserver.
     - C. Terminate twenty instances as members of appserver group.
     - D. Start 20 security groups.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

32. A company is deploying a new two-tier web application in AWS. The company has limited staff and requires high availability, and the application requires complex queries and table joins. Which configuration provides the solution for the company’s requirements?
     - A. MySQL Installed on two Amazon EC2 Instances in a single Availability Zone.
     - B. Amazon RDS for MySQL with Multi-AZ.
     - C. Amazon ElastiCache
     - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

33. Is creating a Read Replica of another Read Replica supported?
     - A. Only in certain regions.
     - B. Only with MSSQL based RDS.
     - C. Only for Oracle RDS types.
     - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

34. In order to optimize performance for a compute cluster that requires low inter-node latency, which of the following feature should you use?
     - A. Multiple Availability Zones.
     - B. AWS Direct Connect.
     - C. EC2 Dedicated Instances.
     - D. Placement Groups.
     - E. VPC private subnets.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

35. Regarding the attaching of ENI to an instance, what does ‘warm attach’ refer to?
     - A. Attaching an ENI to an instance when it is stopped.
     - B. This question doesn’t make sense.
     - C. Attaching an ENI to an instance when it is running.
     - D. Attaching an ENI to an instance during the launch process.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

36. Can I attach more than one policy to a particular entity?
     - A. Yes always.
     - B. Only if within GovCloud.
     - C. No.
     - D. Only if within VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

37. By default, when an EBS volume is attached to a Windows instance, it may show up as any drive letter on the instance. You can change the settings of the […] Service to set the drive letters of the EBS volumes per your specifications.
     - A. EBS Config Service.
     - B. AMI Config Service.
     - C. EC2 Config Service.
     - D. EC2-AMI Config Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

38. Select the correct set of steps for exposing the snapshot only to specific AWS accounts.
     - A. Select public for all the accounts and check mark t hose accounts with whom you want to expose the snapshots and cl ick save.
     - B. Select Private, enter the IDs of t hose AWS accounts, and click Save.
     - C. Select Public, enter the IDs of those AWS accounts, and click Save.
     - D. Select Public, mark the IDs of those AWS accounts as private, and click Save.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

39. How can you apply more than 100 rules to an Amazon EC2-Classic?
     - A. By adding more security groups.
     - B. You need to create a default security group specifying your required rules if you need to use more than 100 rules per security group.
     - C. By default the Amazon EC2 security groups support 500 rules.
     - D. You can’t add more than 100 rules to security groups for an Amazon EC2 instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

40. A user has created an ELB with Auto Scaling. Which of the below mentioned offerings from ELB helps the user to stop sending new requests traffic from the load balancer to the EC2 instance when the instance is being deregistered while continuing in-flight requests?
     - A. ELB sticky session.
     - B. ELB deregistration check.
     - C. ELB auto registration Off.
     - D. ELB connection draining.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

41. What can I access by visiting the URL: <a href="http://status.aws.amazon.com/">http://status.aws.amazon.com/</a>?
     - A. Amazon Cloud Watch.
     - B. Status of the Amazon RDS DB.
     - C. AWS Service Health Dashboard.
     - D. AWS Cloud Monitor.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

42. In Route 53, what does a Hosted Zone refer to?
     - A. A hosted zone is a collection of geographical load balancing rules for Route 53.
     - B. A hosted zone is a collection of resource record sets hosted by Route 53.
     - C. A hosted zone is a selection of specific resource record sets hosted by CloudFront for distribution to Route 53.
     - D. A hosted zone is the Edge Location that hosts the Route 53 records for a user.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

43. A user is launching an EC2 instance in the US East region. Which of the below mentioned options is recommended by AWS with respect to the selection of the Availability Zone?
     - A. Always select the AZ while launching an instance.
     - B. Always select the US-East-1-a zone for HA.
     - C. Do not select the AZ; instead let AWS select the AZ.
     - D. The user can never select the Availability Zone while launching an instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

44. ec2-revoke RevokeSecurityGroup Ingress
     - A. Removes one or more security groups from a rule.
     - B. Removes one or more security groups from an Amazon EC2 instance.
     - C. Removes one or more rules from a security group.
     - D. Removes a security group from our account.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

45. Select the correct statement
     - A. You don’t need not specify the resource identifier while stopping a resource.
     - B. You can terminate, stop, or delete a resource based solely on its tags.
     - C. You can’t terminate, stop, or delete a resource based solely on its tags.
     - D. You don’t need to specify the resource identifier while terminating a resource.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

46. What is the time period with which metric data is sent to CloudWatch when detailed monitoring is enabled on an Amazon EC2 instance?
     - A. 15 minutes.
     - B. 5 minutes.
     - C. 1 minute.
     - D. 45 seconds.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

47. A large real -estate brokerage is exploring the option of adding a cost-effective location based alert to their existing mobile application The application backend infrastructure currently runs on AWS Users who opt in to this service will receive alerts on their mobile device regarding real-estate otters in proximity to their location. For the alerts to be relevant delivery time needs to be in the low minutecount the existing mobile app has 5 million users across the us. Which one of the following architectural suggestions would you make to the customer?
     - A. The mobile application will submit its location to a web service endpoint utilizing Elastic Load Balancing and EC2 instances: DynamoDB will be used to store and retrieve relevant otters EC2 instances will communicate with mobile earners/device providers to push alerts back to mobile application.
     - B. Use AWS DirectConnect or VPN to establish connectivity with mobile carriers EC2 instances will receive the mobile applications’ location through carrier connection: ROS will be used to store and relevant relevant offers EC2 instances will communicate with mobile carriers to push alerts back to the mobile application.
     - C. The mobile application will send device location using SQS.
     - D. EC2 instances will retrieve the re levant others from DynamoDB AWS Mobile Push will be used to send offers to the mobile application to push alerts back to the mobile application.
     - E. The mobile application will send device location using AWS Mobile Push EC2 instances will retrieve the relevant offers from DynamoDB EC2 instances will communicate with mobile carriers/device providers to push alerts back to the mobile application.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

48. You are running PostgreSQL on Amazon RDS and it seems to be all running smoothly deployed in one Availability Zone. A database administrator asks you if DB instances running PostgreSQL support Multi-AZ deployments. What would be a correct response to this question?
     - A. Yes.
     - B. Yes but only for small db instances.
     - C. No.
     - D. Yes but you need to request the service from AWS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

49. What is the data model of DynamoDB?
     - A. Since DynamoDB is schema-less, there is no data model.
     - B. ‘Items’, with Keys and one or more Attribute; and ‘Attribute’, with Name and Value.
     - C. ‘Table’, a collection of Items; ‘Items’, with Keys and one or more Attribute; and ’Attribute’, with Name and Value.
     - D. ‘Database’, which is a set of ‘Tables’, which is a set of ‘Items’, which is a set of ‘Attributes’.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

50. What is a placement group in Amazon EC2?
     - A. It is a group of EC2 instances within a single Availability Zone.
     - B. It the edge location of your web content.
     - C. It is the AWS region where you run the EC2 instance of your web content.
     - D. It is a group used to span multiple Availability Zones.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

  
Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)