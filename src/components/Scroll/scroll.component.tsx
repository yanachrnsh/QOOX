import { motion } from 'framer-motion'
import { Ref, ReactNode } from 'react'

export const Scroll = ({
	carousel,
	width,
	children
}: {
	carousel: Ref<HTMLInputElement>
	width: number
	children: ReactNode
}) => {
	return (
		<motion.div ref={carousel} className='cursor-grab overflow-hidden'>
			<motion.div
				drag='x'
				dragConstraints={{ right: 0, left: -width }}
				className={`flex gap-4`}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
