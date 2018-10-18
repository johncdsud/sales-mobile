var model = require('../models/produto.js'),
    marca = require('../models/marca.js'),
    estoqueEntrada = require("../models/estoqueEntrada"),
    estoqueSaida = require("../models/estoqueSaida"),
    itemPedidoGlobal = require("../models/itemPedGlobal");

module.exports = {
    buscarProduto,
    buscarProdutoPorId,
    novoProduto,
    cadastrarProduto,
    alterarProduto,
    deletarProduto,
    buscarEstoqueProduto
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

function buscarEstoqueProduto(req, res) {
    let estoque = 0;

    estoqueEntrada.buscarEstoqueEntradaPorIdProduto(req.params.codigo, (err, entrada) => {
        if (err)
            return res.status(500).json(err);

        entrada.forEach(item => {
            estoque += item.qtde;
        });

        estoqueSaida.buscarEstoqueSaidaPorIdProduto(req.params.codigo, (err, saida) => {
            if (err)
                return res.status(500).json(err);

            saida.forEach(item => {
                estoque -= item.qtde;
            });

            itemPedidoGlobal.buscarItemPedGlobalPorProduto(req.params.codigo, (err, itens) => {
                if (err)
                    return res.status(500).json(err);

                itens.forEach(item => {
                    estoque -= +item.qtdePedGlobal;
                });

                res.status(200).json(estoque);
            });
        });
    });
}