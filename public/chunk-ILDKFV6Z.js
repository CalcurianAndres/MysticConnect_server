import{a as k}from"./chunk-HA5Q5I6N.js";import{a as U}from"./chunk-3JJKJOSC.js";import{a as L}from"./chunk-Q5UUACUJ.js";import{a as O,b as Q,c as $,f as z,g as G,h as H,i as y}from"./chunk-X7V57MHS.js";import"./chunk-F2UG3DZ7.js";import{$a as I,Fa as T,Ia as E,Na as v,Pb as R,Sb as q,Wa as M,X as g,Xa as S,Ya as f,Za as V,_a as F,ab as t,bb as i,cb as p,da as u,db as _,e as K,ea as C,eb as d,fb as m,hb as l,ib as h,ja as B,jb as W,kb as D,mb as b,nb as P,ob as x,qb as j,rb as A,za as r}from"./chunk-TPQHVVYC.js";var Z=o=>({"is-active":o});function ee(o,a){if(o&1){let n=_();t(0,"button",17),d("click",function(){u(n);let s=m();return C(s.nuevoCliente())}),p(1,"span",18),t(2,"span"),l(3,"Registrar"),i()()}}function te(o,a){if(o&1){let n=_();t(0,"button",17),d("click",function(){u(n);let s=m();return C(s.EditarProducto())}),p(1,"span",18),t(2,"span"),l(3,"Editar"),i()()}}var w=class o{ClientService=g(k);active;Edicion;data;onCloseModal=new B;cerrar(){this.onCloseModal.emit()}nuevoCliente(){this.ClientService.NuevoCliente(this.data),this.cerrar()}EditarProducto(){this.ClientService.EditarClientes(this.data),this.cerrar()}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=E({type:o,selectors:[["app-modal-clientes"]],inputs:{active:"active",Edicion:"Edicion",data:"data"},outputs:{onCloseModal:"onCloseModal"},decls:28,vars:7,consts:[[1,"modal",3,"ngClass"],[1,"modal-background"],[1,"modal-card"],[1,"modal-card-head"],[1,"modal-card-title"],["aria-label","close",1,"delete",3,"click"],[1,"modal-card-body"],[1,"field","is-grouped"],[1,"control"],["for","",1,"label"],["type","text",1,"input",3,"ngModelChange","ngModel"],[1,"field"],[1,"select"],[3,"ngModelChange","ngModel"],["value","Mystic"],["value","Qerametik"],[1,"button","is-primary"],[1,"button","is-primary",3,"click"],[1,"icon"]],template:function(n,e){n&1&&(t(0,"div",0),p(1,"div",1),t(2,"div",2)(3,"header",3)(4,"p",4),l(5,"Clientes"),i(),t(6,"button",5),d("click",function(){return e.cerrar()}),i()(),t(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),l(11,"Cliente:"),i(),t(12,"input",10),x("ngModelChange",function(c){return P(e.data.cliente,c)||(e.data.cliente=c),c}),i()(),t(13,"div",8)(14,"label",9),l(15,"Rif:"),i(),t(16,"input",10),x("ngModelChange",function(c){return P(e.data.rif,c)||(e.data.rif=c),c}),i()()(),t(17,"div",11)(18,"label",9),l(19,"marca:"),i(),t(20,"div",12)(21,"select",13),x("ngModelChange",function(c){return P(e.data.marca,c)||(e.data.marca=c),c}),t(22,"option",14),l(23,"Mystic"),i(),t(24,"option",15),l(25,"Qerametik"),i()()()(),v(26,ee,4,0,"button",16)(27,te,4,0,"button",16),i()()()),n&2&&(M("ngClass",A(5,Z,e.active)),r(12),b("ngModel",e.data.cliente),r(4),b("ngModel",e.data.rif),r(5),b("ngModel",e.data.marca),r(5),f(e.data.cliente&&e.data.rif&&e.data.marca&&!e.Edicion?26:e.data.cliente&&e.data.rif&&e.data.marca&&e.Edicion?27:-1))},dependencies:[q,R,y,G,H,O,z,Q,$],encapsulation:2})};var N=K(U());var ie=()=>[];function ne(o,a){o&1&&(t(0,"thead")(1,"tr")(2,"th"),l(3,"Cliente"),i(),t(4,"th"),l(5,"Rif"),i(),t(6,"th"),l(7,"marca"),i(),t(8,"th"),l(9,"Acci\xF3n"),i()()())}function ae(o,a){o&1&&p(0,"app-loadings")}function oe(o,a){if(o&1){let n=_();t(0,"tr")(1,"td"),l(2),i(),t(3,"td"),l(4),i(),t(5,"td"),l(6),i(),t(7,"td")(8,"i",11),d("click",function(){let s=u(n).$implicit,c=m(2);return C(c.Editar(s))}),i(),l(9,"\xA0 "),t(10,"i",12),d("click",function(){let s=u(n).$implicit,c=m(2);return C(c.EliminarCliente(s))}),i()()()}if(o&2){let n=a.$implicit;r(2),h(n.cliente),r(2),h(n.rif),r(2),h(n.marca)}}function le(o,a){o&1&&(t(0,"div",10),l(1," No se encuentra ning\xFAn cliente. "),i())}function re(o,a){if(o&1&&(t(0,"tbody"),F(1,oe,11,3,"tr",null,V,!1,le,2,0,"div",10),i()),o&2){let n=m();r(),I(n.paginatedClientes)}}function se(o,a){if(o&1){let n=_();t(0,"li")(1,"a",13),d("click",function(){let s=u(n).$index,c=m();return C(c.goToPage(s+1))}),l(2),i()()}if(o&2){let n=a.$index,e=m();r(),S("is-current",e.currentPage===n+1),r(),W(" ",n+1," ")}}var J=class o{clientService=g(k);Modal=T(!1);Edicion=T(!1);data={cliente:"",rif:"",marca:""};currentPage=1;itemsPerPage=200;get totalItems(){return this.clientService.clientes().length}get totalPages(){return Math.ceil(this.totalItems/this.itemsPerPage)}get paginatedClientes(){let a=(this.currentPage-1)*this.itemsPerPage,n=a+this.itemsPerPage;return this.clientService.clientes().slice(a,n)}goToPage(a){a<1||a>this.totalPages||(this.currentPage=a)}ManejoModal(){this.Modal.update(a=>!a)}cerrarEdicion(){this.Edicion.update(a=>!1),this.data={cliente:"",rif:"",marca:""}}EliminarCliente(a){N.default.fire({title:`\xBFEliminar este cliente ${a.cliente}?`,text:"\xBFEstas segura que quieres eliminar a este cliente? aun podras ver reportes anteriores y estad\xEDsticas con este cliente pero no podras reportar nuevas ventas de este cliente",icon:"question",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!"}).then(n=>{n.isConfirmed&&(this.clientService.EliminarCliente(a._id),N.default.fire({title:"Eliminada",text:"El cliente fu\xE9 eliminado de la lista",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}))})}Editar(a){this.data=a,this.Edicion.update(n=>!n),this.ManejoModal()}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=E({type:o,selectors:[["app-clientes"]],decls:21,vars:12,consts:[[3,"onCloseModal","active","Edicion","data"],[1,"button","is-primary",3,"click"],[1,"icon"],[1,"fas","fa-plus-square"],[1,"table","is-fullwidth","is-striped"],["role","navigation","aria-label","pagination",1,"pagination"],[1,"pagination-previous",3,"click"],[1,"pagination-list"],[1,"pagination-next",3,"click"],[1,"pagination-info"],[1,"notification","is-primary","is-light"],[1,"fas","fa-user-edit",2,"color","rgb(129, 228, 129)","cursor","pointer",3,"click"],[1,"fas","fa-user-minus",2,"color","rgb(228, 129, 129)","cursor","pointer",3,"click"],[1,"pagination-link",3,"click"]],template:function(n,e){n&1&&(t(0,"app-modal-clientes",0),d("onCloseModal",function(){return e.ManejoModal(),e.cerrarEdicion()}),i(),t(1,"button",1),d("click",function(){return e.ManejoModal()}),t(2,"span",2),p(3,"i",3),i(),t(4,"span"),l(5,"Nuevo"),i()(),p(6,"hr"),t(7,"table",4),v(8,ne,10,0,"thead")(9,ae,1,0,"app-loadings")(10,re,4,1,"tbody"),i(),t(11,"nav",5)(12,"a",6),d("click",function(){return e.goToPage(e.currentPage-1)}),l(13," Anterior "),i(),t(14,"ul",7),F(15,se,3,3,"li",null,V),i(),t(17,"a",8),d("click",function(){return e.goToPage(e.currentPage+1)}),l(18," Siguiente "),i()(),t(19,"div",9),l(20),i()),n&2&&(M("active",e.Modal())("Edicion",e.Edicion())("data",e.data),r(8),f(e.paginatedClientes.length>0?8:-1),r(),f(e.clientService.loading()?9:10),r(3),S("is-disabled",e.currentPage===1),r(3),I(j(11,ie).constructor(e.totalPages)),r(2),S("is-disabled",e.currentPage===e.totalPages),r(3),D(" P\xE1gina ",e.currentPage," de ",e.totalPages," "))},dependencies:[y,L,w],encapsulation:2})};export{J as ClientesComponent};
