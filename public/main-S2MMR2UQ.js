import{a as D}from"./chunk-K2Y2NB2L.js";import{a as h,b as g,c as M,d as A,e as v,g as b}from"./chunk-AQIQSVC7.js";import{b as f,c as C}from"./chunk-HUNMWK37.js";import{Ab as l,Ia as s,O as m,Sb as d,X as p,cb as u,t as a,zb as c}from"./chunk-5XISTBJQ.js";var E=(e,r)=>{let t=p(D),i=p(v);return t.validarToken().pipe(a(o=>o&&r.url==="/login"?i.createUrlTree(["/"]):o||i.createUrlTree(["/login"])),m(o=>{o?r.url==="/login"&&console.log('Authenticated user on "/" - Redirecting to /compras'):console.log("Access denied - Redirecting to login")}))};var R=[{path:"dashboard",loadComponent:()=>import("./chunk-36HK6GYO.js"),canActivate:[E],children:[{path:"administracion",title:"Administraci\xF3n",loadComponent:()=>import("./chunk-NTMIZDGZ.js")},{path:"reportes",title:"Reportes",loadComponent:()=>import("./chunk-IH45FGLU.js")},{path:"estadisticas",title:"Estad\xEDsticas",loadComponent:()=>import("./chunk-OZZGLO4B.js")},{path:"charts",title:"Estad\xEDsticas",loadComponent:()=>import("./chunk-2EE6XKSH.js")},{path:"planificacion",title:"Planificaci\xF3n",loadComponent:()=>import("./chunk-2SM6SATG.js")},{path:"",redirectTo:"reportes",pathMatch:"full"}]},{path:"login",title:"Mystic Connect",loadComponent:()=>import("./chunk-A2HNU2ZR.js")},{path:"",redirectTo:"/dashboard",pathMatch:"full"}];function $(e){let r=e,t=Math.floor(Math.abs(e)),i=e.toString().replace(/^[^.]*\.?/,"").length,o=parseInt(e.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return r===1?1:o===0&&t!==0&&t%1e6===0&&i===0||!(o>=0&&o<=5)?4:5}var y=["es",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],EGP:[],ESP:["\u20A7"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],THB:["\u0E3F"],TWD:[void 0,"NT$"],USD:["US$","$"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",$];d(y);var N={providers:[c({eventCoalescing:!0}),b(R),M(g()),f(C()),{provide:l,useValue:"es"}]};var n=class e{title="MysticConnect";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&u(0,"router-outlet")},dependencies:[A],encapsulation:2})};h(n,N).catch(e=>console.error(e));