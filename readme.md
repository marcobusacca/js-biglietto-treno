PROBLEMA: Creare un programma che calcola il prezzo del biglietto del treno secondo vari parametri

1 - Dichiarare le variabili e le costanti

    1.1 - Variabili

        1.1.1 - numero_chilometri_utente    (da chiedere all'utente)

        1.1.2 - età_utente                  (da chiedere all'utente)

        1.1.3 - prezzo_biglietto_totale

        1.1.4 - prezzo_biglietto_totale_scontato


    1.2 - Costanti

        1.2.1 - prezzo_biglietto_unitario   (0.21€)

        1.2.2 - sconto_minorenni            (20%)

        1.2.3 - sconto_over_65              (40%)



2 - Chiedere all'utente il numero di chilometri che vuole percorrere

3 - Chiedere all'utente la sua età

4 - Calcolare il prezzo totale del biglietto                                            (prezzo_biglietto_unitario * numero_chilometri_utente)



5 - ? SE l'utente è minorenne

    5.1 - Applicare sconto_minorenni                                                    (prezzo_biglietto_totale_scontato = prezzo_biglietto_totale * 20 / 100)

    5.2 - Stampare il prezzo totale del biglietto scontato                              (OUTPUT = prezzo_biglietto_totale_scontato)

6 - ALTRIMENTI SE l'utente è over 65

    6.1 - Applicare sconto_over_65                                                      (prezzo_biglietto_totale_scontato = prezzo_biglietto_totale * 40 / 100)

    6.2 - Stampare il prezzo totale del biglietto scontato                              (OUTPUT = prezzo_biglietto_totale_scontato)

7 - ALTRIMENTI

    7.1 - Non applicare nessun sconto e stampare il prezzo totale del biglietto         (OUTPUT = prezzo_biglietto_totale)
