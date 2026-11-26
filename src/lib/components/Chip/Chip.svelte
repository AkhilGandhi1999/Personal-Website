<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let label = '';
	export let active = false;
	/** Static label by default; nothing uses Chip as a button. */
	export let hoverable = false;
	export let size = 'auto';

	onMount(() => {
		el.style.setProperty('--size', size);
	});
</script>

<span
	bind:this={el}
	class="chip"
	class:chip-active={active}
	class:chip-hoverable={hoverable}
	data-size={size}
>
	{label}
</span>

<style lang="scss">
	.chip {
		--size: auto;

		padding: 5px 15px;
		margin: 2.5px;
		display: inline-block;
		border: 1px solid var(--border);
		border-radius: 20px;
		font-weight: 200;
		font-size: 0.95em;
		transition-duration: 150ms;
		font-size: var(--size);

		&-hoverable {
			&:hover {
				background-color: var(--secondary);
			}
		}

		&-active {
			background-color: var(--tertiary);

			&:hover {
				background-color: var(--accent);
			}
		}
	}
</style>
