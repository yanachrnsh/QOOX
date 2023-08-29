import { styles } from '../../constants/styles-constants'

export const Card = ({
	src = '',
	title,
	text,
	cardStyles
}: {
	src?: string
	title: string
	text: string
	cardStyles?: string
}) => {
	return (
		<div
			className={`${styles.flexCard}  bg-lightGrey rounded-2xl p-4 sm:p-6 ${cardStyles}`}
		>
			<img
				src={src}
				alt={title}
				className={src ? `w-[44px] h-[44px] sm:w-[56px] sm:h-[56px]` : 'hidden'}
			/>
			<h4 className={`${styles.headingh4} text-brandColorGreen`}>{title}</h4>
			<p className='text-start sm:w-[90%] md:w-[100%]'>{text}</p>
		</div>
	)
}
