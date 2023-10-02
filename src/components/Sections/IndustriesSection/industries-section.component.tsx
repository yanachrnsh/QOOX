import { useState, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ContainerSmall } from '../../index'
import {
	BsFillArrowUpCircleFill,
	BsFillArrowDownCircleFill
} from 'react-icons/bs'
import {
	industries,
	industriesDropdown
} from '../../../constants/content-constants'
import { styles } from '../../../constants/styles-constants'

export const IndustriesSection: FC = () => {
	const [activeItemIndex, setActiveItemIndex] = useState<number>(0)
	return (
		<section
			id='industries'
			className={`${styles.gridCard} ${styles.paddingX} ${styles.paddingY}  max-w-7xl  md:mx-auto`}
		>
			<div>
				<ContainerSmall
					title={industries.title}
					paragraph={industries.paragraph}
					button={industries.button}
				/>
			</div>
			<DropdownList
				activeItemIndex={activeItemIndex}
				setActiveItemIndex={setActiveItemIndex}
			/>
		</section>
	)
}

interface DropdownListProps {
	activeItemIndex: number
	setActiveItemIndex: (index: number) => void
}

const DropdownList: FC<DropdownListProps> = ({
	activeItemIndex,
	setActiveItemIndex
}) => {
	return (
		<div className={`flex flex-col gap-4 md:gap-6 `}>
			{industriesDropdown.map((item, index) => (
				<div key={item.id}>
					<DropdownItem
						title={item.title}
						paragraph={item.paragraph}
						activeItemIndex={activeItemIndex}
						index={index}
						setActiveItemIndex={setActiveItemIndex}
					/>
					<Divider />
				</div>
			))}
		</div>
	)
}

const boxAnimation = {
	initial: {
		opacity: 0,
		height: 0
	},
	animate: { opacity: 1, height: 'auto' },
	exit: {
		opacity: 0,
		height: 0,
		transition: { duration: 0.2 }
	},
	transition: { duration: 0.4, ease: 'easeInOut' }
}

interface DropdownItemProps {
	title: string
	paragraph: string
	activeItemIndex: number
	index: number
	setActiveItemIndex: (index: number) => void
}

const DropdownItem: FC<DropdownItemProps> = ({
	title,
	paragraph,
	activeItemIndex,
	index,
	setActiveItemIndex
}) => {
	return (
		<motion.div className={`flex flex-col gap-4 pb-4 md:pb-6`}>
			<div className=' flex flex-row justify-between items-center'>
				<h3 className={`${styles.headingh3} flex-1`}>{title}</h3>
				{index === activeItemIndex ? (
					<BsFillArrowDownCircleFill
						className='text-brandColorGreen cursor-pointer'
						size={24}
						onClick={() => {
							index === activeItemIndex
								? setActiveItemIndex(-1)
								: setActiveItemIndex(index)
						}}
					/>
				) : (
					<BsFillArrowUpCircleFill
						className='text-brandColorGreen cursor-pointer'
						size={24}
						onClick={() => {
							setActiveItemIndex(index)
						}}
					/>
				)}
			</div>
			<AnimatePresence>
				{index === activeItemIndex && (
					<motion.p
						{...boxAnimation}
						key={index}
						className={`${styles.paragraph} font-normal `}
					>
						{paragraph}
					</motion.p>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

const Divider = () => {
	return (
		<div className={`border border-solid bg-lightPrimary  w-[100%] `}></div>
	)
}
