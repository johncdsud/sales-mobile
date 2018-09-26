var model = require('../models/itemEstoque.js'),
    produto = require('../models/produto.js');


module.exports = {
    buscarItemEstoque,
    buscarItemEstoquePorId,
    novoItemEstoque,
    cadastrarItemEstoque,
    alterarItemEstoque,
    deletarItemEstoque
}

function buscarItemEstoque(req, res) {
    model.buscarItemEstoque((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/itemEstoque.ejs', { itemEstoque: data });
    })
}

function buscarItemEstoquePorId(req, res) {
    model.buscarItemEstoquePorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/alteraItemEstoque.ejs', { itemEstoque: data[0], produto: produto });
    })
}

function novoItemEstoque(req, res) {
    produto.buscarProduto((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/novoItemEstoque.ejs', { produto: data });
    });
}

async function cadastrarItemEstoque(req, res) {
    try {
        await model.cadastrarItemEstoque(req.body);
        res.status(200);
    }
    catch(err) {
        res.status(500).json(err);
    }
}

function alterarItemEstoque(req, res) {
    model.alterarItemEstoque(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/itemEstoque');
    });
}

function deletarItemEstoque(req, res) {
    model.deletarItemEstoque(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect(req.get('referer'));
    });
}