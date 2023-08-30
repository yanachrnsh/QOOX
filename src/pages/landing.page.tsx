import { Header } from '../components/Header/header.component'
import { IntroSection } from '../components/Sections/IntroSection/intro-section.component'
import { Divider } from '../components/Divider/divider.component'
import { AboutSection } from '../components/Sections/AboutSection/about-section.component'
import { ServicesSection } from '../components/Sections/ServicesSection/services-section.component'

export const Landing = () => {
	return (
		<div className={`pt-6 text-darkPrimary`}>
			<Header />
			<IntroSection />
			<Divider />
			<AboutSection />
			<ServicesSection />
		</div>
	)
}
