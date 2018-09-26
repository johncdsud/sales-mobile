var model = require('../models/grade.js');   

module.exports = {
    buscarGrade,
    buscarGradePorId,
    novaGrade,
    cadastrarGrade,
    alterarGrade,
    deletarGrade
}
        
function buscarGrade(req, res) {
    model.buscarGrade((err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/grade.ejs', { grade: data});
    })
}

function buscarGradePorId(req, res) {    
    model.buscarGradePorId(req.params.codigo, (err, data) =>{
        if (err) 
            return res.json(err);
        res.render('../app/views/alteraGrade.ejs', { grade: data[0]});
    })
}

function novaGrade(req, res) {
    model.buscarGrade((err,data) => {
        if (err)
            return res.json(err);
         res.render('../app/views/novaGrade.ejs',{grade: data});
    });
}


function cadastrarGrade(req, res) {
       model.cadastrarGrade(req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/grade');
    });
}

function alterarGrade(req, res) {
       model.alterarGrade(req.params.codigo, req.body, (err, data) => {
        if (err) 
            return res.json(err);
        
        res.redirect('/grade');
    });
}



function deletarGrade(req, res) {
       model.deletarGrade(req.params.codigo, (err, data) => {
        if (err) 
            return res.json(err);        
         res.redirect('/grade');
    });
}


