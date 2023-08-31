import {
	Button,
	Title,
	Paragraph,
	SubTitle
} from '../../index'
import { styles } from '../../../constants/styles-constants'

export const IntroSection = () => {
	return (
		<section
			id='intro'
			className={`flex md:flex-row flex-col pt-[60px] pb-[300px] sm:pt-[160px] md:pb-[225px] bg-backgroundIntro bg-auto bg-no-repeat bg-bottom md:bg-right max-w-7xl md:m-auto`}
		>
			<div className={styles.titleParagraphContainer}>
				<SubTitle
					text='Welcome to'
					textColored='QOOX'
					styles={`${styles.paragraph} md:w-[70%] w-[100%]`}
				/>
				<Title
					styles={`${styles.headingh1} pb-4 md:w-[70%] w-[100%]`}
					text={`Powerful IT Solutions to Drive Your Business `}
					textColored='Success'
				/>
				<Paragraph
					styles={`${styles.paragraph} pb-[40px] md:w-[70%] w-[100%]  ss:w-[80%] font-normal `}
					text='We are a leading company providing cutting-edge technology solutions
				that drive business growth and help you stay ahead in the digital era.
				With our expertise and commitment to excellence, we offer a broad range
				of services to meet your business needs.'
				/>
				<Button
					classNameBtn=' w-[100%]'
					classNameDiv=' ss:w-[30%] min-w-[200px] w-[100%] text-lightPrimary bg-brandColorGreen py-2 px-6 rounded text-center '
					text='Unlock Your Potential'
				/>
			</div>
		</section>
	)
}
