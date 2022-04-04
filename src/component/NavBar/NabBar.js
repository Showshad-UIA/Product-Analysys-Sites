import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";

const NabBar = () => {
	const routes = [
		{ id: 1, name: "Home", link: "/home" },
		{ id: 1, name: "Reviews", link: "/reviews" },
		{ id: 1, name: "Blog", link: "/blog" },
		{ id: 1, name: "About", link: "/about" },
	];
	return (
		<nav>
			<ul>
				{routes.map((route) => (
					<NavigationLink key={route.id} route={route}></NavigationLink>
				))}
			</ul>
		</nav>
	);
};

export default NabBar;
