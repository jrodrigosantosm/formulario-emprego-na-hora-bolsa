var candidato = document.getElementById("candidato").ariaValueMax; 
var nome = localStorage.getItem(candidato)
var div = document.getElementById("divResultado")

function redirecionar(){    
    alert("Seu pedido esta sendo processado ");    
    window.location="conteplado.html";
    div.innerText(nome)    
}



