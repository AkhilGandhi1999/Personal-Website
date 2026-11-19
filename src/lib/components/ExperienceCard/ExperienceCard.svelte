<script lang="ts">
	import type { Experience } from '$lib/types';
	import { countMonths, getMonthName } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { toolsForExperience, toolsIn } from '$lib/expertise';

	export let experience: Experience;
	/** Tool picked in the filter row; matching bullets stand out, the rest fade. */
	export let highlight: string | undefined = undefined;

	const tools = toolsForExperience(experience.slug);

	const months = countMonths(experience.period.from, experience.period.to);
	const from = `${getMonthName(
		experience.period.from.getMonth()
	)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to} · ${months} month${months > 1 ? 's' : ''}`;
</script>

<Card id={experience.slug} color={experience.color} margin="0px 0px 20px 0px" tiltDegree={2}>
	<div class="experience">
		<CardLogo src={getAssetURL(experience.logo)} alt={experience.company} size={75} />
		<div class="experience-data">
			<h3 class="experience-title">
				<CardTitle title={experience.name} />
				<div class="experience-title-divider" />
				<Chip label={experience.contract} size="0.75em" />
			</h3>
			<span class="experience-company-name">{experience.company}</span>
			<div class="experience-period">{period}</div>
			<div class="experience-location">{experience.location}</div>
			{#if experience.bullets?.length}
				<ul class="experience-bullets">
					{#each experience.bullets as bullet}
						<li class:dim={highlight && !toolsIn(bullet).includes(highlight)}>{bullet.text}</li>
					{/each}
				</ul>
			{/if}
			<div class="experience-skills">
				{#each tools as skill}
					<ChipIcon logo={getAssetURL(skill.logo)} name={skill.name} />
				{/each}
			</div>
		</div>
	</div>
</Card>

<style lang="scss">
	.experience {
		display: flex;
		align-items: flex-start;

		&-data {
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		}

		@media (max-width: 800px) {
			flex-direction: column;

			&-data {
				margin-left: 0px;
			}
		}

		&-title {
			margin: 0;
			display: flex;
			align-items: center;

			&-divider {
				width: 10px;
			}

			@media (max-width: 800px) {
				& {
					align-items: center;
					margin: 5px 0px;
				}
			}
		}

		&-company-name {
			margin-bottom: 5px;
			font-family: var(--title-f);
			font-size: 1.15em;
		}

		&-period,
		&-location {
			color: var(--accent-text);
			font-size: 0.9em;
			margin-bottom: 5px;
		}

		&-location {
			margin-bottom: 15px;
		}

		&-bullets {
			margin: 0 0 20px;
			padding-left: 18px;
			list-style: disc;
			display: flex;
			flex-direction: column;
			gap: 8px;
			line-height: 1.55;
			max-width: 95ch;
		}

		&-bullets li {
			transition: opacity 0.2s;
		}

		&-bullets li.dim {
			opacity: 0.3;
		}

		&-skills {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
