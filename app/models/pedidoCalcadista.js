var client = require('../../config/dbconnection');
var tabela = "PEDIDOCALCADO";
var tabela2 = "ITEM_PEDCALC"

module.exports = {
    buscarPedidoCalcadista,
    buscarPedidoCalcadistaPorId,
    cadastrarPedidoCalcadista,
    alterarPedidoCalcadista,
    deletarPedidoCalcadista
}

function buscarPedidoCalcadista(callback) {
    client.query(`SELECT * FROM PEDIDOCALCADO a INNER JOIN PESSOA b ON a.pessoa_codigo = b.pessoa_codigo ` ,callback);
}

function buscarPedidoCalcadistaPorId(id, callback) {
    //buscando o pedido 
    var mysql = `SELECT * FROM ${tabela} p INNER JOIN PESSOA pes ON pes.pessoa_codigo = p.pessoa_codigo INNER JOIN CONDPAG c ON c.condpag_codigo = p.condpag_codigo`;
    client.query(mysql, (err, data) => {
        if(err)
            return callback(err);

        var pedidoCalcadista = data[0];
        pedidoCalcadista.total = 0;

        //buscando os itens do pedido
        mysql = `SELECT * FROM ${tabela2} i INNER JOIN PRODUTO p ON p.prod_codigo = i.prod_codigo INNER JOIN GRADE g ON g.grade_codigo = i.cod_grade WHERE pedcalc_codigo = ${id}`;
        client.query(mysql, (err, itens) => {
            if(err)
                return callback(err);

            pedidoCalcadista.itens = itens;

            if(!itens || !itens.length)
                return callback(null, pedidoCalcadista);

            //buscando as grades dos itens
            itens.forEach((item, i) => {
                // pegando o total do pedido
                pedidoCalcadista.total += (+item.item_pedcalc_preco * +item.item_pedcalc_qtde);

                mysql = `SELECT * FROM item_ped_grad WHERE item_pedcalc_cod = ${item.item_pedcalc_cod}`;
                client.query(mysql, (err, itensPedGrade) => {
                    if(err)
                        return callback(err);

                    pedidoCalcadista.itens[i].itensPedGrade = itensPedGrade;

                    if(i == itens.length - 1) {
                        callback(null, pedidoCalcadista);
                    }
                })
            });;
        });
    });
}

async function cadastrarPedidoCalcadista(PEDIDOGLOBAL) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, PEDIDOGLOBAL, (err, data) => {
            if (err)
                return reject(err);

            var mysql = `SELECT max(pedcalc_codigo) AS codigo FROM ${tabela};`;
            client.query(mysql, (err, data) => {
                if (err)
                    return reject(err);

                resolve(data[0].codigo);
            });
        });
    });
};

async function alterarPedidoCalcadista(id, PEDIDOCALCADO) {
    return new Promise((resolve, reject) => {
        var mysql = `UPDATE ${tabela} SET dataped ='${PEDIDOCALCADO.dataped}', data_entrega ='${PEDIDOCALCADO.data_entrega}', pessoa_codigo ='${PEDIDOCALCADO.pessoa_codigo}', condpag_codigo ='${PEDIDOCALCADO.condpag_codigo}' WHERE pedcalc_codigo = ${id}`;
        client.query(mysql, (err, data) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

function deletarPedidoCalcadista(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pedcalc_codigo = ${id}`, callback);
}