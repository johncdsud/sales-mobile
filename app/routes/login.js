module.exports = (app) => {
    var controller = require('../controllers/login');

    app.get('/login', controller.buscarLogin);
    app.get('/novoLogin', controller.novoLogin);
    app.post('/login/nova', controller.cadastrarLogin);
    app.get('/login/:codigo', controller.buscarLoginPorId);
    app.post('/login/alterar/:codigo', controller.alterarLogin);
    app.get('/login/excluir/:codigo', controller.deletarLogin);

}

