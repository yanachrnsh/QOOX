import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { styles } from '../../../constants/styles-constants'
import { TitleParagraph } from '../../SectionContainer/section-container.component'
import { contactUs } from '../../../constants/content-constants'

interface UserData {
	name: string
	email: string
	project?: string
}

export const ContactUsSection = () => {
	const onSubmit: SubmitHandler<UserData> = data => console.log(data)

	return (
		<section
			className={`${styles.gridCard} ${styles.paddingX} ${styles.paddingY} items-center min-h-[1100px] md:min-h-[800px]  max-w-7xl  md:mx-auto`}
		>
			<div>
				<TitleParagraph
					title={contactUs.title}
					paragraph={contactUs.paragraph}
				/>
			</div>
			<ContactForm onSubmit={onSubmit}></ContactForm>
		</section>
	)
}

interface ContactFormProps {
	onSubmit: (userData: UserData) => void
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<UserData>()

	return (
		<form className='text-darkSecondary' onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				placeholder='Name'
				className={`${styles.formInputs}`}
				{...register('name', { required: true })}
			/>
			<input
				type='email'
				placeholder='Email'
				className={`${styles.formInputs}`}
				{...register('email', { required: true })}
			/>
			<input
				type='text'
				className={`${styles.formInputs}`}
				placeholder='Just a few words about your project (Optional)'
				{...register('project', { required: false })}
			/>
			<input
				type='submit'
				placeholder='Contact Us'
				className='text-lightPrimary bg-brandColorGreen py-2 px-6 w-[100%] mt-10 cursor-pointer'
			/>
		</form>
	)
}
