import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
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

export const TITLE_SUFFIX = 'My Journey';

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
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Akhil',
	lastName: 'Gandhi',
	description:"Welcome to my personal website! I'm Akhil Gandhi, a passionate software developer with a strong foundation in computer science and a knack for turning complex problems into elegant solutions.",
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
			platform: Platform.Email,
			link: 'akhil.gandhi10.ag@gmail.com'
		}
	]
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
	item: 'https://drive.google.com/file/d/1X4-RefVdZm4YkRE34OGhG1a-u-dGpkYw/view?usp=drive_link'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
