import{a as oe,b as re}from"./chunk-O4VUAZ7E.js";import{a as j}from"./chunk-H4O6IPU4.js";import"./chunk-2LV7HNH4.js";import{a as ie}from"./chunk-4DQSAP2D.js";import{a as ne}from"./chunk-5A4UYOPG.js";import{a as q,b as z,c as U,d as H,e as J,h as K,i as X,j as Z}from"./chunk-NNPNTJPV.js";import"./chunk-TZTC4YCF.js";import{a as ee}from"./chunk-ZHWJNEKA.js";import{a as te}from"./chunk-UGQNDCKZ.js";import{$a as T,Ia as Y,Na as h,Tb as D,Vb as G,Wa as x,Wb as $,X as v,Ya as F,Za as w,Zb as O,_a as M,a as I,ab as t,b as Q,bb as i,cb as u,da as p,db as S,ea as m,eb as f,fb as s,ib as a,jb as g,lb as R,nb as E,ob as P,pb as b,sb as L,ub as B,wb as W,za as c}from"./chunk-BH4UYFV3.js";var ae=r=>({"is-active":r});function le(r,o){if(r&1){let e=S();t(0,"tr")(1,"td")(2,"i",10),f("click",function(){let n=p(e).$implicit,d=s();return m(d.addCliente(n))}),i()(),t(3,"td"),a(4),i()()}if(r&2){let e=o.$implicit;c(4),R("",e.cliente," (",e.marca,")")}}function ce(r,o){if(r&1){let e=S();t(0,"div",15)(1,"label",16),a(2,"Establecimiento:"),i(),t(3,"input",31),b("ngModelChange",function(n){p(e);let d=s(2);return P(d.ReporteSeleccionado.cliente.cliente,n)||(d.ReporteSeleccionado.cliente.cliente=n),m(n)}),i()()}if(r&2){let e=s(2);c(3),E("ngModel",e.ReporteSeleccionado.cliente.cliente)}}function de(r,o){if(r&1){let e=S();t(0,"tr")(1,"td",32)(2,"button",33),f("click",function(){let n=p(e).$implicit,d=s(2);return m(d.AgregarProducto(n))}),t(3,"span",23),u(4,"i",34),i()()(),t(5,"td"),a(6),i()()}if(r&2){let e=o.$implicit;c(6),R("",e.producto," (",e.linea,")")}}function se(r,o){if(r&1){let e=S();t(0,"div",29)(1,"div",35)(2,"p",36),a(3),i()(),t(4,"div",8)(5,"table",6)(6,"thead")(7,"tr")(8,"th"),a(9,"Alm. Inicial"),i(),t(10,"th"),a(11,"Alm. Final"),i(),t(12,"th"),a(13,"Total"),i()()(),t(14,"tbody")(15,"tr")(16,"td")(17,"input",37),b("ngModelChange",function(n){let d=p(e).$implicit;return P(d.inicio,n)||(d.inicio=n),m(n)}),f("input",function(){let n=p(e).$implicit;return m(n.cantidad=n.inicio-n.final)}),i()(),t(18,"td")(19,"input",37),b("ngModelChange",function(n){let d=p(e).$implicit;return P(d.final,n)||(d.final=n),m(n)}),f("input",function(){let n=p(e).$implicit;return m(n.cantidad=n.inicio-n.final)}),i()(),t(20,"td"),a(21),i()()()(),t(22,"button",38),f("click",function(){let n=p(e).$index,d=s(2);return m(d.EliminarProducto(n))}),t(23,"span",23),u(24,"i",39),i(),t(25,"span"),a(26,"Eliminar"),i()()()()}if(r&2){let e=o.$implicit;c(3),g(e.producto.producto),c(14),E("ngModel",e.inicio),c(2),E("ngModel",e.final),c(2),g(e.cantidad)}}function pe(r,o){if(r&1){let e=S();t(0,"div",0),u(1,"div",1),t(2,"div",2)(3,"header",11)(4,"p",12),a(5,"Editar reporte"),i(),t(6,"button",13),f("click",function(){p(e);let n=s();return m(n.EditarReporte=!n.EditarReporte)}),i()(),t(7,"div",3)(8,"div",14)(9,"div",15)(10,"label",16),a(11,"Fecha:"),i(),t(12,"input",17),b("ngModelChange",function(n){p(e);let d=s();return P(d.ReporteSeleccionado.fecha,n)||(d.ReporteSeleccionado.fecha=n),m(n)}),i()(),t(13,"div",15)(14,"label",16),a(15,"Marca:"),i(),t(16,"div",18)(17,"select",19)(18,"option",20),a(19,"Mystic"),i(),t(20,"option",21),a(21,"Qerametic"),i()()()()(),t(22,"div",14)(23,"div",15)(24,"label",16),a(25,"\xA0"),i(),t(26,"button",22),f("click",function(){p(e);let n=s();return m(n.modalCliente=!n.modalCliente)}),t(27,"span",23),u(28,"i",24),i()()(),h(29,ce,4,1,"div",15),i(),t(30,"div",25)(31,"div",15)(32,"label",16),a(33,"Buscado de productos"),i(),t(34,"input",26),b("ngModelChange",function(n){p(e);let d=s();return P(d.searchTerm,n)||(d.searchTerm=n),m(n)}),f("input",function(){p(e);let n=s();return m(n.filterProductos())}),i()(),t(35,"div",25)(36,"div",15)(37,"label",16),a(38,"\xA0"),i(),t(39,"input",27),b("ngModelChange",function(n){p(e);let d=s();return P(d.usarListaAntigua,n)||(d.usarListaAntigua=n),m(n)}),f("click",function(){p(e);let n=s();return m(n.filterProductos())}),i(),a(40," Utilizar lista antigua "),i()()(),u(41,"hr"),t(42,"table",28)(43,"thead"),M(44,de,7,2,"tr",null,w),i()(),u(46,"hr"),M(47,se,27,4,"div",29,w),t(49,"button",22),f("click",function(){p(e);let n=s();return m(n.GuardarReporte())}),t(50,"span",23),u(51,"i",30),i(),t(52,"span"),a(53,"Guardar"),i()()()()()}if(r&2){let e=s();x("ngClass",L(6,ae,e.EditarReporte)),c(12),E("ngModel",e.ReporteSeleccionado.fecha),c(5),x("value",e.MarcaSelected),c(12),F(e.ReporteSeleccionado.cliente._id?29:-1),c(5),E("ngModel",e.searchTerm),c(5),E("ngModel",e.usarListaAntigua),c(5),T(e.filteredProductos),c(3),T(e.ReporteSeleccionado.productos)}}function me(r,o){r&1&&(t(0,"th"),a(1,"Editar"),i())}function ue(r,o){if(r&1){let e=S();t(0,"td")(1,"button",41),f("click",function(){p(e);let n=s().$implicit,d=s(2);return m(d.EditarReporte_Mystic(n._id))}),t(2,"span",23),u(3,"i",42),i()()()}}function _e(r,o){if(r&1&&(t(0,"tr")(1,"td"),a(2),B(3,"date"),i(),t(4,"td"),a(5),i(),t(6,"td"),a(7),i(),h(8,ue,4,0,"td",40),i()),r&2){let e=o.$implicit,l=s(2);c(2),g(W(3,4,e.fecha,"dd/MM/YYYY")),c(3),g(e.puntuacionTotal),c(2),g(e.totalCantidad),c(),x("ngIf",!l.login.usuario.restringido)}}function fe(r,o){if(r&1&&(t(0,"table",6)(1,"thead")(2,"th"),a(3,"Fecha"),i(),t(4,"th"),a(5,"Puntuacion obtenida"),i(),t(6,"th"),a(7,"Productos vendidos"),i(),h(8,me,2,0,"th",40),i(),t(9,"tbody"),M(10,_e,9,7,"tr",null,w),i()()),r&2){let e=s();c(8),x("ngIf",!e.login.usuario.restringido),c(2),T(e.ReportesFiltradosMystic)}}function Ce(r,o){r&1&&u(0,"app-loadings")}function he(r,o){r&1&&(t(0,"th"),a(1,"Editar"),i())}function ge(r,o){if(r&1){let e=S();t(0,"td")(1,"button",41),f("click",function(){p(e);let n=s().$implicit,d=s(2);return m(d.EditarReporte_Qera(n._id))}),t(2,"span",23),u(3,"i",42),i()()()}}function xe(r,o){if(r&1&&(t(0,"tr")(1,"td"),a(2),B(3,"date"),i(),t(4,"td"),a(5),i(),t(6,"td"),a(7),i(),h(8,ge,4,0,"td",40),i()),r&2){let e=o.$implicit,l=s(2);c(2),g(W(3,4,e.fecha,"dd/MM/YYYY")),c(3),g(e.puntuacionTotal),c(2),g(e.totalCantidad),c(),x("ngIf",!l.login.usuario.restringido)}}function Se(r,o){if(r&1&&(t(0,"table",6)(1,"thead")(2,"th"),a(3,"Fecha"),i(),t(4,"th"),a(5,"Puntuacion obtenida"),i(),t(6,"th"),a(7,"Productos vendidos"),i(),h(8,he,2,0,"th",40),i(),t(9,"tbody"),M(10,xe,9,7,"tr",null,w),i()()),r&2){let e=s();c(8),x("ngIf",!e.login.usuario.restringido),c(2),T(e.ReportesFiltradosQerametik)}}function ye(r,o){r&1&&u(0,"app-loadings")}var A=class r{login=v(j);reportes=v(re);planificacion=v(oe);clientes=v(ne);productoService=v(ie);ReportesFiltradosMystic=[];ReportesFiltradosQerametik=[];loading=!1;EditarReporte=!1;ReporteSeleccionado;MarcaSelected="Mystic";searchTerm="";filteredProductos=[];usarListaAntigua=!1;modalCliente=!1;filteredClientes=[];totalCantidadMystic=0;totalPuntosMystic=0;totalCantidadQerametik=0;totalPuntosQerametik=0;constructor(){this.RefreshPage()}BuscarCliente(o){console.log(o.value),o.value.trim()===""?this.filteredClientes=[]:this.filteredClientes=this.clientes.clientes().filter(e=>e.cliente.toLowerCase().includes(o.value.toLowerCase())&&e.marca===this.MarcaSelected)}addCliente(o){this.ReporteSeleccionado.cliente=o,this.modalCliente=!1}RefreshPage(){setTimeout(()=>{if(!this.planificacion.loading()){let o=this.planificacion.planificacion()[this.planificacion.planificacion().length-1];this.reportes.cargarReportes_(o.inicio,o.cierre).subscribe(e=>{this.ReportesFiltradosMystic=e.filter(_=>_.promotora._id===this.login.usuario._id&&_.productos[0].producto.marca==="Mystic"),this.ReportesFiltradosQerametik=e.filter(_=>_.promotora._id===this.login.usuario._id&&_.productos[0].producto.marca==="Qerametik");let l=0,n=0,d=0,N=0;this.ReportesFiltradosMystic.forEach(_=>{let k=_.productos.reduce((y,C)=>y+C.cantidad,0),V=_.productos.reduce((y,C)=>y+C.producto.puntos*C.cantidad,0);_.totalCantidad=k,_.puntuacionTotal=V,l+=k,n+=V}),this.ReportesFiltradosQerametik.forEach(_=>{let k=_.productos.reduce((y,C)=>y+C.cantidad,0),V=_.productos.reduce((y,C)=>y+C.producto.puntos*C.cantidad,0);_.totalCantidad=k,_.puntuacionTotal=V,d+=k,N+=V}),this.totalCantidadMystic=l,this.totalPuntosMystic=n,this.totalCantidadQerametik=d,this.totalPuntosQerametik=N,this.loading=!0,console.log("Total Mystic:",{cantidad:this.totalCantidadMystic,puntos:this.totalPuntosMystic}),console.log("Total Qerametik:",{cantidad:this.totalCantidadQerametik,puntos:this.totalPuntosQerametik})})}},1e3)}EditarReporte_Mystic(o){setTimeout(()=>{this.EditarReporte=!this.EditarReporte,this.ReporteSeleccionado=this.ReportesFiltradosMystic.find(e=>e._id===o),this.MarcaSelected=this.ReporteSeleccionado.productos[0].producto.marca},500)}EditarReporte_Qera(o){setTimeout(()=>{this.EditarReporte=!this.EditarReporte,this.ReporteSeleccionado=this.ReportesFiltradosQerametik.find(e=>e._id===o),this.MarcaSelected=this.ReporteSeleccionado.productos[0].producto.marca},500)}filterProductos(){this.searchTerm.trim()===""?this.filteredProductos=[]:this.usarListaAntigua?this.filteredProductos=this.productoService.productos().filter(o=>o.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&o.marca===this.MarcaSelected&&o.linea==="Antigua"):this.filteredProductos=this.productoService.productos().filter(o=>o.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&o.marca===this.MarcaSelected&&o.linea!="Antigua")}AgregarProducto(o){this.ReporteSeleccionado.productos.find(e=>e.producto._id===o._id)||(this.ReporteSeleccionado.productos.push({producto:o,inicio:0,final:0,cantidad:0}),this.filterProductos())}EliminarProducto(o){this.ReporteSeleccionado.productos.splice(o,1)}GuardarReporte(){this.loading=!1,this.reportes.NuevoReporte(this.formatearReporte(this.ReporteSeleccionado)),this.RefreshPage(),this.EditarReporte=!1}formatearReporte(o){return Q(I({},o),{cliente:o.cliente._id,promotora:o.promotora._id,productos:o.productos.map(e=>Q(I({},e),{producto:e.producto._id}))})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=Y({type:r,selectors:[["app-perfil"]],decls:32,vars:12,consts:[[1,"modal",3,"ngClass"],[1,"modal-background"],[1,"modal-card"],[1,"modal-card-body"],[1,"title"],["type","text","name","","id","",1,"input",3,"input"],[1,"table","is-fullwidth","is-striped"],[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],["title","Progreso"],[1,"fas","fa-plus",2,"color","rgb(100, 180, 100)","cursor","pointer",3,"click"],[1,"modal-card-head"],[1,"modal-card-title"],["aria-label","close",1,"delete",3,"click"],[1,"field","is-grouped"],[1,"control"],["for","",1,"label"],["type","date",1,"input",3,"ngModelChange","ngModel"],[1,"select"],[3,"value"],["value","Mystic"],["value","Qerametik"],[1,"button","is-success",3,"click"],[1,"icon"],[1,"fas","fa-search"],[1,"field"],["type","text","placeholder","Buscar producto",1,"input",3,"ngModelChange","input","ngModel"],["type","checkbox",3,"ngModelChange","click","ngModel"],[1,"table","is-fullwidth","is-hoverable","is-striped"],[1,"card"],[1,"fas","fa-save"],["type","text","disabled","",1,"input",3,"ngModelChange","ngModel"],[2,"width","15px"],[1,"button","is-success","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-plus-square"],[1,"card-head"],[1,"card-header-title"],["type","number",1,"input",3,"ngModelChange","input","ngModel"],[1,"button","is-danger","is-small",3,"click"],[1,"far","fa-trash-alt"],[4,"ngIf"],[1,"button",2,"background-color","transparent","border","none","color","rgb(113, 184, 113)",3,"click"],[1,"fas","fa-edit"]],template:function(e,l){e&1&&(t(0,"div",0),u(1,"div",1),t(2,"div",2)(3,"div",3)(4,"p",4),a(5,"Buscar cliente"),i(),t(6,"input",5),f("input",function(d){return l.BuscarCliente(d.target)}),i(),u(7,"hr"),t(8,"table",6)(9,"thead")(10,"tr"),u(11,"th"),t(12,"th"),a(13,"Clientes"),i()()(),t(14,"tbody"),M(15,le,5,2,"tr",null,w),i()()()()(),h(17,pe,54,8,"div",0),t(18,"div",7)(19,"div",8),u(20,"app-title",9),a(21),i()(),t(22,"span",4),a(23),i(),u(24,"hr"),h(25,fe,12,1,"table",6)(26,Ce,1,0,"app-loadings"),t(27,"span",4),a(28),i(),u(29,"hr"),h(30,Se,12,1,"table",6)(31,ye,1,0,"app-loadings")),e&2&&(x("ngClass",L(10,ae,l.modalCliente)),c(15),T(l.filteredClientes),c(2),F(l.EditarReporte&&!l.modalCliente?17:-1),c(4),R(" ",l.login.usuario.nombre," ",l.login.usuario.apellido," "),c(2),R(" Progreso Mystic (",l.totalCantidadMystic," Productos - ",l.totalPuntosMystic,` Puntos)
`),c(2),F(l.loading?25:26),c(3),R(" Progreso Qerametik (",l.totalCantidadQerametik," Productos - ",l.totalPuntosQerametik,` Puntos)
`),c(2),F(l.loading?30:31))},dependencies:[ee,O,D,G,$,te,Z,K,X,z,J,q,U,H],encapsulation:2})};export{A as default};
