import { FC, useRef } from 'react'
import { layout, card, styles } from '../../../constants/styles-constants'
import { useScroll, motion } from 'framer-motion'
import {
	industriesNeeds,
	industriesNeedsCards
} from '../../../constants/content-constants'
import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { Card } from '../..'

export const IndustriesNeedsSection: FC = () => {
	const carouselRef = useRef(null)
	useScroll({
		target: carouselRef
	})

	return (
		<section className='max-w-7xl md:mx-auto md:px-4'>
			<div className={`${layout.sectionDark} bg-right-top`}>
				<div className='lg:m-auto lg:max-w-[850px] lg:text-center'>
					<Title text={industriesNeeds.title.text} />
					<div className='pb-12 md:pb-[72px]'>
						<Paragraph
							text={industriesNeeds.paragraph.text}
							textColored={industriesNeeds.paragraph.textColored}
							textAfter={industriesNeeds.paragraph.textAfter}
						/>
					</div>
				</div>

				<div className='hidden lg:flex ' ref={carouselRef}>
					<motion.div className='cursor-ew-resize overflow-x-scroll'>
						<motion.div className='flex gap-4'>
							<IndustriesNeedsCards />
						</motion.div>
					</motion.div>
				</div>
				<div className='grid-col-1 grid gap-4 lg:hidden'>
					<IndustriesNeedsCards />
				</div>
			</div>
		</section>
	)
}

const IndustriesNeedsCards = () => {
	return (
		<>
			{industriesNeedsCards.map(item => (
				<Card
					key={item.id}
					title={item.title}
					text={item.text}
					src={item.src}
					cardStyles={{
						block: `${styles.flexCard} gap-4 bg-inherit pr-6 pb-6 lg:min-w-[500px] border-b border-stroker-lighter lg:border-r lg:border-b-0`,
						img: `w-[48px] h-[48px]`,
						title: `${styles.headingH4} text-light-primary`,
						text: `${card.text} text-light-primary`
					}}
				/>
			))}
		</>
	)
}
