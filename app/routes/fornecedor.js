module.exports = (app) => {
    var controller = require('../controllers/fornecedor');

    app.get('/fornecedor', controller.buscarFornecedor);
    app.get('/novoFornecedor', controller.novoFornecedor);
    app.post('/fornecedor/novo', controller.cadastrarFornecedor);
    app.get('/fornecedor/:codigo', controller.buscarFornecedorPorId);
    app.post('/fornecedor/alterar/:codigo', controller.alterarFornecedor);
    app.get('/fornecedor/excluir/:codigo', controller.deletarFornecedor);

}

