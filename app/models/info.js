var client = require('../../config/dbconnection');
var tabela = "INFO";


module.exports = {
    buscarInfo,
    novaInfo,
    buscarInfoPorId,
    cadastrarInfo,
    alterarInfo,
    deletarInfo
}

function buscarInfo(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novaInfo(req, res) {
    res.render('../app/views/novaInfo.ejs');
}

function buscarInfoPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE Info_codigo = ${id}`, callback);
}

function cadastrarInfo(INFO, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,INFO,callback);
}

function alterarInfo(id, INFO, callback) {
    var mysql = `UPDATE  ${tabela} SET info_descricao ='${INFO.info_descricao}' WHERE info_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarInfo(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE info_codigo = ${id}`, callback);
}




