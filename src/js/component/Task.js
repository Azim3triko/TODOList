import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	function deleteTask(e) {
		props.setterCount((prevCount) =>
			prevCount.filter((task, index) => {
				if (index !== props.id) return true;
			})
		);
	}
	return (
		<li className="d-flex justify-content-between doIt box p-2 ps-5 fs-5">
			{props.task}
			<span className="delete pe-2" onClick={deleteTask}>
				x
			</span>
		</li>
	);
};
