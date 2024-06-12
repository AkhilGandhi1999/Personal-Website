<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils';
	import { isBlank } from '@riadh-adrani/utils';
	import Assets from '../lib/data/assets';

	const { description, lastName, links, name, title, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

	import { onMount } from 'svelte';
	import axios from 'axios';

	onMount(async () => {
		// const options = {
		// 	method: 'POST',
		// 	url: 'https://rapidmail.p.rapidapi.com/',
		// 	headers: {
		// 		'x-rapidapi-key': '9ed674538amshdcb9838f5a86f98p11ff43jsnbbfd1b11af6d',
		// 		'x-rapidapi-host': 'rapidmail.p.rapidapi.com',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	data: {
		// 		ishtml: 'false',
		// 		sendto: 'akhil.gandhi10.ag@gmail.com',
		// 		name: 'Someone visited your website',
		// 		replyTo: 'your mail where users can send reply',
		// 		title: 'Website Visit',
		// 		body: 'Website opened'
		// 	}
		// };

		// try {
		// 	const response = await axios.request(options);
		// 	console.log(response.data);
		// } catch (error) {
		// 	console.error(error);
		// }
		
	});
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<div class="home">
	<img src={Assets.Profile} class="h-[380px] w-[300px] mr-20 rounded-full" alt="" />
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
</style>
