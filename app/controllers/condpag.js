var model = require('../models/condpag.js');   

module.exports = {
    buscarCondpag,
    buscarCondpagPorId,
    novaCondpag,
    cadastrarCondpag,
    alterarCondpag,
    deletarCondpag
}
        
function buscarCondpag(req, res) {
    model.buscarCondpag((err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/condpag.ejs', { condpag: data});
    })
}

function buscarCondpagPorId(req, res) {    
    model.buscarCondpagPorId(req.params.codigo, (err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/alteraCondpag.ejs', { condpag: data[0]});
    })
}

function novaCondpag(req, res) {
    model.buscarCondpag((err,data) => {
        if (err)
            return res.json(err);
         res.render('../app/views/novaCondpag.ejs',{condpag: data});
    });
}


function cadastrarCondpag(req, res) {
       model.cadastrarCondpag(req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/condpag');
    });
}

function alterarCondpag(req, res) {
       model.alterarCondpag(req.params.codigo, req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/condpag');
    });
}



function deletarCondpag(req, res) {
       model.deletarCondpag(req.params.codigo, (err, data) => {
        if (err) 
            return res.json(err);        
         res.redirect('/condpag');
    });
}


