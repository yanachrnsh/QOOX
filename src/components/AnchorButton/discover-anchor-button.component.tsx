import arrowIcon from '../../assets/arrow-right-top.svg'
import { styles } from '../../constants/styles-constants'

export const DiscoverAnchorButton = ({ style = '' }) => {
	return (
		<a
			href='#cases'
			className={` ${styles.flexCenter} group/large  mb-22 relative mt-6 w-[100%] min-w-[200px] max-w-[100%] overflow-hidden rounded-xl bg-brand-green px-9 py-9 text-center text-light-primary sm:self-start sm:p-20 lg:mb-0 lg:mt-0 lg:h-[100%]  ${style} `}
		>
			<p className={`relative flex items-center justify-center `}>
				<span className='z-20 mr-6 transition duration-700 ease-in-out group-hover/large:text-brand-green'>
					Discover Our Expertise
				</span>
				<img
					src={arrowIcon}
					alt='arrow'
					className='absolute -right-4 z-20 rounded-full hover:text-brand-green '
				></img>
				<span className=' absolute -right-4 z-10 h-8 w-8 rounded-full bg-light-primary transition duration-700 ease-in-out group-hover/large:scale-[5500%]'></span>
			</p>
		</a>
	)
}
