var model = require('../models/fornecedor.js');

module.exports = {
    buscarFornecedor,
    buscarFornecedorPorId,
    novoFornecedor,
    cadastrarFornecedor,
    alterarFornecedor,
    deletarFornecedor
}

function buscarFornecedor(req, res) {
    model.buscarFornecedor((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/fornecedor/fornecedor.ejs', { fornecedor: data });
    })
}

function buscarFornecedorPorId(req, res) {
    model.buscarFornecedorPorId(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/fornecedor/alteraFornecedor.ejs', { forn: data[0] });
    })
}

function novoFornecedor(req, res) {
    model.buscarFornecedor((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/fornecedor/novoFornecedor.ejs', { fornecedor: data });
    });
}


function cadastrarFornecedor(req, res) {
    model.cadastrarFornecedor(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/fornecedor');
    });
}

function alterarFornecedor(req, res) {
    model.alterarFornecedor(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/fornecedor');
    });
}



function deletarFornecedor(req, res) {
    model.deletarFornecedor(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/fornecedor');
    });
}