var client = require('../../config/dbconnection');
var tabela1 = "PEDIDOGLOBAL";
var tabela2 = "ITEMPEDGLOBAL"

module.exports = {
    buscarPedidoGlobal,
    buscarPedidoGlobalPorIdPromise,
    novoPedidoGlobal,
    buscarPedidoGlobalPorId,
    cadastrarPedidoGlobal,
    alterarPedidoGlobal,
    deletarPedidoGlobal,
    alterarTotalPedidoGlobal
}

function buscarPedidoGlobal(callback) {
    client.query(`SELECT * FROM ${tabela1} pg INNER JOIN PESSOA p ON p.pessoa_codigo = pg.pessoa_codigo`, (err, data) => {
        if(err)
            return callback(err);

        callback(null, data);
    });
}

async function buscarPedidoGlobalPorIdPromise(id) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM ${tabela1} pg INNER JOIN PESSOA pes ON pg.pessoa_codigo = pes.pessoa_codigo LEFT JOIN ${tabela2} item ON pg.pedGlobalCod = item.pedGlobalCod LEFT JOIN PRODUTO prod ON prod.prod_codigo = item.prod_codigo INNER JOIN CONDPAG cond ON cond.condpag_codigo = pg.condpag_codigo WHERE pg.pedGlobalCod = ${id}`, (err, data) => {
            if(err)
                return reject(err);
    
            resolve(data[0]);
        });
    });
}

function novoPedidoGlobal(req, res) {
    res.render('../app/views/novoPedidoGlobal.ejs');
}

function buscarPedidoGlobalPorId(id, callback) {   
    client.query(`SELECT * FROM ${tabela1} pg INNER JOIN PESSOA pes ON pg.pessoa_codigo = pes.pessoa_codigo LEFT JOIN ${tabela2} item ON pg.pedGlobalCod = item.pedGlobalCod LEFT JOIN PRODUTO prod ON prod.prod_codigo = item.prod_codigo INNER JOIN CONDPAG cond ON cond.condpag_codigo = pg.condpag_codigo WHERE pg.pedGlobalCod = ${id}`, callback);
}


async function cadastrarPedidoGlobal(PEDIDOGLOBAL) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela1} SET ?`;
        client.query(mysql, PEDIDOGLOBAL, (err, data) => {
            if (err)
                return reject(err);

            var mysql = `SELECT max(pedGlobalCod) AS codigo FROM ${tabela1};`;
            client.query(mysql, (err, data) => {
                if (err)
                    return reject(err);

                resolve(data[0].codigo);
            });
        });
    });
};

function alterarPedidoGlobal(id, PEDIDOGLOBAL, callback) {
    var mysql = `UPDATE  ${tabela1} SET pedGlobal_dataVencimento ='${PEDIDOGLOBAL.pedGlobal_dataVencimento}', pedGlobal_data ='${PEDIDOGLOBAL.pedGlobal_data}', pessoa_codigo = '${PEDIDOGLOBAL.pessoa_codigo}', condpag_codigo ='${PEDIDOGLOBAL.condpag_codigo}' WHERE pedGlobalCod = ${id}`;
    client.query(mysql, callback);
}


async function deletarPedidoGlobal(id) {
    return new Promise((resolve, reject) => {
        var mysql = `DELETE FROM ${tabela1} WHERE pedGlobalCod = ${id}`;
        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });

}

async function alterarTotalPedidoGlobal(id, total) {
    return new Promise((resolve, reject) => {
        var mysql = `UPDATE ${tabela1} SET totalPedGlobal = '${total}' WHERE pedGlobalCod = ${id}`;
        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });     
    });
}
