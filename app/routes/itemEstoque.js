module.exports = (app) => {
    var controller = require('../controllers/itemEstoque');

    app.post('/itemEstoque/novo', controller.cadastrarItemEstoque);
    app.get('/itemEstoque/excluir/:codigo', controller.deletarItemEstoque);
}