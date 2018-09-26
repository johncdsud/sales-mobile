var client = require('../../config/dbconnection');
var tabela = "MARCA";


module.exports = {
    buscarMarca,
    novaMarca,
    buscarMarcaPorId,
    cadastrarMarca,
    alterarMarca,
    deletarMarca
}

function buscarMarca(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novaMarca(req, res) {
    res.render('../app/views/novaMarca.ejs');
}

function buscarMarcaPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE marca_codigo = ${id}`, callback);
}

function cadastrarMarca(MARCA, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,MARCA,callback);
}

function alterarMarca(id, MARCA, callback) {
    var mysql = `UPDATE  ${tabela} SET marca_nome = '${MARCA.marca_nome}', marca_linha ='${MARCA.marca_linha}' WHERE marca_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarMarca(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE marca_codigo = ${id}`, callback);
}




