import { v4 as uuidv4 } from "uuid";

const defaultTasks = () => {
	return [
		/* {
			high: [
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
			],
			medium: [
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
			],
			low: [
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
			],
		}, */
		/* {
			priority: "High",
			tasks: [
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
			],
		}, */
		/* {
			priority: "Medium",
			tasks: [
				{
					taskDetail: "Medium priority item that takes up a line",
					priority: "Medium",
					id: uuidv4(),
					isDone: false,
					index: 2,
				},
				{
					taskDetail: "Medium priority item that takes up a line",
					priority: "Medium",
					id: uuidv4(),
					isDone: false,
					index: 1,
				},
			],
		},
		{
			priority: "Low",
			tasks: [
				{
					taskDetail: "Low priority item that takes up a line",
					priority: "Low",
					id: uuidv4(),
					isDone: false,
				},
			],
		}, */
		{
			taskDetail: "1 Medium priority item that takes up a line",
			priority: "Medium",
			id: uuidv4(),
			isDone: false,
			index: 2,
		},
		{
			taskDetail: "2 Medium priority item that takes up a line",
			priority: "Medium",
			id: uuidv4(),
			isDone: false,
			index: 1,
		},

		{
			taskDetail: "3 Medium priority item that takes up a line",
			priority: "Medium",
			id: uuidv4(),
			isDone: true,
			index: 4,
		},
		{
			taskDetail: "4 Medium priority item that takes up a line",
			priority: "Medium",
			id: uuidv4(),
			isDone: false,
			index: 6,
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
	];
};

export default defaultTasks;
