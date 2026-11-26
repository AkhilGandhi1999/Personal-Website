// Builds /sitemap.xml at build time: every page on the site, so search engines can find them all.
// Tool pages are the ones other pages link to: the Toolbox, practice areas, and the tool
// icons on Experience and Projects cards.
import { base } from '$app/paths';
import MY_EXPERIENCES from '$lib/experiences.params';
import { EVIDENCE, PRACTICES, TOOLBOX, projectTools, toolsForExperience } from '$lib/expertise';
import MY_PROJECTS from '$lib/projects.params';
import { SITE_ORIGIN } from '$lib/seo';
import MY_SKILLS from '$lib/skills.params';

export const prerender = true;

const PAGES = ['', 'skills', 'experience', 'projects', 'resume'];

const toolSlugs = () => {
	const slugs = new Set<string>([
		...TOOLBOX.flatMap((g) => g.items.map((i) => i.skill).filter((s): s is string => !!s)),
		...PRACTICES.flatMap((p) => p.tools),
		...EVIDENCE.flatMap((e) => e.toolSlugs),
		...MY_EXPERIENCES.flatMap((e) => toolsForExperience(e.slug).map((s) => s.slug)),
		...MY_PROJECTS.flatMap((p) => projectTools(p).map((s) => s.slug))
	]);
	// Only real tool pages (skills that exist).
	return MY_SKILLS.map((s) => s.slug).filter((s) => slugs.has(s)).sort();
};

export function GET() {
	const today = new Date().toISOString().slice(0, 10);
	const urls = [...PAGES, ...toolSlugs().map((s) => `skills/${s}`)];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(path) =>
			`  <url><loc>${SITE_ORIGIN}${base}/${path}</loc><lastmod>${today}</lastmod><priority>${
				path === '' ? '1.0' : path.startsWith('skills/') ? '0.5' : '0.8'
			}</priority></url>`
	)
	.join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
