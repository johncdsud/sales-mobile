var client = require('../../config/dbconnection');
var tabela = "ITEMPEDGLOBAL";


module.exports = {
    buscarItemPedGlobal,
    novoItemPedGlobal,
    buscarItemPedGlobalPorId,
    cadastrarItemPedGlobal,
    alterarItemPedGlobal,
    deletarItemPedGlobal,
    deletarItemPedGlobalPromise
}

function buscarItemPedGlobal(callback) {
    client.query(`SELECT * FROM ITEMPEDGLOBAL a INNER JOIN PRODUTO b ON a.prod_codigo = b.prod_codigo`, callback);
    client.query(`SELECT * FROM ITEMPEDGLOBAL a INNER JOIN PEDIGOGLOBAL b ON a.pedGlobalCod = b.pedGlobalCod`, callback);

}


function novoItemPedGlobal(req, res) {
    res.render('../app/views/novoItemPedGlobal.ejs');
}

async function buscarItemPedGlobalPorId(id) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM ${tabela} WHERE itemPedGlobal_cod = ${id}`, (err, data) => {
            if(err)
                return reject(err);

            resolve(data[0]);
        });
        
    })
}

async function cadastrarItemPedGlobal(ITEMPEDGLOBAL) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, ITEMPEDGLOBAL, (err, data) => {
            if (err)
                return reject(err);

            resolve();
        });
    });
}

function alterarItemPedGlobal(id, ITEMPEDGLOBAL, callback) {
    var mysql = `UPDATE  ${tabela} SET qtde ='${ITEMPEDGLOBAL.qtde}' WHERE prod_codigo  pedGlobalCod = ${id}`;
    client.query(mysql, callback);
}


async function deletarItemPedGlobal(id) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM ${tabela} WHERE itemPedGlobal_cod = ${id}`, (err, data) => {
            if(err)
                return reject(err);

            resolve();
        });
    })
}

async function deletarItemPedGlobalPromise(pedGlobalCod) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM ${tabela} WHERE pedGlobalCod = ${pedGlobalCod}`, (err) => {
            if (err)
                return reject(err);

            resolve();
        });
    })
}