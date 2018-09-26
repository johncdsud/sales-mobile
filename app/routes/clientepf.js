module.exports = (app) => {
    var controller = require('../controllers/clientepf');

    app.get('/clientepf', controller.buscarClientepf);
    app.get('/novoClientepf', controller.novoClientepf);
    app.post('/clientepf/novo', controller.cadastrarClientepf);
    app.get('/clientepf/:codigo', controller.buscarClientepfPorId);
    app.post('/clientepf/alterar/:codigo', controller.alterarClientepf);
    app.get('/clientepf/excluir/:codigo', controller.deletarClientepf);

}

