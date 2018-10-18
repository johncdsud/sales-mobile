var $ = document.getElementById.bind(document);

// buscando o estoque ao entrar na tela
window.onload = function() {
    buscarEstoque();
}

var pedGlobal = {
    pedGlobal_data: null,
    pedGlobal_dataVencimento: null,
    pessoa_codigo: null,
    condpag_codigo: null,
    itens: [],
    totalPedGlobal: null,
}

function incluirItem() {
    var item = {
        id: Math.floor(Math.random() * 100),
        prod_codigo: $('prod_codigo').value,
        qtdePedGlobal: $('vendaPed').value,
        unitarioPedGlobal: $('unitarioPedGlobal').value
    };

    item.nomeProduto = $(`codigo-produto-${item.prod_codigo}`).text;

    // verifica se os campos foram preenchidos
    var errors = setErrors(pedGlobal, item);

    if (errors && errors.length)
        return alert(errors);

    pedGlobal.itens.push(item);

    incluirLayout(item);
    calcularTotal();
    atualizaEstoque(getEstoque() - item.qtdePedGlobal);
}

function incluirLayout(item) {
    var tbody = document.querySelector('#tbody-pedGlobal');
    var tr = document.createElement('tr');
    tr.setAttribute('id', `id-${item.id}`);

    // produto
    var tdProduto = document.createElement('td');
    tdProduto.textContent = item.nomeProduto;
    tr.appendChild(tdProduto);

    // quantidade
    var tdQuantidade = document.createElement('td');
    tdQuantidade.textContent = item.qtdePedGlobal;
    tr.appendChild(tdQuantidade);

    // unitario
    var tdItemUnitario = document.createElement('td');
    tdItemUnitario.textContent = item.unitarioPedGlobal;
    tr.appendChild(tdItemUnitario);

    // subTotal
    var tdItemSubTotal = document.createElement('td');
    tdItemSubTotal.textContent = item.unitarioPedGlobal * item.qtdePedGlobal;
    tr.appendChild(tdItemSubTotal);


    // deletar
    var tdDeletar = document.createElement("button");
    tdDeletar.textContent = 'Deletar';
    tdDeletar.setAttribute('class', 'btn btn-danger');
    tdDeletar.onclick = function () {
        deletarItem(item.id);
    };
    tr.appendChild(tdDeletar);

    tbody.appendChild(tr);
}

function deletarItem(id) {
    pedGlobal.itens.map((item, i) => {
        if (item.id == id) {
            pedGlobal.itens.splice(i, 1);
            // removendo do layout
            var list = $('tbody-pedGlobal');
            list.removeChild(list.childNodes[i + 1]);
            calcularTotal();
            atualizaEstoque(getEstoque() + (+item.qtdePedGlobal));
        }
    });
}

function setErrors(pedGlobal, item) {
    var erros = [];

    if (item.qtdePedGlobal == "" || item.qtdePedGlobal == null)
        erros.push("\nQuantidade Venda é obrigatória");

    if (item.unitarioPedGlobal == "" || item.unitarioPedGlobal == null)
        erros.push("\nValor Unitário é obrigatório");

    return erros;
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

function calcularTotal() {
    var list = $('tbody-pedGlobal').childNodes;
    var soma = 0;

    for (var i = 1; i < list.length; i++) {
        var filhos = list[i].childNodes;
        soma += parseFloat(filhos[filhos.length - 2].textContent);
    }

    $('totalPedGlobal').value = soma;
}

// chama a api
function salvarPedGlobal() {

    pedGlobal.pedGlobal_data = $('pedGlobal_data').value;
    pedGlobal.pedGlobal_dataVencimento = $('pedGlobal_venc').value;
    pedGlobal.pessoa_codigo = $('pessoa_codigo').value;
    pedGlobal.condpag_codigo = $('condpag_codigo').value;
    pedGlobal.totalPedGlobal = $('totalPedGlobal').value;

    var url = `${window.location.origin}/pedidoGlobal/novo`;
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

function imprimirPedGlobal() {
    window.print();
}

function buscarEstoque() {
    var prodSelect = $('prod_codigo');
    var id = prodSelect.options[prodSelect.selectedIndex].value;
    
    var url = `${window.location.origin}/estoque/produto/${id}`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var estoque = JSON.parse(xhr.responseText);
                atualizaEstoque(estoque);
            }
            else {
                alert("Ocorreu um erro ao buscar o estoque do produto");
            }
        }
    };

    xhr.send();
}

function atualizaEstoque(estq) {
    $('qtdePedGlobal').value = estq;
}

function getEstoque() {
    return +$('qtdePedGlobal').value;
}