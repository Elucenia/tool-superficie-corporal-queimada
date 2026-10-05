<!-- ELUCENIA technical documentation · superficie-corporal-queimada · pt-BR · no clinical/professional/rights approval -->

# Superfície corporal queimada (Lund-Browder)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/superficie-corporal-queimada)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

- `0` — Menos de 1 ano
- `1` — 1 a 4 anos
- `5` — 5 a 9 anos
- `10` — 10 a 14 anos
- `15` — 15 anos
- `a` — Adulto

### Cabeça (face e couro cabeludo)

`cabeca`

% da região · opcional · intervalo: 0–100

### Pescoço

`pescoco`

% da região · opcional · intervalo: 0–100

### Tronco anterior

`tronco_ant`

% da região · opcional · intervalo: 0–100

### Tronco posterior

`tronco_post`

% da região · opcional · intervalo: 0–100

### Nádegas (as duas)

`nadegas`

% da região · opcional · intervalo: 0–100

### Genitais

`genitais`

% da região · opcional · intervalo: 0–100

### Braços (os dois)

`bracos`

% da região · opcional · intervalo: 0–100

### Antebraços (os dois)

`antebracos`

% da região · opcional · intervalo: 0–100

### Mãos (as duas)

`maos`

% da região · opcional · intervalo: 0–100

### Coxas (as duas)

`coxas`

% da região · opcional · intervalo: 0–100

### Pernas (as duas)

`pernas`

% da região · opcional · intervalo: 0–100

### Pés (os dois)

`pes`

% da região · opcional · intervalo: 0–100

## Edição do método

Lund Browder:regiõesporidade; implementação 100% comnota Lundin Alsbjorn 2013 sobre 101%; contexto ISBI 2016

## Fórmula documentada

Para cada região, informe quanto dela está queimado (2º e 3º graus). A SCQ é a soma de (porcentagem do corpo da região × fração queimada).

Regiões fixas (% do corpo): pescoço 2; tronco anterior 13; tronco posterior 13; nádegas 5; genitais 1; braços 8; antebraços 6; mãos 5; pés 7. Regiões que variam com a idade (lactente → adulto): cabeça 19 → 17 → 13 → 11 → 9 → 7; coxas 11 → 13 → 16 → 17 → 18 → 19; pernas 10 → 10 → 11 → 12 → 13 → 14.

## Limites e população

Inclua somente áreas de queimadura de espessura parcial ou total; queimaduras superficiais não entram na superfície corporal queimada. Registre a fração realmente queimada de cada região e a idade, pois a proporção entre cabeça e membros muda na infância. A regra dos nove é mais adequada ao adulto; Lund–Browder faz ajuste etário. Profundidade, localização e lesão inalatória exigem avaliação separada. A porcentagem isolada não define reposição de fluidos ou encaminhamento, e a tabela regional original não foi integralmente conferida nesta revisão.

## Referências

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
