import logo from '../../assets/logo.svg'

export const Logo = () => {
	return (
		<div className='shrink-0'>
			<a href='#'>
				<img
					src={logo}
					alt='logo'
					className='sm:w-[88px] sm:h-[28px] w-[74px] h-[24px] shrink-0 cursor-pointer'
				></img>
			</a>
		</div>
	)
}
