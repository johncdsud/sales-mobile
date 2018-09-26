var model = require('../models/pedidoLaticinio.js'),
produto = require('../models/produto.js'),
condpag = require('../models/condpag.js'),
clientepf = require('../models/clientepf.js'),
clientepj = require('../models/clientepj.js'),
fornecedor = require('../models/fornecedor.js');

module.exports = {
    buscarPedidoLaticinio,
    buscarPedidoLaticinioPorId,
    novoPedidoLaticinio,
    cadastrarPedidoLaticinio,
    alterarPedidoLaticinio,
    deletarPedidoLaticinio
}

function buscarPedidoLaticinio(req, res) {
    model.buscarPedidoLaticinio((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/pedidoLaticinio.ejs', { pedidoLaticinio: data });
    })
}

function buscarPedidoLaticinioPorId(req, res) {
    model.buscarPedidoLaticinioPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/alteraPedidoLaticinio.ejs', { pedidoLaticinio: data[0], produto: produto, condpag: condpag, clientepf: clientepf, clientepj: clientepj, fornecedor: fornecedor});
    })
}

function novoPedidoLaticinio(req, res) {
    produto.buscarProduto((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/novoPedidoLaticinio.ejs', { produto: data, condpag: condpag, clientepf: data, clientepj: data, fornecedor: data });
    });
}


function cadastrarPedidoLaticinio(req, res) {
    model.cadastrarPedidoLaticinio(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/pedidoLaticinio');
    });
}

function alterarPedidoLaticinio(req, res) {
    model.alterarPedidoLaticinio(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/pedidoLaticinio');
    });
}



function deletarPedidoLaticinio(req, res) {
    model.deletarPedidoLaticinio(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.redirect('/pedidoLaticinio');
    });
}


