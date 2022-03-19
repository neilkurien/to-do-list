import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { motion } from "framer-motion";

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
	const confettiAnim = {
		initial: {
			scale: 1,
		},
		squash: {
			scale: 0.8,
		},
	};

	const [triggerDelay, setTriggerDelay] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setTriggerDelay(triggerConfetti);
		}, 150);
	}, [triggerConfetti]);

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
				<motion.div
					className="confetti-emoji"
					variants={confettiAnim}
					animate={triggerConfetti ? "squash" : ""}
					transition={{ duration: 0.1, ease: "easeOut" }}
				>
					🎉
				</motion.div>
				<Confetti
					active={triggerDelay}
					config={config}
					className="confetti-generator"
				/>
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
