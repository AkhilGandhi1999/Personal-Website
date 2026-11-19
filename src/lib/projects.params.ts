import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'timesheet-automation',
		short: 'Capstone',
		// Résumé: CU Boulder M.S. capstone, sponsored by Rule4, for academic credit (not employment).
		bullets: [
			{
				text: 'Built a Go backend service that aggregated Slack and Google Calendar data over Kafka streams for real-time processing.',
				practices: []
			},
			{
				text: 'Turned the aggregated data into automated timesheet-entry suggestions for the sponsoring consultancy, with the UI shipped as a Vue.js layer in their existing Django app.',
				practices: []
			}
		],
		color: '#00ADD8',
		description: '',
		links: [],
		logo: Assets.Go,
		name: 'Timesheet Automation',
		period: {
			from: new Date(2023, 7),
			to: new Date(2024, 3)
		},
		skills: getSkills('go', 'kafka', 'vuejs', 'django'),
		type: 'M.S. Capstone · sponsored by Rule4'
	},
	{
		slug: 'amazon-price-tracker',
		short: 'Amazon Price Tracker',
		// Résumé bullets (Akhil_Gandhi_Resume_Immigration.docx), tagged by practice area.
		bullets: [
			{
				text: 'Python/Flask service with cron-based scraper jobs on EKS; Redis caching, S3 storage, and Apache Traffic Server as a reverse proxy and cache layer.',
				practices: ['k8s-platform']
			},
			{
				text: 'Instrumented with Prometheus metrics and Grafana dashboards; Dockerized with Helm charts and GitHub Actions CI/CD including image security scans.',
				practices: ['observability', 'release']
			}
		],
		color: '#326CE5',
		description: '',
		links: [{ to: 'https://github.com/AkhilGandhi1999/Amazon-Price-Tracker', label: 'GitHub' }],
		logo: Assets.Kubernetes,
		name: 'Amazon Price Tracker',
		period: {
			from: new Date(2023, 0),
			to: new Date(2023, 4)
		},
		skills: getSkills('vuejs', 'nginx', 'docker', 'aws', 'flask'),
		type: 'Website'
	},
	{
		slug: 'budget-based-activity-recommendation',
		short: 'Budget Planner',
		// Résumé bullets (added Nov 19, 2026).
		bullets: [
			{
				text: 'Vue.js single-page app that plans trips within a budget, with personalized activity suggestions, itinerary planning, and real-time trip metrics from the Weather and Google Maps APIs.',
				practices: []
			},
			{
				text: 'Flask REST APIs on Linux EC2 with Redis caching and S3 storage.',
				practices: []
			}
		],
		color: '#42B883',
		description: '',
		links: [
			{
				to: 'https://github.com/AkhilGandhi1999/Budget-Based-Activity-Recommendation-And-Planner-Frontend',
				label: 'GitHub'
			}
		],
		logo: Assets.VueJs,
		name: 'Budget-Based Activity Recommendation & Planner',
		period: {
			from: new Date(2023, 0),
			to: new Date(2023, 3)
		},
		skills: getSkills('vuejs', 'docker', 'aws', 'quasar', 'flask'),
		type: 'Website'
	},
	{
		slug: 'medicine-reminder',
		short: 'Medicine Reminder',
		// Résumé line (added Nov 19, 2026), condensed from the original project description.
		bullets: [
			{
				text: 'Android app in Java for tracking medication schedules with charts, plus Google Maps showing nearby pharmacies and hospitals within a 1-mile radius.',
				practices: []
			}
		],
		color: '#3DDC84',
		description: '',
		links: [{ to: 'https://github.com/AkhilGandhi1999/Medicine-Reminder-App', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'Medicine Reminder',
		period: {
			from: new Date(2020, 0),
			to: new Date(2020, 6)
		},
		skills: getSkills('java'),
		type: 'Android App'
	}
];

export default MY_PROJECTS;
