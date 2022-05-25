var arreglo = ["Arnold", "123"];
var Json = [
		{ nombre : "Arnold", pass : "123"},
		{ nombre : "Yisus", pass : "456"},
		{ nombre : "Brian", pass : "789"}
		];
const N1 = "Arnold";
const P1 = "123";

function login(){
	var nombre = document.getElementById("nombre").value;
	var pass = document.getElementById("pass").value;
	if(nombre == Json[1].nombre && pass == Json[1].pass){
		window.location.href = "log.html";
	}else{
		alert("Usuario o contraseña incorrectos");
	}
}