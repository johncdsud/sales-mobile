var model = require('../models/clientepj.js');

module.exports = {
    buscarClientepj,
    buscarClientepjPorId,
    novoClientepj,
    cadastrarClientepj,
    alterarClientepj,
    deletarClientepj
}

function buscarClientepj(req, res) {
    model.buscarClientepj((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/clientepj/clientepj.ejs', { clientepj: data });
    })
}

function buscarClientepjPorId(req, res) {
    model.buscarClientepjPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/clientepj/alteraClientepj.ejs', { pj: data[0] });
    })
}

function novoClientepj(req, res) {
    model.buscarClientepj((err, data) => {
        if (err)
            return res.json(err);
        res.render('../app/views/clientepj/novoClientepj.ejs', { clientepj: data });
    });
}


function cadastrarClientepj(req, res) {
    model.cadastrarClientepj(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/clientepj');
    });
}

function alterarClientepj(req, res) {
    model.alterarClientepj(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/clientepj');
    });
}



function deletarClientepj(req, res) {
    model.deletarClientepj(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.redirect('/clientepj');
    });
}


