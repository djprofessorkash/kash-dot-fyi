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
				silver: "#3C454D",
				gold: "#D9BE4C",
				pearl: "#FFFFFF"
			},
			width: {
				"calc-100-minus-2rem": "calc(100% - 2rem)",
			  },
		},
	},
	plugins: [],
}