var $ = document.getElementById.bind(document);

function pegaData() {
    var data = {
        inicio: $('pedGlobalRelIni').value,
        fim: $('pedGlobalFin').value
    };

    gerarRelatorio(null, 'pedidoGlobal', 'POST', data);
}