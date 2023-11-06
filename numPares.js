/* 1. **Ejercicio de bucles y estructuras de control**:
   - Crea un programa que muestre todos los números pares entre 1 y 100. */

import {
  toggleElementVisibility
} from './utils.js';

// script.js
document.addEventListener("DOMContentLoaded", function () {

  const h1 = document.querySelector("h1");
  let currentColor = "blue";

  h1.addEventListener("click", function () {
    if (currentColor === "blue") {
      h1.style.color = "red";
      currentColor = "red";
    } else {
      h1.style.color = "blue";
      currentColor = "blue";
    }
  });

  /* Filtramos los pares */

  const botonFiltrarPares = document.getElementById("botonFiltrar");
  const formPares = document.getElementById("formPares");
  botonFiltrarPares.addEventListener("click", function () {
    toggleElementVisibility(formPares)
  });

  let parMin = document.getElementById("parMin");
  let startArray;
  parMin.addEventListener("input", function () {
    startArray = parseInt(parMin.value, 10);
  });
  let parMax = document.getElementById("parMax");
  let finishArray;
  let resultado = document.getElementById("parResultado");
  let parArr = [];
  parMax.addEventListener("input", function () {
    finishArray = parseInt(parMax.value, 10);


    mostrarResultado(startArray, finishArray);

  });

  const mostrarResultado = (startArray, finishArray) => {
    parArr = [];
    if (startArray >= 0 && finishArray > startArray) {
      for (let i = startArray; i <= finishArray; i++) {
        if (i % 2 === 0) {
          parArr.push(i);
        }
      }
      resultado.textContent = parArr.join(", ");
    } else {
      resultado.textContent = "Los datos no son válidos";
    }
  };
});