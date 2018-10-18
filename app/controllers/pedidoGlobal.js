var model = require('../models/pedidoGlobal.js'),
    itemPedidoGlobal = require("../models/itemPedGlobal"),
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
            return res.status(500).json(err)

        res.render('../app/views/pedidoGlobal/pedidoGlobal.ejs', { pedidoGlobal: data });
    })
}

function buscarPedidoGlobalPorId(req, res) {
    model.buscarPedidoGlobalPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.status(500).json(err);

        data = data[0];
        itemPedidoGlobal.buscarItemPedGlobalPorPedido(req.params.codigo, (err, itens) => {
            if (err)
                return res.status(500).json(err);

            data.itens = itens;
            produto.buscarProduto(null, (err, produtoData) => {
                if (err)
                    return res.status(500).json(err)

                condpag.buscarCondpag((err, condPagData) => {
                    if (err)
                        return res.status(500).json(err)

                    clientepf.buscarClientepf((err, clientepfData) => {
                        if (err)
                            return res.status(500).json(err)

                        clientepj.buscarClientepj((err, clientepjData) => {
                            if (err)
                                return res.status(500).json(err)

                            fornecedor.buscarFornecedor((err, fornecedorData) => {
                                if (err)
                                    return res.status(500).json(err)

                                var clientes = clientepfData.concat(clientepjData).concat(fornecedorData)
                                res.render('../app/views/pedidoGlobal/alteraPedidoGlobal.ejs', { pedidoGlobal: data, produto: produtoData, condpag: condPagData, clientepf: clientes });
                            })
                        })
                    })
                })
            })
        })
    })
}

function novoPedidoGlobal(req, res) {

    produto.buscarProduto(null, (err, data) => {
        if (err)
            return res.status(500).json(err)

        condpag.buscarCondpag((err, condPagData) => {
            if (err)
                return res.status(500).json(err)

            clientepf.buscarClientepf((err, clientepfData) => {
                if (err)
                    return res.status(500).json(err)

                clientepj.buscarClientepj((err, clientepjData) => {
                    if (err)
                        return res.status(500).json(err)
                    fornecedor.buscarFornecedor((err, fornecedorData) => {
                        if (err)
                            return res.status(500).json(err)

                        var clientes = clientepfData.concat(clientepjData).concat(fornecedorData)
                        res.render('../app/views/pedidoGlobal/novoPedidoGlobal.ejs', { produto: data, condpag: condPagData, clientepf: clientes });
                    })
                })
            })
        })

    });
}


async function cadastrarPedidoGlobal(req, res) {
    try {

        var pedido = {
            pedGlobal_data: req.body.pedGlobal_data,
            pessoa_codigo: req.body.pessoa_codigo,
            condpag_codigo: req.body.condpag_codigo,
            totalPedGlobal: req.body.totalPedGlobal,
            pedGlobal_dataVencimento: req.body.pedGlobal_dataVencimento
        };

        var pedidoGlobal = await model.cadastrarPedidoGlobal(pedido);

        for (var i = 0; i < req.body.itens.length; i++) {
            var item = {
                pedGlobalCod: pedidoGlobal,
                prod_codigo: req.body.itens[i].prod_codigo,
                qtdePedGlobal: req.body.itens[i].qtdePedGlobal,
                unitarioPedGlobal: req.body.itens[i].unitarioPedGlobal
            };

            await itemPedidoGlobal.cadastrarItemPedGlobal(item);
        }

        res.status(200).end();
    }
    catch (err) {
        res.status(500).json(err);
    }
}

function alterarPedidoGlobal(req, res) {
    model.alterarPedidoGlobal(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.status(500).json(err)

        res.redirect('/pedidoGlobal');
    });
}

async function deletarPedidoGlobal(req, res) {
    try {
        await itemPedidoGlobal.deletarItemPedGlobalPromise(req.params.codigo);
        await model.deletarPedidoGlobal(req.params.codigo);
        res.redirect(req.get('referer'));
    }
    catch (err) {
        res.status(500).json(err);
    }
}