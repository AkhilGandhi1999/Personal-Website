<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import ToolFilter from '$lib/components/ToolFilter/ToolFilter.svelte';
	import { experienceTools, toolsForExperience } from '$lib/expertise';
	import { EXPERIENCES } from '$lib/params';
	import EDUCATION from '$lib/education.params';

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

	<section class="education" aria-labelledby="education-title">
		<h2 id="education-title" class="education-title">Education</h2>
		<ul class="education-list">
			{#each EDUCATION as e}
				<li>
					<Card color={e.color} tiltDegree={3}>
						<div class="education-item">
							<img class="education-logo" class:round={e.round} src={getAssetURL(e.logo)} alt="" />
							<div>
								<div class="education-school">{e.school}</div>
								<div class="education-degree">{e.degree} · GPA {e.gpa}</div>
								<div class="education-period">{e.period}</div>
							</div>
						</div>
					</Card>
				</li>
			{/each}
		</ul>
	</section>
</CommonPage>

<style lang="scss">
	.experiences {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}

	.education-title {
		font-size: 1.5em;
		font-weight: 600;
		margin-bottom: 12px;
	}

	.education-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		@media (max-width: 800px) {
			grid-template-columns: 1fr;
		}
	}

	.education-list > li {
		display: flex;
		flex-direction: column;

		& > :global(.card) {
			flex: 1;
		}
	}

	.education-item {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.education-logo {
		width: 52px;
		height: 52px;
		object-fit: contain;
		flex-shrink: 0;

		&.round {
			border-radius: 50%;
		}
	}

	.education-school {
		font-weight: 600;
		font-family: var(--title-f);
	}

	.education-degree {
		color: var(--secondary-text);
		margin-top: 4px;
	}

	.education-period {
		color: var(--accent-text);
		font-size: 0.9em;
		margin-top: 4px;
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
