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
			name: "Item 1",
			income: 10000,
			invest: 4000,
			percent: 10,
		},
		{
			name: "Item 2",
			income: 50000,
			invest: 9000,
			percent: 13,
		},
		{
			name: "Item 3",
			income: 83000,
			invest: 4000,
			percent: 10,
		},
		{
			name: "Item 4",
			income: 50000,
			invest: 8000,
			percent: 30,
		},
		{
			name: "Item 5",
			income: 40000,
			invest: 9000,
			percent: 30,
		},
		{
			name: "Item 6",
			income: 55000,
			invest: 3000,
			percent: 20,
		},
		{
			name: "Item 7",
			income: 30000,
			invest: 24000,
			percent: 60,
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
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="invest" fill="#8884d8" />
			<Bar dataKey="income" fill="#82ca9d" />
		</BarChart>
	);
};

export default DisplayBarChart;
