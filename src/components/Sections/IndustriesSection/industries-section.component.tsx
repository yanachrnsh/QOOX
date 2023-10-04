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
	const [activeItems, setActiveItems] = useState<number[]>([0])

	return (
		<section
			id='industries'
			className={`${styles.gridCard} ${styles.paddingX} ${styles.paddingY}  max-w-7xl  md:mx-auto `}
		>
			<div className='self-center pb-[100px] md:py-[200px]'>
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

const DropdownList = ({
	activeItems,
	setActiveItems
}: {
	activeItems: number[]
	setActiveItems: Dispatch<SetStateAction<number[]>>
}) => {
	return (
		<div className={`flex flex-col gap-4 md:gap-6 md:pt-24`}>
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
	setActiveItems: Dispatch<SetStateAction<number[]>>
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
				<h3 className={`${styles.headingH3} flex-1`}>{title}</h3>
				{activeItems.includes(index) ? (
					<BsFillArrowDownCircleFill
						className='text-brandColorGreen cursor-pointer '
						size={24}
						onClick={() =>
							setActiveItems(prev => prev.filter(item => item !== index))
						}
					/>
				) : (
					<BsFillArrowUpCircleFill
						className='text-brandColorGreen cursor-pointer'
						size={24}
						onClick={() => setActiveItems(prev => [...prev, index])}
					/>
				)}
			</div>
			<p
				className={` ${
					activeItems.includes(index) ? 'max-h-40 ' : 'max-h-0 opacity-0'
				} transition-all duration-1000 ease-in-out`}
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
