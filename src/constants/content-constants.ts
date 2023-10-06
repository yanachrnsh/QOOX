import {
	appleSet,
	arrowRight,
	industriesNeedsKnowledge,
	industriesNeedsApproach,
	industriesNeedsScalable,
	industriesNeedsSecurity,
	ipadPro,
	iphoneCase,
	provenExpertise,
	reliabilityTrust,
	html,
	tailoredSolutions,
	amazonAWS,
	angular,
	docker,
	elasticssearch,
	hibernate,
	java,
	JS,
	kafka,
	kubernetes,
	mongodb,
	oracle,
	postgresql,
	python,
	react,
	spring
} from '@/assets/index'

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'services',
		title: 'Services'
	},
	{
		id: 'industries',
		title: 'Industries'
	},
	{
		id: 'technologies',
		title: 'Technologies'
	},
	{
		id: 'contacts',
		title: 'Contacts'
	}
]

export const services = [
	{
		id: 'service-1',
		title: 'Software Development',
		text: 'Harness the power of custom software tailored to your unique business needs. Our experienced developers leverage cutting-edge technologies to build scalable and efficient software solutions that streamline your operations and accelerate your business growth.'
	},
	{
		id: 'service-2',
		title: 'Customer Support',
		text: 'We understand the importance of delivering outstanding customer experiences. Our customer support solutions ensure prompt and effective assistance, enhancing customer satisfaction and loyalty.'
	},
	{
		id: 'service-3',
		title: 'Emergency IT Support / Tech Support',
		text: 'Count on us to be there when you need us the most. Our emergency IT support services provide rapid response and expert troubleshooting, minimizing downtime and ensuring your systems are up and running in no time.'
	},
	{
		id: 'service-4',
		title: 'Web Development Services',
		text: 'We specialize in creating dynamic and engaging websites that captivate users and drive conversions. Our web development solutions are designed to enhance your online presence and deliver exceptional user experiences.'
	},
	{
		id: 'service-5',
		title: 'UI Development Services / UX-UI Design',
		text: 'User-centric design is at the heart of what we do. Our UI development and UX-UI design services combine aesthetic appeal with intuitive functionality, creating interfaces that captivate users and enhance their overall experience.'
	}
]

export const about = [
	{
		id: 'about-1',
		src: `${provenExpertise}`,
		title: 'Proven Expertise',
		text: 'With a track record of successful projects and satisfied clients, we bring a wealth of expertise and industry knowledge to the table. Our team of professionals stays up to date with the latest trends and technologies to deliver results that exceed your expectations.'
	},
	{
		id: 'about-2',
		src: `${tailoredSolutions}`,
		title: 'Tailored Solutions',
		text: 'We understand that every business is unique, and we take a personalized approach to address your specific requirements. Our solutions are tailored to your goals, ensuring that you get the most out of your technology investment.'
	},
	{
		id: 'about-3',
		src: `${reliabilityTrust}`,
		title: 'Reliability and Trust',
		text: 'We pride ourselves on being a reliable partner you can trust. Our transparent communication, commitment to deadlines, and strong work ethic form the foundation of our long-lasting client relationships.'
	}
]

export const caseStudies = [
	{
		id: 'case-study-1',
		src: `${iphoneCase}`,
		title: {
			text: 'Name of a Project'
		},
		paragraph: {
			text: 'Lorem ipsum dolor sit amet consectetur. Posuere pellentesque morbi placerat nisl et ornare. Feugiat nulla augue est orci lacinia diam montes tristique maecenas. Lacus vel sit est volutpat. Blandit bibendum vitae risus fermentum pretium.'
		},

		subTitle: {
			text: 'Type of Project'
		},
		button: {
			text: 'View Full Case',
			id: 'cases',
			svg: `${arrowRight}`
		}
	},
	{
		id: 'case-study-2',
		src: `${appleSet}`,
		title: {
			text: 'Name of a Project 2'
		},
		paragraph: {
			text: 'Lorem ipsum dolor sit amet consectetur. Posuere pellentesque morbi placerat nisl et ornare. Feugiat nulla augue est orci lacinia diam montes tristique maecenas. Lacus vel sit est volutpat. Blandit bibendum vitae risus fermentum pretium.'
		},

		subTitle: {
			text: 'Type of Project 2'
		},
		button: {
			text: 'View Full Case',
			id: 'cases',
			svg: `${arrowRight}`
		}
	},
	{
		id: 'case-study-3',
		src: `${ipadPro}`,
		title: {
			text: 'Name of a Project 3'
		},
		paragraph: {
			text: 'Lorem ipsum dolor sit amet consectetur. Posuere pellentesque morbi placerat nisl et ornare. Feugiat nulla augue est orci lacinia diam montes tristique maecenas. Lacus vel sit est volutpat. Blandit bibendum vitae risus fermentum pretium.'
		},

		subTitle: {
			text: 'Type of Project 3'
		},
		button: {
			text: 'View Full Case',
			id: 'cases',
			svg: `${arrowRight}`
		}
	}
]

export const aboutTitleParagraph = {
	id: 'about-title-paragraph-1',
	title: {
		text: 'About Us'
	},
	paragraph: {
		text: 'Our mission is ',
		textColored: 'simple',
		textAfter:
			': to empower businesses with the right technology solutions that drive growth, enhance efficiency, and foster innovation. We are committed to delivering exceptional value, exceptional service, and exceptional results.'
	},

	subTitle: {
		text: 'Welcome to',
		textColored: 'QOOX'
	},
	button: 'Unlock Your Potential'
}

export const intro = {
	id: 'intro-1',
	title: {
		text: 'Powerful IT Solutions to Drive Your Business ',
		titleColored: 'Success'
	},
	paragraph: {
		text: 'We are a leading company providing cutting-edge technology solutions that drive business growth and help you stay ahead in the digital era. With our expertise and commitment to excellence, we offer a broad range of services to meet your business needs.'
	},

	subTitle: {
		text: 'Welcome to ',
		textColored: 'QOOX'
	},
	button: {
		text: 'Unlock Your Potential',
		id: 'contacts'
	}
}

export const industries = {
	id: 'industries-1',
	title: {
		text: 'Industries We Serve'
	},
	paragraph: {
		text: 'At ',
		textColored: 'QOOX, ',
		textAfter:
			'we specialize in providing tailored IT solutions for a wide range of industries. Our expertise and experience enable us to understand the unique challenges and opportunities that businesses in different sectors face. We are proud to serve the following industries.'
	},
	button: { text: 'Empower Your Industry', id: 'contacts' }
}

export const industriesDropdown = [
	{
		id: 'industries-dropdown-1',
		title: 'Media and Social',
		paragraph:
			'In the fast-paced world of media and social platforms, staying ahead of the curve is crucial. We offer innovative IT solutions that help media companies, content creators, and social platforms thrive in this dynamic landscape. From content management systems and social media analytics to interactive user experiences, our solutions empower you to engage your audience and drive growth.'
	},
	{
		id: 'industries-dropdown-2',
		title: 'Retail and Logistics',
		paragraph:
			'In the fast-paced world of media and social platforms, staying ahead of the curve is crucial. We offer innovative IT solutions that help media companies, content creators, and social platforms thrive in this dynamic landscape. From content management systems and social media analytics to interactive user experiences, our solutions empower you to engage your audience and drive growth.'
	},
	{
		id: 'industries-dropdown-3',
		title: 'Finance and Fintech / Banking and Capital Markets',
		paragraph:
			'In the fast-paced world of media and social platforms, staying ahead of the curve is crucial. We offer innovative IT solutions that help media companies, content creators, and social platforms thrive in this dynamic landscape. From content management systems and social media analytics to interactive user experiences, our solutions empower you to engage your audience and drive growth.'
	},
	{
		id: 'industries-dropdown-4',
		title: 'E-commerce',
		paragraph:
			'In the fast-paced world of media and social platforms, staying ahead of the curve is crucial. We offer innovative IT solutions that help media companies, content creators, and social platforms thrive in this dynamic landscape. From content management systems and social media analytics to interactive user experiences, our solutions empower you to engage your audience and drive growth.'
	}
]

export const industriesNeeds = {
	id: 'industries-needs-1',
	title: {
		text: 'How We Cater to Your Industry-Specific Needs'
	},
	paragraph: {
		text: 'At ',
		textColored: 'QOOX, ',
		textAfter: `we understand that each industry has its unique requirements and challenges. We take a customer-centric approach to address your specific needs, ensuring that our solutions align with your business goals. Here's how we cater to your industry-specific needs.`
	}
}

export const industriesNeedsCards = [
	{
		id: 'industries-needs-card-1',
		src: `${industriesNeedsKnowledge}`,
		title: 'In-Depth Industry Knowledge',
		text: 'In the fast-paced world of media and social platforms, staying ahead of the curve is crucial. We offer innovative IT solutions that help media companies, content creators, and social platforms thrive in this dynamic landscape. From content management systems and social media analytics to interactive user experiences, our solutions empower you to engage your audience and drive growth. '
	},
	{
		id: 'industries-needs-card-2',
		src: `${industriesNeedsApproach}`,
		title: 'Customized Approach',
		text: `We tailor our solutions to match your industry's specific workflows, compliance standards, and user expectations. Our team works closely with you to identify pain points and devise strategies that address your industry-specific challenges.`
	},
	{
		id: 'industries-needs-card-3',
		src: `${industriesNeedsScalable}`,
		title: 'Scalable and Agile Solutions',
		text: `We design our solutions with scalability and flexibility in mind. As your business grows and evolves, our solutions can adapt and scale to meet your changing needs, ensuring long-term success and a competitive edge.`
	},
	{
		id: 'industries-needs-card-4',
		src: `${industriesNeedsSecurity}`,
		title: 'Security and Compliance',
		text: 'Industries such as finance and e-commerce require a high level of security and compliance. We implement robust security measures and adhere to industry-specific regulations to protect sensitive data and maintain the trust of your customers. '
	}
]

export const technologies = {
	id: 'technologies-1',
	title: {
		text: 'Our Technology Stack'
	},
	paragraph: {
		text: 'At ',
		textColored: 'QOOX, ',
		textAfter: `we pride ourselves on our expertise in utilizing a wide range of technologies, frameworks, and tools to deliver innovative and efficient IT solutions. Our team of skilled professionals is proficient in the following technologies.`
	}
}

export const technologiesCards = [
	{
		id: 'technologies-card-1',
		svg: `${python}`,
		title: 'Python'
	},
	{
		id: 'technologies-card-2',
		svg: `${java}`,
		title: 'Java'
	},
	{
		id: 'technologies-card-3',
		svg: `${kafka}`,
		title: 'Kafka'
	},
	{
		id: 'technologies-card-4',
		svg: `${elasticssearch}`,
		title: 'Elasticsearch'
	},
	{
		id: 'technologies-card-5',
		svg: `${amazonAWS}`,
		title: 'Amazon AWS'
	},
	{
		id: 'technologies-card-6',
		svg: `${html}`,
		title: 'HTML/CSS'
	},
	{
		id: 'technologies-card-7',
		svg: `${docker}`,
		title: 'Docker'
	},
	{
		id: 'technologies-card-8',
		svg: `${oracle}`,
		title: 'Oracle DB'
	},
	{
		id: 'technologies-card-9',
		svg: `${postgresql}`,
		title: 'PostgreSQL'
	},
	{
		id: 'technologies-card-10',
		svg: `${angular}`,
		title: 'Angular'
	},
	{
		id: 'technologies-card-11',
		svg: `${mongodb}`,
		title: 'MongoDB'
	},
	{
		id: 'technologies-card-12',
		svg: `${hibernate}`,
		title: 'Hibernate'
	},
	{
		id: 'technologies-card-13',
		svg: `${spring}`,
		title: 'Spring'
	},
	{
		id: 'technologies-card-14',
		svg: `${JS}`,
		title: 'JavaScript'
	},
	{
		id: 'technologies-card-15',
		svg: `${react}`,
		title: 'React / Redux'
	},
	{
		id: 'technologies-card-16',
		svg: `${kubernetes}`,
		title: 'Kubernetes'
	}
]

export const contactUs = {
	id: 'contactUs-1',
	title: {
		text: 'Contact Us'
	},
	paragraph: {
		text: 'The ',
		textColored: 'time to act ',
		textAfter: `is now. Take the first step towards transforming your business into a digital powerhouse. Fill out the form below and let us be your guide on this exciting journey of innovation, growth, and success. Get ready to witness the true power of technology!`
	}
}
