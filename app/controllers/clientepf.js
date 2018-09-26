var model = require('../models/clientepf.js');   

module.exports = {
    buscarClientepf,
    buscarClientepfPorId,
    novoClientepf,
    cadastrarClientepf,
    alterarClientepf,
    deletarClientepf
}
        
function buscarClientepf(req, res) {
    model.buscarClientepf((err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/clientepf.ejs', { clientepf: data});
    })
}

function buscarClientepfPorId(req, res) {    
    model.buscarClientepfPorId(req.params.codigo, (err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/alteraClientepf.ejs', { pf: data[0]});
    })
}

function novoClientepf(req, res) {
    model.buscarClientepf((err,data) => {
        if (err)
            return res.json(err);
         res.render('../app/views/novoClientepf.ejs',{clientepf: data});
    });
}


function cadastrarClientepf(req, res) {
       model.cadastrarClientepf(req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/clientepf');
    });
}

function alterarClientepf(req, res) {
       model.alterarClientepf(req.params.codigo, req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/clientepf');
    });
}



function deletarClientepf(req, res) {
       model.deletarClientepf(req.params.codigo, (err, data) => {
        if (err) 
            return res.json(err);        
         res.redirect('/clientepf');
    });
}


