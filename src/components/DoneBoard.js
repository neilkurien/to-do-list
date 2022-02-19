import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const DoneBoard = ({ tasks, setTasks, priority, sortedTasks }) => {
	//Sort board
	const sortedBoardTasks = sortedTasks.map((taskID) => tasks[taskID]);

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
							{sortedBoardTasks.map((task) => (
								<Task
									task={task}
									priority={priority}
									setTasks={setTasks}
									tasks={tasks}
									id={task.id}
									key={task.id}
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
