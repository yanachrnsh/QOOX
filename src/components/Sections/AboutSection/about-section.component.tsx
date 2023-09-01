import { Card } from '../../index'
import { styles, card } from '../../../constants/styles-constants'
import {
	about,
	aboutTitleParagraph
} from '../../../constants/content-constants'
import { TitleParagraph } from '../../SectionContainer/section-container.component'

export const AboutSection = () => {
	return (
		<section
			className={`${styles.sectionCol} ${styles.paddingX} sm:text-center sm:items-center items-start`}
		>
			<TitleParagraph
				title={aboutTitleParagraph.title}
				paragraph={aboutTitleParagraph.paragraph}
			/>
			<h3 className={`${styles.headingh2} pb-[32px] md:pb-[40px]`}>
				<p>"Why choose us?"</p>
			</h3>
			<div className='grid auto-cols-auto sm:grid-cols-2 md:grid-cols-3 sm:last:col-span-2 gap-4 md:gap-6'>
				{about.map((item: any) => (
					<Card
						src={item.src}
						title={item.title}
						text={item.text}
						key={item.id}
						cardStyles={{
							block: card.blockLightGrey,
							img: card.img,
							title: card.titleGreen,
							text: card.textDark
						}}
					/>
				))}
			</div>
		</section>
	)
}
