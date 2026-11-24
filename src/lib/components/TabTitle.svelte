<script lang="ts">
	// Sets the page's <title> plus its search and social-sharing tags (part B).
	import { page } from '$app/stores';
	import { TITLE_SUFFIX } from '$lib/params';
	import { DESCRIPTIONS, SITE_NAME, SITE_ORIGIN } from '$lib/seo';
	import { useTitle } from '$lib/utils';

	export let title: string;
	/** Summary shown under the link in search results and share cards. */
	export let description: string = DESCRIPTIONS.home;
	/** Use this exact title instead of "<title> | Akhil Gandhi" (for Home). */
	export let fullTitle: string | undefined = undefined;

	$: pageTitle = fullTitle ?? useTitle(title, TITLE_SUFFIX);
	$: url = `${SITE_ORIGIN}${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>
