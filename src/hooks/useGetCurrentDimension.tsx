import { useState, useEffect } from 'react'

export const useGetCurrentDimension = () => {
	const [screenSize, setScreenSize] = useState(getCurrentDimension())

	function getCurrentDimension() {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension())
		}
		window.addEventListener('resize', updateDimension)

		return () => {
			window.removeEventListener('resize', updateDimension)
		}
	}, [screenSize])
	return screenSize
}
