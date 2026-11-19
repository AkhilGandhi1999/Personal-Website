<script lang="ts">
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import MY_EXPERIENCES from '$lib/experiences.params';
	import MY_PROJECTS from '$lib/projects.params';
	import MY_SKILLS from '$lib/skills.params';

	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import {
		TOOL_SUMMARIES,
		certsFor,
		evidenceForSkill,
		practicesForSkill,
		relatedSkills,
		toolboxEntry
	} from '$lib/expertise';
	import { SKILLS } from '$lib/params';
	import type { Skill } from '$lib/types';

	export let data: { skill?: Skill };

	const { title } = SKILLS;

	$: skill = data.skill;
	$: slug = skill?.slug ?? '';
	$: evidence = slug ? evidenceForSkill(slug) : [];
	$: certs = slug ? certsFor(slug) : [];
	$: practices = slug ? practicesForSkill(slug) : [];
	$: related = slug
		? relatedSkills(slug)
				.map((s) => MY_SKILLS.find((it) => it.slug === s))
				.filter((s): s is Skill => !!s)
		: [];
	$: entry = slug ? toolboxEntry(slug) : undefined;
	$: summary = slug ? TOOL_SUMMARIES[slug] : undefined;

	// Fallback for skills not yet covered by résumé bullets: the jobs/projects tagged with it.
	type Tagged = { display: string; slug: string; img: string; type: 'projects' | 'experience' };
	$: tagged = !slug
		? []
		: ([
				...MY_PROJECTS.filter((p) => p.skills.some((t) => t.slug === slug)).map((p) => ({
					img: getAssetURL(p.logo),
					display: `${p.name} (${p.type})`,
					slug: p.slug,
					type: 'projects'
				})),
				...MY_EXPERIENCES.filter((e) => e.skills.some((t) => t.slug === slug)).map((e) => ({
					img: getAssetURL(e.logo),
					display: `${e.name} @ ${e.company}`,
					slug: e.slug,
					type: 'experience'
				}))
		  ] as Array<Tagged>);

	$: computedTitle = skill ? `${skill.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden">
	{#if skill === undefined}
		<div>Could not load skill data.</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<div
				style={`--bg-img:url(${getAssetURL(skill.logo)})`}
				class="flex flex-row w-[100%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] items-center skill-cover px-4 md:px-10"
			>
				<MainTitle>{skill.name}</MainTitle>
			</div>

			<div class="skill-body px-4 md:px-10 py-6 w-full">
				{#if summary}
					<p class="skill-summary">{summary}</p>
				{/if}

				{#if entry || practices.length}
					<div class="skill-meta">
						{#if entry}
							<p>
								<span class="meta-label">Toolbox</span>
								<a href={`${base}/skills#toolbox-title`}>{entry.group}</a>
								{#if entry.item.note}<span class="meta-note">· {entry.item.note}</span>{/if}
							</p>
						{/if}
						{#if practices.length}
							<p>
								<span class="meta-label">Part of</span>
								{#each practices as p, i}
									<a href={`${base}/skills#${p.id}`}>{p.name}</a>{i < practices.length - 1
										? ', '
										: ''}
								{/each}
							</p>
						{/if}
					</div>
				{/if}

				{#if certs.length}
					<div class="cert-list">
						{#each certs as cert}
							<a class="cert-card" href={cert.url} target="_blank" rel="noreferrer">
								<span class="cert-check" aria-hidden="true">✓</span>
								<span>
									<strong>{cert.name}</strong>
									<span class="cert-date"
										>Issued {cert.issued}{cert.expires ? ` · valid until ${cert.expires}` : ''} · verify
										on Credly ↗</span
									>
								</span>
							</a>
						{/each}
					</div>
				{/if}

				{#if evidence.length}
					<h2 class="skill-section-title">Where I've used it</h2>
					<ul class="evidence-list">
						{#each evidence as ex}
							<li>
								<a
									class="evidence-source"
									href={`${base}${ex.href}`}
									title={ex.sourceLong}>{ex.source}</a
								>
								{ex.text}
							</li>
						{/each}
					</ul>
				{:else if entry}
					<p class="text-[var(--tertiary-text)]">
						On my résumé's skills list. No résumé bullet mentions it yet.
					</p>
				{:else if tagged.length}
					<p class="text-[var(--tertiary-text)] mb-3">Projects and roles tagged with {skill.name}:</p>
					<div class="flex flex-row gap-2 flex-wrap">
						{#each tagged as item}
							<div
								class="border rounded border-[color:var(--border)] px-2.5 py-1 text-[var(--tertiary-text)]"
							>
								<a class="flex flex-row items-center" href={`${base}/${item.type}#${item.slug}`}>
									<CardLogo src={item.img} alt="" radius={'0px'} size={17} classes="mr-2" />
									<span class="text-[0.9em]">{item.display}</span>
								</a>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-[var(--tertiary-text)]">
						Not part of my current toolbox. See <a class="underline" href={`${base}/skills`}
							>Expertise</a
						> for what I work with today.
					</p>
				{/if}

				{#if related.length}
					<div class="mt-8 mb-4"><CardDivider /></div>
					<h2 class="skill-section-title">Used together with</h2>
					<ul class="related-list">
						{#each related as r}
							<li>
								<a class="related-chip" href={`${base}/skills/${r.slug}`}>
									<img src={getAssetURL(r.logo)} alt="" />
									{r.name}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.skill-cover {
		background: linear-gradient(90deg, var(--main) 0%, var(--main) 55%, var(--main-60) 130%),
			no-repeat 110% 45% / 50% var(--bg-img);

		border-block-end: 1px solid var(--border);
	}

	.skill-body {
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.skill-summary {
		font-size: 1.15em;
		line-height: 1.6;
		color: var(--secondary-text);
		max-width: 75ch;
	}

	.skill-meta {
		display: flex;
		flex-direction: column;
		gap: 6px;
		color: var(--tertiary-text);
		font-weight: 300;

		& a {
			color: var(--secondary-text);
			font-weight: 500;
		}
	}

	.meta-label {
		display: inline-block;
		min-width: 80px;
		font-size: 0.8em;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		color: var(--accent-text);
	}

	.meta-note {
		margin-left: 4px;
	}

	.cert-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.cert-card {
		display: flex;
		align-items: center;
		gap: 14px;
		border: 1px solid #1f6f43;
		border-radius: 12px;
		padding: 12px 16px;
		color: var(--main-text);
		text-decoration: none;

		&:hover {
			background-color: var(--main-hover);
		}

		& strong {
			display: block;
			font-weight: 600;
		}
	}

	.cert-check {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #1f6f43;
		color: #ffffff;
		font-weight: 700;
		flex-shrink: 0;
	}

	.cert-date {
		font-size: 0.85em;
		color: var(--tertiary-text);
		font-weight: 300;
	}

	.skill-section-title {
		font-size: 1.2em;
		font-weight: 600;
	}

	.evidence-list {
		margin: 0;
		padding-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		color: var(--tertiary-text);
		font-weight: 300;
		line-height: 1.6;
	}

	.evidence-source {
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

	.related-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.related-chip {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 3px 12px 3px 6px;
		font-size: 0.9em;
		color: var(--secondary-text);
		text-decoration: none;

		& img {
			width: 18px;
			height: 18px;
			object-fit: contain;
		}

		&:hover {
			background-color: var(--main-hover);
		}
	}
</style>
