import { FC } from 'react'
import { Title, Paragraph } from '../index'
import { ITitle } from '../Title/title.component'
import { IParagraph } from '../Paragraph/paragraph.component'

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
