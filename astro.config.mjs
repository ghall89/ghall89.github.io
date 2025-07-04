// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [icon(), tailwind(), alpinejs({ entrypoint: './entrypoint' })],
});
