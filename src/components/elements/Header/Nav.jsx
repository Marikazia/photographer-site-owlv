import React from "react"
import { Link } from "react-router-dom";

const Nav = () => {
	const items = [
		{ id: 1, name: "Home", link: "/" },
		{ id: 2, name: "About me", link: "about" },
		{ id: 3, name: "Shop", link: "shop" },
		{ id: 4, name: "Blog", link: "blog" },
		{ id: 5, name: "Contacts", link: "contacts" }
	];

	return (
		<>
			<div className="nav-top">
				<ul>
					{items.map((item) =>
						<li className="nav-name" key={item.name} >
							<Link to={item.link}>
								{item.name}
							</Link>

						</li>
					)}
				</ul>
			</div>
		</>
	);
}

export default Nav;