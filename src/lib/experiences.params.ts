import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const sre_charter_data = "• Execute biweekly production deployments using blue-green methodology across 10+ production applications, ensuring zero-downtime deployments and maintaining system reliability. \n\
• Manage and maintain public cloud clusters in AWS environment, leveraging EKS and Kubernetes for container orchestration and application deployment.\n\
• Participate in on-call rotation providing 24/7 incident response and troubleshooting support for production environments.\n\
• Spearheaded cross-functional initiative to develop comprehensive AWS resource tagging strategy, collaborating with FinOps and Security teams to optimize cost tracking and compliance monitoring.\n\
• Monitor and maintain system performance using DataDog, ensuring optimal operation of cloud infrastructure and applications."

const rule4_data = "• Integrated Vue.js into the existing Django application, enabling client-side rendering and significantly enhancing the application responsiveness and user experience. \n\
• Developed a backend service in Go to aggregate chat data from Slack and meeting details from Google Calendar. Implemented Kafka for efficient message streaming, reducing server load by 30% and ensuring real-time data processing.\n\
• Improved efficiency of time entry for the consultancy by suggesting timesheet entries based on aggregated data from Slack and Google Calendar, leading to more accurate billing and streamlined employee workflows."

const nice_data = "• Migrated Actimize platform code-base from Angular to Vue, resulting in Single Page Application with 30% reduction in loading time.\n\
• Fixed production defects, conducted thorough code reviews, and achieved 90% code coverage with Jest, resulting in efficient refactoring and fewer bugs in production.\n\
• Managed development, unit testing, and documentation for in-house UI library built with Quasar, ensuring consistent UI/UX across products.\n\
• Containerized Java(Gradle, Maven) and Python codebases, combined Kafka topics, and deployed on Kubernetes cluster using Helm charts. Conducted Vue training with 50+ attendees, equipping team with essential skills for ongoing product development."

const charter_data ="• Automated Datadog alert configurations using shell and Python scripts, seamlessly integrating with CI/CD pipelines to reduce downtime by 15%. \n\
• Designed and orchestrated a comprehensive CI/CD workflow for machine provisioning, including the installation and configuration of observability tools. \n\
• Managed Kubernetes cluster deployments for a streaming service, ensuring optimal performance, high availability, and scalability to support a growing user base."


const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'systems-fulltime',
		short: 'Charter',
		// Résumé bullets (Akhil_Gandhi_Resume_Immigration.docx), tagged by practice area.
		bullets: [
			{
				text: "Operate 10+ multi-AZ Kubernetes (EKS) clusters, one dedicated cluster per customer-facing application, supporting a 99.99% availability target through pod disruption budgets, topology spread, HPA with Cluster Autoscaler, and zero-downtime node-group rotations and EKS upgrades.",
				practices: ['k8s-platform']
			},
			{
				text: "Run GitOps release operations for a portfolio of production services on ArgoCD and Argo Rollouts, tuning blue-green and canary strategies with Datadog-based analysis gates to deliver biweekly zero-downtime releases and sub-30-second automated rollbacks.",
				practices: ['release']
			},
			{
				text: "Led P0/P1 incident response in a 24/7 on-call rotation with SOC escalation and BigPanda alert correlation, cutting MTTR 30% by codifying senior engineers' tribal knowledge into runbooks for the top 20 recurring alerts and a structured incident-command playbook.",
				practices: ['incident']
			},
			{
				text: "Built an AI-assisted incident workflow that uses an agentic CLI as a live incident scribe, capturing commands, logs, and hypotheses during the incident and auto-drafting postmortems and runbooks, saving hours of documentation work per incident.",
				practices: ['incident', 'ai-ops']
			},
			{
				text: "Building an AI-assisted observability workflow that connects Datadog, AWS, and Webex through MCP servers, enabling agent-driven audits of dashboard coverage gaps and richer debugging context for faster production triage.",
				practices: ['observability', 'ai-ops']
			},
			{
				text: "Designed and built a Django-based CVE remediation platform that ingests vulnerability reports and maps each finding to its owning application and environment across ~30 AWS accounts using tag-based attribution and cross-account IAM roles; the team tracks 200+ remediated CVEs per quarter on it, with critical and high findings consistently resolved within 7- and 14-day SLAs.",
				practices: ['security-cost'],
				tools: ['python']
			},
			{
				text: "Migrated selected production applications from Nginx to Istio, implementing Gateway and VirtualService routing, a staged mTLS rollout, and resilience patterns including retries, timeouts, circuit breaking, and traffic mirroring.",
				practices: ['k8s-platform']
			},
			{
				text: "Engineered reusable Terraform modules for NLB provisioning and Istio installation, integrating them with the platform EKS module through IRSA and Helm provider wiring, with input validation and versioning standards for safe reuse across teams.",
				practices: ['k8s-platform']
			},
			{
				text: "Drove cloud cost optimization with FinOps through tag enforcement (SCPs and AWS Config rules), S3 lifecycle tiering, and rightsizing, delivering 15% monthly savings and raising tagging compliance from 0% to 95%; currently using agentic AI analysis to surface further optimization targets.",
				practices: ['security-cost', 'ai-ops']
			}
		],
		company: 'Charter Communications (Current-Active-Position)',
		description: sre_charter_data,
		contract: ContractType.FullTime,
		type: 'Systems Engineer I',
		location: 'Greenwood Village, CO, USA',
		period: { from: new Date(2024, 6), to: new Date() },
		skills: getSkills('python', 'datadog', 'aws', 'docker', 'kubernetes', 'ansible', 'jenkins'),
		// Official title — keep matching employer records (linked from LinkedIn).
		name: 'Systems Engineer I',
		color: '#ffffff',
		links: [],
		logo: Assets.Charter
	},
	{
		slug: 'associates-systems-engineer-intern',
		short: 'Charter · Intern',
		// Résumé bullets (Akhil_Gandhi_Resume_Immigration.docx), tagged by practice area.
		bullets: [
			{
				text: "Automated Datadog alert configuration with Python and shell scripts wired into CI/CD pipelines, reducing downtime 15%.",
				practices: ['observability']
			},
			{
				text: "Managed Kubernetes deployments for a streaming service and built a CI/CD workflow for machine provisioning with observability tooling preinstalled.",
				practices: ['k8s-platform', 'release']
			}
		],
		company: 'Charter Communications',
		description: charter_data,
		contract: ContractType.Internship,
		type: 'Dev Ops',
		location: 'Greenwood Village, CO, USA',
		period: { from: new Date(2023, 5), to: new Date(2023, 7) },
		skills: getSkills('python', 'datadog', 'aws', 'docker', 'kubernetes', 'ansible', 'jenkins'),
		name: 'Associate Systems Engineer Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.Charter
	}, 
	{
		slug: 'associate-software-engineer',
		short: 'NICE',
		// Résumé bullets (Akhil_Gandhi_Resume_Immigration.docx), tagged by practice area.
		bullets: [
			{
				text: "Containerized Java and Python codebases, consolidated Kafka topics, and deployed to Kubernetes with Helm charts.",
				practices: ['k8s-platform']
			},
			{
				text: "Migrated the Actimize platform from Angular to a Vue SPA (30% faster loads); drove 90% Jest coverage via code reviews and refactoring.",
				practices: []
			},
			{
				text: "Built and documented an in-house Quasar UI component library; trained 50+ engineers on Vue.",
				practices: []
			}
		],
		company: 'NICE Interactive Solutions',
		description: nice_data,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune, MH, India',
		period: { from: new Date(2021, 6), to: new Date(2022, 6) },
		skills: getSkills('vuejs', 'js', 'docker', 'aws'),
		// Official title — keep matching employer records.
		name: 'Associate Software Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Nice
	}
];

export default MY_EXPERIENCES;
