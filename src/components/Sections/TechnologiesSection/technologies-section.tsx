import { TitleParagraph } from '../../SectionContainer/section-container.component'
import {
	technologies,
	technologiesCards
} from '../../../constants/content-constants'
import { styles } from '../../../constants/styles-constants'

export const TechnologiesSection = () => {
	return (
		<section
			className={`${styles.sectionCol} ${styles.paddingX} lg:text-center lg:items-center items-start`}
		>
			<div className='lg:text-center lg:max-w-[850px] lg:m-auto'>
				<TitleParagraph
					title={technologies.title}
					paragraph={technologies.paragraph}
				/>
			</div>
			<div className='grid grid-col-8 lg:grid-cols-6'>
				<TechnologiesCard />
			</div>
		</section>
	)
}

const TechnologiesCard = () => {
	return (
		<>
			{technologiesCards.map(card => (
				<div className='flex flex-col items-start p-6 maw-w-[200px]'>
					<img
						src={card.svg}
						alt={card.title}
						className='w-[60px] h-[60px]'
					></img>
					<span>{card.title}</span>
				</div>
			))}
		</>
	)
}
