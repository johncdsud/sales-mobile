var client = require('../../config/dbconnection');
var tabela = "PEDIDOGLOBAL";
var tabela = "PESSOA";
var tabela = "CONDPAG";
var tabela = "ITEMPEDGLOBAL"


module.exports = {
    buscarPedidoGlobal,
    novoPedidoGlobal,
    buscarPedidoGlobalPorId,
    cadastrarPedidoGlobal,
    alterarPedidoGlobal,
    deletarPedidoGlobal
}

function buscarPedidoGlobal(callback) {
    client.query(`SELECT * FROM PEDIDOGLOBAL a INNER JOIN PESSOA b ON a.pessoa_codigo = b.pessoa_codigo ` ,callback);
    
}

function novoPedidoGlobal(req, res) {
    res.render('../app/views/novoPedidoGlobal.ejs');
}

function buscarPedidoGlobalPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pedGlobalCod = ${id}`, callback);
}


function cadastrarPedidoGlobal(PEDIDOGLOBAL, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,PEDIDOGLOBAL,callback);
}

function alterarPedidoGlobal(id, PEDIDOGLOBAL, callback) {
    var mysql = `UPDATE  ${tabela} SET pedGlobalCod  ='${PEDIDOGLOBAL.pedGlobalCod}', pedGlobal_data ='${PEDIDOGLOBAL. pedGlobal_data}, pessoa_codigo ='${PEDIDOGLOBAL.pessoa_codigo}, condpag_codigo ='${PEDIDOGLOBAL.condpag_codigo}, prod_codigo ='${PEDIDOGLOBAL.prod_codigo}' WHERE pedGlobalCod = ${id}`;
    client.query(mysql, callback);
}

function deletarPedidoGlobal(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pedGlobalCod  = ${id}`, callback);
}




