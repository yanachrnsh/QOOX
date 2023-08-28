import { useState } from 'react'
import { Image } from '../Image/image.component'
import logo from '../../assets/logo.svg'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../constants/content-constants'

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<div className={`flex justify-between items-center`}>
				<Image svg={logo} width={74} height={24} />
				<div className='ss:hidden' onClick={() => setIsMenuOpen(prev => !prev)}>
					{isMenuOpen ? (
						<FiX className='cursor-pointer' />
					) : (
						<FiMenu lassName='cursor-pointer' />
					)}
				</div>
				<MenuMobile />
			</div>
		</>
	)
}

const MenuMobile = () => {
	return (
		<div className={`hidden ss:flex flex-row justify-end items-center`}>
			{navLinks.map((link: { id: string; title: string }) => (
				<Link key={link.id}>{link.title}</Link>
			))}
		</div>
	)
}

const Link = ({ children }: { children: string }) => {
	return (
		<div className={`py-1 px-4`}>
			<p>{children}</p>
		</div>
	)
}

export default Link
