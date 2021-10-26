import React, { useState } from 'react';
import "./App.css";
//import Amplify from 'aws-amplify';
//import config from './aws-exports';
//Amplify.configure(config);

export default function App() {
	const questions = [
		{
			questionText: 'Which service provides a user the ability to warehouse data in the AWS Cloud?',
			answerOptions: [
				{ answerText: 'Amazon EFS', isCorrect: false },
				{ answerText: 'Amazon Redshift', isCorrect: true },
				{ answerText: 'Amazon RDS', isCorrect: false },
				{ answerText: 'Amazon VPC', isCorrect: false },
			],
		},
		{
			questionText: 'Which AWS service would simplify the migration of a database to AWS?',
			answerOptions: [
				{ answerText: 'AWS Storage Gateway', isCorrect: false },
				{ answerText: 'AWS Database Migration Service(AWS DMS)', isCorrect: true },
				{ answerText: 'Amazon EC2', isCorrect: false },
				{ answerText: 'Amazon AppStream 2.0', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following task can only be preformed after signing in with AWS account root user credentials?',
			answerOptions: [
				{ answerText: 'Closing an AWS Account', isCorrect: true },
				{ answerText: 'Creating a new IAM policy', isCorrect: false },
				{ answerText: 'Attaching a role to an Amazon EC2 instance', isCorrect: false },
				{ answerText: 'Generating access keys for IAM users', isCorrect: false },
			],
		},
		
		{
			questionText: 'Which AWS service can be used in the application deployment process?',
			answerOptions: [
				{ answerText: 'AWS AppSync', isCorrect: false },
				{ answerText: 'AWS Batch', isCorrect: false },
				{ answerText: 'AWS CodePipeline', isCorrect: true },
				{ answerText: 'AWS DataSync', isCorrect: false },
			],
		},
		{
			questionText: 'True or False: AWS OpsWorks service is used to automate configuration management using 					Chef and Puppet.',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },	
			],
		},
		{
			questionText: 'Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?',
			answerOptions: [
				{ answerText: 'AWS Budgets', isCorrect: true },
				{ answerText: 'AWS Cost Explorer', isCorrect: false },
				{ answerText: 'AWS Cost Allocation Tags', isCorrect: false },
				{ answerText: 'AWS Organizations', isCorrect: false },
			],
		},
		{
			questionText: 'Which is a benefit of using Amazon RDS over Amazon EC2 when running relational databases on AWS?',
			answerOptions: [
				{ answerText: 'Schema management', isCorrect: false },
				{ answerText: 'Indexing of tables', isCorrect: false },
				{ answerText: 'Extract, transform, and load (ETL) management', isCorrect: false },
				{ answerText: 'Software patching', isCorrect: true },
			],
		},
		{
			questionText: 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
			answerOptions: [
				{ answerText: 'AWS Trusted Advisor', isCorrect: false },
				{ answerText: 'AWS CloudTrail', isCorrect: true },
				{ answerText: 'AWS X-Ray', isCorrect: false },
				{ answerText: 'AWS Idenfity and Access Management (AWS IAM)', isCorrect: false },
			],
		},
		{
			questionText: 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
			answerOptions: [
				{ answerText: 'Amazon EC2 costs are billed on a monthly basis', isCorrect: false },
				{ answerText: 'Users retain full administrative access to their Amazon EC2 instances', isCorrect: false },
				{ answerText: 'Amazon EC2 instances can be launched on demand when needed', isCorrect: true },
				{ answerText: 'Users can permanently run enough instances to handle peak workloads', isCorrect: false },
			],
		},
		{

			questionText: 'Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?',
			answerOptions: [
				{ answerText: 'Vertical scaling', isCorrect: false },
				{ answerText: 'Manual failure recovery', isCorrect: false },
				{ answerText: 'Testing recovery procedures', isCorrect: true },
				{ answerText: 'Changing infrastructure manually', isCorrect: false },
			],
		},
		{
			questionText: 'Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?',
			answerOptions: [
				{ answerText: 'Performance efficiency', isCorrect: false },
				{ answerText: 'Operational excellence', isCorrect: true },
				{ answerText: 'Reliability', isCorrect: false },
				{ answerText: 'Security', isCorrect: false },
			],
		},
		{
			questionText: 'Which AWS networking service enables a company to create a virtual network within AWS?',
			answerOptions: [
				{ answerText: 'AWS Config', isCorrect: false },
				{ answerText: 'Amazon Route 53', isCorrect: false },
				{ answerText: 'AWS Direct Connect', isCorrect: false },
				{ answerText: 'Amazon Virtual Private Cloud (Amazon VPC)', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
			answerOptions: [
				{ answerText: 'Configuring third-party applications', isCorrect: false },
				{ answerText: 'Maintaining physical hardware', isCorrect: true },
				{ answerText: 'Securing application access and data', isCorrect: false },
				{ answerText: 'Managing guest operating systems', isCorrect: false },
			],
		},
		{
			questionText: 'Which service can be used to deploy applications on AWS?',
			answerOptions: [
				{ answerText: 'AWS Elastic Beanstalk', isCorrect: true },
				{ answerText: 'AWS Config', isCorrect: false },
				{ answerText: 'AWS CodeCommit', isCorrect: true },
				{ answerText: 'AWS Application Discovery Service', isCorrect: false },
				{ answerText: 'Amazon Kinesis', isCorrect: false },
			],
		},
		{
			questionText: 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
			answerOptions: [
				{ answerText: 'AWS Regions', isCorrect: false },
				{ answerText: 'Edge Locations', isCorrect: true },
				{ answerText: 'Availability Zones', isCorrect: false },
				{ answerText: 'Virtual Private Cloud (VPC)', isCorrect: false },
			],
		},
		{
			questionText: 'Where can a user find information about prohibited actions on the AWS infrastructure?',
			answerOptions: [
				{ answerText: 'AWS Trusted Advisor', isCorrect: false },
				{ answerText: 'AWS IAM', isCorrect: false },
				{ answerText: 'AWS Billing Console', isCorrect: false },
				{ answerText: 'AWS Acceptable Use Policy', isCorrect: true },
			],
		},
		{
			questionText: 'Which AWS service can be used to provide an on-demand, cloud-based contact center?',
			answerOptions: [
				{ answerText: 'AWS Direct Connect', isCorrect: false },
				{ answerText: 'Amazon Connect', isCorrect: true },
				{ answerText: 'AWS Support Center', isCorrect: false },
				{ answerText: 'AWS Managed Services ', isCorrect: false },
			],
		},
{
			questionText: 'Which service would be used to send alerts based on Amazon CloudWatch Alarms?',
			answerOptions: [
				{ answerText: 'Amazon Simple Notification Service (Amazon SNS)', isCorrect: true },
				{ answerText: 'AWS CloudTrail', isCorrect: false },
				{ answerText: 'AWS Trusted Advisor', isCorrect: false },
				{ answerText: 'Amazon Route 53', isCorrect: false },
			],
		},
		{
			questionText: 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?',
			answerOptions: [
				{ answerText: 'Use Amazon Cloud Directory', isCorrect: false },
				{ answerText: 'Audit AWS Identity and Access Management roles', isCorrect: false },
				{ answerText: 'Enable multi-factor authentication', isCorrect: true },
				{ answerText: 'Enable AWS CloudTrial', isCorrect: false },
			],
		},
		{
			questionText: 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
			answerOptions: [
				{ answerText: 'AWS Config', isCorrect: false },
				{ answerText: 'AWS OpsWorks', isCorrect: false },
				{ answerText: 'AWS SDK', isCorrect: false },
				{ answerText: 'AWS Martketplace', isCorrect: true },
			],
		},	

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const scorePercent = Math.floor((score / questions.length) * 100);
	//const endQuestions = 11;
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			document.getElementById("submit").style.display= 'block';   
			var finalScore = 0;
			finalScore = Math.floor(scorePercent);             
			document.getElementById("score").value = finalScore;
		 
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<br/>
					Which would give you a score of {scorePercent}%
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

