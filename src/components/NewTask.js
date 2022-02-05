import React from "react";

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
				<textarea
					type="text"
					className={`new-task-input ${priority}`}
				/>
				<div className={`${priority}-button-container`}>
					<button className={`${priority}-secondary-button`}>
						Cancel
					</button>
					<button className={`${priority}-primary-button`}>
						Add Task
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewTask;
