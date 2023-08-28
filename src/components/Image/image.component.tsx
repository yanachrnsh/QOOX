

export const Image = ({svg, width, height}: any) => {
	return (
		<div>
			<img src={svg} className={`w-[${width}px] h-[${height}px]`}></img>
		</div>
	)
}


