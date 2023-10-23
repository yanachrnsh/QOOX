import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Menu } from '../Menu/menu.component'
import { styles } from '../../constants/styles-constants'
import { Logo } from '../Logo/logo.component'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsMenuOpen(false)
		})

		return () => window.removeEventListener('resize', () => {})
	}, [])

	return (
		<header
			className={`${styles.paddingX} m-auto flex max-w-7xl flex-1 items-center justify-between`}
		>
			<Logo />
			<div className='sm:hidden' onClick={() => setIsMenuOpen(prev => !prev)}>
				{isMenuOpen ? (
					<FiX className='cursor-pointer' size={24} />
				) : (
					<FiMenu className='cursor-pointer' size={24} />
				)}
			</div>
			<Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</header>
	)
}
