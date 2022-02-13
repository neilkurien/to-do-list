import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const DoneBoard = ({ tasks, setTasks, priority }) => {
	return (
		<div className={`priority-board Done`}>
			<div className="board-header">
				<div className="title">
					<h2>Done</h2>
				</div>
				<div className="separator"></div>
			</div>
			<Droppable droppableId={`${priority}-priority-board`}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<div className="task-container">
							{tasks
								.filter((task) => task.isDone === true) //filter out all tasks that are incomplete
								.map((task) => (
									<Task
										task={task}
										priority={priority}
										setTasks={setTasks}
										tasks={tasks}
										id={task.id}
										key={task.id}
									/>
								))}
						</div>
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default DoneBoard;
