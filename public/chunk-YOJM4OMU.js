import{b as F}from"./chunk-BHIFATQY.js";import{d as M,g as T,i as k}from"./chunk-LAJQBY6U.js";import"./chunk-HUYOMWR4.js";import{a as A}from"./chunk-TCUJZKCS.js";import{$a as S,Aa as f,Ia as _,Na as v,Wa as c,X as b,Xb as D,Ya as E,Za as h,_a as C,_b as R,ab as n,bb as i,cb as a,fb as g,ib as e,jb as d,kb as p,lb as s,tb as u,vb as I,xb as y,za as o}from"./chunk-Q6JVZMQ3.js";var L=r=>["/dashboard/cliente",r],B=r=>["/dashboard/promotora",r];function j(r,l){if(r&1&&(n(0,"tr")(1,"td"),e(2),i(),n(3,"td"),e(4),i(),n(5,"td"),e(6),i(),n(7,"td"),e(8),i(),a(9,"td"),i()),r&2){let t=l.$implicit;o(2),s("(",t.producto.linea,") ",t.producto.producto,""),o(2),d(t.inicio),o(2),d(t.final),o(2),d(t.cantidad)}}function w(r,l){if(r&1&&(n(0,"div",0)(1,"div",1),a(2,"app-title",2),e(3," Resumen "),i()(),a(4,"hr"),n(5,"b"),e(6,"Fecha:"),i(),e(7),I(8,"date"),a(9,"br"),n(10,"b"),e(11,"Cliente:"),i(),n(12,"a",3),e(13),i(),a(14,"br"),n(15,"b"),e(16,"Marca:"),i(),e(17),a(18,"br"),n(19,"b"),e(20,"Promotora:"),i(),e(21,"\xA0"),n(22,"a",3),e(23),i(),a(24,"br"),n(25,"b"),e(26,"Tipo:"),i(),e(27),a(28,"br"),n(29,"b"),e(30,"Observaci\xF3n:"),i(),e(31),a(32,"br"),n(33,"table",4)(34,"thead")(35,"tr")(36,"th"),e(37,"Producto"),i(),n(38,"th"),e(39,"Almac\xE9n inicial"),i(),n(40,"th"),e(41,"Almac\xE9n final"),i(),n(42,"th"),e(43,"Cantidad"),i(),a(44,"th"),i()(),n(45,"tbody"),C(46,j,10,5,"tr",null,h),i()()),r&2){let t=g();o(7),p(" ",y(8,9,t._reporte.fecha,"dd/MM/yyyy")," "),o(5),c("routerLink",u(12,L,t._reporte.cliente.cliente)),o(),d(t._reporte.cliente.cliente),o(4),p(" ",t._reporte.cliente.marca," "),o(5),c("routerLink",u(14,B,t._reporte.promotora._id)),o(),s("",t._reporte.promotora.nombre," ",t._reporte.promotora.apellido,""),o(4),p(" ",t._reporte.tipo," "),o(4),p(" ",t._reporte.observacion,`
`),o(15),S(t._reporte.productos)}}function N(r,l){r&1&&e(0,`
Cargando reporte...
`)}var x=class r{constructor(l){this.route=l;this.route.paramMap.subscribe(t=>{let m=t.get("id");this.reporte.BuscarPorID(m).subscribe(P=>{this._reporte=P,console.log(this._reporte),this.loading=!1})})}reporte=b(F);loading=!0;_reporte=[];static \u0275fac=function(t){return new(t||r)(f(M))};static \u0275cmp=_({type:r,selectors:[["app-detalle"]],decls:2,vars:1,consts:[[1,"card",2,"background","linear-gradient(180deg, rgba(0,26,114,1) 0%, rgba(53,164,182,1) 49%, rgba(107,202,186,1) 100%)","color","rgb(212, 212, 212)"],[1,"card-content"],["title","Reporte"],[3,"routerLink"],[1,"table","is-fullwidth","is-striped"]],template:function(t,m){t&1&&v(0,w,48,16)(1,N,1,0),t&2&&E(m.loading?1:0)},dependencies:[A,R,D,k,T],encapsulation:2})};export{x as default};
