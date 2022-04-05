import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Header from "./component/Header/Header";
import ItemReview from "./component/ItemReview/ItemReview";

import NabBar from "./component/NavBar/NabBar";
import NotFound from "./component/NotFound/NotFound";
import OverView from "./component/OverView/OverView";
import Review from "./component/Review/Review";
import Home from "./Home/Home";

function App() {
	return (
		<div className="App">
			{/* <NabBar></NabBar> */}
			<Header></Header>
			<Routes>
				<Route path="/home" element={<Home></Home>} />
				<Route path="/about" element={<About></About>} />
				<Route path="/overView" element={<OverView></OverView>} />
				<Route path="/item/:itemId" element={<ItemReview></ItemReview>}></Route>
				<Route path="/blog" element={<Blog></Blog>} />
				<Route path="/review" element={<Review></Review>} />

				<Route path="*" element={<NotFound></NotFound>} />
			</Routes>
		</div>
	);
}

export default App;
