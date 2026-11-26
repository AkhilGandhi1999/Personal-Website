import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS, { pickSkills } from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Akhil Gandhi';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experience',
	resume: 'Résumé',
	skills: 'Expertise'
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
	// One-sentence version of the résumé summary (the certifications are in the pills below).
	description:
		'Production Kubernetes (EKS) with GitOps delivery, observability, and 24/7 incident response, plus the automation behind it in Python and Terraform.',
	role: 'site reliability engineer',
	// Typed in turn under the name (each backed by a résumé bullet).
	roles: [
		'site reliability engineer',
		'kubernetes (eks) operator',
		'gitops + argocd releases',
		'p0/p1 incident lead',
		'terraform + python automation'
	],
	// From the résumé: 99.99% target and P0/P1 + MTTR are Charter bullets; certs are on Credly.
	pills: [
		{ label: '99.99% availability target', kind: 'status' },
		{ label: 'P0/P1 incident lead · 24/7 on-call', kind: 'status' },
		{ label: 'MTTR −30%', kind: 'status' },
		{ label: 'CKA · Terraform · GCP · AWS', kind: 'cert' }
	],
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/AkhilGandhi1999' },
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
	title: 'Experience',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Expertise',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Résumé',
	// File in static/. To update the résumé, replace that file (keep this name) and redeploy.
	item: 'Akhil_Gandhi_Resume.pdf'
};
