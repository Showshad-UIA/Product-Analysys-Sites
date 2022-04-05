import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";

const NabBar = () => {
	const routes = [
		{ id: 1, name: "Home", link: "/home" },
		{ id: 2, name: "Review", link: "/review" },
		{ id: 3, name: "Blog", link: "/blog" },
		{ id: 4, name: "About", link: "/about" },
		{ id: 5, name: "OverView", link: "/overView" },
	];
	return (
		<nav className="bg-indigo-500 h-10 mt-3">
			<ul className="md:flex justify-end mt-4 text-300 ">
				{routes.map((route) => (
					<NavigationLink key={route.id} route={route}></NavigationLink>
				))}
			</ul>
		</nav>
	);
};

export default NabBar;
