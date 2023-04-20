//ingresar medidas

/*   while (isNaN(largo)) {
    largo = parseFloat(prompt("Por favor, ingrese el largo en centímetros:", "40.5"));
  }

  while (isNaN(ancho)) {
    ancho = parseFloat(prompt("Ingrese el ancho en centímetros:", "90.3"));
  }
 */


// imputs

const form = document.querySelector("form");

const inputNombre = document.querySelector("#inputNombre"),
  largo = parseFloat(document.getElementById("inputLargo")),
  ancho = parseFloat(document.getElementById("inputAncho")),
  inputMoldura = document.getElementById("#inputMoldura"),
  inputVidrio = document.querySelector("#inputVidrio"),
  btnCalcular = document.querySelector("#btnCalcular")
const fragment = document.createDocumentFragment();

contenedor = document.querySelector("#contenedor");

console.log(largo, ancho);

// variantes de molduras

const molduras = [
  { nombre: "chica", precio: 190, codigo: "30", id: 1 },
  { nombre: "mediana", precio: 230, codigo: "30G", id: 2 },
  { nombre: "caja", precio: 230, codigo: "230", id: 3 },
  { nombre: "grande", precio: 440, codigo: "270", id: 4 }
];

for (const moldura of molduras) {
  const option = document.createElement("option");
  option.value = moldura.nombre;
  option.innerText = moldura.nombre;
  fragment.appendChild(option);
}

// cálculos

const costoVidrio = parseFloat(ancho * largo / 6.4)
const perimetro = parseFloat(2 * ancho + 2 * largo)
const costoOtros = 100
let costoMoldura;
const precioMoldura = (inputMoldura.precio);


if (perimetro < 244) {
  costoMoldura = precioMoldura
} else if (perimetro >= 244 && perimetro <= 488) {
  costoMoldura = (2 * precioMoldura);
} else
  costoMoldura = 3 * precioMoldura;

let costoEstimado = costoVidrio + costoMoldura + costoOtros
let precioFinal = parseInt(2 * costoEstimado)

let precioRedondeado = Math.ceil(precioFinal / 50) * 50;






/* console.log(
  `medidas: ${largo}x${ancho} cm.\n 
  costo del vidrio: ${parseInt(costoVidrio)}\n 
  perimetro: ${perimetro}\n  
  precio final: ${precioRedondeado}`
);
alert(`El precio para tu marco de ${largo} x ${ancho} es de ${precioRedondeado} pesos`)
 */

// array de marcos

const marcos = []

// objeto constructor de marcos

class marco {
  constructor(nombre, largo, ancho, molduraElegida, costoVidrio, perimetro, precioRedondeado) {
    this.nombre = nombre,
      this.largo = largo,
      this.ancho = ancho,
      this.molduraElegida = molduraElegida,
      this.costoVidrio = costoVidrio,
      this.perimetro = perimetro,
      this.precioRedondeado = precioRedondeado
  }
}

// botón para crear marco nuevo

btnCalcular.addEventListener("click", () => {
  const newMarco = new marco(
    inputNombre.value,
    inputLargo.value,
    inputAncho.value,
    inputMoldura.value,
    costoVidrio,
    perimetro,
    precioRedondeado,
  );

  console.log(newMarco);
  productos.push(newMarco);

  console.log(marcos);
  console.log(imputMoldura.value);

});




/* let repetir = prompt("¿Desea presupuestar otro marco? (si/no)");

if (repetir.toLowerCase() === "si") {
  presupuesto();
} else {
  alert("¡Hasta luego!");
} */