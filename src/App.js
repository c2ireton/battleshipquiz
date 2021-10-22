import React, { useState } from 'react';
import "./App.css";

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

			questionText: 'What tool can be used to pentest web apps?',
			answerOptions: [
				{ answerText: 'dumpster dive', isCorrect: false },
				{ answerText: 'Encase', isCorrect: false },
				{ answerText: 'maltego', isCorrect: false },
				{ answerText: 'Burp Suite', isCorrect: true },
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
			questionText: 'Which services can be used to deploy applications on AWS? (Choose TWO)',
			answerOptions: [
				{ answerText: 'AWS Elastic Beanstalk', isCorrect: true },
				{ answerText: 'AWS Config', isCorrect: false },
				{ answerText: 'AWS OpsWorks', isCorrect: true },
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

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const scorePercent = (score / questions.length * 100);		

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                                        <br/>
					Which is {scorePercent}%  
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
