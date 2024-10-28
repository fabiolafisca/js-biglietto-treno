/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

/* Prezzo del biglietto */
// Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const chilometri = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
const etàPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));


// Il prezzo del biglietto in base ai km.
const prezzoAlKm = 0.21;
constprezzoBase = chilometri * prezzoAlKm;

// Sconto del 20% per i minorenni.
if (etaPasseggero < 18) {
    prezzoBase *= 0.8; // Sconto del 20%
}

// Sconto del 40% per gli over 65.
else if (etaPasseggero > 65) {
    prezzoBase *= 0.6; // Sconto del 40%
}

// Output del prezzo finale con due decimali.
let prezzoFinale = prezzoBase.toFixed(2);

// Prezzo finale in forma umana.
console.log(`Il prezzo totale del biglietto è: €${prezzoFinale}`);










