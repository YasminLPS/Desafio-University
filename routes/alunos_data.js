var express = require("express");

var router = express.Router();

var database = require("../database");

router.get("/", function (req, res, next) {
	res.render("alunos_data");
});

router.get("/alunos", function (req, res, next) {
	var query =
		"SELECT alunos.id,alunos.nome, alunos.bday, cursos.nome as cursoId, semestres.nome as semestreId, matricula FROM alunos";
	query += " INNER JOIN cursos ON cursos.id = alunos.cursoId";
	query += " INNER JOIN semestres ON semestres.id = alunos.semestreId";

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			data: data,
		});
	});
});

router.post("/alunos", function (req, res, next) {
	const { nome, bday, cursos, semestre, matricula } = req.body;

	var query = `
        INSERT INTO alunos
        (nome, bday, matricula, cursoId, semestreId)
        VALUES ("${nome}","${bday}","${matricula}","${cursos}","${semestre}")
        `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			message: "Aluno cadastrado com sucesso",
		});
	});
});

router.get("/alunos/:id", function (req, res, next) {
	var query = `
        SELECT * FROM alunos
        WHERE id= "${req.params.id}"
        `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json(data[0]);
	});
});

router.put("/alunos/:id", function (req, res, next) {
	const { nome, bday, cursos, semestre, matricula } = req.body;

	var query = `
    UPDATE alunos
    SET nome = "${nome}",
    bday = "${bday}",
    cursoId = "${cursos}",
    semestreId = "${semestre}",
    matricula = "${matricula}"
    WHERE id = "${req.params.id}"
    `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			message: "Aluno editado com sucesso!",
		});
	});
});

router.delete("/alunos/:id", function (req, res, next) {
	var query = `
    DELETE from alunos
    WHERE id = "${req.params.id}"
    `;

	database.query(query, function (error, data) {
		if (error) throw error;
		res.json({
			message: "Aluno exluido com sucesso!",
		});
	});
});

module.exports = router;