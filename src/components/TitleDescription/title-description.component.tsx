import { styles } from '../../constants/styles-constants'

export const TitleDescription = ({ children }: { children: any }) => {
	return (
		<div
			className={`${styles.paddingX} flex flex-col items-start  max-w-7xl md:m-auto`}
		>
			{children}
		</div>
	)
}
