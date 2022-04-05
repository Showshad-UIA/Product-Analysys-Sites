import React from "react";
import "./Item.css";

const Item = (props) => {
	const { img, name, id, rating } = props.item;
	return (
		<div className="items">
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				<p>Name:{name}</p>
				<p>Id:{id}</p>
				<p>Rating:{rating}</p>
			</div>
		</div>
	);
};

export default Item;
