import { Logo } from '../Logo/logo.component'
import { navLinks } from '../../constants/content-constants'
import { motion } from 'framer-motion'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { styles } from '../../constants/styles-constants'

export const Footer = () => {
	return (
		<footer
			className={`${styles.paddingX} grid grid-cols-4 gap-8 sm:flex justify-between items-center py-3 sm:py-7 max-w-7xl m-auto`}
		>
			<div className='row-span-2 col-start-1 col-end-3 row-start-2 row-end-3'>
				<Logo />
			</div>

			<div className=' row-start-1 row-end-2 col-start-1 col-end-3 flex flex-col sm:flex-row'>
				{navLinks.map((link: { id: string; title: string }) => (
					<div
						key={link.id}
						className={`sm:py-1 sm:px-4 py-4 px-0 items-start sm:text-center w-[100%] cursor-pointer hover:text-brandColorGreenHover`}
					>
						<a href={`#${link.id}`}>
							<motion.button
								whileHover={{ y: -1 }}
								initial={{ y: 0 }}
								exit={{ y: 0 }}
							>
								{link.title}
							</motion.button>
						</a>
					</div>
				))}
			</div>
			<div className=' row-span-2 col-start-3 col-end-5 row-start-2 row-end-3 flex items-center justify-end gap-1'>
				<AiOutlineCopyrightCircle />
				<span>2023</span>
			</div>
		</footer>
	)
}
