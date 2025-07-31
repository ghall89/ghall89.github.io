/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ghall-green': '#8d8616',
			},
		},
	},
	plugins: [require('tailwindcss-motion'), require('tailwindcss-intersect')],
};
