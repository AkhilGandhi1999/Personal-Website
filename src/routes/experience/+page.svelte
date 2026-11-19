<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import ToolFilter from '$lib/components/ToolFilter/ToolFilter.svelte';
	import { experienceTools, toolsForExperience } from '$lib/expertise';
	import { EXPERIENCES } from '$lib/params';

	const { items, title } = EXPERIENCES;
	const tools = experienceTools();

	let selected: string | undefined;

	const uses = (slug: string) =>
		!selected || toolsForExperience(slug).some((s) => s.slug === selected);
	$: matching = items.filter((job) => selected && uses(job.slug)).length;
</script>

<CommonPage {title}>
	<ToolFilter {tools} bind:selected {matching} noun="role" />

	<div class="experiences">
		{#each items as job (job.slug)}
			<div class="experience-wrap" class:faded={selected && !uses(job.slug)}>
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
</style>
