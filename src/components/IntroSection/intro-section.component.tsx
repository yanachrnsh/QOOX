
import { CardText } from '../CardText/card-text.component'

export const IntroSection = () => {
	return (
		<section
			id='intro'
			className={`flex md:flex-row flex-col pt-[60px] pb-[300px] sm:pt-[160px] md:pb-[225px] bg-gifBackground bg-auto bg-no-repeat bg-bottom md:bg-right`}
		>
			<CardText />
		</section>
	)
}
