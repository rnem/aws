# Practice Exam 7

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. An AWS Lambda function was misused to alter data, and a Security Engineer must identify who invoked the function and what output was produced. The Engineer cannot find any logs created by the Lambda function in Amazon CloudWatch Logs. Which of the following explains why the logs are not available?

    - A) The execution role for the Lambda function did not grant permissions to write log data to CloudWatch Logs.
    - B) The Lambda function was executed by using Amazon API Gateway, so the logs are not stored in CloudWatch Logs.
    - C) The execution role for the Lambda function did not grant permissions to write to the Amazon S3 bucket where CloudWatch Logs stores the logs.
    - D) The version of the Lambda function that was executed was not current.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A</details>

2. A company has Windows Amazon EC2 instances in a VPC that are joined to on-premises Active Directory servers for domain services. The security team has enabled Amazon GuardDuty on the AWS account to alert on issues with the instances. During a weekly audit of network traffic, the Security Engineer notices that one of the EC2 instances is attempting to communicate with a known command-and- control server but failing. This alert does not show up in GuardDuty. Why did GuardDuty fail to alert to this behavior?

    - A) GuardDuty did not have the appropriate alerts activated.
    - B) GuardDuty does not see these DNS requests.
    - C) GuardDuty only monitors active network traffic flow for command-and-control activity.
    - D) GuardDuty does not report on command-and-control activity.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B</details>

3. The AWS Systems Manager Parameter Store is being used to store database passwords used by an AWS Lambda function. Because this is sensitive data, the parameters are stored as type SecureString and protected by an AWS KMS key that allows access through IAM. When the function executes, this parameter cannot be retrieved as the result of an access denied error. Which of the following actions will resolve the access denied error?

    - A) Update the ssm.amazonaws.com principal in the KMS key policy to allow `kms:Decrypt`.
    - B) Update the Lambda configuration to launch the function in a VPC.
    - C) Add a policy to the role that the Lambda function uses, allowing `kms:Decrypt` for the KMS key.
    - D) Add lambda.amazonaws.com as a trusted entity on the IAM role that the Lambda function uses.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

4. A Security Engineer is looking for a way to control access to data that is being encrypted under a CMK. The Engineer is also looking to use additional authenticated data (AAD) to prevent tampering with ciphertext. Which action would provide the required functionality?

    - A) Pass the key alias to AWS KMS when calling Encrypt and Decrypt API actions.
    - B) Use IAM policies to restrict access to Encrypt and Decrypt API actions.
    - C) Use `kms:EncryptionContext` as a condition when defining IAM policies for the CMK.
    - D) Use key policies to restrict access to the appropriate IAM groups.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

5. An application makes calls to AWS services using the AWS SDK. The application runs on Amazon EC2 instances with an associated IAM role. When the application attempts to access an object within an Amazon S3 bucket; the Administrator receives the following error message: `HTTP 403: Access Denied`. Which combination of steps should the Administrator take to troubleshoot this issue? (Choose THREE)

    - A) Confirm that the EC2 instance's security group authorizes S3 access.
    - B) Verify that the KMS key policy allows decrypt access for the KMS key for this IAM principle.
    - C) Check the S3 bucket policy for statements that deny access to objects.
    - D) Confirm that the EC2 instance is using the correct key pair.
    - E) Confirm that the IAM role associated with the EC2 instance has the proper privileges.
    - F) Confirm that the instance and the S3 bucket are in the same Region.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B, C, E</details>

6. A Security Engineer must implement mutually authenticated TLS connections between containers that communicate inside a VPC. Which solution would be MOST secure and easy to maintain?

    - A) Use AWS Certificate Manager to generate certificates from a public certificate authority and deploy them to all the containers.
    - B) Create a self-signed certificate in one container and use AWS Secrets Manager to distribute the certificate to the other containers to establish trust.
    - C) Use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a subordinate certificate authority, then create the private keys in the containers and sign them using the ACM PCA API.
    - D) Use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a subordinate certificate authority, then use AWS Certificate Manager to generate the private certificates and deploy them to all the containers.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C</details>

7. The Accounting department at Example Corp. has made a decision to hire a third-party firm, AnyCompany, to monitor Example Corp.'s AWS account to help optimize costs. The Security Engineer for Example Corp. has been tasked with providing AnyCompany with access to the required Example Corp. AWS resources. The Engineer has created an IAM role and granted permission to AnyCompany's AWS account to assume this role. When customers contact AnyCompany, they provide their role ARN for validation. The Engineer is concerned that one of AnyCompany's other customers might deduce Example Corp.'s role ARN and potentially compromise the company's account. What steps should the Engineer perform to prevent this outcome?

    - A) Create an IAM user and generate a set of long-term credentials. Provide the credentials to AnyCompany. Monitor access in IAM access advisor and plan to rotate credentials on a recurring basis.
    - B) Request an external ID from AnyCompany and add a condition with `sts:Externald` to the role's trust policy.
    - C) Require two-factor authentication by adding a condition to the role's trust policy with aws:MultiFactorAuthPresent.
    - D) Request an IP range from AnyCompany and add a condition with aws:SourceIp to the role's trust policy.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B</details>

8. An Amazon S3 bucket is encrypted using an AWS KMS CMK. An IAM user is unable to download objects from the S3 bucket using the AWS Management Console; however, other users can download objects from the S3 bucket. Which policies should the Security Engineer review and modify to resolve this issue? (Choose THREE)

    - A) The CMK policy.
    - B) The VPC endpoint policy.
    - C) The S3 bucket policy.
    - D) The S3 ACL.
    - E) The IAM policy.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A, C, E</details>

9. While analyzing a company's security solution, a Security Engineer wants to secure the AWS account root user. What should the Security Engineer do to provide the highest level of security for the account?

    - A) Create a new IAM user that has administrator permissions in the AWS account. Delete the password for the AWS account root user.
    - B) Create a new IAM user that has administrator permissions in the AWS account. Modify the permissions for the existing IAM users.
    - C) Replace the access key for the AWS account root user. Delete the password for the AWS account root user.
    - D) Create a new IAM user that has administrator permissions in the AWS account. Enable multi-factor authentication for the AWS account root user.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D</details>

10. A Security Engineer is working with a Product team building a web application on AWS. The application uses Amazon S3 to host the static content, Amazon API Gateway to provide RESTful services; and Amazon DynamoDB as the backend data store. The users already exist in a directory that is exposed through a SAML identity provider. Which combination of the following actions should the Engineer take to enable users to be authenticated into the web application and call APIs? (Choose THREE)

    - A) Create a custom authorization service using AWS Lambda.
    - B) Configure a SAML identity provider in Amazon Cognito to map attributes to the Amazon Cognito user pool attributes.
    - C) Configure the SAML identity provider to add the Amazon Cognito user pool as a relying party.
    - D) Configure an Amazon Cognito identity pool to integrate with social login providers.
    - E) Update DynamoDB to store the user email addresses and passwords.
    - F) Update API Gateway to use a `COGNITO_USER_POOLS` authorizer.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B, C, F</details>

11. While securing the connection between a company's VPC and its on-premises data center, a Security Engineer sent a ping command from an on-premises host (IP address 203.0.113.12) to an Amazon EC2 instance (IP address 172.31.16.139). The ping command did not return a response. The flow log in the VPC showed the following: `2 123456789010 eni-1235b8ca 203.0.113.12 172.31.16.139 0 0 1 4 336 1432917027 1432917142 ACCEPT OK 2 123456789010 eni-1235b8ca 172.31.16.139 203.0.113.12 0 0 1 4 336 1432917094 1432917142 REJECT OK`. What action should be performed to allow the ping to work?

    - A) In the security group of the EC2 instance, allow inbound ICMP traffic.
    - B) In the security group of the EC2 instance, allow outbound ICMP traffic.
    - C) In the VPC's NACL, allow inbound ICMP traffic.
    - D) In the VPC's NACL, allow outbound ICMP traffic.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): D</details>

12. A Security Engineer is building a Java application that is running on Amazon EC2. The application communicates with an Amazon RDS instance and authenticates with a user name and password. Which combination of steps can the Engineer take to protect the credentials and minimize downtime when the credentials are rotated? (Choose TWO)

    - A) Have a Database Administrator encrypt the credentials and store the ciphertext in Amazon S3. Grant permission to the instance role associated with the EC2 instance to read the object and decrypt the ciphertext.
    - B) Configure a scheduled job that updates the credential in AWS Systems Manager Parameter Store and notifies the Engineer that the application needs to be restarted.
    - C) Configure automatic rotation of credentials in AWS Secrets Manager.
    - D) Store the credential in an encrypted string parameter in AWS Systems Manager Parameter Store. Grant permission to the instance role associated with the EC2 instance to access the parameter and the AWS KMS key that is used to encrypt it.
    - E) Configure the Java application to catch a connection failure and make a call to AWS Secrets Manager to retrieve updated credentials when the password is rotated. Grant permission to the instance role associated with the EC2 instance to access Secrets Manager.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): C, E</details>

13. A company plans to migrate a sensitive dataset to Amazon S3. A Security Engineer must ensure that the data is encrypted at rest. The encryption solution must enable the company to generate its own keys without needing to manage key storage or the encryption process. What should the Security Engineer use to accomplish this?

    - A) Server-side encryption with Amazon S3-managed keys (SSE-S3).
    - B) Server-side encryption with AWS KMS-managed keys (SSE-KMS).
    - C) Server-side encryption with customer-provided keys (SSE-C).
    - D) Client-side encryption with an AWS KMS-managed CMK.


<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): B</details>

14. A Security Engineer is defining the logging solution for a newly developed product. Systems Administrators and Developers need to have appropriate access to event log files in AWS CloudTrail to support and troubleshoot the product. Which combination of controls should be used to protect against tampering with and unauthorized access to log files? (Choose TWO)

    - A) Ensure that the log file integrity validation mechanism is enabled.
    - B) Ensure that all log files are written to at least two separate Amazon S3 buckets in the same account.
    - C) Ensure that Systems Administrators and Developers can edit log files, but prevent any other access.
    - D) Ensure that Systems Administrators and Developers with job-related need-to-know requirements only are capable of viewing - but not modifying - the log files.
    - E) Ensure that all log files are stored on Amazon EC2 instances that allow SSH access from the internal corporate network only.

<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A, D</details>
