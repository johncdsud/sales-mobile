var model = require('../models/grade.js'),
    itemGradeModel = require("../models/itemGrade");

module.exports = {
    buscarGrade,
    buscarGradePorId,
    novaGrade,
    cadastrarGrade,
    alterarGrade,
    deletarGrade
}

function buscarGrade(req, res) {
    model.buscarGrade((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/grade/grade.ejs', { grade: data });
    })
}

function buscarGradePorId(req, res) {
    model.buscarGradePorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/grade/alteraGrade.ejs', { grade: data});
    })
}

function novaGrade(req, res) {
    model.buscarGrade((err, data) => {
        if (err)
            return res.json(err);
            
        res.render('../app/views/grade/novaGrade.ejs', { grade: data });
    });
}

async function cadastrarGrade(req, res) {
    try {

        var grade = {
            grade_descricao: req.body.grade_descricao
        }

        var codigoGrade = await model.cadastrarGrade(grade);

        for (var i = 0; i < req.body.itens.length; i++) {
            var item = {
                grade_codigo: codigoGrade,
                grade_tamanho: req.body.itens[i],
            };

            await itemGradeModel.cadastrarItemGrade(item);
        }

        res.status(200);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

async function alterarGrade(req, res) {
    try {

        var grade = {
            grade_codigo: req.params.codigo,
            grade_descricao: req.body.grade_descricao
        }

        await model.alterarGrade(grade);
        await itemGradeModel.deletarItemGradePromise(req.params.codigo);

        for (var i = 0; i < req.body.itens.length; i++) {
            var item = {
                grade_codigo: grade.grade_codigo,
                grade_tamanho: req.body.itens[i],
            };

            await itemGradeModel.cadastrarItemGrade(item);
        }

        res.status(200);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

async function deletarGrade(req, res) {
    try {
        await itemGradeModel.deletarItemGradePromise(req.params.codigo);
        await model.deletarGrade(req.params.codigo);
        res.redirect(req.get('referer'));
    }
    catch (err) {
        res.status(500).json(err);
    }
}