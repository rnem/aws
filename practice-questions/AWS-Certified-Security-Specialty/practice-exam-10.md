# Practice Exam 10 (app.blowstack.com)

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---
1. Your company has recently implemented an AWS Transit Gateway to manage communication across various VPCs, on-premises data centers, and multiple AWS accounts. After deployment, several issues emerged such as packet loss, intermittent connectivity, and security group violations. To troubleshoot these problems, you have been asked to analyze the log sources. Which of the following log sources should you analyze to identify and resolve the network security issues? **(SELECT 3 ANSWERS)**

    - A. CloudTrail logs
    - B. VPC Flow Logs
    - C. AWS Lambda Logs
    - D. Transit Gateway Flow Logs
    - E. AWS Config Logs

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,B,D 
  		<br><br>
  		Explanation:
      CloudTrail logs AWS API calls, including those related to the configuration and operation of the AWS Transit Gateway, offering insights into changes that may have affected network connectivity or security.
      
      VPC Flow Logs provide visibility into the IP traffic going to and from network interfaces, which helps identify abnormal traffic patterns, packet drops, and potential security violations.
      
      Transit Gateway Flow Logs give detailed information about traffic that traverses the Transit Gateway, helping you to identify patterns such as packet loss or routing issues.
    </details>

2. An organization has implemented cross-account access using AWS STS AssumeRole to share resources between production and development AWS accounts. A security audit reveals that a developer is able to access production EC2 instances, which is against the company's security policy. The policy dictates that developers should have access to development resources only. As a security specialist, you need to resolve this issue to ensure developers cannot access production resources. What should you do to correct this situation?

    - A. Delete the STS AssumeRole on the development account to prevent the developer from accessing the production account.
    - B. Change the developer's IAM user permissions in the development account to prevent access to the production AWS account.
    - C. Review and modify the trust policy of the production account's role to ensure that it does not allow the development account to assume roles with permissions to access production resources.
    - D. Implement an S3 bucket policy in the production account to prevent access to production EC2 instances by the developer.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      The likely cause of the unintended access to production resources is an overly permissive trust policy on the role within the production account. This policy needs to be tightened to restrict the AssumeRole operation only to the necessary entities.
    </details>
	
3. Your company has a multi-account AWS environment, managed under AWS Organizations, to maintain separate workloads for development, testing, and production. Compliance requirements mandate strict controls over root account usage across all accounts, especially to prevent any services from being activated by the root user. As a security specialist, you need to ensure the root account is restricted from enabling AWS services. Which SCP would be most effective for this use case?

    - A. An SCP that denies all actions if the request is made by the root user. 
    - B. An SCP that denies all actions on IAM only. 
    - C. An SCP that enforces Multi-Factor Authentication (MFA) for service activation. 
    - D. An SCP that allows all actions if the requester is an IAM user.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      An SCP (Service Control Policy) can be attached to the OU (organizational unit) or the root of AWS Organizations to control permissions across all accounts. An SCP that explicitly denies all actions if the 'aws:PrincipalType' is 'Root' effectively prevents the root account from enabling AWS services across the organization.
    </details>
	
4. As an AWS Security Specialist, you are tasked with designing a solution to centralize the security findings from various AWS accounts and services to facilitate proactive threat detection and incident response. Your organization wants to be able to visualize and alarm on abnormal activities or potential security issues in real time. Which of the following approaches best utilizes Amazon CloudWatch to meet the requirement?

    - A. Use CloudWatch Logs to manually upload security findings from each service and set up scheduled Lambda functions to parse and analyze these logs on a daily basis.
    - B. Create a CloudWatch Dashboard for each individual AWS service to display its security findings and manually inspect them for anomalies.
    - C. Deploy an EC2 instance that periodically pulls security findings from each AWS service's API and emails a CSV summary to the security team.
    - D. Configure Amazon CloudWatch Events to receive security findings from AWS services such as Amazon GuardDuty, AWS Security Hub, and Amazon Inspector. Then use CloudWatch Alarms to trigger notifications or automated responses based on the findings.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      Amazon CloudWatch Events can be used to centralize and monitor security findings by receiving events from AWS services. CloudWatch Alarms can then be set up to respond to specific security events, enabling real-time alerting and automated response, which meets the proactive threat detection and incident response requirements.
    </details>
	
5. A company operates a web service that frequently processes sensitive data and needs to ensure both confidentiality and integrity of the data in transit while communicating across different AWS Regions. They also want to deploy AWS Network Firewall to monitor and protect their traffic. The company has decided to use private VIFs and public VIFs for their cross-Region networking setup. Which of the following configurations should they consider to meet their requirements? **(SELECT 2 ANSWERS)**

    - A. Rely on public VIFs without additional encryption, because they inherently provide security.
    - B. Use AWS Direct Connect Gateway to route all traffic without any additional security concerns.
    - C. Implement AWS Network Firewall to monitor and protect traffic within VPCs using private VIFs.
    - D. Encrypt data in transit using AWS Key Management Service (KMS) and ensure communication is done over private VIFs.
    - E. Replace AWS Network Firewall with traditional on-premises firewalls via VPN.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C,D
  		<br><br>
  		Explanation:
      AWS Network Firewall can be integrated to apply security rules and inspect traffic within VPCs, providing an additional layer of security for data in transit.
      Encrypting data in transit using KMS and communicating over private VIFs ensures data is both confidential and protected from unauthorized access.
    </details>

6. your company, SecureCorp, has recently noticed an increase in the number of network security incidents. You are tasked with designing and implementing network security controls to mitigate these incidents. To achieve this, you decide to use AWS Firewall Manager to better manage your security policies across a range of AWS accounts and services. As part of your role, you need to identify and remove any unnecessary network access that may be contributing to the security incidents. Which of the following actions should you take to accomplish this task using AWS Firewall Manager? **(SELECT 3 ANSWERS)**

    - A. Implement centralized security group rules to restrict unnecessary inbound and outbound traffic. 
    - B. Deploy AWS Shield to protect against DDoS attacks and ensure it is managed through AWS Firewall Manager. 
    - C. Utilize AWS CloudTrail to monitor network traffic in real time. 
    - D. Set up AWS Direct Connect to establish a dedicated network connection to your on-premises data center. 
    - E. Create and enforce AWS WAF rules across multiple accounts to block known malicious IP addresses.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,B,E
  		<br><br>
  		Explanation:
      A key feature of AWS Firewall Manager is the ability to create centralized security group policies to enforce rules that restrict unnecessary network traffic.
      AWS Firewall Manager can be used to ensure that all accounts within your organization are protected with AWS Shield for DDoS protection.
      AWS Direct Connect is a service to establish a dedicated network connection, but it does not directly contribute to identifying or removing unnecessary network access.
      AWS Firewall Manager can be used to enforce AWS WAF rules, which allow you to block traffic from known malicious IP addresses across multiple accounts.
    </details>
	
7. An AWS customer has deployed a multi-tier web application in a VPC. The application consists of a load balancer, web servers on EC2 instances, and a database. The security team observes unusual traffic patterns indicating that the web servers are under a DDoS attack. As an AWS Certified Security - Specialty candidate, you are asked which of the following would be the FIRST step in mitigation using Security Groups to reduce the impact of the attack.

    - A. Update the Security Groups associated with the web server instances to only allow traffic from the load balancer.
    - B. Remove all inbound rules from the Security Groups to block all incoming traffic to the web servers.
    - C. Change the outbound rules of the Security Groups to block all responses to the attacking IP addresses.
    - D. Increase the number of rules in the Security Groups to specifically allow each legitimate traffic source.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      This is correct because Security Groups act as a virtual firewall for EC2 instances, and by restricting inbound traffic to only allow connections from the load balancer, you can mitigate the DDoS attack by blocking direct traffic to your instances that could be part of the attack.
    </details>
	
8. A company has deployed a web application in a VPC on AWS. The application is served through an Elastic Load Balancer (ELB) and runs on EC2 instances that are part of an Auto Scaling group. The EC2 instances are placed in private subnets, and the ELB is in a public subnet. The Security Team has been notified about recent DDoS attacks targeted at the industry. The team needs to decide which telemetry sources should be prioritized for monitoring to effectively detect and mitigate such attacks while ensuring that the EC2 instances remain secure. Which telemetry source should the Security Team prioritize and why?

    - A. Security Groups
    - B. Traffic Mirroring
    - C. VPC Flow Logs
    - D. Load balancer logs

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      Load balancer logs provide comprehensive data about the incoming traffic to the ELB, which is the first point of contact with the web application. Monitoring these logs is essential for detecting suspicious patterns and volumes that may indicate a DDoS attack. The logs can also help in identifying the source of the attack and aid in implementing appropriate security measures, such as rate-based rules, to mitigate it.
    </details>
	
9. A company has designed a multi-tier web application to be deployed on AWS. The web application will be utilizing several AWS services, and the security team is responsible for maintaining the operating system's security posture for all Amazon EC2 instances. During an architectural review using the AWS Well-Architected Framework, the team recognizes the need for a tool to help automate the process of patching, managing configurations, and maintaining compliance of these EC2 instances at scale. Which AWS service should the security team implement to ensure the ongoing security and compliance of the EC2 instances while aligning with the Management and Security Governance domain's best practices?

    - A. AWS Systems Manager should be implemented to automate the patching process, manage configurations, and ensure compliance of the EC2 instances.
    - B. Amazon GuardDuty should be implemented to manage and maintain the security of the EC2 instances.
    - C. AWS Config should be implemented to maintain compliance and automate patching of the EC2 instances.
    - D. Amazon Inspector should be implemented to handle configuration management and compliance requirements of EC2 instances.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      AWS Systems Manager is an AWS service that provides a unified user interface so you can track and manage the infrastructure on AWS. It provides features such as patch management, which helps in maintaining security and compliance requirements easily. This aligns well with the Management and Security Governance domain of the AWS Well-Architected Framework.
    </details>
	
10. You are a security engineer for a multinational organization that is using AWS to host their workloads. The company has multiple departments such as finance, HR, and development, each requiring different access levels to AWS resources. To streamline access management, you decide to use AWS IAM Groups. You create groups such as 'Finance', 'HR', and 'Development', assigning the appropriate IAM policies to each group. An audit requirement mandates that all users requesting access to AWS resources must go through an approval workflow and be assigned to the correct IAM Group based on their role. Your solution must ensure that the users have the necessary permissions to perform their job functions, but not more than what is required to comply with the principle of least privilege. How would you best meet this requirement while also making the user onboarding process as efficient as possible?

    - A. Integrate AWS IAM Identity Center (AWS Single Sign-On) with your corporate identity provider and configure permission sets that map to IAM Groups for role-based access.
    - B. Employ AWS IAM Access Analyzer to automatically assign users to groups based on their access patterns and requirements.
    - C. Use Amazon Cognito to create user pools for each department and integrate these with IAM policies to manage access.
    - D. Manually create IAM Users for each employee and attach individual IAM policies directly to their user accounts based on their department.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      AWS IAM Identity Center (AWS Single Sign-On) allows for integration with existing corporate identity providers using SAML 2.0. It supports the creation of permission sets that can be mapped to IAM Roles and Groups, enabling role-based access control that complies with the principle of least privilege. It can streamline the user onboarding process with automated workflows.
      Amazon Cognito is primarily used for managing user authentication in applications, not for managing IAM roles and policies at the AWS resource level. While it does integrate with IAM, it is not directly used to map users to IAM Groups or manage access at the AWS service level.
    </details>
	
11. A company is deploying a new set of instances in their AWS environment to handle sensitive customer data. The Security team needs to ensure that any potential security issues or vulnerabilities within these instances are identified as part of their Infrastructure Security strategy. They want the ability to continuously assess these instances for unintended network accessibility and vulnerabilities. Which AWS service should they implement to automatically discover, review, and report vulnerabilities and make recommendations to improve security?

    - A. Enable VPC Flow Logs to capture information about the IP traffic going to and from network interfaces in your VPC.
    - B. Implement Amazon Inspector to automatically assess the instances for security and compliance with best practices.
    - C. Deploy AWS Shield Advanced to protect against potential Distributed Denial of Service (DDoS) attacks.
    - D. Use Traffic Mirroring to capture and inspect network traffic at the packet level.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. This aligns with the team’s goal to identify and report vulnerabilities and is the core function of Amazon Inspector.
    </details>
	
12. Your company has a strict policy of maintaining operational security across its AWS environment. The security team wants to be alerted of any unusual API activity that deviates from the typical patterns of usage, such as spikes in provisioning particular types of resources which could indicate potential security concerns. They are looking for automated analysis and monitoring without having to manually comb through logs for anomalies. Which AWS service should you implement to meet this requirement?

    - A. AWS CloudWatch Logs Insights
    - B. AWS Security Hub
    - C. AWS CloudTrail Insights
    - D. AWS GuardDuty

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      While AWS Security Hub provides a comprehensive view of your security state within AWS and helps you check your environment against security industry standards and best practices, it is not specifically designed to provide automated analysis of API activity and detect unusual patterns, which is the core requirement of the scenario.
      AWS CloudTrail Insights automatically detects unusual API activity within your AWS account. It analyzes normal management events to establish a baseline, and then continuously evaluates management events to detect patterns that deviate from this baseline. CloudTrail Insights can alert the security team when it detects unusual activity, making it the right choice for the company's requirement.
    </details>
	
13. A company has deployed their web application on AWS and utilizes AWS WAF for protection against common web exploits. The security team wants to ensure that any malicious IP addresses that are detected by AWS WAF are automatically blocked for a period of 24 hours. They require an automated solution that can respond to AWS WAF findings by updating security groups to deny access from the malign IP addresses. Which combination of AWS services can be used to automate this remediation process?

    - A. Use AWS Lambda in conjunction with Amazon EventBridge to listen for AWS WAF findings and trigger a Lambda function that updates the security group rules to block the detected IP addresses.
    - B. Configure AWS WAF to directly integrate with AWS Shield to automatically update the security groups.
    - C. Employ AWS Config to monitor the WAF findings and directly update the security group rules to block offending IP addresses.
    - D. Use AWS Systems Manager runbooks to automatically run remediation actions based on AWS WAF findings.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      This answer is correct because Amazon EventBridge can capture AWS WAF findings as events and trigger a Lambda function in response. The Lambda function has the capability to run custom code, which can include scripts to update security groups to block IP addresses.
    </details>
	
14. A company has deployed a web application in a VPC within AWS. The web application has instances deployed in both public and private subnets. The public subnet contains an application load balancer and the private subnet contains the web servers. The company needs to ensure that the web application is secure and accessible to users over the internet. They also need to restrict access to the web servers so only the application load balancer can communicate with them. Which of the following configurations should the company implement to meet these requirements? **(SELECT 3 ANSWERS)**

    - A. Attach an Internet Gateway to the VPC.
    - B. Attach a NAT Gateway to the public subnet.
    - C. Configure Network ACLs to allow unrestricted inbound and outbound traffic for the web servers.
    - D. Configure Security Groups for the web servers to allow inbound traffic only from the application load balancer.
    - E. Configure Security Groups to allow inbound traffic to the application load balancer from the internet.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,D,E
  		<br><br>
  		Explanation:
      An Internet Gateway is essential for instances in the public subnet to send and receive traffic to/from the internet.
      To ensure that only the application load balancer in the public subnet can communicate with the web servers in the private subnet, Security Groups on the web servers should allow inbound traffic only from the application load balancer's security group.
      Security Groups associated with the application load balancer should allow inbound HTTP/HTTPS traffic from any source to serve end-users.
    </details>
	
15. As an AWS Certified Security Specialist, you are responsible for ensuring that your company's S3 buckets containing sensitive customer data are classified correctly and remain compliant with regulatory standards. The company uses AWS Config to monitor resource configurations and compliance. To automate the process of identifying and classifying S3 buckets based on their contents, which of the following actions should be implemented while considering the use of AWS Config?

    - A. Enable AWS Config to directly analyze the content of S3 buckets and classify them automatically based on predefined content categories.
    - B. Configure AWS Config rules to evaluate the tagging of S3 buckets, and use AWS Lambda to analyze the content and automatically apply the appropriate classification tags.
    - C. Utilize Amazon Macie along with AWS Config to automatically classify and protect sensitive data stored in Amazon S3 buckets.
    - D. Use AWS Config snapshot feature to capture the current state of S3 buckets and then manually classify each bucket based on the snapshot data.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config rules can be used to check whether your S3 buckets are following your tagging policies, but AWS Config does not analyze the content within the buckets. Therefore, you would need to implement a complementary service like AWS Lambda to programmatically analyze the content and automatically tag the buckets accordingly, based on the results of the content analysis.
      Although Amazon Macie is an excellent service for discovering and protecting sensitive data, it does not integrate directly with AWS Config to enforce compliance or automatically classify data. AWS Config rules must trigger an evaluation based on resource configurations, not content classification directly.
    </details>

16. A company has recently deployed a microservices architecture on AWS, and each microservice needs to access different secrets and credentials to communicate with various services securely. To maintain a high-security standard, the company wants to ensure that these secrets and credentials are managed and stored securely, and can be accessed programmatically by the compute workloads without causing exposure to any security risks. Which AWS service should they use to store secrets and credentials and seamlessly integrate with their compute workloads while adhering to best security practices for Infrastructure Security?

    - A. AWS Key Management Service (KMS)
    - B. AWS CloudFormation
    - C. AWS Simple Storage Service (S3)
    - D. AWS Systems Manager Parameter Store

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      AWS Systems Manager Parameter Store provides a secure and scalable way to store configuration data and secrets. It allows for secure storage of plaintext data and encrypted sensitive information using KMS. It also provides easy integration with AWS Identity and Access Management (IAM) to control access to the secrets, and can be integrated seamlessly with AWS compute workloads.
    </details>
	
17. A company, RedisTech, recently discovered that sensitive data stored in an S3 bucket was accessed by an unauthorized individual. Upon investigation, it was found that there was an IAM access key enabled for a user account with unintended permissions that allowed access to the S3 bucket. The security team suspects that the key might have been wrongly configured or compromised. As an AWS Certified Security - Specialty exam candidate, which of the following actions should you recommend to investigate and mitigate this issue? **(SELECT 3 ANSWERS)**

    - A. Delete the S3 bucket to remove sensitive data from being accessed.
    - B. Review the IAM policy attached to the user to identify permissions granted.
    - C. Rotate the IAM access key immediately and update any systems that use this key.
    - D. Enable CloudTrail logging and inspect the logs to determine who used the IAM access key and when.
    - E. Monitor the S3 bucket for any further unauthorized access.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,C,D
      <br><br>
      Explanation:
      This can help identify which permissions were granted and whether they were more permissive than intended.
      Rotating the access key will render the compromised key invalid, helping to secure access.
      CloudTrail logs provide a history of API calls made using the access key, which can help trace unauthorized access.
    </details>
	
18. A company has decided to enhance the security of its sensitive data stored on AWS. They want to implement additional controls for data at rest to ensure its confidentiality and integrity. The company is already using Amazon S3 for object storage, Amazon RDS for relational data, DynamoDB for NoSQL data, Amazon SQS for message queuing, EBS volumes attached to EC2 instances, and Amazon EFS for file storage. The security team is considering AWS CloudHSM to manage encryption keys and to automatically integrate with these services to encrypt data at rest. Which of the following approaches would be MOST effective for using AWS CloudHSM to encrypt data at rest for all these services?

    - A. Set up all AWS services to use AWS KMS for encryption at rest, and use CloudHSM only as a key storage backend for KMS without any direct integration with the services.
    - B. Enable AWS CloudHSM's automatic encryption feature and have CloudHSM encrypt all data in the AWS environment, including Amazon S3, Amazon RDS, DynamoDB, Amazon SQS, Amazon EBS, and Amazon EFS, by default.
    - C. Use AWS CloudHSM to directly enable server-side encryption for Amazon S3, Amazon RDS, DynamoDB, Amazon SQS, Amazon EBS, and Amazon EFS without any additional configuration.
    - D. Configure Amazon S3, Amazon RDS, DynamoDB, and EBS to use AWS CloudHSM managed customer master keys (CMKs) for server-side encryption, and implement a client-side encryption solution for Amazon SQS and Amazon EFS using CloudHSM.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      AWS CloudHSM provides a secure key storage and management solution and allows direct integration with certain AWS services for server-side encryption, including Amazon S3, Amazon RDS, DynamoDB, and EBS volumes. However, for services that do not integrate directly with AWS CloudHSM such as Amazon SQS and Amazon EFS, implementing client-side encryption with keys managed by CloudHSM is an effective solution.
    </details>
	
19. Given a scenario where an Amazon EC2 instance with an associated EBS volume is suspected to have been compromised, you have been tasked to capture relevant forensices data for later analysis. What is the MOST appropriate immediate action to secure the forensics data?

    - A. Reboot the instance to remove any possible malware that's currently in memory.
    - B. Create an EBS snapshot of the volume.
    - C. Shut down the instance immediately to preserve the state of the data.
    - D. Detach the EBS volume from the instance and reattach it to a forensics workstation.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      Creating a snapshot of the EBS volume ensures that there is an exact copy of the data at the time of the snapshot, preserving the state of the data for later forensic analysis without affecting the running instance or the compromised data. This is a crucial step in digital forensic practices to maintain data integrity.
    </details>
	
20. John is a security engineer at a company that has recently migrated its applications to AWS. His team is responsible for ensuring the security of the company's AWS environment. They have enabled AWS CloudTrail to log API activities in AWS. John wants to set up a detailed monitoring and alerting system based on the CloudTrail logs to promptly detect any unusual or unauthorized activities related to security. Which of the following steps should John take to achieve this goal? **(SELECT 3 ANSWERS)**

    - A. Store CloudTrail logs only in the default Amazon S3 bucket without any additional security measures.
    - B. Configure AWS Config to monitor changes to configuration and detect compliance issues.
    - C. Integrate CloudTrail with Amazon CloudWatch to create custom metrics and alarms.
    - D. Enable log file validation to verify the integrity of CloudTrail logs.
    - E. Disable CloudTrail logs for non-critical resources to limit the volume of data.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,C,D
  		<br><br>
  		Explanation:
      AWS Config can track changes in your resources and help detect any non-compliant configurations that could lead to security vulnerabilities.
      Integrating CloudTrail with CloudWatch allows you to create custom alarms and metrics which can alert you in real-time about unusual activities.
      Log file validation is crucial to ensure that the logs have not been tampered with and establishes trust in the logging system.
    </details>
	
21. One of your developers has reported that they have inadvertently committed AWS IAM access keys to a public GitHub repository that are associated with a highly privileged IAM user created for automation tasks. You need to take immediate actions to mitigate any potential security breaches due to the exposure of these credentials. What should be the FIRST step to investigate and revoke unintentional permissions granted to external entities through these access keys?

    - A. Immediately delete the IAM user account associated with the exposed access keys.
    - B. Change the IAM user's password and enforce multi-factor authentication (MFA) immediately.
    - C. Revoke the exposed IAM access keys and then review the IAM user's credentials report and access advisor to investigate any unauthorized use.
    - D. Do nothing until an actual security breach has been detected to avoid any disruption of services.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      Revoking the exposed IAM access keys immediately is the first step in preventing further abuse, ensuring that no unauthorized entities can use the keys for access. The credentials report and Access Advisor can then be used to review the permissions associated with the user and to assess if those permissions have been used recently, indicating a potential security breach.
    </details>
	
22. You are a security specialist working for a company that has a security-conscious workload deployed on AWS. The company has enabled Amazon GuardDuty for continuous monitoring and malicious activity detection. You've been tasked with ensuring that potential security incidents are caught in a timely fashion and that the incident logs are retained in an immutable form for compliance purposes. The company also requires that logs are available for immediate analysis when needed. Which of the following capabilities of Amazon GuardDuty best fulfills these requirements?

    - A. GuardDuty's ability to autoscale according to the volume of AWS events.
    - B. GuardDuty's scheduled scan intervals for S3 data access logs.
    - C. GuardDuty's built-in machine learning algorithms that identify and prioritize potential threats.
    - D. GuardDuty's integration with Amazon CloudWatch Events and Amazon S3 bucket with object versioning and MFA Delete enabled for log immutability.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      This is the correct answer because Amazon GuardDuty can be configured to send findings to Amazon CloudWatch Events, which in turn can trigger real-time alerts or remediation actions. Storing logs in an Amazon S3 bucket with object versioning safeguards against accidental deletion and overwriting of log data, and enabling Multi-Factor Authentication (MFA) Delete adds another layer of security by requiring MFA to delete object versions. This setup satisfies the requirements of timeliness, analysis-readiness, and immutability of logs.
    </details>
 
23. You are a security analyst at a company that utilizes AWS services extensively. Recently, there has been an unexpected network activity spike within your AWS environment that suggests a potential compromise. During your root cause analysis, you want to use Amazon VPC Flow Logs to identify the traffic patterns and any unauthorized access. Which of the following actions would be most effective in using VPC Flow Logs for root cause analysis after a suspected security incident?

  - A. Configuring Amazon VPC Flow Logs to send an alert every time a new connection is made to any resource within the VPC.
    - B. Analyzing the VPC Flow Logs data for the time frame of the incident to identify abnormal traffic patterns or IPs that could indicate a breach.
    - C. Deploying VPC Flow Logs for the first time immediately after the traffic spike to capture retroactive traffic data for the incident.
    - D. Enabling VPC Flow Logs to change the security groups and network access control lists (NACLs) of your VPC automatically in response to the compromise.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      Amazon VPC Flow Logs capture information about the IP traffic going to and from network interfaces in a VPC. Analyzing this data allows security analysts to investigate the incident by identifying patterns that represent potentially unauthorized or malicious activity.
    </details>
	
24. Your company recently set up an AWS Direct Connect link between their on-premises data center and their AWS environment to improve network performance and reduce latency. After some initial operations, your networking team notices intermittent connectivity issues and degraded performance between the on-premises environment and AWS. You are tasked with analyzing the log sources to identify and troubleshoot the problem. What steps should you take to resolve the network security issue? **(SELECT 3 ANSWERS)**

    - A. Examine the on-premises router logs for any signs of mismatched MTU settings or errors.
    - B. Enable AWS CloudTrail logs to monitor API calls related to Direct Connect.
    - C. Review AWS Config Rules for non-compliant resources.
    - D. Check AWS CloudWatch Logs for VPC Flow Logs to identify any unusual traffic patterns or IPs.
    - E. Review the AWS Direct Connect BGP logs to ensure that peering sessions are stable and correctly configured.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,D,E
  		<br><br>
  		Explanation:
      MTU mismatches can cause network performance issues and connectivity problems; checking the on-premises router logs can help identify any related errors.
      VPC Flow Logs in CloudWatch Logs can provide insights into the traffic flowing in and out of your VPCs, helping to identify unusual traffic patterns or IP addresses that might be causing connectivity issues.
      BGP logs provide valuable information about the state of your peering sessions, including any flapping or misconfigurations that could be contributing to instability.
      
      CloudTrail logs (which track API calls) would not be as relevant for troubleshooting network performance issues
      AWS Config Rules are more about resource compliance and wouldn't directly help with connectivity troubleshooting
    </details>
	
25. You are a Solutions Architect working for a financial services company that needs to comply with various industry regulations. As part of your role, you are tasked with evaluating the compliance of AWS resources and identifying sensitive data stored in S3 buckets. You decide to use Amazon Macie to discover and classify sensitive data, and your company also requires a way to access compliance reports relating to AWS services and infrastructure. Which AWS service would best facilitate access to these compliance reports, which could be helpful to understand how to configure Macie according to compliance needs?

    - A. AWS Trusted Advisor
    - B. AWS Security Hub
    - C. AWS Artifact
    - D. AWS Config

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      AWS Artifact is the correct choice as it is a service that provides on-demand access to AWS' security and compliance reports and select online agreements. Teams can use AWS Artifact to download AWS Cloud compliance documentation to understand AWS security and compliance capabilities, which can help in setting up and evaluating other services, like Macie, appropriately.
    </details>
	
26. You are an AWS Certified Security - Specialty consultant hired by a company to improve the security of their EC2 instances. The company wants to ensure that their instances are located in a secure network, are regularly patched, and that there are automated processes for creating backups. They also want to ensure that only specific applications and services are allowed to run on these EC2 instances. Given these requirements, which of the following actions would you advise the company to implement? **(SELECT 3 ANSWERS)**

    - A. Enable EC2 Auto Scaling to handle load increases.
    - B. Install antivirus software manually on each EC2 instance.
    - C. Deploy the instances in a VPC with specific security groups and network access control lists (ACLs).
    - D. Use AWS Systems Manager Patch Manager to automate patching of the instances.
    - E. Create AMIs (Amazon Machine Images) regularly for backups.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C,D,E
  		<br><br>
  		Explanation:
      Using Virtual Private Cloud (VPC) with specific security groups and network ACLs helps in isolating the instances and controlling both inbound and outbound traffic, thereby enhancing security.
      AWS Systems Manager Patch Manager automates the process of patching your managed instances with both operating system and software updates, ensuring security vulnerabilities are mitigated.
      Creating AMIs regularly ensures there are point-in-time backups of the EC2 instances, which can be used for recovery in case of failure or data corruption.
    </details>
	
27. You are a security engineer at a large financial corporation, currently designing an incident response plan. As part of the plan, you wish to leverage AWS services to rapidly and effectively respond to potential security incidents involving your AWS resources. You need to ensure that in the event of an incident, your security team gets notified immediately about any AWS health events, such as increased error rates or degraded performance, that may impact your environment. Your team should only receive notifications for events that have been categorized as security-related. Which of the following should be included in your incident response plan to meet the requirement using AWS Health APIs and Notifications?

    - A. Configuring CloudTrail to monitor AWS Health Dashboard and notify the security team via AWS SMS whenever there is a new posting.
    - B. Using AWS Config to track changes in AWS Health and triggering AWS Lambda functions to alert the security team.
    - C. Setting up AWS Health Events notifications filtered by eventTypeCategory for security and using Amazon SNS to deliver the alerts to the security team.
    - D. Enabling AWS GuardDuty to detect health-related incidents and configuring it to publish findings to Amazon CloudWatch Events for security team notifications.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation: 
      The AWS Health API allows you to filter events by eventTypeCategory, ensuring that you receive information pertinent to security. In combination with Amazon SNS, these filtered alerts will be delivered to the appropriate personnel, complying with the need for immediate and relevant notifications. 
    </details>
	
28. Your team recently detected unusual traffic patterns on one of your EC2 instances, suggesting a potential compromise. You need to perform a root cause analysis using AWS Systems Manager to gather and analyze data about this instance. Which of the following actions should you take to effectively respond to the compromised resource? **(SELECT 3 ANSWERS)**

    - A. Use AWS Systems Manager Parameter Store to store configuration data and secrets for the compromised instance.
    - B. Enable AWS Systems Manager Session Manager to securely connect to the compromised instance and investigate further.
    - C. Use AWS Systems Manager Run Command to execute scripts that collect forensic data from the compromised instance.
    - D. Utilize AWS Systems Manager Automation to run predefined playbooks for incident response.
    - E. Enable AWS Systems Manager Distributor to automate the installation of software on the compromised instance.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,C,D
  		<br><br>
  		Explanation:
      AWS Systems Manager Session Manager provides a secure and auditable way to manage instances without opening inbound ports or managing SSH keys, allowing you to investigate the instance more closely. 
      AWS Systems Manager Run Command allows you to run scripts and commands on your instances without needing to log in via SSH, making it a secure way to gather necessary data for root cause analysis.
      AWS Systems Manager Automation helps in executing complex workflows for responding to incidents by using predefined playbooks that can automate routine tasks.
    </details>
	
29. Your company has deployed a set of applications on AWS that require access to sensitive data. To ensure the data is secured at rest, your security team has decided to use AWS Key Management Service (KMS) with Customer Master Keys (CMKs) to encrypt the data. The Chief Information Security Officer (CISO) specifies that only certain IAM roles and users should have access to use the CMKs to encrypt and decrypt data. Which of the following key policy statements aligns with the CISO's instruction for allowing only authorized IAM roles and users to use the CMKs?

    - A. A key policy without any conditions that grants 'kms:Encrypt', 'kms:Decrypt' access to all resources in AWS.
    - B. A key policy that allows all IAM roles and users in the account to use 'kms:*' actions for the CMKs.
    - C. A key policy that denies the 'kms:Decrypt' action to the account's root user.
    - D. A key policy that grants permissions for 'kms:Encrypt', 'kms:Decrypt', 'kms:ReEncrypt*', 'kms:GenerateDataKey*' and 'kms:DescribeKey' actions to specific IAM roles and users.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      This answer is correct because it specifies the necessary permissions for encrypting and decrypting operations with KMS actions, applying them only to predefined IAM roles and users, which conforms to the principle of least privilege as required by the CISO.
    </details>

30. A company that uses AWS has deployed a critical application across multiple EC2 instances behind a load balancer. Recently, they faced a security breach where an EC2 instance was compromised due to an SSH brute force attack. To enhance their security posture and prevent similar future incidents, the company's Security Engineer suggests the implementation of monitoring and alerting based on specific metrics. Which of the following Amazon CloudWatch alarm settings is the MOST effective to alert the Security team when the number of SSH authentication failures surpasses a threshold within a specified time period?

    - A. Set a CloudWatch alarm for the metric 'NumberOfFailedSSHLoginAttempts' with a threshold that exceeds your baseline for normal SSH traffic and a short evaluation period that senses the abnormal rise in this activity promptly.
    - B. Create a CloudWatch alarm for the metric 'StatusCheckFailed_System' as this implies the system is compromised and could indicate an ongoing attack.
    - C. Set up an alarm for the 'NetworkIn' metric when there's a sudden decrease in inbound traffic, indicating possible network-level attack.
    - D. Configure an alarm for the 'CPUUtilization' metric at a 90% threshold over a 24-hour period to detect potential malicious activity.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      CloudWatch allows you to monitor logs and set alarms based on custom or predefined metrics. 'NumberOfFailedSSHLoginAttempts' is an example of a custom metric that can specifically target SSH brute force attack attempts. By setting an appropriate threshold and a short period for evaluation, the Security team can detect and react to unusual spikes in failed SSH authentications, which is critical for identifying and responding to brute force attacks.
    </details>
	
31. A company has deployed an S3 bucket named 'company-logs' to store application logs. They want to allow an external partner's account to access these logs for monitoring and analysis purposes. The partner should have the ability to read objects, but not to modify any configurations or permissions of the bucket. The bucket's access should be scoped to a designated IAM role in the partner's AWS account. Which policy type should be used to securely grant the required access to the partner without exposing any additional privileges?

    - A. IAM Group Policy
    - B. Identity-based policy (attached to an IAM user in the partner account)
    - C. Resource-based policy (bucket policy)
    - D. AWS Organizations Service Control Policy (SCP)

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      Resource-based policies are attached directly to the AWS resource, in this case, an S3 bucket. A bucket policy can specify cross-account access and fine-tuned permissions, granting the partner's IAM role the ability to read objects without modifying the bucket.
    </details>
	
32. Your company, CloudSecure Inc., has recently implemented Amazon GuardDuty to enhance threat detection capabilities. During a routine check, GuardDuty generates several findings indicating potential unauthorized access to an EC2 instance. As the security engineer, you are tasked with designing and implementing a runbook that details the steps for incident response. Which actions should be included in your runbook to effectively respond to this security incident?
**(SELECT 3 ANSWERS)**

    - A. Terminate the affected EC2 instance immediately to end suspicious activity.
    - B. Disable GuardDuty monitoring on the affected instance since it's already detected the threat.
    - C. Isolate the affected EC2 instance by moving it to a security group with no inbound or outbound traffic.
    - D. Rotate and update the credentials and keys associated with the affected instance.
    - E. Conduct a snapshot of the compromised EC2 instance's volumes for forensic analysis.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C,D,E
  		<br><br>
  		Explanation:
      Isolating the instance helps in containing the threat and preventing further unauthorized access.
      Rotating and updating credentials helps in mitigating any further unauthorized access using the compromised credentials.
      Taking snapshots preserves evidence that can be analyzed later for understanding the attack vector and impact.
    </details>
	
33. You have been tasked with designing a log analysis solution for your company's AWS environments. You plan to collect, analyze, and visualize log data from various AWS services to monitor security-related activities efficiently. Your design includes using AWS Lambda to process logs, as well as leveraging AWS services like CloudWatch Logs Insights, CloudTrail Insights, and Security Hub. Which of the following steps should you include in your log analysis solution? **(SELECT 4 ANSWERS)**

    - A. Use AWS Trusted Advisor to collect and store log data
    - B. Use AWS Lambda to process and transform the log data
    - C. Enable CloudTrail Insights to detect unusual activity in your AWS account
    - D. Set up CloudWatch Logs to collect and store log data
    - E. Deploy Amazon Kinesis for log data visualization
    - F. Utilize CloudWatch Logs Insights to query and analyze log data

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,C,D,F
  		<br><br>
  		Explanation:
      AWS Lambda is well-suited for processing and transforming log data automatically, making it an essential component of your solution
      CloudTrail Insights helps detect and analyze unusual activities in your AWS account, providing critical information for security monitoring.
      CloudWatch Logs can collect and store log data from various AWS services, making it a foundational step in your log analysis solution.
      CloudWatch Logs Insights enables powerful querying and analysis of log data, helping you derive meaningful insights from your logs.
    </details>
	
34. An AWS Certified Security - Specialty exam candidate would likely encounter a scenario similar to the following: A company has recently detected unusual traffic patterns in one of their web applications deployed in an Amazon EC2 instance within their VP    - C. They have Amazon VPC Flow Logs enabled, and they want to perform a detailed investigation to determine the root cause of this anomaly. What is the most effective use of the VPC Flow Logs to conduct this root-cause analysis?

    - A. Assess the VPC Flow Logs to see if there is any decrease in outbound traffic, which could indicate a DoS attack.
    - B. Analyze the VPC Flow Logs for records of rejected traffic by the security groups and network access control lists (NACLs) to identify any unauthorized access attempts.
    - C. Review the VPC Flow Logs for increased database query rates, which may suggest a compromised application layer.
    - D. Check the VPC Flow Logs for increased HTTP response codes as evidence of application stress or instability.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      VPC Flow Logs can capture information about the IP traffic going to and from network interfaces in a VP    - C. Analyzing logs for rejected traffic can help in identifying potential security threats such as unauthorized access attempts, which could be the root cause of the unusual traffic patterns.
    </details>
	
35. You have recently been tasked with securing the communication between your internal applications and AWS services. Specifically, your team needs to ensure that all API calls to Amazon S3 are transmitted securely using TLS. Additionally, you must ensure that data is protected when using Amazon API Gateway to interact with various AWS services. Which of the following steps should you take to achieve this requirement?

    - A. Enforce the use of HTTPS in Amazon API Gateway resource policies
    - B. Disable server-side encryption on Amazon S3 to reduce traffic overhead
    - C. Use HTTP instead of HTTPS for Amazon API Gateway to avoid SSL certificate management
    - D. Enable Secure Socket Layer (SSL) for your Amazon S3 bucket using bucket policies
    - E. Use a VPC endpoint to create a private connection between your VPC and Amazon S3

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,D,E
  		<br><br>
  		Explanation:
      API Gateway can enforce the use of HTTPS for incoming requests to ensure the data is encrypted in transit.
      Configuring bucket policies to only allow HTTPS (SSL) access ensures that all data transferred to and from the bucket is encrypted.
      A VPC endpoint allows secure access to Amazon S3 without traversing the public internet, ensuring encrypted data transit.
    </details>
	
36. A financial services company stores sensitive customer data in various S3 buckets across its AWS environment. The company is subject to strict financial regulations and needs to ensure that no sensitive data, such as credit card information or personal identification numbers, is inadvertently stored in unsecured locations. They have implemented a data classification policy and wish to use AWS services to help automate the discovery and classification of this sensitive data to ensure compliance. Which AWS service should the company employ to continuously monitor and classify data at scale to help meet its regulatory compliance requirements?

    - A. AWS Identity and Access Management (IAM)
    - B. Amazon Macie
    - C. AWS CloudTrail
    - D. AWS Config

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

37. An enterprise has recently set up an AWS environment where an Application Load Balancer (ALB) fronts their web application. The security team wants to monitor and analyze the traffic patterns to ensure security and efficiency. The security team needs to identify the source of an unexpected increase in traffic and determine whether it is legitimate or a potential security threat. Which of the following methods should the security team use to read the relevant logs for investigating the traffic going through the ALB?

    - A. Set up VPC Flow Logs to capture information about the IP traffic going to and from network interfaces in your VPC.
    - B. Inspect Route 53 logs to analyze DNS queries that are specifically routed to the Application Load Balancer.
    - C. Subscribe to a Real-time Application Monitoring Service (RTAMS) to provide immediate alerts and live traffic monitoring.
    - D. Enable Elastic Load Balancing Access Logs to capture detailed information about requests sent to the load balancer and analyze them using Amazon Athena.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      Elastic Load Balancing Access Logs provide detailed information on all requests made to the AL    - B. Enabling these logs is crucial for security analysis and, when integrated with Amazon Athena, it allows for complex queries and analysis. This is the correct method to investigate traffic.
    </details>
	
38. A company has a compliance requirement to retain financial records for a period of 7 years. However, this data is rarely accessed after the first year. The Data Protection Officer (DPO) wishes to reduce storage costs while ensuring that the data cannot be altered or deleted during the retention period. How should the Solutions Architect design the S3 Lifecycle mechanisms to meet these requirements?

    - A. Set an expiration action in the S3 Lifecycle policy to delete the financial records after 7 years and use S3 Glacier Deep Archive for immediate storage.
    - B. Apply an S3 Lifecycle policy to transition the financial records to S3 Glacier Deep Archive after one year and use S3 Object Lock with a governance retention period of 7 years to prevent the data from being altered or deleted.
    - C. Use S3 Lifecycle policy to transition the records to S3 Standard-Infrequent Access after one year and apply a legal hold using S3 Glacier Vault Lock.
    - D. Move the financial records to S3 Standard storage class and apply S3 Object Lock with a compliance retention period of 7 years from the creation date.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      This is correct because S3 Glacier Deep Archive provides a cost-effective storage option for data that is rarely accessed and S3 Object Lock with a governance mode retention policy ensures that the data cannot be altered or deleted for the specified period, fulfilling the compliance requirement.
      
      S3 Object Lock:
      •	Works at the object level in S3
      •	Allows you to store objects using a "write-once-read-many" (WORM) model
      •	Has two retention modes:
      o	Governance mode: Users with special permissions can override or delete protected objects
      o	Compliance mode: No one can override or delete protected objects until retention period expires
      S3 Glacier Vault Lock:
      •	Works at the vault level in S3 Glacier
      •	Once locked, the policy becomes immutable and cannot be changed
      •	Used for regulatory and compliance requirements
      •	Enforces controls like "no delete" rules and retention periods at the vault level
      Legal Hold:
      •	Is a feature of S3 Object Lock
      •	Places an indefinite hold on an object version
      •	Prevents the object version from being overwritten or deleted
      •	Remains in effect until removed
      •	Can be applied independently of retention periods
    </details>
	
39. An IT team is troubleshooting an issue where several IAM users in the 'Development' organizational unit (OU) within an AWS Organization are unable to access specific Amazon S3 buckets. These buckets have policies that explicitly permit the required actions for these IAM users. However, when the team attempts to check the IAM user's permissions, they find no evident issues. Considering the use of Service Control Policies (SCPs), which of the following could be causing the access issues for these IAM users?

    - A. The S3 bucket policies do not have the required actions allowed.
    - B. An SCP applied to the 'Development' OU explicitly denies certain S3 actions.
    - C. An IAM policy attached to the users restricts access to these S3 buckets.
    - D. An explicit deny within an SCP takes precedence over other permissions granted elsewhere.
    - E. An SCP attached to the root of the organization is restricting access to S3 actions.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,D,E
      <br><br>
      Explanation:
      An SCP denying specific actions for the 'Development' OU would override any individual resource policies or IAM user permissions, preventing access.
      Explicit deny statements in SCPs take precedence and will block access, regardless of other permissions that may allow the action.
      SCPs attached to the root of the organization apply across all accounts and OUs underneath it, potentially restricting access despite permissions in individual accounts or bucket policies.
    </details>
	
40. You are a cloud architect for a company using AWS. You have configured an S3 bucket, 'CompanyDataBucket', to store sensitive financial reports. You create an IAM policy that explicitly denies all actions on the S3 bucket to everyone. Later, you realize that the finance team requires read and write access to 'CompanyDataBucket'. To grant this access, you apply a resource-based policy on the S3 bucket allowing the finance team's IAM role, 'FinanceRole', the 's3:GetObject' and 's3:PutObject' actions. However, the finance team is still unable to access the bucket. What is the MOST likely reason why the finance team cannot access the 'CompanyDataBucket'?

    - A. The explicit deny in the IAM policy overrides the resource-based policy attached to the 'CompanyDataBucket'.
    - B. Resource-based policies can only grant access to IAM users, not IAM roles.
    - C. The resource-based policy does not include the 's3:ListBucket' action, which is required for accessing S3 buckets.
    - D. The 'FinanceRole' does not have the required trust relationship with the 'CompanyDataBucket'.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      In AWS, an explicit deny in any policy overrides any allow. Even though the resource-based policy grants the 'FinanceRole' access to the bucket, the explicit deny in the IAM policy will prevent access.
    </details>
	
41. A company is building a serverless application with multiple AWS Lambda functions. Security is a priority for the organization, and as a security engineer, you have been tasked with ensuring that all Lambda function executions are logged appropriately for monitoring and analysis. What is the most efficient method to enable and manage logging for all Lambda functions to ensure they meet security compliance requirements?

    - A. Install and configure a third-party logging agent on each Lambda execution environment.
    - B. Use Amazon Kinesis Data Firehose to collect logs from each Lambda function execution.
    - C. Enable AWS Lambda to log to Amazon CloudWatch Logs and create a log group for each function.
    - D. Manually export logs after each function execution and store them in Amazon S3 buckets.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      This is the correct answer because AWS Lambda can natively integrate with Amazon CloudWatch Logs, which allows for real-time monitoring and logging of Lambda function executions. This setup ensures that logs are systematically collected and stored, allowing for easy analysis and compliance checking. The use of a log group for each function helps in organizing logs per function for easier management and investigation.
    </details>
	
42. A company has just expanded its AWS cloud infrastructure by adding several new AWS accounts to its organization in AWS Organizations. The Security Officer is concerned about the potential misuse of root user credentials in these new accounts. They have mandated the application of a strategy to ensure the root user credentials are used securely and minimally. Your task is to develop a strategy that leverages service control policies (SCPs) for enhanced security. Which of the following SCPs should you apply to fulfill the Security Officer's mandate?

    - A. Apply an SCP that allows the root user to perform any action but alerts the Security Team when the root user is used.
    - B. Apply an SCP that denies all actions if the requester is the root user, except for viewing billing information and changing the account password or adding MFA.
    - C. Apply an SCP that completely disables the root account in all new AWS accounts.
    - D. Apply an SCP that enforces MFA to be enabled before allowing actions to be performed by the root user.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      This is correct because SCPs are a way of enforcing permissions boundaries across the AWS Organization and can limit the actions the root user can perform. Allowing the root user to only view billing details and manage their own security credentials (like password and MFA settings) is a best practice as it minimizes the root user's potential to be exploited while maintaining necessary access for critical account tasks.
      This answer is incorrect because although enforcing MFA is a security best practice, SCPs are unable to condition permissions on whether MFA is enabled or not; they can only allow or deny actions and cannot enforce MFA requirements.
    </details>
	
43. Your organization has a requirement to deploy a consistent tagging policy across all AWS resources to ensure proper cost allocation, security compliance, and easier resource management. AWS Config is integrated into your environment to monitor compliance with this tagging policy. As part of implementing a secure and consistent deployment strategy for your cloud resources, you need to make sure the tags are correctly enforced and monitored. Which of the following actions should you take to accomplish this? **(SELECT 3 ANSWERS)**

    - A. Rely solely on AWS Trusted Advisor to monitor resource tags.
    - B. Define a AWS Config rule to check tag compliance on resources.
    - C. Use EC2 instance metadata to manage and enforce tagging compliance.
    - D. Implement AWS Lambda functions triggered by AWS Config rules to remediate tagging violations.
    - E. Create a CloudFormation template without specified tags to enforce the policy.
    - F. Use AWS Organizations Service Control Policies (SCPs) to enforce tagging policies at an account level.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,D,F
  		<br><br>
  		Explanation:
      AWS Config allows you to define rules that automatically check for resource compliance with tagging policies, ensuring consistency.
      Using Lambda functions allows for automatic remediation of resources that do not comply with established tagging policies.
      SCPs can be used to prevent actions that do not comply with organizational policies, including enforcing mandatory tagging.
    </details>
	
44. Sarah is a Security Architect at a fintech company that heavily relies on AWS services for its operations. Recently, the company has decided to implement stricter security controls around its cryptographic key materials to ensure they are only accessible by authorized users and services. Sarah must design an AWS Key Management Service (KMS) key policy that limits key usage to specific AWS Identity and Access Management (IAM) roles and policies. She also wants to ensure that all API calls related to key usage are logged for auditing purposes. Given these requirements, which of the following statements should Sarah include in her KMS key policy? **(SELECT 2 ANSWERS)**

    - A. Allow all IAM roles in the account to use the key.
    - B. Enable AWS CloudTrail logging for cryptographic operations in the policy.
    - C. Include IAM roles and policies that specify which users or services can use the key.
    - D. Include a condition statement that denies key usage based on the source IP address.
    - E. Disable AWS CloudTrail logging for cryptographic operations to minimize cost.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,C
  		<br><br>
  		Explanation:
      By enabling AWS CloudTrail logging for cryptographic operations, Sarah can ensure that all API calls related to key usage are logged, fulfilling the auditing requirement.
      Specifying IAM roles and policies in the KMS key policy helps in explicitly defining who has access to use the key, thereby limiting key usage to authorized users and services.
    </details>
	
45. You are a Security Engineer at a health-focused startup leveraging AWS services to build a web application that allows users to monitor their health data. Your team uses Amazon Cognito for user authentication. Recently, you have been tasked with enhancing the security for both long-term and temporary credentialing mechanisms for this application. You need to design, implement, and troubleshoot authentication for AWS resources accessed by your application users. Which of the following steps should you take to ensure secure authentication when using Amazon Cognito? **(SELECT 3 ANSWERS)**

    - A. Set up an AWS Identity and Access Management (IAM) role with limited permissions to be assumed by authenticated Amazon Cognito users.
    - B. Enable Multi-Factor Authentication (MFA) in Amazon Cognito.
    - C. Allow users to set their passwords without any complexity requirements.
    - D. Store long-term credentials directly in client-side applications.
    - E. Configure Amazon Cognito to automatically verify email addresses and phone numbers during user registration.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,B,E
  		<br><br>
  		Explanation:
      IAM roles with limited permissions ensure that authenticated users have the necessary but minimal access to AWS resources, reducing security risk.
      Enabling MFA adds an extra layer of security for user authentication, making it harder for unauthorized users to gain access.
      Verifying email addresses and phone numbers ensures that only users with verified contact information can register, further securing the authentication process.
    </details>
	
46. A company is using Amazon CloudFront to serve their static content globally. The security team wants to ensure that the CloudFront distribution is secured and able to withstand DDoS attacks. Which of the following should be recommended to enhance the security of their CloudFront distribution with the primary focus on DDoS mitigation?

    - A. Increase the size of underlying EC2 instances to handle more traffic.
    - B. Set up more geographical location points for the CloudFront edge servers to distribute traffic.
    - C. Enable AWS Shield Advanced for additional DDoS protection and support.
    - D. Use AWS WAF solely to create rate-based rules to limit the number of requests from clients.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C 
  		<br><br>
  		Explanation:
      AWS Shield Advanced provides enhanced DDoS mitigation capabilities, detailed attack diagnostics, and the ability to mitigate sophisticated DDoS attacks. It integrates seamlessly with Amazon CloudFront to protect distributed edge networks.
      AWS Shield Standard and AWS Shield Advanced provide protections against Distributed Denial of Service (DDoS) attacks for AWS resources at the network and transport layers (layer 3 and 4) and the application layer (layer 7). Shield Standard defends against the most common, frequently occurring network and transport layer DDoS attacks that target your website or applications. Shield Advanced provides expanded DDoS attack protection for those resources
    </details>
	
47. You are a security engineer for a financial services company that operates heavily on AWS. Your team has recently deployed Amazon Macie to identify and classify sensitive data stored in S3 buckets. Additionally, AWS Security Hub is being utilized to aggregate and monitor security findings across your AWS accounts. During a routine audit, you are tasked with evaluating the compliance of your AWS resources regarding sensitive data protection. Which actions or configurations should you consider to ensure compliance of your AWS resources in this context? **(SELECT 3 ANSWERS)**

    - A. Use AWS Trusted Advisor alone for compliance evaluation.
    - B. Configure Amazon Macie to classify data in S3 buckets regularly.
    - C. Disable Amazon Macie once initial classification is complete.
    - D. Enable AWS Security Hub to aggregate findings from Amazon Macie.
    - E. Set up automated actions for non-compliant findings in AWS Security Hub.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,D,E
  		<br><br>
  		Explanation:
      Regular classification of data in S3 by Amazon Macie helps in identifying sensitive information and ensures compliance with data protection regulations.
      Security Hub can aggregate findings from multiple AWS services, including Amazon Macie, to provide a centralized view of security compliance.
      Automating actions in response to non-compliant findings helps ensure prompt remediation of security issues, maintaining compliance.
    </details>
	
48. A company is migrating its on-premises applications to the AWS Cloud. As part of the migration, the security team wants to ensure that the application servers are hardened according to the best practices and that the database credentials are managed securely. The company has decided to use AWS Secrets Manager to handle the database credentials. For host-based security on the application servers, which of the following tasks should be performed first to ensure secure access to the AWS Secrets Manager and to maintain the principle of least privilege?

    - A. Embed IAM user access keys in the application code to allow it to access AWS Secrets Manager directly.
    - B. Use an AWS Lambda function to periodically rotate the database credentials and email them to the admin team.
    - C. Store the database credentials directly on the EC2 instances in a configuration file.
    - D. Attach an IAM role to the EC2 instances that grants access to the AWS Secrets Manager only for the secrets needed by the application.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      By attaching an IAM role with the necessary permissions to the EC2 instances, applications on those instances can access the AWS Secrets Manager without having to embed credentials within them. IAM roles for EC2 instances help in maintaining the principle of least privilege by providing temporary credentials to access AWS services.
    </details>
	
49. A company is designing a new AWS environment where they need certain temporary employees to have restricted access to their S3 data for only the duration of their projects, which can last anywhere from one to six months. The environment should be secure and adhere to the principle of least privilege. As a Solutions Architect, you are required to recommend an appropriate mechanism for managing these temporary credentials in a way that provides the necessary access while maintaining security. Which of the following approaches would you suggest?

    - A. Create IAM users for each temporary employee and manage the credentials manually by deleting them at the end of their project.
    - B. Use AWS IAM roles with associated policies to grant temporary security credentials to the temporary employees that automatically expire after a defined period.
    - C. Use long-term access keys that are stored in a secure company database, and rotated by the IT department every month.
    - D. Share IAM user credentials among temporary employees, changing the password at regular intervals to maintain security.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      AWS IAM roles with temporary security credentials are designed for scenarios like this where users need temporary access to AWS resources. These credentials can be associated with a policy that outlines the permissions and can be set to expire after a certain time, reducing the risk of long-term credential compromise.
    </details>
	
50. A company that is subject to data retention laws uses AWS Secrets Manager to manage database credentials for their applications. To comply with these laws, they must ensure that secrets are retained for 5 years after their last use, even if the secret is no longer in use or has been rotated. What should the company implement in AWS to ensure they remain compliant with this data retention requirement?

    - A. Enable automatic rotation of the secrets and configure an AWS Lambda function to back up the secret values to an S3 bucket with a lifecycle policy that retains the data for 5 years.
    - B. Delete the secret in AWS Secrets Manager after it's no longer used and expect that AWS retains the deleted secrets according to the data retention law.
    - C. Use the AWS Secrets Manager's versioning feature to keep versions of the secrets for 5 years without additional backups.
    - D. Rely on the AWS Secrets Manager's default retention policy to automatically retain all secrets for 5 years.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      This approach leverages AWS Secrets Manager's capability to rotate secrets. AWS Lambda can be used to automate the backing up of secret values whenever a rotation happens. Storing these backups in an S3 bucket with a lifecycle policy allows compliance with the retention standards as you can enforce the data retention period in S3.
      AWS Secrets Manager only retains deleted secrets for a recovery period of 7-30 days, not 5 years
      While Secrets Manager does maintain versions of secrets, there is no built-in mechanism to retain these versions for 5 years
      AWS Secrets Manager does not have a default retention policy that keeps secrets for 5 years
    </details>
	
51. Your company is hosting a series of web applications on AWS, which vary in terms of traffic and exposure. As a security specialist, you are evaluating the implementation of AWS WAF to protect these applications from common web exploits. The requirement is to ensure centralized control and detailed monitoring across multiple applications, with the ability to respond to incidents quickly. Your solution should not only block known malicious traffic but also give insights into the attempted attacks. Which approach would best align with the requirement to comprehensively monitor and alert for potential security events?

    - A. Enable AWS WAF and rely on third-party monitoring tools exclusively for evaluating WAF logs and alerting.
    - B. Deploy AWS WAF without enabling logging, relying solely on the default action of blocking malicious requests.
    - C. Use AWS WAF in conjunction with AWS Shield Advanced for detailed attack analysis, without integrating with monitoring services.
    - D. Enable AWS WAF logging and integrate it with Amazon CloudWatch and AWS Lambda for real-time alerting and automated response to specific threats.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      Integrating AWS WAF logging with Amazon CloudWatch allows for central monitoring and analysis of WAF logs. Using AWS Lambda for real-time alerting and automated responses allows the implementation of a system that will not only block attacks but also provide detailed insights and prompt actions when specific threats are detected, matching the requirement for comprehensive monitoring and a quick response.
    </details>
	
52. An organization has decentralized teams managing various aspects of their AWS environment. The security team wants to ensure continuous monitoring of network traffic to quickly detect anomalies. They have implemented VPC Flow Logs for visibility and Traffic Mirroring for real-time inspection. However, the security team noticed that some critical subnets were not reporting any data to their security monitoring tools. While investigating, they discovered that Network ACLs associated with those subnets were misconfigured, blocking outbound traffic to the monitoring tools. Which action should the security team implement to ensure network traffic from all subnets is adequately captured and analyzed while maintaining the intended security posture?

    - A. Disable VPC Flow Logs and Traffic Mirroring to prevent Network ACLs from blocking the traffic.
    - B. Replace Network ACLs with Security Groups to resolve the issue with blocked monitoring traffic.
    - C. Remove all outbound rules from the Network ACLs to ensure unrestricted outbound traffic to the monitoring tools.
    - D. Update the Network ACLs associated with the critical subnets, adding outbound allow rules for the traffic destined to the security monitoring tools.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      Network ACLs are stateless and process rules in numerical order, starting with the lowest numbered rule. By adding an allow rule for the outbound traffic to the security monitoring tools, the team ensures the traffic is permitted without disrupting the existing security posture.
    </details>
	
53. Your company has a compliance requirement to regularly assess the security posture of your EC2 instances against common vulnerabilities and exposures. The team is tasked with implementing an automated solution that simplifies the process of security assessment and provides detailed findings and recommendations. Which AWS service can help automate the assessment of security and compliance of the applications deployed on EC2 instances?

    - A. AWS Config
    - B. Amazon Macie
    - C. Amazon CloudTrail
    - D. Amazon Inspector

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D
  		<br><br>
  		Explanation:
      Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity.
      Amazon Inspector is specifically designed to automatically assess EC2 instances and container workloads for vulnerabilities and deviations from best practices, providing detailed security findings prioritized by severity level
    </details>
	
54. You are a security engineer for a company that has multiple accounts under a single AWS Organization. Recently, you were tasked with ensuring that none of the accounts can delete CloudTrail logs, but still have access to other S3 actions. You decide to implement a Service Control Policy (SCP) to achieve this. Below is the SCP you created: ```json { "Version": "2012-10-17", "Statement": [ { "Effect": "Deny", "Action": "s3:DeleteObject", "Resource": "arn:aws:s3:::cloudtrail-logs-bucket/*" } ] } ``` After applying this SCP, the development team is complaining about issues in some of their automation processes. As the security engineer, you need to identify the true impact of the SCP. Which of the following statements are correct regarding the SCP's impact? **(SELECT 2 ANSWERS)**

    - A. The SCP prevents the creation of new buckets in the organization.
    - B. The SCP denies all actions across all S3 buckets in the organization.
    - C. The SCP allows 's3:DeleteObject' if the request comes from the root user of the master account.
    - D. The SCP will not affect actions like 's3:PutObject' or 's3:GetObject' on the 'cloudtrail-logs-bucket'.
    - E. The Deny statement will prevent all accounts in the organization from deleting objects from 'cloudtrail-logs-bucket'. 

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D,E
  		<br><br>
  		Explanation:
      The SCP only denies the 's3:DeleteObject' action, so other S3 actions like 's3:PutObject' or 's3:GetObject' remain unaffected.
      The SCP explicitly denies the 's3:DeleteObject' action on the specified S3 bucket for all accounts under the organization, which aligns with its intended purpose.
    </details>
	
55. Your company has an on-premises data center and an AWS VPC that are connected through AWS Direct Connect. To comply with security requirements, your application servers running in AWS should be accessible only from specific on-premises corporate devices that have designated IP addresses. To implement these security requirements while minimizing the management overhead, what would be the BEST approach to restrict access to the application servers?

    - A. Configure security groups attached to the application servers to allow inbound traffic based on AWS Resource Access Manager (RAM) shared network resource IDs.
    - B. Implement AWS Network Firewall with stateful domain list filtering and intrusion prevention system (IPS) to allow specific corporate domain names.
    - C. Apply Network ACLs to the subnets containing the application servers with rules that only allow inbound traffic from the specific range of corporate IP addresses.
    - D. Deploy an AWS Client VPN endpoint and configure it to allow connections only from the corporate IP range, then route application server traffic through this endpoint.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C
  		<br><br>
  		Explanation:
      Network Access Control Lists (ACLs) are stateless and can be used to allow or deny traffic to subnets based on IP ranges. Applying Network ACLs with the proper inbound rules to the relevant subnets in the VPC can restrict access to the application servers from specific IP addresses. This would effectively enforce the required access control for the application servers, with relatively low management overhead.
    </details>
	
56. As a security engineer at XYZ Corporation, you manage an AWS environment and are responsible for maintaining the security posture of multiple EC2 instances spread across different regions. Recently, you noticed unusual activity in some of your instances, indicating a potential security breach. To mitigate such risks and ensure robust monitoring and alerting, you decide to leverage AWS Systems Manager for centralized management and oversight. Which of the following actions should you take to effectively monitor and address security events using Systems Manager? **(SELECT 3 ANSWERS)**

    - A. Use AWS Systems Manager Inventory to collect and query configuration data from managed instances.
    - B. Configure Systems Manager Automation to remediate security issues based on predefined runbooks.
    - C. Set up Amazon CloudWatch Alarms to monitor EC2 metrics only.
    - D. Use AWS Systems Manager to configure IAM roles for your resources.
    - E. Set up AWS Systems Manager parameter store to securely manage and refer sensitive data within scripts.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,B,E
  		<br><br>
  		Explanation:
      Systems Manager Inventory provides comprehensive visibility into the configuration and inventory of your AWS resources, allowing you to identify and address potential security issues.
      Systems Manager Automation allows you to create and manage runbooks that can automatically execute scripts or AWS commands in response to specific events, providing a proactive approach to security management.
      Parameter Store allows you to securely store data such as passwords and API keys, and ensures that sensitive information is managed securely and consistently across your environment.
      Though CloudWatch Alarms can help monitor specific metrics, relying solely on EC2 metric monitoring is insufficient for comprehensive security event management. A broader approach using Systems Manager's features is recommended.
      
      Parameter Store provides secure, hierarchical storage for configuration data management and secrets management. Part of AWS Systems Manager. Designed for storing configuration data, API keys, passwords, and other parameters. No built-in automatic rotation capability
      AWS Secrets Manager helps you manage, retrieve, and rotate secrets throughout their lifecycles. Specialized in storing database credentials, API keys, and other sensitive information. Includes built-in automatic rotation capabilities
    </details>
	
57. A security architect for a finance company needs to ensure that they have control over the encryption keys used to secure their sensitive data stored in AWS S3. They want the flexibility to manage their keys independently but also leverage AWS services for ease of integration. The company's policy dictates that they must be able to import their own key material and remove it when necessary to comply with data protection requirements. How should the security architect establish a mechanism to import and remove the customer-provided key material using AWS services?

    - A. Use AWS Key Management Service (AWS KMS) in conjunction with the AWS Certificate Manager (ACM) to create a Customer Master Key (CMK) with imported key material. AWS KMS allows the import and deletion of key material, and when integrated with ACM, it can support the management of SSL/TLS certificates used in AWS services.
    - B. Directly upload the encryption keys to AWS Certificate Manager (ACM) for use with ACM's integrated services.
    - C. Store the encryption keys in AWS Secrets Manager and use its integration with ACM to provide the key material when needed.
    - D. Use the AWS CloudHSM service exclusively to manage and store the encryption keys, disregarding the integration with ACM.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      This answer is correct because AWS KMS enables the importation of your own key material for use with CMKs. The use of KMS with ACM allows for the management of certificates while maintaining control over the encryption keys.
    </details>
	
58. Your organization has a critical web application running on AWS. Recently, they experienced a security incident where unauthorized changes were made to some S3 buckets and EC2 instances. As part of the incident response plan, you want to ensure that similar incidents in the future will trigger immediate alerts and isolate the affected resources automatically. You're using Amazon Simple Notification Service (SNS) along with other AWS services for this purpose. Which of the following actions would you take to design and implement this incident response plan effectively? **(SELECT 3 ANSWERS)**

    - A. Create an SNS topic and subscribe security team email addresses to receive notifications.
    - B. Use AWS Lambda to automatically trigger isolation actions on resources when an SNS notification is received.
    - C. Set up AWS Config rules to automatically delete resources upon receiving an SNS alert.
    - D. Configure S3 bucket policies to deny all access in response to SNS notifications.
    - E. Set up CloudWatch Alarms to monitor suspicious activity and send notifications to an SNS topic.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,B,E
  		<br><br>
  		Explanation:
      Subscribing security team email addresses to an SNS topic ensures that key personnel are immediately informed when an incident is detected.
      AWS Lambda can be triggered by SNS messages to execute automated scripts that isolate compromised resources, such as detaching EC2 instances or blocking S3 bucket access.
      CloudWatch Alarms can be configured to monitor a variety of metrics and trigger SNS notifications when anomalies are detected, enabling quicker incident response.
    </details>
	
59. A company with strict data protection policies is hosting their sensitive files on AWS S3. The security team must guarantee that no S3 bucket contents ever become publicly accessible, regardless of individual object or bucket access policies set by developers. Furthermore, the environment contains EC2 instances with associated security groups. How should a Security Specialist ensure that access to stored data in S3 and the EC2 instances is tightly controlled using AWS-native solutions?

    - A. Rely on network ACLs to block public access to S3 data and configure Security Groups to be stateful with default rules.
    - B. Enable S3 Block Public Access on all S3 buckets, and configure Security Groups to only allow specific, trusted IP ranges.
    - C. Remove 'public' ACLs from individual S3 objects and configure Security Groups to allow all inbound traffic.
    - D. Set S3 bucket policies to reject public access and leave Security Groups with their default settings.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B
  		<br><br>
  		Explanation:
      S3 Block Public Access provides a centralized solution to prevent accidental public exposure of your S3 data. Security Groups act as a virtual firewall for EC2 instances, so carefully configuring inbound and outbound rules ensures that only trusted entities can interact with your instances.
    </details>
	
60. Your company, SecureTech, has recently experienced multiple security incidents. To address these concerns, the Security Operations team has decided to leverage various AWS services to improve monitoring and alerting for security events. As a certified AWS security specialist, you are required to implement a comprehensive solution using GuardDuty, Systems Manager, and AWS Security Hub. Which of the following actions should you take to achieve this goal? **(SELECT 3 ANSWERS)**

    - A. Deploy AWS Systems Manager Change Manager to monitor and enforce approved configurations.
    - B. Enable AWS Security Hub to aggregate security findings from multiple accounts and services.
    - C. Configure AWS Security Hub to automatically triage and send high-severity findings to an SNS topic for immediate response.
    - D. Use Amazon Inspector to assess vulnerabilities and compliance across your AWS infrastructure.
    - E. Set up Amazon GuardDuty to continuously monitor for malicious activity and unauthorized behavior.
    - F. Utilize AWS Systems Manager Patch Manager to apply security patches automatically.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,C,E
  		<br><br>
  		Explanation:
      AWS Security Hub aggregates, organizes, and prioritizes security findings from multiple AWS services, providing a comprehensive view of your security posture.
      Using AWS Security Hub to send high-severity findings to an SNS topic allows for automated and immediate response actions based on critical alerts.
      Amazon GuardDuty helps you to detect potential threats by analyzing continuous streams of data generated from your account.
      AWS Systems Manager Patch Manager is used for automating patch management processes and ensuring that systems are up-to-date, but it does not directly monitor or alert on security events.
    </details>
	
61. An organization is using AWS KMS to manage cryptographic keys for encrypting their sensitive data. Recently, they have onboarded a new security team to manage these keys. The Chief Security Officer wants to ensure that the new team has the necessary permissions to use the keys for cryptographic operations but should not have the ability to manage key policies or delete the keys. Which of the following key policy changes should be made to meet this requirement?

    - A. Update the key policy to include 'kms:Encrypt', 'kms:Decrypt', 'kms:ReEncrypt*', 'kms:GenerateDataKey*', and 'kms:DescribeKey' permissions for the new security team's IAM role.
    - B. Give the security team full administrative permissions by allowing them 'kms:*' actions on the key.
    - C. Allow the team to manage the key policies by granting 'kms:PutKeyPolicy' permission.
    - D. Restrict the team to 'kms:GenerateDataKey' only, ensuring they cannot perform any other actions with the key.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      These permissions allow the security team to perform cryptographic operations with the key and retrieve metadata about the key. None of these permissions enable the ability to manage the key policy or delete the key, enforcing the principle of least privilege.
    </details>
	
62. A company has a tightly regulated environment within AWS where it is critical to be notified immediately if specific types of traffic patterns are detected. They are currently utilizing VPC Flow Logs to monitor network traffic, which are being delivered to Amazon CloudWatch Logs. The security team wants to automate the response to specific events, such as an unusual increase in traffic from a foreign IP range that could indicate a potential security threat. Which service integration should they use to automate alerting and initial investigation steps upon detection of such events?

    - A. Set up a CloudWatch Logs metric filter to monitor for the specific pattern of interest and associate it with an Amazon SNS topic to trigger an alert notification. Use AWS Lambda functions triggered by the SNS notification to perform any required initial investigation steps.
    - B. Use AWS Config to monitor changes in VPC Flow Logs and trigger an Amazon SNS notification when a configuration change is detected.
    - C. Create an event in Amazon EventBridge (formerly known as CloudWatch Events) that detects changes in VPC Flow Logs and triggers an AWS Lambda function.
    - D. Configure Amazon GuardDuty to inspect VPC Flow Logs and automatically send an alert through Amazon SNS when suspicious activities are detected.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      AWS CloudWatch Logs allows you to create metric filters to detect specific patterns in log data. When a pattern is matched, it can trigger an Amazon SNS notification, which in turn can invoke an AWS Lambda function to perform automated actions such as an investigation or remediation task.
    </details>
	
63. You have recently been hired as a cloud security engineer for a large enterprise that has multiple AWS accounts. As part of your initial assessments, you noticed that the root account of each AWS account does not have Multi-Factor Authentication (MFA) enabled. Given the best practices for managing root accounts and enhancing security, what steps should you take to ensure the root accounts are secure and manageable in your multi-account environment? **(SELECT 3 ANSWERS)**

    - A. Establish IAM roles with necessary permissions and stop using the root account for day-to-day tasks.
    - B. Enable MFA on the root account for each AWS account as a mandatory practice.
    - C. Share the root account credentials with necessary team members for easier access.
    - D. Use AWS Organizations to centrally manage and enforce security policies across all AWS accounts.
    - E. Disable the root account and only use IAM users for accessing AWS resources.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A,B,D
  		<br><br>
  		Explanation:
      IAM roles with appropriate permissions should be used for daily operations to follow the principle of least privilege, and the root account should be reserved only for tasks that require it.
      Enabling MFA provides an extra layer of security, reducing the risk of unauthorized access to the root account.
      AWS Organizations allows you to centrally manage policies and provides a structure to enforce security controls across multiple AWS accounts, promoting consistency and security.
    </details>
	
64. A company has a mobile application that allows their employees to access AWS resources for different business operations. The application authenticates users against the company's on-premises Active Directory and then provides access to AWS services. The company wants to ensure that this process is secure and that temporary credentials are used to access AWS resources without embedding long-term AWS security credentials in the mobile application. Which of the following options would BEST meet this requirement using AWS Security Token Service (STS)?

    - A. Use AWS STS to assume an IAM role that grants the necessary permissions to access AWS resources. The role assumption should rely on the SAML (Security Assertion Markup Language) assertion from the on-premises Active Directory authentication.
    - B. Generate IAM user access keys for each employee and store them within the mobile application to enable direct access to AWS resources.
    - C. Use AWS STS to generate a long-term access key and secret key that the mobile application can use indefinitely.
    - D. Create an IAM group for mobile users and assign the required permissions. Use the group's ARN in the mobile application to grant access to AWS resources.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
  		<br><br>
  		Explanation:
      This is correct because AWS STS allows users to assume an IAM role by providing a SAML assertion after authenticating with an external identity provider, such as an on-premises Active Directory. STS then provides temporary credentials that can be used to access AWS resources.
    </details>
	
65. Alice, a cloud architect at XYZ Corporation, is tasked with designing an automatic lifecycle management solution for their AWS resources to ensure compliance and cost-effectiveness. Specifically, she needs to manage EBS volume snapshots, RDS volume snapshots, and CloudWatch log groups using AWS Backup. Which of the following steps should Alice take to achieve this goal? **(SELECT 2 ANSWERS)**

    - A. Use AWS CloudTrail for automatic lifecycle management of CloudWatch log groups.
    - B. Create an AWS Backup plan that includes lifecycle policies for EBS and RDS snapshots.
    - C. Manually delete old EBS snapshots and RDS snapshots to manage costs.
    - D. Configure backup rules in the AWS Backup plan to automatically tag backups for EBS and RDS snapshots.
    - E. Set up an Amazon S3 bucket lifecycle policy for EBS and RDS snapshot backups.

    <details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B,D
  		<br><br>
  		Explanation:
      AWS Backup allows you to create backup plans that specify schedules and lifecycle policies, enabling you to manage the retention and deletion of EBS and RDS snapshots.
      Tagging backups correctly ensures easy identification, management, and compliance with lifecycle policies.
      While S3 lifecycle policies can manage objects in S3 buckets, EBS and RDS snapshots lifecycle management should be done via AWS Backup, not S3 bucket policies.
    </details>
