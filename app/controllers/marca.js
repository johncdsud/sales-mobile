var model = require('../models/marca.js');

module.exports = {
    buscarMarca,
    buscarMarcaPorId,
    novaMarca,
    cadastrarMarca,
    alterarMarca,
    deletarMarca
}

function buscarMarca(req, res) {
    model.buscarMarca((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/marca/marca.ejs', { marca: data });
    })
}

function buscarMarcaPorId(req, res) {
    model.buscarMarcaPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/marca/alteraMarca.ejs', { marca: data[0] });
    })
}

function novaMarca(req, res) {
    model.buscarMarca((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/marca/novaMarca.ejs', { marca: data });
    });
}


function cadastrarMarca(req, res) {
    model.cadastrarMarca(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/marca');
    });
}

function alterarMarca(req, res) {
    model.alterarMarca(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/marca');
    });
}



function deletarMarca(req, res) {
    model.deletarMarca(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/marca');
    });
}


