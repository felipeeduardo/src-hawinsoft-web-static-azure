(function(t){function e(e){for(var n,o,s=e[0],i=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],r[o]&&p.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{theme:{primary:"#357ca5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"},iconfont:"md"});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("Header"),a("Content"),a("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[n("v-toolbar-side-icon",{on:{click:function(e){return t.gohome()}}},[n("v-img",{attrs:{src:a("86cf"),contain:"",height:"30"}})],1),n("v-toolbar-title",{staticClass:"headline text-uppercase",style:{cursor:"pointer"},attrs:{exact:""},on:{click:function(e){return t.gohome()}}},[n("span",{staticClass:"font-weight-light"},[t._v("HAWINSOFT")])]),n("v-spacer"),n("menu-header")],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{dark:"",icon:""}},n),[a("v-icon",[t._v("person")])],1)]}}])},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",[a("v-icon",[t._v("person")]),t._v("felipe.e.oliveira\n      ")],1)],1),a("v-list-tile",[a("v-list-tile-title",[t._v("...")])],1)],1)],1)},u=[],d=a("2877"),p=a("6544"),v=a.n(p),f=a("8336"),m=a("132d"),x=a("8860"),h=a("ba95"),g=a("5d23"),b=a("e449"),_={},V=Object(d["a"])(_,c,u,!1,null,null,null),C=V.exports;v()(V,{VBtn:f["a"],VIcon:m["a"],VList:x["a"],VListTile:h["a"],VListTileTitle:g["b"],VMenu:b["a"]});var w=C,y=a("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{style:{cursor:"pointer"},attrs:{"text-xs-center":"",wrap:""},on:{click:function(e){return t.goLogin()}}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{attrs:{src:a("7f1b"),contain:"","max-height":"500"}})],1),n("v-flex",{attrs:{xs12:""}},[n("span",{staticClass:"title font-weight-light"},[t._v("Login in project")])])],1)],1)},O=[],T={methods:{goLogin:function(){Te.push({name:"Login"})}}},E=T,F=a("a523"),L=a("0e8f"),k=a("adda"),$=a("a722"),P=Object(d["a"])(E,j,O,!1,null,null,null),S=P.exports;v()(P,{VContainer:F["a"],VFlex:L["a"],VImg:k["a"],VLayout:$["a"]});var I=S,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-login")},B=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-card",{staticClass:"elevation-3"},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("Login")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"Email",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"}})],1),a("span",{staticClass:"font-weight-light"},[t._v("I forgot my password")])],1),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.goNewUse()}}},[a("v-icon",[t._v("person_add")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"success",flat:""}},[a("v-icon",[t._v("done")])],1)],1)],1)],1)],1)],1)},N=[],G={methods:{goNewUse:function(){Te.push({name:"Create"})}}},H=G,M=a("b0af"),J=a("99d9"),z=a("12b2"),R=a("4bd4"),U=a("9910"),Y=a("2677"),W=Object(d["a"])(H,D,N,!1,null,null,null),Z=W.exports;v()(W,{VBtn:f["a"],VCard:M["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:z["a"],VContainer:F["a"],VFlex:L["a"],VForm:R["a"],VIcon:m["a"],VLayout:$["a"],VSpacer:U["a"],VTextField:Y["a"]});var q=Z,K={components:{CardLogin:q}},Q=K,X=Object(d["a"])(Q,A,B,!1,null,null,null),tt=X.exports,et=tt,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("card-create")],1)},nt=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("New user")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"Email",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"confpassword",label:"Confirm Password",id:"confpassword",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"announcement",name:"email",label:"Project",type:"text"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("vue-recaptcha",{attrs:{sitekey:"6LdgGlcUAAAAAFIsWvC1zj-34STRZkLGBRcTArdl"}},[a("v-btn",{attrs:{color:"success",flat:""}},[a("v-icon",[t._v("person_add")])],1)],1)],1)],1)],1)],1)],1)},lt=[],ot=a("e096"),st={components:{VueRecaptcha:ot["a"]}},it=st,ct=Object(d["a"])(it,rt,lt,!1,null,null,null),ut=ct.exports;v()(ct,{VBtn:f["a"],VCard:M["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:z["a"],VContainer:F["a"],VFlex:L["a"],VForm:R["a"],VIcon:m["a"],VLayout:$["a"],VSpacer:U["a"],VTextField:Y["a"]});var dt=ut,pt={components:{CardCreate:dt}},vt=pt,ft=Object(d["a"])(vt,at,nt,!1,null,null,null),mt=ft.exports;v()(ft,{VLayout:$["a"]});var xt=mt,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("card-group"),a("content-admin")],1)},gt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("Groups")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-left",staticStyle:{width:"5%"}},[a("v-btn",{attrs:{flat:"",icon:"",color:"green"},on:{click:function(a){return t.goProcess(e.item.id)}}},[a("v-icon",[t._v("input")])],1)],1)]}}])})],1)],1)],1)},_t=[],Vt={data:function(){return{headers:[{text:"Names",align:"left",sortable:!0,value:"name"},{text:"Date",align:"left",value:"calories"},{text:"",sortable:!1,align:"",value:""}],desserts:[{id:1,name:"Frozen Yogurt",calories:159},{id:2,name:"Ice cream sandwich",calories:237},{id:3,name:"Eclair",calories:262},{id:4,name:"Cupcake",calories:305},{id:5,name:"Gingerbread",calories:356},{id:6,name:"Jelly bean",calories:375},{id:7,name:"Lollipop",calories:392}]}},methods:{goProcess:function(t){Te.push({name:"Process",params:{Pid:t}})}}},Ct=Vt,wt=a("8fea"),yt=Object(d["a"])(Ct,bt,_t,!1,null,null,null),jt=yt.exports;v()(yt,{VBtn:f["a"],VCard:M["a"],VCardText:J["b"],VCardTitle:z["a"],VDataTable:wt["a"],VFlex:L["a"],VIcon:m["a"]});var Ot=jt,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("card-download"),a("card-settings")],1)},Et=[],Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs6:"","py-2":""}},[a("v-card",{staticClass:"elevation-2",style:{cursor:"pointer"},on:{click:function(e){return t.goClient()}}},[a("v-card-title",[a("v-icon",{attrs:{left:"",color:"primary"}},[t._v("cloud_download")]),a("span",{staticClass:"title font-weight-light"},[t._v("Client")])],1)],1)],1)},Lt=[],kt={methods:{goClient:function(){Te.push({name:"Client"})}}},$t=kt,Pt=Object(d["a"])($t,Ft,Lt,!1,null,null,null),St=Pt.exports;v()(Pt,{VCard:M["a"],VCardTitle:z["a"],VFlex:L["a"],VIcon:m["a"]});var It=St,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs6:"","py-2":""}},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",[a("v-icon",{attrs:{left:"",color:"primary"}},[t._v("settings")]),a("span",{staticClass:"title font-weight-light"},[t._v("Setting")])],1)],1)],1)},Bt=[],Dt={},Nt=Dt,Gt=Object(d["a"])(Nt,At,Bt,!1,null,null,null),Ht=Gt.exports;v()(Gt,{VCard:M["a"],VCardTitle:z["a"],VFlex:L["a"],VIcon:m["a"]});var Mt=Ht,Jt={components:{CardDownload:It,CardSettings:Mt}},zt=Jt,Rt=Object(d["a"])(zt,Tt,Et,!1,null,null,null),Ut=Rt.exports;v()(Rt,{VLayout:$["a"]});var Yt=Ut,Wt={components:{CardGroup:Ot,ContentAdmin:Yt}},Zt=Wt,qt=Object(d["a"])(Zt,ht,gt,!1,null,null,null),Kt=qt.exports;v()(qt,{VContainer:F["a"]});var Qt=Kt,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("v-img",{staticClass:"my-3",attrs:{src:a("62f1"),contain:"",height:"200"}})],1),n("v-flex",[n("v-btn",{attrs:{flat:"",large:"",color:"success"}},[t._v("Download")])],1)],1)},te=[],ee={},ae=ee,ne=Object(d["a"])(ae,Xt,te,!1,null,null,null),re=ne.exports;v()(ne,{VBtn:f["a"],VContainer:F["a"],VFlex:L["a"],VImg:k["a"]});var le=re,oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("card-process")],1)},se=[],ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("Process")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-right",staticStyle:{width:"5%"}},[a("v-btn",{attrs:{flat:"",icon:"",color:"green"}},[a("v-icon",[t._v("cloud_download")])],1)],1)]}}])})],1)],1)],1)],1)],1)},ce=[],ue={data:function(){return{headers:[{text:"Names",align:"left",sortable:!0,value:"name"},{text:"Date",align:"left",value:"calories"},{text:"",sortable:!1,align:"",value:""}],desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392}]}}},de=ue,pe=Object(d["a"])(de,ie,ce,!1,null,null,null),ve=pe.exports;v()(pe,{VBtn:f["a"],VCard:M["a"],VCardText:J["b"],VCardTitle:z["a"],VContainer:F["a"],VDataTable:wt["a"],VFlex:L["a"],VIcon:m["a"],VLayout:$["a"]});var fe=ve,me={components:{CardProcess:fe}},xe=me,he=Object(d["a"])(xe,oe,se,!1,null,null,null),ge=he.exports;v()(he,{VLayout:$["a"]});var be=ge,_e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"text-xs-center":"",wrap:"","ma-4":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{attrs:{src:a("99e8"),contain:"",height:"350"}})],1)],1)},Ve=[],Ce={},we=Ce,ye=Object(d["a"])(we,_e,Ve,!1,null,null,null),je=ye.exports;v()(ye,{VFlex:L["a"],VImg:k["a"],VLayout:$["a"]});var Oe=je;n["a"].use(y["a"]);var Te=new y["a"]({routes:[{path:"/",name:"Public",component:I},{path:"/login",name:"Login",component:et},{path:"/home",name:"Home",component:Qt},{path:"/process/:Pid",name:"Process",component:be},{path:"/client",name:"Client",component:le},{path:"/newuser",name:"Create",component:xt},{path:"*",name:"NotFound",component:Oe}]}),Ee={components:{MenuHeader:w},methods:{gohome:function(){Te.push({name:"Home"})}}},Fe=Ee,Le=a("71d9"),ke=a("706c"),$e=a("2a7f"),Pe=Object(d["a"])(Fe,s,i,!1,null,null,null),Se=Pe.exports;v()(Pe,{VImg:k["a"],VSpacer:U["a"],VToolbar:Le["a"],VToolbarSideIcon:ke["a"],VToolbarTitle:$e["a"]});var Ie=Se,Ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("router-view")],1)},Be=[],De={},Ne=De,Ge=a("549c"),He=Object(d["a"])(Ne,Ae,Be,!1,null,null,null),Me=He.exports;v()(He,{VContent:Ge["a"]});var Je=Me,ze=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"pa-3",attrs:{color:"#3c8dbc"}},[a("v-spacer"),a("div",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])],1)},Re=[],Ue=a("553a"),Ye={},We=Object(d["a"])(Ye,ze,Re,!1,null,null,null),Ze=We.exports;v()(We,{VFooter:Ue["a"],VSpacer:U["a"]});var qe=Ze,Ke={name:"App",components:{Header:Ie,Content:Je,Footer:qe}},Qe=Ke,Xe=a("7496"),ta=Object(d["a"])(Qe,l,o,!1,null,null,null),ea=ta.exports;v()(ta,{VApp:Xe["a"]}),n["a"].config.productionTip=!1,new n["a"]({router:Te,render:function(t){return t(ea)}}).$mount("#app")},"62f1":function(t,e,a){t.exports=a.p+"img/hawinsoft.468c18e9.png"},"7f1b":function(t,e,a){t.exports=a.p+"img/hawinsoft-public.07a2c0ee.png"},"86cf":function(t,e,a){t.exports=a.p+"img/hawinsoft-white.5b26119c.png"},"99e8":function(t,e,a){t.exports=a.p+"img/hawinsoft-not-found.953dd785.png"}});
//# sourceMappingURL=app.122e3f62.js.map