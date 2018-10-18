var $ = document.getElementById.bind(document);

function pegaData() {
    var data = {
        inicio: $('pedGradeRelIni').value,
        fim: $('pedGradeFin').value
    };

    gerarRelatorio(null, 'pedidoGrade', 'POST', data);
}