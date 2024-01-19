import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercelStatic from '@astrojs/vercel/static';
// https://astro.build/config
export default defineConfig({
  site: "https://mangahook-api.vercel.app",
  integrations: [
    starlight({
      title: 'Manga Hook',
      social: {
        github: 'https://github.com/kiraaziz/mangahook-api',
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
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});