<script lang="ts">
	import TabTitle from '$lib/components/TabTitle.svelte';
	import { base } from '$app/paths';
	import { CERTIFICATIONS } from '$lib/expertise';
	import { DESCRIPTIONS, jsonLdScript, personJsonLd } from '$lib/seo';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { isBlank } from '@riadh-adrani/utils';
	import Assets from '../lib/data/assets';
	import { onMount } from 'svelte';

	const { description, lastName, links, name, title, skills, role, roles, pills } = HOME;

	// Terminal-style typewriter: types each phrase, pauses, deletes it, types the next.
	// The page is built with the first phrase already shown (search engines and no-JS see it);
	// visitors who prefer less motion keep that static line.
	let typed = roles[0] ?? role;
	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || roles.length < 2) return;
		let i = 0;
		let n = typed.length;
		let deleting = false;
		let timer: ReturnType<typeof setTimeout>;
		const tick = () => {
			const word = roles[i];
			if (!deleting) {
				n += 1;
				typed = word.slice(0, n);
				if (n >= word.length) {
					deleting = true;
					timer = setTimeout(tick, 2000);
					return;
				}
				timer = setTimeout(tick, 65);
			} else {
				n -= 1;
				typed = word.slice(0, n);
				if (n <= 0) {
					deleting = false;
					i = (i + 1) % roles.length;
					timer = setTimeout(tick, 300);
					return;
				}
				timer = setTimeout(tick, 30);
			}
		};
		// Start by pausing on the first phrase, then delete it and move on.
		deleting = true;
		timer = setTimeout(tick, 2200);
		return () => clearTimeout(timer);
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

	// Shown as a hover tooltip and read out by screen readers.
	const linkLabels: Record<string, string> = {
		github: 'GitHub',
		linkedin: 'LinkedIn',
		stackoverflow: 'Stack Overflow',
		credly: 'Credly (certification badges)',
		email: 'Email'
	};
</script>

<svelte:head>
	<!-- Structured data: tells search engines who this site is about. -->
	{@html jsonLdScript(
		personJsonLd(
			base,
			links.filter((l) => l.link.startsWith('http')).map((l) => l.link),
			CERTIFICATIONS.map((c) => ({ name: c.name, url: c.url }))
		)
	)}
</svelte:head>

<TabTitle
	{title}
	fullTitle="Akhil Gandhi | Site Reliability Engineer"
	description={DESCRIPTIONS.home}
/>
<div class="home">
	<!-- Photo in a blue-to-green ring, matching the share image. -->
	<div class="home-photo-ring">
		<img src={Assets.Profile1} class="home-photo" alt="Akhil Gandhi" />
	</div>

	<div class="home-section">
		<p class="home-prompt" aria-hidden="true">$ whoami</p>
		<MainTitle classes="home-name">{name} {lastName}</MainTitle>
		<p class="home-role">
			<span class="sr-only">{role}</span>
			<span class="home-role-text" aria-hidden="true">{typed}</span><span
				class="home-cursor"
				aria-hidden="true"
			/>
		</p>
		<p class="home-subtitle">{description}</p>

		<ul class="home-pills" aria-label="Highlights">
			{#each pills as pill}
				<li class={`home-pill home-pill-${pill.kind}`}>
					<span aria-hidden="true">{pill.kind === 'cert' ? '✓' : '●'}</span>
					{pill.label}
				</li>
			{/each}
		</ul>

		<div class="home-social">
			{#each links as link}
				<a
					class="home-social-item"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
					title={linkLabels[link.platform] ?? link.platform}
					aria-label={linkLabels[link.platform] ?? link.platform}
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} />
				</a>
			{/each}
			<a class="home-resume" href={`${base}/resume`}>View résumé</a>
		</div>
	</div>
	<Carrousel items={skills ?? MY_SKILLS} />
</div>

<style lang="scss">
	.home {
		display: flex;
		flex-direction: row;
		flex: 1;
		align-self: stretch;
		align-items: center;
		/* Keep photo, text and carousel together in the middle instead of spread to the edges. */
		justify-content: center;
		gap: 40px;
		padding: 0px 10px;

		/* The carousel normally stretches to fill spare space; on Home keep it to its own size. */
		& > :global(.carrousel) {
			flex: 0 0 auto;
		}

		&-photo-ring {
			flex-shrink: 0;
			width: 340px;
			height: 340px;
			padding: 7px;
			border-radius: 50%;
			background: linear-gradient(180deg, var(--accent-blue), var(--accent-green));
		}

		&-photo {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			object-fit: cover;
			object-position: 50% 35%;
			border: 4px solid var(--main);
		}

		&-section {
			display: flex;
			flex-direction: column;
			/* Only as wide as its content needs (up to 560px), so the carousel sits close. */
			flex: 0 1 520px;
			min-width: 0;
			gap: 10px;
		}

		/* Mid-size laptops: shrink the photo a little so the text keeps its room. */
		@media (max-width: 1150px) {
			&-photo-ring {
				width: 260px;
				height: 260px;
			}
		}

		&-prompt {
			font-family: var(--mono-f);
			color: var(--accent-green);
			font-size: 1.05em;
			margin-bottom: -6px;
		}

		/* The name: left-aligned, no wrap on wide screens. */
		:global(.home-name) {
			text-align: left !important;
			letter-spacing: 2px !important;
			font-size: clamp(2.4em, 4.2vw, 3.2em) !important;
			white-space: nowrap;
		}

		&-role {
			font-family: var(--mono-f);
			color: var(--accent-blue);
			font-size: 1.25em;
			/* The site adds 1px letter-spacing everywhere; drop it here so 1ch per letter is exact. */
			letter-spacing: 0;
			display: flex;
			align-items: center;
			justify-content: inherit;
		}

		&-role {
			/* Same height whatever is typed, so nothing below jumps. */
			min-height: 1.6em;
		}

		&-role-text {
			white-space: nowrap;
		}

		&-cursor {
			display: inline-block;
			width: 0.6em;
			height: 1.1em;
			margin-left: 3px;
			background: var(--accent-green);
			animation: blink 1.1s steps(1) infinite;
		}

		&-subtitle {
			color: var(--tertiary-text);
			font-size: 1.15em;
			font-weight: 300;
			line-height: 1.6;
			max-width: 60ch;
		}

		&-pills {
			list-style: none;
			margin: 4px 0 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
		}

		&-pill {
			font-family: var(--mono-f);
			font-size: 0.85em;
			border-radius: 999px;
			padding: 3px 12px;
			display: inline-flex;
			gap: 6px;
			align-items: center;

			&-status {
				color: var(--accent-green);
				border: 1px solid color-mix(in srgb, var(--accent-green) 55%, transparent);
			}

			&-cert {
				color: var(--accent-blue);
				border: 1px solid color-mix(in srgb, var(--accent-blue) 55%, transparent);
			}
		}

		&-social {
			padding: 10px 0px;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 10px;

			&-item {
				text-decoration: none;
			}
		}

		&-resume {
			margin-left: 8px;
			font-size: 0.9em;
			color: var(--secondary-text);
			border: 1px solid var(--border);
			border-radius: 8px;
			padding: 4px 12px;
			text-decoration: none;

			&:hover {
				border-color: var(--accent-blue);
				color: var(--accent-blue);
			}
		}

		@media (max-width: 875px) {
			& {
				flex-direction: column;
				justify-content: center;
				gap: 20px;
				padding-top: 20px;
			}

			&-photo-ring {
				width: 220px;
				height: 220px;
				margin-left: 0;
			}

			/* Smaller on phones so the longest phrase still fits on one line. */
			&-role {
				font-size: 1.05em;
			}

			&-section {
				flex: 0;
				align-items: center;
				text-align: center;
			}

			:global(.home-name) {
				text-align: center !important;
				white-space: normal;
			}

			&-pills,
			&-social {
				justify-content: center;
			}
		}
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.home-cursor {
			animation: none;
		}
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
</style>
