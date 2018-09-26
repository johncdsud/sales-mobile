var model = require('../models/usuario.js');   

module.exports = {
    buscarUsuario,
    buscarUsuarioPorId,
    novoUsuario,
    cadastrarUsuario,
    alterarUsuario,
    deletarUsuario
}

function buscarUsuario(req, res) {
    model.buscarUsuario((err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/usuario.ejs', { usuario: data});
    })
}

function buscarUsuarioPorId(req, res) {    
    model.buscarUsuarioPorId(req.params.codigo, (err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/alteraUsuario.ejs', { user: data[0]});
    })
}

function novoUsuario(req, res) {
    model.buscarUsuario((err,data) => {
        if (err)
            return res.json(err);
         res.render('../app/views/novoUsuario.ejs',{usuario: data});
    });
}


function cadastrarUsuario(req, res) {
       model.cadastrarUsuario(req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/usuario');
    });
}

function alterarUsuario(req, res) {
       model.alterarUsuario(req.params.codigo, req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/usuario');
    });
}



function deletarUsuario(req, res) {
       model.deletarUsuario(req.params.codigo, (err, data) => {
        if (err) 
            return res.json(err);        
         res.redirect('/usuario');
    });
}


