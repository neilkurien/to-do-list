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
import initialData2 from "./data2";
import initialData3 from "./data3";

function App() {
	//Custom hook to check localStorage for past task data
	const useLocalStorage = (initialState, key) => {
		const localTasks = localStorage.getItem(key);
		return localTasks !== null ? JSON.parse(localTasks) : initialState;
	};

	//State
	/* const [tasks, setTasks] = useState(useLocalStorage(initialData(), "tasks")); */
	const [tasks, setTasks] = useState(initialData);
	console.log(`tasks`);
	console.log(tasks);

	const [showDone, setShowDone] = useState(false);
	const [hoverDone, setHoverDone] = useState(false);

	const initialSortingOrder = () => {
		const high = tasks.filter((task) => task.priority === "High");
		const medium = tasks.filter((task) => task.priority === "Medium");
		const low = tasks.filter((task) => task.priority === "Low");
		const done = tasks.filter((task) => task.isDone);
		return {
			high,
			medium,
			low,
			done,
		};
	};

	const [sortingOrder, setSortingOrder] = useState(initialSortingOrder());
	console.log(sortingOrder);

	/* const highPriority = () => {
		return [
			tasks
				.filter(
					(task) => task.priority === "High" && task.isDone === false
				)
				.sort((a, b) => a.index - b.index),
		];
	}; */

	/* console.log(tasks);
	const newNew = Array.from(tasks);
	console.log(newNew);
	newNew.splice(3, 0, newTask2);
	console.log(newNew); */

	//Every time the state of tasks changes, write that change to localStorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	//reorder function triggered on drop
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

		/* const beforeSourcePriority = source.droppableId.split("-", 1)[0]; */
		const sourcePriority = source.droppableId
			.split("-", 1)[0]
			.toLowerCase();
		//const sourcePriority = beforeSourcePriority.toLowerCase();
		const destinationPriority = destination.droppableId
			.split("-", 1)[0]
			.toLowerCase();

		const sourceIndex = source.index;
		const destinationIndex = destination.index;

		console.log(`sortingOrder`);
		console.log(sortingOrder);

		const sourceArray = Array.from(sortingOrder[sourcePriority]);
		const destinationArray = Array.from(sortingOrder[destinationPriority]);

		const newOrderObj = tasks.map((t) => {
			if (draggableId === t.id) {
				sourceArray.splice(source.index, 1);
				destinationArray.splice(destination.index, 0, t);
				/* const newSourceObj = Object.fromEntries(sourceArray);
				const newDestinationObj = Object.fromEntries(destinationArray); */
				return {
					sourcePriority: sourceArray,
					destinationPriority: destinationArray,
				};
			}
		});
		console.log(`newOrderObj`);
		console.log(newOrderObj);
		setSortingOrder(newOrderObj);
		//newOrder.sourcePriority

		/* const newOrder = tasks.map((t) => {
			sourcePriority
		}) */

		//create new state with updated values
		/* const newTasks = tasks.map((t) => {
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
		setTasks(newTasks); */
		//setSortingOrder(initialSortingOrder());
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
							sortedTasks={sortingOrder.high}
							key={1}
						/>
						<PriorityBoard
							priority="Medium"
							setTasks={setTasks}
							tasks={tasks}
							sortedTasks={sortingOrder.medium}
							key={2}
						/>
						<PriorityBoard
							priority="Low"
							setTasks={setTasks}
							tasks={tasks}
							sortedTasks={sortingOrder.low}
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
							sortedTasks={sortingOrder.done}
							key={4}
						/>
					</div>
				</div>
			</>
		</DragDropContext>
	);
}

export default App;
