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
			className={`sm:flex sm:flex-row sm:items-center sm:pb-0 pb-[70px] absolute sm:static bg-backgroundMain sm:z-auto  w-full sm:w-auto transition-all duration-500 ease-in-out ${
				isMenuOpen ? 'top-[80px] opacity-100  left-0 ' : 'top-[-430px] left-0 '
			} sm:opacity-100 opacity-0 bg-backgroundMain`}
		>
			{navLinks.map((link: { id: string; title: string }) => (
				<Link key={link.id} id={link.id} setIsMenuOpen={setIsMenuOpen}>
					{link.title}
				</Link>
			))}
			<RequestButton setIsMenuOpen={setIsMenuOpen} />
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
			className={`${hovers.link.parent} text-center w-[100%] z-100 `}
		>
			<p className={`${hovers.link.child} sm:py-1 sm:px-4 py-4 px-3`}>
				{children}
			</p>
		</a>
	)
}

const RequestButton = ({
	setIsMenuOpen
}: {
	setIsMenuOpen(stat: boolean): void
}) => {
	return (
		<a
			href='#contacts'
			onClick={() => setIsMenuOpen(false)}
			className={`${hovers.button.parent} hover:border-brandColorGreenHover flex justify-center items-center text-center rounded border-2 border-brandColorGreen mx-4 mt-[40px] sm:my-0 sm:mt-0 sml:ml-[20px] md:ml-[40px]  min-w-[150px] text-brandColorGreen bg-backgroundMain  `}
		>
			<p className={`${hovers.button.child} py-2 px-4 sm:py-1`}>Send request</p>
		</a>
	)
}
