# Practice Exam 3

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. An instance is launched into a VPC subnet with the network ACL configured to al low all inbound traffic and deny all outbound traffic. The instance’s security group is configured to allow SSH from any IPaddress and deny all outbound traffic. What changes need to be made to allow SSH access to the instance?
   - A. The out bound security group needs to be modified to allow out bound traffic.
   - B. The outbound network ACL needs to be modified to allow outbound traffic.
   - C. Nothing, it can be accessed from any IP address using SS.
   - D. Both the outbound security group and outbound network ACL need to be modified to allow outbound traffic.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

2. You can modify the backup retention period; valid values are 0 (for no backup retention) to a maximum of […] days.
   - A. 45.
   - B. 35.
   - C. 15.
   - D. 5.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

3. To serve Web traffic for a popular product your chief financial officer and IT director have purchased 10 ml large heavy utilization Reserved Instances (RIs) evenly spread across two Availability Zones: Route 53 is used to deliver the traffic to an Elastic Load Balancer (ELB). After several months, the product grows even more popular and you need additional capacity As a result, your company purchases two C3.2xlarge medium utilization RIs You register the two c3 2xlarge instances with your ELB and quickly find that the ml large instances are at 100% of capacity and the c3 2xlarge instances have significant capacity that’s unused Which option is the most cost effective and uses EC2 capacity most effectively?
   - A. Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.
   - B. Configure Autoscaning group and Launch Configuration with ELB to add up to 10 more on-demand ml large instances when triggered by Cloudwatch shut off c3 2xlarge instances.
   - C. Route traffic to EC2 ml large and c3 2xlarge instances directly using Route 53 latency based routing and health checks shut off ELB.
   - D. Configure ELB with two c3 2xiarge Instances and use on-demand Autoscaling group for up to two additional c3.2xlarge instances Shut on mi .large instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

4. An existing application stores sensitive information on a non-boot Amazon EBS data volume attached to an Amazon Elastic Compute Cloud instance. Which of the following approaches would protect the sensitive data on an Amazon EBS volume?
   - A. Upload your customer keys to AWS CloudHS.
   - B. Associate the Amazon EBS volume with AWS CloudHS.
   - C. Re-mount the Amazon EBS volume.
   - D. Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.
   - E. Unmount the EBS volume. Toggle the encryption attribute to True. Re-mount the Amazon EBS volume.
   - F. Snapshot the current Amazon EBS volume. Restore the snapshot to a new, encrypted Amazon EBS volume. Mount the Amazon EBS volume.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

5. A user has launched one EC2 instance in the US West region. The user wants to access the RDS instance launched in the US East region from that EC2 instance. How can the user configure the access for that EC2 instance?
   - A. Configure the IP range of the US West region instance as the ingress security rule of RDS.
   - B. It is not possible to access RDS of the US East region from the US West region.
   - C. Open the security group of the US West region in the RDS security group’s ingress rule.
   - D. Create an IAM role which has access to RDS and launch an instance in the US West region with it.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

6. You have been asked to build AWS infrastructure for disaster recovery for your local applications and within that you should use an AWS Storage Gateway as part of the solution. Which of the following best describes the function of an AWS Storage Gateway?
   - A. Accelerates transferring large amounts of data between the AWS cloud and portable storage devices .
   - B. A web service that speeds up distribution of your static and dynamic web content.
   - C. Connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and AWS’s storage infrastructure.
   - D. Is a storage service optimized for infrequently used data, or ‘cold data’.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

7. While creating an Amazon RDS DB, your first task is to set up a DB […] that controls which IP address or EC2 instance can access your DB Instance.
   - A. security token pool.
   - B. security token.
   - C. security pool.
   - D. security group.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

8. You need to import several hundred megabytes of data from a local Oracle database to an Amazon RDS DB instance. What does AWS recommend you use to accomplish this?
   - A. Oracle export/import utilities.
   - B. Oracle SQL Developer.
   - C. Oracle Data Pump.
   - D. DBMS_FILE_TRANSFER.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

9. In the context of AWS support, why must an EC2 instance be unreachable for 20 minutes rather than allowing customers to open tickets immediately?
   - A. Because most reachability issues are resolved by automated processes in less than 20 minutes.
   - B. Because all EC2 instances are unreachable for 20 minutes every day when AWS does routine maintenance.
   - C. Because all EC2 instances are unreachable for 20 minutes when first launched.
   - D. Because of all the reasons listed here.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

10. HTTP Query-based requests are HTTP requests that use the HTTP verb GET or POST and a Query parameter named […].
   - A. Action.
   - B. Value.
   - C. Reset.
   - D. Retrieve.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

11. A friend tells you he is being charged $100 a month to host his WordPress website, and you tell him you can move it to AWS for him and he will only pay a fraction of that, which makes him very happy. He then tells you he is being charged $50 a month for the domain, which is registered with the same people that set it up, and he asks if it’s possible to move that to AWS as well. You tell him you aren’t sure, but will look into it. Which of the following statements is true in regards to transferring domain names to AWS?
   - A. You can’t transfer existing domains to AW.
   - B. You can transfer existing domains into Amazon Route 53’s management.
   - C. You can transfer existing domains via AWS Direct Connect.
   - D. You can transfer existing domains via AWS Import/Export.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

12. While creating the snapshots using the command line tools, which command should I be using?
   - A. ec2-deploy-snapshot.
   - B. ec2-fresh-snapshot.
   - C. ec2-create-snapshot.
   - D. ec2-new-snapshot.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

13. All Amazon EC2 instances are assigned two IP addresses at launch, out of which one can only be reached from within the Amazon EC2 network?
   - A. Multiple IP address.
   - B. Public IP address.
   - C. Private IP address.
   - D. Elastic IP Address.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

14. When an EC2 instance that is backed by an S3-based AMI is terminated, what happens to the data on the root volume?
   - A. Data is automatically saved as an EBS snapshot.
   - B. Data is automatically saved as an EBS volume.
   - C. Data is unavailable until the instance is restarted.
   - D. Data is automatically deleted.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

15. You’ve created your first load balancer and have registered your EC2 instances with the load balancer. Elastic Load Balancing routinely performs health checks on all the registered EC2 instances and automatically distributes all incoming requests to the DNS name of your load balancer across your registered, healthy EC2 instances. By default, the load balancer uses the […] protocol for checking the health of your instances.
   - A. HTTPS.
   - B. HTTP.
   - C. ICMP.
   - D. IPv6.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

16. Amazon Elastic Load Balancing is used to manage traffic on a fleet of Amazon EC2 instances, distributing traffic to instances across all Availability Zones within a region. Elastic Load Balancing has all the advantages of an on-premises load balancer, plus several security benefits. Which of the following is not an advantage of ELB over an on-premise load balancer?
   - A. ELB uses a four-tier, key-based architecture for encryption.
   - B. ELB offers clients a single point of contact, and can also serve as the first line of defense against attacks on your network.
   - C. ELB takes over the encryption and decryption work from the Amazon EC2 instances and manages it centrally on the load balancer.
   - D. ELB supports end-to-end traffic encryption using TLS (previously SSL) on those networks that use secure HTTP (HTTPS) connections.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

17. A web company is looking to implement an external payment service into their highly available application deployed in a VPC Their application EC2 instances are behind a public lacing ELB Auto scaling is used to add additional instances as traffic increases under normal load the application runs 2 instances in the Auto Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?
   - A. Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the MAT instances.
   - B. Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.
   - C. Whitelist the ELB IP addresses and route payment requests from the Application servers through the EL.
   - D. Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instances public IP address to the payment validation whitelist AP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

18. You are using Amazon SES as an email solution but are unsure of what its limitations are. Which statement below is correct in regards to that?
   - A. New Amazon SES users who have received production access can send up to 1,000 emails per 24-hour period, at a maximum rate of 10 emails per second.
   - B. Every Amazon SES sender has a the same set of sending limits.
   - C. Sending limits are based on messages rather than on recipients.
   - D. Every Amazon SES sender has a unique set of sending limits.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

19. Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? (Choose 2 answers)
   - A. Deploy ElasticCache in-memory cache running in each Availability Zone.
   - B. Implement sharding to distribute load to multiple RDS MySQL instances.
   - C. Increase the RDS MySQL Instance size and Implement provisioned IOPS.
   - D. Add an RDS MySQL read replica in each Availability Zone.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, D</p>
    </details>

20. What does a ‘Domain’ refer to in Amazon SWF?
   - A. A security group in which only tasks inside can communicate with each other.
   - B. A special type of worker.
   - C. A collection of related Workflows.
   - D. The DNS record for the Amazon SWF service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

21. The SQL Server […] feature is an efficient means of copying data from a source database to your DB Instance. It writes the data that you specify to a data file, such as an ASCII file.
   - A. bulk copy.
   - B. group copy.
   - C. dual copy.
   - D. mass copy.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

22. Any person or application that interacts with AWS requires security credentials. AWS uses these credentials to identify who is making the call and whether to allow the requested access. You have just set up a VPC network for a client and you are now thinking about the best way to secure this network. You set up a security group called vpcsecuritygroup. Which following statement is true in respect to the initial settings that will be applied to this security group if you choose to use the default settings for this group?
   - A. Allow all inbound traffic and allow no outbound traffic.
   - B. Allow no inbound traffic and allow all outbound traffic.
   - C. Allow inbound traffic on port 80 only and allow all outbound traffic.
   - D. Allow all inbound traffic and allow all outbound traffic.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

23. Which one of the below is not an AWS Storage Service?
   - A. Amazon S3.
   - B. Amazon Glacier.
   - C. Amazon CloudFront.
   - D. Amazon EBS.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

24. You are trying to launch an EC2 instance, however the instance seems to go into a terminated status immediately. What would probably not be a reason that this is happening?
   - A. The AMI is missing a required part.
   - B. The snapshot is corrupt.
   - C. You need to create storage in EBS first.
   - D. You’ve reached your volume limit.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

25. A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure mat AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?
   - A. Enable Multi-Factor Authentication for your AWS root account.
   - B. Assign an IAM role to the Amazon EC2 instance.
   - C. Store the AWS Access Key ID/Secret Access Key combination in software comments.
   - D. Assign an IAM user to the Amazon EC2 Instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

26. Can we attach an EBS volume to more than one EC2 instance at the same time?
   - A. Yes.
   - B. No.
   - C. Only EC2-optimized EBS volumes.
   - D. Only in read mode.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

27. You need to measure the performance of your EBS volumes as they seem to be under performing. You have come up with a measurement of 1,024 KB I/O but your colleague tells you that EBS volume performance is measured in IOPS. How many IOPS is equal to 1,024 KB I/O?
   - A. 16.
   - B. 256.
   - C. 8.
   - D. 4.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

28. Your company produces customer commissioned one-of-a-kind skiing helmets combining nigh fashion with custom technical enhancements Customers can show off their Individuality on the ski slopes and have access to head-up-displays. GPS rear-view cams and any other technical innovation they wish to embed in the helmet. The current manufacturing process is data rich and complex including assessments to ensure that the custom electronics and materials used to assemble the helmets are to the highest standards Assessments are a mixture of human and automated assessments you need to add a new set of assessment to model the failure modes of the custom electronics using GPUs with CUDA, across a cluster of servers with low latency networking. What architecture would allow you to automate the existing process using a hybrid approach and ensure that the architecture can support the evolution of processes over time?
   - A. Use AWS Data Pipeline to manage movement of data &amp; meta-data and assessments Use an autoscaling group of G2 instances in a placement group.
   - B. Use Amazon Simple Workflow (SWF) to manages assessments, movement of data &amp; meta-data Use an auto-scaling group of G2 instances in a placement group.
   - C. Use Amazon Simple Workflow (SWF) to manages assessments movement of data &amp; meta-data Use an auto-scaling group of C3 instances with SR-IOV (Single Root 1/0 Virtualization).
   - D. Use AWS data Pipeline to manage movement of data &amp; meta-data and assessments use autoscaling group of C3 with SR-IOV (Single Root 1/0 virtualization).

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

29. You are designing Internet connectivity for your VPC. The Web servers must be available on the Internet. The application must have a highly available architecture. Which alternatives should you consider? (Choose 2 answers)
   - A. Configure a NAT instance in your VPC Create a default route via the NAT instance and associate it with all subnets Configure a DNS A record that points to the NAT instance public IP address.
   - B. Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers Configure a Route 53 CNAME record to your Cloud Front distribution.
   - C. Place all your web servers behind EL8 Configure a Route 53 CNAME to point to the ELB DNS name.
   - D. Assign EIPs to all web servers. Configure a Route 53 record set with all EIPs. With health checks and DNS failover.
   - E. Configure ELB with an EIP Place all your Web servers behind ELB Configure a Route 53 A record that points to the EIP.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C, D</p>
    </details>

30. You need to configure an Amazon S3 bucket to serve static assets for your public-facing web application. Which methods ensure that all objects uploaded to the bucket are set to public read? (Choose 2 answers)
   - A. Set permissions on the object to public read during upload.
   - B. Configure the bucket ACL to set all objects to public read.
   - C. Configure the bucket policy to set all objects to public read.
   - D. Use AWS Identity and Access Management roles to set the bucket to public read.
   - E. Amazon S3 objects default to public read, so no action is needed.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, C</p>
    </details>

31. A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following is important when thinking about being able to quickly launch resources in AWS to ensure business continuity in case of a disaster?
   - A. Create and maintain AMIs of key servers where fast recovery is required.
   - B. Regularly run your servers, test them, and apply any software updates and configuration changes.
   - C. All items listed here are important when thinking about disaster recovery.
   - D. Ensure that you have all supporting custom software packages available in AW.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

32. You are developing a new mobile application and are considering storing user preferences in AWS.2w This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be SOKB in size Additionally 5 million customers are expected to use the application on a regular basis. The solution needs to be cost-effective, highly available, scalable and secure, how would you design a solution to meet the above requirements?
   - A. Setup an RDS MySQL instance in 2 Availability Zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and accesscredentials.
   - B. Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize ST.
   - C. Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.
   - D. Setup an RDS MySQL instance with multiple read replicas in 2 Availability Zones to store the user preference data. The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.
   - E. Store the user preference data in S3 Setup a DynamoDB table with an item for each user and an item attribute pointing to the user’ S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly utilize STS, Web identity Federation, and S3 ACLs to authenticate and authorize access.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

33. In the Amazon RDS which uses the SQL Server engine, what is the maximum size for a Microsoft SQL Server DB Instance with SQL Server Express edition?
   - A. 10GB per DB.
   - B. 100GB per DB.
   - C. 2TB per DB.
   - D. 1TB per DB.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

34. You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name.example.com. You decide to use Route 53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. Dunning a DR test you notice that when you disable all web servers in one of the regions Route 53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)
   - A. Latency resource record sets cannot be used in combination with weighted resource record sets.
   - B. You did not setup an HTTP health check tor one or more of the weighted resource record sets associated with me disabled web servers.
   - C. The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.
   - D. One of the two working web servers in the other region did not pass its HTTP health check.
   - E. You did not set ‘Evaluate Target Health’ to ‘Yes’ on the latency alias resource record set associated with example com in the region where you disabled the servers.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B, E</p>
    </details>

35. Amazon EBS provides the ability to create backups of any Amazon EC2 volume into what is known as […].
   - A. snapshots.
   - B. images.
   - C. instance backups.
   - D. mirrors.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

36. You’ve been hired to enhance the overall security posture for a very large e-commerce site They have a well architected multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3 They are using a combination of RDS and DynamoOB for their dynamic data and then archiving nightly into S3 for further processing with EMR They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access. Which approach provides a cost effective scalable mitigation to this kind of attack?
   - A. Recommend that they lease space at a DirectConnect partner location and establish a lG DirectConnect connection to their vPC they would then establish Internet connectivity into their space, filter the traffic in hardware Web Application Firewall (WAF). And then pass the traffic through the DirectConnect connection into their application running in their VPC,
   - B. Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier sub net.
   - C. Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host based WAF They would redirect Route 53 to resolve to the new WAF tier ELB The WAF tier wouldthier pass the traffic to the current web tier The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group
   - D. Remove all but TLS 1 2 from the web tier ELB and enable Advanced Protocol Filtering This will enable the ELB itself to perform WAF functionality.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

37. You are designing the network infrastructure for an application server in Amazon VPC Users will access all the application instances from the Internet as well as from an on-premises network The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?
   - A. Configure a single routing Table with a default route via the Internet gateway Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPCsubnets.
   - B. Configure a single routing table with a default route via the internet gateway Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router Associatethe routing table with all VPC subnets.
   - C. Configure a single routing table with two default routes: one to the internet via an Internet gateway the other to the on-premises network via the VPN gateway use this routing table across all subnets in your VPC.
   - D. Configure two routing tables one that has a default route via the Internet gateway and another that has a default route via the VPN gateway Associate both routing tables with each VPC subnet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

38. You have multiple VPN connections and want to provide secure communication between sites using the AWS VPN CloudHub. Which statement is the most accurate in describing what you must do to set this up correctly?
   - A. Create a virtual private gateway with multiple customer gateways, each with unique Border Gateway Protocol (BGP) Autonomous System Numbers (ASNs).
   - B. Create a virtual private gateway with multiple customer gateways, each with a unique set of keys.
   - C. Create a virtual public gateway with multiple customer gateways, each with a unique Private subnet.
   - D. Create a virtual private gateway with multiple customer gateways, each with unique subnet id.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

39. A user is aware that a huge download is occurring on his instance. He has already set the Auto Scaling policy to increase the instance count when the network I/O increases beyond a certain limit. How can the user ensure that this temporary event does not result in scaling?
   - A. The network I/O are not affected during data download.
   - B. The policy cannot be set on the network I/O.
   - C. There is no way the user can stop scaling as it is already configured.
   - D. Suspend scaling.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

40. The Amazon EC2 web service can be accessed using the […] web services messaging protocol. This interface is described by a Web Services Description Language (WSDL) document.
   - A. SOAP.
   - B. DCOM.
   - C. CORBA.
   - D. XML-RPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

41. Which of the following are true regarding encrypted Amazon Elastic Block Store (EBS) volumes? (Choose 2 answers)
   - A. Supported on all Amazon EBS volume types.
   - B. Snapshots are automatically encrypted.
   - C. Available to all instance types.
   - D. Existing volumes can be encrypted.
   - E. Shared volumes can be encrypted.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A, B</p>
    </details>

42. Is Federated Storage Engine currently supported by Amazon RDS for MySQL?
   - A. Only for Oracle RDS instances.
   - B. Yes.
   - C. No.
   - D. Only in VPC.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: C</p>
    </details>

43. While creating the snapshots using the API, which Action should I be using?
   - A. MakeSnapShot.
   - B. FreshSnapshot.
   - C. DeploySnapshot.
   - D. CreateSnapshot.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

44. A customer needs to capture all client connection information from their load balancer every five minutes. The company wants to use this data for analyzing traffic patterns and troubleshooting their applications. Which of the following options meets the customer requirements?
   - A. Enable AWS CloudTrail for the load balancer.
   - B. Enable access logs on the load balancer.
   - C. Install the Amazon CloudWatch Logs agent on the load balancer.
   - D. Enable Amazon CloudWatch metrics on the load balancer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

45. Will my standby RDS instance be in the same Region as my primary?
   - A. Only for Oracle RDS types.
   - B. Yes.
   - C. Only if configured at launch.
   - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

46. If I want my instance to run on a single-tenant hardware, which value do I have to set the instance’s tenancy attribute to?
   - A. Dedicated.
   - B. Isolated.
   - C. One.
   - D. Reserved.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

47. Can the string value of ‘Key’ be prefixed with :aws:’?
   - A. Only in GovCloud.
   - B. Only for S3 not EC2.
   - C. Yes.
   - D. No.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: D</p>
    </details>

48. A user wants to increase the durability and availability of the EBS volume. Which of the below mentioned actions should he perform?
   - A. Take regular snapshots.
   - B. Create an AM.
   - C. Create EBS with higher capacity.
   - D. Access EBS regularly.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: A</p>
    </details>

49. What does Amazon RDS stand for?
   - A. Regional Data Server.
   - B. Relational Database Service.
   - C. Nothing.
   - D. Regional Database Service.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>

50. You have been asked to set up monitoring of your network and you have decided that Cloudwatch would be the best service to use. Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real-time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications. Which of the following items listed can AWS Cloudwatch monitor?
   - A. Log files your applications generate.
   - B. All of the items listed on this page.
   - C. System-wide visibility into resource utilization, application performance, and operational health.
   - D. Custom metrics generated by your applications and services.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary>
      <p>Correct answer: B</p>
    </details>


Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](./README.md)