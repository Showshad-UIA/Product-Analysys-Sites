import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("product.json")
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return (
		<div className="items">
			{items.map((item) => (
				<Item key={item.id} item={item}></Item>
			))}
		</div>
	);
};

export default Items;
