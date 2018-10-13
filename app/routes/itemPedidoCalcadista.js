module.exports = (app) => {
    var controller = require('../controllers/itemPedCalc');

    app.post('/itemPedidoCalcadista/novo', controller.cadastrarItemPedidoCalcadista);
    app.get('/itemPedidoCalcadista/excluir/:codigo', controller.deletarItemPedidoCalc);

}