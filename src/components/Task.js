import React from "react";

//Icons
import dragHandle from "../img/drag-handle-icon.svg";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/delete.svg";

const Task = () => {
	return (
		<div className="task-wrapper">
			<div className="task Low">
				<div className="align-left">
					<img src={dragHandle} className="drag-handle" alt="" />
					<input type="checkbox" className="to-do-checkbox" />
					<p>
						Item that goes on for one line item that goes on for
						another line
					</p>
				</div>
				<div className="hover-options">
					<div className="overflow-gradient Low"></div>
					<div className="hover-options-inner Low">
						<img src={editIcon} className="edit-icon" alt="" />
						<img src={deleteIcon} className="delete-icon" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
