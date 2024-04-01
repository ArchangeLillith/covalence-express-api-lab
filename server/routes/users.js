const express = require("express");
const chirpsStore = require("../chirpstore.js");

let router = express.Router();

router.get("/:id?", (req, res) => {
	console.log(`users works`);
});

router.post("/", (req, res) => {
	res.sendStatus(200);
});

module.exports = router;
