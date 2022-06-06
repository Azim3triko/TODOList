import React from "react";
import PropTypes from "prop-types";

export let Input = (props) => {
	function addNewTask(e) {
		props.setter(e.target.value);
	}

	function pressEnter(e) {
		if (e.key === "Enter") {
			props.setterList((prevCount) => [...prevCount, props.value]);
			props.setter("");
			e.stopPropagation();
		}
		console.log(e);
	}

	return (
		<div className="w-100">
			<input
				className="p-2 ps-5 fs-5"
				placeholder={props.text}
				style={{ width: "100%" }}
				value={props.value}
				onChange={addNewTask}
				onKeyUp={pressEnter}
			/>
		</div>
	);
};
