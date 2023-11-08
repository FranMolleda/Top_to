/* 5. **Ejercicio de eventos y manejo de eventos**:
   - Crea un programa que registre eventos de clic en un botón y cuente cuántas veces se ha hecho clic en ese botón.
 */

document.addEventListener("DOMContentLoaded", function () {
    const botonClic = document.getElementById("botonClicks");
    const resultadoClicks = document.getElementById("resultadoClicks");
    const reseteoClicks = document.getElementById("resetCount")
    let count = 0;

    botonClic.addEventListener("click", function () {
        count++;
        if (count > 0) {
            resultadoClicks.style.display = "block";
            resultadoClicks.textContent = count
            reseteoClicks.style.display = "inline";
        }
    })

    reseteoClicks.addEventListener("click", function () {
        count = 0
        resultadoClicks.style.display = "none";
        reseteoClicks.style.display = "none";
    })

})