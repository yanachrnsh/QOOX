import { useState, FC, SetStateAction, Dispatch } from 'react'
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
	const [activeItem, setActiveItem] = useState<number>(0)

	return (
		<section
			id='industries'
			className={`${styles.gridCard} ${styles.paddingX} ${styles.paddingY} max-w-7xl md:mx-auto gap-12 md:gap-[8.25rem]`}
		>
			<div className='self-center md:py-[156px]'>
				<ContainerSmall
					title={industries.title}
					paragraph={industries.paragraph}
					button={industries.button}
				/>
			</div>
			<DropdownList activeItem={activeItem} setActiveItem={setActiveItem} />
		</section>
	)
}

const DropdownList = ({
	activeItem,
	setActiveItem
}: {
	activeItem: number
	setActiveItem: Dispatch<SetStateAction<number>>
}) => {
	return (
		<div className={`flex flex-col gap-6 md:pt-24`}>
			{industriesDropdown.map((item, index) => (
				<DropdownItem
					key={item.id}
					title={item.title}
					paragraph={item.paragraph}
					activeItem={activeItem}
					index={index}
					setActiveItem={setActiveItem}
				/>
			))}
		</div>
	)
}

interface DropdownItemProps {
	title: string
	paragraph: string
	activeItem: number
	index: number
	key: string
	setActiveItem: Dispatch<SetStateAction<number>>
}

const DropdownItem: FC<DropdownItemProps> = ({
	title,
	paragraph,
	activeItem,
	index,
	setActiveItem,
	key
}) => {
	return (
		<div
			key={key}
			className={`flex flex-col pb-4 md:pb-6 border-b border-solid border-strokeDarker`}
		>
			<div className={`flex flex-row justify-between items-center pb-4 `}>
				<h3 className={`${styles.headingH3} flex-1`}>{title}</h3>
				{index !== activeItem ? (
					<BsFillArrowDownCircleFill
						className='text-brandColorGreen cursor-pointer '
						size={24}
						onClick={() => setActiveItem(index)}
					/>
				) : (
					<BsFillArrowUpCircleFill
						className='text-brandColorGreen cursor-pointer'
						size={24}
						onClick={() => setActiveItem(prev => (prev === index ? -1 : index))}
					/>
				)}
			</div>
			<p
				className={` ${
					index === activeItem ? 'max-h-40 ' : 'max-h-0 opacity-0'
				} transition-all duration-700 ease-in-out`}
				key={index}
			>
				{paragraph}
			</p>
		</div>
	)
}
