import React, { useState } from "react";
import { Input } from "./Input";
import { List } from "./List";
import { Counter } from "./Counter";

export const Box = () => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setlistOfTasks] = useState([
		"Make the bed",
		"Wash my hands",
		"Eat",
		"Walk the dog",
	]);

	return (
		<div className="d-flex flex-column bigBox">
			<Input
				text="What needs to be done"
				value={newTask}
				setter={setNewTask}
				setterList={setlistOfTasks}
			/>
			{listOfTasks.length === 0 ? (
				<p className="box mb-0 p-2 ps-4 fs-4">{`No tasks... add a task!`}</p>
			) : (
				<List list={listOfTasks} setterList={setlistOfTasks} />
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};
