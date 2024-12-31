/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkmode: "selector",
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				code: ["Source Code Pro", "monospace"],
				syne: ["Syne", "serif"]
			},
			colors: {
				nuit: "#1A1A1A",
				accent: "#D62828",
				jour: "#FFFFFF"
			},
			width: {
				"calc-100-minus-2rem": "calc(100% - 2rem)",
			  },
		},
	},
	plugins: [],
}