import React from "react";
import "./HomeDetails.css";
const HomeDetails = () => {
	return (
		<div className="flex mt-6 container mx-auto">
			<div className="w-50 mr-4">
				<h2 className="text-4xl">Bazar review apps</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					dignissimos ipsa quia nesciunt? Aliquam fugit fugiat possimus et
					excepturi eligendi voluptatem doloribus, tenetur, sapiente sit
					voluptatum culpa aspernatur nobis voluptatibus!
				</p>
			</div>
			<div className="grocery h-50 mr-10">
				<img src="download.jpg" alt="" />
			</div>
		</div>
	);
};

export default HomeDetails;
