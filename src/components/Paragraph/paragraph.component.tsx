import { FC } from 'react'
import { styles } from '../../constants/styles-constants'

export interface IParagraph {
	text: string
	textColored?: string
	textAfter?: string
}

export const Paragraph: FC<IParagraph> = ({
	text,
	textColored = '',
	textAfter = ''
}) => {
	return (
		<>
			<p className={`${styles.paragraph} pb-[40px] max-w-[100%]`}>
				{text}
				<span className='text-brandColorGreen font-bold'>{textColored}</span>
				{textAfter}
			</p>
		</>
	)
}
