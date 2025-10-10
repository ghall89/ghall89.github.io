// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

import solidJs from '@astrojs/solid-js';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [icon(), alpinejs({ entrypoint: './entrypoint' }), solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },
});