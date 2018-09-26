var client = require('../../config/dbconnection');
var tabela1 = "MOVESTOQUE";
var tabela2 = "ITEMESTOQUE"


module.exports = {
    buscarEstoqueSaida,
    novoEstoqueSaida,
    buscarEstoqueSaidaPorId,
    cadastrarEstoqueSaida,
    alterarEstoqueSaida,
    deletarEstoqueSaida
}

function buscarEstoqueSaida(callback) {
    client.query(`SELECT * FROM MOVESTOQUE` ,callback);  
    
}

function novoEstoqueSaida(req, res) {
    res.render('../app/views/novoEstoqueSaida.ejs');
}

function buscarEstoqueSaidaPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela1} mov LEFT JOIN ${tabela2} item ON mov.movest_codigo = item.movest_codigo LEFT JOIN PRODUTO p ON p.prod_codigo = item.prod_codigo WHERE mov.movest_codigo = ${id}`, callback);
}


async function cadastrarEstoqueSaida(movest) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO MOVESTOQUE(movest_dataent, movest_motivo) VALUES('${movest.dataMovimento}', '${movest.motivo}');`;
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

function alterarEstoqueSaida(id, MOVESTOQUE, callback) {
    return new Promise((resolve, reject) => {
        var mysql = `UPDATE  ${tabela1} SET movest_dataent ='${MOVESTOQUE.movest_dataent}, movest_motivo ='${MOVESTOQUE.movest_motivo}' WHERE movest_codigo = ${id}`;
        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

async function deletarEstoqueSaida(id, callback) {
    return new Promise((resolve, reject) => {
        var mysql = `DELETE FROM ${tabela1} WHERE movest_codigo = ${id}`;
        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}



