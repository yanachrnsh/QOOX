import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { styles } from '../../../constants/styles-constants'
import { TitleParagraph } from '../../SectionContainer/section-container.component'
import { contactUs } from '../../../constants/content-constants'
import { UserData } from '../../../api/dto/usetData.dto'
import { useSubmitUserData } from '../../../api/user/useSubmitUserData'
import { z, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiError } from 'react-icons/bi'

export const ContactUsSection = () => {
	const { mutate, isError, isSuccess } = useSubmitUserData()

	const onSubmit: SubmitHandler<UserData> = data => {
		mutate(data)
	}

	return (
		<section
			className={`${styles.paddingX} ${styles.paddingY} max-w-7xl  md:mx-auto relative`}
		>
			<section className={`${styles.gridCard} items-center `}>
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
					<ContactForm onSubmit={onSubmit}></ContactForm>
				)}
			</section>
			<h3
				className={`${styles.headingh3} text-brandColorGreen absolute bottom-0 pb-1`}
			>
				Don't Wait! Your Future Awaits
			</h3>
		</section>
	)
}

const contactFormSchema = z.object({
	name: z.string().min(2, { message: 'Name is required' }),
	email: z.string().email({ message: 'A valid email is required' }),
	project: z.string().optional()
})

type ContactFormSchema = TypeOf<typeof contactFormSchema>

interface ContactFormProps {
	onSubmit: (userData: UserData) => void
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ContactFormSchema>({
		mode: 'onChange',
		resolver: zodResolver(contactFormSchema)
	})

	return (
		<form className='text-darkSecondary' onSubmit={handleSubmit(onSubmit)}>
			<p
				className={`${
					errors.name ? 'visible' : 'invisible'
				} text-rose-600 h-[20px] my-2`}
			>
				{errors.name?.message}
			</p>
			<input
				type='text'
				placeholder='Name'
				className={`${styles.formInputs}`}
				{...register('name', { required: true })}
			/>

			<p
				className={`${
					errors.email ? 'visible' : 'invisible'
				} text-rose-600 h-[20px] my-2`}
			>
				{errors.email?.message}
			</p>
			<input
				type='email'
				placeholder='Email'
				className={`${styles.formInputs}`}
				{...register('email', { required: true })}
			/>

			<p
				className={`${
					errors.project ? 'visible' : 'invisible'
				} text-rose-600 h-[20px] my-2`}
			>
				{errors.project?.message}
			</p>
			<input
				type='text'
				className={`${styles.formInputs}`}
				placeholder='Just a few words about your project (Optional)'
				{...register('project', { required: false })}
			/>

			<div>
				<input
					type='submit'
					placeholder='Contact Us'
					className='text-lightPrimary bg-brandColorGreen py-2 px-6 w-[100%] mt-16 cursor-pointer'
				/>
			</div>
		</form>
	)
}
