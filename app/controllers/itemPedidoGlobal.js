var model = require('../models/itemPedGlobal.js'),
    pedidoGlobal = require("../models/pedidoGlobal");

module.exports = {
    cadastrarItemPedidoGlobal,
    deletarItemPedidoGlobal
}

async function cadastrarItemPedidoGlobal(req, res) {
    try {
        await model.cadastrarItemPedGlobal(req.body);
        var pedido = await pedidoGlobal.buscarPedidoGlobalPorIdPromise(req.body.pedGlobalCod);
        var total = (+req.body.qtdePedGlobal * +req.body.unitarioPedGlobal) + pedido.totalPedGlobal;
        await pedidoGlobal.alterarTotalPedidoGlobal(pedido.pedGlobalCod, total);
        res.redirect(req.get('referer'));
    }
    catch(ex) {
        res.status(500).json(ex);
    }
}

async function deletarItemPedidoGlobal(req, res) {
    try {
        var item = await model.buscarItemPedGlobalPorId(req.params.codigo);
        var pedido = await pedidoGlobal.buscarPedidoGlobalPorIdPromise(item.pedGlobalCod);
        var subTotal = item.unitarioPedGlobal * item.qtdePedGlobal;
        var total = pedido.totalPedGlobal - subTotal;
        await model.deletarItemPedGlobal(req.params.codigo);
        await pedidoGlobal.alterarTotalPedidoGlobal(pedido.pedGlobalCod, total); 
        res.redirect(req.get('referer'));
    }
    catch(ex) {
        res.status(500).json(ex);
    }
}