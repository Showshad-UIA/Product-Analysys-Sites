import React from "react";
import DisplayBarChart from "../DisplayBarChart/DisplayBarChart";
import DisplayChart from "../DisplayChart/DisplayChart";

const OverView = () => {
	return (
		<div className="flex mt-10 ml-10">
			<DisplayChart></DisplayChart>
			<DisplayBarChart></DisplayBarChart>
		</div>
	);
};

export default OverView;
