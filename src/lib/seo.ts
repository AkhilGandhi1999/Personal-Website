// Search and social-sharing text for each page (part B). Wording comes from the résumé.

/** Where the site lives. Canonical and social links are built from this plus the page path. */
export const SITE_ORIGIN = 'https://akhilgandhi1999.github.io';
export const SITE_NAME = 'Akhil Gandhi';

export const DESCRIPTIONS = {
	home: 'Akhil Gandhi, Site Reliability Engineer: production Kubernetes (EKS), GitOps delivery, observability, and 24/7 incident response, with automation in Python and Terraform. CKA, Terraform, and Google Cloud certified.',
	expertise:
		'What Akhil Gandhi does as a Site Reliability Engineer: Kubernetes platforms, release engineering, incident response, observability, security and cost, and AI-assisted operations, with the tools and certifications behind each.',
	experience:
		'Experience of Akhil Gandhi: Site Reliability Engineer II at Pinterest, Systems Engineer I at Charter Communications, and earlier roles, plus education at CU Boulder and PICT.',
	projects:
		'Projects by Akhil Gandhi: a Kubernetes-hosted price tracker with Prometheus and Grafana, an M.S. capstone in Go and Kafka, a budget trip planner, and an Android app.',
	resume: 'Résumé of Akhil Gandhi, Site Reliability Engineer. View or download the PDF.'
};

/** Description for a tool page, e.g. /skills/kubernetes. */
export const toolDescription = (name: string, summary?: string) =>
	summary
		? `How Akhil Gandhi uses ${name} — ${summary.charAt(0).toLowerCase()}${summary.slice(1)}`
		: `Where Akhil Gandhi has used ${name}.`;
