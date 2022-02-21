import { v4 as uuidv4 } from "uuid";

const defaultTasks = () => {
	return {
		high: [
			{
				taskDetail: "1 High priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "2 High priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "3 High priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: false,
			},
		],
		medium: [
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
				isDone: false,
			},
		],
		low: [
			{
				taskDetail: "1 Low priority item that takes up a line",
				priority: "Low",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "2 Low priority item that takes up a line",
				priority: "Low",
				id: uuidv4(),
				isDone: false,
			},
			{
				taskDetail: "3 Low priority item that takes up a line",
				priority: "Low",
				id: uuidv4(),
				isDone: false,
			},
		],
		done: [
			{
				taskDetail: "3 Medium priority item that is done",
				priority: "Medium",
				id: uuidv4(),
				isDone: true,
			},
			{
				taskDetail: "4 High priority item that takes up a line",
				priority: "High",
				id: uuidv4(),
				isDone: true,
			},
			{
				taskDetail: "4 Low priority item that takes up a line",
				priority: "Low",
				id: uuidv4(),
				isDone: true,
			},
		],
	};
};

export default defaultTasks;
