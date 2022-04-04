import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";

const NabBar = () => {
	const routes = [
		{ id: 1, name: "Home", link: "/home" },
		{ id: 1, name: "Reviews", link: "/reviews" },
		{ id: 1, name: "Blog", link: "/blog" },
		{ id: 1, name: "About", link: "/about" },
		{ id: 1, name: "Display", link: "/display" },
	];
	return (
		<nav className="bg-indigo-200">
			<ul className="md:flex justify-end mt-4 text-300 ">
				{routes.map((route) => (
					<NavigationLink key={route.id} route={route}></NavigationLink>
				))}
			</ul>
		</nav>
	);
};

export default NabBar;
