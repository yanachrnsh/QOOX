import { FC } from 'react'
import { Button, Title, Paragraph, SubTitle } from '../index'
import { ITitle } from '../Title/title.component'
import { ISubTitle } from '../SubTitle/subtitle.component'
import { IParagraph } from '../Paragraph/paragraph.component'
import { IButton } from '../Button/button.component'

interface ContainerLarge extends ContainerSmall {
	subTitle: ISubTitle
}

interface ContainerSmall extends TitleParagraph {
	button: IButton
}

export const ContainerLarge: FC<ContainerLarge> = ({
	title,
	paragraph,
	button,
	subTitle
}) => {
	return (
		<>
			<SubTitle text={subTitle.text} textColored={subTitle.textColored} />
			<ContainerSmall title={title} paragraph={paragraph} button={button} />
		</>
	)
}

export const ContainerSmall: FC<ContainerSmall> = ({
	title,
	paragraph,
	button
}) => {
	return (
		<>
			<TitleParagraph title={title} paragraph={paragraph} />
			<div className='flex'>
			<Button text={button.text} id={button.id} svg={button.svg} />
			</div>

		</>
	)
}

interface TitleParagraph {
	title: ITitle
	paragraph: IParagraph
}

export const TitleParagraph: FC<TitleParagraph> = ({ title, paragraph }) => {
	return (
		<>
			<Title text={title.text} textColored={title.textColored} />
			<Paragraph
				text={paragraph.text}
				textColored={paragraph.textColored}
				textAfter={paragraph.textAfter}
			/>
		</>
	)
}
