import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Icons
import dragHandle from "../img/drag-handle-icon.svg";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/delete.svg";

const Task = ({ priority, task, tasks, setTasks, id }) => {
	//State
	const [showTask, setShowTask] = useState(true);

	const [swipeDirection, setSwipeDirection] = useState({
		direction: 0,
		e: null,
	});

	const swipeVariants = {
		exit: (custom) => ({
			x: custom,
		}),
	};

	//UseEffect that triggers when swipeDirection is fired
	useEffect(() => {
		//either delete or mark as done
		if (swipeDirection.e || swipeDirection.direction === 500) {
			setShowTask(false);
			setTimeout(() => {
				setTasks(
					tasks.filter((t) => swipeDirection.e.target.id !== t.id)
				);
			}, 100);
		} else if (swipeDirection.e || swipeDirection.direction === -500) {
			setShowTask(false);
			const newTasks = tasks.map((t) => {
				if (swipeDirection.e.target.id === t.id) {
					return {
						...t,
						isDone: !t.isDone,
					};
				} else {
					return {
						...t,
					};
				}
			});
			setTasks(newTasks);
		}
	}, [swipeDirection]);

	//Input Handlers
	const updateTasksHandler = (e) => {
		setSwipeDirection({ direction: -1000, e });
	};

	const deleteHandler = (e) => {
		setSwipeDirection({ direction: 1000, e });
	};

	return (
		<div className={`task-wrapper done`}>
			<AnimatePresence>
				{showTask && (
					<motion.div
						className={`task ${priority}`}
						id={id}
						variants={swipeVariants}
						exit="exit"
						custom={swipeDirection.direction}
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
							<div className={`hover-options-inner ${priority}`}>
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
	);
};

export default Task;
