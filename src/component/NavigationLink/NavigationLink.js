import React from "react";

const NavigationLink = (props) => {
	const { name, link } = props.route;
	return (
		<div>
			<li>
				<a href={link}>{name}</a>
			</li>
		</div>
	);
};

export default NavigationLink;
