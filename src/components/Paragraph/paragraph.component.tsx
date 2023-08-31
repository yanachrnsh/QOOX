export const Paragraph = ({
	styles,
	text,
	textColored = '',
	textAfter = ''
}: {
	styles: string
	text: string
	textColored?: string
	textAfter?: string
}) => {
	return (
		<>
			<p className={styles}>
				{text}
				<span className='text-brandColorGreen font-bold'>{textColored}</span>
				{textAfter}
			</p>
		</>
	)
}
