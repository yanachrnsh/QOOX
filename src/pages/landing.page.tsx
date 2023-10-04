import { useState } from 'react'
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
	ContactUsSection,
	Footer
} from '../components/Sections'

export const Landing = () => {

	const [casePageIndex, setCasePageIndex] = useState(0)

	return (
		<div className={`pt-6 text-darkPrimary`}>
			<Header />
			<IntroSection />
			<Divider />
			<AboutSection />
			<ServicesSection />
			<CaseStudiesSection casePageIndex ={casePageIndex} setCasePageIndex={setCasePageIndex}/>
			<Divider />
			<IndustriesSection />
			<IndustriesNeedsSection />
			<TechnologiesSection />
			<Divider />
			<ContactUsSection />
			<Divider />
			<Footer />
		</div>
	)
}
