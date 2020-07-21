import React from "react";
import axios from "axios";

import "./App.css";

function App() {
	axios
		.get("http://localhost:5000/api/projects")
		.then((res) => {
			console.log(res);
		})
    .catch((err) => console.log(err));
    


	return (
		<div className="App">
			<h1>Node API Challenge UI</h1>
		</div>
	);
}

export default App;
