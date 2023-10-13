import { FC } from 'react'
import { Button, SubTitle } from '../../index'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { styles } from '../../../constants/styles-constants'
import { intro } from '../../../constants/content-constants'

export const IntroSection = () => {
	return (
		<section
			id='intro'
			className={`flex ${styles.paddingX} pt-[60px] md:pt-48 pb-[311px] sm:pb-[225px] bg-backgroundIntro bg-no-repeat bg-bottom md:bg-right max-w-7xl md:m-auto`}
		>
			<div className={`flex flex-col items-start justify-start md:w-[60%]`}>
				<SubTitle
					text={intro.subTitle.text}
					textColored={intro.subTitle.textColored}
				/>
				<div className={`${styles.headingH1} pb-4`}>
					<TitleLarge
						text={intro.title.text}
						textColored={intro.title.titleColored}
					/>
				</div>
				<div className='pb-6 md-10'>
					<Paragraph text={intro.paragraph.text} />
				</div>

				<div className='w-full sm:w-fit'>
					<Button text={intro.button.text} id={intro.button.id} />
				</div>
			</div>
		</section>
	)
}

export interface ITitle {
	text: string
	textColored?: string
}

export const TitleLarge: FC<ITitle> = ({ text, textColored }) => {
	return (
		<>
			<h1 className={`${styles.headingH1} pb-4 pt-2 max-w-[100%]`}>
				{text}
				<span className={textColored ? 'text-brandColorGreen' : 'hidden'}>
					{textColored}
				</span>
			</h1>
		</>
	)
}
