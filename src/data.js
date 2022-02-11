import { v4 as uuidv4 } from "uuid";

const defaultTasks = () => {
	return [
		{
			taskDetail: "High priority item that takes up a line",
			priority: "High",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "High priority item that has been completed",
			priority: "High",
			id: uuidv4(),
			isDone: true,
		},
		{
			taskDetail: "Medium priority item that takes up a line",
			priority: "Medium",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "Low priority item that takes up a line",
			priority: "Low",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "Second high priority item that takes up a line",
			priority: "High",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "Second high priority item that takes up a line",
			priority: "High",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "Second high priority item that takes up a line",
			priority: "High",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "Second high priority item that takes up a line",
			priority: "High",
			id: uuidv4(),
			isDone: false,
		},
		{
			taskDetail: "Second high priority item that takes up a line",
			priority: "High",
			id: uuidv4(),
			isDone: false,
		},
	];
};

export default defaultTasks;
