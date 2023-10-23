import { navLinks } from '../../constants/content-constants'
import { hovers } from '../../constants/styles-constants'

export const Menu = ({
	isMenuOpen,
	setIsMenuOpen
}: {
	isMenuOpen: boolean
	setIsMenuOpen(stat: boolean): void
}) => {
	return (
		<nav
			className={`absolute w-full bg-background-main pb-[70px] transition-all duration-500 ease-in-out sm:static sm:z-auto  sm:flex sm:w-auto sm:flex-row sm:items-center sm:pb-0 ${
				isMenuOpen ? 'left-0 top-[80px]  opacity-100 ' : 'left-0 top-[-430px] '
			} bg-background-main opacity-0 sm:opacity-100`}
		>
			{navLinks.map((link: { id: string; title: string }) => (
				<Link key={link.id} id={link.id} setIsMenuOpen={setIsMenuOpen}>
					{link.title}
				</Link>
			))}
			<RequestAnchorButton setIsMenuOpen={setIsMenuOpen} />
		</nav>
	)
}

export const Link = ({
	children,
	id,
	setIsMenuOpen
}: {
	children: string
	id: string
	setIsMenuOpen(stat: boolean): void
}) => {
	return (
		<a
			href={`#${id}`}
			onClick={() => setIsMenuOpen(false)}
			className={`${hovers.link.parent} z-100 w-[100%] text-center `}
		>
			<p className={`${hovers.link.child} px-3 py-4 sm:px-4 sm:py-1`}>
				{children}
			</p>
		</a>
	)
}

const RequestAnchorButton = ({
	setIsMenuOpen
}: {
	setIsMenuOpen(stat: boolean): void
}) => {
	return (
		<a
			href='#contacts'
			onClick={() => setIsMenuOpen(false)}
			className={`${hovers.button.parent} mx-4 mt-[40px] flex min-w-[150px] items-center justify-center rounded border-2 border-brand-green bg-background-main text-center text-brand-green hover:border-brand-green-hover sm:my-0  sm:mt-0 sml:ml-[20px] md:ml-[40px]  `}
		>
			<p className={`${hovers.button.child} px-4 py-2 sm:py-1`}>Send request</p>
		</a>
	)
}
