var mysql = require("mysql")
var database = 'SALES'; //Nome do Seu banco de dados



var client = mysql.createConnection({
    user: 'root',
    password: '##P@$$w0rd##', //Caso sua senha seja outra so alterar
    host: 'localhost',
    port: 3300
});

// colocar o banco de dados em uso - ativo
client.query('USE ' + database);

module.exports = client;
