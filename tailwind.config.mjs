/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  sans: ['Poppins', 'sans-serif'],
			  mono: ['JetBrains Mono']
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '960px',
				'xl': '960px',
				'2xl': '960px',
			},
			colors: {
				'black': '#171717',
				'white': '#FFFFFF',
				'outline': '#262626',
				'main': '#32AEFA',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
