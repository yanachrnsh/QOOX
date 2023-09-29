import { Header } from '../components/Header/header.component'
import { Divider } from '../components/Divider/divider.component'
import {
	IntroSection,
	AboutSection,
	ServicesSection,
	CaseStudiesSection,
	IndustriesSection,
	IndustriesNeedsSection,
	TechnologiesSection,
	ContactUsSection
} from '../components/Sections'

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
			<IndustriesNeedsSection />
			<TechnologiesSection />
			<Divider />
			<ContactUsSection />
			<Divider />
		</div>
	)
}
