export const Title = ({
	styles,
	textMain,
	textSpan = ''
}: {
	styles: any
	textMain: any
	textSpan?: any
}) => {
	return (
		<>
			<h1 className={styles}>
				{textMain}
				<span className='text-brandColorGreen'>{textSpan}</span>
			</h1>
		</>
	)
}
