/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-primary': '#212121',
				'dark-secondary': '#585858',
				'brand-green': '#008F65',
				'light-primary': '#F3F3F3',
				'light-grey': '#F6F6F6',
				'dark-grey': '#2B2B2B',
				'surface-dark-primary': '#1C1C1C',
				'stroke-darker': '#515151',
				'stroker-lighter': '#9A9A9A',
				'background-main': '#fffdff',
				'brand-green-hover': '#016B4D'
			},
			fontSize: {
				sm: '0.875rem',
				base: ['1rem', '1.5rem'],
				lg: ['1.125rem', '1.69rem'],
				xl: ['1.25rem', '1.81rem'],
				'2xl': ['1.5rem', '1.875rem'],
				'3xl': ['1.75rem', '2.1rem'],
				'4xl': ['2rem', '2.187rem'],
				'5xl': ['2.75rem', '3.3rem'],
				'6xl': ['3.5rem', '3.8125rem']
			},
			screens: {
				xs: '480px',
				ss: '620px',
				sm: '768px',
				sml: '800px',
				md: '1060px',
				lg: '1200px',
				xl: '1700px'
			},
			backgroundImage: {
				'background-intro': "url('@/assets/bg-intro.gif')",
				'background-services': "url('@/assets/bg-services.svg')"
			},
			keyframes: {
				shake: {
					'0%, 100%': { transform: 'translateY(0)' },
					'33%': {
						transform: 'translateY(5%)'
					},
					'66%': {
						transform: 'translateY(-5%)'
					}
				},
				'pop-up': {
					'100%': {
						transform: 'translateY(-5%)'
					}
				}
			},
			animation: {
				shake: 'shake 0.7s ease-in-out 1 ',
				'pop-up': 'pop-up 0.2s ease-in-out forwards '
			}
		},
		plugins: []
	}
}
