import React from 'react'
import styles from './Header.module.sass'
import Nav from './Nav'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className="">
				<a href='/'>
					<img
						src="/"
						alt="OwlV"
						height=''
						width=''
					/>
				</a>
			</div>
			<Nav />
		</div>
	)
}

export default Header