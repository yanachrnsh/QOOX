import { FC } from 'react'

export interface ISubTitle {
	text: string
	textColored?: string
}

export const SubTitle: FC<ISubTitle> = ({ text, textColored }) => {
	return (
		<>
			<p className='max-w-[100%]'>
				{text}
				<span className='text-brandColorGreen font-bold'>{textColored}</span>
			</p>
		</>
	)
}
