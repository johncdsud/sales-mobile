var $ = document.getElementById.bind(document);

function incluirItemEstoque(movestCodigo) {
    
    var item = {
        movest_codigo: movestCodigo,
        prod_codigo: $('prod_codigo').value,
        qtde: $('qtde').value,
        item_custo: $('item_custo').value
    };

    var errors = setErrors(item);

    if (errors && errors.length)
        return alert(errors);

    var url = `${window.location.origin}/itemEstoque/novo`;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    window.location.reload();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert("Salvo com Sucesso");
                window.location.reload();
            }

        }
    };

    xhr.send(JSON.stringify(item));
}

function setErrors(item) {
    var erros = [];

    if (item.item_custo == "" || item.item_custo == null)
        erros.push("\nCusto é obrigatório");

    if (item.qtde == "" || item.qtde == null)
        erros.push("\nQuantidade é obrigatório");

    return erros;
}

// chama a api
function salvar(codigo) {
    getItens();   
    return;    
    var url = `${window.location.origin}/estoqueEntrada/alterar/${codigo}`;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                alert("Salvo com Sucesso");
            }

        }
    };

    xhr.send(JSON.stringify(movEstoque));
}

function imprimir() {
    window.print();
}