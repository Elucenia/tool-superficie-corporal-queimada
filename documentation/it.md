<!-- ELUCENIA technical documentation · superficie-corporal-queimada · it · no clinical/professional/rights approval -->

# Superficie corporea ustionata (Lund-Browder)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/superficie-corporal-queimada)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

- `0` — Meno di 1 anno
- `1` — 1 a 4 anni
- `5` — 5 a 9 anni
- `10` — 10 a 14 anni
- `15` — 15 anni
- `a` — Adulto

### Testa (viso e cuoio capelluto)

`cabeca`

% della regione · facoltativo · intervallo: 0–100

### Collo

`pescoco`

% della regione · facoltativo · intervallo: 0–100

### Tronco anteriore

`tronco_ant`

% della regione · facoltativo · intervallo: 0–100

### Tronco posteriore

`tronco_post`

% della regione · facoltativo · intervallo: 0–100

### Glutei (entrambi)

`nadegas`

% della regione · facoltativo · intervallo: 0–100

### Genitali

`genitais`

% della regione · facoltativo · intervallo: 0–100

### Braccia (entrambe)

`bracos`

% della regione · facoltativo · intervallo: 0–100

### Avambracci (entrambi)

`antebracos`

% della regione · facoltativo · intervallo: 0–100

### Mani (entrambe)

`maos`

% della regione · facoltativo · intervallo: 0–100

### Cosce (entrambe)

`coxas`

% della regione · facoltativo · intervallo: 0–100

### Gambe (entrambe)

`pernas`

% della regione · facoltativo · intervallo: 0–100

### Piedi (entrambi)

`pes`

% della regione · facoltativo · intervallo: 0–100

## Edizione del metodo

Lund–Browder regioni per età; implementazione 100%, nota Lundin–Alsbjørn 2013 sul 101%; contesto ISBI 2016

## Formula documentata

Inserire frazione ustionata (2º/3º) per regione. SC ustionata=somma (percentuale regionale × frazione ustionata).

Fisse (% corpo): collo 2; tronco anteriore 13; posteriore 13; glutei 5; genitali 1; braccia 8; avambracci 6; mani 5; piedi 7. Per età (lattante → adulto): testa 19 → 17 → 13 → 11 → 9 → 7; cosce 11 → 13 → 16 → 17 → 18 → 19; gambe 10 → 10 → 11 → 12 → 13 → 14.

## Limiti e popolazione

Includere soltanto aree ustionate a spessore parziale o totale; le ustioni superficiali non rientrano nella superficie corporea ustionata. Registrare la frazione realmente ustionata di ogni regione e l’età, perché il rapporto tra testa e arti cambia nell’infanzia. La regola del nove è più adatta all’adulto; Lund–Browder aggiusta per età. Profondità, sede e lesione da inalazione richiedono valutazione distinta. La percentuale isolata non determina reintegro di liquidi o invio a un centro, e la tabella regionale originale non è stata interamente verificata in questa revisione.

## Riferimenti

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
