export const styles = {
	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',

	flexCard: 'flex flex-col items-start gap-2 sm:gap-4',
	gridCard: 'grid grid-cols-1 md:grid-cols-2 gap-4',

	paddingX: 'xs:px-4 px-4 md:px-[60px]',
	paddingY: 'py-[88px] sm:py-[100px]',
	marginX: 'xs:mx-4 mx-4 md:mx-[60px]',

	sectionCol:
		'flex flex-col pt-[88px] pb-[88px] sm:pt-[100px] sm:pb-[100px] max-w-7xl md:mx-auto',
	sectionRow:
		'flex md:flex-row flex-col pt-[60px] pb-[300px] sm:pt-[160px] md:pb-[225px] bg-gifBackground bg-auto bg-no-repeat bg-bottom md:bg-right',

	headingH1: 'text-4xl ss:text-6xl w-full font-semibold',

	headingH2: 'text-3xl ss:text-5xl font-semibold',

	headingH3: 'text-xl ss:text-2xl font-semibold',

	headingH4: 'text-lg sm:text-xl font-medium ',

	paragraph: 'text-base sm:text-xl font-medium',

	span: 'text-xl font-medium',

	formInputs:
		'rounded-none border-b border-stroke-darker py-6 px-2 lg:px-4 w-[100%] focus:outline-none focus:border-b-2  focus:border-b-brand-green '
}

export const layout = {
	sectionDark: `px-4 md:px-11 mx-2 md:mx-0 flex flex-col py-[88px] sm:py-[100px] text-light-primary bg-surface-dark-primary bg-background-services bg-no-repeat bg-right-top bg-contain rounded-3xl `
}

export const container = {
	titleParagraphContainer: `${styles.paddingX} flex flex-col items-start  max-w-7xl md:m-auto`
}

export const card = {
	cardImg: 'w-[44px] h-[44px] sm:w-[56px] sm:h-[56px]',
	block: ` ${styles.flexCard} rounded-2xl p-4 md:p-6`,
	text: 'text-sm sm:text-base text-start w-[100%]',
	img: 'w-[44px] h-[44px] sm:w-[56px] sm:h-[56px]'
}

export const hovers = {
	link: {
		parent: 'group/link  hover:text-brand-green-hover',
		child: 'group-hover/link:animate-pop-up pointer-events-none'
	},
	button: {
		parent: 'group/button',
		child: 'group-hover/button:animate-shake pointer-events-none '
	},
	textHoverGreen: 'text-brand-green hover:text-brand-green-hover',
	backgroundHoverGreen: 'bg-brand-green hover:bg-brand-green-hover'
}
