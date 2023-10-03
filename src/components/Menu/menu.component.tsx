import { navLinks } from '../../constants/content-constants'
import { hovers } from '../../constants/styles-constants'

export const Menu = ({
	isMenuOpen,
	setIsMenuOpen
}: {
	isMenuOpen: boolean
	setIsMenuOpen(stat: boolean): void
}) => {
	const activClass = isMenuOpen
		? ` flex flex-col justify-start items-center absolute top-[80px] w-[100%] h-[400px] left-0 bg-backgroundMain z-10 sm:hidden sidebar`
		: ` hidden sm:flex sm:flex-row align-center`

	return (
		<nav className={activClass}>
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
			className={`${hovers.link.parent} text-center w-[100%]`}
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
			className={`${hovers.button.parent} hover:border-brandColorGreenHover w-[100%] flex justify-center items-center text-center rounded border-2 border-brandColorGreen mt-[40px] sm:mt-0 sm:ml-[20px] md:ml-[40px]  min-w-[150px] text-brandColorGreen `}
		>
			<p className={`${hovers.button.child} py-2 px-4 sm:py-0 `}>
				Send request
			</p>
		</a>
	)
}
