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
//PROCEDIMIENTO LOGEO SENCILLO
var Json = [
		{ nombre : "Arnold", pass : "123"},
		{ nombre : "Yisus", pass : "456"},
		{ nombre : "Brian", pass : "789"}
		];
        

    function login(){
        var nombre = document.getElementById("nombre").value;
        var pass = document.getElementById("pass").value;
    for (let i = 0; i < Json.length; i++){
            if(nombre == Json[i].nombre && pass == Json[i].pass){
                document.getElementById("Central").innerHTML="";
                ID = i+1;
                let div = document.getElementById("Central");
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let btn = document.createElement("button");
                img.src = "./hatsuneMikuKawaii.png"
                h2.innerHTML = "¡Bienvenido "+nombre+" !" + " Has ingresado correctamente. Tu ID es: " + ID;
                btn.addEventListener("click",()=> home(),false);
                btn.innerHTML = "Regresar";
                div.appendChild(h2);
                div.appendChild(img);
                div.appendChild(btn);
                b = true;
            }
    }
    if (b != true) {
        alert("ERROR: Credenciales incorrectas");
    }
}
function home(){
    setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    
}