import { FC } from 'react'
import { motion } from 'framer-motion'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

import { styles } from '../../constants/styles-constants'

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
				className='min-w-[200px] max-w-[100%] text-lightPrimary bg-brandColorGreen hover:bg-brandColorGreenHover py-2 px-6 rounded text-center cursor-pointer flex items-center justify-center gap-2'
			>
				<motion.span
					whileHover={{ y: -1 }}
					initial={{ y: 0 }}
					exit={{ y: 0 }}
				>
					{text}
					{svg && <img src={svg} alt='arrow' />}
				</motion.span>
			</a>
		</div>
	)
}

export const ButtonLarge = ({ style = '' }) => {
	return (
		<div
			className={`${styles.flexCenter} text-lightPrimary p-9 bg-brandColorGreen relative rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20  lg:h-[100%] lg:mt-0 lg:mb-0 ${style}`}
		>
			<p className='z-10 mr-4'>Discover Our Expertise</p>
			<BsArrowUpRightCircleFill className=' bg-brandColorGreen' size={24} />
			{/* <div
				className={
					// refactor
					false
						? `bg-lightPrimary rounded-xl w-[100%] h-[100%] absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-200 ease-in z-5`
						: `bg-lightPrimar absolute top-1/2 right-0 -translate-y-1/2 rounded-full w-10 h-10 transition-all duration-200 ease-in z-5`
				}
			>
				<img
					src={icon}
					alt='icon'
					className={`bg-lightPrimary opacity-1/2 w-10 h-10 absolute top-1/2 right-0 pr-5 -translate-y-1/2 rounded-full z-5 pointer-events-none`}
				></img>
			</div> */}
		</div>
	)
}