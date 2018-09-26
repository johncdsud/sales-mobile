var client = require('../../config/dbconnection');
var tabela = "GRADE";


module.exports = {
    buscarGrade,
    novaGrade,
    buscarGradePorId,
    cadastrarGrade,
    alterarGrade,
    deletarGrade
}

function buscarGrade(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novaGrade(req, res) {
    res.render('../app/views/novaGrade.ejs');
}

function buscarGradePorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE grade_codigo = ${id}`, callback);
}

function cadastrarGrade(GRADE, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,GRADE,callback);
}

function alterarGrade(id, GRADE, callback) {
    var mysql = `UPDATE  ${tabela} SET grade_descricao ='${GRADE.grade_descricao}' , grade_numeracao ='${GRADE.grade_numeracao}' , grade_ativoinativo ='${GRADE.grade_ativoinativo}' WHERE grade_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarGrade(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE grade_codigo = ${id}`, callback);
}




