var model = require('../models/pedidoCalcadista.js'),
produto = require('../models/produto.js'),
condpag = require('../models/condpag.js'),
clientepf = require('../models/clientepf.js'),
clientepj = require('../models/clientepj.js'),
grade = require('../models/grade.js')


module.exports = {
    buscarPedidoCalcadista,
    buscarPedidoCalcadistaPorId,
    novoPedidoCalcadista,
    cadastrarPedidoCalcadista,
    alterarPedidoCalcadista,
    deletarPedidoCalcadista
}

function buscarPedidoCalcadista(req, res) {
    model.buscarPedidoCalcadista((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/pedidoCalcadista.ejs', { pedidoCalcadista: data });
    })
}

function buscarPedidoCalcadistaPorId(req, res) {
    model.buscarPedidoCalcadistaPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/alteraPedidoCalcadista.ejs', { pedidoCalcadista: data[0], produto: produto, condpag: condpag, clientepf: clientepf, clientepj: clientepj});
    })
}

function novoPedidoCalcadista(req, res) {
    produto.buscarProduto((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/novoPedidoCalcadista.ejs', { produto: data, condpag: condpag, clientepf: data, clientepj: data});
    });
}

function cadastrarPedidoCalcadista(req, res) {
    model.cadastrarPedidoCalcadista(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/pedidoCalcadista');
    });
}

function alterarPedidoCalcadista(req, res) {
    model.alterarPedidoCalcadista(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/pedidoCalcadista');
    });
}

function deletarPedidoCalcadista(req, res) {
    model.deletarPedidoCalcadista(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.redirect('/pedidoCalcadista');
    });
}


