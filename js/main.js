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
const botonCopiar = document.querySelector(".copiar");

botonEncriptar.addEventListener("click", function () {
  let advertenciaParrafo = document.querySelector(".advertencia-parrafo");
  advertenciaParrafo.style.color = "#495057";
  advertenciaParrafo.style.fontSize = "0.75rem";
  const text = document.getElementById("entrada-texto").value;
  if (text.trim() === "" || text.trim() === undefined) {
    document.querySelector(".contenedor-textarea-salida").style.display =
      "none";
    document.querySelector(".contenedor-persona").style.display = "flex";
    return;
  }
  if (!verificarMinusculas(text)) {
    advertenciaParrafo.style.color = "#FF0000";
    advertenciaParrafo.style.fontSize = "1rem";
    return;
  }
  document.querySelector(".contenedor-persona").style.display = "none";
  document.querySelector(".contenedor-textarea-salida").style.display = "flex";
  asignarTextoElemento(".salida-texto", encriptar(text));
});

botonDesencriptar.addEventListener("click", function () {
  let advertenciaParrafo = document.querySelector(".advertencia-parrafo");
  advertenciaParrafo.style.color = "#495057";
  advertenciaParrafo.style.fontSize = "0.75rem";
  const text = document.getElementById("entrada-texto").value;
  if (text.trim() === "" || text.trim() === undefined) {
    document.querySelector(".contenedor-textarea-salida").style.display =
      "none";
    document.querySelector(".contenedor-persona").style.display = "flex";
    return;
  }
  if (!verificarMinusculas(text)) {
    advertenciaParrafo.style.color = "#FF0000";
    advertenciaParrafo.style.fontSize = "1rem";
    return;
  }
  document.querySelector(".contenedor-persona").style.display = "none";
  document.querySelector(".contenedor-textarea-salida").style.display = "flex";
  asignarTextoElemento(".salida-texto", desencriptar(text));
});

botonCopiar.addEventListener("click", function () {
  const textarea = document.getElementById("salida-texto");
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(textarea.value)
    .then(function () {})
    .catch(function (err) {
      console.error("Error al copiar el texto: ", err);
    });
});
