// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 55, 20]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

// prezzo totale del carrello
let totaleCarrello = 0;
for (const ITERATOR of prices) {
    totaleCarrello += ITERATOR;
}
console.log(`TOTALE CARRELLO -> ${totaleCarrello}`);
// se l'utente è ambassador, sconto 30% sul carrello
if (utenteCheEffettuaLAcquisto.isAmbassador) totaleCarrello -= totaleCarrello * 0.3;
console.log(`TOTALE CARRELLO SCONTATO DEL 30% -> ${parseFloat(totaleCarrello.toFixed(2))}`);
/*
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.
*/
totaleCarrello < 100 ? totaleCarrello += shippingCost : totaleCarrello = totaleCarrello;
console.log(`TOTALE CARRELLO CONTEGGIATA LA SPEDIZIONE -> ${parseFloat(totaleCarrello.toFixed(2))}`);

/*
In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/
let utenti = [];
utenti.push(paul, amy, marco);
for (const ITERATOR of utenti) {
    console.log(`${ITERATOR.name} ${ITERATOR.lastName} ${ITERATOR.isAmbassador ? 'è un Ambassador.' : 'non è un Ambassador.'} `)
}
let ambassador = [];
for (const ITERATOR of utenti) {
    if (ITERATOR.isAmbassador) ambassador.push(ITERATOR);
}
console.log("UTENTI AMBASSADOR -> ", ambassador);
for (const iterator of utenti) {
    iterator.isAmbassador
}




// ------------ MIA INIZIATIVA
let utenti2 = [];
let ambassador2 = [];
utenti2.push(marco, paul, amy);
for (const ITERATOR of utenti2) {
    let totaleCarrello = 0;
    for (const ITERATOR of prices) {
        totaleCarrello += ITERATOR;
    }
    if (ITERATOR.isAmbassador) {
        console.log(`
        ${ITERATOR.name} ${ITERATOR.lastName} E' Ambassador
        Totale carrello -> ${totaleCarrello}
        Totale carrello scontato del 30% -> ${parseFloat((totaleCarrello -= totaleCarrello * .3).toFixed(2))}
        Totale carrello compreso più spedizione -> ${parseFloat((totaleCarrello + shippingCost).toFixed(2))}
        `);
        ambassador2.push(ITERATOR);
    }
    else {
        console.log(`
        ${ITERATOR.name} ${ITERATOR.lastName} NON E' Ambassador
        Totale carrello senza sconto -> ${parseFloat(totaleCarrello.toFixed(2))}
        Totale carrello compreso più spedizione -> ${parseFloat((totaleCarrello + shippingCost).toFixed(2))}
        `);
    }
}
console.log("UTENTI AMBASSADOR -> ", ambassador2);
for (const iterator of utenti2) {
    iterator.isAmbassador
}