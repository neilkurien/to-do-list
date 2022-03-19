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
	const config = {
		angle: "24",
		spread: "40",
		startVelocity: 40,
		elementCount: 70,
		dragFriction: 0.12,
		duration: 3000,
		stagger: 3,
		width: "10px",
		height: "10px",
		perspective: "500px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
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
			<div className="confetti">
				<div className="confetti-emoji">🎉</div>
				<Confetti active={triggerConfetti} config={config} />
			</div>
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
