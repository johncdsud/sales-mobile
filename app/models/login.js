var client = require('../../config/dbconnection');
var tabela = "LOGIN";


module.exports = {
    buscarLogin,
    novoLogin,
    buscarLoginPorId,
    cadastrarLogin,
    alterarLogin,
    deletarLogin
}

function buscarLogin(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novoLogin(req, res) {
    res.render('../app/views/novoLogin.ejs');
}

function buscarLoginPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE login_codigo = ${id}`, callback);
}

function cadastrarLogin(LOGIN, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,LOGIN,callback);
}

function alterarLogin(id, INFO, callback) {
    var mysql = `UPDATE  ${tabela} SET login_usuario ='${LOGIN.login_usuario}', login_senha ='${LOGIN.login_senha}' WHERE login_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarLogin(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE login_codigo = ${id}`, callback);
}




