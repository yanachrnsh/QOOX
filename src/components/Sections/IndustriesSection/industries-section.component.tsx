import { industries } from '../../../constants/content-constants'
import { ContainerSmall } from '../../index'

export const IndustriesSection = () => {
	return (
		<section>
			<ContainerSmall
				title={industries.title}
				paragraph={industries.paragraph}
				button={industries.button}
			/>
		</section>
	)
}
