var numero = 0;
function sub(){
    var nombre = document.getElementById('name').value;
    alert(nombre);
}
function color(){
    var body = document.getElementById('formulario');
    body.style.background = "blue";
}
function letras(){
    var textos = document.getElementsByTagName('li');
    textos[numero].style.color = "green";
    numero++
}
function titulos(){
    var titulo = document.getElementById('titulo');
    titulo.style.background = "red";
}
function titulos2(){
    var titulo = document.getElementById('titulo');
    titulo.style.background = "none";
}