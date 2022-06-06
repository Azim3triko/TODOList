import React from "react";
import { Box } from "./Box";
import { Title } from "./Title";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-middle">
			<Title text="Todos" />
			<Box />
		</div>
	);
};

export default Home;
