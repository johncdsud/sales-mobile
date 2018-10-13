var model = require('../models/produto.js'),
    marca = require('../models/marca.js');


module.exports = {
    buscarProduto,
    buscarProdutoPorId,
    novoProduto,
    cadastrarProduto,
    alterarProduto,
    deletarProduto
}

function buscarProduto(req, res) {
    model.buscarProduto(null, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/produto/produto.ejs', { produto: data });
    })
}

function buscarProdutoPorId(req, res) {
    model.buscarProdutoPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        marca.buscarMarca((err2, marca) => {
            if (err2)
                return res.json(err2);

            res.render('../app/views/produto/alteraProduto.ejs', { prod: data[0], marca: marca });
        });
    });
}



function novoProduto(req, res) {
    marca.buscarMarca((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/produto/novoProduto.ejs', { marca: data });
    });
}


function cadastrarProduto(req, res) {
    model.cadastrarProduto(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/produto');
    });
}

function alterarProduto(req, res) {
    model.alterarProduto(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/produto');
    });
}

function deletarProduto(req, res) {
    model.deletarProduto(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/produto');
    });
}


