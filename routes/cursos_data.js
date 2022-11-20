var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next ){
    response.render('cursos_data');
});

router.get("/action", function(request, response, next ){
    var query = "SELECT * FROM cursos ORDER BY id";
        
    database.query(query, function(error, data){
        response.json({
            data:data
        });
    });  
});

module.exports = router;
