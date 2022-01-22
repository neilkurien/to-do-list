import React from "react";

//Icons
import dragHandle from "../img/drag-handle-icon.svg";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/delete.svg";

const Task = ({ priority, task, isDone, tasks, setTasks, id }) => {
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
					isDone: t.isDone,
				};
			}
		});
		console.log(newTasks[0]);
		setTasks(newTasks);
	};

	return (
		<>
			{task.priority === `${priority}` && (
				<div className="task-wrapper">
					<div className={`task ${priority}`} id={id}>
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
									className="delete-icon"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Task;
