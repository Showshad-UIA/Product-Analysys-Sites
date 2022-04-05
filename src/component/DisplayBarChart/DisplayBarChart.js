import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const DisplayBarChart = () => {
	const data = [
		{
			month: "Mar",
			investment: 100000,
			sell: 241,
			profit: 10401,
			id: 1,
		},
		{
			month: "Apr",
			investment: 200000,
			sell: 423,
			profit: 24500,
			id: 1,
		},
		{
			month: "May",
			investment: 500000,
			sell: 726,
			profit: 67010,
			id: 1,
		},
		{
			month: "Jun",
			investment: 500000,
			sell: 529,
			profit: 40405,
			id: 1,
		},
		{
			month: "Jul",
			investment: 600000,
			sell: 601,
			profit: 50900,
			id: 1,
		},
		{
			month: "Aug",
			investment: 700000,
			sell: 670,
			profit: 61000,
			id: 1,
		},
	];
	return (
		<BarChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="id" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="sell" fill="#8884d8" />
			<Bar dataKey="investment" fill="#82ca9d" />
		</BarChart>
	);
};

export default DisplayBarChart;
