import { FC } from 'react'
import arrowIcon from '../../assets/arrow-right-top.svg'

import { styles, hovers } from '../../constants/styles-constants'

export interface IButton {
	text: string
	svg?: string
	id: string
	styles?: string
}

export const Button: FC<IButton> = ({ text, svg, id, styles }) => {
	return (
		<a
			href={`#${id}`}
			className={`${hovers.button.parent} ${hovers.backgroundHoverGreen} flex items-center justify-center min-w-[200px] max-w-[100%] text-lightPrimary py-2 px-6 rounded text-center ${styles} `}
		>
			<p
				className={` ${hovers.button.child} flex items-center justify-center gap-2`}
			>
				{text} {svg && <img src={svg} alt='arrow w-5 h-5' />}
			</p>
		</a>
	)
}

export const ButtonLarge = ({ style = '' }) => {
	return (
		<a
			href='#cases'
			className={`${hovers.backgroundHoverGreen} flex items-center justify-center min-w-[200px] max-w-[100%] text-lightPrimary py-2 px-6 rounded text-center ${styles.flexCenter} group/large relative py-9 px-9 rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20 lg:h-[100%] lg:mt-0 lg:mb-0 overflow-hidden  ${style} `}
		>
			<p className={`flex items-center justify-center relative `}>
				<span className='z-20 mr-6 group-hover/large:text-brandColorGreen'>
					Discover Our Expertise
				</span>
				<img
					src={arrowIcon}
					alt='arrow'
					className='absolute -right-4 rounded-full z-20 hover:text-brandColorGreen '
				></img>
				<div className=' bg-lightPrimary absolute -right-4 w-8 h-8 rounded-full transition duration-500 ease-in-out group-hover/large:scale-[3500%] z-10'></div>
			</p>
		</a>
	)
}
