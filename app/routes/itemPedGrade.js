module.exports = (app) => {
    var controller = require('../controllers/itemPedGrade');

    app.get('/itemPedGrade/itemPedCalc/:itemPedCalcCodigo', controller.buscarItensGradePorItemPedCalcCodigo);
}