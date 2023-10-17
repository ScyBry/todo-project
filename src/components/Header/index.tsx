import { headerRoutes } from '../../utils/constants'
import styles from './styles.module.sass'

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.header__content}>
				<ul>
					{headerRoutes.map(route => (
						<li key={route.id}>{route.name}</li>
					))}
				</ul>
			</div>
		</header>
	)
}

export default Header
