import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemReview = () => {
	const { itemId } = useParams();
	const [item, setItem] = useState({});
	useEffect(() => {
		fetch("product.json")
			.then((res) => res.json())
			.then((data) => setItem(data));
	}, []);

	return (
		<div>
			This is details:{itemId}
			<h3>Name:{item.name}</h3>
			<h3>Name:{item.name}</h3>
			<h3>Rating:{item.rating}</h3>
		</div>
	);
};

export default ItemReview;
