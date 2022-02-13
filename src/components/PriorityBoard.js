import React, { useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import { AnimatePresence } from "framer-motion";
import { Droppable } from "react-beautiful-dnd";

const PriorityBoard = ({ tasks, priority, setTasks }) => {
	//State
	const [showTaskInput, setShowTaskInput] = useState(false);

	//Handlers
	const newTaskHandler = (e) => {
		setShowTaskInput(!showTaskInput);
	};

	return (
		<div className={`priority-board ${priority}`}>
			<div className="board-header">
				<div className="title">
					<h2>{priority}</h2>

					<svg
						onClick={newTaskHandler}
						className={showTaskInput ? "dismiss" : ""}
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12.168 1.5C6.09297 1.5 1.16797 6.425 1.16797 12.5C1.16797 18.575 6.09297 23.5 12.168 23.5C18.243 23.5 23.168 18.575 23.168 12.5C23.168 6.425 18.243 1.5 12.168 1.5ZM13.168 16.5C13.168 16.7652 13.0626 17.0196 12.8751 17.2071C12.6875 17.3946 12.4332 17.5 12.168 17.5C11.9028 17.5 11.6484 17.3946 11.4609 17.2071C11.2733 17.0196 11.168 16.7652 11.168 16.5V13.5H8.16797C7.90275 13.5 7.6484 13.3946 7.46086 13.2071C7.27333 13.0196 7.16797 12.7652 7.16797 12.5C7.16797 12.2348 7.27333 11.9804 7.46086 11.7929C7.6484 11.6054 7.90275 11.5 8.16797 11.5H11.168V8.5C11.168 8.23478 11.2733 7.98043 11.4609 7.79289C11.6484 7.60536 11.9028 7.5 12.168 7.5C12.4332 7.5 12.6875 7.60536 12.8751 7.79289C13.0626 7.98043 13.168 8.23478 13.168 8.5V11.5H16.168C16.4332 11.5 16.6875 11.6054 16.8751 11.7929C17.0626 11.9804 17.168 12.2348 17.168 12.5C17.168 12.7652 17.0626 13.0196 16.8751 13.2071C16.6875 13.3946 16.4332 13.5 16.168 13.5H13.168V16.5Z"
						/>
					</svg>
				</div>
				<div className="separator"></div>
			</div>
			<Droppable droppableId={`${priority}-priority-board`}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<div className="task-container">
							<AnimatePresence>
								{showTaskInput && (
									<NewTask
										priority={priority}
										setTasks={setTasks}
										tasks={tasks}
										setShowTaskInput={setShowTaskInput}
									/>
								)}
							</AnimatePresence>
							{tasks
								.filter(
									//filter tasks that belong to this priority board, and remove completed tasks
									(task) =>
										task.priority === `${priority}` &&
										task.isDone === false
								)
								.map((task, index) => (
									<Task
										task={task}
										priority={priority}
										setTasks={setTasks}
										tasks={tasks}
										id={task.id}
										key={task.id}
										index={index}
									/>
								))}
							{provided.placeholder}
						</div>
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default PriorityBoard;
