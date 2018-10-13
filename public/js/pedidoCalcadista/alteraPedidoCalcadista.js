var $ = document.getElementById.bind(document);

var divItensGradeNumeracao = $('itens-grade-numeracao');
var divItensGradeQuantidade = $('itens-grade-quantidade');

var pedidoGrade = {
    pessoa_codigo: null,
    pedidoGrade_data: null,
    pedidoGrade_dataVencimento: null,
    condpag_codigo: null
}

function buscarItensGrade() {

    var id = $('grade_codigo').value;

    if (!id || id == "")
        return;

    // chama a api
    var url = `${window.location.origin}/itemGrade/grade/${id}`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var itensGrade = JSON.parse(xhr.response);
                organizaGrade(itensGrade);
            }
            else {
                alert("Ocorreu um erro no servidor");
            }
        }
    };

    xhr.send(JSON.stringify(id));
}

function organizaGrade(itensGrade) {
    divItensGradeNumeracao.innerHTML = '';
    divItensGradeQuantidade.innerHTML = '';

    for (var i = 0; i < itensGrade.length; i++) {
        var divFilhoNumeracao = document.createElement('div');
        divFilhoNumeracao.innerHTML = getInputNumeracao(i, itensGrade[i].grade_tamanho);
        divItensGradeNumeracao.appendChild(divFilhoNumeracao);

        var divFilhoQuantidade = document.createElement('div');
        divFilhoQuantidade.innerHTML = getInputQuantidade(i);
        divItensGradeQuantidade.appendChild(divFilhoQuantidade);
    }
}

function getInputNumeracao(i, tamanho) {
    return `
        <div class='col-md-1'>
            <input type='text' value='${tamanho}' id='numeracao${i}' name='grade_numeracao${i}' 
            style='width: 45px; text-align: center; border-radius:5px' readonly>
        </div>
    `
}

function getInputQuantidade(i) {
    return `
        <div class='col-md-1'>
            <input type='text'  id='quantidade${i}' name='grade_quantidade${i}' style='width: 45px; border-radius:5px; text-align: center'>
        </div>
    `
}

//INCLUIR ITEM NO PEDIDO
function incluirItemPedGrade() {

    var item = {
        id: Math.floor(Math.random() * 100),
        codigoProduto: $('prod_codigo').value,
        codigoGrade: $('grade_codigo').value,
        preco: +$('item_custo').value,
        quantidade: null,
        subTotal: null,
        grade: null
    };

    // verifica se os campos foram preenchidos
    var errors = setErrorsItem(item);

    if (errors && errors.length)
        return alert(errors);

    // item.nomeProduto = $(`codigo-produto-${item.codigoProduto}`).text;
    // item.nomeGrade = $(`codigo-grade-${item.codigoGrade}`).text;
    item.quantidade = calcularQuantidadeItensGrade();
    item.grade = getGrade();

    var errorQuantidade = setErrorsQuantidade();

    if (errorQuantidade)
        return alert("Informe a quantidade da grade");

    // chama a api para salvar o item
    var id = $('pedcalc_codigo').value;

    if (!id || id == "")
        return;

    var url = `${window.location.origin}/itemPedidoCalcadista/novo`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.reload();
                alert("Item incluido com sucesso");
            }
            else {
                alert("Ocorreu um erro no servidor");
            }
        }
    };

    var body = {
        pedcalc_codigo: id,
        prod_codigo: item.codigoProduto,
        cod_grade: item.codigoGrade,
        preco: item.preco,
        quantidade: item.quantidade,
        grade: item.grade
    }

    xhr.send(JSON.stringify(body));
}

//VISUALIZAR ITEM DO PEDIDO
function visualizarItem(id) {

    //chama a api
    var url = `${window.location.origin}/itemPedGrade/itemPedCalc/${id}`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var itens = JSON.parse(xhr.responseText);
                createModal(itens);
            }
            else {
                alert("Ocorreu um erro no servidor");
            }
        }
    };

    xhr.send();
}

function createModal(itens) {
    var theadTrModal = $('thead-tr-modal');
    var tbodyTrModal = $('tbody-tr-modal');

    theadTrModal.textContent = '';
    tbodyTrModal.textContent = '';

    // label numeracao
    var tdNumeracao = document.createElement('td');
    tdNumeracao.textContent = 'Numeração';
    theadTrModal.appendChild(tdNumeracao);

    // label quantidade
    var thQuantidade = document.createElement('td');
    thQuantidade.textContent = 'Quantidade';
    tbodyTrModal.appendChild(thQuantidade);


    itens.map((grade, i) => {
        $('title-modal').textContent = `Grade do Item ${i + 1}`;
        
        // header
        var td = document.createElement('td');
        td.setAttribute('style', 'width: 30px');
        td.textContent = grade.tamanho;
        theadTrModal.appendChild(td);

        // body
        var th = document.createElement('th');
        th.setAttribute('style', 'width: 30px');
        th.textContent = grade.quantidade;
        tbodyTrModal.appendChild(th);
    });

    $('button-modal').click();
}

//FUNÇAO DE ERROS DO ITEM
function setErrorsItem(item) {
    var erros = [];

    if (item.codigoProduto == "" || item.codigoProduto == null)
        erros.push("\nProduto é obrigatório");

    if (item.codigoGrade == "" || item.codigoGrade == null)
        erros.push("\nGrade é obrigatório");

    if (item.preco == "" || item.preco == null)
        erros.push("\nPreço é obrigatório");

    return erros;
}

//VERIFICANDO SE ELE SELECIONOU QUANTIDADE DA GRADE
function setErrorsQuantidade() {
    var cont = 0;
    var filhos = document.querySelector('#itens-grade-quantidade').childNodes;

    filhos.forEach((item) => {
        var input = item.childNodes[1].childNodes[1];

        if (!input.value || input.value == "")
            cont++;
    });

    if (cont == filhos.length)
        return 'error';

    return null;
}

//FUNÇAO DE ERROS DO PEDIDO
function setErrors(pedidoGrade) {
    var erros = [];

    if (pedidoGrade.pedidoGrade_data == "" || pedidoGrade.pedidoGrade_data == null)
        erros.push("\nData é obrigatório");

    if (pedidoGrade.pessoa_codigo == "" || pedidoGrade.pessoa_codigo == null)
        erros.push("\nCliente é obrigatório");

    if (pedidoGrade.condpag_codigo == "" || pedidoGrade.condpag_codigo == null)
        erros.push("\nPagamento é obrigatório");

    return erros;
}

// chama a api
function salvarPedidoGrade() {

    var id = $('pedcalc_codigo').value;

    if (!id || id == "")
        return;

    pedidoGrade.pedidoGrade_data = $('pedidoGrade_data').value;
    pedidoGrade.pedidoGrade_dataVencimento = $('pedidoGrade_venc').value;
    pedidoGrade.pessoa_codigo = $('pessoa_codigo').value;
    pedidoGrade.condpag_codigo = $('condpag_codigo').value;
    pedidoGrade.totalPedidoGrade = $('totalpedidoGrade').value;

    // verifica se os campos foram preenchidos
    var errors = setErrors(pedidoGrade);

    if (errors && errors.length)
        return alert(errors);

    var url = `${window.location.origin}/pedidoCalcadista/alterar/${id}`;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.reload();
                alert("Salvo com Sucesso");
            }
            else {
                alert("Ocorreu um erro no servidor")
            }
        }
    };

    xhr.send(JSON.stringify(pedidoGrade));
}

//ALTERAR VENCIMENTO COM A CONDIÇÃO DE PAGAMENTO
function alteraDataVencimento() {
    var dataPedido = $('pedidoGrade_data').value;
    var diasSelect = $('condpag_codigo');
    var quantidadeDias = diasSelect.options[diasSelect.selectedIndex].text;
    quantidadeDias = parseInt(quantidadeDias) + 1;

    var dataVencimento = new Date(dataPedido);
    dataVencimento.setDate(dataVencimento.getDate() + quantidadeDias);
    $('pedidoGrade_venc').value = moment(dataVencimento).format('YYYY-MM-DD');
}

function imprimir() {
    window.print();
}

function calcularQuantidadeItensGrade() {
    var quantidade = 0;
    var filhos = document.querySelector('#itens-grade-quantidade').childNodes;

    filhos.forEach((item, i) => {
        quantidade += +document.getElementById(`quantidade${i}`).value;
    });

    return quantidade;
}

function getGrade() {
    var grade = [];

    var filhosNumeracao = document.querySelector('#itens-grade-numeracao').childNodes;
    var filhosQuantidade = document.querySelector('#itens-grade-quantidade').childNodes;

    filhosNumeracao.forEach((item, i) => {

        var quantidade = +document.getElementById(`quantidade${i}`).value;

        if (quantidade && quantidade > 0) {
            grade.push({
                numeracao: +document.getElementById(`numeracao${i}`).value,
                quantidade: quantidade
            });
        }
    });

    return grade;
}