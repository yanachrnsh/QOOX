import { FC } from 'react'
import { Scroll } from '../../index'
import { layout, card, styles } from '../../../constants/styles-constants'
import { userScrollCarousel } from '../../../hooks/userScrollCarousel'
import {
	industriesNeeds,
	industriesNeedsCards
} from '../../../constants/content-constants'
import { TitleParagraph } from '../../SectionContainer/section-container.component'
import { Card } from '../..'

export const IndustriesNeedsSection: FC = () => {
	const { scrollWidth, carousel } = userScrollCarousel()
	return (
		<section className={`${layout.sectionDark} bg-top`}>
			<div className='lg:text-center lg:max-w-[850px] lg:m-auto'>
				<TitleParagraph
					title={industriesNeeds.title}
					paragraph={industriesNeeds.paragraph}
				/>
			</div>

			<div className='hidden lg:flex '>
				<Scroll carousel={carousel} width={scrollWidth}>
					<IndustriesNeedsCards />
				</Scroll>
			</div>
			<div className='grid grid-col-1 gap-4 lg:hidden'>
				<IndustriesNeedsCards />
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
						block: `${styles.flexCard} gap-4 bg-inherit pr-6 pb-6 lg:min-w-[500px] border-b-[1px] border-strokerLighter lg:border-r-[1px] lg:border-b-0`,
						img: card.img,
						title: `${styles.headingH4} text-lightPrimary`,
						text: `${card.text} ${styles.paragraph} text-lightPrimary`
					}}
				/>
			))}
		</>
	)
}
