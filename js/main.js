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
  advertenciaParrafo.style.fontSize = "0.9rem";
  const text = document.getElementById("entrada-texto").value;
  if (text.trim() === "" || text.trim() === undefined) {
    document.querySelector(".contenedor-textarea-salida").style.display =
      "none";
    document.querySelector(".contenedor-persona").style.display = "flex";
    return;
  }
  if (!verificarMinusculas(text)) {
    advertenciaParrafo.style.color = "#FF3500";
    advertenciaParrafo.style.fontSize = "1.2rem";
    return;
  }
  document.querySelector(".contenedor-persona").style.display = "none";
  document.querySelector(".contenedor-textarea-salida").style.display = "flex";
  asignarTextoElemento(".salida-texto", encriptar(text));
});

botonDesencriptar.addEventListener("click", function () {
  let advertenciaParrafo = document.querySelector(".advertencia-parrafo");
  advertenciaParrafo.style.color = "#FF0000";
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

// Función para cambiar el tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    /*document.querySelector(".logo-claro").style.display = "none";
    document.querySelector(".logo-oscuro").style.display = "flex";*/
  }

  /*else {
    document.querySelector(".logo-oscuro").style.display = "none";
    document.querySelector(".logo-claro").style.display = "flex";
  }*/

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}

// Función para establecer el tema inicial
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

// Añadir evento al botón
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Establecer el tema inicial cuando se carga la página
setInitialTheme();
