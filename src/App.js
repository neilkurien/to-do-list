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

	//Filter tasks into Completed and To Do
	const [completeTasks, toDoTasks] = tasks.reduce(
		(result, element) => {
			result[element.isDone ? 0 : 1].push(element);
			return result;
		},
		[[], []]
	);

	return (
		<>
			<Header />
			<div className="board-container">
				<PriorityBoard
					priority="High"
					setTasks={setTasks}
					tasks={toDoTasks}
				/>
				<PriorityBoard
					priority="Medium"
					setTasks={setTasks}
					tasks={toDoTasks}
				/>
				<PriorityBoard
					priority="Low"
					setTasks={setTasks}
					tasks={toDoTasks}
				/>
				<DoneBoard
					priority="Done"
					setTasks={setTasks}
					tasks={completeTasks}
				/>
			</div>
		</>
	);
}

export default App;
