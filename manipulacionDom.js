/* 3. **Ejercicio de manipulación del DOM**:
   - Crea un programa que permita al usuario ingresar texto en un campo de entrada y luego mostrar ese texto en un párrafo en la página después de hacer clic en un botón. */

import {
    toggleElementVisibility
} from "./utils.js"

document.addEventListener("DOMContentLoaded", function () {
    const buttonDomManipulation = document.getElementById("InserShowtText")
    const domManipulation = document.getElementById("insertText")
    const inputText = document.getElementById("inputManipulation")
    const showTextButton = document.getElementById("showText")
    const insertText = document.getElementById("textToShow")
    const showParagraph = document.getElementById("showParagraphText")

    buttonDomManipulation.addEventListener("click", function () {
        toggleElementVisibility(domManipulation)
    })
    let text

    showTextButton.addEventListener("click", function () {
        text = inputText.value
        insertText.textContent = text

        if (text) {
            showParagraph.style.display = "block"
        } else {
            showParagraph.style.display = "none"
        }
    })



})