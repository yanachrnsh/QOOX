import { FC } from 'react'
interface ButtonProps {
	classNameDiv: string
	classNameBtn: string
	text: string
}

export const Button: FC<ButtonProps> = ({
	classNameDiv,
	classNameBtn,
	text
}) => {
	return (
		<div className={classNameDiv}>
			<button className={classNameBtn}>{text}</button>
		</div>
	)
}
