import { useState, useEffect, useRef } from 'react'
import { Title, Card, Scroll } from '../../index'
import {  layout, card } from '../../../constants/styles-constants'
import { services } from '../../../constants/content-constants'
import icon from '../../../assets/arrow-right.svg'

export const ServicesSection = () => {
	const [scrollWidth, setScrollWidth] = useState(0)
	const carousel = useRef<HTMLInputElement>(null)

	useEffect(() => {
		carousel.current !== null &&
			setScrollWidth(
				carousel.current.scrollWidth - carousel.current?.offsetWidth
			)
	}, [])

	return (
		<section className={`${layout.sectionDark}`}>
			<Title text='Our Services' />

			<div className='hidden lg:grid lg:grid-cols-3 lg:gap-6'>
				<ServicesCard />
				<Button />
			</div>
			<div className='lg:hidden'>
				<Scroll carousel={carousel} width={scrollWidth}>
					<ServicesCard />
				</Scroll>
				<Button />
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

const Button = () => {
	return (
		<div className='p-9 bg-brandColorGreen relative rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20  lg:h-[100%] lg:mt-0 lg:mb-0'>
			<p className=' text-brandColorGreen z-10'>Discover Our Expertise</p>
			<div
				className={
					// refactor
					false
						? `bg-lightPrimary rounded-xl w-[100%] h-[100%] absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-200 ease-in z-5`
						: `bg-lightPrimar absolute top-1/2 right-0 -translate-y-1/2 rounded-full w-10 h-10 transition-all duration-200 ease-in z-5`
				}
			>
				<img
					src={icon}
					className={`bg-lightPrimary opacity-1/2 w-10 h-10 absolute top-1/2 right-0 pr-5 -translate-y-1/2 rounded-full z-5 pointer-events-none`}
				></img>
			</div>
		</div>
	)
}
