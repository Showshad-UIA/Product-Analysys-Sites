import "./App.css";
import DisplayBarChart from "./component/DisplayBarChart/DisplayBarChart";
import DisplayChart from "./component/DisplayChart/DisplayChart";
import Header from "./component/Header/Header";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<DisplayChart></DisplayChart>
			<DisplayBarChart></DisplayBarChart>
		</div>
	);
}

export default App;
