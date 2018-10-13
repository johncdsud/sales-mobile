module.exports = (app) => {

    app.get('/index', (req, res) => {
        res.render('../app/views/index.ejs');
    });

}