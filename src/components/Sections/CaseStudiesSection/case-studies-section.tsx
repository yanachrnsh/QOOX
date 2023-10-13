import { ReactElement, FC, Dispatch, SetStateAction } from 'react'
import { Button } from '../../Button/button.component'
import { Title } from '../../Title/title.component'
import { Paragraph } from '../../Paragraph/paragraph.component'
import { SubTitle } from '../../SubTitle/subtitle.component'
import { motion } from 'framer-motion'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import { caseStudies } from '../../../constants/content-constants'
import { styles, container, hovers } from '../../../constants/styles-constants'

interface CaseStudiesSectionProps {
	casePageIndex: number
	setCasePageIndex: Dispatch<SetStateAction<number>>
}

export const CaseStudiesSection: FC<CaseStudiesSectionProps> = ({
	setCasePageIndex,
	casePageIndex
}) => {
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

			<div className='hidden md:flex md:gap-8 md:self-center pt-16 '>
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
							<div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center md:gap-10 md:min-h-[500px]'>
								<img
									src={content.src}
									alt={content.title.text}
									className=' max-w-[100%] p-16 md:p-0 md:max-w-[50%]'
								></img>
								<div>
									<SubTitle text={content.subTitle.text} />
									<Title text={content.title.text} />
									<div className='pb-[27px] md:pb-10'>
										<Paragraph text={content.paragraph.text} />
									</div>
									<div className='w-fit'>
										<Button
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
