var mysql = require("mysql")
var database = process.env.MYSQL_DATABASE || 'SALES'; //Nome do Seu banco de dados



var client = mysql.createConnection({
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '##P@$$w0rd##', //Caso sua senha seja outra so alterar
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3300
});

// colocar o banco de dados em uso - ativo
client.query('USE ' + database);

module.exports = client;
