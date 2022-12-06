import React from "react";

//include images into your bundle
import SecondsCounter from "./secondsCounter.jsx";
import Countdown from "./countdown.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SecondsCounter />
			<h2>Countdown:</h2>
			<Countdown />
		</div>
	);
};

export default Home;
