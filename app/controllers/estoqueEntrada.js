var model = require('../models/estoqueEntrada.js'),
    itemEstoqueModel = require('../models/itemEstoque.js'),
    produto = require('../models/produto.js');

module.exports = {
    buscarEstoqueEntrada,
    buscarEstoqueEntradaPorId,
    novoEstoqueEntrada,
    cadastrarEstoqueEntrada,
    deletarEstoqueEntrada
}

function buscarEstoqueEntrada(req, res) {
    model.buscarEstoqueEntrada((err, data) => {
        if (err)
            return res.json(err);

        data.forEach((item) => {
            item.movest_dataent = moment(item.movest_dataent).format("DD/MM/YYYY");
        });

        res.render('../app/views/estoqueEntrada/estoqueEntrada.ejs', { movestoque: data });
    });
}

function buscarEstoqueEntradaPorId(req, res) {
    model.buscarEstoqueEntradaPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        produto.buscarProduto(null,(err, produtos) => {
            if (err)
                return res.json(err);

            data.forEach((item) => {
                item.item_pedido = item.movest_pedido;
                item.movest_dataent = moment(item.movest_dataent).format("DD/MM/YYYY");
            });

            res.render('../app/views/estoqueEntrada/alteraEstoqueEntrada.ejs', { movestoque: data, produto: produtos });
        });
    });
}

function novoEstoqueEntrada(req, res) {
    produto.buscarProduto(null,(err, data) => {
        if (err)
            return res.json(err);
            
        res.render('../app/views/estoqueEntrada/novoEstoqueEntrada.ejs', { produto: data });
    });
}


async function cadastrarEstoqueEntrada(req, res) {
    try {
        var movestCodigo = await model.cadastrarEstoqueEntrada(req.body);

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

async function deletarEstoqueEntrada(req, res) {
    try {
        await itemEstoqueModel.deletarItemEstoquePromise(req.params.codigo);
        await model.deletarEstoqueEntrada(req.params.codigo);
        res.redirect(req.get('referer'));
    }
    catch (err) {
        res.status(500).json(err);
    }
}