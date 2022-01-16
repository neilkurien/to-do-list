import React from "react";

import plusIcon from "../img/plus.svg";

const PriorityBoard = ({ priority }) => {
	return (
		<div className={`priority-board ${priority}`}>
			<div className="board-header">
				<div className="title">
					<h2>{priority}</h2>

					<img src={plusIcon} alt="" />
				</div>
				<div className="separator"></div>
			</div>
			<div className="task-container"></div>
		</div>
	);
};

export default PriorityBoard;
