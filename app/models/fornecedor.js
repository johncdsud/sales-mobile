var client = require('../../config/dbconnection');
var tabela = "PESSOA";


module.exports = {
    buscarFornecedor,
    novoFornecedor,
    buscarFornecedorPorId,
    cadastrarFornecedor,
    alterarFornecedor,
    deletarFornecedor
}

function buscarFornecedor(callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pessoa_tipo = 'FORN' order by pessoa_nome_raz `, callback);
}
function novoFornecedor(req, res) {
    res.render('../app/views/novoFornecedor.ejs');
}

function buscarFornecedorPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pessoa_codigo = ${id}`, callback);
}

function cadastrarFornecedor(PESSOA, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,PESSOA,callback);
}

function alterarFornecedor(id, PESSOA, callback) {
    var mysql = `UPDATE  ${tabela} SET pessoa_nome_raz  = '${PESSOA.pessoa_nome_raz}' , pessoa_ape_fan  = '${PESSOA.pessoa_ape_fan}' , pessoa_cpf_cnpj = '${PESSOA.pessoa_cpf_cnpj}' , pessoa_rg_ins = '${PESSOA.pessoa_rg_ins}', pessoa_fone  = '${PESSOA.pessoa_fone}' , pessoa_cel = '${PESSOA.pessoa_cel}' , pessoa_email  = '${PESSOA.pessoa_email}' , pessoa_cep = '${PESSOA.pessoa_cep}' , pessoa_end  = '${PESSOA.pessoa_end}' , pessoa_num  = '${PESSOA.pessoa_num}' , pessoa_bairro  = '${PESSOA.pessoa_bairro}' , pessoa_uf  = '${PESSOA.pessoa_uf}' , pessoa_cidade  = '${PESSOA.pessoa_cidade} ' WHERE pessoa_codigo = ${id}`;
    client.query(mysql, callback);
}


function deletarFornecedor(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pessoa_codigo  = ${id}`, callback);
}




