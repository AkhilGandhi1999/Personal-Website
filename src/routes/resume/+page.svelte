<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Assets from '$lib/data/assets';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<div class="pdf-container">
				<object data={Assets.Resume} type="application/pdf" width="100%" height="600px">
					<p>
						It appears you don't have a PDF plugin for this browser. No biggie... you can <a
							href={Assets.Resume}>click here to download the PDF file.</a
						>
					</p>
				</object>
			</div>
			<a href={item}>
				<Chip label="Download" size={'1.25em'} />
			</a>
		{:else}
			<Chip label="Ooops! no CV at the moment." />
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
