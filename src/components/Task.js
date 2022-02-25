import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Draggable } from "react-beautiful-dnd";

//Utils
import { removeFromList, addToList } from "../utils";

//Icons
import dragHandle from "../img/drag-handle-icon.svg";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/delete.svg";
import doneIcon from "../img/tick.svg";

const Task = ({ priority, task, tasks, setTasks, id, index, allTasks }) => {
	//State
	const [showTask, setShowTask] = useState(true);

	const [whichAction, setWhichAction] = useState({
		name: "",
		message: "",
		direction: 0,
		e: null,
	});

	const swipeVariants = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
		},
		exit: (custom) => ({
			x: custom,
			transition: { duration: 0.6, ease: "easeOut" },
		}),
	};

	//UseEffect that triggers when whichAction is changed
	useEffect(() => {
		if (whichAction.e) {
			setShowTask(false);
			const listCopy = { ...allTasks };
			const thisPriorityList = listCopy[priority.toLowerCase()];
			const [clickedTask] = thisPriorityList.filter(
				(task) => task.id === whichAction.e.target.id
			);
			const taskIndex = thisPriorityList.findIndex(
				(task) => task.id === whichAction.e.target.id
			);

			const [removedElement, resultList] = removeFromList(
				thisPriorityList,
				taskIndex
			);

			console.log(removedElement);
			listCopy[priority.toLowerCase()] = resultList;

			//either delete or mark as done
			if (whichAction.name === "delete") {
				setTimeout(() => {
					setTasks(listCopy);
				}, 650);
			} else if (whichAction.name === "done") {
				if (!clickedTask.isDone) {
					removedElement.isDone = true;
					listCopy["done"] = addToList(
						listCopy["done"],
						0,
						removedElement
					);
				} else {
					removedElement.isDone = false;
					listCopy[`${clickedTask.priority.toLowerCase()}`] =
						addToList(
							listCopy[`${clickedTask.priority.toLowerCase()}`],
							0,
							removedElement
						);
				}
				setTimeout(() => {
					setTasks(listCopy);
				}, 650);
			}
		}
	}, [allTasks, priority, setTasks, whichAction]);

	//Input Handlers
	const updateTasksHandler = (e) => {
		setWhichAction({
			name: "done",
			message: "Amazing!",
			direction: 600,
			e,
		});
	};

	const deleteHandler = (e) => {
		setWhichAction({
			name: "delete",
			message: "Deleted",
			direction: -600,
			e,
		});
	};

	return (
		<Draggable
			draggableId={task.id}
			index={index}
			disableInteractiveElementBlocking
		>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<div className={`task-wrapper ${whichAction.name}`}>
						{(whichAction.name === "delete" ||
							whichAction.name === "done") && (
							<div className={`task-bg ${whichAction.name}`}>
								<div className="bg-icon">
									{whichAction.name === "delete" && (
										<img
											src={deleteIcon}
											alt={`delete-icon`}
										/>
									)}
									{whichAction.name === "done" && (
										<img src={doneIcon} alt={`done-icon`} />
									)}
								</div>
								<div className="bg-text">
									<p>{whichAction.message}</p>
								</div>
							</div>
						)}
						<AnimatePresence exitBeforeEnter>
							{showTask && (
								<motion.div
									className={`task ${priority}`}
									id={id}
									variants={swipeVariants}
									exit="exit"
									transition={{
										ease: "easeOut",
									}}
									custom={whichAction.direction}
								>
									<div className="align-left">
										<img
											src={dragHandle}
											className="drag-handle"
											alt=""
										/>
										<label>
											<input
												type="checkbox"
												className="to-do-checkbox"
												checked={task.isDone}
												id={task.id}
												onChange={updateTasksHandler}
											/>
										</label>
										<p>{task.taskDetail}</p>
									</div>
									<div className="hover-options">
										<div
											className={`overflow-gradient ${priority}`}
										></div>
										<div
											className={`hover-options-inner ${priority}`}
										>
											<img
												src={editIcon}
												className="edit-icon"
												alt=""
											/>
											<img
												src={deleteIcon}
												onClick={deleteHandler}
												id={task.id}
												className="delete-icon"
												alt=""
											/>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Task;
