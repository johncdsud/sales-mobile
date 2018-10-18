module.exports = (app) => {
    var controller = require('../controllers/produto');

    app.get('/produto', controller.buscarProduto);
    app.get('/novoProduto', controller.novoProduto);
    app.post('/produto/novo', controller.cadastrarProduto);
    app.get('/produto/:codigo', controller.buscarProdutoPorId);
    app.post('/produto/alterar/:codigo', controller.alterarProduto);
    app.get('/produto/excluir/:codigo', controller.deletarProduto);
    app.get('/estoque/produto/:codigo', controller.buscarEstoqueProduto);
}



    
    
    
    
    
    

