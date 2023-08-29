import { Title } from '../Title/title.component'
import { SubTitle } from '../SubTitle/subtitle.component'
import { styles } from '../../constants/styles-constants'

export const AboutSection = () => {
	return (
		<div>
			<Title
				styles={`${styles.headingh1} pb-4 md:w-[70%] w-[100%]`}
				textMain={`About Us`}
			/>
			<SubTitle
				styles={`${styles.paragraph} pb-[40px] md:w-[70%] w-[100%]  ss:w-[80%] text-[20px] font-normal `}
				text='Our mission is simple: to empower businesses with the right technology solutions that drive growth, enhance efficiency, and foster innovation. We are committed to delivering exceptional value, exceptional service, and exceptional results.'
			/>
		</div>
	)
}
