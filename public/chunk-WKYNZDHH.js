import{a as D}from"./chunk-IUWC53OM.js";import{a as B}from"./chunk-ZAAFANKJ.js";import"./chunk-2T3NZPXG.js";import{$a as b,Ia as y,Na as F,Pb as w,Rb as A,Sb as O,Wa as u,X as P,Ya as $,Za as _,_a as x,ab as i,bb as n,cb as d,da as f,db as v,ea as h,eb as E,fb as m,hb as o,ib as p,jb as g,kb as T,lb as I,rb as M,sb as C,tb as R,ub as k,za as a}from"./chunk-XBXOYP5X.js";var U=r=>({rotado:r}),S=(r,t)=>({oculto:r,activo:t});function j(r,t){r&1&&(d(0,"i",10),o(1,"\xA0 "))}function G(r,t){r&1&&(d(0,"i",11),o(1,"\xA0 "))}function L(r,t){if(r&1&&(i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),n(),i(5,"td"),o(6),n(),i(7,"td"),o(8),n(),i(9,"td"),o(10),n(),i(11,"td"),o(12),n()()),r&2){let e=t.$implicit;a(2),p(e.linea),a(2),p(e.marca),a(2),p(e.producto),a(2),p(e.cantidad),a(2),p(e.puntosTotales),a(2),g("",e.subtotal," $")}}function q(r,t){if(r&1){let e=v();i(0,"div",3)(1,"header",4)(2,"p",5),o(3),R(4,"date"),n(),i(5,"button",6),E("click",function(){let s=f(e).$index,c=m().$index,N=m();return h(N.toggleVentaSection(c,s))}),i(6,"span",12),d(7,"i",8),n()()(),i(8,"div",9)(9,"b"),o(10,"Establecimiento:"),n(),o(11),d(12,"br"),i(13,"b"),o(14,"Tipo:"),n(),o(15),d(16,"br"),i(17,"b"),o(18,"Observaci\xF3n:"),n(),o(19),d(20,"hr"),i(21,"table",13)(22,"thead")(23,"tr")(24,"th"),o(25,"Linea"),n(),i(26,"th"),o(27,"Marca"),n(),i(28,"th"),o(29,"Producto"),n(),i(30,"th"),o(31,"Cantidad (Und)"),n(),i(32,"th"),o(33,"Puntos"),n(),i(34,"th"),o(35,"Subtotal (USD)"),n()()(),i(36,"tbody"),x(37,L,13,6,"tr",null,_),n()()()()}if(r&2){let e=t.$implicit,l=t.$index,s=m().$index,c=m();a(3),I(" ",k(4,8,e.fecha,"dd/MM/yyyy")," - ",e.totalSubtotal,"$ (",e.totalPuntos," Puntos) "),a(5),u("ngClass",C(11,S,!c.toggleVentas[s]||!c.toggleVentas[s][l],c.toggleVentas[s]&&c.toggleVentas[s][l])),a(3),g(" ",e.cliente," "),a(4),g(" ",e.tipo," "),a(4),g(" ",e.observacion," "),a(2),u("ngClass",C(14,S,!c.toggleVentas[s]||!c.toggleVentas[s][l],c.toggleVentas[s]&&c.toggleVentas[s][l])),a(16),b(e.productos)}}function z(r,t){if(r&1){let e=v();i(0,"div",3)(1,"header",4)(2,"p",5),F(3,j,2,0)(4,G,2,0),o(5),n(),i(6,"button",6),E("click",function(){let s=f(e).$index,c=m();return h(c.togglePromotoraSection(s))}),i(7,"span",7),d(8,"i",8),n()()(),i(9,"div",9)(10,"span")(11,"b"),o(12,"Total vendido:"),n(),o(13),n(),d(14,"br")(15,"br"),x(16,q,39,17,"div",3,_),n()()}if(r&2){let e=t.$implicit,l=t.$index,s=m();a(3),$(e.puntosAcumulados>=15?3:4),a(2),T(" ",e.promotora," (",e.puntosAcumulados," Puntos) "),a(2),u("ngClass",M(6,U,s.isRotated[l])),a(2),u("ngClass",C(8,S,!s.togglePromotora[l],s.togglePromotora[l])),a(4),g("",e.totalGastado,"$"),a(3),b(e.reportes)}}var V=class r{ReportesServices=P(B);reportesAgrupados=[];togglePromotora=[];toggleVentas={};isRotated=[];isRotated_={};constructor(){this.ReportesServices.getReportesAgrupados().subscribe({next:t=>{this.reportesAgrupados=t,console.log(this.reportesAgrupados)},error:t=>{console.error("Error al cargar los reportes:",t)}})}togglePromotoraSection(t){this.togglePromotora[t]=!this.togglePromotora[t],this.isRotated[t]=!this.isRotated[t]}toggleVentaSection(t,e){this.toggleVentas[t]||(this.toggleVentas[t]=[]),this.toggleVentas[t][e]=!this.toggleVentas[t][e]}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=y({type:r,selectors:[["app-estadisticas"]],decls:6,vars:0,consts:[[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],["title","Estad\xEDsticas"],[1,"card"],[1,"card-header"],[1,"card-header-title"],["aria-label","more options",1,"card-header-icon",3,"click"],[1,"icon",3,"ngClass"],["aria-hidden","true",1,"fas","fa-angle-down"],[1,"card-content",3,"ngClass"],[1,"far","fa-thumbs-up",2,"color","rgb(93, 194, 93)"],[1,"far","fa-thumbs-down",2,"color","rgb(218, 116, 116)"],[1,"icon"],[1,"table","is-fullwidth","is-striped",3,"ngClass"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1),d(2,"app-title",2),n()(),d(3,"hr"),x(4,z,18,11,"div",3,_)),e&2&&(a(4),b(l.reportesAgrupados))},dependencies:[D,O,w,A],styles:['@charset "UTF-8";.oculto[_ngcontent-%COMP%]{overflow:hidden;max-height:0px;padding:0;margin:0;transition:max-height .5s ease-out,padding .3s ease-out,margin .3s ease-out}.activo[_ngcontent-%COMP%]{transition:max-height .9s ease-out,padding .3s ease-out,margin .3s ease-out}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.icon.rotado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:rotate(180deg)}']})};export{V as default};
