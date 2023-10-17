import { FC } from 'react'

import { hovers } from '../../constants/styles-constants'

export interface IAnchorButton {
	text: string
	svg?: string
	id: string
	styles?: string
}

export const AnchorButton: FC<IAnchorButton> = ({ text, svg, id, styles }) => {
	return (
		<a
			href={`#${id}`}
			className={`${hovers.button.parent} ${hovers.backgroundHoverGreen} flex items-center justify-center min-w-[200px] max-w-[100%] text-lightPrimary py-2 px-6 rounded text-center ${styles} `}
		>
			<p
				className={` ${hovers.button.child} flex items-center justify-center gap-2`}
			>
				{text} {svg && <img src={svg} alt='arrow w-5 h-5' />}
			</p>
		</a>
	)
}

