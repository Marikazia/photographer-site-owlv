import React from "react"

const Nav = () => {
	const navs = [
		{ id: 1, name: "Home" },
		{ id: 2, name: "About me" },
		{ id: 3, name: "Shop" },
		{ id: 4, name: "Blog" },
		{ id: 5, name: "Contacts" }
	];

	return (
		<>
			<div className="nav-top">
				<ul>
					{navs.map(() =>
						<li className="nav-name" key={navs.name}>
							{navs.name}
						</li>
					)}
				</ul>
			</div>
		</>
	);
}

export default Nav;