<script lang="ts">
	import { Icons } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import Icon from '../Icon/Icon.svelte';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';

	export let items: Array<Skill> = [];
	const delay = 2000;

	let element: HTMLElement;

	let timeout: unknown;
	let index = 0;
	let toRight = true;

	$: {
		if (element) {
			element.scroll({
				left: index * 150,
				behavior: 'smooth'
			});
		}
	}

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) {
				index = index + 1;
			} else {
				index = index - 1;
				toRight = false;
			}
		} else {
			if (index > 0) {
				index = index - 1;
			} else {
				index = index + 1;
				toRight = true;
			}
		}
	};

	// Auto-advance pauses while the carousel is hovered or focused (WCAG 2.2.2) and is off
	// entirely for visitors who prefer reduced motion. The arrow buttons always work.
	let paused = false;
	let autoplay = true;

	const toggle = (right: boolean) => {
		clearTimeout(timeout as number);
		if (!autoplay || paused) return;

		timeout = setTimeout(() => {
			slide(right);

			toggle(toRight);
		}, delay);
	};

	const toggleLeft = () => {
		clearTimeout(timeout as number);
		toRight = false;
		slide(false);
		toggle(toRight);
	};

	const toggleRight = () => {
		clearTimeout(timeout as number);
		toRight = true;
		slide(true);
		toggle(toRight);
	};

	const pause = () => {
		paused = true;
		clearTimeout(timeout as number);
	};

	const resume = () => {
		paused = false;
		toggle(toRight);
	};

	onMount(() => {
		autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		toggle(true);
	});

	onDestroy(() => clearTimeout(timeout as number));
</script>

<div
	class="carrousel"
	role="group"
	aria-roledescription="carousel"
	aria-label="Tools I use"
	on:mouseenter={pause}
	on:mouseleave={resume}
	on:focusin={pause}
	on:focusout={resume}
>
	<button type="button" class="carrousel-btn" aria-label="Previous tool" on:click={toggleLeft}>
		<Icon icon={Icons.LeftArrow} size="20px" color={'var(--border-hover)'} />
	</button>

	<div bind:this={element} class="carrousel-content">
		{#each items as item}
			<div class="carrousel-item">
				<img class="carrousel-item-img" src={getAssetURL(item.logo)} alt={item.name} />
				<span class="carrousel-item-label">{item.name}</span>
			</div>
		{/each}
	</div>

	<button type="button" class="carrousel-btn" aria-label="Next tool" on:click={toggleRight}>
		<Icon icon={Icons.RightArrow} color={'var(--border-hover)'} size="20px" />
	</button>
</div>

<style lang="scss">
	.carrousel {
		flex: 0.5;
		display: flex;
		justify-content: center;
		align-items: center;

		&-content {
			display: flex;
			width: 150px;
			box-sizing: content-box;
			overflow: hidden;
		}

		&-item {
			box-sizing: content-box;
			width: 150px;
			padding: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;

			&-img {
				height: 120px;
				width: 120px;

				max-width: initial;
			}

			&-label {
				text-align: center;
				margin-top: 20px;
			}
		}

		&-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;
			padding: 5px;
			margin: 0px 10px;
			cursor: pointer;
			border: 1px solid var(--border);
			border-radius: 50%;
			background: transparent;
			color: inherit;

			&:hover {
				border-color: var(--border-hover);
			}

			/* Visible focus ring for keyboard users. */
			&:focus-visible {
				outline: 2px solid var(--accent-blue);
				outline-offset: 2px;
			}
		}
	}
</style>
