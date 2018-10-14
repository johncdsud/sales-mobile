var mysql = require("mysql")
var database = process.env.MYSQL_DATABASE || 'PEDCONTROL'; 



var client = mysql.createConnection({
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORDnode  || '##P@$$w0rd##', 
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3300
});

// colocar o banco de dados em uso - ativo
client.query('USE ' + database);

module.exports = client;
