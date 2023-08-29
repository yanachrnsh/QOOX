export const SubTitle = ({
	styles,
	text,
	textSpan = '',
	textRest = ''
}: {
	styles: string
	text: string
	textSpan?: string
	textRest?: string
}) => {
	return (
		<>
			<p className={styles}>
				{text}
				<span className='text-brandColorGreen font-bold'>{textSpan}</span>
				{textRest}
			</p>
		</>
	)
}
