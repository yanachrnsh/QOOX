import { Navbar } from '../components/Navbar/navbar.component'
import { styles } from '../constants/styles-constants'

export const Landing = () => {
	return (
		<div className={`${styles.paddingX} pt-6`}>
			<Navbar></Navbar>
		</div>
	)
}
