var client = require('../../config/dbconnection');
var tabela = "PEDIDOLATICINIO";
var tabela = "PESSOA";
var tabela = "CONDPAG";
var tabela = "ITEMPEDGLOBAL"


module.exports = {
    buscarPedidoLaticinio,
    novoPedidoLaticinio,
    buscarPedidoLaticinioPorId,
    cadastrarPedidoLaticinio,
    alterarPedidoLaticinio,
    deletarPedidoLaticinio
}

function buscarPedidoLaticinio(callback) {
    client.query(`SELECT * FROM PEDIDOLATICINIO a INNER JOIN PESSOA b ON a.pessoa_codigo = b.pessoa_codigo ` ,callback);
    
}

function novoPedidoLaticinio(req, res) {
    res.render('../app/views/novoPedidoLaticinio.ejs');
}

function buscarPedidoLaticinioPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pedLaticinioCod = ${id}`, callback);
}


function cadastrarPedidoLaticinio(PEDIDOLATICINIO, callback) {
    var mysql = `INSERT INTO ${tabela} SET ?`;
    client.query(mysql,PEDIDOLATICINIO,callback);
}

function alterarPedidoLaticinio(id, PEDIDOLATICINIO, callback) {
    var mysql = `UPDATE  ${tabela} SET pedLaticinioCod  ='${PEDIDOLATICINIO.pedLaticinioCod}', pedLaticinio_data ='${PEDIDOLATICINIO. pedLaticinio_data}, pessoa_codigo ='${PEDIDOLATICINIO.pessoa_codigo}, condpag_codigo ='${PEDIDOLATICINIO.condpag_codigo}, prod_codigo ='${PEDIDOLATICINIO.prod_codigo}' WHERE pedLaticinioCod = ${id}`;
    client.query(mysql, callback);
}

function deletarPedidoLaticinio(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pedLaticinioCod  = ${id}`, callback);
}




