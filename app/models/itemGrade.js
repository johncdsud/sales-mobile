var client = require('../../config/dbconnection');
var tabela = "ITEMGRADE";



module.exports = {
    buscarItemGrade,
    novoItemGrade,
    buscarItemGradePorId,
    buscarItensGradePorGradeCodigo,
    cadastrarItemGrade,
    alterarItemGrade,
    deletarItemGrade,
    deletarItemGradePromise
}

function buscarItemGrade(callback) {
    client.query(`SELECT * FROM ITEMGRADE a INNER JOIN GRADE b ON a.grade_codigo = b.grade_codigo` ,callback);    
}


function novoItemGrade(req, res) {
    res.render('../app/views/novoItemGrade.ejs');
}

function buscarItemGradePorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE grade_codigo = ${id}`, callback);
}

function buscarItensGradePorGradeCodigo(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE grade_codigo = ${id}`, callback);
}

async function cadastrarItemGrade(ITEMGRADE) {
    return new Promise((resolve, reject) => {
        var mysql = `INSERT INTO ${tabela} SET ?`;
        client.query(mysql, ITEMGRADE, (err, data) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

function alterarItemGrade(ITEMGRADE) {
    return new Promise((resolve, reject) => {
        var mysql = `UPDATE  ${tabela} SET grade_tamanho ='${ITEMGRADE.tamanho}' WHERE cod_item_grade = ${ITEMGRADE.cod_item_grade}`;

        client.query(mysql, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

function deletarItemGrade(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE cod_item_grade = ${id}`, callback);
}

async function deletarItemGradePromise(cod_grade) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM ${tabela} WHERE grade_codigo = ${cod_grade}`, (err) => {
            if(err)
                return reject(err);
    
            resolve();
        });
    })
}