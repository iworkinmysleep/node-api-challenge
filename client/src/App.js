import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Actions from "./Actions";
import Projects from "./Projects";

function App() {
	

	return (
		<Router>
			<div className="App">
				<h1>Node API Challenge UI</h1>
				<Switch>
					<Route exact path="/" component={Projects}><Projects/></Route>
					<Route path="/:id/actions" component={Actions}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
