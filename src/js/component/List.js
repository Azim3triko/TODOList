import React from "react";
import { Task } from "./Task";
import PropTypes from "prop-types";

export const List = (props) => {
	return (
		<div>
			{props.list.map((task, index) => {
				return (
					<Task
						task={task}
						key={index}
						id={index}
						setterList={props.setterList}
						List={props.list}
					/>
				);
			})}
		</div>
	);
};

List.propTypes = {
	setterList: PropTypes.func,
	list: PropTypes.array,
};
