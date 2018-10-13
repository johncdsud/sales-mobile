var client = require('../../config/dbconnection');
var tabela = "ITEM_PEDCALC";

module.exports = {
    cadastrarItemPedidoCalcadista,
    deletarItemPedidoCalcadista
}

async function cadastrarItemPedidoCalcadista(item) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, item, (err, data) => {
            if (err)
                return reject(err);

            var mysql2 = `SELECT max(item_pedcalc_cod) AS codigo FROM ${tabela};`;
            client.query(mysql2, (err, data) => {
                if (err)
                    return reject(err);

                resolve(data[0].codigo);
            });
        });
    })
}

function deletarItemPedidoCalcadista(codigo, callback) {
    // deletando os itens grade
    var mysql = `DELETE FROM ITEM_PED_GRAD WHERE item_pedcalc_cod = ${codigo};`;
    client.query(mysql, (err, data) => {
        if (err)
            return callback(err);

        //deletando o item Pedido Calcadista
        mysql = `DELETE FROM ${tabela} WHERE item_pedcalc_cod = ${codigo};`;
        client.query(mysql, (err, data) => {
            if (err)
                return callback(err);

            callback();
        });
    });
}