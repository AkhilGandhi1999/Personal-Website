import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const rule4_data = "• Integrated Vue.js into the existing Django application, enabling client-side rendering and significantly enhancing the application responsiveness and user experience. \n\
• Developed a backend service in Go to aggregate chat data from Slack and meeting details from Google Calendar. Implemented Kafka for efficient message streaming, reducing server load by 30% and ensuring real-time data processing.\n\
• Improved efficiency of time entry for the consultancy by suggesting timesheet entries based on aggregated data from Slack and Google Calendar, leading to more accurate billing and streamlined employee workflows"

const nice_data = "• Migrated Actimize platform code-base from Angular to Vue, resulting in Single Page Application with 30% reduction in loading time.\n\
• Fixed production defects, conducted thorough code reviews, and achieved 90% code coverage with Jest, resulting in efficient refactoring and fewer bugs in production.\n\
• Managed development, unit testing, and documentation for in-house UI library built with Quasar, ensuring consistent UI/UX across products.\n\
• Containerized Java(Gradle, Maven) and Python codebases, combined Kafka topics, and deployed on Kubernetes cluster using Helm charts. Conducted Vue training with 50+ attendees, equipping team with essential skills for ongoing product development."

const charter_data ="• Automated Datadog alert configurations using shell and Python scripts, seamlessly integrating with CI/CD pipelines to reduce downtime by 15%. \n\
• Designed and orchestrated a comprehensive CI/CD workflow for machine provisioning, including the installation and configuration of observability tools. \n\
• Managed Kubernetes cluster deployments for a streaming service, ensuring optimal performance, high availability, and scalability to support a growing user base."

const algo_data = "• Led development of Flask-based REST APIs for virtual try-on of clothes and body measurements with over 90% accuracy.\n\
• Deployed Flask application on AWS EC2 (Linux) instance with Auto Scaling triggered by CloudWatch CPU utilization and Elastic Load Balancer, ensuring efficient API Gateway service access with IAM policies.\n\
• Programmed Android app in Java, implementing object-oriented programming (OOP) concepts for image capture, result display, and secure backend integration using AWS SDK and gateways for reliable API connections."

const bnt_data = "• Analyzed and compared A/B Testing,Multi-arm-bandit algorithm and drafted report summarizing the implications of both models.\n\
• Implemented a web-based dashboard that uses a Multi-arm-bandit approach for finding the conversion rate for versions of web pages and increased clients revenue by 15%.\n\
• Designed a relational database, applied normalization techniques to optimize performance, and improved the response time by 10%"


const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'software-intern',
		company: 'Rule 4',
		description: rule4_data,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Boulder, CO, USA',
		period: { from: new Date(2023, 7), to: new Date(2024, 4) },
		skills: getSkills('python', 'django', 'go', 'docker', 'git', 'vuejs', 'quasar', 'ag-grid', 'pinia', 'vite', 'gcp', 'vite', 'kafka','nodejs','github'),
		name: 'Software Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Rule4
	}, 
	{
		slug: 'netops-intern',
		company: 'Charter Communications',
		description: charter_data,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Greenwood Village, CO, USA',
		period: { from: new Date(2023, 5), to: new Date(2023, 7) },
		skills: getSkills('python', 'datadog', 'aws', 'docker', 'kubernetes', 'ansible', 'gitlab', 'github', 'git', 'jenkins'),
		name: 'NetOps Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Charter
	}, 
	{
		slug: 'associate-software-engineer',
		company: 'NICE Systems',
		description: nice_data,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune, MH, India',
		period: { from: new Date(2021, 6), to: new Date(2022, 6) },
		skills: getSkills('vuejs', 'html', 'js', 'css', 'sass', 'docker', 'aws'),
		name: 'Associate Software Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Nice
	},
	{
		slug: 'software-engineer',
		company: 'AlgoAnalytics',
		description: algo_data,
		contract: ContractType.Internship,
		type: 'Software Engineer',
		location: 'Pune, MH, India',
		period: { from: new Date(2020, 7), to: new Date(2021, 2) },
		skills: getSkills('python', 'flask', 'aws', 'android', 'docker', 'nginx', 'gunicorn', 'linux', 'github'),
		name: 'Software Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Algo
	},
	{
		slug: 'python-developer',
		company: 'BNT Soft',
		description: bnt_data,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Pune, MH, India',
		period: { from: new Date(2020, 4), to: new Date(2020, 6) },
		skills: getSkills('python', 'flask', 'postgres', 'nginx', 'github'),
		name: 'Python Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.BNT
	}
];

export default MY_EXPERIENCES;
