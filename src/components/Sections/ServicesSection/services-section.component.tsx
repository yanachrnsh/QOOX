import { Title, Card, Scroll } from '../../index'
import { userScrollCarousel } from '../../../hooks/userScrollCarousel'

import { layout, card, styles } from '../../../constants/styles-constants'
import { services } from '../../../constants/content-constants'
import { DiscoverAnchorButton } from '../../AnchorButton/discover-anchor-button.component'

export const ServicesSection = () => {
	const { scrollWidth, carousel } = userScrollCarousel()

	return (
		<section id='services' className='max-w-7xl md:mx-auto md:px-4'>
			<div className={`${layout.sectionDark}`}>
				<div className='pb-[40px] lg:pb-[70px]'>
					<Title text='Our Services' />
				</div>

				<div className='hidden lg:grid lg:grid-cols-3 lg:gap-6'>
					<ServicesCard />
					<DiscoverAnchorButton />
				</div>
				<div className='lg:hidden'>
					<Scroll carousel={carousel} width={scrollWidth}>
						<ServicesCard />
					</Scroll>
					<DiscoverAnchorButton />
				</div>
			</div>
		</section>
	)
}

const ServicesCard = () => {
	return (
		<>
			{services.map((service: any) => (
				<Card
					key={service.id}
					cardStyles={{
						block: `${card.block} min-w-[300px] bg-darkGrey  text-lightPrimary `,
						img: card.img,
						title: `${styles.headingH4} text-brandColorGreen`,
						text: `${card.text}`
					}}
					text={service.text}
					title={service.title}
				/>
			))}
		</>
	)
}
