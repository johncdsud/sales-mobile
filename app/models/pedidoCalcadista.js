var client = require('../../config/dbconnection');
var tabela = "PEDIDOCALCADO";
var tabela = "PESSOA";
var tabela = "CONDPAG";
var tabela = "ITEMPEDGLOBAL"


module.exports = {
    buscarPedidoCalcadista,
    novoPedidoCalcadista,
    buscarPedidoCalcadistaPorId,
    cadastrarPedidoCalcadista,
    alterarPedidoCalcadista,
    deletarPedidoCalcadista
}

function buscarPedidoCalcadista(callback) {
    client.query(`SELECT * FROM PEDIDOCALCADISTA a INNER JOIN PESSOA b ON a.pessoa_codigo = b.pessoa_codigo ` ,callback);
    
}

function novoPedidoCalcadista(req, res) {
    res.render('../app/views/novoPedidoCalcadista.ejs');
}

function buscarPedidoCalcadistaPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pedCalcadistaCod = ${id}`, callback);
}

function cadastrarPedidoCalcadista(PEDIDOCALCADISTA, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,PEDIDOCALCADISTA,callback);
}

function alterarPedidoCalcadista(id, PEDIDOCALCADISTA, callback) {
    var mysql = `UPDATE  ${tabela} SET pedCalcadistaCod  ='${PEDIDOCALCADO.pedCalcadistaCod}', pedCalcadista_data ='${PEDIDOCALCADISTA. pedCalcadista_data}, pessoa_codigo ='${PEDIDOCALCADISTA.pessoa_codigo}, condpag_codigo ='${PEDIDOCALCADISTA.condpag_codigo}, prod_codigo ='${PEDIDOCALCADISTA.prod_codigo}' WHERE pedCalcadistaCod = ${id}`;
    client.query(mysql, callback);
}

function deletarPedidoCalcadista(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pedCalcadistaCod  = ${id}`, callback);
}




