# Practice Exam 1

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. Incident response in security automation - Mr Peterson is the AWS security architect for his organization. The team uses AWS Guard, AWS Security Hub and AWS config to monitor security events. One day Guard detects an anomaly suggesting that an EC2 instance might have been compromised. Mr Peterson needs to trigger an automated incident response action. Which of the following steps should Mr Peterson take to ensure that the response is timely accurate and effective?
    - A) Setup AWS Lambda to automatically isolate the compromised EC2 instance by updating its Security Group rules to block all incoming traffic
    - B) Use AWS config to record configuration changes and trigger an SNS notification to alert the security team
    - C) Configure AWS security Hub to integrate with AWS cloudtrail to directly block the instance and notify the team
    - D) Setup Guard to invoke AWS Lambda function that automatically reboots the EC2 instance to mitigate the risk

<details markdown=1><summary markdown='span'><b>Answer</b></summary> Correct Answer(s): A
<br><br>
Explanation: The best approach for Mr Peterson is to configure AWS Lambda to isolate the compromised EC2 instance automatically by adjusting its Security Group rules to block incoming traffic. This step immediately halts further communication with the instance, mitigating potential damage. AWS Lambda can be triggered by Guard findings, allowing for an automated and timely response. AWS Guard detects suspicious activity and can invoke Lambda functions in response to specific findings, allowing automatic isolation of the affected instance. AWS config tracks configuration changes but it doesn't take direct action like isolating an instance. AWS security hub consolidates security findings but is not designed to block instances directly without additional tools like Lambda. Rebooting an instance is not an appropriate response to a compromised EC2 instance as rebooting does not necessarily remove the threat.
</details>
