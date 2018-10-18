var model = require('../models/itemPedGrade.js');

module.exports = {
    buscarItensGradePorItemPedCalcCodigo,
    deletarItemPedidoGrade,
}

function buscarItensGradePorItemPedCalcCodigo(req, res) {
    model.buscarItensGradePorItemPedCalcCodigo(req.params.itemPedCalcCodigo, (err, data) => {
        if (err)
            return res.status(500).json(err);

        res.status(200).json(data);
    })
}

function deletarItemPedidoGrade(req, res) {
    model.deletarItemPedGrade(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect(req.get('referer'));
    });
}
