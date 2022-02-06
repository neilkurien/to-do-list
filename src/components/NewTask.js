import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({ priority, task, tasks, setTasks, id }) => {
	//State
	const [textInput, setTextInput] = useState("");
	const [isEnabled, setIsEnabled] = useState(() => {
		return textInput !== "";
	});

	//Disable buttons if there is no text entered
	useEffect(() => {
		textInput !== "" ? setIsEnabled(true) : setIsEnabled(false);
	}, [textInput]);

	//Input Handlers

	const updateTextValue = (e) => {
		setTextInput(e.target.value);
	};

	const addTaskHandler = (e) => {
		e.preventDefault();

		const newTask = {
			taskDetail: textInput,
			priority: priority,
			id: uuidv4(),
			isDone: false,
		};

		setTasks([...tasks, newTask]);
		//clear out textInput
		setTextInput("");

		//write cancel function
		//hide add task input
		//make sure task is entering from the top
		//animate entry of task
	};

	return (
		<div className="task-wrapper">
			<form className={`new-task ${priority}`} id={id}>
				<textarea
					placeholder="What do you want to do?"
					value={textInput}
					onChange={updateTextValue}
					type="text"
					className={`new-task-input ${priority}`}
				/>
				<div className={`${priority}-button-container`}>
					<button className={`${priority}-secondary-button`}>
						Cancel
					</button>
					<button
						className={
							isEnabled
								? `${priority}-primary-button`
								: `${priority}-disabled-button`
						}
						onClick={
							isEnabled
								? addTaskHandler
								: console.log(`errorState ${priority}`)
						}
						type="submit"
					>
						Add Task
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewTask;
