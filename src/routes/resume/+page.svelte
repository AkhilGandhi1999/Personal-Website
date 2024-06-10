<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import PdfViewer from 'svelte-pdf';

	import Assets from '$lib/data/assets';
	import { RESUME } from '$lib/params';
	const { item, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<PdfViewer url={Assets.Resume} data="" showButtons={['zoom', 'print', 'download']} />

			<!-- <a href={item}>
				<Chip label="Download" size={'1.25em'} />
			</a> -->
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
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
