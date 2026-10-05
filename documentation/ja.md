<!-- ELUCENIA technical documentation · superficie-corporal-queimada · ja · no clinical/professional/rights approval -->

# 熱傷体表面積（Lund-Browder）

[条件・出典・許諾](https://elucenia.org/ja/tools/superficie-corporal-queimada)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢

`idade`

- `0` — 1 年 未満
- `1` — 1 ～ 4 歳
- `5` — 5 ～ 9 歳
- `10` — 10 ～ 14 歳
- `15` — 15 歳
- `a` — 成人

### 頭部（顔・頭皮）

`cabeca`

%部位 · 任意 · 範囲: 0–100

### 頸部

`pescoco`

%部位 · 任意 · 範囲: 0–100

### 体幹前面

`tronco_ant`

%部位 · 任意 · 範囲: 0–100

### 体幹後面

`tronco_post`

%部位 · 任意 · 範囲: 0–100

### 臀部（両側）

`nadegas`

%部位 · 任意 · 範囲: 0–100

### 外陰部

`genitais`

%部位 · 任意 · 範囲: 0–100

### 上腕（両側）

`bracos`

%部位 · 任意 · 範囲: 0–100

### 前腕（両側）

`antebracos`

%部位 · 任意 · 範囲: 0–100

### 手（両側）

`maos`

%部位 · 任意 · 範囲: 0–100

### 大腿（両側）

`coxas`

%部位 · 任意 · 範囲: 0–100

### 下腿（両側）

`pernas`

%部位 · 任意 · 範囲: 0–100

### 足（両側）

`pes`

%部位 · 任意 · 範囲: 0–100

## 方法の版

Lund–Browder年齢部位、実装100%、Lundin–Alsbjørn 2013の101%注記、ISBI 2016文脈

## 記載された計算式

各部位の2・3度熱傷割合を入力。熱傷面積=（部位体表割合×熱傷割合）の合計。

固定部位（%）：頸2、前体幹13、後体幹13、臀5、外陰1、上腕8、前腕6、手5、足7。年齢別（乳児→成人）： 頭部 19 → 17 → 13 → 11 → 9 → 7; 大腿 11 → 13 → 16 → 17 → 18 → 19; 下腿 10 → 10 → 11 → 12 → 13 → 14.

## 限界・対象集団

部分層または全層の熱傷部位のみを含め、表在性熱傷は熱傷体表面積に含めません。小児では頭部と四肢の比率が変わるため、各部位の実際に熱傷した割合と年齢を記録してください。9 の法則は成人により適し、Lund–Browder は年齢を調整します。深さ、部位、吸入損傷は別途評価が必要です。割合だけで輸液や専門施設への紹介は決まりません。原始部位別表はこの審査で完全には確認されていません。

## 参考文献

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
