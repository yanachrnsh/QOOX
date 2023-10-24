import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { DiscoverAnchorButton } from '../../AnchorButton/discover-anchor-button.component'
import {
	technologies,
	technologiesCards
} from '../../../constants/content-constants'
import { styles } from '../../../constants/styles-constants'

export const TechnologiesSection = () => {
	const carouselRef = useRef(null)
	useScroll({
		target: carouselRef
	})

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
			<div className='items-start lg:m-auto lg:max-w-[850px] lg:items-center lg:text-center'>
				<Title text={technologies.title.text} />
				<div className='pb-12 md:pb-[72px]'>
					<Paragraph
						text={technologies.paragraph.text}
						textColored={technologies.paragraph.textColored}
						textAfter={technologies.paragraph.textAfter}
					/>
				</div>
			</div>
			<motion.div className='flex sm:hidden ' ref={carouselRef}>
				<motion.div className='cursor-grab overflow-x-scroll'>
					<motion.div className='grid w-[100%] grid-rows-2 gap-4'>
						<div className='flex  justify-between gap-4'>
							<TechnologiesCards cards={cardsFirstLine} />
						</div>
						<div className='flex justify-between gap-4'>
							<TechnologiesCards cards={cardsSecondLine} />
						</div>
					</motion.div>
				</motion.div>
			</motion.div>

			<div className='hidden w-[100%] grid-cols-8 gap-4 sm:grid  sm:grid-cols-4 lg:grid-cols-6 lg:gap-6 '>
				<TechnologiesCards cards={technologiesCards} />
			</div>
			<DiscoverAnchorButton style='flex lg:hidden' />
		</section>
	)
}

interface Cards {
	id: string
	svg: string
	title: string
}
const TechnologiesCards = ({ cards }: { cards: Cards[] }) => {
	return (
		<>
			{cards.map(card => (
				<div
					key={card.id}
					className={`flex min-w-[180px] flex-col items-start justify-center gap-2 rounded-lg bg-light-grey p-6 sm:min-w-fit`}
				>
					<img
						src={card.svg}
						alt={card.title}
						className='h-[40px] w-[40px]'
					></img>
					<span className={`${styles.span} `}>{card.title}</span>
				</div>
			))}
			<div className='col-span-2 hidden lg:flex  '>
				<DiscoverAnchorButton style='w-full lg:p-0 ' />
			</div>
		</>
	)
}
