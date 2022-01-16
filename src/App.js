import React from "react";

//Styles
import "./styles/app.scss";

//Commponents
import PriorityBoard from "./components/PriorityBoard";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="board-container">
				<PriorityBoard priority="High" />
				<PriorityBoard priority="Medium" />
				<PriorityBoard priority="Low" />
			</div>
		</>
	);
}

export default App;
