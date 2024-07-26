/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  sans: ['Inter Variable', 'sans-serif'],
			  mono: ['JetBrains Mono']
			},
			screens: {
				'sm': '800px',
				'md': '800px',
				'lg': '800px',
				'xl': '1024px',
				'2xl': '1024px',
			},
			colors: {
				// 'brand': {
				// 	DEFAULT: '#0F5CB2',
				// },
				'white': '#F9FDFE',
				// 'neutral': {
				// 	900: '#0C151F',
				// 	200: '#8CB2D8',
				// },
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
