import React from "react";

//Icons
import dragHandle from "../img/drag-handle-icon.svg";
import tickIcon from "../img/tick.svg";
import deleteIcon from "../img/delete.svg";

const NewTask = ({ priority, task, tasks, setTasks, id }) => {
	//Input Handlers
	const updateTasksHandler = (e) => {
		const newTasks = tasks.map((t) => {
			if (e.target.id === t.id) {
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
	};

	return (
		<div className="task-wrapper">
			<div className={`new-task ${priority}`} id={id}>
				<input type="text" className="new-task-input" />
				<div className={`new-right-container ${priority}`}>
					<img src={deleteIcon} className="delete-icon" alt="" />
					<img src={tickIcon} className="tick-icon" alt="" />
				</div>
			</div>
		</div>
	);
};

export default NewTask;
