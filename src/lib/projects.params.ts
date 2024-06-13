import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'amazon-price-tracker',
		color: '#008000',
		description:"This website is a price tracker, built to monitor prices in real-time and send automated email notifications for any changes. It's developed using Vue.js, with Grafana and Prometheus for monitoring.\n\
					The site uses Firebase for authentication and AWS S3 for storing assets.\n\
					Explore to see how it can help you stay updated with the latest price trends effortlessly!",
		links: [{ to: 'https://github.com/AkhilGandhi1999/Amazon-Price-Tracker', label: 'GitHub' }],
		logo: Assets.VueJs,
		name: 'Amazon Price Tracker',
		period: {
			from: new Date(2023, 0),
			to: new Date(2023, 4)
		},
		skills: getSkills('vuejs', 'nginx', 'docker', 'aws', 'git', 'flask', 'gunicorn'),
		type: 'Website'
	},
	{
		slug: 'budget-based-activity-recommendation',
		color: '#008000',
		description:"This platform is designed to help you plan the perfect trip within your budget.\n\
					Its built as a single-page application using Vue.js and integrates with AWS S3, Weather API, and Google Maps API.\n\
					The system offers personalized activity suggestions, itinerary planning, and real-time trip metrics. \n\
					Our backend uses Flask based RESTful APIs on Linux EC2 with Redis caching, ensuring efficient performance.",
		links: [{ to: 'https://github.com/AkhilGandhi1999/Budget-Based-Activity-Recommendation-And-Planner-Frontend', label: 'GitHub' }],
		logo: Assets.VueJs,
		name: 'Budget Based Activity Recommendation and Planner',
		period: {
			from: new Date(2023, 0),
			to: new Date(2023, 3)
		},
		skills: getSkills('vuejs', 'sass', 'docker', 'aws', 'quasar', 'flask'),
		type: 'Website'
	},
	{
		slug: 'web-stable-diffusion',
		color: '#5e95e3',
		description:"Developed a scalable web UI using Vue.js and Flask, containerized with Docker,\n\
					for seamless integration across frontend, backend, and S3 Buckets. \n\
					Programmed RESTful APIs and incorporated Vuex for efficient state management.\n\
					Implemented Kubernetes on GCP with an ingress controller to enhance scalability and load balancing,\n\
					ensuring robust performance and reliability.",
		links: [{ to: 'https://github.com/AkhilGandhi1999/Web-App-Stable-Diffusion-Frontend', label: 'GitHub' }],
		logo: Assets.Docker,
		name: 'Web UI Stable Diffusion',
		period: {
			from: new Date(2022, 7),
			to: new Date(2022, 11)
		},
		skills: getSkills('vuejs', 'docker', 'kubernetes', 'aws', 'gcp'),
		type: 'Website'
	},
	{
		slug: 'medicine-reminder',
		color: '#008000',
		description:"Developed an Android app for medicine tracking, featuring a graph library for\n\
					comprehensive monitoring of medication schedules. Prototyped the user interface with Adobe XD and\n\
					incorporated Google Maps to display nearby pharmacies and hospitals within a 1-mile radius,\n\
					ensuring users have easy access to essential medical facilities.",
		links: [{ to: 'https://github.com/AkhilGandhi1999/Medicine-Reminder-App', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'Medicine Reminder',
		period: {
			from: new Date(2020, 0),
			to: new Date(2020, 6)
		},
		skills: getSkills('android', 'java', 'aws'),
		type: 'Android App'
	},
];

export default MY_PROJECTS;
