import { ContainerLarge } from '../../index'
import { styles } from '../../../constants/styles-constants'
import { intro } from '../../../constants/content-constants'

export const IntroSection = () => {
	return (
		<section
			id='intro'
			className={`flex ${styles.paddingX} pt-[150px] pb-[311px] sm:pb-[225px] bg-backgroundIntro bg-no-repeat bg-bottom md:bg-right max-w-7xl md:m-auto`}
		>
			<div className={`flex flex-col items-start justify-start md:w-[60%]`}>
				<ContainerLarge
					subTitle={intro.subTitle}
					title={intro.title}
					paragraph={intro.paragraph}
					button={intro.button}
				/>
			</div>
		</section>
	)
}
