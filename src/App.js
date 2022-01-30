import React, { useEffect, useState } from "react";

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
	const [showDone, setShowDone] = useState(false);

	useEffect(() => {});

	return (
		<>
			<Header showDone={showDone} setShowDone={setShowDone} />
			<div className={`board-container ${showDone ? "show-done" : ""}`}>
				<div className="priority-board-container">
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
				</div>
				<div className="done-board-container">
					<DoneBoard
						priority="Done"
						setTasks={setTasks}
						tasks={tasks}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
