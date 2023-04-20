// inputs

const inputNombre = document.querySelector("#inputNombre");
const largo = parseFloat(document.querySelector("#inputLargo").value);
const ancho = parseFloat(document.querySelector("#inputAncho").value);
const inputMoldura = document.querySelector("#select-moldura");
const inputVidrio = document.querySelector("#inputVidrio");
const btnCalcular = document.querySelector("#btnCalcular");
const fragment = document.createDocumentFragment();
const contenedor = document.querySelector("#contenedor");

// variantes de molduras

const molduras = [
  { nombre: "chica", precio: 190, codigo: "30", id: 1 },
  { nombre: "mediana", precio: 230, codigo: "30G", id: 2 },
  { nombre: "caja", precio: 230, codigo: "230", id: 3 },
  { nombre: "grande", precio: 440, codigo: "270", id: 4 }
];

for (const moldura of molduras) {
  const option = document.createElement("option");
  option.value = parseFloat(moldura.precio);
  option.innerText = moldura.nombre;
  fragment.appendChild(option);
}
inputMoldura.appendChild(fragment);

let costoVidrio = 0;
let perimetro = 0;
let costoMoldura = 0;
let precioRedondeado = 0;

// cálculos

function calc(largo, ancho) {

const costoVidrio = parseFloat(ancho * largo / 5.6)
const perimetro = parseFloat(2 * ancho + 2 * largo)
let costoMoldura;


if (perimetro < 244) {
  costoMoldura = inputMoldura.value
} else if (perimetro >= 244 && perimetro <= 488) {
  costoMoldura = (2 * inputMoldura.value);
} else
  costoMoldura = 3 * inputMoldura.value;

let costoEstimado = costoVidrio + costoMoldura+100
let precioFinal = parseInt(2 * costoEstimado)
let precioRedondeado = Math.ceil(precioFinal / 50) * 50;

}


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

btnCalcular.addEventListener("click", () => {
  console.log(largo, ancho, inputMoldura);
})
// botón para crear marco nuevo

/* btnCalcular.addEventListener("click", () => {
  
  console.log(largo, ancho, inputMoldura.value);
  calc()

  const newMarco = new marco(
    inputNombre.value,
    largo.value,
    ancho.value,
    inputMoldura.nombre,
    costoVidrio,
    perimetro,
    precioRedondeado,
  );

  console.log(newMarco);
  productos.push(newMarco);

  console.log(marcos);
  console.log(inputMoldura.value);

}); */