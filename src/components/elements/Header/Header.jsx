import React from 'react'
import styles from './Header.module.sass'

const Header = () => {
	return (
		<div className={styles.header}>
			<a href='/'>
				<img src="/" alt="" />
			</a>
			<Nav />
		</div>
	)
}

export default Header