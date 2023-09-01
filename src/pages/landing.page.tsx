import { Header } from '../components/Header/header.component'
import { IntroSection } from '../components/Sections/IntroSection/intro-section.component'
import { Divider } from '../components/Divider/divider.component'
import { AboutSection } from '../components/Sections/AboutSection/about-section.component'
import { ServicesSection } from '../components/Sections/ServicesSection/services-section.component'
import { CaseStudiesSection } from '../components/Sections/CaseStudiesSection/case-studies-section'
import { IndustriesSection } from '../components/Sections/IndustriesSection/industries-section.component'

export const Landing = () => {
	return (
		<div className={`pt-6 text-darkPrimary`}>
			<Header />
			<IntroSection />
			<Divider />
			<AboutSection />
			<ServicesSection />
			<CaseStudiesSection />
			<Divider />
			<IndustriesSection />
		</div>
	)
}
