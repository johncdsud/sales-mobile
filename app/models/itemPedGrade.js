var client = require('../../config/dbconnection');
var tabela = "ITEM_PED_GRAD";

module.exports = {
    buscarItensGradePorItemPedCalcCodigo,
    cadastrarItemPedidoGrade,
    deletarItemGradePromise
}

async function buscarItensGradePorItemPedCalcCodigo(id, callback) {
        var mysql = `SELECT * FROM ${tabela} WHERE item_pedcalc_cod = ${id}`;
        client.query(mysql, (err, data) => {
            if (err)
                return callback(err);

            callback(null, data);
        });
}

async function cadastrarItemPedidoGrade(item) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, item, (err, data) => {
            if (err)
                return reject(err);

            resolve();
        });
    })
}
async function deletarItemGradePromise(codigo_item_pg) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM ${tabela} WHERE item_pedcalc_cod = ${codigo_item_pg}`, (err) => {
            if(err)
                return reject(err);
    
            resolve();
        });
    })
}