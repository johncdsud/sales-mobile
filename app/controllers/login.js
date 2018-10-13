var model = require('../models/login.js');   

module.exports = {
    buscarLogin,
}
        
function buscarLogin(req, res) {
    model.buscarLogin(req.body, (err, data) =>{
        if (err) 
            return res.status(500).json(err);

        if(!data || !data.length)
            return res.status(404).render('../app/views/login.ejs', { message: 'Nenhum usuario encontrado' });

        res.redirect('/index');
    })
}