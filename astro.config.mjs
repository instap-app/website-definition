import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
});

site: 'https://odwrotnie.github.io'
base: '/instap-app/website-definition'
