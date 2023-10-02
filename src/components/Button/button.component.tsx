import { FC } from 'react'

export interface IButton {
	text: string
	svg?: string
	id: string
}

export const Button: FC<IButton> = ({ text, svg, id }) => {
	return (
		<div className='flex'>
			<a
				href={`#${id}`}
				className='min-w-[200px] max-w-[100%] text-lightPrimary bg-brandColorGreen py-2 px-6 rounded text-center cursor-pointer flex items-center justify-center gap-2'
			>
				{text}
				{svg && <img src={svg} alt='arrow' />}
			</a>
		</div>
	)
}
