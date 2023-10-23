import { FC } from 'react'
import { AnchorButton, SubTitle } from '../../index'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { styles } from '../../../constants/styles-constants'
import { intro } from '../../../constants/content-constants'

export const IntroSection = () => {
	return (
		<section
			id='intro'
			className={`flex ${styles.paddingX} max-w-7xl bg-background-intro bg-bottom bg-no-repeat pb-[311px] pt-[60px] sm:pb-[225px] md:m-auto md:bg-right md:pt-48`}
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
				<div className='md-10 pb-6'>
					<Paragraph text={intro.paragraph.text} />
				</div>

				<div className='w-full sm:w-fit'>
					<AnchorButton text={intro.button.text} id={intro.button.id} />
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
			<h1 className={`${styles.headingH1} max-w-[100%] pb-4 pt-2`}>
				{text}
				<span className={textColored ? 'text-brand-green' : 'hidden'}>
					{textColored}
				</span>
			</h1>
		</>
	)
}
