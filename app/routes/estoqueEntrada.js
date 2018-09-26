module.exports = (app) => {
    var controller = require('../controllers/estoqueEntrada');

    app.get('/estoqueEntrada', controller.buscarEstoqueEntrada);
    app.get('/novoEstoqueEntrada', controller.novoEstoqueEntrada);
    app.post('/estoqueEntrada/novo', controller.cadastrarEstoqueEntrada);
    app.get('/estoqueEntrada/:codigo', controller.buscarEstoqueEntradaPorId);
    app.get('/estoqueEntrada/excluir/:codigo', controller.deletarEstoqueEntrada);

}

