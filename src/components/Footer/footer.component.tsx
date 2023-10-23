import { Logo } from '../Logo/logo.component'
import { navLinks } from '../../constants/content-constants'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { hovers, styles } from '../../constants/styles-constants'

export const Footer = () => {
	return (
		<footer
			className={`${styles.paddingX} relative m-auto grid max-w-7xl grid-cols-4 items-center justify-between gap-8 py-3 sm:flex sm:py-7`}
		>
			<div className='col-start-1 col-end-3 row-span-2 row-start-2 row-end-3'>
				<Logo />
			</div>
			<a
				href='#root'
				className={`${hovers.textHoverGreen} absolute right-0 top-[5%] p-2 hover:animate-bounce sm:hidden`}
			>
				<AiOutlineArrowUp
					size={24}
					className={`${hovers.textHoverGreen} pointer-events-none`}
				/>
			</a>

			<div className=' col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col sm:flex-row'>
				{navLinks.map((link: { id: string; title: string }) => (
					<a
						key={link.id}
						href={`#${link.id}`}
						className={`${hovers.link.parent} w-[100%] items-start px-0 py-4 sm:px-4 sm:py-1 sm:text-center `}
					>
						<p className={`${hovers.link.child}`}>{link.title}</p>
					</a>
				))}
			</div>
			<div className=' col-start-3 col-end-5 row-span-2 row-start-2 row-end-3 flex items-center justify-end gap-1'>
				<AiOutlineCopyrightCircle />
				<span>2023</span>
			</div>
		</footer>
	)
}
