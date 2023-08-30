import { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../constants/content-constants'
import { styles } from '../../constants/styles-constants'
import { Button } from '../Button/button.component'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => setIsMenuOpen(false))
	}, [])

	return (
		<header
			className={`${styles.paddingX} flex flex-1 justify-between items-center max-w-7xl m-auto`}
		>
			<Image />
			<div className='sm:hidden' onClick={() => setIsMenuOpen(prev => !prev)}>
				{isMenuOpen ? (
					<FiX className='cursor-pointer' size={24} />
				) : (
					<FiMenu className='cursor-pointer' size={24} />
				)}
			</div>
			<Menu isMenuOpen={isMenuOpen} />
		</header>
	)
}

const Menu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
	const activClass = isMenuOpen
		? ` flex flex-col justify-start items-center fixed top-[80px] w-[100%] h-[400px] left-0 bg-white z-10 sm:hidden sidebar`
		: ` hidden sm:flex sm:flex-row align-center`

	return (
		<nav className={activClass}>
			{navLinks.map((link: { id: string; title: string }) => (
				<Link key={link.id}>{link.title}</Link>
			))}
			<Button
				text='Send request'
				classNameDiv='py-2 px-4 mt-[40px] flex justify-center text-center w-[90%] rounded border-2 border-brandColorGreen sm:mt-0 sm:py-0 ml-[20px] md:ml-[40px]'
				classNameBtn='text-center min-w-[100px] text-brandColorGreen'
			/>
		</nav>
	)
}

const Link = ({ children }: { children: string }) => {
	return (
		<div
			className={`sm:py-1 sm:px-4 py-4 px-3 text-center w-[100%] cursor-pointer`}
		>
			<p>{children}</p>
		</div>
	)
}

export const Image = () => {
	return (
		<div className='shrink-0'>
			<img
				src={logo}
				alt='logo'
				className='sm:w-[88px] sm:h-[28px] w-[74px] h-[24px] shrink-0'
			></img>
		</div>
	)
}
