import { Navbar } from '../components/Navbar/navbar.component'
import { IntroSection } from '../components/IntroSection/intro-section.component'
import { Divider } from '../components/Divider/divider.component'
import { AboutSection } from '../components/AboutSection/about-section.component'
import { ServicesSection } from '../components/ServicesSection/services-section.component'

export const Landing = () => {
	return (
		<div className={`pt-6 text-darkPrimary`}>
			<Navbar />
			<IntroSection />
			<Divider/>
			<AboutSection />
			<ServicesSection/>
		</div>
	)
}
