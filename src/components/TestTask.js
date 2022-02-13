import React from "react";
import { Reorder } from "framer-motion";

const TestTask = ({ item, priority }) => {
	return (
		<Reorder.Item value={item} key={item.id}>
			<p>Task</p>
		</Reorder.Item>
	);
};

export default TestTask;
