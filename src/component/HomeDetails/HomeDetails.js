import React from "react";
import "./HomeDetails.css";
const HomeDetails = () => {
	return (
		<div className="flex mt-6 container mx-auto">
			<div className="w-50 mr-4">
				<h2 className="text-6xl text-purple-900">Bazar review apps</h2>
				<h4 className="text-3xl mt-3 text-green-400">Pick your best items</h4>
				<p className="text-2xl mt-10">
					These days the life style of the people is different. People feel
					uncomfortable and time consuming for going crowded markets. So,
					E-Shopping is a boon as it saves lot of time. Online shopping is a
					process whereby consumers directly buy goods, services etc. from a
					seller without an intermediary service over the Internet. Online
					stores are usually available 24 hours a day and many consumers have
					internet access both at work and at home
				</p>
				<button class="text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400 mt-5">
					More Details..
				</button>
			</div>
			<div className=" ml-10 shop">
				<img src="bazar.jpg" alt="" />
			</div>
		</div>
	);
};

export default HomeDetails;
