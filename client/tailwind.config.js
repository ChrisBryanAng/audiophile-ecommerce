/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-1": "#D87D4A",
				"primary-2": "#FBAF85",
				gray1: "#F1F1F1",
				gray2: "#FAFAFA",
				black1: "#000000",
				black2: "#101010",
			},
			fontFamily: {
				Manrope: ['"Manrope"', "sans-serif"],
			},
			backgroundImage: {
				"header-image-mobile": "url('/assets/home/mobile/image-header.jpg')",
			},
		},
	},
	plugins: [],
};
