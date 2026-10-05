<!-- ELUCENIA technical documentation · superficie-corporal-queimada · es · no clinical/professional/rights approval -->

# Superficie corporal quemada (Lund-Browder)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/superficie-corporal-queimada)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

- `0` — Menos de 1 año
- `1` — 1 a 4 años
- `5` — 5 a 9 años
- `10` — 10 a 14 años
- `15` — 15 años
- `a` — Adulto

### Cabeza (cara y cuero cabelludo)

`cabeca`

% de la región · opcional · intervalo: 0–100

### Cuello

`pescoco`

% de la región · opcional · intervalo: 0–100

### Tronco anterior

`tronco_ant`

% de la región · opcional · intervalo: 0–100

### Tronco posterior

`tronco_post`

% de la región · opcional · intervalo: 0–100

### Nalgas (ambas)

`nadegas`

% de la región · opcional · intervalo: 0–100

### Genitales

`genitais`

% de la región · opcional · intervalo: 0–100

### Brazos (ambos)

`bracos`

% de la región · opcional · intervalo: 0–100

### Antebrazos (ambos)

`antebracos`

% de la región · opcional · intervalo: 0–100

### Manos (ambas)

`maos`

% de la región · opcional · intervalo: 0–100

### Muslos (ambos)

`coxas`

% de la región · opcional · intervalo: 0–100

### Piernas (ambas)

`pernas`

% de la región · opcional · intervalo: 0–100

### Pies (ambos)

`pes`

% de la región · opcional · intervalo: 0–100

## Edición del método

Lund–Browder regiones por edad; implementación 100%, nota Lundin–Alsbjørn 2013 sobre 101%; contexto ISBI 2016

## Fórmula documentada

Introduzca fracción quemada (2º/3º) por región. SC quemada=suma de (porcentaje regional × fracción quemada).

Fijas (% cuerpo): cuello 2; tronco anterior 13; posterior 13; nalgas 5; genitales 1; brazos 8; antebrazos 6; manos 5; pies 7. Variables con edad (lactante → adulto): cabeza 19 → 17 → 13 → 11 → 9 → 7; muslos 11 → 13 → 16 → 17 → 18 → 19; piernas 10 → 10 → 11 → 12 → 13 → 14.

## Límites y población

Incluya solo áreas con quemaduras de espesor parcial o total; las quemaduras superficiales no se cuentan en la superficie corporal quemada. Registre la fracción realmente quemada de cada región y la edad, porque la proporción entre cabeza y extremidades cambia en la infancia. La regla de los nueve es más adecuada para adultos; Lund–Browder ajusta por edad. Profundidad, localización y lesión por inhalación exigen evaluación aparte. El porcentaje aislado no determina reposición de líquidos ni derivación, y la tabla regional original no se ha comprobado íntegramente en esta revisión.

## Referencias

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
