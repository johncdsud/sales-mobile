module.exports = (app) => {
    var controller = require('../controllers/condpag');

    app.get('/condpag', controller.buscarCondpag);
    app.get('/novaCondpag', controller.novaCondpag);
    app.post('/condpag/nova', controller.cadastrarCondpag);
    app.get('/condpag/:codigo', controller.buscarCondpagPorId);
    app.post('/condpag/alterar/:codigo', controller.alterarCondpag);
    app.get('/condpag/excluir/:codigo', controller.deletarCondpag);

}

