import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './styles.module.sass'

export const Layout: FC = () => {
	return (
		<div>
			<Header></Header>
			<main className={styles.container}>
				<Outlet></Outlet>
			</main>
		</div>
	)
}

export default Layout
