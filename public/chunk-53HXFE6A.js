import{a as H,b as J}from"./chunk-DHG24SYD.js";import{d as A,g as B,i as D}from"./chunk-AWU2QWKU.js";import{c as W,d as j,g as O,h as $,i as q,j as z}from"./chunk-UIEJ76RJ.js";import"./chunk-RHUNMPRV.js";import{a as G}from"./chunk-XLRU7ME7.js";import{$a as h,Aa as y,Ia as S,Na as E,Wa as s,Wb as L,X as u,Ya as M,Za as x,Zb as N,_a as C,ab as i,bb as n,cb as m,da as f,db as P,ea as _,eb as R,fb as p,ib as o,jb as d,lb as T,nb as w,ob as I,pb as k,sb as g,ub as V,wb as F,za as r}from"./chunk-6AB4XWDR.js";var K=t=>["/dashboard/promotora",t],Q=t=>["/dashboard/detalle",t];function U(t,a){if(t&1&&(i(0,"option",7),o(1),n()),t&2){let e=a.$implicit,l=a.$index;s("value",l),r(),d(e.mes)}}function X(t,a){if(t&1&&(i(0,"tr")(1,"td"),o(2),V(3,"date"),n(),i(4,"td")(5,"a",9),o(6),n()(),i(7,"td"),o(8),n(),i(9,"td"),o(10),n(),i(11,"td")(12,"button",10)(13,"span",11),m(14,"i",12),n(),i(15,"span"),o(16,"Ver"),n()()()()),t&2){let e=a.$implicit,l=p(2);r(2),d(F(3,7,e.fecha,"dd/MM/yyyy")),r(3),s("routerLink",g(10,K,e.promotora._id)),r(),T("",e.promotora.nombre," ",e.promotora.apellido,""),r(2),d(e.productos[0].producto.marca),r(2),d(l.sumarPorductos(e)),r(2),s("routerLink",g(12,Q,e._id))}}function Y(t,a){if(t&1){let e=P();i(0,"div",0)(1,"div",1),m(2,"app-title",2),o(3," Resumen "),n()(),i(4,"div",3)(5,"label",4),o(6,"Mes"),n(),i(7,"div",5)(8,"select",6),k("ngModelChange",function(c){f(e);let v=p();return I(v.indexPlanificacion,c)||(v.indexPlanificacion=c),_(c)}),R("change",function(){f(e);let c=p();return _(c.cambiar())}),C(9,U,2,2,"option",7,x),n()()(),m(11,"hr"),i(12,"table",8)(13,"thead")(14,"tr")(15,"th"),o(16,"Fecha"),n(),i(17,"th"),o(18,"Promotora"),n(),i(19,"th"),o(20,"Marca"),n(),i(21,"th"),o(22,"Productos vendidos"),n(),i(23,"th"),o(24,"Ver"),n()()(),i(25,"tbody"),C(26,X,17,14,"tr",null,x),n()()}if(t&2){let e=p();r(2),s("title",e.cliente),r(6),w("ngModel",e.indexPlanificacion),r(),h(e.planificacion.planificacion()),r(17),h(e._reportes)}}function Z(t,a){t&1&&o(0,`
Cargando cliente...
`)}var b=class t{constructor(a){this.route=a;this.route.paramMap.subscribe(e=>{this.cliente=e.get("id"),setTimeout(()=>{this.indexPlanificacion=this.planificacion.planificacion().length-1,this.RefreshPage()},1e3)})}planificacion=u(H);reportes=u(J);cliente="";_reportes=[];indexPlanificacion=0;loading=!0;cambiar(){this.RefreshPage()}RefreshPage(){setTimeout(()=>{if(!this.planificacion.loading()){let a=this.planificacion.planificacion()[this.indexPlanificacion];this.reportes.cargarReportes_(a.inicio,a.cierre).subscribe(e=>{this._reportes=e.filter(l=>l.cliente.cliente===this.cliente),this.loading=!1})}},500)}sumarPorductos(a){return a.productos.reduce((e,l)=>e+l.cantidad,0)}static \u0275fac=function(e){return new(e||t)(y(A))};static \u0275cmp=S({type:t,selectors:[["app-clientes"]],decls:2,vars:1,consts:[[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],[3,"title"],[1,"control"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","change","ngModel"],[3,"value"],[1,"table","is-fullwidth","is-striped"],[3,"routerLink"],[1,"button","is-success",3,"routerLink"],[1,"icon"],[1,"fas","fa-eye"]],template:function(e,l){e&1&&E(0,Y,28,2)(1,Z,1,0),e&2&&M(l.loading?1:0)},dependencies:[G,z,$,q,O,W,j,N,L,D,B],encapsulation:2})};export{b as default};
