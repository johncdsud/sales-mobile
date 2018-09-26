module.exports = (app) => {
    var controller = require('../controllers/usuario');

    app.get('/usuario', controller.buscarUsuario);
    app.get('/novoUsuario', controller.novoUsuario);
    app.post('/usuario/novo', controller.cadastrarUsuario);
    app.get('/usuario/:codigo', controller.buscarUsuarioPorId);
    app.post('/usuario/alterar/:codigo', controller.alterarUsuario);
    app.get('/usuario/excluir/:codigo', controller.deletarUsuario);

}


