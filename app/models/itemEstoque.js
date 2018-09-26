var client = require('../../config/dbconnection');
var tabela = "ITEMESTOQUE";


module.exports = {
    buscarItemEstoque,
    buscarItemEstoqueSaida,
    novoItemEstoque,
    buscarItemEstoquePorId,    
    cadastrarItemEstoque,
    alterarItemEstoque,
    alterarItemEstoqueSaida,
    
    
    deletarItemEstoque,
    deletarItemEstoquePromise
}

function buscarItemEstoque(callback) {
    client.query(`SELECT * FROM ITEMESTOQUE a INNER JOIN PRODUTO b ON a.prod_codigo = b.prod_codigo` ,callback);
    client.query(`SELECT * FROM ITEMESTOQUE a INNER JOIN MOVESTOQUE b ON a.movest_pedido = b.movest_pedido` ,callback);
    
}
function buscarItemEstoqueSaida(callback) {
    client.query(`SELECT * FROM ITEMESTOQUE a INNER JOIN PRODUTO b ON a.prod_codigo = b.prod_codigo` ,callback);
    client.query(`SELECT * FROM ITEMESTOQUE a INNER JOIN MOVESTOQUE b ON a.movest_motivo = b.movest_motivo` ,callback);
    
}

function novoItemEstoque(req, res) {
    res.render('../app/views/novoItemEstoque.ejs');
}

function buscarItemEstoquePorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE movest_pedido = ${id}`, callback);
}


async function cadastrarItemEstoque(ITEMESTOQUE, callback) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, ITEMESTOQUE, (err, data) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

function alterarItemEstoque(id, ITEMESTOQUE, callback) {
    var mysql = `UPDATE  ${tabela} SET qtde ='${ITEMESTOQUE.qtde}' WHERE prod_codigo  movest_pedido = ${id}`;
    client.query(mysql, callback);
}

function alterarItemEstoqueSaida(id, ITEMESTOQUE, callback) {
    var mysql = `UPDATE  ${tabela} SET qtde ='${ITEMESTOQUE.qtde}' WHERE prod_codigo  movest_motivo = ${id}`;
    client.query(mysql, callback);
}

function deletarItemEstoque(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE item_codigo = ${id}`, callback);
}

async function deletarItemEstoquePromise(movestCodigo) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM ${tabela} WHERE movest_codigo = ${movestCodigo}`, (err) => {
            if(err)
                return reject(err);
    
            resolve();
        });
    })
}