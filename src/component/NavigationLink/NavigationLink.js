import React from "react";

const NavigationLink = (props) => {
	const { name, link } = props.route;
	return (
		<div>
			<li className="mr-12  text-blue-900 font-weight: 600">
				<a href={link}>{name}</a>
			</li>
		</div>
	);
};

export default NavigationLink;
