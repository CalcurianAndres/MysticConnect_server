import{a as z}from"./chunk-7BL6ZFTP.js";import{a as G,b as J,c as K,d as Q,f as X,g as Y,h as Z,i as ee,j as ne}from"./chunk-LFLLRPWB.js";import{a as H}from"./chunk-2T3NZPXG.js";import{$a as B,Cb as j,Fa as M,Ia as k,Na as v,Pb as O,R as D,Sb as $,Wa as x,X as P,Xa as W,Ya as y,Za as V,_a as N,a as S,ab as t,b as E,bb as o,cb as c,da as f,db as h,e as ie,ea as C,eb as d,f as T,fb as p,hb as a,ib as w,ja as L,jb as F,kb as U,mb as u,nb as g,ob as _,qb as R,rb as q,za as s}from"./chunk-XBXOYP5X.js";var b=class l{http=P(H);users=j(()=>this.#e().promotoras);loading=j(()=>this.#e().loading);#e=M({loading:!0,promotoras:[]});ruta="http://10.0.0.13:8080/api";constructor(){this.cargarPromotoras()}cargarPromotoras(){this.http.get(`${this.ruta}/users`).subscribe(n=>{this.#e.set({loading:!1,promotoras:n})})}NuevaPromotora=n=>T(this,null,function*(){this.#e.set(E(S({},this.#e()),{loading:!0})),this.http.post(`${this.ruta}/users`,n).subscribe(i=>{this.#e.set(E(S({},this.#e()),{loading:!1,promotoras:[...this.#e().promotoras,i]}))})});EditarPromotora=n=>T(this,null,function*(){this.#e.set(E(S({},this.#e()),{loading:!0})),this.http.put(`${this.ruta}/users/${n._id}`,n).subscribe(i=>{this.cargarPromotoras()})});eliminarPromotora=n=>T(this,null,function*(){this.#e.set(E(S({},this.#e()),{loading:!0})),this.http.delete(`${this.ruta}/users/${n}`).subscribe(i=>{this.cargarPromotoras()})});static \u0275fac=function(i){return new(i||l)};static \u0275prov=D({token:l,factory:l.\u0275fac,providedIn:"root"})};var re=l=>({"is-active":l});function le(l,n){if(l&1){let i=h();t(0,"button",19),d("click",function(){f(i);let m=p();return C(m.nuevaPromotora())}),c(1,"span",20),t(2,"span"),a(3,"Registrar"),o()()}}function se(l,n){if(l&1){let i=h();t(0,"button",19),d("click",function(){f(i);let m=p();return C(m.EditarPromotora())}),c(1,"span",20),t(2,"span"),a(3,"Editar"),o()()}}var I=class l{UserService=P(b);active;Edicion;data;onCloseModal=new L;cerrar(){this.onCloseModal.emit()}nuevaPromotora(){this.UserService.NuevaPromotora(this.data),this.cerrar()}EditarPromotora(){this.UserService.EditarPromotora(this.data),this.cerrar()}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=k({type:l,selectors:[["app-modal-promotoras"]],inputs:{active:"active",Edicion:"Edicion",data:"data"},outputs:{onCloseModal:"onCloseModal"},decls:46,vars:11,consts:[[1,"modal",3,"ngClass"],[1,"modal-background"],[1,"modal-card"],[1,"modal-card-head"],[1,"modal-card-title"],["aria-label","close",1,"delete",3,"click"],[1,"modal-card-body"],[1,"field","is-grouped"],[1,"control"],["for","",1,"label"],["type","text",1,"input",3,"ngModelChange","ngModel"],[1,"control",2,"width","140px"],["type","email",1,"input",3,"ngModelChange","ngModel"],["type","number","name","","id","",1,"input",3,"ngModelChange","ngModel"],[1,"select"],[3,"ngModelChange","ngModel"],["value","Admin"],["value","Promotora"],[1,"button","is-primary"],[1,"button","is-primary",3,"click"],[1,"icon"]],template:function(i,e){i&1&&(t(0,"div",0),c(1,"div",1),t(2,"div",2)(3,"header",3)(4,"p",4),a(5,"Promotoras"),o(),t(6,"button",5),d("click",function(){return e.cerrar()}),o()(),t(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),a(11,"Nombre:"),o(),t(12,"input",10),_("ngModelChange",function(r){return g(e.data.nombre,r)||(e.data.nombre=r),r}),o()(),t(13,"div",8)(14,"label",9),a(15,"Apellido:"),o(),t(16,"input",10),_("ngModelChange",function(r){return g(e.data.apellido,r)||(e.data.apellido=r),r}),o()()(),t(17,"div",7)(18,"div",11)(19,"label",9),a(20,"Tel\xE9fono:"),o(),t(21,"input",10),_("ngModelChange",function(r){return g(e.data.telefono,r)||(e.data.telefono=r),r}),o()(),t(22,"div",8)(23,"label",9),a(24,"Correo:"),o(),t(25,"input",12),_("ngModelChange",function(r){return g(e.data.correo,r)||(e.data.correo=r),r}),o()(),t(26,"div",11)(27,"label",9),a(28,"Regi\xF3n"),o(),t(29,"input",10),_("ngModelChange",function(r){return g(e.data.region,r)||(e.data.region=r),r}),o()()(),t(30,"div",7)(31,"div",8)(32,"label",9),a(33,"Sueldo (USD):"),o(),t(34,"input",13),_("ngModelChange",function(r){return g(e.data.sueldo,r)||(e.data.sueldo=r),r}),o()(),t(35,"div",8)(36,"label",9),a(37,"Role:"),o(),t(38,"div",14)(39,"select",15),_("ngModelChange",function(r){return g(e.data.role,r)||(e.data.role=r),r}),t(40,"option",16),a(41,"Administrador"),o(),t(42,"option",17),a(43,"Promotora"),o()()()()(),v(44,le,4,0,"button",18)(45,se,4,0,"button",18),o()()()),i&2&&(x("ngClass",q(9,re,e.active)),s(12),u("ngModel",e.data.nombre),s(4),u("ngModel",e.data.apellido),s(5),u("ngModel",e.data.telefono),s(4),u("ngModel",e.data.correo),s(4),u("ngModel",e.data.region),s(5),u("ngModel",e.data.sueldo),s(5),u("ngModel",e.data.role),s(5),y(e.data.nombre&&e.data.apellido&&e.data.telefono&&e.data.correo&&e.data.region&&e.data.sueldo&&e.data.role&&!e.Edicion?44:e.data.nombre&&e.data.apellido&&e.data.telefono&&e.data.correo&&e.data.region&&e.data.sueldo&&e.data.role&&e.Edicion?45:-1))},dependencies:[$,O,ee,Y,Z,G,Q,X,J,K],encapsulation:2})};var A=ie(ne());var me=()=>[];function de(l,n){l&1&&(t(0,"thead")(1,"tr")(2,"th"),a(3,"Nombre"),o(),t(4,"th"),a(5,"Correo"),o(),t(6,"th"),a(7,"Tel\xE9fono"),o(),t(8,"th"),a(9,"Regi\xF3n"),o(),t(10,"th"),a(11,"Sueldo (USD)"),o(),t(12,"th"),a(13,"Role"),o(),t(14,"th"),a(15,"Acci\xF3n"),o()()())}function pe(l,n){l&1&&c(0,"app-loadings")}function ce(l,n){if(l&1){let i=h();t(0,"tr")(1,"td"),a(2),o(),t(3,"td"),a(4),o(),t(5,"td"),a(6),o(),t(7,"td"),a(8),o(),t(9,"td"),a(10),o(),t(11,"td"),a(12),o(),t(13,"td")(14,"i",11),d("click",function(){let m=f(i).$implicit,r=p(2);return C(r.Editar(m))}),o(),a(15,"\xA0 "),t(16,"i",12),d("click",function(){let m=f(i).$implicit,r=p(2);return C(r.ElimiarPromotora(m))}),o()()()}if(l&2){let i=n.$implicit;s(2),U("",i.nombre," ",i.apellido,""),s(2),w(i.correo),s(2),w(i.telefono),s(2),w(i.region),s(2),F("",i.sueldo," $"),s(2),w(i.role)}}function ue(l,n){l&1&&(t(0,"div",10),a(1," No se encontraron promotoras. "),o())}function ge(l,n){if(l&1&&N(0,ce,17,7,"tr",null,V,!1,ue,2,0,"div",10),l&2){let i=p();B(i.paginatedPromotoras)}}function _e(l,n){if(l&1){let i=h();t(0,"li")(1,"a",13),d("click",function(){let m=f(i).$index,r=p();return C(r.goToPage(m+1))}),a(2),o()()}if(l&2){let i=n.$index,e=p();s(),W("is-current",e.currentPage===i+1),s(),F(" ",i+1," ")}}var oe=class l{UserService=P(b);Modal=M(!1);Edicion=M(!1);data={nombre:"",apellido:"",correo:"",telefono:"",region:"",sueldo:"",role:"Promotora"};constructor(){}currentPage=1;itemsPerPage=10;get totalItems(){return this.UserService.users().length}get totalPages(){return Math.ceil(this.totalItems/this.itemsPerPage)}get paginatedPromotoras(){let n=(this.currentPage-1)*this.itemsPerPage,i=n+this.itemsPerPage;return this.UserService.users().slice(n,i)}goToPage(n){n<1||n>this.totalPages||(this.currentPage=n)}ManejoModal(){this.Modal.update(n=>!n)}cerrarEdicion(){this.Edicion.update(n=>!1),this.data={nombre:"",apellido:"",correo:"",telefono:"",region:"",sueldo:"",role:"Promotora"}}Editar(n){this.data=n,this.Edicion.update(i=>!i),this.ManejoModal()}ElimiarPromotora(n){A.default.fire({title:`\xBFEliminar esta promotora ${n.nombre} ${n.apellido}?`,text:"\xBFEstas segura que quieres eliminar a esta promotora? aun podras ver reportes anteriores pero no podra generar nuevos",icon:"question",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!"}).then(i=>{i.isConfirmed&&(this.UserService.eliminarPromotora(n._id),A.default.fire({title:"Eliminada",text:"La promotora fue eliminada de la lista",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}))})}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=k({type:l,selectors:[["app-promotoras"]],decls:22,vars:12,consts:[[3,"onCloseModal","active","Edicion","data"],[1,"button","is-primary",3,"click"],[1,"icon"],[1,"fas","fa-plus-square"],[1,"table","is-striped","is-fullwidth"],["role","navigation","aria-label","pagination",1,"pagination"],[1,"pagination-previous",3,"click"],[1,"pagination-list"],[1,"pagination-next",3,"click"],[1,"pagination-info"],[1,"notification","is-primary","is-light"],[1,"fas","fa-user-edit",2,"color","rgb(129, 228, 129)","cursor","pointer",3,"click"],[1,"fas","fa-user-minus",2,"color","rgb(228, 129, 129)","cursor","pointer",3,"click"],[1,"pagination-link",3,"click"]],template:function(i,e){i&1&&(t(0,"app-modal-promotoras",0),d("onCloseModal",function(){return e.ManejoModal(),e.cerrarEdicion()}),o(),t(1,"button",1),d("click",function(){return e.ManejoModal()}),t(2,"span",2),c(3,"i",3),o(),t(4,"span"),a(5,"Nuevo"),o()(),c(6,"hr"),t(7,"table",4),v(8,de,16,0,"thead"),t(9,"tbody"),v(10,pe,1,0,"app-loadings")(11,ge,3,1),o()(),t(12,"nav",5)(13,"a",6),d("click",function(){return e.goToPage(e.currentPage-1)}),a(14," Anterior "),o(),t(15,"ul",7),N(16,_e,3,3,"li",null,V),o(),t(18,"a",8),d("click",function(){return e.goToPage(e.currentPage+1)}),a(19," Siguiente "),o()(),t(20,"div",9),a(21),o()),i&2&&(x("active",e.Modal())("Edicion",e.Edicion())("data",e.data),s(8),y(e.paginatedPromotoras.length>0?8:-1),s(2),y(e.UserService.loading()?10:11),s(3),W("is-disabled",e.currentPage===1),s(3),B(R(11,me).constructor(e.totalPages)),s(2),W("is-disabled",e.currentPage===e.totalPages),s(3),U(" P\xE1gina ",e.currentPage," de ",e.totalPages," "))},dependencies:[z,I],encapsulation:2})};export{oe as PromotorasComponent};