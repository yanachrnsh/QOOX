import { FC } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

import { styles, hovers } from '../../constants/styles-constants'

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
				className={`${hovers.button.parent} hover:bg-brandColorGreenHover min-w-[200px] max-w-[100%] text-lightPrimary bg-brandColorGreen py-2 px-6 rounded text-center `}
			>
				<p
					className={` ${hovers.button.child} flex items-center justify-center gap-2`}
				>
					{text} {svg && <img src={svg} alt='arrow' />}
				</p>
			</a>
		</div>
	)
}

export const ButtonLarge = ({ style = '' }) => {
	return (
		<div
			className={`${styles.flexCenter} ${hovers.button.parent} text-lightPrimary p-9 bg-brandColorGreen hover:bg-brandColorGreenHover  relative rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20  lg:h-[100%] lg:mt-0 lg:mb-0 ${style}`}
		>
			<div className={`${hovers.button.child} flex`}>
				<p className='z-10 mr-4'>Discover Our Expertise</p>
				<BsArrowUpRightCircleFill
					className=' bg-brandColorGreen group-hover/button:bg-brandColorGreenHover '
					size={24}
				/>
				{/* <div className='absolute group-hover:animate-grow top-0 w-6 h-6 rounded-full bg-lightPrimary opacity-0 '></div> */}
			</div>
		</div>
	)
}
