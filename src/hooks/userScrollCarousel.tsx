import {useState, useEffect, useRef} from 'react'

export const userScrollCarousel = () => {

  const [scrollWidth, setScrollWidth] = useState(0)
	const carousel = useRef<HTMLInputElement>(null)

	useEffect(() => {
		carousel.current !== null &&
			setScrollWidth(
				carousel.current.scrollWidth - carousel.current?.offsetWidth
			)
	}, [])
  return {scrollWidth, carousel}
}
