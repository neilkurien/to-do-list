import React from "react";

import logoType from "../img/todo-logo.svg";

const Header = ({ showDone, setShowDone }) => {
	//Handlers
	const showDoneHandler = () => {
		setShowDone(!showDone);
	};

	return (
		<div className="header-container">
			<div className="header-title">
				<img src={logoType} alt="to do logotype" />
				<h1>List</h1>
			</div>
			<div className="header-separator"></div>
			<div className="subtitle">
				<h4>
					As with everyone learning React, my time had come to build a
					to-do list.
				</h4>
			</div>
			<button className="show-done-btn" onClick={showDoneHandler}>
				Completed Tasks
			</button>
		</div>
	);
};

export default Header;
