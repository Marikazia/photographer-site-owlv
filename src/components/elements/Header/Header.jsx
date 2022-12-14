import React from 'react'
import styles from './Header.module.sass'
import Nav from './Nav'

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