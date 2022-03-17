const button = document.querySelector("#button");
const url = document.getElementById("url");
url.value = 'https://api.publicapis.org/entries?category=animals'

button.addEventListener('click', function () {
    
    //window.location.href = "index.html"
    
    console.log(url.value);



    
    let request = new XMLHttpRequest();
    // 'https://api.publicapis.org/entries?category=animals'
    request.open('get', url.value);
    request.send();
    
    var id = document.getElementById("id");

request.onload = function () {
    console.log('Retornou da API');

    let json = JSON.parse(request.response);
    const animals = json.entries;

    // transformo meu array de objetos para array de array
    var arr = animals.map(function(obj) {
        return Object.keys(obj).map(function(key) {
            return obj[key];
        });
    });

    //Quantidade LINHAS
    var linhas = arr.length;

    //Quantidade COLUNAS
    var maior = 0;
    //Posição do array que contem o maior numero de colunas, para pegar os titulos dele
    var posicao = 0 
    // Pego o maior numero de colunas possiveis da minha request 
    for(var i=0; i < arr.length; i++){
        if(maior < arr[i].length){
            maior = arr[i].length;
            posicao = i;
        }
    }

    // variavel tabela que contem o html
    var tabela = "";
    // FOR incluindo o cabeçalho
    for(var i = 0; i < 1; i++){
        tabela = "<tr>";
        for(var j = 0; j < maior; j++){
            tabela += "<th>"+Object.keys(json.entries[posicao])[j];+"</td>"
        }
        tabela += "</tr>"; 
    }
    // FOR incluindo dados
    for(var i = 0; i < linhas; i++){
        tabela += "<tr>";
        for(var j = 0; j < maior; j++){
            tabela += "<td>"+arr[i][j]+"</td>";
        }
        tabela += "/<tr>";
    }
    // coloco todo o HTML da tabela no table 
    id.innerHTML = tabela;
}

})