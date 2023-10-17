export const Card = ({
	src = '',
	title,
	text,
	cardStyles
}: {
	src?: string
	title: string
	text: string
	cardStyles: {
		block: string
		img: string
		title: string
		text: string
	}
}) => {
	return (
		<div className={cardStyles.block}>
			<img
				src={src}
				alt={title}
				className={src ? `${cardStyles.img}` : 'hidden'}
			/>
			<h4 className={cardStyles.title}>{title}</h4>
			<p className={`${cardStyles.text}`}>{text}</p>
		</div>
	)
}
