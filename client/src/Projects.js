import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/projects")
			.then((res) => {
				console.log(res);
				setProjects(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
  return (
    <div className='projects-container'>
     {projects.map((project) => (
					<div className="project" key={project.id}>
						<h2>{project.name}</h2>
						<h4>{project.description}</h4>
						<Link to= '/:id/actions'><button>Actions</button></Link>
					</div>
				))} 
    </div>
  )
}

export default Projects
