const express = require("express");
const chirpsStore = require("../chirpstore");

let router = express.Router();

router.get("/:id?", (req, res) => {
	let id = req.params.id;
	if (id) {
		res.json(chirpsStore.GetChirp(id));
	} else {
		res.send(chirpsStore.GetChirps());
	}
});

router.post("/", (req, res) => {
	chirpsStore.CreateChirp(req.body);
	res.sendStatus(200);
});

router.put("/:id?", (req, res) => {
	let id = req.params.id;
	if (id) {
		chirpsStore.UpdateChirp(id, req.body);
		res.send(200);
	} else {
		res.send("Chirp not found");
	}
});

router.delete("/:id?", (req, res) => {
	let id = req.params.id;
	if (id) {
		chirpsStore.DeleteChirp(id);
		res.send(204);
	} else {
		res.send("No such chirp found");
	}
});

module.exports = router;
