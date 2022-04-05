import React from "react";

const Blog = () => {
	return (
		<div>
			<h1 className="text-container text-center mt-5">Basic Questions:</h1>
			<div>
				<h5 className="mb-3 text-3xl">
					{" "}
					Question 1: What is the context API purpose?
				</h5>
				<p>
					Based on my understanding, Passing data from one component to another
					is nearly always essential with component-based page builders. Data is
					often transferred from a parent node to a child element, or from a
					child component to a parent component. As a result, components wind up
					with data they don't need but must share with the rest of the tree.The
					React platform's Context API is a component structure that allows
					users to connect particular types of data at all levels of the
					application. Its objective is to achieve an answer to the prop cutting
					problem.
				</p>
			</div>
			<div>
				<h5 className="mb-3 text-3xl">Question 2: What is semantic tag?</h5>
				<p>
					HTML was built as a markup language to describe early internet
					content. The internet's demands evolved as it increased in popularity
					and was adopted by more people. People wanted to exchange more than
					only scientific publications on the internet, which was initially
					meant for that purpose. People began to desire to make the web appear
					better quite rapidly. Because the web was not supposed to be planned
					from the start, programmers utilised various hacks to arrange things
					in various ways. Programmers would use them to place other items on a
					page rather than using them to describe information in a table.
				</p>
			</div>
		</div>
	);
};

export default Blog;
