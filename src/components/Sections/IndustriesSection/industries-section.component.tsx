import { useState, FC, SetStateAction, Dispatch } from 'react'
import {
	BsFillArrowUpCircleFill,
	BsFillArrowDownCircleFill
} from 'react-icons/bs'
import { AnchorButton } from '../../AnchorButton/anchor-button.component'
import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
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
			className={`grid grid-cols-1 md:grid-cols-2 ${styles.paddingX} ${styles.paddingY}  max-w-7xl gap-12 md:mx-auto md:gap-[8.25rem]`}
		>
			<div className='self-center md:pb-[221px] md:pt-[196px]'>
				<Title text={industries.title.text} />
				<div className='pb-[27px] md:pb-10'>
					<Paragraph
						text={industries.paragraph.text}
						textColored={industries.paragraph.textColored}
						textAfter={industries.paragraph.textAfter}
					/>
				</div>
				<div className='w-fit'>
					<AnchorButton
						text={industries.button.text}
						id={industries.button.id}
					/>
				</div>
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
	setActiveItem: Dispatch<SetStateAction<number>>
}

const DropdownItem: FC<DropdownItemProps> = ({
	title,
	paragraph,
	activeItem,
	index,
	setActiveItem
}) => {
	return (
		<div
			className={`flex flex-col border-b border-solid border-stroke-darker pb-4 md:pb-6`}
		>
			<a
				className={`flex flex-row items-center justify-between pb-4 `}
				onClick={() => setActiveItem(prev => (prev === index ? -1 : index))}
			>
				<h3 className={`${styles.headingH3} flex-1`}>{title}</h3>
				{index !== activeItem ? (
					<BsFillArrowDownCircleFill
						className='cursor-pointer text-brand-green '
						size={24}
					/>
				) : (
					<BsFillArrowUpCircleFill
						className='cursor-pointer text-brand-green'
						size={24}
					/>
				)}
			</a>
			<div
				className={` ${
					index === activeItem ? 'max-h-60 ' : 'max-h-0 opacity-0'
				} overflow-hidden transition-all duration-300 ease-linear`}
				key={index}
			>
				<p className='my-4'>{paragraph}</p>
			</div>
		</div>
	)
}
