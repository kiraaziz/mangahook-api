import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site: "https://mangahook-api.vercel.app",
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		starlight({
			title: 'Manga Hook',
			social: {
				github: 'https://github.com/withastro/starlightkiraaziz/manga-api',
			},
			customCss: [
				"/src/assets/style.css"
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: 'introduction' },
						{ label: 'Quick Start Guide', link: 'quick-start' }
					],
				},
				{
					label: 'API References',
					items: [
						{ label: 'Installation', link: 'installation' },
						{ label: 'Manga List', link: 'mangalist' },
						{ label: 'Get Manga Detail', link: 'singlemanga' },
						{ label: 'Search', link: 'search' },
					],
				},
				{
					label: 'Showcase',
					items: [
						{ label: 'Example (Nextjs)', link: 'example' },
						{ label: 'Web Hook', link: 'hooks' },
					],
				}
			],
		}),
	],
});
