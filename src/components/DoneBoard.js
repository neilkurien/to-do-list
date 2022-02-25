import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const DoneBoard = ({ tasks, setTasks, priority, allTasks }) => {
	return (
		<div className={`priority-board Done`}>
			<div className="board-header">
				<div className="title">
					<h2>Done</h2>
				</div>
				<div className="separator"></div>
			</div>
			<Droppable droppableId={`${priority.toLowerCase()}`}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<div className="task-container">
							{tasks.map((task, index) => (
								<Task
									task={task}
									priority={priority}
									setTasks={setTasks}
									tasks={tasks}
									allTasks={allTasks}
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

export default DoneBoard;
