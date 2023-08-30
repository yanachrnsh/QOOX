import { Title } from '../../Title/title.component'
import { useState, useEffect, useRef } from 'react'
import { styles, layout, card } from '../../../constants/styles-constants'
import { Card } from '../../Card/card.component'
import { services } from '../../../constants/content-constants'
import { Scroll } from '../../Scroll/scroll.component'
import icon from '../../../assets/arrow-right.svg'


export const ServicesSection = () => {
	const [width, setWidth] = useState(0)
	const [isLgScreen, setIsLgScreen] = useState(false)
	 const svg = useRef<HTMLImageElement>(null)

	const carousel = useRef<HTMLInputElement>(null)

	const screenWidth = window.innerWidth

	useEffect(() => {
		carousel.current !== null &&
			setWidth(carousel.current.scrollWidth - carousel.current?.offsetWidth)

		screenWidth >= 1200 && setIsLgScreen(true)
	}, [])

	if (svg.current !== null) {
		console.log(svg.current.getBoundingClientRect())
	}

	return (
		<section className={`${layout.sectionDark}`}>
			<Title textMain='Our Services' styles={`${styles.headingh1} pb-10`} />
			<div className={isLgScreen ? 'grid grid-cols-3 gap-6' : ''}>
				{isLgScreen ? (
					<ServicesCard />
				) : (
					<Scroll carousel={carousel} width={width}>
						<ServicesCard />
					</Scroll>
				)}
				<div className='p-4 bg-brandColorGreen hover-overlay2 relative m-auto ease-in '>
					Discover Our Expertise
					<p>Text</p>
					<img
						ref={svg}
						src={icon}
						width='25px'
						height='24px'
						className='bg-lightPrimary'
					></img>
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
						block: card.blockDarkGrey,
						img: card.img,
						title: card.titleGreen,
						text: card.textLight
					}}
					text={service.text}
					title={service.title}
				/>
			))}
		</>
	)
}
