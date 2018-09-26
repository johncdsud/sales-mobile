var client = require('../../config/dbconnection');
var tabela = "CONDPAG";


module.exports = {
    buscarCondpag,
    novaCondpag,
    buscarCondpagPorId,
    cadastrarCondpag,
    alterarCondpag,
    deletarCondpag
}

function buscarCondpag(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novaCondpag(req, res) {
    res.render('../app/views/novaCondpag.ejs');
}

function buscarCondpagPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE Condpag_codigo = ${id}`, callback);
}

function cadastrarCondpag(CONDPAG, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,CONDPAG,callback);
}

function alterarCondpag(id, CONDPAG, callback) {
    var mysql = `UPDATE  ${tabela} SET condpag_descricao ='${CONDPAG.condpag_descricao}' WHERE condpag_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarCondpag(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE condpag_codigo = ${id}`, callback);
}




