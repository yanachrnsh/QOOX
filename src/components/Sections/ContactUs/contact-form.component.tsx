import { FC } from 'react'
import { z, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserData } from '../../../api/dto/usetData.dto'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
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
		<form className='text-dark-secondary' onSubmit={handleSubmit(onSubmit)}>
			<p
				className={`${
					errors.name ? 'visible' : 'invisible'
				} my-2 h-[20px] text-rose-600`}
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
				} my-2 h-[20px] text-rose-600`}
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
				} my-2 h-[20px] text-rose-600`}
			>
				{errors.project?.message}
			</p>
			<TextareaAutosize
				className={`${styles.formInputs}`}
				minRows={3}
				placeholder='Just a few words about your project (Optional)'
				{...register('project', { required: false })}
			></TextareaAutosize>
			<div>
				<button
					className={`group/contact mt-16 w-[100%] cursor-pointer rounded bg-brand-green px-6 py-2 text-light-primary hover:bg-brand-green-hover ${
						isLoading && 'cursor-not-allowed opacity-50 '
					}`}
				>
					<p
						className={`relative translate-x-0 transition duration-500 ease-in-out group-hover/contact:translate-x-[-45%]  ${
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
