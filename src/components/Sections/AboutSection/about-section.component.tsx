import { Title, Paragraph, Card } from '../../index'
import { styles, card } from '../../../constants/styles-constants'
import { about } from '../../../constants/content-constants'

export const AboutSection = () => {
	return (
		<section
			className={`${styles.sectionCol} ${styles.paddingX} sm:text-center sm:items-center items-start`}
		>
			<Title
				styles={`${styles.headingh1} pb-4 md:w-[70%] w-[100%]`}
				text={`About Us`}
			/>
			<Paragraph
				styles={`${styles.paragraph} pb-[48px] sm:pb-[72px] md:w-[70%] w-[100%] ss:w-[80%] font-normal `}
				text='Our mission is '
				textColored='simple'
				textAfter=': to empower businesses with the right technology solutions that drive growth, enhance efficiency, and foster innovation. We are committed to delivering exceptional value, exceptional service, and exceptional results.'
			/>
			<h3 className={`${styles.headingh2} pb-[32px] md:pb-[40px]`}>
				<p>"Why choose us?"</p>
			</h3>
			<div className='grid auto-cols-auto sm:grid-cols-2 md:grid-cols-3 sm:last:col-span-2 gap-4 md:gap-6'>
				{about.map((item: any) => (
					<Card
						src={item.src}
						title={item.title}
						text={item.text}
						key={item.id}
						cardStyles={{
							block: card.blockLightGrey,
							img: card.img,
							title: card.titleGreen,
							text: card.textDark
						}}
					/>
				))}
			</div>
		</section>
	)
}
