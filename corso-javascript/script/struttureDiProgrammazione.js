/* SELEZIONE [if] */
var x = 7;

if (x < 10) {
    // Blocco eseguito se la condizione è vera
} else {
    // Blocco eseguito se la condizione è falsa
}

/* ITERAZIONE [while, for, do-while, forEach] */
var i = 0;

while (i < x) {
    // Blocco da ripetere finché la condizione è vera
    console.log(i);
    i++;
}

do {
    // Blocco da ripetere almeno una volta e poi finché la condizione è vera
    console.log(i);
    i++;
} while (i < x);

for (let i = 0; i < 10; i++) { // Si può anche scrivere for (i = 0; i < 10; i++) 
    // Blocco da ripetere un numero specifico di volte
    console.log(i);
}

var colori = ['rosso', 'verde', 'blu'];

for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

/**
 * In JavaScript è possibile utilizzare il metodo forEach per iterare su un array in modo più semplice e leggibile:
 * - la variabile 'colore' rappresenta l'elemento corrente dell'array durante ogni iterazione
 * - il metodo forEach esegue la funzione passata come argomento per ogni elemento dell'array, senza bisogno di gestire manualmente l'indice
 * - è importante notare che forEach non supporta l'uso di break o continue, quindi se si ha bisogno di interrompere l'iterazione o saltare un elemento, è necessario utilizzare un ciclo for tradizionale  
 * - => espressione lambda, funzione anonima, arrow function
 * - colore => { ... } è uguale a function(colore) { ... }:
 *   - colore è il parametro della funzione, rappresenta l'elemento corrente dell'array durante ogni iterazione
 *   - { ... } è il corpo della funzione, contiene il codice da eseguire per ogni elemento dell'array
 *   - => espressione lambda, funzione anonima, arrow function --> la utilizzo al posto di function per scrivere funzioni in modo più conciso e leggibile
*/
colori.forEach(function(colore) {
    // Blocco di codice da ripetere per ogni elemento dell'array
    console.log(colore);
});

colori.forEach(colore => {
    //Blocco di codice da ripetere per ogni elemento dell'array
    console.log(colore);
});
