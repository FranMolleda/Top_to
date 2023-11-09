/* **Ejercicio de promesas**:
   - Escribe una función que realice una solicitud AJAX a una API y devuelva los datos en forma de promesa. */

import {
   toggleElementVisibility
} from "./utils.js"

document.addEventListener("DOMContentLoaded", function () {
   const botonPromesa = document.getElementById("promesasButton")
   const datosPromesas = document.getElementById("dataArticle")
   let titulo = document.getElementById("titleArticle")
   let description = document.getElementById("DescriptionArticle")
   const imagen = document.getElementById("imageArticle")
   let producto = {}
   const getRandomProduct = (num) => {
      return Math.floor(Math.random() * num)
   }

   botonPromesa.addEventListener("click", function () {
      const numArticle = getRandomProduct(20);
      numArticle &&
         fetch(`https://fakestoreapi.com/products/${numArticle}`)
         .then(res => res.json())
         .then(json => {
            producto = json
            titulo.textContent = `Título: ${producto.title}`
            description.textContent = `descripción: ${producto.description}`
            imagen.src = producto.image;
            imagen.alt = producto.title
            toggleElementVisibility(datosPromesas)
         })
         .catch(error => console.error(error))

   })
})