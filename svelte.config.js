import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = '/Personal-Website';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		},
		// prerender: {
		// 	handleHttpError: ({ path, referrer, response }) => {
		// 	  if (response.status === 500) {
		// 		// this will still be available in the page store
		// 		response.body = {
		// 		  ...response.body,
		// 		  title: 'Error',
		// 		  message: 'An unexpected error occurred'
		// 		};
		// 	  }
		// 	}
		//   }
	}
};

export default config;
