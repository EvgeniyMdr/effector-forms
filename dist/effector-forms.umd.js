!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("effector"),require("effector-react")):"function"==typeof define&&define.amd?define(["exports","effector","effector-react"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).EffectorForm={},e.effector,e.effectorReact)}(this,(function(e,r,i){"use strict";const o={store:function({init:e,domain:i,existing:o}){return o||(i?i.store(e,{sid:"-ewhntl"}):r.createStore(e,{sid:"-ewhmbc"}))},event:function({domain:e,existing:i}){return i||(e?e.event({sid:"-z4urk8"}):r.createEvent({sid:"-z4uqni"}))}};function n(e,i,n){var t,s,a,d,l,u,c,m,f,v,g;const h="function"==typeof i.init?i.init():i.init,p=o.store({domain:n,existing:null===(t=i.units)||void 0===t?void 0:t.$value,init:h},{name:"$value",sid:"yg99i6"}),x=o.store({domain:n,existing:null===(s=i.units)||void 0===s?void 0:s.$errors,init:[]},{name:"$errors",sid:"-y2xdpq"}),E=x.map((e=>e[0]?e[0]:null)),b=p.map((e=>e!==h)),V=o.store({domain:n,existing:null===(a=i.units)||void 0===a?void 0:a.$isTouched,init:!1},{name:"$touched",sid:"sulkei"}),y=o.event({domain:n,existing:null===(d=i.units)||void 0===d?void 0:d.onChange},{name:"onChange",sid:"-bvxucw"}),$=o.event({domain:n,existing:null===(l=i.units)||void 0===l?void 0:l.onBlur},{name:"onBlur",sid:"mo0ar0"}),F=o.event({domain:n,existing:null===(u=i.units)||void 0===u?void 0:u.changed},{name:"changed",sid:"bcod8v"}),T=o.event({domain:n,existing:null===(c=i.units)||void 0===c?void 0:c.addError},{name:"addError",sid:"3cou8n"}),w=o.event({domain:n,existing:null===(m=i.units)||void 0===m?void 0:m.validate},{name:"validate",sid:"-s3sqr5"}),k=o.event({domain:n,existing:null===(f=i.units)||void 0===f?void 0:f.resetErrors},{name:"resetErrors",sid:"z8u2jo"}),S=o.event({domain:n,existing:null===(v=i.units)||void 0===v?void 0:v.resetValue},{name:"resetValue",sid:"-x0qhaf"}),j=o.event({domain:n,existing:null===(g=i.units)||void 0===g?void 0:g.reset},{name:"reset",sid:"ocz45p"}),D=E.map((e=>null===e));return{changed:F,name:e,$value:p,$errors:x,$firstError:E,$isValid:D,$isDirty:b,$isTouched:V,$touched:V,$field:r.combine({"ɔ":[{value:p,errors:x,firstError:E,isValid:D,isDirty:b,isTouched:V}],config:{name:"$field",sid:"-vj0i5c"}}),onChange:y,onBlur:$,addError:T,validate:w,set:y,reset:j,resetErrors:k,resetValue:S,filter:i.filter}}function t({$form:e,validateFormEvent:i,submitEvent:o,resetFormEvent:n,resetValues:t,field:s,rules:a,resetErrors:d,formValidationEvents:l,fieldValidationEvents:u}){const{$value:c,$errors:m,onBlur:f,changed:v,addError:g,validate:h,resetErrors:p,resetValue:x,reset:E}=s,b="function"==typeof a?r.createStore([],{name:"rulesSources",sid:"-9d7qjb"}):r.combine({"ɔ":[a.map((({source:e})=>e||r.createStore(null,{name:"ɔ",sid:"-bexgiz"})))],config:{name:"rulesSources",sid:"-8w6454"}}),V=(y=a,(e,r,i)=>{const o=[],n="function"==typeof y?y(e,r):y;for(let t=0;t<n.length;t++){const s=n[t],a=i?i[t]:null,d=s.validator(e,r,a);"boolean"!=typeof d||d||o.push({rule:s.name,errorText:s.errorText,value:e}),"object"!=typeof d||d.isValid||o.push({rule:s.name,errorText:d.errorText,value:e})}return o});var y;const $=[...l,...u],F=[];if($.includes("submit")){const i=r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:b}],config:{name:"source",sid:"-k8128n"}}),clock:o}],config:{name:"validationTrigger",sid:"-6xbmu5"}});F.push(i)}$.includes("blur")&&F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:b}],config:{name:"source",sid:"pucwwk"}}),clock:f}],config:{sid:"-m25isl"}})),$.includes("change")&&F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:b}],config:{name:"source",sid:"-uicuuj"}}),clock:r.merge([v,x,t],{name:"clock",sid:"wzy69w"})}],config:{sid:"-7dr8kk"}})),F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:b}],config:{name:"source",sid:"-gb07m8"}}),clock:h}],config:{sid:"6tlenr"}})),F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:b}],config:{name:"source",sid:"-2kp66l"}}),clock:i}],config:{sid:"kjwg3e"}}));const T=r.sample({"ɔ":[{source:c,clock:g,fn:(e,{rule:r,errorText:i})=>({rule:r,value:e,errorText:i})}],config:{name:"addErrorWithValue",sid:"-vn5aoo"}});m.on(F,((e,{form:r,fieldValue:i,rulesSources:o})=>V(i,r,o))).on(T,((e,r)=>[r,...e])).reset(p,n,E,d),$.includes("change")||m.reset(v)}function s({$value:e,$touched:i,onChange:o,changed:n,name:t,reset:s,resetValue:a,filter:d},l,u,c,m){i.on(n,(()=>!0)).reset(s,u,c),r.guard({"ɔ":[{source:o,filter:d||(()=>!0),target:n}],config:{sid:"-ylchks"}}),e.on(n,((e,r)=>r)).on(l,((e,r)=>r.hasOwnProperty(t)?r[t]:e)).reset(s,a,m,u)}function a(e){const{value:r,errors:o,firstError:n,isValid:t,isDirty:s,isTouched:a}=i.useStore(e.$field);return{name:e.name,value:r,errors:o,firstError:n,isValid:t,isDirty:s,touched:a,isTouched:a,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==n,errorText:e=>n?e&&e[n.rule]?e[n.rule]:n.errorText||"":""}}e.createForm=function(e){const{filter:i,domain:a,fields:d,validateOn:l,units:u}=e,c={},m=[],f=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const i=d[e],o=r.withFactory({sid:"tpjlm9",fn:()=>n(e,i,a),name:"field",method:"createField"});c[e]=o,m.push(o.$isDirty),f.push(o.$touched)}const v=function(e){const i={};for(const r in e)e.hasOwnProperty(r)&&(i[r]=e[r].$value);return r.combine({"ɔ":[i],config:{sid:"3r0gj3"}})}(c),g=function(e){const i=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:o}=e[r];i.push(o)}return r.combine({"ɔ":[i],config:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(c),h=i?r.combine({"ɔ":[g,i,(e,r)=>e&&r],config:{name:"$isFormValid",sid:"-nxdol7"}}):g,p=r.combine({"ɔ":[m],config:{name:"$isDirty",sid:"-ohut1z"}}).map((e=>e.some(Boolean))),x=r.combine({"ɔ":[f],config:{name:"$touched",sid:"uloi2a"}}).map((e=>e.some(Boolean))),E=r.combine({"ɔ":[{isValid:g,isDirty:p,touched:x}],config:{name:"$meta",sid:"1dcmsl"}}),b=o.event({domain:a,existing:null==u?void 0:u.validate},{name:"validate",sid:"xx8aor"}),V=o.event({domain:a,existing:null==u?void 0:u.submit},{name:"submitForm",sid:"-60rrrl"}),y=o.event({domain:a,existing:null==u?void 0:u.formValidated},{name:"formValidated",sid:"p6ye1x"}),$=o.event({domain:a,existing:null==u?void 0:u.setForm},{name:"setForm",sid:"-nwyjlh"}),F=o.event({domain:a,existing:null==u?void 0:u.reset},{name:"resetForm",sid:"-lfuri5"}),T=o.event({domain:a,existing:null==u?void 0:u.resetValues},{name:"resetValues",sid:"xirkf3"}),w=o.event({domain:a,existing:null==u?void 0:u.resetErrors},{name:"resetErrors",sid:"ro8q5u"}),k=o.event({domain:a,existing:null==u?void 0:u.resetTouched},{name:"resetTouched",sid:"w2ufsz"}),S=r.sample({"ɔ":[v,V],config:{name:"submitWithFormData",sid:"-784yk9"}}),j=r.sample({"ɔ":[v,b],config:{name:"validateWithFormData",sid:"qbhy92"}});for(const e in c){if(!c.hasOwnProperty(e))continue;const i=d[e],o=c[e];r.withFactory({sid:"o35osu",fn:()=>s(o,$,F,k,T),name:"none",method:"bindChangeEvent"}),i.rules&&r.withFactory({sid:"o4t2kx",fn:()=>t({$form:v,rules:i.rules,submitEvent:V,resetFormEvent:F,resetValues:T,resetErrors:w,validateFormEvent:b,field:o,formValidationEvents:l||["submit"],fieldValidationEvents:i.validateOn?i.validateOn:[]}),name:"none",method:"bindValidation"})}return r.guard({"ɔ":[{source:S,filter:h,target:y}],config:{sid:"2fxgt5"}}),r.guard({"ɔ":[{source:j,filter:h,target:y}],config:{sid:"2j88db"}}),{fields:c,$values:v,$eachValid:g,$isValid:g,$isDirty:p,$touched:x,$meta:E,submit:V,validate:b,resetTouched:k,reset:F,resetValues:T,resetErrors:w,setForm:$,set:$,formValidated:y}},e.useField=a,e.useForm=function(e){const r={},o={};for(const i in e.fields){if(!e.fields.hasOwnProperty(i))continue;const n=a(e.fields[i]);r[i]=n,o[i]=n.value}const{isValid:n,isDirty:t,touched:s}=i.useStore(e.$meta);return{fields:r,values:o,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!n,eachValid:n,isValid:n,isDirty:t,isTouched:s,touched:s,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,errorText:(e,i)=>{const o=r[e];return o&&o.firstError?i&&i[o.firstError.rule]?i[o.firstError.rule]:o.firstError.errorText||"":""},reset:e.reset,submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=effector-forms.umd.js.map
