var model = require('../models/itemGrade.js'),
    produto = require('../models/grade.js');


module.exports = {
    buscarItemGrade,
    buscarItemGradePorId,
    buscarItensGradePorGradeCodigo,
    novoItemGrade,
    cadastrarItemGrade,
    alterarItemGrade,
    deletarItemGrade,
}

function buscarItemGrade(req, res) {
    model.buscarItemGrade((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/itemGrade.ejs', { itemGrade: data });
    })
}

function buscarItemGradePorId(req, res) {
    model.buscarItemGradePorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/alteraItemGrade.ejs', { itemGrade: data[0] });
    })
}

function buscarItensGradePorGradeCodigo(req, res) {
    model.buscarItensGradePorGradeCodigo(req.params.gradeCodigo, (err, data) => {
        if (err)
            return res.status(500).json(err);

        res.json(data);
    })
}

function novoItemGrade(req, res) {
    produto.buscarProduto((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/novoItemGrade.ejs', { itemGrade: data });
    });
}

async function cadastrarItemGrade(req, res) {
    try {
        await model.cadastrarItemGrade(req.body);
        res.status(200);
    }
    catch(err) {
        res.status(500).json(err);
    }
}

function alterarItemGrade(req, res) {
    model.alterarItemGrade(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/itemGrade');
    });
}

function deletarItemGrade(req, res) {
    model.deletarItemGrade(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect(req.get('referer'));
    });
}

