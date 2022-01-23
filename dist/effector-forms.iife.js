var EffectorForm=function(e,r,i){"use strict";const o={store:function({init:e,domain:i,existing:o}){return o||(i?i.store(e,{sid:"-ewhntl"}):r.createStore(e,{sid:"-ewhmbc"}))},event:function({domain:e,existing:i}){return i||(e?e.event({sid:"-z4urk8"}):r.createEvent({sid:"-z4uqni"}))}};function n(e,i,n){var s,t,a,d,l,u,c,m,f,v,g;const h="function"==typeof i.init?i.init():i.init,E=o.store({domain:n,existing:null===(s=i.units)||void 0===s?void 0:s.$value,init:h},{name:"$value",sid:"yg99i6"}),p=o.store({domain:n,existing:null===(t=i.units)||void 0===t?void 0:t.$errors,init:[]},{name:"$errors",sid:"-y2xdpq"}),x=p.map((e=>e[0]?e[0]:null)),V=E.map((e=>e!==h)),b=o.store({domain:n,existing:null===(a=i.units)||void 0===a?void 0:a.$isTouched,init:!1},{name:"$touched",sid:"sulkei"}),$=o.event({domain:n,existing:null===(d=i.units)||void 0===d?void 0:d.onChange},{name:"onChange",sid:"-bvxucw"}),y=o.event({domain:n,existing:null===(l=i.units)||void 0===l?void 0:l.onBlur},{name:"onBlur",sid:"mo0ar0"}),F=o.event({domain:n,existing:null===(u=i.units)||void 0===u?void 0:u.changed},{name:"changed",sid:"bcod8v"}),w=o.event({domain:n,existing:null===(c=i.units)||void 0===c?void 0:c.addError},{name:"addError",sid:"3cou8n"}),T=o.event({domain:n,existing:null===(m=i.units)||void 0===m?void 0:m.validate},{name:"validate",sid:"-s3sqr5"}),k=o.event({domain:n,existing:null===(f=i.units)||void 0===f?void 0:f.resetErrors},{name:"resetErrors",sid:"z8u2jo"}),S=o.event({domain:n,existing:null===(v=i.units)||void 0===v?void 0:v.resetValue},{name:"resetValue",sid:"-x0qhaf"}),D=o.event({domain:n,existing:null===(g=i.units)||void 0===g?void 0:g.reset},{name:"reset",sid:"ocz45p"}),j=x.map((e=>null===e));return{changed:F,name:e,$value:E,$errors:p,$firstError:x,$isValid:j,$isDirty:V,$isTouched:b,$touched:b,$field:r.combine({"ɔ":[{value:E,errors:p,firstError:x,isValid:j,isDirty:V,isTouched:b}],config:{name:"$field",sid:"-vj0i5c"}}),onChange:$,onBlur:y,addError:w,validate:T,set:$,reset:D,resetErrors:k,resetValue:S,filter:i.filter}}function s({$form:e,validateFormEvent:i,submitEvent:o,resetFormEvent:n,resetValues:s,field:t,rules:a,resetErrors:d,formValidationEvents:l,fieldValidationEvents:u}){const{$value:c,$errors:m,onBlur:f,changed:v,addError:g,validate:h,resetErrors:E,resetValue:p,reset:x}=t,V="function"==typeof a?r.createStore([],{name:"rulesSources",sid:"-9d7qjb"}):r.combine({"ɔ":[a.map((({source:e})=>e||r.createStore(null,{name:"ɔ",sid:"-bexgiz"})))],config:{name:"rulesSources",sid:"-8w6454"}}),b=($=a,(e,r,i)=>{const o=[],n="function"==typeof $?$(e,r):$;for(let s=0;s<n.length;s++){const t=n[s],a=i?i[s]:null,d=t.validator(e,r,a);"boolean"!=typeof d||d||o.push({rule:t.name,errorText:t.errorText,value:e}),"object"!=typeof d||d.isValid||o.push({rule:t.name,errorText:d.errorText,value:e})}return o});var $;const y=[...l,...u],F=[];if(y.includes("submit")){const i=r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:V}],config:{name:"source",sid:"-k8128n"}}),clock:o}],config:{name:"validationTrigger",sid:"-6xbmu5"}});F.push(i)}y.includes("blur")&&F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:V}],config:{name:"source",sid:"pucwwk"}}),clock:f}],config:{sid:"-m25isl"}})),y.includes("change")&&F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:V}],config:{name:"source",sid:"-uicuuj"}}),clock:r.merge([v,p,s],{name:"clock",sid:"wzy69w"})}],config:{sid:"-7dr8kk"}})),F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:V}],config:{name:"source",sid:"-gb07m8"}}),clock:h}],config:{sid:"6tlenr"}})),F.push(r.sample({"ɔ":[{source:r.combine({"ɔ":[{fieldValue:c,form:e,rulesSources:V}],config:{name:"source",sid:"-2kp66l"}}),clock:i}],config:{sid:"kjwg3e"}}));const w=r.sample({"ɔ":[{source:c,clock:g,fn:(e,{rule:r,errorText:i})=>({rule:r,value:e,errorText:i})}],config:{name:"addErrorWithValue",sid:"-vn5aoo"}});m.on(F,((e,{form:r,fieldValue:i,rulesSources:o})=>b(i,r,o))).on(w,((e,r)=>[r,...e])).reset(E,n,x,d),y.includes("change")||m.reset(v)}function t({$value:e,$touched:i,onChange:o,changed:n,name:s,reset:t,resetValue:a,filter:d},l,u,c,m){i.on(n,(()=>!0)).reset(t,u,c),r.guard({"ɔ":[{source:o,filter:d||(()=>!0),target:n}],config:{sid:"-ylchks"}}),e.on(n,((e,r)=>r)).on(l,((e,r)=>r.hasOwnProperty(s)?r[s]:e)).reset(t,a,m,u)}function a(e){const{value:r,errors:o,firstError:n,isValid:s,isDirty:t,isTouched:a}=i.useStore(e.$field);return{name:e.name,value:r,errors:o,firstError:n,isValid:s,isDirty:t,touched:a,isTouched:a,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==n,errorText:e=>n?e&&e[n.rule]?e[n.rule]:n.errorText||"":""}}return e.createForm=function(e){const{filter:i,domain:a,fields:d,validateOn:l,units:u}=e,c={},m=[],f=[];for(const e in d){if(!d.hasOwnProperty(e))continue;const i=d[e],o=r.withFactory({sid:"tpjlm9",fn:()=>n(e,i,a),name:"field",method:"createField"});c[e]=o,m.push(o.$isDirty),f.push(o.$touched)}const v=function(e){const i={};for(const r in e)e.hasOwnProperty(r)&&(i[r]=e[r].$value);return r.combine({"ɔ":[i],config:{sid:"3r0gj3"}})}(c),g=function(e){const i=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:o}=e[r];i.push(o)}return r.combine({"ɔ":[i],config:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(c),h=i?r.combine({"ɔ":[g,i,(e,r)=>e&&r],config:{name:"$isFormValid",sid:"-nxdol7"}}):g,E=r.combine({"ɔ":[m],config:{name:"$isDirty",sid:"-ohut1z"}}).map((e=>e.some(Boolean))),p=r.combine({"ɔ":[f],config:{name:"$touched",sid:"uloi2a"}}).map((e=>e.some(Boolean))),x=r.combine({"ɔ":[{isValid:g,isDirty:E,touched:p}],config:{name:"$meta",sid:"1dcmsl"}}),V=o.event({domain:a,existing:null==u?void 0:u.validate},{name:"validate",sid:"xx8aor"}),b=o.event({domain:a,existing:null==u?void 0:u.submit},{name:"submitForm",sid:"-60rrrl"}),$=o.event({domain:a,existing:null==u?void 0:u.formValidated},{name:"formValidated",sid:"p6ye1x"}),y=o.event({domain:a,existing:null==u?void 0:u.setForm},{name:"setForm",sid:"-nwyjlh"}),F=o.event({domain:a,existing:null==u?void 0:u.reset},{name:"resetForm",sid:"-lfuri5"}),w=o.event({domain:a,existing:null==u?void 0:u.resetValues},{name:"resetValues",sid:"xirkf3"}),T=o.event({domain:a,existing:null==u?void 0:u.resetErrors},{name:"resetErrors",sid:"ro8q5u"}),k=o.event({domain:a,existing:null==u?void 0:u.resetTouched},{name:"resetTouched",sid:"w2ufsz"}),S=r.sample({"ɔ":[v,b],config:{name:"submitWithFormData",sid:"-784yk9"}}),D=r.sample({"ɔ":[v,V],config:{name:"validateWithFormData",sid:"qbhy92"}});for(const e in c){if(!c.hasOwnProperty(e))continue;const i=d[e],o=c[e];r.withFactory({sid:"o35osu",fn:()=>t(o,y,F,k,w),name:"none",method:"bindChangeEvent"}),i.rules&&r.withFactory({sid:"o4t2kx",fn:()=>s({$form:v,rules:i.rules,submitEvent:b,resetFormEvent:F,resetValues:w,resetErrors:T,validateFormEvent:V,field:o,formValidationEvents:l||["submit"],fieldValidationEvents:i.validateOn?i.validateOn:[]}),name:"none",method:"bindValidation"})}return r.guard({"ɔ":[{source:S,filter:h,target:$}],config:{sid:"2fxgt5"}}),r.guard({"ɔ":[{source:D,filter:h,target:$}],config:{sid:"2j88db"}}),{fields:c,$values:v,$eachValid:g,$isValid:g,$isDirty:E,$touched:p,$meta:x,submit:b,validate:V,resetTouched:k,reset:F,resetValues:w,resetErrors:T,setForm:y,set:y,formValidated:$}},e.useField=a,e.useForm=function(e){const r={},o={};for(const i in e.fields){if(!e.fields.hasOwnProperty(i))continue;const n=a(e.fields[i]);r[i]=n,o[i]=n.value}const{isValid:n,isDirty:s,touched:t}=i.useStore(e.$meta);return{fields:r,values:o,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!n,eachValid:n,isValid:n,isDirty:s,isTouched:t,touched:t,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,errorText:(e,i)=>{const o=r[e];return o&&o.firstError?i&&i[o.firstError.rule]?i[o.firstError.rule]:o.firstError.errorText||"":""},reset:e.reset,submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}},Object.defineProperty(e,"__esModule",{value:!0}),e}({},effector,effectorReact);
//# sourceMappingURL=effector-forms.iife.js.map
