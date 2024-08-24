import { encriptar, desencriptar } from './cripto.js';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarMinusculas(text) {
    return true;
}

const botonEncriptar = document.getElementById('encriptar');

botonEncriptar.addEventListener('click', function() {
    const text = document.getElementById('textField').value;
    /*if (!verificarMinusculas(text)) {
        alert("Solo minusculas");
        return;
    }*/
   console.log(text);
   console.log(encriptar(text));
    asignarTextoElemento('.result', encriptar(text));

});