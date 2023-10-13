import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { Ref, ReactNode, FC } from 'react'
import { motion } from 'framer-motion'
import { userScrollCarousel } from '../../../hooks/userScrollCarousel'
import { ButtonLarge } from '../../Button/button.component'
import {
	technologies,
	technologiesCards
} from '../../../constants/content-constants'
import { styles } from '../../../constants/styles-constants'

export const TechnologiesSection = () => {
	const { scrollWidth, carousel } = userScrollCarousel()

	const cardsFirstLine = technologiesCards.slice(
		0,
		technologiesCards.length / 2
	)
	const cardsSecondLine = technologiesCards.slice(
		technologiesCards.length / 2,
		technologiesCards.length
	)
	return (
		<section
			id='technologies'
			className={`${styles.sectionCol} ${styles.paddingX} `}
		>
			<div className='lg:text-center lg:max-w-[850px] lg:m-auto lg:items-center items-start'>
				<Title text={technologies.title.text} />
				<div className='pb-12 md:pb-[72px]'>
					<Paragraph
						text={technologies.paragraph.text}
						textColored={technologies.paragraph.textColored}
						textAfter={technologies.paragraph.textAfter}
					/>
				</div>
			</div>
			<div className='flex sm:hidden'>
				<TechnologiesCardCarousel carousel={carousel} scrollWidth={scrollWidth}>
					<div className='flex  justify-between gap-4'>
						<TechnologiesCard cards={cardsFirstLine} />
					</div>
					<div className='flex justify-between gap-4'>
						<TechnologiesCard cards={cardsSecondLine} />
					</div>
				</TechnologiesCardCarousel>
			</div>

			<div className='hidden sm:grid grid-cols-8 sm:grid-cols-4 lg:grid-cols-6  gap-4 lg:gap-6 w-[100%] '>
				<TechnologiesCard cards={technologiesCards} />
			</div>
			<ButtonLarge style='flex lg:hidden' />
		</section>
	)
}

interface Cards {
	id: string
	svg: string
	title: string
}
const TechnologiesCard = ({ cards }: { cards: Cards[] }) => {
	return (
		<>
			{cards.map(card => (
				<div
					key={card.id}
					className={`flex flex-col items-start justify-center p-6 gap-2 bg-lightGrey min-w-[180px] rounded-lg`}
				>
					<img
						src={card.svg}
						alt={card.title}
						className='w-[40px] h-[40px]'
					></img>
					<span className={`${styles.span} `}>{card.title}</span>
				</div>
			))}
			<div className='col-span-2 hidden lg:flex  '>
				<ButtonLarge style='w-full lg:p-0 ' />
			</div>
		</>
	)
}

interface TechnologiesCardCarousel {
	carousel: Ref<HTMLInputElement>
	scrollWidth: number
	children: ReactNode
}

const TechnologiesCardCarousel: FC<TechnologiesCardCarousel> = ({
	carousel,
	scrollWidth,
	children
}) => {
	return (
		<motion.div ref={carousel} className='cursor-grab overflow-hidden '>
			<motion.div
				drag='x'
				dragConstraints={{ right: 0, left: -scrollWidth }}
				className={`grid grid-rows-2 gap-4 w-[100%]`}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
