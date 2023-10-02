/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkPrimary: '#212121',
				darkSecondary: '#585858',
				brandColorGreen: '#008F65',
				lightPrimary: '#F3F3F3',
				lightGrey: '#F6F6F6',
				darkGrey: '#2B2B2B',
				surfaceDarkPrimary: '#1C1C1C',
				strokeDarker: '#515151',
				strokerLighter: '#9A9A9A',
				backgroundMain: '#fffdff', 
				brandColorGreenHover: '#016B4D',
			},
			fontSize: {
				sm: '0.8rem',
				base: ['1rem', '1.5rem'],
				lg: ['1.125rem', '1.69rem'],
				xl: ['1.25rem', '1.81rem'],
				'2xl': ['1.5rem', '1.875rem'],
				'3xl': ['2rem', '2.187rem'],
				'6xl': ['3.5rem', '3.8125rem']
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
				backgroundIntro: "url('./src/assets/bg-intro.gif')",
				backgroundServices: "url('./src/assets/bg-services.svg')"
			}
		},
		plugins: []
	}
}
