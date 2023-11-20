/* 7. **Ejercicio de programación asincrónica**:
   - Crea una función que simule la ejecución asincrónica de varias tareas y asegúrate de que se completen en el orden correcto.
 */

import { toggleElementVisibility } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  const asyncButton = document.getElementById("asyncButton");
  const getResult = document.getElementById("resultAsyncContainer");
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let primerParametro = "";
  let segundoParametro = "";
  let tercerParametro = "";
  asyncButton.addEventListener("click", async function () {
    toggleElementVisibility(getResult);
    if (primerParametro !== "" && segundoParametro !== "") {
      tercerParametro = "Jerez";
      third.textContent = tercerParametro;
    }

    setTimeout(() => {
      primerParametro = "Francisco";
      first.textContent = primerParametro;
    }, "2000");
    setTimeout(() => {
      segundoParametro = "Molleda";
      second.textContent = segundoParametro;
    }, "3000");
  });
});

function simulateAsyncTasks() {
  return new Promise((resolve) => {
    // Tarea 1: Simulamos una tarea que tarda 2 segundos en completarse
    setTimeout(() => {
      console.log("Tarea 1 completada");
      resolve(1); // Resolvemos la promesa con el resultado de la tarea 1
    }, 2000);
  })
    .then((result1) => {
      // Tarea 2: Simulamos otra tarea que depende del resultado de la tarea 1
      console.log(
        "Tarea 2 completada con el resultado de la Tarea 1:",
        result1
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Tarea 3 completada");
          resolve(2); // Resolvemos la promesa con el resultado de la tarea 2
        }, 1000);
      });
    })
    .then((result2) => {
      // Tarea 3: Simulamos otra tarea que depende del resultado de la tarea 2
      console.log(
        "Tarea 3 completada con el resultado de la Tarea 2:",
        result2
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Todas las tareas completadas");
          resolve(3); // Resolvemos la promesa con el resultado final
        }, 1500);
      });
    });
}

// Uso de la función
async function executeAsyncTasks() {
  try {
    const finalResult = await simulateAsyncTasks();
    console.log("Resultado final:", finalResult);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamar a la función para ejecutar las tareas asincrónicas
executeAsyncTasks();
