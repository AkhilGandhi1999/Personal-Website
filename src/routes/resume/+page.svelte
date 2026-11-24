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
				<a href={resumeUrl} target="_blank" rel="noreferrer">
					<Chip label="View PDF" size={'1.1em'} />
				</a>
				<a href={resumeUrl} download>
					<Chip label="Download" size={'1.1em'} />
				</a>
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

			& > a {
				color: inherit;
				text-decoration: none;
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
