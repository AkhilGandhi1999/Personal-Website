import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';


const nice_data = "• Migrated Actimize platform code-base from Angular to Vue, resulting in Single Page Application with 30% reduction in loading time.\n\
• Fixed production defects, conducted thorough code reviews, and achieved 90% code coverage with Jest, resulting in efficient refactoring and fewer bugs in production.\n\
• Managed development, unit testing, and documentation for in-house UI library built with Quasar Framework, ensuring consistent UI/UX across products with rebase branching strategy.\n\
• Containerized Java(Gradle, Maven) and Python codebases, combined Kafka topics, and deployed on Kubernetes cluster using Helm charts and YAML service scripts. Conducted Vue training with 50+ attendees,equipping team with essential skill for ongoing product development."


const charter_date = "• Automated setting datadog alerts using scripts and integrated with CI/CD pipeline, reducing the downtime by 15%.\n\
• Created a new CI/CD workflow triggered while provisioning machines, installing and configuring observability tools."


const algo_data = "• Led development of Flask-based REST APIs for virtual try-on of clothes and body measurements with over 90% accuracy.\n\
• Deployed Flask application on AWS EC2 (Linux) instance with Auto Scaling triggered by CloudWatch CPU utilization and Elastic Load Balancer, ensuring efficient API Gateway service access with IAM policies.\n\
• Programmed Android app in Java, implementing object-oriented programming (OOP) concepts for image capture, result display, and secure backend integration using AWS SDK and gateways for reliable API connections."

const bnt_data = "• Analyzed A/B Testing and Multi-arm-bandit algorithm, implemented a web-based dashboard using Multi-arm-bandit for versions of web pages, increased client revenue by 15%, \n\
optimized relational database applying normalization for improved 10% performance."

const html_data = nice_data.replace(/\n/g, '<br>');


const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'netops-intern',
		company: 'Charter Communications',
		description: charter_date,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Greenwood Village, CO, USA',
		period: { from: new Date(2023, 5), to: new Date(2023, 7) },
		skills: getSkills('python', 'datadog', 'aws', 'docker', 'kubernetes', 'ansible', 'gitlab', 'github', 'git'),
		name: 'NetOps Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Charter
	}, 
	// 'vuejs', 'quasar', 'html' ,'css', 'scss', 'aws', 'docker', 'kubernetes', 'jira', 'agile', 'java', 'sh'
	{
		slug: 'associate-software-engineer',
		company: 'NICE Systems',
		description: nice_data,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune, MH, India',
		period: { from: new Date(2021, 6), to: new Date(2022, 6) },
		skills: getSkills('vuejs', 'html', 'js', 'css', 'scss', 'docker', 'aws'),
		name: 'Associate Software Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Nice
	},
	// 'python', 'flask', 'aws', 'android', 'docker', 'nginx', 'gunicorn', 'linux'
	{
		slug: 'software-engineer',
		company: 'AlgoAnalytics',
		description: algo_data,
		contract: ContractType.Internship,
		type: 'Software Engineer',
		location: 'Pune, MH, India',
		period: { from: new Date(2020, 7), to: new Date(2021, 2) },
		skills: getSkills('python', 'flask', 'aws', 'android', 'docker', 'nginx', 'gunicorn', 'linux'),
		name: 'Software Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Algo
	},
	// 'python', 'flask', 'postgres', 'nginx'
	{
		slug: 'python-developer',
		company: 'BNT Soft',
		description: bnt_data,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Pune, MH, India',
		period: { from: new Date(2020, 4), to: new Date(2020, 6) },
		skills: getSkills('python', 'flask', 'postgres', 'nginx'),
		name: 'Python Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.BNT
	}
];

export default MY_EXPERIENCES;
