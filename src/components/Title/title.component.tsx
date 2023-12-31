import { FC } from 'react'
import { styles } from '../../constants/styles-constants'

export interface ITitle {
	text: string
	textColored?: string
}

export const Title: FC<ITitle> = ({ text, textColored = '' }) => {
	return (
		<>
			<h2 className={`${styles.headingH2} max-w-[100%] pb-4 pt-2`}>
				{text}
				<span className={textColored ? 'text-brand-green' : 'hidden'}>
					{textColored}
				</span>
			</h2>
		</>
	)
}
