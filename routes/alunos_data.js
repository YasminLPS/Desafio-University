var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next ){
    response.render('alunos_data');
});

router.get("/action", function(request, response, next ){
    var query = "SELECT * FROM alunos ORDER BY id";
        
    database.query(query, function(error, data){
        response.json({
            data:data
        });
    });  
});

router.post("/action", function(request, response, next){
 const {nome,bday,cursos,semestre, matricula} = request.body

        var query = `
        INSERT INTO alunos
        (nome, bday, matricula, cursoId, semestreId)
        VALUES ("${nome}","${bday}","${matricula}","${cursos}","${semestre}")
        `;

        database.query(query, function(error,data){
            if(error) throw error
            response.json({
                message: 'Aluno cadastrado com sucesso'
            });
        });
});

router.get("/action", function(request, response, next){
    var id = request.body.id;    
    var query = `
        SELECT * FROM alunos
        WHERE id= "${id}"
        `;

    database.query(query, function(error,data){
        if(error) throw error
        response.json(data[0]);
    });
});

router.put("/action", function(request, response, next){
    
    const {id,nome,bday,cursos,semestre, matricula} = request.body

    var query = `
    UPDATE alunos
    SET nome = "${nome}",
    bday = "${bday}",
    cursoId = "${cursos}",
    semestreId = "${semestre}",
    matricula = "${matricula}"
    WHERE id = "${id}"
    `;

    database.query(query, function(error, data){
        console.log(query)
        if(error){
        }
        response.json({
            message: 'Aluno editado com sucesso!'
        });
    });
   
});

router.delete("/action", function(request, response, next){
    var id = request.body.id;
    var query = `
    DELETE from alunos
    WHERE id = "${id}"
    `;

    database.query(query, function(error, data){
        if(error) throw error
        response.json({
            message: 'Aluno exluido com sucesso!'
        });
    });
   
});



module.exports = router;
