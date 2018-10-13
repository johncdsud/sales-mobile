var model = require('../models/itemPedCalc.js'),
    itemPedGradeModel = require("../models/itemPedGrade");

module.exports = {
    cadastrarItemPedidoCalcadista,
    deletarItemPedidoCalc,
}

async function cadastrarItemPedidoCalcadista(req, res) {
    try {
        var item = {
            pedcalc_codigo: req.body.pedcalc_codigo,
            prod_codigo: req.body.prod_codigo,
            cod_grade: req.body.cod_grade,
            item_pedcalc_preco: req.body.preco,
            item_pedcalc_qtde: req.body.quantidade,
        }

        var codigoItem = await model.cadastrarItemPedidoCalcadista(item);

        for (var i = 0; i < req.body.grade.length; i++) {
            var itemGrade = {
                item_pedcalc_cod: codigoItem,
                tamanho: req.body.grade[i].numeracao,
                quantidade: req.body.grade[i].quantidade
            }

            await itemPedGradeModel.cadastrarItemPedidoGrade(itemGrade);
        }

        res.redirect(req.get('referer'));
    }
    catch (ex) {
        res.status(500).json(ex);
    }
}

function deletarItemPedidoCalc(req, res) {
    model.deletarItemPedidoCalcadista(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect(req.get('referer'));
    });
}