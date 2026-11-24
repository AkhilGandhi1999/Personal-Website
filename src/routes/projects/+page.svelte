<script lang="ts">
	import { DESCRIPTIONS } from '$lib/seo';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import ToolFilter from '$lib/components/ToolFilter/ToolFilter.svelte';
	import { projectFilterTools, projectTools } from '$lib/expertise';
	import { PROJECTS } from '$lib/params';

	const { items, title } = PROJECTS;
	const tools = projectFilterTools(items);

	let selected: string | undefined;

	const uses = (p: (typeof items)[number]) =>
		!selected || projectTools(p).some((s) => s.slug === selected);
	$: matching = items.filter((p) => selected && uses(p)).length;
</script>

<CommonPage {title} description={DESCRIPTIONS.projects}>
	<ToolFilter {tools} bind:selected {matching} noun="project" />

	<div class="projects-list mt-5">
		{#each items as project (project.slug)}
			<div class="project-wrap" class:faded={selected && !uses(project)}>
				<ProjectCard {project} highlight={selected} />
			</div>
		{/each}
	</div>
</CommonPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.project-wrap {
		display: flex;
		flex-direction: column;
		transition: opacity 0.2s;

		& > :global(.card) {
			flex: 1;
		}

		&.faded {
			opacity: 0.35;
		}
	}
</style>
