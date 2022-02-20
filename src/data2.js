import { v4 as uuidv4 } from "uuid";
const task1 = uuidv4();

const defaultTasks = {
	tasks: {
		"task-1": {
			id: "task-1",
			taskDetail: "High priority item that takes up a line",
			priority: "High",
			isDone: false,
		},
		"task-2": {
			id: "task-2",
			taskDetail: "High priority item that takes up a line",
			priority: "High",
			isDone: false,
		},
		"task-3": {
			id: "task-3",
			taskDetail: "High priority item that takes up a line",
			priority: "High",
			isDone: false,
		},
		"task-4": {
			id: "task-4",
			taskDetail: "High priority item that takes up a line",
			priority: "Low",
			isDone: false,
		},
		"task-5": {
			taskDetail: "High priority item that takes up a line",
			priority: "Medium",
			id: "task-5",
			isDone: false,
		},
		"task-6": {
			id: "task-6",
			taskDetail: "High priority item that takes up a line",
			priority: "Low",
			isDone: true,
		},
	},
	sortingOrder: {
		high: ["task-1", "task-2", "task-3"],
		medium: ["task-5"],
		low: ["task-4", "task-6"],
		done: ["task-6"],
	},
};

export default defaultTasks;
