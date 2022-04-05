import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const NavigationLink = (props) => {
	const { name, link } = props.route;
	return (
		<div>
			<li className="mr-12  text-blue-900 font-weight: 600">
				{/* <a href={link}>{name}</a> */}
				<CustomLink to={link}>{name}</CustomLink>
			</li>
		</div>
	);
};

export default NavigationLink;
