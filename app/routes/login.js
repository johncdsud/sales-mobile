module.exports = (app) => {
    var controller = require('../controllers/login');

    app.post('/login', controller.buscarLogin);

    app.get('/login', (req, res) => {
        res.render('../app/views/login.ejs', { message: 'Faça o Login' });
    })

}

