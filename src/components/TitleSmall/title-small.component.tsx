export const TitleSmall = ({
	styles,
	text
}: {
	styles: string
	text: string
}) => {
	return (
		<div>
			<h3 className={styles}>{text}</h3>
		</div>
	)
}
