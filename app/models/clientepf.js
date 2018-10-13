var client = require('../../config/dbconnection');
var tabela = "PESSOA";


module.exports = {
    buscarClientepf,
    novoClientepf,
    buscarClientepfPorId,
    cadastrarClientepf,
    alterarClientepf,
    deletarClientepf
}

function buscarClientepf(callback) {
    client.query(`SELECT * from  ${tabela} WHERE  pessoa_tipo = 'PF'  order by pessoa_nome_raz `, callback);
}
function novoClientepf(req, res) {
    res.render('../app/views/novoClientepf.ejs');
}

function buscarClientepfPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pessoa_codigo = ${id}`, callback);
}

function cadastrarClientepf(PESSOA, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,PESSOA,callback);
}

function alterarClientepf(id, PESSOA, callback) {
    var mysql = `UPDATE  ${tabela} SET pessoa_nome_raz = '${PESSOA.pessoa_nome_raz}', pessoa_ape_fan= '${PESSOA.pessoa_ape_fan}', pessoa_cpf_cnpj= '${PESSOA.pessoa_cpf_cnpj}', pessoa_rg_ins= '${PESSOA.pessoa_rg_ins }', pessoa_emissor= '${PESSOA.pessoa_emissor}', pessoa_sexo = '${PESSOA.pessoa_sexo }', pessoa_fone  = '${PESSOA.pessoa_fone }',pessoa_cel = '${PESSOA.pessoa_cel}',pessoa_email  = '${PESSOA.pessoa_email }',pessoa_cep = '${PESSOA.pessoa_cep }',pessoa_end  = '${PESSOA.pessoa_end}',pessoa_num  = '${PESSOA.pessoa_num}',pessoa_bairro  = '${PESSOA.pessoa_bairro}' ,pessoa_uf  = '${PESSOA.pessoa_uf}',pessoa_cidade  = '${PESSOA.pessoa_cidade }' WHERE pessoa_codigo = ${id}`;
    client.query(mysql, callback);
}

function deletarClientepf(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pessoa_codigo  = ${id}`, callback);
}




