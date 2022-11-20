const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'university',
    user: 'root',
    password: '24153100'
});

connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('MySQL database is connected Succesfully');
    }
});

module.exports = connection;