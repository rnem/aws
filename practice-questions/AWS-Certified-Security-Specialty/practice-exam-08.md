# Practice Exam 8

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---
[//]: # (YouTubexFCGFsMVqSc ---------------------------------------------------------------------- )

1. In the context of monitoring an incident response on AWS, which service is primary used for monitoring and collecting logs from AWS resources for analysis and troubleshooting?

    - A) AWS CloudWatch
    - B) AWS CloudTrail
    - C) AWS  Security Hub
    - D) Amazon GuardDuty

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: AWS CloudWatch is the service primarily used for monitoring and collecting logs from AWS resources for analysis and troubleshooting. It allows you to collect and track metrics, monitor logs, set alarms, and automatically react to changes in you AWS environment.
</details>

2. A company is deploying a serverless application using AWS Lambda and wants to ensure that sensitive data handled by the Lambda functions is protected from unauthorized access. Which of the following security measures should they implement?

    - A) Use IAM policies to restrict access to Lambda functions based on user roles
    - B) Store sensitive data directly within the Lambda function code for efficiency
    - C) Enable AWS Shield to protect Lambda functions from DDOS attacks
    - D) Use AWS Key Management Service to encrypt sensitive data handled by Lambda

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: AWS Key Management Service KMS allows you to create and manage encryption keys to encrypt sensitive data. By encrypting sensitive data handled by Lambda functions using AWS KMS, the company can ensure that the data remains protected both at rest and in transit.
</details>

3. When auditing API calls and logging events for security analysis and compliance purposes, which AWS service should be used?

    - A) AWS CloudWatch
    - B) AWS CloudTrail
    - C) AWS  Security Hub
    - D) Amazon GuardDuty

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: AWS CloudTrail is the service used for auditing API calls and logging events for security analysis and compliance purposes. It records API activity and delivers log files containing information about API calls made on your AWS account, including the identity of the caller, the time of the API call, the source IP address, and the actions performed.
</details>

4. A development team is building a microservices architecture using Amazon ECS elastic container service for container orchestration they want to enhance security by implementing least privilege access controls. Which AWS service should they use to achieve this goal?

    - A) AWS IAM identity and access management
    - B) AWS WAF web application firewall
    - C) AWS  Shield
    - D) AWS  Secrets Manager

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: AWS IAM identity and access management allows you to define and manage access policies for AWS resources including ECS clusters and containers. By using IAM, the development team can implement least privilege access controls ensuring that only authorized entities have access to ECS resources and can perform specific actions.
</details>

5. Consider a scenario where an organization wants to automate Security checks prioritize findings and streamline remediation efforts across their AWS environment. Which AWS service would be most suitable for this requirement?

    - A) AWS CloudWatch
    - B) AWS CloudTrail
    - C) AWS  Security Hub
    - D) Amazon GuardDuty

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: AWS Security Hub is the most suitable service for automated Security checks prioritizing findings and streamlining remediation efforts across an AWS environment. Security Hub aggregates, organizes and prioritizes security findings from various AWS Services, third-party tools and AWS partner Solutions into a centralized dashboard.
</details>

6. In a scenario where an organization needs to detect and respond to security threats such as unauthorized access attempts and suspicious activities in real time, which AWS service should be utilized?

    - A) AWS CloudWatch
    - B) AWS CloudTrail
    - C) AWS  Security Hub
    - D) Amazon GuardDuty

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: Amazon GuardDuty is the AWS service specifically designed for detecting and responding to security threats in real time. It continuously monitors your AWS environment for malicious activity and unauthorized behavior by analyzing logs, Network traffic and AWS API activity.
</details>

7. A company is using AWS API Gateway to expose APIs for its mobile application. They want to prevent unauthorized access to the APIs and protect against common web attacks. Which security mechanism should they implement?

    - A) Enable AWS Shield to protect API Gateway from DDOS attacks
    - B) Implement rate limiting and IP blacklisting in AWS WAF web application firewall
    - C) Use OAuth 2.0 authentication with API Gateway to control access to APIs
    - D) Store API Keys directly in client applications to authenticate requests

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: AWS WAF web application firewall helps protect web applications from common web exploits and attacks by allowing you to control access to your applications based on rules you define.
</details>

8. When monitoring EC2 instances for performance and health metrics, which AWS service should be used?

    - A) AWS CloudWatch
    - B) AWS CloudTrail
    - C) AWS  Security Hub
    - D) Amazon GuardDuty

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: AWS CloudWatch is the service used for monitoring and collecting metrics from AWS resources including EC2 instances. CloudWatch allows you to monitor various metrics such as CPU utilization, disk I/O, Network traffic and memory usage enabling you to gain insights into the performance and health of your EC2 instances.
</details>

9. A company is designing an application architecture that utilizes AWS Lambda function for serverless execution of code. They want to ensure that the Lambda functions have minimal attack surface and are securely invoked by authorized sources only. Which of the following strategies should they implement to enhance AWS Lambda security?

    - A) Enable VPC virtual private Cloud access for Lambda functions
    - B) Implement AWS identity and access management policies to control function invocation
    - C) Allow direct internet access to Lambda functions for ease of integration
    - D) Store sensitive data within the Lambda function code for performance optimization

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: Implementing AWS IAM policies to control function invocation ensures that Lambda functions are securely invoked by authorized sources only. IAM policies can specify the permissions required to invoke Lambda functions including the allowed event sources such as other AWS services or specific AWS accounts.
</details>

10. A development team is deploying microservices using Amazon ECS elastic container service and wants to ensure container security. Which of the following practices should they implement to enhance container Security in Amazon ECS?

    - A) Store sensitive configuration data directly within Docker images
    - B) Disable logging and monitoring to reduce container overhead
    - C) Implement task roles and IAM policies to control access to ECS resources
    - D) Allow containers to communicate freely with each other across different tasks

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: Implementing task roles and IAM policies allows fine-grained control over access to Amazon ECS resources enhancing container security. Task roles define the permissions that ECS tasks containers can have when they are running while IAM policies specify who or what can perform actions on ECS resources.
</details>

11. In a scenario where an organization wants to monitor the health and performance of their serverless applications deployed on AWS Lambda, which AWS service should be used?

    - A) AWS CloudWatch
    - B) AWS CloudTrail
    - C) AWS  Security Hub
    - D) Amazon GuardDuty

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: AWS CloudWatch is the service used for monitoring the health and performance of serverless applications deployed on AWS Lambda. CloudWatch provides metrics and logs specific to Lambda functions allowing you to monitor invocation counts error rates duration and resource consumption.
</details>

12. A company is deploying a serverless application using AWS SAM (serverless application model) and wants to ensure security best practices are followed. Which of the following considerations should they address to enhance SAM security?

    - A) Implement encryption of application data using AWS Key Management Service
    - B) Restrict access to AWS Resources by defining IAM execution rules for SAM applications
    - C) Enable direct public access to SAM deployed applications for ease of use
    - D) Store sensitive credentials and secrets directly within SAM templates

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: Restricting access to AWS Resources by defining IAM execution roles for SAM applications ensures that only authorized entities can interact with the resources. IAM execution role provide granular permissions for serverless applications limiting access to specific AWS services and resources.
</details>

13. Mr. Smith a Solutions architect is tasked with designing a secure data transfer mechanism between an on-premises Data Center and AWS. Which AWS service should Mr Smith recommend for securely transferring data over the Internet?

    - A) AWS Key Management Service KMS
    - B) AWS Direct Connect
    - C) AWS  Transfer Family
    - D) AWS  Data Sync

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: AWS Transfer Family provides fully managed file transfer services for securely transferring data over the Internet between on-premises systems and AWS. It supports secure file transfer protocol SFTP, FTPS (FTP over TLS) and FTP (file transfer protocol) for seamless integration with existing workflows and applications.
</details>

14. When implementing encryption for data at rest on AWS, which service provides server side encryption for objects stored in Amazon S3 buckets?

    - A) AWS Key Management Service KMS
    - B) AWS Secrets Manager
    - C) AWS  Certificate Manager
    - D) AWS  Identity and Access Management IAM

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: AWS Key Management Service KMS provides server-side encryption for objects stored in Amazon S3 buckets. With KMS you can create and manage encryption keys to encrypt and decrypt data. When you enable server-side encryption for an S3 bucket, S3 uses KMS to generate and manage encryption keys for encrypting objects before storing them in the bucket.
</details>

15. A company is managing multiple AWS accounts and wants to ensure consistent security and compliance across all accounts. Which AWS service can they use to centrally manage firewall rules and security policies across accounts and resources?

    - A) AWS IAM identity and access management
    - B) AWS Inspector
    - C) AWS  WAF web application firewall
    - D) AWS  Firewall Manager

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: AWS Firewall Manager is a Security Management Service that makes it easier to centrally configure and manage firewall rules and security policies across multiple AWS accounts and resources.
</details>

16. A company wants to protect their AWS infrastructure from distributed denial of service (DDOS) attacks. Which AWS Services can they use to mitigate DDOS attacks effectively?

    - A) AWS IAM identity and access management and AWS Inspector
    - B) AWS WAF web application firewall and AWS Shield
    - C) AWS  Firewall Manager and AWS Trusted Advisor
    - D) AWS  Lambda and AWS CloudTrail

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: AWS WAF web application firewall and AWS Shield are specifically designed to mitigate DDOS attacks. AWS WAF helps protect web applications from common web exploits and attacks by allowing you to control access to your applications based on rules you define.
</details>

17. A company is designing the security architecture for their AWS infrastructure and wants to ensure that their Amazon virtual private Cloud VPC is securely configured. Which of the following measures is not a recommended best practice for VPC security?

    - A) Use Network ACLs to control traffic at the subnet level
    - B) Enable VPC flow logs to capture information about the IP traffic going to and from network interfaces in the VPC
    - C) Allow unrestricted inbound access to all ports and protocols
    - D) Use security groups to control traffic at the instance level

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: Allowing unrestricted inbound access to all ports and protocols is a security risk and violates the principle of least privilege. It increases the attack surface and exposes the VPC to potential security threats. Best practices for VPC security include using Network ACLs (option     - A)and security groups (option     - D)to control traffic based on specific rules, enabling VPC flow logs (option     - B)for monitoring and troubleshooting Network traffic and implementing other security measures such as encryption and multi-factor authentication.
</details>

18. When managing Secrets such as database credentials, API keys and OAuth tokens in AWS, which service should be utilized for Secure Storage rotation and access control?

    - A) AWS Key Management Service KMS
    - B) AWS Secrets Manager
    - C) AWS  Certificate Manager
    - D) AWS  Identity and Access Management IAM

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: AWS Secrets Manager is the service designed for security storage rotation and management of Secrets such as database credentials API keys and OAuth tokens. It enables you to centrally manage and rotate Secrets automatically reducing the risk of unauthorized access or misuse. Secrets Manager integrates seamlessly with other AWS services and applications allowing you to securely retrieve and manage secrets in your infrastructure.
</details>

19. A company wants to protect their web applications from common web exploits such as SQL injection and cross-site scripting (XSS) attacks. Which AWS service should they use to implement Custom Security rules and filters to mitigate these threats?

    - A) AWS Inspector
    - B) AWS Shield
    - C) AWS  WAF web application firewall
    - D) AWS  Firewall Manager

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: AWS WAF web application firewall allows customers to create custom rules and filters to protect their web applications from common web exploits and attacks such as SQL injection and cross-site scripting (XSS).
</details>

20. Mr. Patel a system administrator is tasked with implementing additional security measures to protect sensitive resources on AWS. Which feature should Mr Patel enable to add an extra layer of security by requiring users to provide two or more authentication factors to access their AWS accounts?

    - A) IAM policies and permissions
    - B) Multi-factor authentication MFA
    - C) Identity Federation including AWS Cognito
    - D) AWS  Directory Services

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: Multi-factor authentication MFA adds an extra layer of security by requiring users to provide two or more authentication factors to access their AWS accounts. MFA enhances security by combining something the user knows (passwor    - D)with something the user has (MFA device or token) making it more difficult for unauthorized users to gain access even if they have obtained the user's password.
</details>

21. In a scenario where an organization needs to provide secure access to AWS resources for users who authenticate using existing corporate credentials, which AWS service should be utilized for seamless integration with existing identity systems such as active directory?

    - A) IAM policies and permissions
    - B) Multi-factor authentication MFA
    - C) Identity Federation including AWS Cognito
    - D) AWS  Directory Services

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: AWS Directory Services allows organizations to integrate AWS Resources with existing identity systems such as active directory for secure access management. With AWS Directory Services organizations can extend their existing on-premises directories to the cloud enabling users to authenticate using their corporate credentials and access AWS resources securely.
</details>

22. A company is implementing security measures for their Amazon virtual private Cloud VPC and wants to ensure that traffic flows are controlled effectively. Which of the following statements accurately describes the role of security groups and network access control lists (NACLs) in VPC security?

    - A) Security groups control traffic at the subnet level while NACLs control traffic at the instance level
    - B) Security groups are stateful firewalls that control inbound and outbound traffic at the instance level while NACLs are stateless firewalls that control traffic at the subnet level
    - C) Security groups and NACLs serve the same purpose and can be used interchangeably for controlling traffic within a VPC
    - D) Security groups and NACLs are both used to manage network access but security groups are used for inbound traffic while NACLs are used for outbound traffic

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: Security groups are associated with EC2 instances and act as virtual firewalls that control traffic at both the inbound and outbound levels. They are stateful meaning they automatically allow return traffic initiated from the instance.
</details>

23. In the context of identity and access management IAM on AWS, which service provides centralized user authentication and authorization for applications and APIs along with features such as user pools identity providers and Federated identities?

    - A) IAM policies and permissions
    - B) Multi-factor authentication MFA
    - C) Identity Federation including AWS Cognito
    - D) AWS  Directory Services

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: Identity Federation including AWS Cognito provides centralized user authentication and authorization for applications and APIs. AWS Cognito offers user pools for managing user identities and authentication flows, identity providers for integrating with social identity providers such as Google, Facebook.
</details>

24. When implementing multi-factor authentication MFA for AWS IAM users, which additional authentication factor is commonly used along with the user password?

    - A) One-time password OTP
    - B) Username
    - C) Email address
    - D) Security question

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: Multi-factor authentication MFA requires users to provide an additional authentication Factor along with their password when signing in to AWS Services. One common method for implementing MFA is using one-time passwords (OTPs) which are generated by a hardware token, virtual MFA device or SMS message.
</details>

25. In the context of IAM policies and permissions on AWS, what is the principle of least privilege?

    - A) Granting users permissions based on their job titles
    - B) Granting users permissions to perform any action they might need
    - C) Granting users only the permissions required to perform their tasks
    - D) Granting users permissions based on their seniority within the organization

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: The principle of least privilege is a security best practice that involves granting users only the permissions required to perform their tasks, minimizing the potential impact of compromised credentials or accidental misuse.
</details>

26. In a scenario where an organization wants to allow users to sign in to AWS services using their existing corporate credentials, which AWS service should be used for identity Federation?

    - A) AWS IAM
    - B) AWS Cognito
    - C) AWS  Directory Service
    - D) AWS  Single Sign-On SSO

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: AWS Single Sign-On (SSO) is the service designed for identity Federation allowing users to sign in to AWS services using their existing corporate credentials. SSO integrates with identity providers (IdPs) such as Microsoft Active Directory, Okta and Azure AD enabling users to authenticate using their corporate credentials without the need for separate AWS IAM user accounts.
</details>

27. Which of the following statements accurately describes the AWS shared responsibility Model?

    - A) AWS is responsible for security of the cloud while customers are responsible for security in the cloud
    - B) Customers are solely responsible for all aspects of security including the physical infrastructure and data centers
    - C) AWS  takes full responsibility for security including customer data and application security
    - D) Customers are responsible for security only in certain regions while AWS manages Security in others

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: The AWS shared responsibility model defines the division of security responsibilities between AWS and customers. AWS is responsible for securing the underlying infrastructure of the cloud including the hardware software networking and Facilities.
</details>

28. A company wants to encrypt their sensitive data stored in Amazon S3. Which AWS service should they use to manage encryption Keys securely?

    - A) AWS Cloud
    - B) AWS KMS Key Management Service
    - C) AWS  Config
    - D) AWS  Organizations

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: AWS Key Management Service KMS is a managed service that makes it easy for you to create and control the encryption Keys used to encrypt your data. With AWS KMS you can create rotate and manage encryption Keys as well as Define access policies to control which users and services can use those keys.
</details>

29. In a multi-account AWS environment, which IAM feature enables centralized management of user identities and access across multiple AWS accounts?

    - A) AWS IAM groups
    - B) AWS IAM roles
    - C) AWS  IAM policies
    - D) AWS  IAM Federation

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: AWS IAM Federation enables centralized management of user identities and access across multiple AWS accounts. With IAM Federation you can establish trust relationships between your AWS accounts and external identity providers (IdPs) such as active directory, LDAP, SAML-based identity providers.
</details>

30. A company wants to manage access to their AWS resources and services securely. Which AWS service should they use to centrally control user authentication authorization and permissions?

    - A) AWS IAM identity and access management
    - B) AWS KMS Key Management Service
    - C) AWS  CloudTrail
    - D) AWS  Organizations

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A

<br />Explanation: AWS IAM identity and access management allows organizations to centrally manage user authentication authorization and permissions for accessing AWS resources and services. With IAM administrators can create and manage user identities Define granular permissions policies and control access to resources based on the principle of least privilege.
</details>

[//]: # (YouTubeEAwIkkrXh9g ---------------------------------------------------------------------- )

31. A corporate cloud security policy states that communication between the company's VPC and KMS must travel entirely within the AWS network and not use public service endpoints. Which combination of the following actions MOST satisfies this requirement? (Select TWO)

    - A) Add the aws:sourceVpce condition to the AWS KMS key policy referencing the company's VPC endpoint ID
    - B) Remove the VPC internet gateway from the VPC and add a virtual private gateway to the VPC to prevent direct, public internet connectivity
    - C) Create a VPC endpoint for AWS KMS with private DNS enabled
    - D) Use KMS import key feature to securely transfer the AWS KMS key over a VPN
    - E) Add the following condition to the AWS KMS key policy: "aws:SourceIP": "10.0.0.0/16"

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A,C

<br />Explanation: Using a VPC endpoint keeps traffic between VPC and KMS inside AWS network. The key policy needs to include a source VPC endpoint check to limit access only through the specific VPC endpoint. Private DNS enabled ensures requests automatically route through the VPC endpoint while applications continue using the regional public endpoint.
</details>

32. An application team is designing a solution with two applications. The security team wants the applications' logs to be captured in two different places, because one of the applications produces logs with sensitive data. Which solution meets the requirement with the LEAST risk and effort?

    - A) Use Amazon CloudWatch Logs to capture all logs, write an AWS Lambda function that parses the log file, and move sensitive data to a different log.
    - B) Use Amazon CloudWatch Logs with two log groups, with one for each application, and use an AWS IAM policy to control access to the log groups, as required.
    - C) Aggregate logs into one file, then use Amazon CloudWatch Logs, and then design two CloudWatch metric filters to filter sensitive data from the logs.
    - D) Add logic to the application that saves sensitive data logs on the Amazon EC2 instances' local storage, and write a batch script that logs into the Amazon EC2 instances and moves sensitive logs to a secure location.

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B

<br />Explanation: Using separate log groups for each application and controlling access through IAM policy is the recommended approach with least risk and effort. Other options either mix sensitive data or require additional complexity.
</details>

33. A security engineer must set up security group rules for a three-tier application:
<br/><br/>
Presentation tier - Accessed by users over the web, protected by the security group<br/>
Logic tier - RESTful API accessed from the presentation tier through HTTPS, protected by the security group logic-sg<br/>
Data tier - SQL Server database accessed over port 1433 from the logic tier, protected by the security group data-sg
<br/><br/>
Which combination of the following security group rules will allow the application to be secure and functional? (Select THREE.)

    - A) presentation-sg: Allow ports 80 and 443 from 0.0.0.0/0
    - B) data-sg: Allow port 1433 from presentation-sg
    - C) data-sg: Allow port 1433 from logic-sg
    - D) presentation-sg: Allow port 1433 from data-sg
    - E)logic-sg: Allow port 443 from presentation-sg
    - F)logic-sg: Allow port 443 from 0.0.0.0/0

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): A,C,E

<br />Explanation: The correct configuration allows web access to presentation tier (A), database access from logic tier only (C), and API access from presentation to logic tier (E). Other options violate the security requirements by allowing incorrect access patterns.
</details>

34. A security engineer is working with a product team building a web application on AWS. The application uses Amazon S3 to host the static content, Amazon API Gateway to provide RESTful services, and Amazon DynamoDB as the backend data store. The users already exist in a directory that is exposed through a SAML identity provider. Which combination of the following actions should the engineer take to enable users to be authenticated into the web application and call APIs? (Select THREE)

    - A) Create a custom authorization service using AWS Lambda
    - B) Configure a SAML identity provider in Amazon Cognito to map attributes to the Amazon Cognito user pool attributes
    - C) Configure the SAML identity provider to add the Cognito user pool as a relying party
    - D) Configure an Amazon Cognito identity pool to integrate with social login providers
    - E) Update DynamoDB to store the user email addresses and passwords
    - F) Update API Gateway to use Amazon Cognito user pool authorizer

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B,C,F

<br />Explanation: The solution requires configuring SAML integration with Cognito user pool (B), establishing trust between SAML provider and Cognito (C), and configuring API Gateway to use Cognito for authentication (F).
</details>

35. A company is hosting a web application on AWS and is using an Amazon S3 bucket to store images. Users should have the ability to read objects in the bucket. A security engineer has written the following bucket policy to grant public read access:

```
{
	"ID": "Policy1502987489630", 
	"Version": "2012-10-17", 
	"Statement":[
		{
			"Sid":"Stmt1502987487640",
			"Action":[
				"s3:GetObject",
				"s3:GetObjectVersion"
			],
			"Effect":"Allow",
			"Resource": "arn:aws: s3:::appbucket", 
			"Principal":"*"
		}
	]
}
```

Attempts to read an object, however, receive the error: "Action does not apply to any resource(s) in statement."
What should the engineer do to fix the error?

- A) Change the IAM permissions by applying PutBucketPolicy permissions.
    - B) Verify that the policy has the same name as the bucket name. If not, make it the same.
    - C) Change the resource section to "arn:aws:s3:::appbucket/*"
    - D) Add an s3:ListBucket action

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: The error occurs because the resource element only specifies the bucket path but not the objects within it. Adding "/*" after the bucket name in the resource element allows the policy to apply to all objects in the bucket.
</details>

36. A company decides to place database hosts in its own VPC, and to set up VPC peering to different VPCs containing the application and web tiers. The application servers are unable to connect to the database. Which network troubleshooting steps should be taken to resolve the issue? (Select TWO)

    - A) Check to see if the app servers are in the private or public subnet
    - B) Check the route tables for the app server subnet for routes to the VPC peering connection
    - C) Check the NACLs for the database subnets for rules that allow traffic from the internet
    - D) Check the database security group for rules that allow traffic from the app servers
    - E) Check to see if the database VPC has an internet gateway

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B,D

<br />Explanation: For VPC peering connectivity, route tables need to be properly configured to route traffic through the peering connection, and security group rules need to allow traffic from the app servers to the database.
</details>

37. When testing a new AWS Lambda function that retrieves items from an Amazon DynamoDB table, the security engineer notices that the function was not logging any data to Amazon CloudWatch Logs. The following policy was assigned to the role assumed by the Lambda function:

```
{
	"Version": "2012-10-17", 
	"Statement":[
		{
			"Sid":"Dynamo-1234567",
			"Action":[
				"dynamodb:GetItem"
			],
			"Effect": "Allow",
			"Resource": "*"
		}
	]
}
```
Which LEAST privilege policy addition would allow this function to log properly?

- A) Add cloudwatch:* permissions
    - B) Add logs:CreateLogStream permissions
    - C) Add logs:CreateLogGroup, logs:CreateLogStream, and logs:PutLogEvents permissions
    - D) Add logs:DeleteLogGroup and logs:DeleteLogStream permissions

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: Lambda needs minimum permissions to create log group, create log stream, and put log events to properly log to CloudWatch Logs. This matches the permissions in the AWS Lambda basic execution role policy.
</details>

38. A company is building a data lake on Amazon S3. The data consists of millions of small files containing sensitive information. The security team has the following requirements for the architecture:
<br /><br />
-- Data must be encrypted in transit.<br />
-- Data must be encrypted at rest.<br />
-- The bucket must be private, but if the bucket is accidentally made public, the data must remain confidential.
<br /><br />
Which combination of steps would meet the requirements? (Select TWO.)

    - A) Enable AES-256 encryption using server-side encryption with Amazon S3-managed encryption keys (SSE-S3) on the S3 bucket
    - B) Enable default encryption with server-side encryption with AWS KMS-managed keys (SSE-KMS) on the S3 bucket
    - C) Add a bucket policy that includes a deny if a Putobject request does not include aws:SecureTransport
    - D) Add a bucket policy with aws:SourceIp to allow uploads and downloads from the corporate intranet only
    - E) Enable Amazon Macie to monitor and act on changes to the data lake's S3 bucket

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): B,C</details>

39. A security engineer must ensure that all API calls are collected across all company accounts, and that they are preserved online and are instantly available for analysis for 90 days. For compliance reasons this data must be restorable for 7 years. Which steps must be taken to meet the retention needs in a scalable, cost-effective way?

    - A) Enable AWS CloudTrail logging across all accounts to a centralized S3 bucket with versioning enabled. Set a lifecycle policy to move the data to Amazon Glacier daily, and expire data after 90 days
    - B) Enable AWS CloudTrail logging across all accounts to S3 buckets. Set a lifecycle policy to expire the data in each bucket after 7 years
    - C) Enable AWS CloudTrail logging across all accounts to Amazon Glacier. Set a lifecycle policy to expire the data after 7 years
    - D) Enable AWS CloudTrail logging across all accounts to a centralized Amazon S3 bucket. Set a lifecycle policy to move data to Amazon Glacier after 90 days, and expire data after 7 years

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): D

<br />Explanation: Using a centralized bucket with lifecycle policies provides a scalable and cost-effective solution. Data remains immediately accessible for 90 days, then moves to Glacier for long-term storage until the 7-year expiration.
</details>

40. A security engineer has been informed that a user's access key has been found on GitHub. The engineer must ensure that this access key cannot continue to be used, and must assess whether the access key was used to perform any unauthorized activities. Which steps must be taken to perform these tasks?

    - A) Review the user's IAM permissions and delete any unrecognized or unauthorized resources
    - B) Delete the user, review Amazon CloudWatch logs in all regions, and report the abuse
    - C) Delete or rotate the user's key, review the AWS CloudTrail logs in all regions, and delete any unrecognized or unauthorized resources
    - D) Instruct the user to remove the key from the GitHub submission, rotate keys, and re-deploy any instances that were launched

<details markdown=1><summary markdown='span'><b>Answer</b></summary>Correct Answer(s): C

<br />Explanation: When credentials are exposed, the immediate steps are to delete/rotate the compromised keys, review CloudTrail logs for any unauthorized activity, and clean up any unauthorized resources that may have been created.
</details>

[//]: # (roger & Ditectrev last ---------------------------------------------------------------------- )

41. An AWS Lambda function was misused to alter data, and a Security Engineer must identify who invoked the function and what output was produced. The Engineer cannot find any logs created by the Lambda function in Amazon CloudWatch Logs. Which of the following explains why the logs are not available?

    - A) The execution role for the Lambda function did not grant permissions to write log data to CloudWatch Logs.
    - B) The Lambda function was executed by using Amazon API Gateway, so the logs are not stored in CloudWatch Logs.
    - C) The execution role for the Lambda function did not grant permissions to write to the Amazon S3 bucket where CloudWatch Logs stores the logs.
    - D) The version of the Lambda function that was executed was not current.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A</details>

42. A company has Windows Amazon EC2 instances in a VPC that are joined to on-premises Active Directory servers for domain services. The security team has enabled Amazon GuardDuty on the AWS account to alert on issues with the instances. During a weekly audit of network traffic, the Security Engineer notices that one of the EC2 instances is attempting to communicate with a known command-and- control server but failing. This alert does not show up in GuardDuty. Why did GuardDuty fail to alert to this behavior?

    - A) GuardDuty did not have the appropriate alerts activated.
    - B) GuardDuty does not see these DNS requests.
    - C) GuardDuty only monitors active network traffic flow for command-and-control activity.
    - D) GuardDuty does not report on command-and-control activity.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B</details>

43. The AWS Systems Manager Parameter Store is being used to store database passwords used by an AWS Lambda function. Because this is sensitive data, the parameters are stored as type SecureString and protected by an AWS KMS key that allows access through IAM. When the function executes, this parameter cannot be retrieved as the result of an access denied error. Which of the following actions will resolve the access denied error?

    - A) Update the ssm.amazonaws.com principal in the KMS key policy to allow `kms:Decrypt`.
    - B) Update the Lambda configuration to launch the function in a VPC.
    - C) Add a policy to the role that the Lambda function uses, allowing `kms:Decrypt` for the KMS key.
    - D) Add lambda.amazonaws.com as a trusted entity on the IAM role that the Lambda function uses.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

44. A Security Engineer is looking for a way to control access to data that is being encrypted under a CMK. The Engineer is also looking to use additional authenticated data (AAD) to prevent tampering with ciphertext. Which action would provide the required functionality?

    - A) Pass the key alias to AWS KMS when calling Encrypt and Decrypt API actions.
    - B) Use IAM policies to restrict access to Encrypt and Decrypt API actions.
    - C) Use `kms:EncryptionContext` as a condition when defining IAM policies for the CMK.
    - D) Use key policies to restrict access to the appropriate IAM groups.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

45. An application makes calls to AWS services using the AWS SDK. The application runs on Amazon EC2 instances with an associated IAM role. When the application attempts to access an object within an Amazon S3 bucket; the Administrator receives the following error message: `HTTP 403: Access Denied`. Which combination of steps should the Administrator take to troubleshoot this issue? (Choose THREE)

    - A) Confirm that the EC2 instance's security group authorizes S3 access.
    - B) Verify that the KMS key policy allows decrypt access for the KMS key for this IAM principle.
    - C) Check the S3 bucket policy for statements that deny access to objects.
    - D) Confirm that the EC2 instance is using the correct key pair.
    - E) Confirm that the IAM role associated with the EC2 instance has the proper privileges.
    - F) Confirm that the instance and the S3 bucket are in the same Region.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B, C, E</details>

46. A Security Engineer must implement mutually authenticated TLS connections between containers that communicate inside a VPC. Which solution would be MOST secure and easy to maintain?

    - A) Use AWS Certificate Manager to generate certificates from a public certificate authority and deploy them to all the containers.
    - B) Create a self-signed certificate in one container and use AWS Secrets Manager to distribute the certificate to the other containers to establish trust.
    - C) Use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a subordinate certificate authority, then create the private keys in the containers and sign them using the ACM PCA API.
    - D) Use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a subordinate certificate authority, then use AWS Certificate Manager to generate the private certificates and deploy them to all the containers.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

47. The Accounting department at Example Corp. has made a decision to hire a third-party firm, AnyCompany, to monitor Example Corp.'s AWS account to help optimize costs. The Security Engineer for Example Corp. has been tasked with providing AnyCompany with access to the required Example Corp. AWS resources. The Engineer has created an IAM role and granted permission to AnyCompany's AWS account to assume this role. When customers contact AnyCompany, they provide their role ARN for validation. The Engineer is concerned that one of AnyCompany's other customers might deduce Example Corp.'s role ARN and potentially compromise the company's account. What steps should the Engineer perform to prevent this outcome?

    - A) Create an IAM user and generate a set of long-term credentials. Provide the credentials to AnyCompany. Monitor access in IAM access advisor and plan to rotate credentials on a recurring basis.
    - B) Request an external ID from AnyCompany and add a condition with `sts:Externald` to the role's trust policy.
    - C) Require two-factor authentication by adding a condition to the role's trust policy with aws:MultiFactorAuthPresent.
    - D) Request an IP range from AnyCompany and add a condition with aws:SourceIp to the role's trust policy.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B</details>

48. An Amazon S3 bucket is encrypted using an AWS KMS CMK. An IAM user is unable to download objects from the S3 bucket using the AWS Management Console; however, other users can download objects from the S3 bucket. Which policies should the Security Engineer review and modify to resolve this issue? (Choose THREE)

    - A) The CMK policy.
    - B) The VPC endpoint policy.
    - C) The S3 bucket policy.
    - D) The S3 ACL.
    - E) The IAM policy.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A, C, E</details>

49. While analyzing a company's security solution, a Security Engineer wants to secure the AWS account root user. What should the Security Engineer do to provide the highest level of security for the account?

    - A) Create a new IAM user that has administrator permissions in the AWS account. Delete the password for the AWS account root user.
    - B) Create a new IAM user that has administrator permissions in the AWS account. Modify the permissions for the existing IAM users.
    - C) Replace the access key for the AWS account root user. Delete the password for the AWS account root user.
    - D) Create a new IAM user that has administrator permissions in the AWS account. Enable multi-factor authentication for the AWS account root user.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D</details>

50. A Security Engineer is working with a Product team building a web application on AWS. The application uses Amazon S3 to host the static content, Amazon API Gateway to provide RESTful services; and Amazon DynamoDB as the backend data store. The users already exist in a directory that is exposed through a SAML identity provider. Which combination of the following actions should the Engineer take to enable users to be authenticated into the web application and call APIs? (Choose THREE)

    - A) Create a custom authorization service using AWS Lambda.
    - B) Configure a SAML identity provider in Amazon Cognito to map attributes to the Amazon Cognito user pool attributes.
    - C) Configure the SAML identity provider to add the Amazon Cognito user pool as a relying party.
    - D) Configure an Amazon Cognito identity pool to integrate with social login providers.
    - E) Update DynamoDB to store the user email addresses and passwords.
    - F) Update API Gateway to use a `COGNITO_USER_POOLS` authorizer.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B, C, F</details>

51. While securing the connection between a company's VPC and its on-premises data center, a Security Engineer sent a ping command from an on-premises host (IP address 203.0.113.12) to an Amazon EC2 instance (IP address 172.31.16.139). The ping command did not return a response. The flow log in the VPC showed the following:
   
```
2 123456789010 eni-1235b8ca 203.0.113.12 172.31.16.139 0 0 1 4 336 1432917027 1432917142 ACCEPT OK
2 123456789010 eni-1235b8ca 172.31.16.139 203.0.113.12 0 0 1 4 336 1432917094 1432917142 REJECT OK
```

What action should be performed to allow the ping to work?

    - A) In the security group of the EC2 instance, allow inbound ICMP traffic.
    - B) In the security group of the EC2 instance, allow outbound ICMP traffic.
    - C) In the VPC's NACL, allow inbound ICMP traffic.
    - D) In the VPC's NACL, allow outbound ICMP traffic.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D</details>

52. A Security Engineer is building a Java application that is running on Amazon EC2. The application communicates with an Amazon RDS instance and authenticates with a user name and password. Which combination of steps can the Engineer take to protect the credentials and minimize downtime when the credentials are rotated? (Choose TWO)

    - A) Have a Database Administrator encrypt the credentials and store the ciphertext in Amazon S3. Grant permission to the instance role associated with the EC2 instance to read the object and decrypt the ciphertext.
    - B) Configure a scheduled job that updates the credential in AWS Systems Manager Parameter Store and notifies the Engineer that the application needs to be restarted.
    - C) Configure automatic rotation of credentials in AWS Secrets Manager.
    - D) Store the credential in an encrypted string parameter in AWS Systems Manager Parameter Store. Grant permission to the instance role associated with the EC2 instance to access the parameter and the AWS KMS key that is used to encrypt it.
    - E) Configure the Java application to catch a connection failure and make a call to AWS Secrets Manager to retrieve updated credentials when the password is rotated. Grant permission to the instance role associated with the EC2 instance to access Secrets Manager.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C, E</details>

53. A company plans to migrate a sensitive dataset to Amazon S3. A Security Engineer must ensure that the data is encrypted at rest. The encryption solution must enable the company to generate its own keys without needing to manage key storage or the encryption process. What should the Security Engineer use to accomplish this?

    - A) Server-side encryption with Amazon S3-managed keys (SSE-S3).
    - B) Server-side encryption with AWS KMS-managed keys (SSE-KMS).
    - C) Server-side encryption with customer-provided keys (SSE-C).
    - D) Client-side encryption with an AWS KMS-managed CMK.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B</details>

54. A Security Engineer is defining the logging solution for a newly developed product. Systems Administrators and Developers need to have appropriate access to event log files in AWS CloudTrail to support and troubleshoot the product. Which combination of controls should be used to protect against tampering with and unauthorized access to log files? (Choose TWO)

    - A) Ensure that the log file integrity validation mechanism is enabled.
    - B) Ensure that all log files are written to at least two separate Amazon S3 buckets in the same account.
    - C) Ensure that Systems Administrators and Developers can edit log files, but prevent any other access.
    - D) Ensure that Systems Administrators and Developers with job-related need-to-know requirements only are capable of viewing - but not modifying - the log files.
    - E) Ensure that all log files are stored on Amazon EC2 instances that allow SSH access from the internal corporate network only.

<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A, D</details>
