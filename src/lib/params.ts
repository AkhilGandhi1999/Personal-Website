import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS, { pickSkills } from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Akhil Gandhi';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Email:
			return Icons.Email;
		case Platform.Credly:
			return Icons.Credly;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Akhil',
	lastName: 'Gandhi',
	// Compact version of the summary in Akhil_Gandhi_Resume_Immigration.docx.
	description:
		'Site Reliability Engineer running production Kubernetes (EKS) with GitOps delivery, observability, and 24/7 incident response, and building the automation behind it in Python and Terraform. CKA, Terraform, and Google Cloud certified, and an early adopter of agentic AI in day-to-day operations.',
	links: [
		{	platform: Platform.GitHub, 
			link: 'https://github.com/AkhilGandhi1999' 
		},
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/ak-gandhi/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/22501073/akhil-gandhi'
		},
		{
			platform: Platform.Credly,
			link: 'https://www.credly.com/users/ak-gandhi'
		},
		{
			platform: Platform.Email,
			link: 'akhil.gandhi10.ag@gmail.com'
		}
	],
	// Home carousel: SRE / cloud / DevOps tools from the résumé, in this order.
	skills: pickSkills(
		// Platform & delivery
		'kubernetes',
		'aws',
		'terraform',
		'argocd',
		'helm',
		'istio',
		'docker',
		// Observability
		'datadog',
		'prometheus',
		'grafana',
		'splunk',
		// CI/CD & automation
		'github-actions',
		'jenkins',
		'ansible',
		'packer',
		// Cloud, OS & languages
		'gcp',
		'linux',
		'python',
		'go',
		'bash'
	)
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	// File in static/. To update the résumé, replace that file (keep this name) and redeploy.
	item: 'Akhil_Gandhi_Resume.pdf'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
