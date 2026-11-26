// Search and social-sharing text for each page (part B). Wording comes from the résumé.

/** Where the site lives. Canonical and social links are built from this plus the page path. */
export const SITE_ORIGIN = 'https://akhilgandhi1999.github.io';
export const SITE_NAME = 'Akhil Gandhi';

/** Share image (static/og-image.png, made by scripts/make-og-image.py). */
export const OG_IMAGE = {
	file: 'og-image.png',
	width: 1200,
	height: 630,
	alt: 'Akhil Gandhi, Site Reliability Engineer: kubectl describe card with photo'
};

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

/**
 * Structured data for Home (schema.org, read by Google): who this site is about.
 * Only facts already public on the site. Email, location and employer are left out on purpose.
 */
export const personJsonLd = (base: string, sameAs: string[], certs: { name: string; url: string }[]) => {
	const site = `${SITE_ORIGIN}${base}/`;
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${site}#website`,
				url: site,
				name: SITE_NAME,
				about: { '@id': `${site}#person` }
			},
			{
				'@type': 'Person',
				'@id': `${site}#person`,
				name: 'Akhil Gandhi',
				jobTitle: 'Site Reliability Engineer',
				description: DESCRIPTIONS.home,
				url: site,
				image: `${site}images/profile1.jpeg`,
				sameAs,
				alumniOf: [
					{ '@type': 'CollegeOrUniversity', name: 'University of Colorado Boulder' },
					{ '@type': 'CollegeOrUniversity', name: 'Pune Institute of Computer Technology' }
				],
				knowsAbout: [
					'Site Reliability Engineering',
					'Kubernetes',
					'Amazon EKS',
					'AWS',
					'Terraform',
					'ArgoCD',
					'Istio',
					'Observability',
					'Incident response',
					'Python'
				],
				hasCredential: certs.map((c) => ({
					'@type': 'EducationalOccupationalCredential',
					credentialCategory: 'certification',
					name: c.name,
					url: c.url
				}))
			}
		]
	};
};

/** The JSON-LD as a <script> tag, with "<" escaped so text can never close the tag early. */
export const jsonLdScript = (data: unknown) =>
	`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
