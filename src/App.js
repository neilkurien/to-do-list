import React, { useState } from "react";

//Styles
import "./styles/app.scss";

//Commponents
import PriorityBoard from "./components/PriorityBoard";
import DoneBoard from "./components/DoneBoard";
import Header from "./components/Header";

//Import Default Tasks
import data from "./data";

function App() {
	//State
	const [tasks, setTasks] = useState(data());

	console.log(tasks);

	return (
		<>
			<Header />
			<div className="board-container">
				<PriorityBoard
					priority="High"
					setTasks={setTasks}
					tasks={tasks}
				/>
				<PriorityBoard
					priority="Medium"
					setTasks={setTasks}
					tasks={tasks}
				/>
				<PriorityBoard
					priority="Low"
					setTasks={setTasks}
					tasks={tasks}
				/>
				<DoneBoard priority="Done" setTasks={setTasks} tasks={tasks} />
			</div>
		</>
	);
}

export default App;
