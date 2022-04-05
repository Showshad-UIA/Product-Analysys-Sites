import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Item = (props) => {
	const { img, name, id, rating } = props.item;
	const navigate = useNavigate();
	const reviewDetails = () => {
		navigate("/item/" + id);
	};
	return (
		<div>
			<h2>Name:{name}</h2>
			<Link to={"/item/" + id}>show details</Link>
			<button onClick={reviewDetails}>{id}</button>
		</div>
	);
};

export default Item;
