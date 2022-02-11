import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Icons
import dragHandle from "../img/drag-handle-icon.svg";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/delete.svg";
import doneIcon from "../img/tick.svg";

const Task = ({ priority, task, tasks, setTasks, id }) => {
	//State
	const [showTask, setShowTask] = useState(true);

	const [whichAction, setWhichAction] = useState({
		action: "",
		message: "",
		direction: 0,
		e: null,
	});

	const swipeVariants = {
		exit: (custom) => ({
			x: custom,
		}),
	};

	//UseEffect that triggers when whichAction is fired
	useEffect(() => {
		//either delete or mark as done
		if (whichAction.e || whichAction.action === "delete") {
			setShowTask(false);
			setTimeout(() => {
				setTasks(tasks.filter((t) => whichAction.e.target.id !== t.id));
			}, 400);
			//console.log(whichAction.action);
		} else if (whichAction.e || whichAction.action === "done") {
			setShowTask(false);
			const newTasks = tasks.map((t) => {
				if (whichAction.e.target.id === t.id) {
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
	}, [whichAction]);

	//Input Handlers
	const updateTasksHandler = (e) => {
		setWhichAction({
			action: "done",
			message: "Amazing!",
			direction: 500,
			e,
		});
	};

	const deleteHandler = (e) => {
		setWhichAction({
			action: "delete",
			message: "Deleted",
			direction: -500,
			e,
		});
	};

	return (
		<div className={`task-wrapper ${whichAction.action}`}>
			{(whichAction.action === "delete" ||
				whichAction.action === "done") && (
				<div className={`task-bg ${whichAction.action}`}>
					<div className="bg-icon">
						{whichAction.action === "delete" && (
							<img src={deleteIcon} alt={`delete-icon`} />
						)}
						{whichAction.action === "done" && (
							<img src={doneIcon} alt={`done-icon`} />
						)}
					</div>
					<div className="bg-text">
						<p>{whichAction.message}</p>
					</div>
				</div>
			)}
			<AnimatePresence>
				{showTask && (
					<motion.div
						className={`task ${priority}`}
						id={id}
						variants={swipeVariants}
						exit="exit"
						transition={{ ease: "easeOut", duration: 0.6 }}
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
