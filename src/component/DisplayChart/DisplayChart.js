import React from "react";
import {
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const DisplayChart = () => {
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
			region: "America",
			sell: 423,
			profit: 24500,
			id: 20,
		},
		{
			month: "May",
			investment: 500000,
			region: "Bangladesh",
			sell: 726,
			profit: 67010,
			id: 3,
		},
		{
			month: "Jun",
			investment: 500000,
			region: "India",
			sell: 529,
			profit: 40405,
			id: 4,
		},
		{
			month: "Jul",
			investment: 600000,
			region: "Malaysia",
			sell: 601,
			profit: 50900,
			id: 5,
		},
		{
			month: "Aug",
			region: "africa",
			investment: 700000,
			sell: 670,
			profit: 61000,
			id: 31,
		},
	];

	return (
		<LineChart
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
			<XAxis dataKey="region" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				dataKey="id"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Line type="monotone" dataKey="profit" stroke="#82ca9d" />
		</LineChart>
	);
};

export default DisplayChart;
