const express = require("express");

const router = express.Router();

const database = require("../database");

router.get("/", function (req, res) {
	res.render("semestre_data");
});

router.get("/semestres", function (req, res) {
	const query = "SELECT * FROM semestres ORDER BY id";

	database.query(query, function (error, data) {
		res.json({
			data: data,
		});
	});
});

module.exports = router;