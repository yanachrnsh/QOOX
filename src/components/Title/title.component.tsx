export const Title = ({
	styles,
	text,
	textColored = ''
}: {
	styles: any
	text: any
	textColored?: any
}) => {
	return (
		<>
			<h1 className={styles}>
				{text}
				<span className={textColored ? 'text-brandColorGreen' : 'hidden'}>
					{textColored}
				</span>
			</h1>
		</>
	)
}
