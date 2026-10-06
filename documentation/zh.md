<!-- ELUCENIA technical documentation · superficie-corporal-queimada · zh · no clinical/professional/rights approval -->

# 烧伤体表面积（Lund-Browder）

[条件、来源与许可](https://elucenia.org/zh/tools/superficie-corporal-queimada)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`idade`

- `0` — 少于 1 年
- `1` — 1 至 4 岁
- `5` — 5 至 9 岁
- `10` — 10 至 14 岁
- `15` — 15 岁
- `a` — 成人

### 头部（面部及头皮）

`cabeca`

%区域 · 选填 · 范围: 0–100

### 颈部

`pescoco`

%区域 · 选填 · 范围: 0–100

### 前躯干

`tronco_ant`

%区域 · 选填 · 范围: 0–100

### 后躯干

`tronco_post`

%区域 · 选填 · 范围: 0–100

### 臀部（双侧）

`nadegas`

%区域 · 选填 · 范围: 0–100

### 生殖器

`genitais`

%区域 · 选填 · 范围: 0–100

### 上臂（双侧）

`bracos`

%区域 · 选填 · 范围: 0–100

### 前臂（双侧）

`antebracos`

%区域 · 选填 · 范围: 0–100

### 手（双侧）

`maos`

%区域 · 选填 · 范围: 0–100

### 大腿（双侧）

`coxas`

%区域 · 选填 · 范围: 0–100

### 小腿（双侧）

`pernas`

%区域 · 选填 · 范围: 0–100

### 足（双侧）

`pes`

%区域 · 选填 · 范围: 0–100

## 方法版本

Lund–Browder年龄区域；本实现100%，Lundin–Alsbjørn 2013的101%说明；ISBI 2016背景

## 已记录的公式

各区域输入二/三度烧伤比例。总面积=各（区域体表百分比×烧伤比例）之和。

固定区域（%）：颈2、前躯干13、后躯干13、臀5、生殖器1、上臂8、前臂6、手5、足7。年龄变化（婴儿→成人）： 头 19 → 17 → 13 → 11 → 9 → 7; 大腿 11 → 13 → 16 → 17 → 18 → 19; 小腿 10 → 10 → 11 → 12 → 13 → 14.

## 限制与适用人群

只应计入部分厚度或全层烧伤区域；浅表性烧伤不计入烧伤体表面积。请记录各区域实际烧伤的比例和年龄，因为儿童时期头部与四肢的比例会改变。九分法更适用于成人；Lund–Browder 法按年龄调整。深度、部位和吸入性损伤须单独评估。单一百分比不能决定液体补充或转诊，本次审查尚未完整核对原始分区表。

## 参考文献

- [ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. Burns, 2016.](https://doi.org/10.1016/j.burns.2016.05.013)

- [Lundin K, Alsbjørn B. The 101 percent in Lund-Browder charts: a commentary. Burns, 2013.](https://doi.org/10.1016/j.burns.2012.08.016)

- [ISBI2016 original guideline content hosted by burn society](https://saburnsociety.co.za/wp-content/uploads/2020/11/ISBI-Guideline-July-2017.pdf)

- [ABA current referral guidance,retrieved2026-10-04](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

TBSA ≥ 10%：转诊至烧伤中心的标准

| 结果详情 | |
| --- | --- |
| 头部（按年龄表） | 身体的7.0% |
| 大腿（双侧） | 身体的19.0% |
| 小腿（双侧） | 身体的14.0% |

仅计算二度和三度烧伤：红斑（一级）不计入TBSA。


### 2

广泛烧伤：正式液体复苏（Parkland公式或等效方案）

| 结果详情 | |
| --- | --- |
| 头部（按年龄表） | 身体的7.0% |
| 大腿（双侧） | 身体的19.0% |
| 小腿（双侧） | 身体的14.0% |

仅计算二度和三度烧伤：红斑（一级）不计入TBSA。


### 3

较小面积烧伤：评估深度、部位和转诊标准

| 结果详情 | |
| --- | --- |
| 头部（按年龄表） | 身体的19.0% |
| 大腿（双侧） | 身体的11.0% |
| 小腿（双侧） | 身体的10.0% |

仅计算二度和三度烧伤：红斑（一级）不计入TBSA。


### 4

广泛烧伤：正式液体复苏（Parkland公式或等效方案）

| 结果详情 | |
| --- | --- |
| 头部（按年龄表） | 身体的17.0% |
| 大腿（双侧） | 身体的13.0% |
| 小腿（双侧） | 身体的10.0% |

仅计算二度和三度烧伤：红斑（一级）不计入TBSA。

