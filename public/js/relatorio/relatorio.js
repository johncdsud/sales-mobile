function gerarRelatorio(id, route) {
    var url;

    if(!id || id == null)
        url = `http://${window.location.hostname}:3001/api/relatorio/${route}`;
    else
        url = `http://${window.location.hostname}:3001/api/relatorio/${route}/${id}`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                window.open(response.relatorio, '_blank');
            }
            else {
                alert("Ocorreu um erro ao gerar o relatorio");
            }
        }
    };

    xhr.send();
}