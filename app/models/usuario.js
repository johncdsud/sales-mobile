var client = require('../../config/dbconnection');
var tabela = "USUARIO";


module.exports = {
    buscarUsuario,
    novoUsuario,
    buscarUsuarioPorId,
    cadastrarUsuario,
    alterarUsuario,
    deletarUsuario
}

function buscarUsuario(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novoUsuario(req, res) {
    res.render('../app/views/novoUsuario.ejs');
}

function buscarUsuarioPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE user_codigo = ${id}`, callback);
}

function cadastrarUsuario(USUARIO, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,USUARIO,callback);
}

function alterarUsuario(id, USUARIO, callback) {
    var mysql = `UPDATE  ${tabela} SET user_nome = '${USUARIO.user_nome}', user_usuario ='${USUARIO.user_usuario}', user_senha ='${USUARIO.user_senha}', user_email ='${USUARIO.user_email}', user_celular ='${USUARIO.user_celular}', user_codcelular ='${USUARIO.user_codcelular}'WHERE user_codigo = ${id}`;
    client.query(mysql, callback);
}


function deletarUsuario(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE user_codigo = ${id}`, callback);
}




