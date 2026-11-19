<script lang="ts">
	import { onMount } from 'svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { experienceTools, toolsForExperience } from '$lib/expertise';
	import { EXPERIENCES } from '$lib/params';

	const { items, title } = EXPERIENCES;
	const tools = experienceTools();

	// The picked tool (one at a time). Kept in ?tool= so a filtered view can be shared.
	let selected: string | undefined;

	const pick = (slug: string) => {
		selected = selected === slug ? undefined : slug;
		const url = new URL(window.location.href);
		if (selected) url.searchParams.set('tool', selected);
		else url.searchParams.delete('tool');
		window.history.replaceState(window.history.state, '', url);
	};

	onMount(() => {
		const fromUrl = new URLSearchParams(window.location.search).get('tool');
		if (fromUrl && tools.some((t) => t.skill.slug === fromUrl)) selected = fromUrl;
	});

	$: selectedName = tools.find((t) => t.skill.slug === selected)?.skill.name;
	$: matching = selected
		? items.filter((job) => toolsForExperience(job.slug).some((s) => s.slug === selected)).length
		: items.length;
</script>

<CommonPage {title}>
	<div class="tool-filter" role="group" aria-label="Highlight work by tool">
		<p class="tool-filter-lead">
			{#if selectedName}
				Showing where I used <strong>{selectedName}</strong>
				({matching} role{matching === 1 ? '' : 's'}).
				<button class="tool-filter-clear" on:click={() => pick(selected ?? '')}>Clear</button>
			{:else}
				Pick a tool to see where I used it.
			{/if}
		</p>
		<ul class="tool-filter-list">
			{#each tools as { skill, count }}
				<li>
					<button
						class="tool-chip"
						class:active={selected === skill.slug}
						aria-pressed={selected === skill.slug}
						on:click={() => pick(skill.slug)}
					>
						<img src={getAssetURL(skill.logo)} alt="" />
						{skill.name}
						<span class="tool-count">{count}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<div class="experiences">
		{#each items as job (job.slug)}
			{@const hit = !selected || toolsForExperience(job.slug).some((s) => s.slug === selected)}
			<div class="experience-wrap" class:faded={!hit}>
				<ExperienceCard experience={job} highlight={selected} />
			</div>
		{/each}
	</div>
</CommonPage>

<style lang="scss">
	.experiences {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}

	.experience-wrap {
		display: flex;
		flex-direction: column;
		transition: opacity 0.2s;

		&.faded {
			opacity: 0.35;
		}
	}

	.tool-filter-lead {
		color: var(--tertiary-text);
		font-weight: 300;
		margin-bottom: 10px;
	}

	.tool-filter-clear {
		margin-left: 6px;
		text-decoration: underline;
		color: var(--secondary-text);
	}

	.tool-filter-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tool-chip {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 3px 10px 3px 6px;
		font-size: 0.9em;
		color: var(--secondary-text);
		background: transparent;
		cursor: pointer;

		& img {
			width: 18px;
			height: 18px;
			object-fit: contain;
		}

		&:hover {
			background-color: var(--main-hover);
		}

		&.active {
			border-color: var(--accent-text);
			color: var(--main-text);
			background-color: var(--main-hover);
		}
	}

	.tool-count {
		font-size: 0.8em;
		color: var(--tertiary-text);
	}
</style>
