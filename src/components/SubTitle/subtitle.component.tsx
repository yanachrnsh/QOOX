export const SubTitle = ({
	styles,
	text,
	textColored
}: {
	styles: string
	text: string
	textColored?: string
}) => {
	return (
		<>
			<p className={styles}>
				{text}
				<span className='text-brandColorGreen font-bold'>{textColored}</span>
			</p>
		</>
	)
}
