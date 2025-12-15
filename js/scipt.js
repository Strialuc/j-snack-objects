/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */


const zucchine = [];


//funzione per peso e lunghezza random delle zucchine

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ciclo for per inserire pesi e lunghezze delle zucchine

for (let i = 0; i < 10; i++) {
  const zucchina = {
    varieta: (i),
    peso: numeroRandom(10, 10),    
    lunghezza: numeroRandom(10, 25) 
  };

  zucchine.push(zucchina);
}

console.log(zucchine);


// ciclo for per calcolo del peso

let pesoTotale = 0;

for (let i = 0; i < zucchine.length; i++) {
  pesoTotale += zucchine[i].peso;
}

console.log("Peso totale:", pesoTotale, "grammi");