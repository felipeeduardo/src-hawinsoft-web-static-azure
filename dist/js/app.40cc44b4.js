(function(t){function e(e){for(var n,o,s=e[0],i=e[1],c=e[2],d=0,v=[];d<s.length;d++)o=s[d],r[o]&&v.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(v.length)v.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{theme:{primary:"#357ca5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"},iconfont:"md"});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("Header"),a("Content"),a("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[n("v-toolbar-side-icon",{on:{click:function(e){return t.gohome()}}},[n("v-img",{attrs:{src:a("86cf"),contain:"",height:"30"}})],1),n("v-toolbar-title",{staticClass:"headline text-uppercase",style:{cursor:"pointer"},attrs:{exact:""},on:{click:function(e){return t.gohome()}}},[n("span",{staticClass:"font-weight-light"},[t._v("HAWINSOFT")])]),n("v-spacer"),n("menu-header")],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{dark:"",icon:""}},n),[a("v-icon",[t._v("person")])],1)]}}])},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",[a("v-icon",[t._v("person")]),t._v("felipe.e.oliveira\n      ")],1)],1),a("v-list-tile",[a("v-list-tile-title",[t._v("...")])],1)],1)],1)},u=[],d=a("2877"),v=a("6544"),p=a.n(v),f=a("8336"),m=a("132d"),x=a("8860"),h=a("ba95"),g=a("5d23"),b=a("e449"),_={},V=Object(d["a"])(_,c,u,!1,null,null,null),C=V.exports;p()(V,{VBtn:f["a"],VIcon:m["a"],VList:x["a"],VListTile:h["a"],VListTileTitle:g["b"],VMenu:b["a"]});var w=C,y=a("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{attrs:{src:a("7f1b"),contain:"","max-height":"450"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{flat:"",large:"",color:"primary"},on:{click:function(e){return t.goLogin()}}},[t._v("Login in project")])],1)],1)],1)},O=[],T={methods:{goLogin:function(){Oe.push({name:"Login"})}}},E=T,F=a("a523"),L=a("0e8f"),$=a("adda"),k=a("a722"),P=Object(d["a"])(E,j,O,!1,null,null,null),S=P.exports;p()(P,{VBtn:f["a"],VContainer:F["a"],VFlex:L["a"],VImg:$["a"],VLayout:k["a"]});var I=S,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-login")},D=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-card",{staticClass:"elevation-3"},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("Login")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"Email",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"}})],1),a("span",{staticClass:"font-weight-light"},[t._v("I forgot my password")])],1),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.goNewUse()}}},[a("v-icon",[t._v("person_add")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"success",flat:""}},[a("v-icon",[t._v("done")])],1)],1)],1)],1)],1)],1)},A=[],H={methods:{goNewUse:function(){Oe.push({name:"Create"})}}},M=H,G=a("b0af"),J=a("99d9"),Y=a("12b2"),z=a("4bd4"),U=a("9910"),W=a("2677"),q=Object(d["a"])(M,N,A,!1,null,null,null),K=q.exports;p()(q,{VBtn:f["a"],VCard:G["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:Y["a"],VContainer:F["a"],VFlex:L["a"],VForm:z["a"],VIcon:m["a"],VLayout:k["a"],VSpacer:U["a"],VTextField:W["a"]});var Q=K,R={components:{CardLogin:Q}},X=R,Z=Object(d["a"])(X,B,D,!1,null,null,null),tt=Z.exports,et=tt,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("card-create")],1)},nt=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("New user")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"Email",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Confirm Password",id:"password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"announcement",name:"email",label:"Project",type:"text"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",flat:""}},[a("v-icon",[t._v("person_add")])],1)],1)],1)],1)],1)],1)},lt=[],ot={data:function(){return{}}},st=ot,it=Object(d["a"])(st,rt,lt,!1,null,null,null),ct=it.exports;p()(it,{VBtn:f["a"],VCard:G["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:Y["a"],VContainer:F["a"],VFlex:L["a"],VForm:z["a"],VIcon:m["a"],VLayout:k["a"],VSpacer:U["a"],VTextField:W["a"]});var ut=ct,dt={components:{CardCreate:ut}},vt=dt,pt=Object(d["a"])(vt,at,nt,!1,null,null,null),ft=pt.exports;p()(pt,{VLayout:k["a"]});var mt=ft,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("card-group"),a("content-admin")],1)},ht=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("Groups")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-left",staticStyle:{width:"5%"}},[a("v-btn",{attrs:{flat:"",icon:"",color:"green"},on:{click:function(a){return t.goProcess(e.item.id)}}},[a("v-icon",[t._v("input")])],1)],1)]}}])})],1)],1)],1)},bt=[],_t={data:function(){return{headers:[{text:"Names",align:"left",sortable:!0,value:"name"},{text:"Date",align:"left",value:"calories"},{text:"",sortable:!1,align:"",value:""}],desserts:[{id:1,name:"Frozen Yogurt",calories:159},{id:2,name:"Ice cream sandwich",calories:237},{id:3,name:"Eclair",calories:262},{id:4,name:"Cupcake",calories:305},{id:5,name:"Gingerbread",calories:356},{id:6,name:"Jelly bean",calories:375},{id:7,name:"Lollipop",calories:392}]}},methods:{goProcess:function(t){Oe.push({name:"Process",params:{Pid:t}})}}},Vt=_t,Ct=a("8fea"),wt=Object(d["a"])(Vt,gt,bt,!1,null,null,null),yt=wt.exports;p()(wt,{VBtn:f["a"],VCard:G["a"],VCardText:J["b"],VCardTitle:Y["a"],VDataTable:Ct["a"],VFlex:L["a"],VIcon:m["a"]});var jt=yt,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("card-download"),a("card-settings")],1)},Tt=[],Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs6:"","py-2":""}},[a("v-card",{staticClass:"elevation-2",style:{cursor:"pointer"},on:{click:function(e){return t.goClient()}}},[a("v-card-title",[a("v-icon",{attrs:{left:"",color:"primary"}},[t._v("cloud_download")]),a("span",{staticClass:"title font-weight-light"},[t._v("Client")])],1)],1)],1)},Ft=[],Lt={methods:{goClient:function(){Oe.push({name:"Client"})}}},$t=Lt,kt=Object(d["a"])($t,Et,Ft,!1,null,null,null),Pt=kt.exports;p()(kt,{VCard:G["a"],VCardTitle:Y["a"],VFlex:L["a"],VIcon:m["a"]});var St=Pt,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs6:"","py-2":""}},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",[a("v-icon",{attrs:{left:"",color:"primary"}},[t._v("settings")]),a("span",{staticClass:"title font-weight-light"},[t._v("Setting")])],1)],1)],1)},Bt=[],Dt={},Nt=Dt,At=Object(d["a"])(Nt,It,Bt,!1,null,null,null),Ht=At.exports;p()(At,{VCard:G["a"],VCardTitle:Y["a"],VFlex:L["a"],VIcon:m["a"]});var Mt=Ht,Gt={components:{CardDownload:St,CardSettings:Mt}},Jt=Gt,Yt=Object(d["a"])(Jt,Ot,Tt,!1,null,null,null),zt=Yt.exports;p()(Yt,{VLayout:k["a"]});var Ut=zt,Wt={components:{CardGroup:jt,ContentAdmin:Ut}},qt=Wt,Kt=Object(d["a"])(qt,xt,ht,!1,null,null,null),Qt=Kt.exports;p()(Kt,{VContainer:F["a"]});var Rt=Qt,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("v-img",{staticClass:"my-3",attrs:{src:a("62f1"),contain:"",height:"200"}})],1),n("v-flex",[n("v-btn",{attrs:{flat:"",large:"",color:"success"}},[t._v("Download")])],1)],1)},Zt=[],te={},ee=te,ae=Object(d["a"])(ee,Xt,Zt,!1,null,null,null),ne=ae.exports;p()(ae,{VBtn:f["a"],VContainer:F["a"],VFlex:L["a"],VImg:$["a"]});var re=ne,le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("card-process")],1)},oe=[],se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",{staticClass:"elevation-4"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"primary"}},[t._v("folder")]),a("span",{staticClass:"title font-weight-light"},[t._v("Process")])],1),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-right",staticStyle:{width:"5%"}},[a("v-btn",{attrs:{flat:"",icon:"",color:"green"}},[a("v-icon",[t._v("cloud_download")])],1)],1)]}}])})],1)],1)],1)],1)],1)},ie=[],ce={data:function(){return{headers:[{text:"Names",align:"left",sortable:!0,value:"name"},{text:"Date",align:"left",value:"calories"},{text:"",sortable:!1,align:"",value:""}],desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392}]}}},ue=ce,de=Object(d["a"])(ue,se,ie,!1,null,null,null),ve=de.exports;p()(de,{VBtn:f["a"],VCard:G["a"],VCardText:J["b"],VCardTitle:Y["a"],VContainer:F["a"],VDataTable:Ct["a"],VFlex:L["a"],VIcon:m["a"],VLayout:k["a"]});var pe=ve,fe={components:{CardProcess:pe}},me=fe,xe=Object(d["a"])(me,le,oe,!1,null,null,null),he=xe.exports;p()(xe,{VLayout:k["a"]});var ge=he,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"text-xs-center":"",wrap:"","ma-4":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{attrs:{src:a("99e8"),contain:"",height:"350"}})],1)],1)},_e=[],Ve={},Ce=Ve,we=Object(d["a"])(Ce,be,_e,!1,null,null,null),ye=we.exports;p()(we,{VFlex:L["a"],VImg:$["a"],VLayout:k["a"]});var je=ye;n["a"].use(y["a"]);var Oe=new y["a"]({routes:[{path:"/",name:"Public",component:I},{path:"/login",name:"Login",component:et},{path:"/home",name:"Home",component:Rt},{path:"/process/:Pid",name:"Process",component:ge},{path:"/client",name:"Client",component:re},{path:"/newuser",name:"Create",component:mt},{path:"*",name:"NotFound",component:je}]}),Te={components:{MenuHeader:w},methods:{gohome:function(){Oe.push({name:"Home"})}}},Ee=Te,Fe=a("71d9"),Le=a("706c"),$e=a("2a7f"),ke=Object(d["a"])(Ee,s,i,!1,null,null,null),Pe=ke.exports;p()(ke,{VImg:$["a"],VSpacer:U["a"],VToolbar:Fe["a"],VToolbarSideIcon:Le["a"],VToolbarTitle:$e["a"]});var Se=Pe,Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("router-view")],1)},Be=[],De={},Ne=De,Ae=a("549c"),He=Object(d["a"])(Ne,Ie,Be,!1,null,null,null),Me=He.exports;p()(He,{VContent:Ae["a"]});var Ge=Me,Je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"pa-3",attrs:{color:"#3c8dbc"}},[a("v-spacer"),a("div",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])],1)},Ye=[],ze=a("553a"),Ue={},We=Object(d["a"])(Ue,Je,Ye,!1,null,null,null),qe=We.exports;p()(We,{VFooter:ze["a"],VSpacer:U["a"]});var Ke=qe,Qe={name:"App",components:{Header:Se,Content:Ge,Footer:Ke}},Re=Qe,Xe=a("7496"),Ze=Object(d["a"])(Re,l,o,!1,null,null,null),ta=Ze.exports;p()(Ze,{VApp:Xe["a"]}),n["a"].config.productionTip=!1,new n["a"]({router:Oe,render:function(t){return t(ta)}}).$mount("#app")},"62f1":function(t,e,a){t.exports=a.p+"img/hawinsoft.468c18e9.png"},"7f1b":function(t,e,a){t.exports=a.p+"img/hawinsoft-public.74afb3a0.png"},"86cf":function(t,e,a){t.exports=a.p+"img/hawinsoft-white.5b26119c.png"},"99e8":function(t,e,a){t.exports=a.p+"img/hawinsoft-not-found.953dd785.png"}});
//# sourceMappingURL=app.40cc44b4.js.map