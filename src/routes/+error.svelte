<script lang="ts">
	// Shown for any address that doesn't exist (and for other errors), styled as a terminal.
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import TabTitle from '$lib/components/TabTitle.svelte';

	$: status = $page.status;
	$: notFound = status === 404;
	// Path inside the site, e.g. "/xyz", without the /Personal-Website base.
	$: path = (() => {
		const p = $page.url.pathname;
		const inSite = p.startsWith(base) ? p.slice(base.length) || '/' : p;
		return inSite.length > 1 ? inSite.replace(/\/$/, '') : inSite;
	})();

	const pages = [
		{ name: 'expertise/', to: '/skills' },
		{ name: 'projects/', to: '/projects' },
		{ name: 'experience/', to: '/experience' },
		{ name: 'résumé/', to: '/resume' }
	];
</script>

<TabTitle
	title={notFound ? 'Page not found' : 'Something went wrong'}
	description="This page doesn't exist on Akhil Gandhi's site."
/>
<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="error-page">
	<div class="terminal" role="region" aria-label="Error">
		<div class="terminal-bar" aria-hidden="true">
			<span class="dot dot-red" /><span class="dot dot-yellow" /><span class="dot dot-green" />
			<span class="terminal-title">akhil@sre: ~</span>
		</div>
		<div class="terminal-body">
			{#if notFound}
				<p><span class="prompt">$</span> cd ~{path}</p>
				<p class="err">bash: cd: ~{path}: No such file or directory</p>
				<p class="hint">Error 404: this page doesn't exist (or it moved).</p>
			{:else}
				<p><span class="prompt">$</span> curl ~{path}</p>
				<p class="err">error: {status} {$page.error?.message ?? ''}</p>
			{/if}

			<p class="gap"><span class="prompt">$</span> ls ~</p>
			<p class="ls">
				{#each pages as p}
					<a href={`${base}${p.to}`}>{p.name}</a>
				{/each}
			</p>

			<p class="gap">
				<span class="prompt">$</span> <a class="home" href={`${base}/`}>cd ~</a>
				<span class="muted"># back to the home page</span><span class="cursor" aria-hidden="true" />
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.error-page {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px 16px;
	}

	.terminal {
		width: 100%;
		max-width: 680px;
		border: 1px solid var(--border);
		border-radius: 12px;
		background: var(--secondary);
		overflow: hidden;
		font-family: var(--mono-f);
		letter-spacing: 0;
	}

	.terminal-bar {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 14px;
		background: var(--tertiary);
		border-bottom: 1px solid var(--border);
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}
	.dot-red {
		background: #ff5f57;
	}
	.dot-yellow {
		background: #febc2e;
	}
	.dot-green {
		background: #28c840;
	}

	.terminal-title {
		margin-left: auto;
		margin-right: auto;
		font-size: 0.85em;
		color: var(--accent-text);
	}

	.terminal-body {
		padding: 20px 22px 24px;
		font-size: 0.95em;
		line-height: 1.8;
		color: var(--secondary-text);
		overflow-wrap: anywhere;
	}

	.prompt {
		color: var(--accent-green);
	}

	.err {
		color: #f85149;
	}

	:global([data-theme='light']) .err {
		color: #cf222e;
	}

	.hint,
	.muted {
		color: var(--accent-text);
	}

	.gap {
		margin-top: 14px;
	}

	.ls {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 22px;

		& a {
			color: var(--accent-blue);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.home {
		color: var(--accent-blue);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.cursor {
		display: inline-block;
		width: 0.6em;
		height: 1.1em;
		margin-left: 6px;
		vertical-align: -2px;
		background: var(--accent-green);
		animation: blink 1.1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cursor {
			animation: none;
		}
	}
</style>
