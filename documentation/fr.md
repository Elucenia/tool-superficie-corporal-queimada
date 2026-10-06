<!-- ELUCENIA technical documentation · superficie-corporal-queimada · fr · no clinical/professional/rights approval -->

# Surface corporelle brûlée (Lund-Browder)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/superficie-corporal-queimada)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

- `0` — Moins de 1 an
- `1` — 1 à 4 ans
- `5` — 5 à 9 ans
- `10` — 10 à 14 ans
- `15` — 15 ans
- `a` — Adulte

### Tête (visage et cuir chevelu)

`cabeca`

% de la région · facultatif · intervalle: 0–100

### Cou

`pescoco`

% de la région · facultatif · intervalle: 0–100

### Tronc antérieur

`tronco_ant`

% de la région · facultatif · intervalle: 0–100

### Tronc postérieur

`tronco_post`

% de la région · facultatif · intervalle: 0–100

### Fesses (les deux)

`nadegas`

% de la région · facultatif · intervalle: 0–100

### Organes génitaux

`genitais`

% de la région · facultatif · intervalle: 0–100

### Bras (les deux)

`bracos`

% de la région · facultatif · intervalle: 0–100

### Avant-bras (les deux)

`antebracos`

% de la région · facultatif · intervalle: 0–100

### Mains (les deux)

`maos`

% de la région · facultatif · intervalle: 0–100

### Cuisses (les deux)

`coxas`

% de la région · facultatif · intervalle: 0–100

### Jambes (les deux)

`pernas`

% de la région · facultatif · intervalle: 0–100

### Pieds (les deux)

`pes`

% de la région · facultatif · intervalle: 0–100

## Édition de la méthode

Lund–Browder régions par âge ; implémentation 100%, note Lundin–Alsbjørn 2013 sur 101% ; contexte ISBI 2016

## Formule documentée

Saisir fraction brûlée (2e/3e) par région. SC brûlée=somme (pourcentage régional × fraction brûlée).

Fixes (% corps) : cou 2 ; tronc antérieur 13 ; postérieur 13 ; fesses 5 ; génitaux 1 ; bras 8 ; avant-bras 6 ; mains 5 ; pieds 7. Variables d’âge (nourrisson → adulte) : tête 19 → 17 → 13 → 11 → 9 → 7; cuisses 11 → 13 → 16 → 17 → 18 → 19; jambes 10 → 10 → 11 → 12 → 13 → 14.

## Limites et population

Incluez uniquement les zones brûlées d’épaisseur partielle ou totale ; les brûlures superficielles ne sont pas incluses dans la surface corporelle brûlée. Notez la fraction réellement brûlée de chaque région et l’âge, car les proportions entre tête et membres changent pendant l’enfance. La règle des neuf convient davantage à l’adulte ; Lund–Browder tient compte de l’âge. Profondeur, localisation et lésion par inhalation nécessitent une évaluation distincte. Le pourcentage seul ne détermine ni remplissage vasculaire ni orientation, et le tableau régional original n’a pas été intégralement vérifié dans cette revue.

## Références

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

SCQ ≥ 10 % : critère d’orientation vers un centre des grands brûlés

| Détails du résultat | |
| --- | --- |
| Tête (tableau selon l’âge) | 7,0 % du corps |
| Cuisses (les deux) | 19,0 % du corps |
| Jambes (les deux) | 14,0 % du corps |

Seules les brûlures du 2e et du 3e degré comptent : l’érythème (1er degré) n’est pas inclus dans la SCQ.


### 2

Brûlure étendue : remplissage volémique formel (formule de Parkland ou équivalent)

| Détails du résultat | |
| --- | --- |
| Tête (tableau selon l’âge) | 7,0 % du corps |
| Cuisses (les deux) | 19,0 % du corps |
| Jambes (les deux) | 14,0 % du corps |

Seules les brûlures du 2e et du 3e degré comptent : l’érythème (1er degré) n’est pas inclus dans la SCQ.


### 3

Brûlure de moindre étendue : évaluer la profondeur, la localisation et les critères d’orientation

| Détails du résultat | |
| --- | --- |
| Tête (tableau selon l’âge) | 19,0 % du corps |
| Cuisses (les deux) | 11,0 % du corps |
| Jambes (les deux) | 10,0 % du corps |

Seules les brûlures du 2e et du 3e degré comptent : l’érythème (1er degré) n’est pas inclus dans la SCQ.


### 4

Brûlure étendue : remplissage volémique formel (formule de Parkland ou équivalent)

| Détails du résultat | |
| --- | --- |
| Tête (tableau selon l’âge) | 17,0 % du corps |
| Cuisses (les deux) | 13,0 % du corps |
| Jambes (les deux) | 10,0 % du corps |

Seules les brûlures du 2e et du 3e degré comptent : l’érythème (1er degré) n’est pas inclus dans la SCQ.

