import{combine as e,createStore as r,createEvent as o,sample as t,guard as i}from"effector";import{useStore as n}from"effector-react";const s={store:function({init:e,domain:o,existing:t}){return t||(o?o.store(e):r(e))},event:function({domain:e,existing:r}){return r||(e?e.event():o())}};function u(e,r,o){var t,i,n,u,l,a,d,c,f,v;const m="function"==typeof r.init?r.init():r.init,h=s.store({domain:o,existing:null===(t=r.units)||void 0===t?void 0:t.$value,init:m}),$=s.store({domain:o,existing:null===(i=r.units)||void 0===i?void 0:i.$errors,init:[]}),g=$.map(e=>e[0]?e[0]:null),E=h.map(e=>e!==m),p=s.store({domain:o,existing:null===(n=r.units)||void 0===n?void 0:n.$isTouched,init:!1}),x=s.event({domain:o,existing:null===(u=r.units)||void 0===u?void 0:u.onChange}),V=s.event({domain:o,existing:null===(l=r.units)||void 0===l?void 0:l.onBlur}),y=s.event({domain:o,existing:null===(a=r.units)||void 0===a?void 0:a.changed}),T=s.event({domain:o,existing:null===(d=r.units)||void 0===d?void 0:d.addError}),b=s.event({domain:o,existing:null===(c=r.units)||void 0===c?void 0:c.validate}),O=s.event({domain:o,existing:null===(f=r.units)||void 0===f?void 0:f.resetErrors}),B=s.event({domain:o,existing:null===(v=r.units)||void 0===v?void 0:v.reset});return{changed:y,name:e,$value:h,$errors:$,$firstError:g,$isValid:g.map(e=>null===e),$isDirty:E,$isTouched:p,$touched:p,onChange:x,onBlur:V,addError:T,validate:b,set:x,reset:B,resetErrors:O,filter:r.filter}}function l({$form:o,submitEvent:i,resetFormEvent:n,field:s,rules:u,formValidationEvents:l,fieldValidationEvents:a}){const{$value:d,$errors:c,onBlur:f,changed:v,addError:m,validate:h,resetErrors:$,reset:g}=s,E=e(u.map(({source:e})=>e||r(null))),p=function(e){return(r,o,t)=>{const i=[];for(let n=0;n<e.length;n++){const s=e[n],u=t?t[n]:null,l=s.validator(r,o,u);"boolean"!=typeof l||l||i.push({rule:s.name,errorText:s.errorText,value:r}),"object"!=typeof l||l.isValid||i.push({rule:s.name,errorText:l.errorText,value:r})}return i}}(u),x=[...l,...a],V=[];x.includes("submit")&&V.push(t({source:e({fieldValue:d,form:o,rulesSources:E}),clock:i})),x.includes("blur")&&V.push(t({source:e({fieldValue:d,form:o,rulesSources:E}),clock:f})),x.includes("change")&&V.push(t({source:e({fieldValue:d,form:o,rulesSources:E}),clock:v})),V.push(t({source:e({fieldValue:d,form:o,rulesSources:E}),clock:h}));const y=t({source:d,clock:m,fn:(e,{rule:r,errorText:o})=>({rule:r,value:e,errorText:o})});c.on(V,(e,{form:r,fieldValue:o,rulesSources:t})=>p(o,r,t)).on(y,(e,r)=>[r,...e]).reset($,n,g),x.includes("change")||c.reset(v)}function a({$value:e,$touched:r,onChange:o,changed:t,name:n,reset:s,filter:u},l,a,d){r.on(t,()=>!0).reset(s,a,d),i({source:o,filter:u||(()=>!0),target:t}),e.on(t,(e,r)=>r).on(l,(e,r)=>r.hasOwnProperty(n)?r[n]:e).reset(s,a)}function d(r){const{filter:o,domain:n,fields:d,validateOn:c,units:f}=r,v={},m=[],h=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const r=u(e,d[e],n);v[e]=r,m.push(r.$isDirty),h.push(r.$touched)}const $=function(r){const o={};for(const e in r)r.hasOwnProperty(e)&&(o[e]=r[e].$value);return e(o)}(v),g=function(r){const o=[];for(const e in r){if(!r.hasOwnProperty(e))continue;const{$firstError:t}=r[e];o.push(t)}return e(o).map(e=>e.every(e=>null===e))}(v),E=o?e(g,o,(e,r)=>e&&r):g,p=e(m).map(e=>e.some(Boolean)),x=e(h).map(e=>e.some(Boolean)),V=s.event({domain:n,existing:null==f?void 0:f.submit}),y=s.event({domain:n,existing:null==f?void 0:f.formValidated}),T=s.event({domain:n,existing:null==f?void 0:f.setForm}),b=s.event({domain:n,existing:null==f?void 0:f.reset}),O=s.event({domain:n,existing:null==f?void 0:f.resetTouched}),B=t($,V);for(const e in v){if(!v.hasOwnProperty(e))continue;const r=d[e],o=v[e];a(o,T,b,O),r.rules&&l({$form:$,rules:r.rules,submitEvent:V,resetFormEvent:b,field:o,formValidationEvents:c||["submit"],fieldValidationEvents:r.validateOn?r.validateOn:[]})}return i({source:B,filter:E,target:y}),{fields:v,$values:$,$eachValid:g,$isValid:g,$isDirty:p,$touched:x,submit:V,resetTouched:O,reset:b,setForm:T,set:T,formValidated:y}}function c(e){const r=n(e.$value),o=n(e.$errors),t=n(e.$firstError),i=n(e.$isValid),s=n(e.$isDirty),u=n(e.$touched);return{name:e.name,value:r,errors:o,firstError:t,isValid:i,isDirty:s,touched:u,isTouched:u,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==t,errorText:e=>t?e&&e[t.rule]?e[t.rule]:t.errorText||"":""}}function f(e){const r={};for(const o in e.fields){if(!e.fields.hasOwnProperty(o))continue;const t=e.fields[o];r[o]=c(t)}const o=n(e.$values),t=n(e.$eachValid),i=n(e.$isDirty),s=n(e.$touched);return{fields:r,values:o,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!t,eachValid:t,isValid:t,isDirty:i,isTouched:s,touched:s,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,reset:e.reset,errorText:(e,o)=>{const t=r[e];return t&&t.firstError?o&&o[t.firstError.rule]?o[t.firstError.rule]:t.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}export{d as createForm,c as useField,f as useForm};
//# sourceMappingURL=index.js.map