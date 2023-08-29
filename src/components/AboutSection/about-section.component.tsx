import { Title } from '../Title/title.component'
import { SubTitle } from '../SubTitle/subtitle.component'
import { TitleSmall } from '../TitleSmall/title-small.component'
import { styles } from '../../constants/styles-constants'
import { Card } from '../Card/card.component'
import { about } from '../../constants/content-constants'

export const AboutSection = () => {
	return (
		<section
			className={`${styles.sectionCol} ${styles.paddingX} sm:text-center sm:items-center items-start`}
		>
			<Title
				styles={`${styles.headingh1} pb-4 md:w-[70%] w-[100%]`}
				textMain={`About Us`}
			/>
			<SubTitle
				styles={`${styles.paragraph} pb-[48px] sm:pb-[72px] md:w-[70%] w-[100%] ss:w-[80%] font-normal `}
				text='Our mission is '
				textSpan='simple'
				textRest=': to empower businesses with the right technology solutions that drive growth, enhance efficiency, and foster innovation. We are committed to delivering exceptional value, exceptional service, and exceptional results.'
			/>
			<TitleSmall
				styles={`${styles.headingh3} pb-[32px] md:pb-[40px]`}
				text='Why choose us?'
			/>
			<div className='grid auto-cols-auto md:grid-cols-3 gap-4 md:gap-6'>
				{about.map((item: any) => (
					<Card src={item.src} title={item.title} text={item.text} />
				))}
			</div>
		</section>
	)
}