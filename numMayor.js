import {
    toggleElementVisibility
} from "./utils.js"

document.addEventListener("DOMContentLoaded", function () {
    const numArr = document.getElementById("mayorConteiner")
    const showMayorNum = document.getElementById("mayorBoton")
    const mayorContainer = document.getElementById("showMayor")
    const numeros = document.getElementById("numeros")
    const botonMayor = document.getElementById("buttonBigestNum")

    showMayorNum.addEventListener("click", function () {
        toggleElementVisibility(mayorContainer)
    })


    botonMayor.addEventListener("click", function () {

        const numerosInput = numeros.value;
        const ArrayNum = numerosInput.replace(/\s/g, '').split(',');
        const arrayParsed = ArrayNum.map(num => parseInt(num)).filter(num => isNaN(num) === false);
        const numMayor = Math.max(...arrayParsed)
        let resultado = document.getElementById("mayorResultado")
        if (numMayor) {
            resultado.style.display = "block"
            resultado.textContent = `${numMayor} Es el número mayor`
        }
        if (!numMayor || numMayor === -Infinity) {
            resultado.style.display = "block"
            resultado.textContent = `Introduzca al menos un número`
        }
        console.log(numMayor);


    })


})