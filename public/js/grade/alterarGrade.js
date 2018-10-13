var $ = document.getElementById.bind(document);

var grade = {
    grade_descricao: null,
    itens: []
}

function getItens() {
    grade.itens = [];

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
function alterarGrade() {
    grade.grade_descricao = $('descricao').value;
    getItens();

    // verifica se os campos foram preenchidos
    var errors = setErrors(grade);

    if (errors && errors.length)
        return alert(errors);

    var param = window.location.href.split("/");
    param = param[param.length - 1];

    var url = `${window.location.origin}/grade/alterar/${param}`;

    try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var json = JSON.parse(xhr.responseText);
                    alert("Salvo com Sucesso");
                }
                else {
                    // alert("Ocorreu um erro no servidor");
                }
            }
        };

        xhr.send(JSON.stringify(grade));
    }
    catch (ex) {
        console.log(ex);
    }

}

function altGrade() {
    alert("Alterado com sucesso");
}