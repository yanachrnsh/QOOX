import { navLinks } from '../../constants/content-constants'
import { motion } from 'framer-motion'

export const Menu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
	const activClass = isMenuOpen
		? ` flex flex-col justify-start items-center fixed top-[80px] w-[100%] h-[400px] left-0 bg-backgroundMain z-10 sm:hidden sidebar`
		: ` hidden sm:flex sm:flex-row align-center`

	return (
		<nav className={activClass}>
			{navLinks.map((link: { id: string; title: string }) => (
				<Link key={link.id} id={link.id}>
					{link.title}
				</Link>
			))}
			<div className=' flex justify-center items-center text-center rounded border-2 border-brandColorGreen hover:border-brandColorGreenHover mt-[40px] sm:mt-0 ml-[20px] md:ml-[40px]  min-w-[150px] text-brandColorGreen'>
				<a href='#contacts' className='w-[100%] py-2 px-4 sm:py-0 '>
					<motion.button
						whileHover={{ y: -1 }}
						initial={{ y: 0 }}
						exit={{ y: 0 }}
					>
						Send request
					</motion.button>
				</a>
			</div>
		</nav>
	)
}

export const Link = ({ children, id }: { children: string; id: string }) => {
	return (
		<div
			className={`sm:py-1 sm:px-4 py-4 px-3 text-center w-[100%] cursor-pointer hover:text-brandColorGreenHover`}
		>
			<a href={`#${id}`}>
				<motion.button
					whileHover={{ y: -1 }}
					initial={{ y: 0 }}
					exit={{ y: 0 }}
				>
					{children}
				</motion.button>
			</a>
		</div>
	)
}
