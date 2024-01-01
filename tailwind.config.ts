import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./templates/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1460px',
			'3xl': '1640px',
		},
		animation: {
			'spin-slow': 'spin 8s linear infinite',
		},
		backgroundImage: {
			circularLight:
				"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

			circularDark:
				"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

			circularLightLg:
				"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

			circularDarkLg:
				"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

			circularLightMd:
				"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

			circularDarkMd:
				"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

			circularLightSm:
				"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

			circularDarkSm:
				"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",

			shippingCardBg: 'linear-gradient(331deg, rgba(82,78,149,1) 0%, rgba(66,66,171,1) 35%, rgba(54,109,189,1) 100%)',

			paymentCardBg: 'linear-gradient(331deg, rgba(20,42,76,1) 0%, rgba(60,60,105,1) 35%, rgba(76,117,175,1) 100%)'

		},
		extend: {
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63E96", // 240,86,199
				primaryDark: "#58E6D9", // 80,230,217
				primaryRed: '#e30217',

			},
		},
	},
	plugins: [],
}
export default config
