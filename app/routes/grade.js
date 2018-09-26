module.exports = (app) => {
    var controller = require('../controllers/grade');

    app.get('/grade', controller.buscarGrade);
    app.get('/novaGrade', controller.novaGrade);
    app.post('/grade/nova', controller.cadastrarGrade);
    app.get('/grade/:codigo', controller.buscarGradePorId);
    app.post('/grade/alterar/:codigo', controller.alterarGrade);
    app.get('/grade/excluir/:codigo', controller.deletarGrade);

}

