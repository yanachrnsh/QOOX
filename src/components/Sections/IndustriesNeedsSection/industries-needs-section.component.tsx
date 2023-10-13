import { FC } from 'react'
import { Scroll } from '../../index'
import { layout, card, styles } from '../../../constants/styles-constants'
import { userScrollCarousel } from '../../../hooks/userScrollCarousel'
import {
	industriesNeeds,
	industriesNeedsCards
} from '../../../constants/content-constants'
import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { Card } from '../..'

export const IndustriesNeedsSection: FC = () => {
	const { scrollWidth, carousel } = userScrollCarousel()
	return (
		<section className='max-w-7xl md:mx-auto md:px-4'>
			<div className={`${layout.sectionDark} bg-right-top`}>
				<div className='lg:text-center lg:max-w-[850px] lg:m-auto'>
					<Title text={industriesNeeds.title.text} />
					<div className='pb-12 md:pb-[72px]'>
						<Paragraph
							text={industriesNeeds.paragraph.text}
							textColored={industriesNeeds.paragraph.textColored}
							textAfter={industriesNeeds.paragraph.textAfter}
						/>
					</div>
				</div>

				<div className='hidden lg:flex '>
					<Scroll carousel={carousel} width={scrollWidth}>
						<IndustriesNeedsCards />
					</Scroll>
				</div>
				<div className='grid grid-col-1 gap-4 lg:hidden'>
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
						block: `${styles.flexCard} gap-4 bg-inherit pr-6 pb-6 lg:min-w-[500px] border-b-[1px] border-strokerLighter lg:border-r-[1px] lg:border-b-0`,
						img: `w-[48px] h-[48px]`,
						title: `${styles.headingH4} text-lightPrimary`,
						text: `${card.text} text-base text-lightPrimary`
					}}
				/>
			))}
		</>
	)
}
