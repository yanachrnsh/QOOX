import { FC } from 'react'

export interface IButton {
	text: string
	svg?: string
}

export const Button: FC<IButton> = ({ text, svg }) => {
	return (
		<div className=' w-[100%]'>
			<button className='ss:w-[30%] min-w-[200px] max-w-[100%] text-lightPrimary bg-brandColorGreen py-2 px-6 rounded text-center '>
				{text}
			</button>
		</div>
	)
}
