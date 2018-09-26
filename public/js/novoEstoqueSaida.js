var $ = document.getElementById.bind(document);

var movEstoque = {
    dataMovimento: null,
    motivo: null,
    itens: []
}

function getNomeProduto(id) {
    return document.querySelector(`#codigo-produto-${id}`).value;
}

function incluirItemEstoqueSaida() {
    movEstoque.dataMovimento = $('datamov').value;
    movEstoque.motivo = $('motivo').value;

    var item = {
        id: Math.floor(Math.random() * 100),
        codigoProduto: $('prod_codigo').value,
        itemCusto: $('item_custo').value,
        itemQuantidade: $('qtde').value
    };

    item.nomeProduto = $(`codigo-produto-${item.codigoProduto}`).text;

    // verifica se os campos foram preenchidos
    var errors = setErrors(movEstoque, item);

    if(errors && errors.length)
        return alert(errors);

    movEstoque.itens.push(item);

    incluirLayout(item);
}

function incluirLayout(item) {
    var tbody = document.querySelector('#tbody-movEstoque');
    var tr = document.createElement('tr');
    tr.setAttribute('id', `id-${item.id}`);

    // Motivo
    var tdMotivo = document.createElement('td');
    tdMotivo.textContent = movEstoque.motivo;
    tr.appendChild(tdMotivo);

    // produto
    var tdProduto = document.createElement('td');
    tdProduto.textContent = item.nomeProduto;
    tr.appendChild(tdProduto);

    // quantidade
    var tdQuantidade = document.createElement('td');
    tdQuantidade.textContent = item.itemQuantidade;
    tr.appendChild(tdQuantidade);

    // custo
    var tdItemCusto = document.createElement('td');
    tdItemCusto.textContent = item.itemCusto;
    tr.appendChild(tdItemCusto);

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
    movEstoque.itens.map((item, i) => {
        if (item.id == id) {
            movEstoque.itens.splice(i, 1);
            // removendo do layout
            var list = $('tbody-movEstoque');
            list.removeChild(list.childNodes[i + 1]); 
        }
    });
}

function setErrors(movEstoque, item) {
    var erros = [];

    if (movEstoque.dataMovimento == "" || movEstoque.dataMovimento == null)
        erros.push("Data Movimento é obrigatório");

    if (movEstoque.motivo == "" || movEstoque.motivo == null)
        erros.push("\nMotivo é obrigatório");

    if (item.itemCusto == "" || item.itemCusto == null)
        erros.push("\nCusto é obrigatório");

    if (item.itemQuantidade == "" || item.itemQuantidade == null)
        erros.push("\nQuantidade é obrigatório");

    return erros;
}

// chama a api
function salvar() {
    var url = `${window.location.origin}/estoqueSaida/novo`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                alert("Salvo com Sucesso");
            }
            else {
                alert("Ocorreu um erro no servidor");
            }
        }
    };

    xhr.send(JSON.stringify(movEstoque));
}

function imprimirSaida() {
    window.print();
}