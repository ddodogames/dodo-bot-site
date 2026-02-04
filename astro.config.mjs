// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next'
import starlightContextualMenu from "starlight-contextual-menu";

// https://astro.build/config
export default defineConfig({
	site: "https://ddodogames.github.io",
	base: "/dodo-bot-site",
	integrations: [
		starlight({
			plugins: [starlightThemeNext(),
		    starlightContextualMenu({
			actions: ["copy", "view"]
			}],
			title: 'Dodo-Bot',
			logo: {
				src: './src/assets/logo.png',
			},
			social: [
				{ icon: "github", label: "Github", href: "https://github.com/ddodogames/Dodo-Bot" },
				{ icon: "discord", label: "Discord", href: "https://discord.gg/7ZgYtGDNzs" },
			],
			lastUpdated: true,
			sidebar: [
				{
					label: 'Home',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About Dodo-Bot', link: '/home/about'},
						{ label: 'Credits', link: '/home/credits'},
					],
				},
				{
					label: 'Getting started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/getting-started/install'}
					],
				},
				{
					label: 'Advanced',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Canary', link: '/advanced/canary'},
					],
				},
			],
		}),
	],
});
