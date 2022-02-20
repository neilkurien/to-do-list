import { v4 as uuidv4 } from "uuid";

const defaultTasks = () => {
	return {
		tasks: [
			{
				taskDetail: "1 Medium priority item that takes up a line",
				priority: "Medium",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "2 Medium priority item that takes up a line",
				priority: "Medium",
				id: uuidv4(),
				isDone: false,
			},

			{
				taskDetail: "3 Medium priority item that takes up a line",
				priority: "Medium",
				id: uuidv4(),
				isDone: true,
			},
			{
				taskDetail: "4 Medium priority item that takes up a line",
				priority: "Medium",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "1 Low priority item that takes up a line",
				priority: "Low",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "1 Second high priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "2 Second high priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "3 Second high priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "4 Second high priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "5 Second high priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
		],
		sortingOrder: {
			high: [],
			medium: [],
			low: [],
			done: [],
		},
	};
};

export default defaultTasks;
