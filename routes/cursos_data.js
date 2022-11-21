const express = require("express");

const router = express.Router();

const database = require("../database");

router.get("/", function (req, res, next) {
	res.render("cursos_data");
});

router.get("/cursos", function (req, res) {
	const query = "SELECT * FROM cursos ORDER BY id";

	database.query(query, function (error, data) {
		if (error) throw error;

		res.json({
			data: data,
		});
	});
});

module.exports = router;