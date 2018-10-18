var model = require('../models/estoqueSaida.js'),
    itemEstoqueModel = require('../models/itemEstoque.js'),
    produto = require('../models/produto.js');


module.exports = {
    buscarEstoqueSaida,
    buscarEstoqueSaidaPorId,
    novoEstoqueSaida,
    cadastrarEstoqueSaida,
    deletarEstoqueSaida
}

function buscarEstoqueSaida(req, res) {
    model.buscarEstoqueSaida((err, data) => {
        if (err)
            return res.status(500).json(err);
            
        data.forEach((item) => {
            item.movest_dataent = moment(item.movest_dataent).format("DD/MM/YYYY");
        });

        res.render('../app/views/estoqueSaida/estoqueSaida.ejs', { movestoque: data });
    });
}

function buscarEstoqueSaidaPorId(req, res) {
    model.buscarEstoqueSaidaPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        produto.buscarProduto(null,(err, produtos) => {
            if (err)
                return res.json(err);

            data.forEach((item) => {
                item.item_pedido = item.movest_pedido;
                item.movest_dataent = moment(item.movest_dataent).format("DD/MM/YYYY");
            });

            res.render('../app/views/estoqueSaida/alteraEstoqueSaida.ejs', { movestoque: data, produto: produtos });
        });
    });
}

function novoEstoqueSaida(req, res) {
    produto.buscarProduto(null, (err, data) => {
        if (err)
            return res.json(err);
            
        res.render('../app/views/estoqueSaida/novoEstoqueSaida.ejs', { produto: data });
    });
}


async function cadastrarEstoqueSaida(req, res) {
    try {
        var movestCodigo = await model.cadastrarEstoqueSaida(req.body);

        for (var i = 0; i < req.body.itens.length; i++) {
            var item = {
                movest_codigo: movestCodigo,
                prod_codigo: req.body.itens[i].codigoProduto,
                item_custo: req.body.itens[i].itemCusto,
                qtde: req.body.itens[i].itemQuantidade,
            };

            await itemEstoqueModel.cadastrarItemEstoque(item);
        }

        res.status(200);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

async function deletarEstoqueSaida(req, res) {
    try {
        await itemEstoqueModel.deletarItemEstoquePromise(req.params.codigo);
        await model.deletarEstoqueSaida(req.params.codigo);
        res.redirect(req.get('referer'));
    }
    catch (err) {
        res.status(500).json(err);
    }
}