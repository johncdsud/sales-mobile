var client = require('../../config/dbconnection');
var tabela = "EMPRESA";


module.exports = {
    buscarEmpresa,
    novaEmpresa,
    buscarEmpresaPorId,
    cadastrarEmpresa,
    alterarEmpresa,
    deletarEmpresa
}

function buscarEmpresa(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novaEmpresa(req, res) {
    res.render('../app/views/novaEmpresa.ejs');
}

function buscarEmpresaPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE emp_codigo = ${id}`, callback);
}

function cadastrarEmpresa(EMPRESA, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,EMPRESA,callback);
}

function alterarEmpresa(id, EMPRESA, callback) {
   
    var mysql = `UPDATE  ${tabela} SET emp_razao = '${EMPRESA.emp_razao}' , emp_fantasia = '${EMPRESA.emp_fantasia}' , emp_cep ='${EMPRESA.emp_cep}' , emp_cidade = '${EMPRESA.emp_cidade}' , emp_bairro = '${EMPRESA.emp_bairro}' , emp_end = '${EMPRESA.emp_end}' , emp_num = '${EMPRESA.emp_num}' , emp_estado = '${EMPRESA.emp_estado}' , emp_cnpj = '${EMPRESA.emp_cnpj}' , emp_inscEst = '${EMPRESA.emp_inscEst}' , emp_fone = '${EMPRESA.emp_fone}' , emp_celular = '${EMPRESA.emp_celular}' , emp_email = '${EMPRESA.emp_email}' , emp_banco = '${EMPRESA.emp_banco}' , emp_agencia = '${EMPRESA.emp_agencia}' , emp_conta = '${EMPRESA.emp_conta}' , emp_favorecido = '${EMPRESA.emp_favorecido}' WHERE emp_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarEmpresa(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE emp_codigo = ${id}`, callback);
}




