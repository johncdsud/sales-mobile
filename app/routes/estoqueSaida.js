module.exports = (app) => {
    var controller = require('../controllers/estoqueSaida');

    app.get('/estoqueSaida', controller.buscarEstoqueSaida);
    app.get('/novoEstoqueSaida', controller.novoEstoqueSaida);
    app.post('/estoqueSaida/novo', controller.cadastrarEstoqueSaida);
    app.get('/estoqueSaida/:codigo', controller.buscarEstoqueSaidaPorId);   
    app.get('/estoqueSaida/excluir/:codigo', controller.deletarEstoqueSaida);

}

