(function(t){function e(e){for(var r,o,l=e[0],i=e[1],c=e[2],d=0,f=[];d<l.length;d++)o=l[d],n[o]&&f.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["a"].use(n["a"],{theme:{primary:"#357ca5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"},iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("Header"),a("Content"),a("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-toolbar-side-icon",{on:{click:function(e){return t.gohome()}}},[r("v-img",{attrs:{src:a("86cf"),contain:"",height:"30"}})],1),r("v-toolbar-title",{staticClass:"headline text-uppercase",style:{cursor:"pointer"},attrs:{exact:""},on:{click:function(e){return t.gohome()}}},[r("span",{staticClass:"font-weight-light"},[t._v("HAWINSOFT")])]),r("v-spacer"),r("menu-header")],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{dark:"",icon:""}},r),[a("v-icon",[t._v("person")])],1)]}}])},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",[a("v-icon",[t._v("person")]),t._v("felipe.e.oliveira\n      ")],1)],1),a("v-list-tile",[a("v-list-tile-title",[t._v("...")])],1)],1)],1)},u=[],d=a("2877"),f=a("6544"),p=a.n(f),v=a("8336"),m=a("132d"),h=a("8860"),x=a("ba95"),g=a("5d23"),b=a("e449"),_={},V=Object(d["a"])(_,c,u,!1,null,null,null),y=V.exports;p()(V,{VBtn:v["a"],VIcon:m["a"],VList:h["a"],VListTile:x["a"],VListTileTitle:g["b"],VMenu:b["a"]});var w=y,C=a("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{style:{cursor:"pointer"},attrs:{"text-xs-center":"",wrap:""},on:{click:function(e){return t.goLogin()}}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{attrs:{src:a("7f1b"),contain:"","max-height":"470"}})],1),r("v-flex",{attrs:{xs12:""}},[r("span",{staticClass:"title font-weight-light"},[t._v("Click here to login to the project")])])],1)],1)},j=[],E={methods:{goLogin:function(){Be.push({name:"Login"})}}},P=E,$=a("a523"),O=a("0e8f"),T=a("adda"),L=a("a722"),S=Object(d["a"])(P,k,j,!1,null,null,null),A=S.exports;p()(S,{VContainer:$["a"],VFlex:O["a"],VImg:T["a"],VLayout:L["a"]});var F=A,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-login")},q=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-card",{staticClass:"elevation-3"},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("Login")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"Email",type:"text",rules:t.isEmailValid},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",required:"",maxlength:"8",counter:8,rules:t.isPasswordValid},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("v-flex",{attrs:{xs12:"","mt-1":""}},[a("span",{staticClass:"font-weight-light"},[t._v("I forgot my password")])]),a("v-flex",{attrs:{xs12:"","mt-3":""}},[a("vue-recaptcha",{attrs:{sitekey:t.sitekey},on:{verify:t.onVerify,expired:t.onExpired}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.goNewUse()}}},[a("v-icon",{attrs:{left:""}},[t._v("person_add")]),t._v(" Register\n          ")],1),a("v-spacer"),a("v-btn",{attrs:{disabled:!t.valid,color:"success",flat:""},on:{click:t.validate}},[a("v-icon",{attrs:{left:""}},[t._v("done")]),t._v(" Ok\n          ")],1)],1)],1)],1)],1)],1)},R=[],z=a("f499"),B=a.n(z),M=a("e096"),N={components:{VueRecaptcha:M["a"]},data:function(){var t=this;return{sitekey:"6LesJKQUAAAAAPuojWPcTSEYQbDBOzmQtMTS8j_g",valid:!0,reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,form:{email:"",password:""},isEmailValid:[function(t){return!!t||"Email is required"},function(e){return t.reg.test(t.form.email)||"Invalid email"}],isPasswordValid:[function(t){return!!t||"Password is required"},function(t){return t.length>=8||"Password must be than 8 characters"}]}},methods:{onVerify:function(t){var e=this;e.status="submitting",e.$refs.recaptcha.reset(),axios.post("https://vue-recaptcha-demo.herokuapp.com/signup",this.form).then(function(t){e.sucessfulServerResponse=t.data.message}).catch(function(t){function a(t){var e;return e=t.response,e=e?t.response.data||e:t,e.message||B()(e)}e.serverError=a(t)}).then(function(){e.status=""})},onExpired:function(){console.log("Expired"),this.$refs.recaptcha.reset()},goNewUse:function(){Be.push({name:"Create"})},validate:function(){this.$refs.form.validate()&&Be.push({name:"Home"})}}},H=N,G=a("b0af"),J=a("99d9"),Y=a("12b2"),Z=a("4bd4"),U=a("9910"),W=a("2677"),Q=Object(d["a"])(H,D,R,!1,null,null,null),K=Q.exports;p()(Q,{VBtn:v["a"],VCard:G["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:Y["a"],VContainer:$["a"],VFlex:O["a"],VForm:Z["a"],VIcon:m["a"],VLayout:L["a"],VSpacer:U["a"],VTextField:W["a"]});var X=K,tt={components:{CardLogin:X}},et=tt,at=Object(d["a"])(et,I,q,!1,null,null,null),rt=at.exports,nt=rt,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("card-create")],1)},ot=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("New user")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"Email",type:"text",required:"",rules:t.isEmailValid},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",required:"",maxlength:"8",counter:8,rules:t.isPasswordValid},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"confpassword",label:"Confirm Password",id:"confpassword",type:"password",required:"",maxlength:"8",counter:8,rules:t.isConfPasswordValid},model:{value:t.form.confpassword,callback:function(e){t.$set(t.form,"confpassword",e)},expression:"form.confpassword"}}),a("v-text-field",{attrs:{"prepend-icon":"business",name:"project",label:"Company or project",type:"text",required:"",rules:t.isProjectValid},model:{value:t.form.project,callback:function(e){t.$set(t.form,"project",e)},expression:"form.project"}}),a("v-checkbox",{attrs:{rules:t.isCheck,label:"Do you agree?",required:""},model:{value:t.form.checkbox,callback:function(e){t.$set(t.form,"checkbox",e)},expression:"form.checkbox"}}),a("v-flex",{attrs:{xs12:"","mt-3":""}},[a("vue-recaptcha",{attrs:{sitekey:t.sitekey},on:{verify:t.onVerify,expired:t.onExpired}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{disabled:!t.valid,color:"success",flat:""},on:{click:t.validate}},[a("v-icon",{attrs:{left:""}},[t._v("done")]),t._v("Register\n          ")],1)],1),a("v-snackbar",{attrs:{color:t.color,timeout:t.timeout,top:"top"===t.y},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.text)+"\n          "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)},it=[],ct={components:{VueRecaptcha:M["a"]},data:function(){var t=this;return{valid:!0,sitekey:"6LeZ5KEUAAAAACpusBSqlh7MWDGXuIp42Ogkg16z",reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,form:{email:"",password:"",confpassword:"",project:"",checkbox:!1},snackbar:!1,color:"success",timeout:6e3,text:null,y:"top",isEmailValid:[function(t){return!!t||"Email is required"},function(e){return t.reg.test(t.form.email)||"Invalid email"}],isPasswordValid:[function(t){return!!t||"Password is required"},function(t){return t.length>=8||"Password must be than 8 characters"}],isConfPasswordValid:[function(t){return!!t||"Confirm password is required"},function(t){return t.length>=8||"Confirm password must be than 8 characters"},function(e){return t.form.password===t.form.confpassword||"password and confirm password divergent"}],isProjectValid:[function(t){return!!t||"Project is required"}],isCheck:[function(t){return!!t||"You must agree to continue"}]}},methods:{onVerify:function(t){var e=this;e.status="submitting",e.$refs.recaptcha.reset(),axios.post("https://vue-recaptcha-demo.herokuapp.com/signup",this.form).then(function(t){e.sucessfulServerResponse=t.data.message}).catch(function(t){function a(t){var e;return e=t.response,e=e?t.response.data||e:t,e.message||B()(e)}e.serverError=a(t)}).then(function(){e.status=""})},onExpired:function(){console.log("Expired"),this.$refs.recaptcha.reset()},validate:function(){this.$refs.form.validate()&&(this.text="Successfully submitted registration",this.snackbar=!0)}}},ut=ct,dt=a("ac7c"),ft=a("2db4"),pt=Object(d["a"])(ut,lt,it,!1,null,null,null),vt=pt.exports;p()(pt,{VBtn:v["a"],VCard:G["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:Y["a"],VCheckbox:dt["a"],VContainer:$["a"],VFlex:O["a"],VForm:Z["a"],VIcon:m["a"],VLayout:L["a"],VSnackbar:ft["a"],VSpacer:U["a"],VTextField:W["a"]});var mt=vt,ht={components:{CardCreate:mt}},xt=ht,gt=Object(d["a"])(xt,st,ot,!1,null,null,null),bt=gt.exports;p()(gt,{VLayout:L["a"]});var _t=bt,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("card-group"),a("card-download")],1)},yt=[],wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("Groups")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-left",staticStyle:{width:"5%"}},[a("v-btn",{attrs:{flat:"",icon:"",color:"green"},on:{click:function(a){return t.goProcess(e.item.id)}}},[a("v-icon",[t._v("input")])],1)],1)]}}])})],1)],1)],1)},Ct=[],kt={data:function(){return{headers:[{text:"Names",align:"left",sortable:!0,value:"name"},{text:"Date",align:"left",value:"calories"},{text:"",sortable:!1,align:"",value:""}],desserts:[{id:1,name:"Frozen Yogurt",calories:159},{id:2,name:"Ice cream sandwich",calories:237},{id:3,name:"Eclair",calories:262},{id:4,name:"Cupcake",calories:305},{id:5,name:"Gingerbread",calories:356},{id:6,name:"Jelly bean",calories:375},{id:7,name:"Lollipop",calories:392}]}},methods:{goProcess:function(t){Be.push({name:"Process",params:{Pid:t}})}}},jt=kt,Et=a("8fea"),Pt=Object(d["a"])(jt,wt,Ct,!1,null,null,null),$t=Pt.exports;p()(Pt,{VBtn:v["a"],VCard:G["a"],VCardText:J["b"],VCardTitle:Y["a"],VDataTable:Et["a"],VFlex:O["a"],VIcon:m["a"]});var Ot=$t,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{style:{cursor:"pointer"},attrs:{xs12:"","py-2":""},on:{click:function(e){return t.goClient()}}},[a("v-alert",{attrs:{value:!0,type:"success",icon:"cloud_download"}},[t._v("DOWNLOAD CLIENT")])],1)},Lt=[],St={methods:{goClient:function(){Be.push({name:"Client"})}}},At=St,Ft=a("0798"),It=Object(d["a"])(At,Tt,Lt,!1,null,null,null),qt=It.exports;p()(It,{VAlert:Ft["a"],VFlex:O["a"]});var Dt=qt,Rt={components:{CardGroup:Ot,CardDownload:Dt}},zt=Rt,Bt=Object(d["a"])(zt,Vt,yt,!1,null,null,null),Mt=Bt.exports;p()(Bt,{VContainer:$["a"]});var Nt=Mt,Ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-flex",[r("v-img",{staticClass:"my-3",attrs:{src:a("62f1"),contain:"",height:"200"}})],1),r("v-flex",[r("v-btn",{attrs:{flat:"",large:"",color:"success"}},[t._v("Download")])],1)],1)},Gt=[],Jt={},Yt=Jt,Zt=Object(d["a"])(Yt,Ht,Gt,!1,null,null,null),Ut=Zt.exports;p()(Zt,{VBtn:v["a"],VContainer:$["a"],VFlex:O["a"],VImg:T["a"]});var Wt=Ut,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("card-process")],1)},Kt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("Process")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-right",staticStyle:{width:"5%"}},[a("v-btn",{attrs:{flat:"",icon:"",color:"green"},on:{click:function(a){return t.goRun(e.item.id)}}},[a("v-icon",[t._v("input")])],1)],1)]}}])})],1)],1)],1)],1)],1)},te=[],ee={data:function(){return{headers:[{text:"Names",align:"left",sortable:!0,value:"name"},{text:"Date",align:"left",value:"calories"},{text:"",sortable:!1,align:"",value:""}],desserts:[{id:1,name:"Frozen Yogurt",calories:159},{id:2,name:"Ice cream sandwich",calories:237},{id:3,name:"Eclair",calories:262},{id:4,name:"Cupcake",calories:305},{id:5,name:"Gingerbread",calories:356},{id:6,name:"Jelly bean",calories:375},{id:7,name:"Lollipop",calories:392}]}},methods:{goRun:function(t){Be.push({name:"Run",params:{Pid:t}})}}},ae=ee,re=Object(d["a"])(ae,Xt,te,!1,null,null,null),ne=re.exports;p()(re,{VBtn:v["a"],VCard:G["a"],VCardText:J["b"],VCardTitle:Y["a"],VContainer:$["a"],VDataTable:Et["a"],VFlex:O["a"],VIcon:m["a"],VLayout:L["a"]});var se=ne,oe={components:{CardProcess:se}},le=oe,ie=Object(d["a"])(le,Qt,Kt,!1,null,null,null),ce=ie.exports;p()(ie,{VLayout:L["a"]});var ue=ce,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"py-3 px-2",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"px-1 py-1",attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("time-line")],1),a("v-flex",{staticClass:"px-1 py-1",attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("card-run")],1)],1)},fe=[],pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-3"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("[Process name]")])],1),a("div",[a("v-btn",{attrs:{flat:"",small:"",color:"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("save_alt")]),t._v("Cypress\n    ")],1),a("v-btn",{attrs:{flat:"",small:"",color:"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("settings_system_daydream")]),t._v("RPA\n    ")],1)],1),a("v-card-text",[a("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.items,function(e,r){return a("v-timeline-item",{key:r,attrs:{color:"success",small:"","fill-dot":"",icon:"check"}},[a("v-layout",{attrs:{"pt-3":""}},[a("v-flex",{attrs:{xs4:""}},[a("strong",[t._v("Selection:")]),a("div",{staticClass:"caption ellipsis"},[t._v("[Selection]")])]),a("v-flex",[a("strong",[t._v("Event:")]),a("div",{staticClass:"caption ellipsis"},[t._v("click")])]),a("v-flex",[a("strong",[t._v("Data:")]),a("div",{staticClass:"caption ellipsis"},[t._v("Mobile App")])])],1)],1)}),1)],1)],1)},ve=[],me={data:function(){return{items:[{color:"red lighten-2",icon:"mdi-star"},{color:"purple darken-1",icon:"mdi-book-variant"},{color:"green lighten-1",icon:"mdi-airballoon"},{color:"indigo",icon:"mdi-buffer"}]}}},he=me,xe=a("8414"),ge=a("1e06"),be=Object(d["a"])(he,pe,ve,!1,null,null,null),_e=be.exports;p()(be,{VBtn:v["a"],VCard:G["a"],VCardText:J["b"],VCardTitle:Y["a"],VFlex:O["a"],VIcon:m["a"],VLayout:L["a"],VTimeline:xe["a"],VTimelineItem:ge["a"]});var Ve=_e,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-3"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("settings_system_daydream")]),a("span",{staticClass:"title font-weight-light"},[t._v("Robotic process automation")])],1),a("v-card-text")],1)},we=[],Ce={},ke=Ce,je=Object(d["a"])(ke,ye,we,!1,null,null,null),Ee=je.exports;p()(je,{VCard:G["a"],VCardText:J["b"],VCardTitle:Y["a"],VIcon:m["a"]});var Pe=Ee,$e={components:{TimeLine:Ve,CardRun:Pe}},Oe=$e,Te=Object(d["a"])(Oe,de,fe,!1,null,null,null),Le=Te.exports;p()(Te,{VFlex:O["a"],VLayout:L["a"]});var Se=Le,Ae=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"text-xs-center":"",wrap:"","ma-4":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{attrs:{src:a("99e8"),contain:"",height:"350"}})],1)],1)},Fe=[],Ie={},qe=Ie,De=Object(d["a"])(qe,Ae,Fe,!1,null,null,null),Re=De.exports;p()(De,{VFlex:O["a"],VImg:T["a"],VLayout:L["a"]});var ze=Re;r["a"].use(C["a"]);var Be=new C["a"]({routes:[{path:"/",name:"Public",component:F},{path:"/login",name:"Login",component:nt},{path:"/home",name:"Home",component:Nt},{path:"/process/:Pid",name:"Process",component:ue},{path:"/run/:Pid",name:"Run",component:Se},{path:"/client",name:"Client",component:Wt},{path:"/newuser",name:"Create",component:_t},{path:"*",name:"NotFound",component:ze}]}),Me={components:{MenuHeader:w},methods:{gohome:function(){Be.push({name:"Home"})}}},Ne=Me,He=a("71d9"),Ge=a("706c"),Je=a("2a7f"),Ye=Object(d["a"])(Ne,l,i,!1,null,null,null),Ze=Ye.exports;p()(Ye,{VImg:T["a"],VSpacer:U["a"],VToolbar:He["a"],VToolbarSideIcon:Ge["a"],VToolbarTitle:Je["a"]});var Ue=Ze,We=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("router-view")],1)},Qe=[],Ke={},Xe=Ke,ta=a("549c"),ea=Object(d["a"])(Xe,We,Qe,!1,null,null,null),aa=ea.exports;p()(ea,{VContent:ta["a"]});var ra=aa,na=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"pa-3",attrs:{color:"#3c8dbc"}},[a("v-spacer"),a("div",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])],1)},sa=[],oa=a("553a"),la={},ia=Object(d["a"])(la,na,sa,!1,null,null,null),ca=ia.exports;p()(ia,{VFooter:oa["a"],VSpacer:U["a"]});var ua=ca,da={name:"App",components:{Header:Ue,Content:ra,Footer:ua}},fa=da,pa=a("7496"),va=Object(d["a"])(fa,s,o,!1,null,null,null),ma=va.exports;p()(va,{VApp:pa["a"]}),r["a"].config.productionTip=!1,new r["a"]({router:Be,render:function(t){return t(ma)}}).$mount("#app")},"62f1":function(t,e,a){t.exports=a.p+"img/hawinsoft.468c18e9.png"},"7f1b":function(t,e,a){t.exports=a.p+"img/hawinsoft-public.07a2c0ee.png"},"86cf":function(t,e,a){t.exports=a.p+"img/hawinsoft-white.5b26119c.png"},"99e8":function(t,e,a){t.exports=a.p+"img/hawinsoft-not-found.953dd785.png"}});
//# sourceMappingURL=app.f5ddaf97.js.map