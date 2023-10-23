import { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import { Title, Card } from '../../index'
import { layout, card, styles } from '../../../constants/styles-constants'
import { services } from '../../../constants/content-constants'
import { DiscoverAnchorButton } from '../../AnchorButton/discover-anchor-button.component'

export const ServicesSection = () => {
	const carouselRef = useRef(null)
	useScroll({
		target: carouselRef
	})

	return (
		<section id='services' className='max-w-7xl md:mx-auto md:px-4'>
			<div className={`${layout.sectionDark}`}>
				<div className='pb-[40px] lg:pb-[70px]'>
					<Title text='Our Services' />
				</div>

				<div className='hidden lg:grid lg:grid-cols-3 lg:gap-6'>
					<ServicesCards />
					<DiscoverAnchorButton />
				</div>
				<motion.div className='lg:hidden ' ref={carouselRef}>
					<motion.div className='cursor-grab overflow-x-scroll sm:cursor-ew-resize'>
						<motion.div className='flex gap-4'>
							<ServicesCards />
						</motion.div>
					</motion.div>
					<DiscoverAnchorButton />
				</motion.div>
			</div>
		</section>
	)
}

const ServicesCards = () => {
	return (
		<>
			{services.map((service: any) => (
				<Card
					key={service.id}
					cardStyles={{
						block: `${card.block} min-w-[300px] bg-dark-grey  text-light-primary `,
						img: card.img,
						title: `${styles.headingH4} text-brand-green`,
						text: `${card.text}`
					}}
					text={service.text}
					title={service.title}
				/>
			))}
		</>
	)
}
