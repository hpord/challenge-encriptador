import { encriptar, desencriptar } from "./cripto.js";

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarMinusculas(text) {
  return true;
}

const botonEncriptar = document.querySelector(".encriptar");

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

  /*console.log(text);
   console.log(encriptar(text));
    asignarTextoElemento('.result', encriptar(text));*/
});
