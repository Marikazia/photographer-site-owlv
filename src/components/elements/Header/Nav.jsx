import React from "react"

export const Nav = () => {
	getLiState(){
		return {
			items: [
				{ id: 1, name: "/" },
				{ id: 2, name: "/" },
				{ id: 3, name: "/" },
				{ id: 4, name: "/" },
			]
		}
	}
	navLi(){
		return (
			<div className="nav-top">
				<ul>
					{this.state.items.map(() =>
						<li className="nav-name" key={item.name}>
							{item.name}
						</li>
					)}
				</ul>
			</div>
		)
	}
	render(){
		return (
			<navLi />
		)
	}
}

ReactDOM.render(<Nav />, document.getElementById('app'));