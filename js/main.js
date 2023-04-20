// inputs

const inputNombre = document.querySelector("#inputNombre"),
  largo = parseFloat(document.querySelector("#inputLargo").value),
  ancho = parseFloat(document.querySelector("#inputAncho").value),
  inputMoldura = document.querySelector("#select-moldura"),
  inputVidrio = document.querySelector("#inputVidrio"),
  btnCalcular = document.querySelector("#btnCalcular");
const fragment = document.createDocumentFragment();

contenedor = document.querySelector("#contenedor");


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

// cálculos

function calc(largo, ancho) {

const costoVidrio = parseFloat(ancho * largo / 5.6)
const perimetro = parseFloat(2 * ancho + 2 * largo)
const costoOtros = 100
let costoMoldura;


if (perimetro < 244) {
  costoMoldura = moldura.precio
} else if (perimetro >= 244 && perimetro <= 488) {
  costoMoldura = (2 * moldura.precio);
} else
  costoMoldura = 3 * precioMoldura;

let costoEstimado = costoVidrio + costoMoldura + costoOtros
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

// botón para crear marco nuevo

btnCalcular.addEventListener("click", () => {
  
  calc()

  const newMarco = new marco(
    inputNombre.value,
    inputLargo.value,
    inputAncho.value,
    inputMoldura.nombre,
    costoVidrio,
    perimetro,
    precioRedondeado,
  );

  console.log(newMarco);
  productos.push(newMarco);

  console.log(marcos);
  console.log(inputMoldura.value);

});