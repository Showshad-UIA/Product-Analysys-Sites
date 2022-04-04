import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";

import NabBar from "./component/NavBar/NabBar";
import NotFound from "./component/NotFound/NotFound";
import OverView from "./component/OverView/OverView";
import Review from "./component/Review/Review";
import Home from "./Home/Home";

function App() {
	return (
		<div className="App">
			<NabBar></NabBar>
			<Routes>
				<Route path="/Home" element={<Home></Home>} />
				<Route path="/about" element={<About></About>} />
				<Route path="/overView" element={<OverView></OverView>} />
				<Route path="/blog" element={<Blog></Blog>} />
				<Route path="/review" element={<Review></Review>} />

				<Route path="*" element={<NotFound></NotFound>} />
			</Routes>
		</div>
	);
}

export default App;
