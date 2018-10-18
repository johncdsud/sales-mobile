var model = require('../models/pedidoCalcadista.js'),
    itemPedidoCalcadista = require("../models/itemPedCalc"),
    itemPedidoGradeModel = require("../models/itemPedGrade"),
    produto = require('../models/produto.js'),
    condpag = require('../models/condpag.js'),
    clientepf = require('../models/clientepf.js'),
    clientepj = require('../models/clientepj.js'),
    grade = require('../models/grade.js'),
    itemGrade = require('../models/itemGrade.js')


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

        res.render('../app/views/pedidoCalcadista/pedidoCalcadista.ejs', { pedidoCalcadista: data });
    });
}

function buscarPedidoCalcadistaPorId(req, res) {
    model.buscarPedidoCalcadistaPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        produto.buscarProduto([3, 4], (err, produtoData) => {
            if (err)
                return res.status(500).json(err)

            condpag.buscarCondpag((err, condpagdata) => {
                if (err)
                    return res.status(500).json(err)

                grade.buscarGrade((err, gradedata) => {
                    if (err)
                        return res.json(err)

                    clientepf.buscarClientepf((err, clientepfdata) => {
                        if (err)
                            return res.status(500).json(err)

                        itemGrade.buscarItemGrade((err, itemGradedata) => {
                            if (err)
                                return res.status(500).json(err)

                            clientepj.buscarClientepj((err, clientepjdata) => {
                                if (err)
                                    return res.status(500).json(err)

                                var clientes = clientepfdata.concat(clientepjdata);
                                res.render('../app/views/pedidoCalcadista/alteraPedidoCalcadista.ejs', { pedidoCalcadista: data, produto: produtoData, condpag: condpagdata, clientepf: clientes, grade: gradedata, itemGrade: itemGradedata });
                                // res.json(data);
                            });
                        });
                    });
                });
            });
        });
    })
}

function novoPedidoCalcadista(req, res) {
    produto.buscarProduto([3, 4], (err, data) => {
        if (err)
            return res.status(500).json(err)

        condpag.buscarCondpag((err, condpagdata) => {
            if (err)
                return res.status(500).json(err)
            grade.buscarGrade((err, gradedata) => {
                if (err)
                    return res.json(err)
                clientepf.buscarClientepf((err, clientepfdata) => {
                    if (err)
                        return res.status(500).json(err)
                    itemGrade.buscarItemGrade((err, itemGradedata) => {
                        if (err)
                            return res.status(500).json(err)
                        clientepj.buscarClientepj((err, clientepjdata) => {
                            if (err)
                                return res.status(500).json(err)

                            var clientes = clientepfdata.concat(clientepjdata);
                            res.render('../app/views/pedidoCalcadista/novoPedidoCalcadista.ejs', { produto: data, condpag: condpagdata, clientepf: clientes, grade: gradedata, itemGrade: itemGradedata });
                        });
                    });
                });
            });
        });
    });
}

async function cadastrarPedidoCalcadista(req, res) {
    try {
        var pedidoCalcadista = {
            pessoa_codigo: req.body.pessoa_codigo,
            dataped: req.body.pedidoGrade_data,
            data_entrega: req.body.pedidoGrade_dataVencimento,
            condpag_codigo: req.body.condpag_codigo
        }

        var codigoPedidoCalcadista = await model.cadastrarPedidoCalcadista(pedidoCalcadista);

        for (var i = 0; i < req.body.itens.length; i++) {
            var item = {
                pedcalc_codigo: codigoPedidoCalcadista,
                prod_codigo: req.body.itens[i].codigoProduto,
                cod_grade: req.body.itens[i].codigoGrade,
                item_pedcalc_preco: req.body.itens[i].preco,
                item_pedcalc_qtde: req.body.itens[i].quantidade
            }

            var codigoItem = await itemPedidoCalcadista.cadastrarItemPedidoCalcadista(item);

            for (var j = 0; j < req.body.itens[i].grade.length; j++) {
                var itemPedidoGrade = {
                    item_pedcalc_cod: codigoItem,
                    tamanho: req.body.itens[i].grade[j].numeracao,
                    quantidade: req.body.itens[i].grade[j].quantidade
                }

                await itemPedidoGradeModel.cadastrarItemPedidoGrade(itemPedidoGrade);
            }
        }

        res.status(200).end();
    }
    catch (ex) {
        res.status(500).json(ex);
    }
}

async function alterarPedidoCalcadista(req, res) {
    try {
        var pedido = {
            dataped: req.body.pedidoGrade_data,
            data_entrega: req.body.pedidoGrade_dataVencimento,
            condpag_codigo: req.body.condpag_codigo,
            pessoa_codigo: req.body.pessoa_codigo
        }

        await model.alterarPedidoCalcadista(req.params.codigo, pedido);
        res.status(200).end();
    }
    catch (ex) {
        res.status(500).json(ex);
    }
}

// function deletarPedidoCalcadista(req, res) {
//     model.deletarPedidoCalcadista(req.params.codigo, (err, data) => {
//         if (err)
//             return res.json(err);
//         res.redirect('/pedidoCalcadista');
//     });
// }

async function deletarPedidoCalcadista(req, res) {
    try {
        await model.deletarPedidoCalcadista(req.params.codigo);
        res.redirect(req.get('referer'));
    }
    catch (err) {
        res.status(500).json(err);
    }
}