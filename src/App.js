import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

//Styles
import "./styles/app.scss";

//Components
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

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		console.log(result);
		//if it is not dragged into a droppable
		if (!destination) {
			return;
		}

		//if it is not moved from current position
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const destinationPriority = destination.droppableId.split("-", 1)[0];

		//create new state with updated values
		const newTasks = tasks.map((t) => {
			if (draggableId === t.id) {
				//change priority based on where the draggable is dropped
				return {
					...t,
					priority: destinationPriority,
				};
			} else {
				return {
					...t,
				};
			}
		});
		setTasks(newTasks);
	};

	return (
		<DragDropContext onDragEnd={(result) => onDragEnd(result)}>
			<>
				<Header
					showDone={showDone}
					setShowDone={setShowDone}
					hoverDone={hoverDone}
					setHoverDone={setHoverDone}
				/>
				<div
					className={`board-container ${
						showDone ? "show-done" : ""
					} ${hoverDone ? "hover" : ""}`}
				>
					<div className="priority-board-container">
						<PriorityBoard
							priority="High"
							setTasks={setTasks}
							tasks={tasks}
							key={1}
						/>
						<PriorityBoard
							priority="Medium"
							setTasks={setTasks}
							tasks={tasks}
							key={2}
						/>
						<PriorityBoard
							priority="Low"
							setTasks={setTasks}
							tasks={tasks}
							key={3}
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
							key={4}
						/>
					</div>
				</div>
			</>
		</DragDropContext>
	);
}

export default App;
