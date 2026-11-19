<script lang="ts">
	import { base } from '$app/paths';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import {
		PRACTICES,
		TOOLBOX,
		certsFor,
		evidenceForPractice,
		usedAt
	} from '$lib/expertise';
	import { SKILLS } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';

	const { title } = SKILLS;

	const logoFor = (slug?: string) => {
		const skill = slug ? MY_SKILLS.find((s) => s.slug === slug) : undefined;
		return skill ? getAssetURL(skill.logo) : undefined;
	};

	const findSkill = (slug: string) => MY_SKILLS.find((s) => s.slug === slug);
</script>

<CommonPage {title}>
	<section class="practices" aria-labelledby="practices-title">
		<h2 id="practices-title" class="section-title">What I do</h2>
		<div class="practice-grid">
			{#each PRACTICES as practice}
				{@const examples = evidenceForPractice(practice.id)}
				<article class="practice-card" id={practice.id}>
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
							<summary>{examples.length} example{examples.length > 1 ? 's' : ''} from my work</summary>
							<ul>
								{#each examples as ex}
									<li>
										<span class="example-source">{ex.source}</span>
										{ex.text}
									</li>
								{/each}
							</ul>
						</details>
					{/if}
				</article>
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
					<h3 class="toolbox-group-name">{group.name}</h3>
					<ul class="toolbox-items">
						{#each group.items as item}
							{@const logo = logoFor(item.skill)}
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
										<a class="toolbox-item-name" href={`${base}/skills/${item.skill}`}>{item.label}</a>
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
											<span class="used-chip">{place}</span>
										{/each}
									</p>
								{/if}
							</li>
						{/each}
					</ul>
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
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 18px 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
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
	}

	.section-title {
		font-size: 1.5em;
		font-weight: 600;
	}

	.section-lead {
		color: var(--tertiary-text);
		font-weight: 300;
		margin-bottom: 20px;
		max-width: 70ch;
	}

	.toolbox-groups {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;

		@media (max-width: 900px) {
			grid-template-columns: 1fr;
		}
	}

	.toolbox-group {
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 18px 20px;
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
		gap: 12px;
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
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 1px 9px;
		font-size: 0.95em;
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
