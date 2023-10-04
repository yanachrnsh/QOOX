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
		<div className='flex'>
			<a
				href={`#${id}`}
				className={`${hovers.button.parent} hover:bg-brandColorGreenHover min-w-[200px] max-w-[100%] text-lightPrimary bg-brandColorGreen py-2 px-6 rounded text-center ${styles} `}
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
		<Button
			text='Discover Our Expertise'
			svg={arrowIcon}
			id='cases'
			styles={`${styles.flexCenter} relative py-9 px-9 rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20 lg:h-[100%] lg:mt-0 lg:mb-0 ${style}`}
		></Button>
	)
}
