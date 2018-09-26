module.exports = (app) => {
    var controller = require('../controllers/pedidoLaticinio');

    app.get('/pedidoLaticinio', controller.buscarPedidoLaticinio);
    app.get('/novoPedidoLaticinio', controller.novoPedidoLaticinio);
    app.post('/pedidoLaticinio/novo', controller.cadastrarPedidoLaticinio);
    app.get('/pedidoLaticinio/:codigo', controller.buscarPedidoLaticinioPorId);
    app.post('/pedidoLaticinio/alterar/:codigo', controller.alterarPedidoLaticinio);
    app.get('/pedidoLaticinio/excluir/:codigo', controller.deletarPedidoLaticinio);

}

