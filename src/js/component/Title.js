import React from "react";

export const Title = (props) => {
	return (
		<div className="d-flex justify-content-center align-middle">
			<h1 className="Title">{props.text}</h1>
		</div>
	);
};
