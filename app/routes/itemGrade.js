module.exports = (app) => {
    var controller = require('../controllers/itemGrade');

    app.post('/itemGrade/novo', controller.cadastrarItemGrade);
    app.get('/itemGrade/grade/:gradeCodigo', controller.buscarItensGradePorGradeCodigo);
    app.get('/itemGrade/excluir/:codigo', controller.deletarItemGrade);
}