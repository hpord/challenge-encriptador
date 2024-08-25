import { encriptar, desencriptar } from "./cripto.js";

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarMinusculas(text) {
  return /^[a-z\s]+$/.test(text);
}

const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");

botonEncriptar.addEventListener("click", function () {
  let advertenciaParrafo = document.querySelector(".advertencia-parrafo");
  advertenciaParrafo.style.color = "#495057";
  advertenciaParrafo.style.fontSize = "0.75rem";
  const text = document.getElementById("entrada-texto").value;
  if (!verificarMinusculas(text)) {
    advertenciaParrafo.style.color = "#FF0000";
    advertenciaParrafo.style.fontSize = "1rem";
    return;
  }
  console.log(encriptar(text));
  /*asignarTextoElemento('.result', encriptar(text));*/
});

botonDesencriptar.addEventListener("click", function () {
  let advertenciaParrafo = document.querySelector(".advertencia-parrafo");
  advertenciaParrafo.style.color = "#495057";
  advertenciaParrafo.style.fontSize = "0.75rem";
  const text = document.getElementById("entrada-texto").value;
  if (!verificarMinusculas(text)) {
    advertenciaParrafo.style.color = "#FF0000";
    advertenciaParrafo.style.fontSize = "1rem";
    return;
  }
  console.log(desencriptar(text));
  /*asignarTextoElemento('.result', encriptar(text));*/
});
