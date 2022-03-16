console.log(1)

const cadastrar = document.querySelector("#btnCadastrar");
const email = document.querySelector("#email");
const Entrar = document.querySelector("#btnEntrar");
const senha = document.querySelector("#password");
//msg erro
const inputEmail = document.querySelector(".inputEmail");
const msgEmail = document.querySelector("#msg-email");
const inputSenha = document.querySelector(".inputSenha");
const msgSenha = document.querySelector("#msg-senha")

// Botão Cadastrar te redireciona para a tela de cadastro 
cadastrar.addEventListener("click", function(){
    window.location.href="../Cadastro/Cadastro.html";
})
// botão Entrar caso as validações sejam sanadas eu faço a request para api e la faço minhas validações 
// que são retornadas e mostrar a partir da função Post
Entrar.addEventListener("click", function(){

    if(email.value === "" || senha.value === ""){
        if(email.value === ""){
            inputEmail.classList = "error";
            msgEmail.innerHTML = "Email Deve Ser Preenchido";
        }
        if(senha.value === ""){
            inputSenha.classList = "error";
            msgSenha.innerHTML = "Senha Deve Ser Preenchida"
        }
    }else{
        let url = "http://localhost:57388/api/values/GetLogin?email="+email.value+"&senha="+senha.value;

        
       Post(url);

    }
})
// caso houver msg com erro ao levantar uma tecla no campo eu retiro a msg de erro de erro       
function Busca(){
    
    if(email.value != ""){
        inputEmail.classList = "";
        msgEmail.innerHTML = "";
    }
    if(senha.value != ""){
        inputSenha.classList = "";
        msgSenha.innerHTML = ""
    }
}
//faço a request para a api passando email e senha 
function Post(url){
    let request = new XMLHttpRequest();
    

    
    request.open("GET",url);
    request.setRequestHeader("Content-Type", "application/json");;
    request.send()
    
    request.onload = function(){
        alert(request.responseText);
    }
    
    request.onerror = function() {
        return "ERRO!!! Status" + request.status +" Texto "+ request.responseText
    }
}