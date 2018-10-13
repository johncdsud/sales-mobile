var $ = document.getElementById.bind(document);

var grade = {
    grade_descricao: null,
    itens: []
}

function getItens() {
    var list = document.getElementsByName('grade_numeracao');

    list.forEach(item => {
        if (item.value != "")
            grade.itens.push(item.value);
    });
}

function setErrors() {
    var erros = [];

    if (!grade.grade_descricao || grade.grade_escricao == "")
        erros.push("Descrição é obrigatório");

    if (!grade.itens.length)
        erros.push("\nInforme pelo menos um tamanho");

    return erros;
}

// chama a api
function salvar() {
    grade.grade_descricao = $('descricao').value;
    getItens();

    // verifica se os campos foram preenchidos
    var errors = setErrors(grade);

    if (errors && errors.length)
        return alert(errors);

    var url = `${window.location.origin}/grade/nova`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.send(JSON.stringify(grade));
}

function SalvarGrade(){
    alert("Cadastrado com sucesso");
}