export const SubTitleTop = ({
	styles,
	textMain,
	textSpan
}: {
	styles: string
	textMain: string
	textSpan: string
}) => {
	return (
		<>
			<p className={styles}>
				{textMain}{' '}
				<span className='text-brandColorGreen font-bold'>{textSpan}</span>
			</p>
		</>
	)
}
