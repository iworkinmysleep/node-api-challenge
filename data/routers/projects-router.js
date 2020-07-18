const express = require("express");
const Projects = require("../helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
	Projects.get()
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error retrieving data.", err });
		});
});

router.get("/:id", (req, res) => {
	Projects.get(req.params.id)
		.then((project) => {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(404).json({ message: "Project not found." });
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error retrieving data.", err });
		});
});

router.post("/", (req, res) => {
	Projects.insert(req.body)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch((err) => {
			res.status(500).json({
				message: "There was a problem adding the project to the database.",
				err,
			});
		});
});

router.put("/:id", (req, res) => {
	const changes = req.body;
	Projects.update(req.params.id, changes)
		.then((project) => {
			if (project) {
				res.status(200).json(project);
			} else {
				res.status(404).json({ message: "Project not found." });
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error updating the project.", err });
		});
});

router.delete("/:id", (req, res) => {
	Projects.remove(req.params.id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ message: "Project successfully removed." });
			} else {
				res.status(404).json({ message: "Project not found." });
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error removing the project.", err });
		});
});

router.get("/:id/actions", async (req, res) => {
	try {
		const actions = await Projects.getProjectActions(req.params.id);
		if (actions.length > 0) {
			res.status(200).json(actions);
		} else {
			res
				.status(404)
				.json({ message: "There are no actions for the project." });
		}
	} catch (err) {
		res
			.status(500)
			.json({ message: "There was an error displaying actions.", err });
	}
});

module.exports = router;
