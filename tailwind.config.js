/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				text_dark_primary: '#212121',
				brand_color_green: '#008F65',
				text_light_primary: '#F3F3F3',
				light_grey: '#F6F6F6',
				dark_grey: '#F6F6F6'
			},
			screens: {
				xs: "480px",
				ss: "620px",
				sm: "768px",
				md: "1060px",
				lg: "1200px",
				xl: "1700px",
			},
		}
	},
	plugins: []
}
