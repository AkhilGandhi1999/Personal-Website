import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'budget-based-activity-recommendation',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.VueJs,
		name: 'Budget Based Activity Recommendation and Planner',
		period: {
			from: new Date(2023, 4)
		},
		skills: getSkills('vuejs', 'js', 'sass', 'html', 'css', 'docker', 'aws'),
		type: 'Website'
	},
	{
		slug: 'amazon-price-tracker',
		color: '#008000',
		description: "A web UI to track prices of Amazon products and get nofiticaions",
		// description:
		// 	"A web UI to track prices of Amazon products and get nofiticaions \
		// 	//  Implemented scheduler with cron expressions, automating email notifications for added products in Vue.js SPA with Flask backend on EC2 instances. \
		// 	// Orchestrated CI/CD pipelines with GitHub Actions, automating build, testing, and deployment. Integrated messaging and \
		// 	// SMTP protocols for email notifications and flexible notification configurations. \
		// 	// Monitored Flask endpoints with Grafana and Prometheus, leveraging AWS services like S3 and EC2 for efficient \
		// 	// deployment and hosting of SPA and backend components.",
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.VueJs,
		name: 'Amazon Price Tracker',
		period: {
			from: new Date(2023, 3)
		},
		skills: getSkills('vuejs', 'js', 'sass', 'html', 'css', 'docker', 'aws'),
		type: 'Website'
	},
	{
		slug: 'web-stable-diffusion',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Docker,
		name: 'Web UI Stable Diffusion',
		period: {
			from: new Date()
		},
		skills: getSkills('vuejs', 'docker', 'kubernetes', 'aws', 'gcp'),
		type: 'Website'
	},
	{
		slug: 'medicine-reminder',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'Medicine Reminder',
		period: {
			from: new Date()
		},
		skills: getSkills('android', 'java', 'aws'),
		type: 'Android App'
	},
];

export default MY_PROJECTS;
