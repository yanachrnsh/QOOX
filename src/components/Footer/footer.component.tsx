import { Logo } from '../Logo/logo.component'
import { navLinks } from '../../constants/content-constants'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { hovers, styles } from '../../constants/styles-constants'

export const Footer = () => {
	return (
		<footer
			className={`${styles.paddingX} relative grid grid-cols-4 gap-8 sm:flex justify-between items-center py-3 sm:py-7 max-w-7xl m-auto`}
		>
			<div className='row-span-2 col-start-1 col-end-3 row-start-2 row-end-3'>
				<Logo />
			</div>
			<a
				href='#root'
				className={`${hovers.textHoverGreen} sm:hidden absolute right-0 top-[5%] hover:animate-bounce p-2`} 
			>
				<AiOutlineArrowUp
					size={24}
					className={`${hovers.textHoverGreen} pointer-events-none`}
				/>
			</a>

			<div className=' row-start-1 row-end-2 col-start-1 col-end-3 flex flex-col sm:flex-row'>
				{navLinks.map((link: { id: string; title: string }) => (
					<a
						key={link.id}
						href={`#${link.id}`}
						className={`${hovers.link.parent} sm:py-1 sm:px-4 py-4 px-0 items-start sm:text-center w-[100%] `}
					>
						<p className={`${hovers.link.child}`}>{link.title}</p>
					</a>
				))}
			</div>
			<div className=' row-span-2 col-start-3 col-end-5 row-start-2 row-end-3 flex items-center justify-end gap-1'>
				<AiOutlineCopyrightCircle />
				<span>2023</span>
			</div>
		</footer>
	)
}
