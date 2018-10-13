var client = require('../../config/dbconnection');
var tabela = "GRADE";


module.exports = {
    buscarGrade,
    novaGrade,
    buscarGradePorId,
    cadastrarGrade,
    alterarGrade,
    deletarGrade
}

function buscarGrade(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}
function novaGrade(req, res) {
    res.render('../app/views/novaGrade.ejs');
}

function buscarGradePorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} g INNER JOIN ITEMGRADE ig ON ig.grade_codigo = g.grade_codigo WHERE g.grade_codigo = ${id}`, (err, data) => {
        //Função para trazer o tamanho(Numeração da grade) 
        if (err)
            return callback(err);

        if (data.length) {
            for (var i = data.length - 1; i < 11; i++) {
                data.push({
                    cod_item_grade: data[0].cod_item_grade,
                    grade_codigo: data[0].grade_codigo,
                    grade_descricao: data[0].grade_descricao,
                    grade_tamanho: null
                });
            }
        }

        callback(null, data);
    });
}

async function cadastrarGrade(GRADE) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, GRADE, (err, data) => {
            if (err)
                return reject(err);

            var mysql2 = `SELECT max(grade_codigo) AS codigo FROM GRADE;`;
            client.query(mysql2, (err, data) => {
                if (err)
                    return reject(err);

                resolve(data[0].codigo);
            });
        });
    });
}

async function alterarGrade(GRADE) {
    return new Promise((resolve, reject) => {
        var mysql = `UPDATE  ${tabela} SET grade_descricao ='${GRADE.grade_descricao}' WHERE grade_codigo = ${GRADE.grade_codigo}`;
        client.query(mysql, (err) => {
            if (err)
                return reject(err);

            resolve();
        });
    });
}

async function deletarGrade(id) {
    return new Promise((resolve, reject) => {
        var mysql = `DELETE FROM ${tabela} WHERE grade_codigo = ${id}`;
        client.query(mysql, (err) => {
            if (err)
                return reject(err);

            resolve();
        });
    });
}




