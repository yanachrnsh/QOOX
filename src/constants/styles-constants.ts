export const styles = {
	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',

	flexCard: 'flex flex-col items-start gap-2 sm:gap-4',

	paddingX: 'xs:px-4 px-4 md:px-[60px]',
	paddingY: 'xs:py-[88px] py-[100px]',
	marginX: 'xs:mx-4 mx-4 md:mx-[60px]',

	sectionCol:
		'flex flex-col pt-[88px] pb-[88px] sm:pt-[100px] sm:pb-[100px] max-w-7xl md:m-auto',
	sectionRow:
		'flex md:flex-row flex-col pt-[60px] pb-[300px] sm:pt-[160px] md:pb-[225px] bg-gifBackground bg-auto bg-no-repeat bg-bottom md:bg-right',

	headingh1:
		'text-[32px] ss:text-[56px] leading-[35px] ss:leading-[61px] w-full font-semibold',

	headingh3: 'text-[24px] leading-[29px] font-semibold',

	headingh4:
		'text-[18px] leading-[27px] font-medium sm:text-[20px] sm:leading-[30px]',

	paragraph:
		'text-[16px] leading-[24px] font-medium sm:leading-[30px] sm:text-[20px]'
}

export const layout = {
	sectionDark: `${styles.paddingX} ${styles.marginX} ${styles.sectionCol} text-lightPrimary bg-surfaceDarkPrimary bg-backgroundServices bg-auto bg-no-repeat bg-right rounded-3xl`
}
