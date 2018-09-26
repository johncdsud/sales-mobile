module.exports = (app) => {
    var controller = require('../controllers/empresa');

    app.get('/empresa', controller.buscarEmpresa);
    app.get('/novaEmpresa', controller.novaEmpresa);
    app.post('/empresa/nova', controller.cadastrarEmpresa);
    app.get('/empresa/:codigo', controller.buscarEmpresaPorId);
    app.post('/empresa/alterar/:codigo', controller.alterarEmpresa);
    app.get('/empresa/excluir/:codigo', controller.deletarEmpresa);

}

