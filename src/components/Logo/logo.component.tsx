import logo from '@/assets/logo.svg'

export const Logo = () => {
	return (
		<div className='shrink-0'>
			<a href='#'>
				<img
					src={logo}
					alt='logo'
					className='h-[24px] w-[74px] shrink-0 cursor-pointer sm:h-[28px] sm:w-[88px]'
				></img>
			</a>
		</div>
	)
}
