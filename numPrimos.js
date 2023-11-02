import {
    toggleElementVisibility
} from './utils.js';

document.addEventListener("DOMContentLoaded", function () {
    const numPrimExercise = document.getElementById("containerNumPrimo")
    const botonNumPrim = document.getElementById("buttonShowNumPrim");

    botonNumPrim.addEventListener("click", function () {
        toggleElementVisibility(numPrimExercise)
    })

    const insertNum = document.getElementById("insertNum");
    const esNumeroPrimo = function (num) {
        if (num <= 1) {
            return false; // Los números menores o iguales a 1 no son primos
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; // Si es divisible por algún número diferente de 1 y sí mismo, no es primo
            }
        }
        return true;
    };

    insertNum.addEventListener("input", function () {
        const num = parseInt(insertNum.value, 10);
        const resultadoPrimo = document.getElementById("showResultado");
        const resultadoNoPrimo = document.getElementById("showResultadoNoPrimo");
        let okNumPrimo = document.getElementById("numeroPrimo")
        let noNumPrimo = document.getElementById("noNumeroPrimo")
        let showResultadoPrimo = false;
        let showResultadoNoPrimo = false;
        esNumeroPrimo(num)
        if (!isNaN(num)) {
            if (esNumeroPrimo(num)) {
                showResultadoPrimo = true;
                showResultadoNoPrimo = false;
                resultadoPrimo.style.display = "block"
                resultadoNoPrimo.style.display = "none"
                okNumPrimo.textContent = num

            } else {
                showResultadoPrimo = false;
                showResultadoNoPrimo = true;
                resultadoPrimo.style.display = "none"
                resultadoNoPrimo.style.display = "block"
                noNumPrimo.textContent = num
            }
        } else {
            resultadoPrimo.style.display = "none"
            resultadoNoPrimo.style.display = "none"
        }
    })


})