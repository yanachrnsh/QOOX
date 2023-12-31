import { ReactElement, FC, useState } from 'react'
import { AnchorButton } from '../../AnchorButton/anchor-button.component'
import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { SubTitle } from '../../SubTitle/subtitle.component'
import { motion } from 'framer-motion'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import { caseStudies } from '../../../constants/content-constants'
import { styles, container, hovers } from '../../../constants/styles-constants'

export const CaseStudiesSection: FC = () => {
	const [casePageIndex, setCasePageIndex] = useState(0)
	const nextPage = () => {
		if (casePageIndex === caseStudies.length - 1) {
			setCasePageIndex(0)
			return
		}

		setCasePageIndex(prev => prev + 1)
	}

	const prevPage = () => {
		if (casePageIndex === 0) {
			setCasePageIndex(caseStudies.length - 1)
			return
		}

		setCasePageIndex(prev => prev - 1)
	}

	return (
		<section
			id='cases'
			className={`${styles.sectionCol} ${styles.paddingX}  ${container.titleParagraphContainer}`}
		>
			<SwiperContainer casePageIndex={casePageIndex} />

			<div className='hidden pt-16  md:flex md:gap-8 md:self-center '>
				<PageButton handleClick={prevPage}>
					<BsArrowLeftCircle
						className={`cursor-pointer ${hovers.textHoverGreen}`}
						size={34}
					/>
				</PageButton>
				<PageButton handleClick={nextPage}>
					<BsArrowRightCircle
						className={`cursor-pointer ${hovers.textHoverGreen}`}
						size={34}
					/>
				</PageButton>
			</div>
		</section>
	)
}

const SwiperContainer = ({ casePageIndex }: { casePageIndex: number }) => {
	return (
		<>
			{caseStudies.map((content, index) => (
				<motion.div
					key={content.id}
					className={`${index === casePageIndex ? 'active' : ''}`}
				>
					{index === casePageIndex && (
						<motion.div
							key={content.id}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ duration: 0.8, ease: 'easeInOut' }}
						>
							<div className='flex flex-col-reverse gap-5 md:min-h-[500px] md:flex-row md:items-center md:justify-between md:gap-10'>
								<img
									src={content.src}
									alt={content.title.text}
									className=' max-w-[100%] ss:m-auto md:m-0 md:max-w-[50%]'
								></img>

								<div>
									<SubTitle text={content.subTitle.text} />
									<Title text={content.title.text} />
									<div className='pb-[27px] md:pb-10'>
										<Paragraph text={content.paragraph.text} />
									</div>
									<div className='w-fit'>
										<AnchorButton
											text={content.button.text}
											id={content.button.id}
											svg={content.button.svg}
										/>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</motion.div>
			))}
		</>
	)
}

const PageButton = ({
	handleClick,
	children
}: {
	handleClick: () => void
	children: ReactElement
}) => {
	return <button onClick={() => handleClick()}>{children}</button>
}
