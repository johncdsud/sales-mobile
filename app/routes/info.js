module.exports = (app) => {
    var controller = require('../controllers/info');

    app.get('/info', controller.buscarInfo);
    app.get('/novaInfo', controller.novaInfo);
    app.post('/info/nova', controller.cadastrarInfo);
    app.get('/info/:codigo', controller.buscarInfoPorId);
    app.post('/info/alterar/:codigo', controller.alterarInfo);
    app.get('/info/excluir/:codigo', controller.deletarInfo);

}

