var model = require('../models/empresa.js');

module.exports = {
    buscarEmpresa,
    buscarEmpresaPorId,
    novaEmpresa,
    cadastrarEmpresa,
    alterarEmpresa,
    deletarEmpresa
}

function buscarEmpresa(req, res) {
    model.buscarEmpresa((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/empresa/empresa.ejs', { empresa: data });
    })
}

function buscarEmpresaPorId(req, res) {
    model.buscarEmpresaPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/empresa/alteraEmpresa.ejs', { emp: data[0] });
    })
}

function novaEmpresa(req, res) {
    model.buscarEmpresa((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/empresa/novaEmpresa.ejs', { empresa: data });
    });
}


function cadastrarEmpresa(req, res) {
    model.cadastrarEmpresa(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/empresa');
    });
}

function alterarEmpresa(req, res) {
    model.alterarEmpresa(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/empresa');
    });
}

function deletarEmpresa(req, res) {
    model.deletarEmpresa(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/empresa');
    });
}