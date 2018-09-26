var model = require('../models/pedidoGlobal.js'),
produto = require('../models/produto.js'),
condpag = require('../models/condpag.js'),
clientepf = require('../models/clientepf.js'),
clientepj = require('../models/clientepj.js'),
fornecedor = require('../models/fornecedor.js');

module.exports = {
    buscarPedidoGlobal,
    buscarPedidoGlobalPorId,
    novoPedidoGlobal,
    cadastrarPedidoGlobal,
    alterarPedidoGlobal,
    deletarPedidoGlobal
}

function buscarPedidoGlobal(req, res) {
    model.buscarPedidoGlobal((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/pedidoGlobal.ejs', { pedidoGlobal: data });
    })
}

function buscarPedidoGlobalPorId(req, res) {
    model.buscarPedidoGlobalPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/alteraPedidoGlobal.ejs', { pedidoGlobal: data[0], produto: produto, condpag: condpag, clientepf: clientepf, clientepj: clientepj, fornecedor: fornecedor});
    })
}

function novoPedidoGlobal(req, res) {
    produto.buscarProduto((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/novoPedidoGlobal.ejs', { produto: data, condpag: condpag, clientepf: data, clientepj: data, fornecedor: data });
    });
}


function cadastrarPedidoGlobal(req, res) {
    model.cadastrarPedidoGlobal(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/pedidoGlobal');
    });
}

function alterarPedidoGlobal(req, res) {
    model.alterarPedidoGlobal(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/pedidoGlobal');
    });
}



function deletarPedidoGlobal(req, res) {
    model.deletarPedidoGlobal(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.redirect('/pedidoGlobal');
    });
}


