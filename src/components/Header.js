import React from "react";
import Confetti from "react-dom-confetti";

import logoType from "../img/todo-logo.svg";

const Header = ({
	showDone,
	setShowDone,
	hoverDone,
	setHoverDone,
	triggerConfetti,
}) => {
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
			<Confetti active={triggerConfetti} />
			<button
				className="show-done-btn"
				onClick={() => setShowDone(!showDone)}
				onMouseEnter={() => setHoverDone(true)}
				onMouseLeave={() => setHoverDone(false)}
			>
				<div
					className={`eye-icon ${showDone ? "fill" : ""} ${
						hoverDone ? "hover" : ""
					}`}
				></div>
				Completed Tasks
			</button>
		</div>
	);
};

export default Header;
