import { Title } from '../Title/title.component'
import { styles, layout } from '../../constants/styles-constants'
import { Card } from '../Card/card.component'
import { services } from '../../constants/content-constants'

export const ServicesSection = () => {
	return (
		<section className={`${layout.sectionDark}`}>
			<Title
				textMain='Our Services'
				styles={`${styles.headingh1} ${styles.sectionCol}`}
			/>
			<div>
				{services.map((service: any) => (
					<Card
						key={service.id}
						cardStyles={`bg-surfaceDarkSecondary`}
						text={service.text}
						title={service.title}
					/>
				))}
			</div>
		</section>
	)
}
