console.log(5);
// Declaração dos meus inputs - buttons
const nome = document.querySelector("#nome");
const button = document.querySelector("#button");
const data = document.querySelector("#data-nascimento");
const idade = document.querySelector("#idade");
const imagem = document.querySelector("#imagem");
const photo = document.querySelector("#photo-preview");
const cep = document.querySelector("#cep");
const endereco = document.querySelector("#endereco");
const numero = document.querySelector("#numero");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const apelido = document.querySelector("#apelido");
const cpf = document.querySelector("#cpf");
const rg = document.querySelector("#rg");
const estado = document.querySelector("#estado");

//Modal
const btnModalVoltar = document.getElementById('btnModalVoltar');
const btnModalCadastrar = document.getElementById('btnModalCadastrar');
const conteudoModel = document.querySelector('.conteudoModel');
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmaSenha = document.querySelector("#ConfirmaSenha");

const errorMessageEmail = document.querySelector(".msg-email");
const errorEmail = document.querySelector("#msg-email");

const errorMessageSenha = document.querySelector(".msg-senha");
const errorSenha = document.querySelector("#msg-senha");
const errorMessageConfirmaSenha = document.querySelector(".msg-confirmaSenha");
const errorConfirmaSenha = document.querySelector("#msg-confirmaSenha");



//declaração <h> para msg erro
const errorMessageNome = document.querySelector(".msg-nome");
const errorMessageData = document.querySelector(".msg-data");
const errorNome = document.querySelector("#msg-nome");
const errorData = document.querySelector("#msg-data");
const errorMessageEndereco = document.querySelector(".msg-endereco");
const errorEndereco = document.querySelector("#msg-endereco");
const errorMessageNumero = document.querySelector(".msg-numero");
const errorNumero = document.querySelector("#msg-numero");
const errorMessageBairro = document.querySelector(".msg-bairro");
const errorBairro = document.querySelector("#msg-bairro");
const errorMessageCidade = document.querySelector(".msg-cidade");
const errorCidade = document.querySelector("#msg-cidade");
const errorMessageCep = document.querySelector(".msg-cep");
const errorCep = document.querySelector("#msg-cep");
const errorMessageApelido = document.querySelector(".msg-apelido");
const errorApelido = document.querySelector("#msg-apelido");
const errorMessageCpf = document.querySelector(".msg-cpf");
const errorCpf = document.querySelector("#msg-cpf");
const errorMessageRg = document.querySelector(".msg-rg");
const errorRg = document.querySelector("#msg-rg");
const errorMessageEstado = document.querySelector(".msg-estado");
const errorEstado = document.querySelector("#msg-estado");
const errorImagem = document.querySelector("#msg-imagem")
const errorMessageImagem = document.querySelector(".msg-imagem");

nome.value = "Ivan Eduardo Mees";
data.value = "2003-02-23";
endereco.value = "Rua Peru";
numero.value = "259";
bairro.value = "Cidade Nova";
cidade.value = "Ivoti";
estado.value = "RS"
cep.value = "93900-000";
apelido.value = "Ivan";
cpf.value = "040.535.170.44";
rg.value = "123456789";


btnModalVoltar.addEventListener('click', function(){
    conteudoModel.style.display = "none";

})



//validação nome, não pode conter numero
nome.addEventListener('focusout', function () {


    if (venumero(nome.value)) {
        console.log(nome.value);
    }
    else {
        errorNome.innerHTML = "Nome não pode conter numeros"
        errorMessageNome.classList = "error";
        nome.value = "";
        nome.focus();

        setTimeout(() => {
            errorMessageNome.classList = "";
            errorNome.innerHTML = "";
        }, 3000)

        /*alert("nome não pode conter numericos");
        nome.value = "";*/
    }



    function venumero(nome) {

        for (let i = 0; i < nome.length; i++) {

            if (parseInt(nome[i])) {
                return false;
            }
        }
        return true;

    }
})

// Campo Data de Nascimento, validações caso a data for superior a atual e mostra o calculo da idade ao sair do input, perder o foco do input

data.addEventListener('focusout', function () {

    if (data.value != "") {
        var arrayMes = new Array(12);
        arrayMes[0] = "01";
        arrayMes[1] = "02";
        arrayMes[2] = "03";
        arrayMes[3] = "04";
        arrayMes[4] = "05";
        arrayMes[5] = "06";
        arrayMes[6] = "07";
        arrayMes[7] = "08";
        arrayMes[8] = "09";
        arrayMes[9] = "10";
        arrayMes[10] = "11";
        arrayMes[11] = "12";

        now = new Date();


        const dataNascimento = data.value.split("-");

        if (dataNascimento[0] > now.getFullYear()) {
            errorData.innerHTML = "Data de nascimento superior a atual"
            errorMessageData.classList = "error";
            data.value = "";
            data.focus();
            setTimeout(() => {
                errorMessageData.classList = "";
                errorData.innerHTML = "";
                idade.innerHTML = "";
            }, 3000)
            /*alert("Data de nascimento incorreta")
            data.value = "";*/
            return;
        }

        if (dataNascimento[0] == now.getFullYear()) {

            if (dataNascimento[1] > arrayMes[now.getMonth()]) {
                errorData.innerHTML = "Data de nascimento superior a atual"
                errorMessageData.classList = "error";
                data.value = "";
                data.focus();

                setTimeout(() => {
                    errorMessageData.classList = "";
                    errorData.innerHTML = "";
                    idade.innerHTML = "";
                }, 3000)
                /*alert("Data de nascimento incorreta")
                data.value = "";
                return;*/
            }

            if (dataNascimento[1] === arrayMes[now.getMonth()]) {
                if (dataNascimento[2] > now.getDate()) {
                    errorData.innerHTML = "Data de nascimento superior a atual"
                    errorMessageData.classList = "error";
                    data.value = "";
                    data.focus();

                    setTimeout(() => {
                        errorMessageData.classList = "";
                        errorData.innerHTML = "";
                        idade.innerHTML = "";
                    }, 3000)
                    /*alert("Data de nascimento incorreta")
                    data.value = "";
                    return;*/
                }
            }

        }

        let calculaidade = parseInt(now.getFullYear()) - parseInt(dataNascimento[0])

        if (parseInt(dataNascimento[1]) > parseInt(arrayMes[now.getMonth()])) {
            calculaidade++;
        } 
        else{
            if (parseInt(dataNascimento[2]) >= parseInt(now.getDate())) {
             calculaidade--;
            }
            
        }

        idade.innerHTML = "Idade: " + calculaidade + " anos";

    }
    else {
        idade.innerHTML = ""
    }
})

// não funciona pois o site esta localmente caso estivesse hospetado daria certo :)
// carregamento da imagem erro - not allowed to load local resource:
imagem.addEventListener('change', function () {
    console.log(imagem.value);
    photo.src = imagem.value;
   
})

async function Post(url, body){
    let request = new XMLHttpRequest();
    

    
    request.open("POST",url, true);
    request.setRequestHeader("Content-Type", "application/json");;
    //request.setRequestHeader("Accept","*/*");
    //request.setRequestHeader("User-Agent","Thunder Client (https://www.thunderclient.com)");
    //request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.send(JSON.stringify(body))
    
    request.onload = function(){
        //console.log(request.responseText)
        //console.log(request.status);
        /*if(request.responseText === '"Correto"'){
            console.log("entrou");
            alert("Cadastrado Com Sucesso");
        }
        else if(request.responseText === "Email ja cadastrado"){
            alert("Email já cadastrado");
        }
        else{
            alert("ERRO!!! Status: "+request.status + " Texto: "+request.responseText);
        }*/
        alert(request.responseText);

        if(request.status == 200){
            window.location.href="../Login/Login.html";
        }

    }
    
    request.onerror = function() {
        alert("ERRO");
    }
    //const userData = fetch(request.send(JSON.stringify(body))).then(response => response.json()).then(console.log(request.status));
    
    //await fetch(console.log(request.status)).then(console.log(request.status))
    //request.onload = function() {
    //    console.log(this.responseText);
    //}

    
        
    //request.send(JSON.stringify(body));

    //const promises = request.map(url => fetch(url).then(body => body.json()));
    
    //const response = await Promise.all(promises);

    //if(response){
    //    console.log(response)
    //}

    //await fetch(request.send(JSON.stringify(body)).then((resultado) => {
    //    console.log(resultado);
    //}));
        
    
}

// botão enviar, valida todos os campos exceto o selecionar foto, caso houver um campo vazio ele da uma msg de erro
button.addEventListener('click', function () {
    event.preventDefault();
   
    if(nome.value === "" || data.value === "" || endereco.value === "" || numero.value === "" || bairro.value === "" || cidade.value === "" || estado.value === "" ||
     cep.value === "" || apelido.value === "" || cpf.value === "" || rg.value === "" || imagem.value === ""){

        if (nome.value === "") {
            errorNome.innerHTML = "Nome deve ser informado";
            errorMessageNome.classList = "error";
        }
        if (data.value === "") {
            errorData.innerHTML = "Data de nascimento deve ser informado";
            errorMessageData.classList = "error2";
        }
        if (endereco.value === "") {
            errorEndereco.innerHTML = "Endereço deve ser informado";
            errorMessageEndereco.classList = "error";
        }
        if (numero.value === "") {
            errorNumero.innerHTML = "Número deve ser informado";
            errorMessageNumero.classList = "error";
        }
        if (bairro.value === "") {
            errorBairro.innerHTML = "Bairro deve ser informado";
            errorMessageBairro.classList = "error";
        }
        if (cidade.value === "") {
            errorCidade.innerHTML = "Cidade deve ser informado";
            errorMessageCidade.classList = "error";
        }
        if (estado.value === "") {
            errorEstado.innerHTML = "estado deve ser informado";
            errorMessageEstado.classList = "error";
        }
        if (cep.value === "") {
            errorCep.innerHTML = "CEP deve ser informado";
            errorMessageCep.classList = "error";
        }
        if (apelido.value === "") {
            errorApelido.innerHTML = "Apelido deve ser informado";
            errorMessageApelido.classList = "error";
        }
        if (cpf.value === "") {
            errorCpf.innerHTML = "CPF deve ser informado";
            errorMessageCpf.classList = "error";
        }
        if (rg.value === "") {
            errorRg.innerHTML = "RG deve ser informado";
            errorMessageRg.classList = "error";
        }
        if (imagem.value === ""){
            errorImagem.innerHTML = "Imagem deve ser selecionada";
            errorMessageImagem = "error";
        }
    }
    else{
        try {
            conteudoModel.style.display = "block"



            //request.onload = function(){
            //    console.log(this.responseText)
            //}
            //request.retu

        } catch (error) {
            console.log("erro" + error)
        }

    }
    
})

// função que é executada cada vez que uma tecla é pressionada para cima nele eu vejo se o campo que esta com uma msg de erro = "algum campo deve ser informado" 
// obteve um valor diferente de branco caso sim eu tiro a msg de erro
function busca() {

    if (errorNome.innerHTML != "" || errorMessageNome.classList.value === 'error') {
        if (nome.value != "") {
            errorMessageNome.classList = "";
            errorNome.innerHTML = "";
        }
    }
    if (errorData.innerHTML != "" || errorMessageData.classList == "error") {
        if (data.value != "") {
            errorMessageData.classList = "";
            errorData.innerHTML = "";
        }
    }
    if (errorEndereco.innerHTML != "" || errorMessageEndereco.classList == "error") {
        if (endereco.value != "") {
            errorMessageEndereco.classList = "";
            errorEndereco.innerHTML = "";
        }
    }
    if (errorNumero.innerHTML != "" || errorMessageNumero.classList == "error") {
        if (numero.value != "") {
            errorMessageNumero.classList = "";
            errorNumero.innerHTML = "";
        }
    }
    if (errorBairro.innerHTML != "" || errorMessageBairro.classList == "error") {
        if (bairro.value != "") {
            errorMessageBairro.classList = "";
            errorBairro.innerHTML = "";
        }
    }
    if (errorCidade.innerHTML != "" || errorMessageCidade.classList == "error") {
        if (cidade.value != "") {
            errorMessageCidade.classList = "";
            errorCidade.innerHTML = "";
        }
    }
    if (errorEstado.innerHTML != "" || errorMessageEstado.classList == "error") {
        if (estado.value != "") {
            errorMessageEstado.classList = "";
            errorEstado.innerHTML = "";
        }
    }
    if (errorCep.innerHTML != "" || errorMessageCep.classList == "error") {
        if (cep.value != "") {
            errorMessageCep.classList = "";
            errorCep.innerHTML = "";
        }
    }
    if (errorApelido.innerHTML != "" || errorMessageApelido.classList == "error") {
        if (apelido.value != "") {
            errorMessageApelido.classList = "";
            errorApelido.innerHTML = "";
        }
    }
    if (errorCpf.innerHTML != "" || errorMessageCpf.classList == "error") {
        if (cpf.value != "") {
            errorMessageCpf.classList = "";
            errorCpf.innerHTML = "";
        }
    }
    if (errorRg.innerHTML != "" || errorMessageRg.classList == "error") {
        if (rg.value != "") {
            errorMessageRg.classList = "";
            errorRg.innerHTML = "";
        }
    }
    if (errorEmail.innerHTML != "" || errorMessageEmail.classList == "error") {
        if (email.value != "") {
            errorMessageEmail.classList = "";
            errorEmail.innerHTML = "";
        }
    }
    if (errorSenha.innerHTML != "" || errorMessageSenha.classList == "error") {
        if (senha.value != "") {
            errorMessageSenha.classList = "";
            errorSenha.innerHTML = "";
        }
    }
    if (errorConfirmaSenha.innerHTML != "" || errorMessageConfirmaSenha.classList == "error") {
        if (confirmaSenha.value != "") {
            errorMessageConfirmaSenha.classList = "";
            errorConfirmaSenha.innerHTML = "";
        }
    }


}

function desImagem(){
    if (errorImagem.innerHTML != "" || errorMessageImagem.classList == "error") {
        if (imagem.value != "") {
            errorMessageImagem.classList = "";
            errorImagem.innerHTML = "";
        }
    }
}


btnModalCadastrar.addEventListener('click', function() {
    console.log(email.value);
    console.log(senha.value);
    console.log(confirmaSenha.value);

    if(email.value === '' || senha.value === '' || confirmaSenha === ''){
    
        if (email.value === ''){
            errorEmail.innerHTML = "Email Deve Ser Preenchido";
            errorMessageEmail.classList = "error";
        }
    
    
        if (senha.value === ''){
            errorSenha.innerHTML = "Senha Deve Ser Preenchido";
            errorMessageSenha.classList = "error";
        }
    
    
        if (confirmaSenha.value === ''){
            errorConfirmaSenha.innerHTML = "Confirmar Senha Deve Ser Preenchido";
            errorMessageConfirmaSenha.classList = "error";
        }
    }
    else if(senha.value != confirmaSenha.value){
        errorConfirmaSenha.innerHTML = "A senhas Não Coincidem ";
        errorMessageConfirmaSenha.classList = "error";
    }
    else{

        let url = "http://localhost:57388/api/values/postCadastro";

        body = {
            "Nome": nome.value,
            "DataNascimento": data.value,
            "Endereco": endereco.value,
            "Numero": numero.value,
            "Bairro": bairro.value,
            "Cidade": cidade.value,
            "Estado": estado.value,
            "Cep": cep.value,
            "Apelido": apelido.value,
            "CPF": cpf.value,
            "RG": rg.value,
            "Foto": imagem.value,
            "Email": email.value,
            "Senha": senha.value
        }

        Post(url, body);

    }
})