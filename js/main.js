// PROVA DIFFICOLTA
let difficoltà = document.getElementById("difficulty");
difficoltà.addEventListener('change', function () {
  console.log('Hai selezionato: ', difficoltà.value);
});

//Definisco container e pulsante di play

let grid = document.getElementById("container");
let score = document.getElementById("selectedCells")
const playBtn = document.getElementById("myBtn");
const gameover = document.getElementById("gameover");
//Evento al click del pulsante "play"
let numCelle = 0;
playBtn.addEventListener("click", function () {
  clicks = 0;

  

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
  //Genero 16 numeri random compresi fra i numeri totali di celle.

let bombsCells = [];
while(bombsCells.length < 16){
    let randomNumber = numeroRandom(1, numCelle);
    if(bombsCells.indexOf(randomNumber) === -1) {  //aggiunge il numero solo se non è presente nell'array
      bombsCells.push(randomNumber);
    }
  }
console.log(`Celle con le bombe: ${bombsCells}`);

  // Creo ogni cella una per una, richiamando la funzione, 
  // inserendo all'interno di ogni cella il numero dell'index.

  for (let i = 1; i <= numCelle; i++) {
    let cella = creaCella(i, bombsCells);
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
let clicks = 0;


let celleRimanenti;
//////////////////////////FUNZIONI////////////////////////////////////
function creaCella(numero, bombsCells) {
  const cella = document.createElement("div");
  cella.classList.add("square");
  // Evento per ogni cella
  cella.addEventListener("click", function () {
    celleRimanenti = numCelle - clicks -16;
    console.log ("Celle rimanenti:", celleRimanenti);
    
    //VITTORIA
    if (celleRimanenti==1) {
      grid.innerHTML = `HAI VINTO!!! HIGHSCORE: ${clicks}`;
      console.log(`HAI VINTO!!! HIGHSCORE: ${clicks}`);

    }

    
    
    if(bombsCells.includes(numero)) {
      console.log("Hai perso");
      cella.classList.add("bomb");
      grid.innerHTML = '<img id="gameover" src="explosion-explosion-meme.gif" alt="">';
      score.innerHTML = `Hai beccato una bomba! HIGHSCORE: ${clicks} caselle`;
    } else if (!cella.classList.contains("highlight")){
      cella.classList.add("highlight");
      console.log("Cella selezionata", numero);
      clicks++;
      score.innerHTML = `Celle selezionate: ${clicks}`;
    }
  });

  return cella;

}

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}