import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const NewTask = ({ priority, tasks, setTasks, show, setShowTaskInput }) => {
	//State
	const [textInput, setTextInput] = useState("");
	const [isEnabled, setIsEnabled] = useState(false);

	//Disable buttons if there is no text entered
	useEffect(() => {
		textInput !== "" ? setIsEnabled(true) : setIsEnabled(false);
	}, [textInput]);

	//Input Handlers

	const updateTextValue = (e) => {
		setTextInput(e.target.value);
	};

	const clearTextInput = () => {
		setTextInput("");
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
		clearTextInput();
		setShowTaskInput(false);

		//make sure task is entering from the top
		//animate entry of task
	};

	const cancelHandler = () => {
		clearTextInput();
		setShowTaskInput(false);
	};

	//Animation
	const newTaskAnim = {
		hidden: {
			y: -50,
			scale: 0.95,
			opacity: 0,
			transition: {
				ease: "easeOut",
			},
		},
		show: {
			y: 0,
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.25,
				ease: "easeIn",
			},
		},
	};

	return (
		<motion.div
			className={`task-wrapper`}
			//className={`task-wrapper ${show}`}
			variants={newTaskAnim}
			initial="hidden"
			animate="show"
			exit="hidden"
			layoutId={`${priority}-new-task`}
		>
			<form
				className={`new-task ${priority}`}
				//onKeyPress={submitOnKeyPress}
			>
				<textarea
					placeholder="What do you want to do?"
					value={textInput}
					onChange={updateTextValue}
					type="text"
					className={`new-task-input ${priority}`}
				/>
				<div className={`${priority}-button-container`}>
					<button
						className={`${priority}-secondary-button`}
						onClick={cancelHandler}
					>
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
		</motion.div>
	);
};

export default NewTask;
