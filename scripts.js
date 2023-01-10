function redirecionar(){    
    var candidato = document.getElementById("candidato").value
    alert(candidato+", seu pedido esta sendo processado, aguarde!");    
    window.location="conteplado.html";
    const name = document.getElementById("candidato")
    sessionStorage.setItem('name',name.value)    
}
    addEventListener("load",function(){
    const info = sessionStorage.getItem('name')
    let conteplado = document.getElementById("nomec")
    conteplado.innerText ="Parabéns " + info   
})




