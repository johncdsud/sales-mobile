
var express = require('express');
var path = require('path');
var fs = require('fs');
var body = require('body-parser');
var banco = require('./dbconnection');
var load = require('express-load');

app = express();
moment = require("moment");
process.env.TZ = 'America/Sao_Paulo'

app.use(body.urlencoded({extended:true}));
app.use(body.json());
app.use(express.static('public'));
app.set('port', 3000);

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('../app/views/login.ejs', { message: '' });
})

//importar as rotas (corrigir cannot GET ...)
require('../app/routes/marca')(app);
require('../app/routes/produto')(app);
require('../app/routes/usuario')(app);
require('../app/routes/empresa')(app);
require('../app/routes/clientepf')(app);
require('../app/routes/clientepj')(app);
require('../app/routes/fornecedor')(app);
require('../app/routes/grade')(app);
require('../app/routes/itemGrade')(app);
require('../app/routes/condpag')(app);
require('../app/routes/estoqueEntrada')(app);
require('../app/routes/estoqueSaida')(app);
require('../app/routes/itemEstoque')(app);
require('../app/routes/pedidoGlobal')(app);
require('../app/routes/itemPedidoGlobal')(app);
require('../app/routes/itemPedidoCalcadista')(app);
require('../app/routes/itemPedGrade')(app);
require('../app/routes/pedidoCalcadista')(app);
require('../app/routes/info')(app);
require('../app/routes/login')(app);
require('../app/routes/index')(app);

module.exports = app;