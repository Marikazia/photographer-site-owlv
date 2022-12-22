import React from "react"

const Nav = (props) => {
	const items = [
		{ id: 1, name: "Home", href: "/home" },
		{ id: 2, name: "About me", href: "/about" },
		{ id: 3, name: "Shop", href: "/shop" },
		{ id: 4, name: "Blog", href: "/blog" },
		{ id: 5, name: "Contacts", href: "/contacts" }
	];

	return (
		<>
			<div className="nav-top">
				<ul>
					{items.map((item) =>
						<li className="nav-name" key={item.name}>
							{item.name}
						</li>
					)}
				</ul>
			</div>
		</>
	);
}

export default Nav;