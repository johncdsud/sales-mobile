module.exports = (app) => {
    var controller = require('../controllers/clientepj');

    app.get('/clientepj', controller.buscarClientepj);
    app.get('/novoClientepj', controller.novoClientepj);
    app.post('/clientepj/novo', controller.cadastrarClientepj);
    app.get('/clientepj/:codigo', controller.buscarClientepjPorId);
    app.post('/clientepj/alterar/:codigo', controller.alterarClientepj);
    app.get('/clientepj/excluir/:codigo', controller.deletarClientepj);

}

