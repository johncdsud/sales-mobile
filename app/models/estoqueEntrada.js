var client = require('../../config/dbconnection');
var tabela1 = "MOVESTOQUE";
var tabela2 = "ITEMESTOQUE"


module.exports = {
    buscarEstoqueEntrada,
    novoEstoqueEntrada,
    buscarEstoqueEntradaPorId,
    cadastrarEstoqueEntrada,
    alterarEstoqueEntrada,
    deletarEstoqueEntrada,
    buscarEstoqueEntradaPorIdProduto
}

function buscarEstoqueEntrada(callback) {
    client.query(`SELECT * FROM ${tabela1}  WHERE movest_motivo is NULL order by movest_dataent`, callback);
}

function buscarEstoqueEntradaPorIdProduto(idProduto, callback) {
    client.query(`SELECT * FROM ITEMESTOQUE i INNER JOIN MOVESTOQUE mov ON i.movest_codigo = mov.movest_codigo WHERE movest_motivo is NULL AND i.prod_codigo = ${idProduto}`, callback);
}

function novoEstoqueEntrada(req, res) {
    res.render('../app/views/novoEstoqueEntrada.ejs');
}

function buscarEstoqueEntradaPorId(id, callback) {   
    client.query(`SELECT * FROM ${tabela1} mov LEFT JOIN ${tabela2} item ON mov.movest_codigo = item.movest_codigo LEFT JOIN PRODUTO p ON p.prod_codigo = item.prod_codigo WHERE mov.movest_codigo = ${id}`, callback);
}
async function cadastrarEstoqueEntrada(movest) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO MOVESTOQUE(movest_dataent, movest_pedido) VALUES('${movest.dataMovimento}', '${movest.numeroPedido}');`;
        client.query(mysql, (err, data) => {
            if (err)
                return reject(err);

            var mysql = `SELECT max(movest_codigo) AS codigo FROM MOVESTOQUE;`;
            client.query(mysql, (err, data) => {
                if (err)
                    return reject(err);

                resolve(data[0].codigo);
            });
        });
    });
}

function alterarEstoqueEntrada(id, MOVESTOQUE, callback) {
    return new Promise((resolve, reject) => {
        var mysql = `UPDATE  ${tabela1} SET movest_dataent ='${MOVESTOQUE.movest_dataent}, movest_pedido ='${MOVESTOQUE.movest_pedido}' WHERE movest_codigo = ${id}`;
        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

async function deletarEstoqueEntrada(id) {
    return new Promise((resolve, reject) => {
        var mysql = `DELETE FROM ${tabela1} WHERE movest_codigo = ${id}`;
        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}