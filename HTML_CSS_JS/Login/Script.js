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

//console.log(msgSenha);
cadastrar.addEventListener("click", function(){
    window.location.href="../Cadastro/Cadastro.html";
})

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

function Post(url){
    let request = new XMLHttpRequest();
    

    
    request.open("GET",url);
    request.setRequestHeader("Content-Type", "application/json");;
    request.send()
    
    request.onload = function(){
        //console.log(request.responseText)
        //console.log(request.status);
        
        alert(request.responseText);
        /*if(request.status === 200){
            console.log("entrou");
            return "Logado Com Sucesso";
        }
        else{
            console.log(typeof request.responseText)
            return "ERRO!!! Status: "+request.status + " Texto: "+request.responseText;
        }*/
        //console.log(request.responseText);
    }
    
    request.onerror = function() {
        return "ERRO!!! Status" + request.status +" Texto "+ request.responseText
    }
}