export const SubTitle = ({
	styles,
	text
}: {
	styles: string
	text: string
}) => {
	return (
		<>
			<p className={styles}>{text}</p>
		</>
	)
}
