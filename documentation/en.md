<!-- ELUCENIA technical documentation · superficie-corporal-queimada · en · no clinical/professional/rights approval -->

# Burned body surface area (Lund–Browder)

[conditions, sources and permissions](https://elucenia.org/en/tools/superficie-corporal-queimada)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

- `0` — Less than 1 year
- `1` — 1 to 4 years
- `5` — 5 to 9 years
- `10` — 10 to 14 years
- `15` — 15 years
- `a` — Adult

### Head (face and scalp)

`cabeca`

% of region · optional · range: 0–100

### Neck

`pescoco`

% of region · optional · range: 0–100

### Anterior trunk

`tronco_ant`

% of region · optional · range: 0–100

### Posterior trunk

`tronco_post`

% of region · optional · range: 0–100

### Buttocks (both)

`nadegas`

% of region · optional · range: 0–100

### Genitals

`genitais`

% of region · optional · range: 0–100

### Arms (both)

`bracos`

% of region · optional · range: 0–100

### Forearms (both)

`antebracos`

% of region · optional · range: 0–100

### Hands (both)

`maos`

% of region · optional · range: 0–100

### Thighs (both)

`coxas`

% of region · optional · range: 0–100

### Legs (both)

`pernas`

% of region · optional · range: 0–100

### Feet (both)

`pes`

% of region · optional · range: 0–100

## Method edition

Lund–Browder age-based regions; implementation 100% with Lundin–Alsbjørn 2013 note about 101%; ISBI 2016 context

## Documented formula

Enter the burned fraction (second-/third-degree) for each region. Burned BSA is the sum of (regional body percentage × burned fraction).

Fixed regions (% body): neck 2; anterior trunk 13; posterior trunk 13; buttocks 5; genitals 1; upper arms 8; forearms 6; hands 5; feet 7. Age-varying regions (infant → adult): head 19 → 17 → 13 → 11 → 9 → 7; thighs 11 → 13 → 16 → 17 → 18 → 19; lower legs 10 → 10 → 11 → 12 → 13 → 14.

## Limits and population

Include only partial- or full-thickness burned areas; superficial burns are not included in total body surface area burned. Record the fraction actually burned in each region and the age, because head-to-limb proportions change in childhood. The rule of nines is more suitable for adults; Lund–Browder adjusts for age. Depth, site and inhalation injury need separate assessment. The percentage alone does not determine fluid replacement or referral, and the original regional table has not been fully checked in this review.

## References

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
