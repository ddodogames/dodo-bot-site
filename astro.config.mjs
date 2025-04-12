import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://ddodogames.github.io",
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
			social: [
			{ icon: "github", label: "Github", href: "https://github.com/ddodogames/Dodo-Bot" },
			{ icon: "discord", label: "Discord", href: "https://discord.gg/7ZgYtGDNzs" },
			{ icon: "blueSky", label: "blueSky", href: "https://bsky.app/profile/dodogames.bsky.social" }
			],
			sidebar: [
				{
					label: "Home",
					items: [
						{ label: 'Introduction', link: '/home/about'},
						{ label: "Node.js Compliability", link: '/home/nodejs'}
					],
				},
				{
					label: 'Advanced',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Canary', link: '/advanced/canary/'},
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
