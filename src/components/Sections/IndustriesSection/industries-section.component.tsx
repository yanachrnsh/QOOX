import { useState, FC } from 'react'
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
	const [activeItems, setActiveItems] = useState<number[]>([0])

	return (
		<section
			id='industries'
			className={`${styles.gridCard} ${styles.paddingX} ${styles.paddingY}  max-w-7xl  md:mx-auto `}
		>
			<div className='self-center'>
				<ContainerSmall
					title={industries.title}
					paragraph={industries.paragraph}
					button={industries.button}
				/>
			</div>
			<DropdownList activeItems={activeItems} setActiveItems={setActiveItems} />
		</section>
	)
}

interface DropdownListProps {
	activeItems: number[]
	setActiveItems(activeItems: number[]): void
}

const DropdownList: FC<DropdownListProps> = ({
	activeItems,
	setActiveItems
}) => {
	return (
		<div className={`flex flex-col gap-4 pt-12 md:gap-6 md:pt-24 `}>
			{industriesDropdown.map((item, index) => (
				<div key={item.id}>
					<DropdownItem
						title={item.title}
						paragraph={item.paragraph}
						activeItems={activeItems}
						index={index}
						setActiveItems={setActiveItems}
					/>
					<Divider />
				</div>
			))}
		</div>
	)
}

interface DropdownItemProps {
	title: string
	paragraph: string
	activeItems: number[]
	index: number
	setActiveItems(activeItems: number[]): void
}

const DropdownItem: FC<DropdownItemProps> = ({
	title,
	paragraph,
	activeItems,
	index,
	setActiveItems
}) => {
	return (
		<div className={`flex flex-col gap-4 pb-4 md:pb-6`}>
			<div className=' flex flex-row justify-between items-center transition'>
				<h3 className={`${styles.headingh3} flex-1`}>{title}</h3>
				{activeItems.includes(index) ? (
					<BsFillArrowDownCircleFill
						className='text-brandColorGreen'
						size={24}
						onClick={() =>
							setActiveItems(prev => prev.filter(item => item !== index))
						}
					/>
				) : (
					<BsFillArrowUpCircleFill
						className='text-brandColorGreen'
						size={24}
						onClick={() => setActiveItems(prev => [...prev, index])}
					/>
				)}
			</div>
			<p
				className={
					activeItems.includes(index)
						? 'active animate-fade-down'
						: 'hidden transition ease-out'
				}
				key={index}
			>
				{paragraph}
			</p>
		</div>
	)
}

const Divider = () => {
	return (
		<div className={`border border-solid bg-lightPrimary  w-[100%] `}></div>
	)
}
