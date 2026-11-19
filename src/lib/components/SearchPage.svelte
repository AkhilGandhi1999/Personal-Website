<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import CommonPage from './CommonPage.svelte';
	import Input from './Input/Input.svelte';
	import { browser } from '$app/environment';

	export let title = 'Title';
	export let search = '';

	const dispatch = createEventDispatcher();

	let mounted = false;

	$: {
		dispatch('search', { search: search.trim().toLowerCase() });
	}

	$: {
		if (browser && mounted) {
			let searchParams = new URLSearchParams(window.location.search);

			// Only rewrite the address when the search text really changed,
			// so links like /experience#card keep their #card part.
			if ((searchParams.get('q') ?? '') !== search) {
				searchParams.set('q', search);

				const url = `${window.location.protocol}//${window.location.host}${
					window.location.pathname
				}?${searchParams.toString()}${window.location.hash}`;

				const state = window.history.state;

				window.history.replaceState(state, '', url);
			}
		}
	}

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		search = searchParams.get('q') ?? '';
		mounted = true;
	});
</script>

<CommonPage {title}>
	<div class="w-100% flex flex-row">
		<Input bind:value={search} placeholder={'Search...'} />
	</div>
	<div class="w-100% flex flex-col">
		<slot />
	</div>
</CommonPage>
