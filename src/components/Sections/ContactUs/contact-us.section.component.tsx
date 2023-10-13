import { SubmitHandler } from 'react-hook-form'
import { hovers, styles } from '../../../constants/styles-constants'
import { TitleParagraph } from '../../SectionContainer/section-container.component'
import { contactUs } from '../../../constants/content-constants'
import { UserData } from '../../../api/dto/usetData.dto'
import { useSubmitUserData } from '../../../api/user/useSubmitUserData'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiError } from 'react-icons/bi'
import { ContactForm } from './contact-form.component'

export const ContactUsSection = () => {
	const { mutate, isError, isSuccess, isLoading } = useSubmitUserData()

	const onSubmit: SubmitHandler<UserData> = data => {
		mutate(data)
	}
	return (
		<section
			id='contacts'
			className={`${styles.paddingX} ${styles.paddingY} max-w-7xl  md:mx-auto relative`}
		>
			<section
				className={`${styles.gridCard} items-center relative gap-[19px] md:gap-48 `}
			>
				<a
					href='#root'
					className={`hidden sm:inline-block absolute right-0 top-[-5%] ${hovers.textHoverGreen} hover:animate-bounce p-2`}
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
					<div className='flex justify-center items-center gap-2 py-[180px] md:py-0'>
						<BiError size={24} className='text-rose-600' />
						<h1>Oops, something went wrong. Please try again later!</h1>
					</div>
				)}
				{isSuccess && (
					<div className='flex justify-center items-center gap-2 py-[180px] md:py-0'>
						<BsFillCheckCircleFill
							size={24}
							className=' bg-backgroundMain text-brandColorGreen'
						/>
						<h1>
							Your application has been sent. We will reach you out really soon!
						</h1>
					</div>
				)}
				{!isSuccess && !isError && (
					<ContactForm onSubmit={onSubmit} isLoading={isLoading}></ContactForm>
				)}
			</section>
			<h3
				className={`${styles.headingH3} text-brandColorGreen absolute bottom-0 pb-1`}
			>
				Don't Wait! Your Future Awaits
			</h3>
		</section>
	)
}
