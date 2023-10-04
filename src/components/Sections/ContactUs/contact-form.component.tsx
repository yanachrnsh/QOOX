import { FC } from 'react'
import { z, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserData } from '../../../api/dto/usetData.dto'
import { useForm } from 'react-hook-form'
import { styles } from '../../../constants/styles-constants'

const contactFormSchema = z.object({
	name: z.string().min(2, { message: 'Name is required' }),
	email: z.string().email({ message: 'A valid email is required' }),
	project: z.string().optional()
})

type ContactFormSchema = TypeOf<typeof contactFormSchema>

interface ContactFormProps {
	onSubmit: (userData: UserData) => void
	isLoading: boolean
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit, isLoading }) => {
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
				<button
					className={`group/contact text-lightPrimary bg-brandColorGreen hover:bg-brandColorGreenHover py-2 px-6 w-[100%] mt-16 cursor-pointer ${
						isLoading && 'opacity-50 cursor-not-allowed '
					}`}
				>
					<p
						className={`group-hover/contact:translate-x-[-45%] translate-x-0 transition duration-500 ease-in-out relative  ${
							isLoading && 'translate-x-[-45%] '
						}`}
					>
						Contact Us
					</p>
				</button>
			</div>
		</form>
	)
}
