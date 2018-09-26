var model = require('../models/login.js');   

module.exports = {
    buscarLogin,
    buscarLoginPorId,
    novoLogin,
    cadastrarLogin,
    alterarLogin,
    deletarLogin
}
        
function buscarLogin(req, res) {
    model.buscarLogin((err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/login.ejs', { login: data});
    })
}

function buscarLoginPorId(req, res) {    
    model.buscarLoginPorId(req.params.codigo, (err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/alteraLogin.ejs', { login: data[0]});
    })
}

function novoLogin(req, res) {
    model.buscarLogin((err,data) => {
        if (err)
            return res.json(err);
         res.render('../app/views/novoLogin.ejs',{login: data});
    });
}


function cadastrarLogin(req, res) {
       model.cadastrarLogin(req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/login');
    });
}

function alterarLogin(req, res) {
       model.alterarlogin(req.params.codigo, req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/login');
    });
}



function deletarLogin(req, res) {
       model.deletarInfo(req.params.codigo, (err, data) => {
        if (err) 
            return res.json(err);        
         res.redirect('/Login');
    });
}


