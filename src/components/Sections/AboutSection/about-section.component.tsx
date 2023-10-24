import { Card } from '../../index'
import { styles, card } from '../../../constants/styles-constants'
import {
	about,
	aboutTitleParagraph,
	CardAbout
} from '../../../constants/content-constants'
import { TitleParagraph } from '../../TitleParagraph/title-paragraph.component'

export const AboutSection = () => {
	return (
		<section id='about' className={`${styles.sectionCol} ${styles.paddingX}`}>
			<div className='lg:m-auto lg:max-w-[850px] lg:text-center'>
				<div className='pb-12 md:pb-[72px]'>
					<TitleParagraph
						title={aboutTitleParagraph.title}
						paragraph={aboutTitleParagraph.paragraph}
					/>
				</div>

				<h3
					className={`${styles.headingH3} pb-[32px] text-center md:pb-[40px]`}
				>
					Why choose us?
				</h3>
			</div>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
				{about.map((item: CardAbout) => (
					<Card
						src={item.src}
						title={item.title}
						text={item.text}
						key={item.id}
						cardStyles={{
							block: `${card.block} bg-light-grey text-dark-primary`,
							img: card.img,
							title: `${styles.headingH4} text-brand-green`,
							text: `${card.text} text-dark-primary'`
						}}
					/>
				))}
			</div>
		</section>
	)
}
