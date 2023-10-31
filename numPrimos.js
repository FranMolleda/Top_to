document.addEventListener("DOMContentLoaded", function () {
    const numPrimExercise = document.getElementById("containerNumPrimo")
    let showNumPrimExercise = false;

    const botonNumPrim = document.getElementById("buttonShowNumPrim");

    botonNumPrim.addEventListener("click", function () {
        if (!showNumPrimExercise) {
            numPrimExercise.style.display = "block";

        } else {
            numPrimExercise.style.display = "none";
        }
        showNumPrimExercise = !showNumPrimExercise;
    })

    const insertNum = document.getElementById("insertNum");
    let foo = false

    const numPrimo = function (num) {
        if (num <= 1) {
            return foo = false; // Los números menores o iguales a 1 no son primos
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return foo = false; // Si es divisible por algún número diferente de 1 y sí mismo, no es primo
            }
        }
        return foo = true

    }
    insertNum.addEventListener("input", function () {
        const num = parseInt(insertNum.value, 10);
        const resultado = document.getElementById("showResultado");
        let okNumPrimo = document.getElementById("numeroPrimo")
        let showResultado = false;
        numPrimo(num)
        if (!isNaN(num)) {
            if (foo) {
                showResultado = true;
                resultado.style.display = "block"
                okNumPrimo.textContent = num

            } else if (!foo || insertNum.value === NaN) {
                resultado.style.display = "none"

            }
        } else {
            resultado.style.display = "none"
        }
    })


})