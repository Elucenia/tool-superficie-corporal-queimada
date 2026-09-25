/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"superficie-corporal-queimada","title":"Superfície corporal queimada (Lund-Browder)","fields":[["idade","Idade","sel",{"opts":{"0":"Menos de 1 ano","1":"1 a 4 anos","5":"5 a 9 anos","10":"10 a 14 anos","15":"15 anos","a":"Adulto"}}],["cabeca","Cabeça (face e couro cabeludo)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["pescoco","Pescoço","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["tronco_ant","Tronco anterior","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["tronco_post","Tronco posterior","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["nadegas","Nádegas (as duas)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["genitais","Genitais","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["bracos","Braços (os dois)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["antebracos","Antebraços (os dois)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["maos","Mãos (as duas)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["coxas","Coxas (as duas)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["pernas","Pernas (as duas)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}],["pes","Pés (os dois)","num",{"min":0,"max":100,"step":1,"unit":"% da região","ph":"0","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var i=function(a){var e=parseFloat(a);return isNaN(e)?0:e};
a.def("superficie-corporal-queimada",function(a){var e={0:[9.5,2.75,2.5],1:[8.5,3.25,2.5],5:[6.5,4,2.75],10:[5.5,4.25,3],15:[4.5,4.5,3.25],a:[3.5,4.75,3.5]}[a.idade];if(!e)return{error:"Escolha a faixa etária."};var r={cabeca:2*e[0],pescoco:2,tronco_ant:13,tronco_post:13,nadegas:5,genitais:1,bracos:8,antebracos:6,maos:5,coxas:4*e[1],pernas:4*e[2],pes:7},t=0;for(var d in r)t+=r[d]*Math.min(100,i(a[d]))/100;if(t<=0)return{error:"Informe o percentual queimado de ao menos uma região."};var n="a"===a.idade||"15"===a.idade,s=n?20:10,l=t>=s?"high":n&&t>=10?"mid":"low",m=t>=s?"Queimadura extensa: reposição volêmica formal (fórmula de Parkland ou equivalente)":"mid"===l?"SCQ ≥ 10%: critério de encaminhamento a centro de queimados":"Queimadura de menor extensão: avaliar profundidade, local e critérios de encaminhamento";return{main:[o(t,1),"% SCQ"],label:"Superfície corporal queimada (Lund-Browder)",level:l,verdict:m,rows:[["Cabeça (tabela da idade)",o(r.cabeca,1)+"% do corpo"],["Coxas (as duas)",o(r.coxas,1)+"% do corpo"],["Pernas (as duas)",o(r.pernas,1)+"% do corpo"]],note:"Some só queimaduras de 2º e 3º graus: o eritema (1º grau) não entra na SCQ.",raw:{scq:t}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
