import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
               site: "https://DodoGames7.github.io",
               base: "/dodo-bot-site",
	integrations: [
		starlight({
			title: 'Dodo-Bot',
			logo: {
				src: './src/assets/dodo-bot-logo.png',
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
						{ label: "Node.js Compliability", link: '/home/nodejs'},
						{ label: "Flags", link: '/home/flags'}
					],
				},
				{
					label: 'Advanced',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Github Builds', link: '/advanced/gitbuilds/'},
					],
					collapsed: true
				},
				{
					label: "Dodo-Bot",
					items: [
						{label: 'Release Types', link: '/about-bot/release-types'},
						{label: "Frequently asked questions", link: "/about-bot/faq"},
						{label: 'Credits', link: '/about-bot/credits'},
					],
					collapsed: true
				}
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
