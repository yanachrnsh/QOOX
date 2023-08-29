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
				<span className={textSpan ? 'text-brandColorGreen' : 'hidden'}>
					{textSpan}
				</span>
			</h1>
		</>
	)
}
