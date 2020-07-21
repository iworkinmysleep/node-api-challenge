import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Actions = (props) => {
	
  const [actions, setActions] = useState([]);
  const params = useParams()

	useEffect(() => {
		console.log('params',params)
	
		axios
			.get(`http://localhost:5000/api/actions`)
			.then((res) => {
				console.log("actions res", res);
				setActions(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Link to="/">
				<button>Back</button>
			</Link>
			<div className="actions">
				{actions.map((action) => (
					<div key={action.id}>
						<h3>{action.description}</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default Actions;
