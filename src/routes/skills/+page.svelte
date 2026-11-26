<script lang="ts">
	import { DESCRIPTIONS } from '$lib/seo';
	import { base } from '$app/paths';
	import Card from '$lib/components/Card/Card.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { PRACTICES, TOOLBOX, certsFor, evidenceForPractice, usedAt } from '$lib/expertise';
	import { SKILLS } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';

	const { title } = SKILLS;

	const logoFor = (slug?: string) => {
		const skill = slug ? MY_SKILLS.find((s) => s.slug === slug) : undefined;
		return skill ? getAssetURL(skill.logo) : undefined;
	};

	const findSkill = (slug: string) => MY_SKILLS.find((s) => s.slug === slug);

	// Card glow colours, taken from each area's main tool logo.
	const PRACTICE_COLORS: Record<string, string> = {
		'k8s-platform': '#326CE5', // Kubernetes
		release: '#EF7B4D', // ArgoCD
		incident: '#E5484D', // alert red
		observability: '#632CA6', // Datadog
		'security-cost': '#FF9900', // AWS
		'ai-ops': '#8B5CF6' // AI tooling
	};
	const GROUP_COLORS: Record<string, string> = {
		'Kubernetes & Delivery': '#326CE5',
		'Cloud & Infrastructure': '#FF9900',
		Observability: '#632CA6',
		'Languages & Frameworks': '#3776AB', // Python
		'AI Tooling': '#8B5CF6',
		'Data & Messaging': '#DC382D' // Redis
	};
</script>

<CommonPage {title} description={DESCRIPTIONS.expertise}>
	<section class="practices" aria-labelledby="practices-title">
		<h2 id="practices-title" class="section-title">What I do</h2>
		<div class="practice-grid">
			{#each PRACTICES as practice}
				{@const examples = evidenceForPractice(practice.id)}
				<Card id={practice.id} color={PRACTICE_COLORS[practice.id]} tiltDegree={3}>
					<div class="practice-card">
						<h3 class="practice-name">{practice.name}</h3>
						<p class="practice-summary">{practice.summary}</p>
						{#if practice.tools.length}
							<ul class="practice-tools" aria-label="Main tools">
								{#each practice.tools as tool}
									{@const skill = findSkill(tool)}
									<li>
										{#if skill}
											<a class="tool-chip" href={`${base}/skills/${skill.slug}`}>
												<img src={getAssetURL(skill.logo)} alt="" />
												{skill.name}
											</a>
										{:else}
											<span class="tool-chip tool-chip-plain">{tool}</span>
										{/if}
									</li>
								{/each}
							</ul>
						{/if}
						{#if examples.length}
							<details class="practice-examples">
								<summary
									>{examples.length} example{examples.length > 1 ? 's' : ''} from my work</summary
								>
								<ul>
									{#each examples as ex}
										<li>
											<a class="example-source" href={`${base}${ex.href}`}>{ex.source}</a>
											{ex.text}
										</li>
									{/each}
								</ul>
							</details>
						{/if}
					</div>
				</Card>
			{/each}
		</div>
	</section>

	<section class="toolbox" aria-labelledby="toolbox-title">
		<h2 id="toolbox-title" class="section-title">Toolbox</h2>
		<p class="section-lead">
			The tools from my résumé, grouped the same way. Badges link to verified certifications; "used
			at" shows where each one appears in my work.
		</p>

		<div class="toolbox-groups">
			{#each TOOLBOX as group}
				<div class="toolbox-group">
					<Card color={GROUP_COLORS[group.name]} tiltDegree={3}>
						<h3 class="toolbox-group-name">{group.name}</h3>
						<ul class="toolbox-items">
							{#each group.items as item}
								{@const logo = item.logo ? `${base}/images/${item.logo}` : logoFor(item.skill)}
								{@const places = item.skill ? usedAt(item.skill) : []}
								{@const certs = item.skill ? certsFor(item.skill) : []}
								<li class="toolbox-item">
									<div class="toolbox-item-head">
										{#if logo}
											<img class="toolbox-item-logo" src={logo} alt="" />
										{:else}
											<span class="toolbox-item-logo toolbox-item-logo-empty" aria-hidden="true" />
										{/if}
										{#if item.skill}
											<a class="toolbox-item-name" href={`${base}/skills/${item.skill}`}
												>{item.label}</a
											>
										{:else}
											<span class="toolbox-item-name">{item.label}</span>
										{/if}
										{#each certs as cert}
											<a
												class="cert-badge"
												href={cert.url}
												target="_blank"
												rel="noreferrer"
												title={`${cert.name}, ${cert.issued} (verify on Credly)`}>✓ {cert.short}</a
											>
										{/each}
									</div>
									{#if item.note}
										<p class="toolbox-item-note">{item.note}</p>
									{/if}
									{#if places.length}
										<p class="toolbox-item-used">
											<span class="sr-only">Used at:</span>
											{#each places as place}
												<a class="used-chip" href={`${base}${place.href}`}>{place.source}</a>
											{/each}
										</p>
									{/if}
								</li>
							{/each}
						</ul>
					</Card>
				</div>
			{/each}
		</div>
	</section>
</CommonPage>

<style lang="scss">
	.practices {
		margin-bottom: 30px;
	}

	.practice-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 12px;

		@media (max-width: 1200px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 700px) {
			grid-template-columns: 1fr;
		}
	}

	.practice-card {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.practice-grid > :global(.card) {
		align-self: start;
	}

	.practice-name {
		font-size: 1.1em;
		font-weight: 600;
	}

	.practice-summary {
		color: var(--tertiary-text);
		font-weight: 300;
		line-height: 1.5;
	}

	.practice-tools {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.tool-chip {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 2px 10px 2px 6px;
		font-size: 0.85em;
		color: var(--secondary-text);
		text-decoration: none;

		& img {
			width: 16px;
			height: 16px;
			object-fit: contain;
		}

		&:hover {
			background-color: var(--main-hover);
		}
	}

	.tool-chip-plain {
		padding-left: 10px;

		&:hover {
			background-color: transparent;
		}
	}

	.practice-examples {
		font-size: 0.9em;

		& summary {
			cursor: pointer;
			color: var(--secondary-text);
			font-weight: 500;
		}

		& ul {
			margin: 10px 0 0;
			padding-left: 18px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			color: var(--tertiary-text);
			font-weight: 300;
			line-height: 1.5;
		}
	}

	.example-source {
		display: inline-block;
		font-size: 0.8em;
		font-weight: 500;
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 0 8px;
		margin-right: 6px;
		color: var(--secondary-text);
		text-decoration: none;

		&:hover {
			background-color: var(--main-hover);
		}
	}

	.section-title {
		color: var(--accent-green);
		font-size: 1.5em;
		font-weight: 600;
	}

	.section-lead {
		color: var(--tertiary-text);
		font-weight: 300;
		margin-bottom: 20px;
		max-width: 70ch;
	}

	/* Column layout so short groups stack under each other instead of leaving gaps. */
	.toolbox-groups {
		column-count: 3;
		column-gap: 20px;

		@media (max-width: 1200px) {
			column-count: 2;
		}
		@media (max-width: 700px) {
			column-count: 1;
		}
	}

	.toolbox-group {
		break-inside: avoid;
		display: inline-block;
		width: 100%;
		margin-bottom: 20px;

		& > :global(.card) {
			width: 100%;
		}
	}

	.toolbox-group-name {
		font-size: 1.05em;
		font-weight: 600;
		margin-bottom: 10px;
		color: var(--secondary-text);
	}

	.toolbox-items {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 9px;
	}

	.toolbox-item-head {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.toolbox-item-logo {
		width: 22px;
		height: 22px;
		object-fit: contain;
		border-radius: 4px;
		flex-shrink: 0;
	}

	.toolbox-item-logo-empty {
		display: inline-block;
		border: 1px dashed var(--border);
	}

	.toolbox-item-name {
		font-weight: 500;
		color: var(--main-text);
		text-decoration: none;
	}

	a.toolbox-item-name:hover {
		text-decoration: underline;
	}

	.toolbox-item-note,
	.toolbox-item-used {
		margin: 4px 0 0 30px;
		font-size: 0.85em;
		color: var(--tertiary-text);
		font-weight: 300;
	}

	.toolbox-item-used {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.used-chip {
		color: inherit;
		text-decoration: none;
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 1px 9px;
		font-size: 0.95em;

		&:hover {
			background-color: var(--main-hover);
		}
	}

	.cert-badge {
		font-size: 0.75em;
		font-weight: 600;
		padding: 2px 9px;
		border-radius: 999px;
		background: #1f6f43;
		color: #ffffff;
		text-decoration: none;
		letter-spacing: 0.5px;

		&:hover {
			background: #258553;
		}
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
</style>
