var $ = document.getElementById.bind(document);

var pedido_global_codigo = $('pedido-global-codigo').textContent;

function incluirItem() {

    var item = {
        pedGlobalCod: pedido_global_codigo,
        prod_codigo: $('prod_codigo').value,       
        qtdePedGlobal: $('vendaPed').value,
        unitarioPedGlobal: $('unitarioPedGlobal').value
    };

    var errors = setErrors(item);

    if (errors && errors.length)
        return alert(errors);

    var url = `${window.location.origin}/itemPedGlobal/novo`;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.reload();
            }
            else {
                alert("Ocorreu um erro ao incluir o item");
            }
        }
    };

    xhr.send(JSON.stringify(item));
}

function setErrors(item) {
    var erros = [];

    if (item.qtdePedGlobal == "" || item.qtdePedGlobal == null)
        erros.push("\nQtde de Venda é obrigatório");

    if (item.unitarioPedGlobal == "" || item.unitarioPedGlobal == null)
        erros.push("\nPreço unitário  é obrigatório");

    return erros;
}

// chama a api
function salvarPedGlobal() {
    var pedGlobal = {
        pedGlobal_data: $('pedGlobal_data').value,
        pessoa_codigo: $('pessoa_codigo').value,
        condpag_codigo: $('condpag_codigo').value,
        totalPedGlobal: $('totalPedGlobal').value,
        pedGlobal_dataVencimento: $('pedGlobal_venc').value
    }

    var url = `${window.location.origin}/pedidoGlobal/alterar/${pedido_global_codigo}`;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert("Salvo com Sucesso");
            }
        }
    };

    xhr.send(JSON.stringify(pedGlobal));
}

function calcularTotal() {
    var list = $('tbody-pedGlobal').childNodes;
    var soma = 0;

    for(var i = 1; i < list.length; i++) {
        var filhos = list[i].childNodes;
        soma += parseFloat(filhos[filhos.length - 2].textContent);
    }

    $('totalPedGlobal').value = soma;
}

function alteraDataVencimento() {
    var dataPedido = $('pedGlobal_data').value;
    var diasSelect = $('condpag_codigo');
    var quantidadeDias = diasSelect.options[diasSelect.selectedIndex].text;
    quantidadeDias = parseInt(quantidadeDias) + 1;

    var dataVencimento = new Date(dataPedido);
    dataVencimento.setDate(dataVencimento.getDate() + quantidadeDias);
    $('pedGlobal_venc').value = moment(dataVencimento).format('YYYY-MM-DD');
}

function imprimirSaida() {
    window.print();
}