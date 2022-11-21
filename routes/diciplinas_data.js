const express = require("express");

const router = express.Router();

const database = require("../database");

router.get("/", function (req, res, next) {
	res.render("diciplinas_data");
});

router.get("/diciplinas", function (req, res) {
	var query =
	"SELECT diciplinas.id, diciplinas.nome, cursos.nome as cursoId, semestres.periodo as semestreId FROM diciplinas";
query += " INNER JOIN cursos ON cursos.id = diciplinas.cursoId";
query += " INNER JOIN semestres ON semestres.id = diciplinas.semestreId";
	database.query(query, function (error, data) {
		if (error) throw error;

		res.json({
			data: data,
		});
	});
});

module.exports = router;