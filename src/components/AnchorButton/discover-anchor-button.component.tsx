import arrowIcon from '../../assets/arrow-right-top.svg'
import { styles } from '../../constants/styles-constants'

export const DiscoverAnchorButton = ({ style = '' }) => {
	return (
		<a
			href='#cases'
			className={` ${styles.flexCenter} group/large  bg-brandColorGreen min-w-[200px] max-w-[100%] text-lightPrimary text-center relative py-9 px-9 rounded-xl mt-6 mb-22 w-[100%] sm:self-start sm:p-20 lg:h-[100%] lg:mt-0 lg:mb-0 overflow-hidden  ${style} `}
		>
			<p className={`flex items-center justify-center relative `}>
				<span className='z-20 mr-6 transition duration-700 ease-in-out group-hover/large:text-brandColorGreen'>
					Discover Our Expertise
				</span>
				<img
					src={arrowIcon}
					alt='arrow'
					className='absolute -right-4 rounded-full z-20 hover:text-brandColorGreen '
				></img>
				<span className=' bg-lightPrimary absolute -right-4 w-8 h-8 rounded-full transition duration-700 ease-in-out group-hover/large:scale-[5500%] z-10'></span>
			</p>
		</a>
	)
}
