import { FC } from 'react'

interface CardStyles {
	block: string
	img: string
	title: string
	text: string
}

export interface CardProps {
	src?: string
	title: string
	text: string
	cardStyles: CardStyles
}

export const Card: FC<CardProps> = ({ src = '', title, text, cardStyles }) => {
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
