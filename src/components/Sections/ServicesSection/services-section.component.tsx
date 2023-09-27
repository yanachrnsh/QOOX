import { Title, Card, Scroll } from '../../index'
import { userScrollCarousel } from '../../../hooks/userScrollCarousel'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { layout, card, styles } from '../../../constants/styles-constants'
import { services } from '../../../constants/content-constants'

export const ServicesSection = () => {
	const { scrollWidth, carousel } = userScrollCarousel()

	return (
		<section className={`${layout.sectionDark}`}>
			<div className='pb-[40px] lg:pb-[70px]'>
				<Title text='Our Services' />
			</div>

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

export const Button = ({ style = '' }) => {
	return (
		<div
			className={`${styles.flexCenter} text-lightPrimary p-9 bg-brandColorGreen relative rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20  lg:h-[100%] lg:mt-0 lg:mb-0 ${style}`}
		>
			<p className='z-10 mr-4'>Discover Our Expertise</p>
			<BsArrowUpRightCircleFill className=' bg-brandColorGreen' size={24} />
			{/* <div
				className={
					// refactor
					false
						? `bg-lightPrimary rounded-xl w-[100%] h-[100%] absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-200 ease-in z-5`
						: `bg-lightPrimar absolute top-1/2 right-0 -translate-y-1/2 rounded-full w-10 h-10 transition-all duration-200 ease-in z-5`
				}
			>
				<img
					src={icon}
					alt='icon'
					className={`bg-lightPrimary opacity-1/2 w-10 h-10 absolute top-1/2 right-0 pr-5 -translate-y-1/2 rounded-full z-5 pointer-events-none`}
				></img>
			</div> */}
		</div>
	)
}
