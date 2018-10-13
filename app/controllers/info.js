var model = require('../models/info.js');

module.exports = {
    buscarInfo,
    buscarInfoPorId,
    novaInfo,
    cadastrarInfo,
    alterarInfo,
    deletarInfo
}

function buscarInfo(req, res) {
    model.buscarInfo((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/info.ejs', { info: data });
    })
}

function buscarInfoPorId(req, res) {
    model.buscarInfoPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/alteraInfo.ejs', { info: data[0] });
    })
}

function novaInfo(req, res) {
    model.buscarInfo((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/novaInfo.ejs', { info: data });
    });
}


function cadastrarInfo(req, res) {
    model.cadastrarInfo(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/info');
    });
}

function alterarInfo(req, res) {
    model.alterarInfo(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/info');
    });
}



function deletarInfo(req, res) {
    model.deletarInfo(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);
        res.redirect('/info');
    });
}


