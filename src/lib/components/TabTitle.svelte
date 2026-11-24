<script lang="ts">
	// Sets the page's <title> plus its search and social-sharing tags (part B).
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { TITLE_SUFFIX } from '$lib/params';
	import { DESCRIPTIONS, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from '$lib/seo';
	import { useTitle } from '$lib/utils';

	export let title: string;
	/** Summary shown under the link in search results and share cards. */
	export let description: string = DESCRIPTIONS.home;
	/** Use this exact title instead of "<title> | Akhil Gandhi" (for Home). */
	export let fullTitle: string | undefined = undefined;

	$: pageTitle = fullTitle ?? useTitle(title, TITLE_SUFFIX);
	$: url = `${SITE_ORIGIN}${$page.url.pathname}`;
	const image = `${SITE_ORIGIN}${base}/${OG_IMAGE.file}`;
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
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content={String(OG_IMAGE.width)} />
	<meta property="og:image:height" content={String(OG_IMAGE.height)} />
	<meta property="og:image:alt" content={OG_IMAGE.alt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={OG_IMAGE.alt} />
</svelte:head>
