export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	Credly = 'credly'
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item {
	slug: string;
	name: string;
	logo: Asset;
	description: string;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface Skill extends Item {
	color: string;
}

/** Practice areas shown under "What I do" on the Expertise page. */
export type PracticeId =
	| 'k8s-platform'
	| 'release'
	| 'incident'
	| 'observability'
	| 'security-cost'
	| 'ai-ops';

/** One résumé bullet. Tools are matched from the text automatically; `tools` adds any the text implies. */
export interface Bullet {
	text: string;
	practices: Array<PracticeId>;
	tools?: Array<string>;
}

export interface Project extends Item {
	/** Résumé bullets (source: Akhil_Gandhi_Resume_Immigration.docx). Used by the Expertise page. */
	bullets?: Array<Bullet>;
	/** Short label for "used at" chips, e.g. "Charter · Intern". */
	short?: string;
	links: Array<Link>;
	color: string;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill>;
}

export interface Experience extends Project {
	company: string;
	location: string;
	contract: ContractType;
}

export interface PageParams {
	title: string;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export interface HomeLink {
	platform: Platform;
	link: string;
}

export interface HomePageParams extends PageParams {
	name: string;
	lastName: string;
	description: string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}

export type SearchPageParams = PageParams;

export type ProjectPageParams = PageWithSearchParams<Project>;

export type ExperiencePageParams = PageWithSearchParams<Experience>;

export type SkillsPageParams = PageWithSearchParams<Skill>;

export interface ResumePageParams extends PageParams {
	item: string;
}