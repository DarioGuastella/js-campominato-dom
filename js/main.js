// PROVA DIFFICOLTA
let difficoltà = document.getElementById("difficulty");
difficoltà.addEventListener('change', function () {
  console.log('Hai selezionato: ', difficoltà.value);
});

//Definisco container e pulsante di play

let grid = document.getElementById("container");
const playBtn = document.getElementById("myBtn");

//Evento al click del pulsante "play"

playBtn.addEventListener("click", function () {

  let numCelle = 0;

  //Cambio il numero di celle in base alla difficoltà selezionata.

  if (difficoltà.value == "Normale") {
    numCelle = 81;
    grid.innerHTML = "";
  } else if (difficoltà.value == "Difficile") {
    numCelle = 49;
    grid.innerHTML = "";
  } else {
    numCelle = 100;
    grid.innerHTML = "";
  }
  //Genero numero random compreso nel numero totali di celle.

  const bomb = numeroRandom(1, numCelle);
    console.log (`Cella con bomba: ${bomb}`);

  // Creo ogni cella una per una, richiamando la funzione, 
  // inserendo all'interno di ogni cella il numero dell'index.

  for (let i = 1; i <= numCelle; i++) {
    let cella = creaCella(i);
    grid.appendChild(cella);
    cella.innerHTML = i;
    if (numCelle == 81) {
      cella.classList.add("medium");
    } else if (numCelle == 49) {
      cella.classList.add("hard");

    }
  }
});
//Fine evento al click

//////////////////////////FUNZIONI////////////////////////////////////
function creaCella(numero) {
  const cella = document.createElement("div");
  cella.classList.add("square");
  // Evento per ogni cella
  cella.addEventListener("click", function () {
    console.log("Cella selezionata", numero);
    cella.classList.add("highlight");
  });

  return cella;

}

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}