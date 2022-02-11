import React, { useState, useEffect } from "react";

//Styles
import "./styles/app.scss";

//Commponents
import PriorityBoard from "./components/PriorityBoard";
import DoneBoard from "./components/DoneBoard";
import Header from "./components/Header";

//Import Default Tasks
import initialData from "./data";

function App() {
	//Custom hook to check localStorage for past task data
	const useLocalStorage = (initialState, key) => {
		const localTasks = localStorage.getItem(key);
		return localTasks !== null ? JSON.parse(localTasks) : initialState;
	};

	//State
	/* const [tasks, setTasks] = useState(useLocalStorage(initialData(), "tasks")); */
	const [tasks, setTasks] = useState(initialData);
	const [showDone, setShowDone] = useState(false);
	const [hoverDone, setHoverDone] = useState(false);

	//Every time the state of tasks changes, write that change to localStorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<Header
				showDone={showDone}
				setShowDone={setShowDone}
				hoverDone={hoverDone}
				setHoverDone={setHoverDone}
			/>
			<div
				className={`board-container ${showDone ? "show-done" : ""} ${
					hoverDone ? "hover" : ""
				}`}
			>
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
				<div
					className={`grad-overlay ${hoverDone ? "show" : ""}`}
				></div>
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
