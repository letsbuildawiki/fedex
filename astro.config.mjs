import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.letsbuilda.dev/',
	base: '/fedex',
	integrations: [
		starlight({
			title: 'FedEx',
			editLink: {
				baseUrl: 'https://github.com/letsbuildawiki/fedex/edit/main/',
			},
			lastUpdated: true,
			social: {
				discord: 'https://discord.gg/hqPw9duXtP',
				github: 'https://github.com/letsbuildawiki/fedex',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/'
				},
				{
					label: 'Ship Manager',
					autogenerate: { directory: 'ship-manager' },
				},
			],
		}),
	],
});
