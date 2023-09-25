import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
               site: "https://DodoGames7.github.io",
               base: "/dodo-bot-site",
	integrations: [
		starlight({
			title: 'dodoGames stuff',
			logo: {
				src: './src/assets/dodo-bot.png',
			},
			customCss: [
				// Use a custom theme
				'./src/themes/theme2.css',
			],
			lastUpdated: true,
			social: {
				github: 'https://github.com/DodoGames7/Dodo-Bot',
				discord: 'https://discord.gg/pFwKjAaZvj',
				twitter: 'https://twitter.com/dodoGames14',
				threads: 'https://www.threads.net/@dodogames14'
			},
			sidebar: [
				{
					label: "Home",
					items: [
						{ label: 'Introduction', link: '/home/about'},
						{label: "Node.js Compliability", link: '/home/nodejs'}
					],
				},
				{
					label: 'General',
					
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Projects', link: '/general/projects/'},
						{ label: 'Codes', link: '/general/codes/'},
						{ label: 'Other', link: '/general/other/'}
					],
					collapsed: true
				},
				{
					label: 'Development',
					autogenerate: { directory: 'development' },
					collapsed: true
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
