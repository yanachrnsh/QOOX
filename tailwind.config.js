/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkPrimary: '#212121',
				brandColorGreen: '#008F65',
				lightPrimary: '#F3F3F3',
				lightGrey: '#F6F6F6',
				darkGrey: '#F6F6F6',
				strokeDarker: '#515151',
			},
			screens: {
				xs: '480px',
				ss: '620px',
				sm: '768px',
				md: '1060px',
				lg: '1200px',
				xl: '1700px'
			},
			backgroundImage: {
				gifBackground: "url('./src/assets/bg-intro.gif')"
			}
		},
		plugins: []
	}
}
