module.exports = (app) => {
    var controller = require('../controllers/marca');

    app.get('/marca', controller.buscarMarca);
    app.get('/novaMarca', controller.novaMarca);
    app.post('/marca/nova', controller.cadastrarMarca);
    app.get('/marca/:codigo', controller.buscarMarcaPorId);
    app.post('/marca/alterar/:codigo', controller.alterarMarca);
    app.get('/marca/excluir/:codigo', controller.deletarMarca);

}

