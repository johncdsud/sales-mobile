module.exports = (app) => {
    var controller = require('../controllers/itemPedidoGlobal');

    app.get('/itemPedGlobal/excluir/:codigo', controller.deletarItemPedidoGlobal);
    app.post('/itemPedGlobal/novo', controller.cadastrarItemPedidoGlobal);
}