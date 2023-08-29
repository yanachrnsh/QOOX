import { styles } from '../../constants/styles-constants'
import { Button } from '../Button/button.component'
import { Title } from '../Title/title.component'
import { SubTitle } from '../SubTitle/subtitle.component'
import { SubTitleTop } from '../SubTitleTop/subtitle-top.component'

export const CardText = () => {
	return (
		<div
			className={`${styles.paddingX} flex flex-col items-start  max-w-7xl md:m-auto`}
		>
			<SubTitleTop
				textMain='Welcome to'
				textSpan='QOOX'
				styles={`${styles.paragraph} md:w-[70%] w-[100%]`}
			/>
			<Title
				styles={`${styles.headingh1} pb-4 md:w-[70%] w-[100%]`}
				textMain={`Powerful IT Solutions to Drive Your Business`}
				textSpan='Success'
			/>
			<SubTitle
				styles={`${styles.paragraph} pb-[40px] md:w-[70%] w-[100%]  ss:w-[80%] text-[20px] font-normal `}
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
	)
}
