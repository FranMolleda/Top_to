import {
    toggleElementVisibility
} from "./utils.js"

document.addEventListener("DOMContentLoaded", function () {
    const numArr = document.getElementById("mayorConteiner")
    const showMayorNum = document.getElementById("mayorBoton")
    const mayorContainer = document.getElementById("showMayor")
    const numeros = document.getElementById("numeros")

    showMayorNum.addEventListener("click", function () {
        toggleElementVisibility(mayorContainer)
    })

    numeros.addEventListener("input", function () {

        const numerosInput = numeros.value;
        const numerosValidos = /^(\d+(,\d+)*)?$/.test(numerosInput);
        if (!numerosValidos) {
            console.log("No es un número");
        }
        console.log(numerosInput);
        console.log(numerosValidos);
    })


})