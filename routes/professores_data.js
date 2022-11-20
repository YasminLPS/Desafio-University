var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next ){
    response.render('professores_data');
});

router.get("/action", function(request, response, next ){
    var query = "SELECT * FROM professores ORDER BY id";
        
    database.query(query, function(error, data){
        response.json({
            data:data
        });
    });  
});

router.post("/action", function(request, response, next){
 const {nome,bday,salary,diciplina} = request.body

        var query = `
        INSERT INTO professores
        (nome, bday, salary, diciplinaId)
        VALUES ("${nome}","${bday}","${salary}","${diciplina}")
        `;

        database.query(query, function(error,data){
            if(error) throw error
            response.json({
                message: 'Professor cadastrado com sucesso!'
            });
        });
});

router.delete("/action", function(request, response, next){
    var id = request.body.id;
    var query = `
    DELETE from professores
    WHERE id = "${id}"
    `;

    database.query(query, function(error, data){
        if(error) throw error
        response.json({
            message: 'Professor exluido com sucesso!'
        });
    });
   
});

module.exports = router;
