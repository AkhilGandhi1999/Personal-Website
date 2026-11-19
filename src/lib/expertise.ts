// Data for the Expertise page (/skills): practice areas, the toolbox, certifications,
// and helpers that connect them to the résumé bullets in experiences/projects.
// Everything here comes from Akhil_Gandhi_Resume_Immigration.docx.

import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import type { Bullet, PracticeId } from './types';

// ---------------------------------------------------------------------------
// Practice areas ("What I do")
// ---------------------------------------------------------------------------

export interface Practice {
	id: PracticeId;
	name: string;
	summary: string;
	/** Key tools, taken from the summary/bullets. Skill slugs become links; anything else is plain text. */
	tools: Array<string>;
}

export const PRACTICES: Array<Practice> = [
	{
		id: 'k8s-platform',
		name: 'Kubernetes & platform',
		summary:
			'10+ multi-AZ EKS clusters held to a 99.99% availability target; Istio service mesh; reusable Terraform modules.',
		tools: ['kubernetes', 'istio', 'terraform', 'helm', 'aws']
	},
	{
		id: 'release',
		name: 'Release engineering',
		summary:
			'GitOps releases on ArgoCD and Argo Rollouts with blue-green and canary: biweekly zero-downtime, sub-30-second rollbacks.',
		tools: ['argocd', 'kubernetes', 'helm', 'datadog', 'github-actions']
	},
	{
		id: 'incident',
		name: 'Incident response',
		summary:
			'P0/P1 incident lead in a 24/7 on-call rotation; runbooks and an incident-command playbook that cut MTTR 30%.',
		tools: ['BigPanda']
	},
	{
		id: 'observability',
		name: 'Observability',
		summary:
			'Datadog, Prometheus, Grafana and Splunk; automated alerting; MCP-connected observability workflows.',
		tools: ['datadog', 'prometheus', 'grafana', 'splunk']
	},
	{
		id: 'security-cost',
		name: 'Security & cost',
		summary:
			'CVE remediation platform across ~30 AWS accounts; FinOps tagging enforcement that delivered 15% monthly savings.',
		tools: ['aws', 'django', 'python']
	},
	{
		id: 'ai-ops',
		name: 'AI in operations',
		summary:
			'Agentic CLI as incident scribe, MCP servers for observability, AI-assisted cost analysis.',
		tools: ['MCP servers', 'Agentic CLI', 'datadog', 'aws']
	}
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

export interface Certification {
	name: string;
	short: string;
	issued: string;
	expires?: string;
	url: string;
	/** Skill slug this certification backs up. */
	skill: string;
}

export const CERTIFICATIONS: Array<Certification> = [
	{
		name: 'HashiCorp Certified: Terraform Associate',
		short: 'Terraform Associate',
		issued: 'April 2026',
		url: 'https://www.credly.com/badges/d242d24a-65dc-4d53-9c0a-e52e7c8a6d47/public_url',
		skill: 'terraform'
	},
	{
		name: 'Google Cloud Associate Cloud Engineer',
		short: 'GCP ACE',
		issued: 'March 2026',
		url: 'https://www.credly.com/badges/3f2113fb-0aa9-4366-a59b-e9c297437e18/public_url',
		skill: 'gcp'
	},
	{
		name: 'CKA: Certified Kubernetes Administrator',
		short: 'CKA',
		issued: 'April 2025',
		url: 'https://www.credly.com/badges/09712c2e-0c12-44cb-ae34-50436649afd9/public_url',
		skill: 'kubernetes'
	},
	{
		name: 'AWS Certified Developer – Associate',
		short: 'AWS Developer',
		issued: 'September 2023',
		expires: 'September 2026',
		url: 'https://www.credly.com/badges/71e873a6-ecf5-4b55-b1af-637e9d685199/public_url',
		skill: 'aws'
	}
];

export const certsFor = (skill: string) => CERTIFICATIONS.filter((c) => c.skill === skill);

// ---------------------------------------------------------------------------
// Toolbox: the résumé's Skills section, in its groups and order.
// `skill` links the item to its /skills/<slug> page; items without one are plain text.
// ---------------------------------------------------------------------------

export interface ToolboxItem {
	label: string;
	skill?: string;
	note?: string;
	/** Image in static/images/ for items without a skill page (generic glyph where no official logo exists). */
	logo?: string;
}

export interface ToolboxGroup {
	name: string;
	items: Array<ToolboxItem>;
}

export const TOOLBOX: Array<ToolboxGroup> = [
	{
		name: 'Kubernetes & Delivery',
		items: [
			{ label: 'Kubernetes', skill: 'kubernetes', note: 'EKS' },
			{ label: 'Helm', skill: 'helm' },
			{ label: 'ArgoCD', skill: 'argocd' },
			{ label: 'Istio', skill: 'istio' },
			{ label: 'Docker', skill: 'docker' },
			{ label: 'GitHub Actions', skill: 'github-actions' },
			{ label: 'Jenkins', skill: 'jenkins' },
			{ label: 'Ansible', skill: 'ansible' },
			{ label: 'Packer', skill: 'packer' }
		]
	},
	{
		name: 'Cloud & Infrastructure',
		items: [
			{
				label: 'AWS',
				skill: 'aws',
				note: 'EKS, EC2, S3, Lambda, IAM, VPC, DynamoDB, API Gateway'
			},
			{ label: 'GCP', skill: 'gcp' },
			{ label: 'Terraform', skill: 'terraform' },
			{ label: 'Linux', skill: 'linux', note: 'RHEL, Ubuntu, Fedora' }
		]
	},
	{
		name: 'Observability',
		items: [
			{ label: 'Prometheus', skill: 'prometheus' },
			{ label: 'Grafana', skill: 'grafana' },
			{ label: 'Datadog', skill: 'datadog' },
			{ label: 'Splunk', skill: 'splunk' },
			{ label: 'BigPanda', note: 'AIOps event correlation', logo: 'glyph-alert.svg' }
		]
	},
	{
		name: 'Languages & Frameworks',
		items: [
			{ label: 'Python', skill: 'python' },
			{ label: 'Django', skill: 'django' },
			{ label: 'boto3', note: 'AWS SDK for Python', logo: 'glyph-sdk.svg' },
			{ label: 'Go', skill: 'go' },
			{ label: 'Bash', skill: 'bash' },
			{ label: 'SQL', logo: 'glyph-sql.svg' },
			{ label: 'JavaScript / TypeScript', skill: 'ts' }
		]
	},
	{
		name: 'AI Tooling',
		items: [
			{ label: 'MCP servers', note: 'Datadog, AWS, Webex', logo: 'glyph-mcp.svg' },
			{ label: 'Agentic CLI workflows', note: 'Kiro', logo: 'glyph-terminal.svg' }
		]
	},
	{
		name: 'Data & Messaging',
		items: [
			{ label: 'Kafka', skill: 'kafka' },
			{ label: 'Redis', skill: 'redis' },
			{ label: 'PostgreSQL', skill: 'postgres' },
			{ label: 'MySQL', skill: 'mysql' },
			{ label: 'gRPC', logo: 'grpc.svg' },
			{ label: 'REST', logo: 'glyph-api.svg' }
		]
	}
];

// ---------------------------------------------------------------------------
// Evidence: every tagged résumé bullet, with where it came from and which tools it mentions.
// ---------------------------------------------------------------------------

/** How each tool is recognised in bullet text (case-sensitive, so "Go" ≠ "go"). */
const TOOL_PATTERNS: Record<string, RegExp> = {
	kubernetes: /\bKubernetes\b|\bEKS\b/,
	helm: /\bHelm\b/,
	argocd: /\bArgoCD\b|\bArgo Rollouts\b/,
	istio: /\bIstio\b/,
	docker: /\bDocker/,
	'github-actions': /\bGitHub Actions\b/,
	jenkins: /\bJenkins\b/,
	ansible: /\bAnsible\b/,
	packer: /\bPacker\b/,
	aws: /\bAWS\b|\bS3\b|\bEKS\b/,
	gcp: /\bGCP\b|\bGoogle Cloud\b/,
	terraform: /\bTerraform\b/,
	linux: /\bLinux\b/,
	prometheus: /\bPrometheus\b/,
	grafana: /\bGrafana\b/,
	datadog: /\bDatadog\b/,
	splunk: /\bSplunk\b/,
	python: /\bPython\b/,
	django: /\bDjango\b/,
	go: /\bGo\b/,
	bash: /\bBash\b|\bshell\b/,
	ts: /\bTypeScript\b/,
	kafka: /\bKafka\b/,
	redis: /\bRedis\b/,
	postgres: /\bPostgreSQL\b/,
	mysql: /\bMySQL\b/,
	java: /\bJava\b/,
	vuejs: /\bVue\b/,
	quasar: /\bQuasar\b/,
	jest: /\bJest\b/
};

export interface Evidence extends Bullet {
	/** Short source label, e.g. "Charter · Intern". */
	source: string;
	/** Longer label, e.g. "Site Reliability Engineer @ Charter Communications". */
	sourceLong: string;
	/** Link (without base path) to the exact Experience or Project card. */
	href: string;
	/** All tool slugs: matched from the text plus any listed on the bullet. */
	toolSlugs: Array<string>;
}

const toolsIn = (b: Bullet) => {
	const found = Object.keys(TOOL_PATTERNS).filter((slug) => TOOL_PATTERNS[slug].test(b.text));
	return [...new Set([...found, ...(b.tools ?? [])])];
};

export const EVIDENCE: Array<Evidence> = [
	...MY_EXPERIENCES.flatMap((e) =>
		(e.bullets ?? []).map((b) => ({
			...b,
			source: e.short ?? e.company,
			sourceLong: `${e.name} @ ${e.company}`,
			href: `/experience#${e.slug}`,
			toolSlugs: toolsIn(b)
		}))
	),
	...MY_PROJECTS.flatMap((p) =>
		(p.bullets ?? []).map((b) => ({
			...b,
			source: p.short ?? p.name,
			sourceLong: `${p.name} (${p.type})`,
			href: `/projects#${p.slug}`,
			toolSlugs: toolsIn(b)
		}))
	)
];

export const evidenceForPractice = (id: PracticeId) =>
	EVIDENCE.filter((e) => e.practices.includes(id));

export const evidenceForSkill = (slug: string) => EVIDENCE.filter((e) => e.toolSlugs.includes(slug));

/** Unique "used at" labels for a skill, in résumé order. */
export const usedAt = (slug: string) => {
	const seen = new Map<string, string>();
	for (const e of evidenceForSkill(slug)) if (!seen.has(e.source)) seen.set(e.source, e.href);
	return [...seen].map(([source, href]) => ({ source, href }));
};

/** Practice areas a tool belongs to: listed as a key tool, or mentioned in one of the area's bullets. */
export const practicesForSkill = (slug: string) => {
	const fromBullets = new Set(evidenceForSkill(slug).flatMap((e) => e.practices));
	return PRACTICES.filter((p) => p.tools.includes(slug) || fromBullets.has(p.id));
};

/** Tools that appear in the same bullets as this one, most frequent first. */
export const relatedSkills = (slug: string, limit = 6) => {
	const counts = new Map<string, number>();
	evidenceForSkill(slug).forEach((e) =>
		e.toolSlugs
			.filter((s) => s !== slug)
			.forEach((s) => counts.set(s, (counts.get(s) ?? 0) + 1))
	);
	return [...counts.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, limit)
		.map(([s]) => s);
};

/** The toolbox entry (note, group) for a skill, if it is on the résumé. */
export const toolboxEntry = (slug: string) => {
	for (const group of TOOLBOX) {
		const item = group.items.find((i) => i.skill === slug);
		if (item) return { group: group.name, item };
	}
	return undefined;
};

/**
 * One-line "what I did with it" summary shown at the top of a tool page.
 * Written from résumé bullets only; tools with no bullet get no line.
 */
export const TOOL_SUMMARIES: Record<string, string> = {
	kubernetes:
		'Run 10+ multi-AZ EKS clusters for customer-facing apps, with zero-downtime node-group rotations and EKS upgrades.',
	aws: 'Day-to-day platform: EKS, cross-account IAM across ~30 accounts, S3 lifecycle tiering, SCPs and AWS Config for tag enforcement.',
	terraform:
		'Reusable modules for NLB provisioning and Istio installation, with input validation and versioning standards.',
	argocd: 'GitOps release operations on ArgoCD and Argo Rollouts, with blue-green and canary strategies.',
	helm: 'Helm charts for Kubernetes deployments, plus Helm provider wiring in the platform EKS module.',
	istio:
		'Migrated selected production apps from Nginx to Istio: Gateway/VirtualService routing, staged mTLS, resilience patterns.',
	docker: 'Dockerized the Amazon Price Tracker, with Helm charts and GitHub Actions CI/CD.',
	'github-actions': 'CI/CD with image security scans for the Amazon Price Tracker.',
	datadog:
		'Analysis gates for canary releases, automated alert configuration, and MCP-connected observability audits.',
	prometheus: 'Metrics instrumentation for the Amazon Price Tracker.',
	grafana: 'Dashboards for the Amazon Price Tracker.',
	python:
		"Automation and services: Datadog alert configuration, the Django CVE platform, the Price Tracker's Flask service.",
	django:
		'Built the CVE remediation platform that maps findings to owning teams across ~30 AWS accounts.',
	bash: 'Shell scripts that automate Datadog alert configuration in CI/CD pipelines.',
	kafka: 'Consolidated Kafka topics while containerizing services at NICE.',
	redis: 'Caching layer for the Amazon Price Tracker.'
};
