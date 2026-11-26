import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '/Personal-Website';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : '',
			// Always use the absolute /Personal-Website prefix (SvelteKit 2 otherwise makes it
			// relative, which breaks absolute URLs such as the share image and canonical links).
			relative: false
		},
		prerender: {
			handleHttpError: ({ path, referrer, response }) => {
			console.log(response)
			}
		  }
	}
};

export default config;
