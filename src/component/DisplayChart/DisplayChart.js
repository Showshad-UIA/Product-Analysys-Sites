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
			id: 1,
			loss: 2300,
			profit: 50401,
		},
		{
			month: "Apr",
			investment: 200000,
			id: 2,
			loss: 1400,
			profit: 8500,
		},
		{
			month: "May",
			investment: 500000,
			id: 3,
			loss: 2500,
			profit: 83010,
		},
		{
			month: "Jun",
			investment: 500000,
			id: 4,
			loss: 2000,
			profit: 14005,
		},
		{
			month: "Jul",
			investment: 600000,
			id: 5,
			loss: 3000,
			profit: 30000,
		},
		{
			month: "Aug",
			loss: 4000,
			id: 6,
			profit: 60000,
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
			<XAxis dataKey="id" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				dataKey="loss"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Line type="monotone" dataKey="profit" stroke="#82ca9d" />
		</LineChart>
	);
};

export default DisplayChart;
