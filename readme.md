PROBLEMA: Creare un programma che calcola il prezzo del biglietto del treno secondo vari parametri

1 - Dichiarare le variabili e le constanti

    1.1 - Variabili

        1.1.1 - numero_chilometri_utente                                                (INPUT = da chiedere all'utente)

        1.1.2 - età_utente                                                              (INPUT = da chiedere all'utente)

        1.1.3 - prezzo_biglietto_totale

        1.1.4 - sconto_biglietto

        1.1.5 - prezzo_biglietto_totale_scontato


    1.2 - Constanti

        1.2.1 - prezzo_biglietto_unitario                                               (0.21€)

        1.2.2 - sconto_minorenni                                                        (20%)

        1.2.3 - sconto_over_65                                                          (40%)



2 - Chiedere all'utente il numero di chilometri che vuole percorrere

    2.1 - Controllare che l'utente abbia effettivamente inserito un numero

3 - Chiedere all'utente la sua età

    3.1 - Controllare che l'utente abbia effettivamente inserito un numero

4 - Calcolare il prezzo totale del biglietto                                            (prezzo_biglietto_unitario * numero_chilometri_utente)



5 - ? SE l'utente è minorenne

    5.1 - Calcolare sconto_minorenni                                                    (sconto_biglietto = prezzo_biglietto_totale * sconto_minorenni / 100)

    5.2 - Applicare sconto_minorenni                                                    (prezzo_biglietto_totale_scontato = prezzo_biglietto_totale - sconto_biglietto)

    5.3 - Stampare il prezzo totale del biglietto scontato                              (OUTPUT = prezzo_biglietto_totale_scontato)

6 - ALTRIMENTI SE l'utente è over 65

    6.1 - Calcolare sconto_over_65                                                      (sconto_biglietto = prezzo_biglietto_totale * sconto_over_65 / 100)

    6.2 - Applicare sconto_over_65                                                      (prezzo_biglietto_totale_scontato = prezzo_biglietto_totale - sconto_biglietto)

    6.3 - Stampare il prezzo totale del biglietto scontato                              (OUTPUT = prezzo_biglietto_totale_scontato)

7 - ALTRIMENTI

    7.1 - Non applicare nessun sconto e stampare il prezzo totale del biglietto         (OUTPUT = prezzo_biglietto_totale)
