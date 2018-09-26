module.exports = (app) => {
    var controller = require('../controllers/pedidoCalcadista');

    app.get('/pedidoCalcadista', controller.buscarPedidoCalcadista);
    app.get('/novoPedidoCalcadista', controller.novoPedidoCalcadista);
    app.post('/pedidoCalcadista/novo', controller.cadastrarPedidoCalcadista);
    app.get('/pedidoCalcadista/:codigo', controller.buscarPedidoCalcadistaPorId);
    app.post('/pedidoCalcadista/alterar/:codigo', controller.alterarPedidoCalcadista);
    app.get('/pedidoCalcadista/excluir/:codigo', controller.deletarPedidoCalcadista);

}

