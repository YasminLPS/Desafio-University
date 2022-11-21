var express = require("express");

var router = express.Router();

var database = require("../database");

router.get("/", function (req, res, next) {
	res.render("professores_data");
});

router.get("/professores", function (req, res, next) {
	var query =
		"SELECT professores.id,professores.nome, professores.bday, professores.salary, diciplinas.nome as diciplinaId FROM professores";
	query += " INNER JOIN diciplinas ON diciplinas.id = professores.diciplinaId";

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			data: data,
		});
	});
});

router.post("/professores", function (req, res, next) {
	const { nome, bday, salary, diciplina} = req.body;

	var query = `
        INSERT INTO professores
        (nome, bday, salary, diciplinaId)
        VALUES ("${nome}","${bday}","${salary}","${diciplina}")
        `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			message: "Professor cadastrado com sucesso",
		});
	});
});

router.get("/professores/:id", function (req, res, next) {
	var query = `
        SELECT * FROM professores
        WHERE id= "${req.params.id}"
        `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json(data[0]);
	});
});

router.put("/professores/:id", function (req, res, next) {
	const { nome, bday, diciplina, salary} = req.body;

	var query = `
    UPDATE professores
    SET nome = "${nome}",
    bday = "${bday}",
    diciplinaId = "${diciplina}",
    salary = "${salary}"
    WHERE id = "${req.params.id}"
    `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			message: "Aluno editado com sucesso!",
		});
	});
});

router.delete("/professores/:id", function (req, res, next) {
	var query = `
    DELETE from professores
    WHERE id = "${req.params.id}"
    `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			message: "Professor exluido com sucesso!",
		});
	});
});

module.exports = router;