import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:"",
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description:"",
		logo: Assets.NodeJs,
		name: 'NodeJs'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:"",
		logo: Assets.TypeScript,
		name: 'TypeScript'
	}),
	s({
		slug: 'vuejs',
		color: 'green',
		description:"",
		logo: Assets.VueJs,
		name: 'VueJs'
	}),
	s({
		slug: 'quasar',
		color: 'blue',
		description:"",
		logo: Assets.Quasar,
		name: 'Quasar'
	}),
	s({
		slug: 'react',
		color: 'blue',
		description:"",
		logo: Assets.ReactJs,
		name: 'ReactJs'
	}),
	s({
		slug: 'django',
		color: 'green',
		description:"",
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'firebase',
		color: 'orange',
		description:"",
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'kafka',
		color: 'blue',
		description:"",
		logo: Assets.Kafka,
		name: 'Kafka'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description:"",
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:"",
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'vite',
		color: 'purple',
		description:"",
		logo: Assets.Vite,
		name: 'Vite'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:"",
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:"",
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'python',
		color: 'white',
		description:"",
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'flask',
		color: 'white',
		description:"",
		logo: Assets.Flask,
		name: 'Flask'
	}),

	s({
		slug: 'gunicorn',
		color: 'white',
		description:"",
		logo: Assets.Gunicorn,
		name: 'Gunicorn'
	}),

	s({
		slug: 'nginx',
		color: 'green',
		description:"",
		logo: Assets.Nginx,
		name: 'Nginx'
	}),
	s({
		slug: 'aws',
		color: 'red',
		description:"",
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'gcp',
		color: 'yellow',
		description:"",
		logo: Assets.GCP,
		name: 'GCP'
	}),
	s({
		slug: 'jenkins',
		color: 'red',
		description:"",
		logo: Assets.Jenkins,
		name: 'Jenkins'
	}),
	s({
		slug: 'ansible',
		color: 'red',
		description:"",
		logo: Assets.Ansible,
		name: 'Ansible'
	}),
	s({
		slug: 'git',
		color: 'black',
		description:"",
		logo: Assets.Git,
		name: 'Git'
	}),
	s({
		slug: 'github',
		color: 'black',
		description:"",
		logo: Assets.GitHub,
		name: 'GitHub'
	}),
	s({
		slug: 'gitlab',
		color: 'orange',
		description:"",
		logo: Assets.GitLab,
		name: 'GitLab'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description:"",
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'kubernetes',
		color: 'white',
		description:"",
		logo: Assets.Kubernetes,
		name: 'Kubernetes'
	}),
	s({
		slug: 'datadog',
		color: 'purple',
		description:"",
		logo: Assets.Datadog,
		name: 'Datadog'
	}),
	s({
		slug: 'java',
		color: 'red',
		description:"",
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'spring-boot',
		color: 'green',
		description:"",
		logo: Assets.SpringBoot,
		name: 'SpringBoot'
	}),
	s({
		slug: 'android',
		color: 'green',
		description:"",
		logo: Assets.Android,
		name: 'Android'
	}),
	s({
		slug: 'mysql',
		color: 'blue',
		description:"",
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description:"",
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'postgres',
		color: 'blue',
		description:"",
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'redis',
		color: 'redis',
		description:"",
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'go',
		color: 'blue',
		description:"",
		logo: Assets.Go,
		name: 'Go'
	}),
	s({
		slug: 'py-test',
		color: 'grey',
		description:"",
		logo: Assets.PyTest,
		name: 'PyTest'
	}),
	s({
		slug: 'jest',
		color: 'grey',
		description:"",
		logo: Assets.Jest,
		name: 'Jest'
	}),
	s({
		slug: 'junit',
		color: 'blue',
		description:"",
		logo: Assets.Junit,
		name: 'Junit'
	}),
	s({
		slug: 'linux',
		color: 'grey',
		description:"",
		logo: Assets.Linux,
		name: 'Linux'
	}),
	
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
