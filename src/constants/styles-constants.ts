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

	headingh1: 'text-3xl ss:text-6xl w-full font-semibold',

	headingh2: 'text-2xl font-medium',

	headingh3: 'text-xl font-semibold',

	headingh4: 'text-lg font-medium sm:text-xl',

	paragraph: 'text-base sm:text-xl font-medium',
	span: 'text-xl font-medium',

	formInputs:
		'border-b border-strokeDarker py-6 px-2 lg:px-4 w-[100%] focus:outline-none focus:border-b-2  focus:border-b-brandColorGreen '
}

export const layout = {
	sectionDark: `${styles.paddingX} ${styles.marginX} ${styles.sectionCol} ${styles.paddingY} text-lightPrimary bg-surfaceDarkPrimary bg-backgroundServices bg-no-repeat bg-right bg-contain rounded-3xl `
}

export const container = {
	titleParagraphContainer: `${styles.paddingX} flex flex-col items-start  max-w-7xl md:m-auto`
}

export const card = {
	cardImg: 'w-[44px] h-[44px] sm:w-[56px] sm:h-[56px]',
	blockLightGrey: `${styles.flexCard}  bg-lightGrey text-darkPrimary rounded-2xl p-4 sm:p-6`,
	blockDarkGrey: `${styles.flexCard}  bg-darkGrey text-lightPrimary rounded-2xl p-4 sm:p-6 min-w-[300px]`,
	textLight: 'text-start w-[100%] text-lightPrimary',
	textDark: 'text-start w-[100%] text-darkPrimary',
	titleGreen: `${styles.headingh4} text-brandColorGreen`,
	titleGrey: `${styles.headingh2} text-lightPrimary`,
	img: 'w-[44px] h-[44px] sm:w-[56px] sm:h-[56px]'
}

export const hovers = {
	link: {
		parent: 'group/link  hover:text-brandColorGreenHover',
		child: 'group-hover/link:animate-pop-up pointer-events-none'
	},
	button: {
		parent: 'group/button',
		child: 'group-hover/button:animate-shake pointer-events-none '
	}
}
