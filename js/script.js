// DICHIARAZIONE VARIABILI
let numero_chilometri_utente;
let età_utente;
let prezzo_biglietto_totale;
let sconto_biglietto;
let prezzo_biglietto_totale_scontato;

// DICHIARAZIONE CONSTANTI
const prezzo_biglietto_unitario = 0.21;
console.log(`prezzo_biglietto_unitario : ${prezzo_biglietto_unitario}€`);

const sconto_minorenni = 20;
console.log(`sconto_minorenni : ${sconto_minorenni}%`);

const sconto_over_65 = 40;
console.log(`sconto_over_65 : ${sconto_over_65}%`);

// ALERT BENVENUTO
alert("Benvenuto! Questo programma ti aiuterà a calcolare il prezzo del tuo biglietto per il treno!");

// INPUT NUMERO CHILOMETRI UTENTE
numero_chilometri_utente = parseInt(prompt("Inserisci i chilometri che vuoi percorrere :"));
console.log(`numero_chilometri_utente : ${numero_chilometri_utente}km`);

// CONTROLLO CHILOMETRI UTENTE
if (isNaN(numero_chilometri_utente)){
    alert("Devi inserire i chilometri che vuoi percorrere!");
    throw new Error("Devi inserire i chilometri che vuoi percorrere!");
}

// INPUT ETA UTENTE
età_utente = parseInt(prompt("Inserisci la tua età :"));
console.log(`età_utente : ${età_utente} anni`);

// CONTROLLO ETA UTENTE
if (isNaN(età_utente)){
    alert("Devi inserire la tua età!");
    throw new Error("Devi inserire la tua età!");
}

// CALCOLO PREZZO BIGLIETTO TOTALE
prezzo_biglietto_totale = (prezzo_biglietto_unitario * numero_chilometri_utente).toFixed(2);
console.log(`prezzo_biglietto_totale : ${prezzo_biglietto_totale}€`);

// CONDIZIONE CONTROLLO ETA UTENTE
if (età_utente < 18){

    // CALCOLO SCONTO BIGLIETTO
    sconto_biglietto = (prezzo_biglietto_totale * sconto_minorenni / 100).toFixed(2);
    console.log(`sconto_biglietto : ${sconto_biglietto}€`);

    // CALCOLO PREZZO BIGLIETTO TOTALE SCONTATO
    prezzo_biglietto_totale_scontato = (prezzo_biglietto_totale - sconto_biglietto).toFixed(2);
    console.log(`prezzo_biglietto_totale_scontato : ${prezzo_biglietto_totale_scontato}€`);

    // OUTPUT ALERT PREZZO BIGLIETTO TOTALE SCONTATO
    alert(`Il biglietto del treno costerebbe : ${prezzo_biglietto_totale}€.

    Però, visto che hai ${età_utente} anni,

    hai diritto ad uno sconto minorenni del ${sconto_minorenni}%!

    Il tuo sconto effettivo sarà di : ${sconto_biglietto}€,

    quindi, il tuo biglietto del treno costerà : ${prezzo_biglietto_totale_scontato}€!

    Il tuo viaggio durerà : ${numero_chilometri_utente} km.

    Fai buon viaggio!
    `);

    // OUTPUT HTML PREZZO BIGLIETTO TOTALE NON SCONTATO
    document.getElementById("prezzo_biglietto").innerHTML = (`Il biglietto del treno costerebbe : ${prezzo_biglietto_totale}€. <br> <br>

    Però, visto che hai ${età_utente} anni,

    hai diritto ad uno sconto minorenni del ${sconto_minorenni}%! <br> <br>

    Il tuo sconto effettivo sarà di : ${sconto_biglietto}€,

    quindi, il tuo biglietto del treno costerà : ${prezzo_biglietto_totale_scontato}€! <br> <br>

    Il tuo viaggio durerà : ${numero_chilometri_utente} km. <br>

    Fai buon viaggio!
    `);

} else if (età_utente > 65){

    // CALCOLO SCONTO BIGLIETTO
    sconto_biglietto = (prezzo_biglietto_totale * sconto_over_65 / 100).toFixed(2);
    console.log(`sconto_biglietto : ${sconto_biglietto}€`);

    // CALCOLO PREZZO BIGLIETTO TOTALE SCONTATO
    prezzo_biglietto_totale_scontato = (prezzo_biglietto_totale - sconto_biglietto).toFixed(2);
    console.log(`prezzo_biglietto_totale_scontato : ${prezzo_biglietto_totale_scontato}€`);

    // OUTPUT ALERT PREZZO BIGLIETTO TOTALE SCONTATO
    alert(`Il biglietto del treno costerebbe : ${prezzo_biglietto_totale}€.

    Però, visto che hai ${età_utente} anni,

    hai diritto ad uno sconto over 65 del ${sconto_over_65}%!

    Il tuo sconto effettivo sarà di : ${sconto_biglietto}€,

    quindi, il tuo biglietto del treno costerà : ${prezzo_biglietto_totale_scontato}€!

    Il tuo viaggio durerà : ${numero_chilometri_utente} km.

    Fai buon viaggio!
    `);

    // OUTPUT HTML PREZZO BIGLIETTO TOTALE NON SCONTATO
    document.getElementById("prezzo_biglietto").innerHTML = (`Il biglietto del treno costerebbe : ${prezzo_biglietto_totale}€. <br> <br>

    Però, visto che hai ${età_utente} anni,

    hai diritto ad uno sconto over 65 del ${sconto_over_65}%! <br> <br>

    Il tuo sconto effettivo sarà di : ${sconto_biglietto}€,

    quindi, il tuo biglietto del treno costerà : ${prezzo_biglietto_totale_scontato}€! <br> <br>

    Il tuo viaggio durerà : ${numero_chilometri_utente} km. <br>

    Fai buon viaggio!
    `);

} else{

    // OUTPUT ALERT PREZZO BIGLIETTO TOTALE NON SCONTATO
    alert(`Il tuo biglietto del treno costerà : ${prezzo_biglietto_totale}€!

    Il tuo viaggio durerà : ${numero_chilometri_utente}km.
    
    Fai buon viaggio!
    `);

    // OUTPUT HTML PREZZO BIGLIETTO TOTALE NON SCONTATO
    document.getElementById("prezzo_biglietto").innerHTML = (`Il tuo biglietto del treno costerà : ${prezzo_biglietto_totale}€! <br> <br>

    Il tuo viaggio durerà : ${numero_chilometri_utente}km. <br>
    
    Fai buon viaggio!
    `);
}