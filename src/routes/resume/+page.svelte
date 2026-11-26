<script lang="ts">
	import { DESCRIPTIONS } from '$lib/seo';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	import { base } from '$app/paths';
	import { RESUME } from '$lib/params';
	const { item, title } = RESUME;

	// `item` is a file name in static/ (see RESUME in $lib/params.ts).
	const resumeUrl = item ? `${base}/${item}` : '';
</script>

<CommonPage {title} description={DESCRIPTIONS.resume}>
	<div class="resume">
		{#if item}
			<div class="resume-actions">
				<a class="resume-btn resume-btn-primary" href={resumeUrl} target="_blank" rel="noreferrer"
					>View PDF ↗</a
				>
				<a class="resume-btn" href={resumeUrl} download>Download</a>
			</div>

			<!-- Browser's built-in PDF viewer. Hidden on phones, where the buttons work better. -->
			<iframe class="resume-preview" src={resumeUrl} title="Akhil Gandhi résumé (PDF)" />
		{:else}
			<Chip label="Ooops! no CV at the moment." />
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 20px;
		padding-bottom: 40px;

		&-actions {
			display: flex;
			gap: 10px;
		}

		/* Same style as the "View résumé" button on Home. */
		&-btn {
			font-size: 1em;
			color: var(--secondary-text);
			border: 1px solid var(--border);
			border-radius: 8px;
			padding: 7px 18px;
			text-decoration: none;

			&:hover {
				border-color: var(--accent-blue);
				color: var(--accent-blue);
			}

			&-primary {
				color: var(--accent-blue);
				border-color: color-mix(in srgb, var(--accent-blue) 60%, transparent);

				&:hover {
					background-color: color-mix(in srgb, var(--accent-blue) 10%, transparent);
				}
			}
		}

		&-preview {
			width: 100%;
			max-width: 900px;
			height: 85vh;
			border: 1px solid var(--border);
			border-radius: 10px;

			@media (max-width: 768px) {
				display: none;
			}
		}
	}
</style>
