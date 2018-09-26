module.exports = (app) => {
    var controller = require('../controllers/pedidoGlobal');

    app.get('/pedidoGlobal', controller.buscarPedidoGlobal);
    app.get('/novoPedidoGlobal', controller.novoPedidoGlobal);
    app.post('/pedidoGlobal/novo', controller.cadastrarPedidoGlobal);
    app.get('/pedidoGlobal/:codigo', controller.buscarPedidoGlobalPorId);
    app.post('/pedidoGlobal/alterar/:codigo', controller.alterarPedidoGlobal);
    app.get('/pedidoGlobal/excluir/:codigo', controller.deletarPedidoGlobal);

}

