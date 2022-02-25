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

//Utils
import { removeFromList, addToList } from "./utils";

function App() {
	//Custom hook to check localStorage for past task data
	const useLocalStorage = (initialState, key) => {
		const localTasks = localStorage.getItem(key);
		return localTasks !== null ? JSON.parse(localTasks) : initialState;
	};

	//State
	const [tasks, setTasks] = useState(useLocalStorage(initialData(), "tasks"));

	const [showDone, setShowDone] = useState(false);
	const [hoverDone, setHoverDone] = useState(false);

	//Every time the state of tasks changes, write that change to localStorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	//reorder function triggered on drop
	const onDragEnd = (result) => {
		const { destination, source } = result;
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

		const listCopy = { ...tasks };

		//Remove element from Source List
		const sourceList = listCopy[source.droppableId];
		const [removedElement, newSourceList] = removeFromList(
			sourceList,
			source.index
		);
		listCopy[source.droppableId] = newSourceList;

		//Add element to Destination List
		const destinationList = listCopy[destination.droppableId];
		listCopy[destination.droppableId] = addToList(
			destinationList,
			destination.index,
			removedElement
		);

		setTasks(listCopy);
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
							tasks={tasks.high}
							allTasks={tasks}
							key={1}
						/>
						<PriorityBoard
							priority="Medium"
							setTasks={setTasks}
							tasks={tasks.medium}
							allTasks={tasks}
							key={2}
						/>
						<PriorityBoard
							priority="Low"
							setTasks={setTasks}
							tasks={tasks.low}
							allTasks={tasks}
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
							tasks={tasks.done}
							allTasks={tasks}
							key={4}
						/>
					</div>
				</div>
			</>
		</DragDropContext>
	);
}

export default App;
