const mysql = require('mysql2');

var connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	database: process.env.MYSQL_DATABASE,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
});
connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log("MySQL database is connected on port " + process.env.MYSQL_PORT);
    }
});

module.exports = connection;