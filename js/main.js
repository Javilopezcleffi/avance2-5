
// imputs

const form = document.querySelector("form");

const inputNombre = document.querySelector("#inputNombre"),
inputLargo = document.querySelector("#inputLargo"),
inputAncho = document.querySelector("#inputAncho"),
inputMoldura = document.querySelector("#inputMoldura"),
inputVidrio = document.querySelector("#inputVidrio"),
btnCalcular = document.querySelector("#btnCalcular")

contenedor = document.querySelector("#contenedor");


let nombre = inputNombre
console.log(nombre)



function presupuesto(largo, ancho) {

  //ingresar medidas

  while (isNaN(largo)) {
    // largo = parseFloat(prompt("Por favor, ingrese el largo en centímetros:", "40.5"));
  }

  while (isNaN(ancho)) {
    // ancho = parseFloat(prompt("Ingrese el ancho en centímetros:", "90.3"));
  }





  // variantes de molduras

  const molduras = [
    { nombre: "chica", precio: 190, codigo: "30", id: 1 },
    { nombre: "mediana", precio: 230, codigo: "30G", id: 2 },
    { nombre: "caja", precio: 230, codigo: "230", id: 3 },
    { nombre: "grande", precio: 440, codigo: "270", id: 4 }
  ];

  //elegir moldura

  const elegirMoldura = parseInt(prompt(`selecciona una moldura entre el 1 y el ${molduras.length}:`));

  let molduraElegida;

  if (elegirMoldura > 0 && elegirMoldura <= molduras.length) {
    molduraElegida = molduras.find(m => m.id === elegirMoldura);

  } else {

    return;
  }


  const costoVidrio = parseFloat(ancho * largo / 6.4)
  const perimetro = parseFloat(2 * ancho + 2 * largo)
  const costoOtros = 100
  let costoMoldura;
  const precioMoldura = (molduraElegida.precio);



  if (perimetro < 244) {
    costoMoldura = precioMoldura
  } else if (perimetro >= 244 && perimetro <= 488) {
    costoMoldura = (2 * precioMoldura);
  } else
    costoMoldura = 3 * precioMoldura;

  let costoEstimado = costoVidrio + costoMoldura + costoOtros
  let precioFinal = parseInt(2 * costoEstimado)

  let precioRedondeado = Math.ceil(precioFinal / 50) * 50;


  console.log(molduraElegida);
  console.log(
    `medidas: ${largo}x${ancho} cm.\n 
  costo del vidrio: ${parseInt(costoVidrio)}\n 
  perimetro: ${perimetro}\n  
  precio final: ${precioRedondeado}`
  );


  alert(`El precio para tu marco de ${largo} x ${ancho} es de ${precioRedondeado} pesos`)

}

presupuesto()

let repetir = prompt("¿Desea presupuestar otro marco? (si/no)");

if (repetir.toLowerCase() === "si") {
  presupuesto();
} else {
  alert("¡Hasta luego!");
}
