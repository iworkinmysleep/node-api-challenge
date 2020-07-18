const express = require("express");
const Actions = require("../helpers/actionModel.js");

const router = express.Router();

router.get("/", (req, res) => {
	Actions.get()
		.then((action) => {
			res.status(200).json(action);
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error retrieving data.", err });
		});
});

router.get("/:id", (req, res) => {
	Actions.get(req.params.id)
		.then((action) => {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json({ message: "Action not found." });
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error retrieving data.", err });
		});
});

router.post("/", (req, res) => {
	Actions.insert(req.body)
		.then((action) => {
			res.status(201).json(action);
		})
		.catch((err) => {
			res.status(500).json({
				message: "There was a problem adding the action to the database.",
				err,
			});
		});
});

router.put("/:id", (req, res) => {
	const changes = req.body;
	Actions.update(req.params.id, changes)
		.then((action) => {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json({ message: "Action not found." });
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error updating the action.", err });
		});
});

router.delete("/:id", (req, res) => {
	Actions.remove(req.params.id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ message: "Action successfully removed." });
			} else {
				res.status(404).json({ message: "Action not found." });
			}
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "There was an error removing the action.", err });
		});
});

module.exports = router;
