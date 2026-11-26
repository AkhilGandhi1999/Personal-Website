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

	const { description, lastName, links, name, title, skills } = HOME;

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
	<img
		src={Assets.Profile1}
		class="h-[370px] w-[300px] ml-10 mr-10 rounded-full shadow-2xl shadow-slate-400"
		alt=""
	/>
	<div class="home-section">
		<MainTitle classes="!text-left">{name} {lastName},</MainTitle>
		<p class="home-subtitle">{description}</p>
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
		</div>
	</div>
	<Carrousel items={skills ?? MY_SKILLS} />
</div>

<style lang="scss">
	.home {
		align-self: center;
		display: flex;
		flex-direction: row;
		flex: 1;
		align-self: stretch;
		align-items: center;
		padding: 0px 10px;

		&-subtitle {
			color: var(--tertiary-text);
			font-size: 1.35em;
			font-weight: 200;
		}

		&-section {
			display: flex;
			flex-direction: column;
			flex: 1;
			gap: 10px;
		}

		&-social {
			padding: 15px 0px;

			&-item {
				margin-right: 10px;
				text-decoration: none;
			}
		}

		@media (max-width: 875px) {
			& {
				flex-direction: column;
				justify-content: center;
			}

			&-section {
				flex: 0;
				align-items: center;
				text-align: center;
			}
		}
	}
	.jelly-border {
		display: inline-block;
		border-radius: 50%;
		padding: 5px;
		animation: jelly 2s ease-in-out infinite, jelly-rotate 2s infinite linear;
		border: 1px solid transparent;
		background: grey;
		background-size: 300% 300%;
	}

	@keyframes jelly {
		0%,
		100% {
			border-radius: 50%;
		}
		20% {
			border-radius: 20%;
		}
		50% {
			border-radius: 30%;
		}
		70% {
			border-radius: 40%;
		}
	}

	@keyframes jelly-rotate {
		0% {
			background-position: 0% 20% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	.jelly-border img {
		display: block;
		border-radius: 50%;
		width: 150px;
		height: 150px;
	}
</style>
