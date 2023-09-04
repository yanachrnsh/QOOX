import { ContainerLarge } from '../../index'
import { container } from '../../../constants/styles-constants'
import { intro } from '../../../constants/content-constants'

export const IntroSection = () => {
	return (
		<section
			id='intro'
			className={`flex md:flex-row flex-col pt-[60px] pb-[300px] sm:pt-[160px] md:pb-[225px] bg-backgroundIntro bg-auto bg-no-repeat bg-bottom md:bg-right max-w-7xl md:m-auto`}
		>
			<div className={`${container.titleParagraphContainer}`}>
				<div className='sm:pr-[200px]'>
					<ContainerLarge
						subTitle={intro.subTitle}
						title={intro.title}
						paragraph={intro.paragraph}
						button={intro.button}
					/>
				</div>
			</div>
		</section>
	)
}
