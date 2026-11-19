import Assets from './data/assets';
import type { Skill } from './types';

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
		slug: 'django',
		color: 'green',
		description:"",
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'kafka',
		color: 'blue',
		description:"",
		logo: Assets.Kafka,
		name: 'Kafka'
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
		slug: 'mysql',
		color: 'blue',
		description:"",
		logo: Assets.MySQL,
		name: 'MySQL'
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
		slug: 'jest',
		color: 'grey',
		description:"",
		logo: Assets.Jest,
		name: 'Jest'
	}),
	s({
		slug: 'linux',
		color: 'grey',
		description:"",
		logo: Assets.Linux,
		name: 'Linux'
	}),
	s({
		slug: 'terraform',
		color: 'purple',
		description: '',
		logo: Assets.Terraform,
		name: 'Terraform'
	}),
	s({
		slug: 'argocd',
		color: 'orange',
		description: '',
		logo: Assets.ArgoCD,
		name: 'ArgoCD'
	}),
	s({
		slug: 'helm',
		color: 'blue',
		description: '',
		logo: Assets.Helm,
		name: 'Helm'
	}),
	s({
		slug: 'istio',
		color: 'blue',
		description: '',
		logo: Assets.Istio,
		name: 'Istio'
	}),
	s({
		slug: 'prometheus',
		color: 'orange',
		description: '',
		logo: Assets.Prometheus,
		name: 'Prometheus'
	}),
	s({
		slug: 'grafana',
		color: 'orange',
		description: '',
		logo: Assets.Grafana,
		name: 'Grafana'
	}),
	s({
		slug: 'splunk',
		color: 'green',
		description: '',
		logo: Assets.Splunk,
		name: 'Splunk'
	}),
	s({
		slug: 'github-actions',
		color: 'blue',
		description: '',
		logo: Assets.GitHubActions,
		name: 'GitHub Actions'
	}),
	s({
		slug: 'packer',
		color: 'blue',
		description: '',
		logo: Assets.Packer,
		name: 'Packer'
	}),
	s({
		slug: 'bash',
		color: 'grey',
		description: '',
		logo: Assets.Bash,
		name: 'Bash'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));

// Like getSkills, but keeps the order the slugs are given in (used for the Home carousel).
export const pickSkills = (...slugs: Array<string>): Array<Skill> =>
	slugs.flatMap((slug) => MY_SKILLS.filter((it) => it.slug === slug));
