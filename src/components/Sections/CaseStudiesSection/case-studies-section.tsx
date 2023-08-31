import { useState } from 'react'
import { styles } from '../../../constants/styles-constants'
import {
	TitleDescription,
	Button,
	Title,
	SubTitle,
	SubTitleTop
} from '../../index'
import { caseStudies } from '../../../constants/content-constants'

export const CaseStudiesSection = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = 0
		} else if (newIndex >= caseStudies.length) {
			newIndex = caseStudies.length - 1
		}

		setActiveIndex(newIndex)
	}
	return (
		<section
			className={`${styles.sectionCol} ${styles.paddingX} sm:text-center sm:items-center items-start overflow-hidden`}
		>
			<div
				className={`whitespace-nowrap ease-in shadow-sm`}
				style={{ transform: `translate(-${activeIndex * 100}%)` }}
			>
				{caseStudies.map(item => (
					<TitleDescription key={item.id}>
						<SubTitleTop
							textMain={item.subTitleTop}
							styles={`${styles.paragraph} md:w-[70%] w-[100%]`}
						/>
						<Title
							styles={`${styles.headingh1} pb-4 md:w-[70%] w-[100%]`}
							textMain={item.title}
						/>
						<SubTitle
							styles={`${styles.paragraph} pb-[40px] md:w-[70%] w-[100%]  ss:w-[80%] font-normal `}
							text={item.subTitle}
						/>
						<Button
							classNameBtn=' w-[100%]'
							classNameDiv=' ss:w-[30%] min-w-[200px] w-[100%] text-lightPrimary bg-brandColorGreen py-2 px-6 rounded text-center '
							text='View Full Case'
						/>
					</TitleDescription>
				))}
			</div>
			<button
				className='button-arrow'
				onClick={() => {
					updateIndex(activeIndex - 1)
				}}
			>
				prev
				{/* <span class='material-symbols-outlined'>arrow_forward_ios</span> */}
			</button>
			<button
				className='button-arrow'
				onClick={() => {
					updateIndex(activeIndex + 1)
				}}
			>
				Next
				{/* <span class='material-symbols-outlined'>arrow_forward_ios</span> */}
			</button>
		</section>
	)
}
