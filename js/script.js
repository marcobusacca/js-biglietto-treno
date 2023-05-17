// DICHIARAZIONE VARIABILI
let numero_chilometri_utente;
let età_utente;
let prezzo_biglietto_totale;
let prezzo_biglietto_totale_scontato;

// DICHIARAZIONE CONSTANTI
const prezzo_biglietto_unitario = 0.21;
console.log(prezzo_biglietto_unitario);

const sconto_minorenni = 20;
console.log(sconto_minorenni);

const sconto_over_65 = 40;
console.log(sconto_over_65);

// ALERT BENVENUTO
alert('Benvenuto! Questo programma ti aiuterà a calcolare il prezzo del tuo biglietto per il treno!');

// INPUT NUMERO CHILOMETRI UTENTE
numero_chilometri_utente = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'));
console.log(numero_chilometri_utente);