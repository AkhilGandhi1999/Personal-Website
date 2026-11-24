<script lang="ts">
	import MainTitle from './MainTitle/MainTitle.svelte';
	import TabTitle from './TabTitle.svelte';

	export let title = 'Title';
	export let description: string | undefined = undefined;
</script>

<TabTitle bind:title {description} />
<div class="flex-1 flex flex-col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
	<div class="flex flex-col gap-5">
		<slot />
	</div>
</div>
