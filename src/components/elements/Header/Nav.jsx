import React from "react"

const Nav = () => {
	const navs = [
		{ id: 1, name: "/" },
		{ id: 2, name: "/" },
		{ id: 3, name: "/" },
		{ id: 4, name: "/" },
	];

	return (
		<div className="nav-top">
			<ul>
				{this.state.navs.map(() =>
					<li className="nav-name" key={navs.name}>
						{navs.name}
					</li>
				)}
			</ul>
		</div>
	)

}

export default Nav;