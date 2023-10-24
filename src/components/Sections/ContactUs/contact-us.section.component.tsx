import { hovers, styles } from '../../../constants/styles-constants'
import { TitleParagraph } from '../../TitleParagraph/title-paragraph.component'
import { contactUs } from '../../../constants/content-constants'
import { useSubmitUserData } from '../../../api/user/useSubmitUserData'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { ContactForm } from './contact-form.component'
import { RiErrorWarningFill } from 'react-icons/ri'

export const ContactUsSection = () => {
	const { mutate, isError, isSuccess, isLoading } = useSubmitUserData()

	return (
		<section
			id='contacts'
			className={`${styles.paddingX} ${styles.paddingY} relative  max-w-7xl md:mx-auto`}
		>
			<section
				className={`${styles.gridCard} relative items-center gap-[19px] md:gap-48 `}
			>
				<a
					href='#root'
					className={`absolute right-0 top-[-5%] hidden sm:inline-block ${hovers.textHoverGreen} p-2 hover:animate-bounce`}
				>
					<AiOutlineArrowUp
						size={24}
						className={` ${hovers.textHoverGreen} pointer-events-none`}
					/>
				</a>
				<div>
					<TitleParagraph
						title={contactUs.title}
						paragraph={contactUs.paragraph}
					/>
				</div>
				{isError && (
					<div className='flex items-center justify-center gap-2 py-[180px] md:py-0'>
						<RiErrorWarningFill size={24} className='text-rose-600' />
						<p>Oops, something went wrong. Please try again later!</p>
					</div>
				)}
				{isSuccess && (
					<div className='flex items-center justify-center gap-2 py-[180px] md:py-0'>
						<BsFillCheckCircleFill
							size={24}
							className=' bg-background-main text-brand-green'
						/>
						<p>
							Your application has been sent. We will reach you out really soon!
						</p>
					</div>
				)}
				{!isSuccess && !isError && (
					<ContactForm
						onSubmit={data => mutate(data)}
						isLoading={isLoading}
					></ContactForm>
				)}
			</section>
			<h3
				className={`absolute bottom-0 pb-1 text-xl font-semibold text-brand-green`}
			>
				Don't Wait! Your Future Awaits
			</h3>
		</section>
	)
}
