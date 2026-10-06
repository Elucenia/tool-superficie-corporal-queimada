<!-- ELUCENIA technical documentation · superficie-corporal-queimada · de · no clinical/professional/rights approval -->

# Verbrannte Körperoberfläche (Lund-Browder)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/superficie-corporal-queimada)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

- `0` — Weniger als 1 Jahr
- `1` — 1 bis 4 Jahre
- `5` — 5 bis 9 Jahre
- `10` — 10 bis 14 Jahre
- `15` — 15 Jahre
- `a` — Erwachsener

### Kopf (Gesicht und Kopfhaut)

`cabeca`

% der Region · optional · Bereich: 0–100

### Hals

`pescoco`

% der Region · optional · Bereich: 0–100

### Vorderer Rumpf

`tronco_ant`

% der Region · optional · Bereich: 0–100

### Hinterer Rumpf

`tronco_post`

% der Region · optional · Bereich: 0–100

### Gesäß (beidseits)

`nadegas`

% der Region · optional · Bereich: 0–100

### Genitalien

`genitais`

% der Region · optional · Bereich: 0–100

### Oberarme (beide)

`bracos`

% der Region · optional · Bereich: 0–100

### Unterarme (beide)

`antebracos`

% der Region · optional · Bereich: 0–100

### Hände (beide)

`maos`

% der Region · optional · Bereich: 0–100

### Oberschenkel (beidseits)

`coxas`

% der Region · optional · Bereich: 0–100

### Unterschenkel (beide)

`pernas`

% der Region · optional · Bereich: 0–100

### Füße (beide)

`pes`

% der Region · optional · Bereich: 0–100

## Fassung der Methode

Lund–Browder nach Alter; Umsetzung 100%, Lundin–Alsbjørn 2013-Hinweis zu 101%; ISBI 2016-Kontext

## Dokumentierte Formel

Verbrannten Anteil (2./3.Grad) je Region eingeben. Verbrannte Fläche=Summe (regionaler Körperanteil × verbrannter Bruchteil).

Fix (% Körper): Hals 2; vorderer Rumpf 13; hinterer 13; Gesäß 5; Genitalien 1; Oberarme 8; Unterarme 6; Hände 5; Füße 7. Altersabhängig (Säugling → Erwachsener): Kopf 19 → 17 → 13 → 11 → 9 → 7; Oberschenkel 11 → 13 → 16 → 17 → 18 → 19; Unterschenkel 10 → 10 → 11 → 12 → 13 → 14.

## Grenzen und Population

Berücksichtigen Sie nur Verbrennungen teilweiser oder vollständiger Hautdicke; oberflächliche Verbrennungen zählen nicht zur verbrannten Körperoberfläche. Dokumentieren Sie den tatsächlich verbrannten Anteil jeder Region und das Alter, da sich die Proportionen von Kopf und Gliedmaßen im Kindesalter ändern. Die Neunerregel eignet sich eher für Erwachsene; Lund–Browder berücksichtigt das Alter. Tiefe, Lokalisation und Inhalationstrauma erfordern eine gesonderte Beurteilung. Der Prozentwert allein bestimmt weder Flüssigkeitsersatz noch Überweisung; die regionale Originaltabelle wurde in dieser Prüfung nicht vollständig abgeglichen.

## Referenzen

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

KOF ≥ 10 %: Überweisungskriterium an ein Brandverletztenzentrum

| Ergebnisdetails | |
| --- | --- |
| Kopf (Alterstabelle) | 7,0 % des Körpers |
| Oberschenkel (beidseits) | 19,0 % des Körpers |
| Unterschenkel (beide) | 14,0 % des Körpers |

Nur Verbrennungen 2. und 3. Grades zählen: Erythem (1. Grad) wird nicht in die KOF einbezogen.


### 2

Ausgedehnte Verbrennung: formale Volumensubstitution (Parkland-Formel oder gleichwertig)

| Ergebnisdetails | |
| --- | --- |
| Kopf (Alterstabelle) | 7,0 % des Körpers |
| Oberschenkel (beidseits) | 19,0 % des Körpers |
| Unterschenkel (beide) | 14,0 % des Körpers |

Nur Verbrennungen 2. und 3. Grades zählen: Erythem (1. Grad) wird nicht in die KOF einbezogen.


### 3

Kleinere Verbrennung: Tiefe, Lokalisation und Überweisungskriterien beurteilen

| Ergebnisdetails | |
| --- | --- |
| Kopf (Alterstabelle) | 19,0 % des Körpers |
| Oberschenkel (beidseits) | 11,0 % des Körpers |
| Unterschenkel (beide) | 10,0 % des Körpers |

Nur Verbrennungen 2. und 3. Grades zählen: Erythem (1. Grad) wird nicht in die KOF einbezogen.


### 4

Ausgedehnte Verbrennung: formale Volumensubstitution (Parkland-Formel oder gleichwertig)

| Ergebnisdetails | |
| --- | --- |
| Kopf (Alterstabelle) | 17,0 % des Körpers |
| Oberschenkel (beidseits) | 13,0 % des Körpers |
| Unterschenkel (beide) | 10,0 % des Körpers |

Nur Verbrennungen 2. und 3. Grades zählen: Erythem (1. Grad) wird nicht in die KOF einbezogen.

