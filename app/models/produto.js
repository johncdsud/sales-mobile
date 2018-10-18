var client = require('../../config/dbconnection');
var tabela = "PRODUTO";


module.exports = {
    buscarProduto,
    novoProduto,
    buscarProdutoPorId,
    cadastrarProduto,
    alterarProduto,
    deletarProduto
}

function buscarProduto(codigos, callback) {
    var where = '';

    if(codigos) {
        where = `WHERE a.marca_codigo in (${codigos})`;
    }

    client.query(`SELECT * FROM PRODUTO a INNER JOIN MARCA b ON a.marca_codigo = b.marca_codigo ${where} order by prod_nome`, callback);
}
function novoProduto(req, res) {
    res.render('../app/views/novoProduto.ejs');
}


function buscarProdutoPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE prod_codigo = ${id}`, callback);
}

function cadastrarProduto(PRODUTO, callback) {
    var msql = `INSERT INTO ${tabela} SET ?`;
    client.query(msql, PRODUTO,callback);  
}

function alterarProduto(id, PRODUTO, callback) {
    var mysql = `UPDATE ${tabela} SET prod_nome = '${PRODUTO.prod_nome}', prod_descricao = '${PRODUTO.prod_descricao}',prod_tipo ='${PRODUTO.prod_tipo}', prod_ativoinativo ='${PRODUTO.prod_ativoinativo}', prod_movestoque ='${PRODUTO.prod_movestoque}' , prod_ncm ='${PRODUTO.prod_ncm}' , prod_custo ='${PRODUTO.prod_custo}' ,prod_venda ='${PRODUTO.prod_venda}' ,prod_tipo2 ='${PRODUTO.prod_tipo2}' ,prod_unidade ='${PRODUTO.prod_unidade}' , marca_codigo ='${PRODUTO.marca_codigo}' WHERE prod_codigo = ${id}`;       

    client.query(mysql, callback);   
    
}

function deletarProduto(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE prod_codigo = ${id}`, callback);
}