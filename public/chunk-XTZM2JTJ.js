import{i as O}from"./chunk-KQ2Y533U.js";import{a as Y}from"./chunk-FKKGU6C3.js";import{a as Z}from"./chunk-HA5Q5I6N.js";import{a as $}from"./chunk-3JJKJOSC.js";import{a as K}from"./chunk-QBCWW73X.js";import{a as A,b as q,c as G,d as J,e as Q,f as j,g as z,h as H,i as U}from"./chunk-X7V57MHS.js";import"./chunk-F2UG3DZ7.js";import{$a as R,Fa as b,Ia as V,Na as S,Pb as D,Sb as N,Wa as w,X as x,Ya as v,Za as y,_a as M,ab as a,bb as n,cb as u,da as p,db as h,e as X,ea as m,eb as f,fb as s,gb as W,hb as c,ib as I,jb as k,kb as E,lb as B,mb as _,nb as g,ob as C,rb as F,sb as L,za as d}from"./chunk-TPQHVVYC.js";var P=X($());var ee=l=>({rotado:l}),te=(l,o)=>({oculto:l,activo:o});function ie(l,o){if(l&1&&(a(0,"option",25),c(1),n()),l&2){let e=o.$implicit;W("value",e._id),d(),I(e.cliente)}}function ne(l,o){if(l&1){let e=h();a(0,"div",7)(1,"label",16),c(2,"Establecimiento"),n(),a(3,"div",17)(4,"select",24),C("ngModelChange",function(t){p(e);let i=s();return g(i.establecimiento,t)||(i.establecimiento=t),m(t)}),M(5,ie,2,2,"option",25,y),n()()()}if(l&2){let e=s();d(4),_("ngModel",e.establecimiento),d(),R(e.ClientServices.ClientePorMarca(e.marca_seleccionada))}}function oe(l,o){if(l&1){let e=h();a(0,"div",9)(1,"div",2)(2,"div",6)(3,"div",7)(4,"input",26),C("ngModelChange",function(t){p(e);let i=s();return g(i.tipo_evento,t)||(i.tipo_evento=t),m(t)}),n(),c(5," Juega y Gana "),n(),a(6,"div",7)(7,"input",27),C("ngModelChange",function(t){p(e);let i=s();return g(i.tipo_evento,t)||(i.tipo_evento=t),m(t)}),n(),c(8," Color y estilo "),n()(),a(9,"div",6)(10,"div",7)(11,"input",28),C("ngModelChange",function(t){p(e);let i=s();return g(i.tipo_evento,t)||(i.tipo_evento=t),m(t)}),n(),c(12," Cabellos con estilo "),n(),a(13,"div",7)(14,"input",29),C("ngModelChange",function(t){p(e);let i=s();return g(i.tipo_evento,t)||(i.tipo_evento=t),m(t)}),n(),c(15," Dale y gana "),n()()()()}if(l&2){let e=s();d(4),_("ngModel",e.tipo_evento),d(3),_("ngModel",e.tipo_evento),d(4),_("ngModel",e.tipo_evento),d(3),_("ngModel",e.tipo_evento)}}function ae(l,o){if(l&1){let e=h();a(0,"button",31),f("click",function(){p(e);let t=s(2);return m(t.NextStep())}),a(1,"span",32),u(2,"i",33),n(),a(3,"span"),c(4,"Continuar"),n()()}}function re(l,o){if(l&1){let e=h();a(0,"button",31),f("click",function(){p(e);let t=s(2);return m(t.NextStep())}),a(1,"span",32),u(2,"i",33),n(),a(3,"span"),c(4,"Continuar"),n()()}}function le(l,o){if(l&1&&S(0,ae,5,0,"button",30)(1,re,5,0,"button",30),l&2){let e=s();v(e.tipo!="Evento"?0:e.tipo_evento?1:-1)}}function de(l,o){if(l&1){let e=h();a(0,"tr")(1,"td",39)(2,"button",40),f("click",function(){let t=p(e).$implicit,i=s(2);return m(i.agregarProducto(t._id))}),a(3,"span",32),u(4,"i",41),n()()(),a(5,"td"),c(6),n()()}if(l&2){let e=o.$implicit;d(6),E("",e.producto," (",e.linea,")")}}function ce(l,o){l&1&&(a(0,"thead")(1,"tr"),u(2,"th"),a(3,"th"),c(4,"Producto"),n(),a(5,"th"),c(6,"Vendido"),n()()())}function se(l,o){if(l&1){let e=h();a(0,"tr")(1,"td",39)(2,"button",42),f("click",function(){let t=p(e).$index,i=s(2);return m(i.eliminarDeProductosSelected(t))}),a(3,"span",32),u(4,"i",43),n()()(),a(5,"td"),c(6),n(),a(7,"td",44)(8,"input",45),C("ngModelChange",function(t){let i=p(e).$implicit;return g(i.cantidad,t)||(i.cantidad=t),m(t)}),n()()()}if(l&2){let e=o.$implicit;d(6),B("",e.producto.marca," - ",e.producto.producto," (",e.producto.linea,")"),d(2),_("ngModel",e.cantidad)}}function pe(l,o){l&1&&(a(0,"div",38),c(1," Aun no haz indicado ningun producto para reportar su venta. "),n())}function me(l,o){if(l&1){let e=h();a(0,"div",34)(1,"div",7)(2,"textarea",46),C("ngModelChange",function(t){p(e);let i=s(2);return g(i.obervacion,t)||(i.obervacion=t),m(t)}),n()()()}if(l&2){let e=s(2);d(2),_("ngModel",e.obervacion)}}function ue(l,o){if(l&1){let e=h();a(0,"button",31),f("click",function(){p(e);let t=s(2);return m(t.Reportar())}),a(1,"span",32),u(2,"i",47),n(),a(3,"span"),c(4,"Reportar"),n()()}}function _e(l,o){if(l&1){let e=h();a(0,"div",9)(1,"div",2)(2,"div",34)(3,"div",7)(4,"label",16),c(5,"Buscado de productos"),n(),a(6,"input",35),C("ngModelChange",function(t){p(e);let i=s();return g(i.searchTerm,t)||(i.searchTerm=t),m(t)}),f("input",function(){p(e);let t=s();return m(t.filterProductos())}),n()()(),u(7,"hr"),a(8,"table",36)(9,"thead"),M(10,de,7,2,"tr",null,y),n()(),a(12,"table",37),S(13,ce,7,0,"thead"),a(14,"tbody"),M(15,se,9,4,"tr",null,y,!1,pe,2,0,"div",38),n()(),S(18,me,3,1,"div",34)(19,ue,5,0,"button",30),n()()}if(l&2){let e=s();d(6),_("ngModel",e.searchTerm),d(4),R(e.filteredProductos),d(3),v(e.ProductosSelected.length>0?13:-1),d(2),R(e.ProductosSelected),d(3),v(e.ProductosSelected.length>0?18:-1),d(),v(e.ProductosSelected.length>0&&e.VerificarReporte()&&e.obervacion?19:-1)}}var T=class l{ClientServices=x(Z);ProductosServices=x(Y);ReportesServices=x(K);loginSevice=x(O);searchTerm="";filteredProductos=[];Informacion=b(!0);isRotated=b(!1);ProductosSelected=[];establecimiento="";tipo="";tipo_evento="";obervacion="";date_log="";CargadaInformacion=b(!1);data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log};marca_seleccionada="";constructor(){this.date_log=this.getFormattedDate()}filterProductos(){this.searchTerm.trim()===""?this.filteredProductos=[]:this.filteredProductos=this.ProductosServices.productos().filter(o=>o.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&o.marca===this.marca_seleccionada)}getFormattedDate(){let o=new Date,e=String(o.getDate()).padStart(2,"0"),r=String(o.getMonth()+1).padStart(2,"0"),t=o.getFullYear(),i=o.getHours(),ge=String(o.getMinutes()).padStart(2,"0"),Ce=String(o.getSeconds()).padStart(2,"0"),he=i>=12?"PM":"AM";return i=i%12,i=i||12,`${t}-${r}-${e}`}toggleInformacion(){this.Informacion.update(o=>!o),this.isRotated.update(o=>!o)}agregarProducto(o){this.searchTerm="",this.filterProductos();let e=this.ProductosServices.productos().find(t=>t._id===o);if(!e){console.error("Producto no encontrado");return}this.ProductosSelected.some(t=>t.producto?._id===e._id)||this.ProductosSelected.push({producto:e,cantidad:0})}VerificarReporte(){return this.ProductosSelected.every(o=>o.cantidad>0)}eliminarDeProductosSelected(o){this.ProductosSelected.splice(o,1)}Reportar(){P.default.fire({title:"\xBFReportar ventas de hoy?",text:"Recuerda verificar bien las cantidades que declaras y los productos seleccionados",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(o=>{o.isConfirmed&&(P.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente=this.establecimiento,this.data.tipo=this.tipo,this.data.evento=this.tipo_evento,this.data.productos=this.ProductosSelected.map(e=>({producto:e.producto._id,cantidad:e.cantidad})),this.data.observacion=this.obervacion,this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}NextStep(){this.CargadaInformacion.update(o=>!0),this.isRotated.update(o=>!0),this.Informacion.update(o=>!1)}verFormato(o){console.log(o.value)}static \u0275fac=function(e){return new(e||l)};static \u0275cmp=V({type:l,selectors:[["app-reporte"]],decls:46,vars:20,consts:[[1,"formulario_envio_informacion"],[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],[1,"title",2,"color","rgb(212, 212, 212)"],[2,"font-weight","bold"],[1,"subtitle",2,"color","rgb(212, 212, 212)"],[1,"field","is-grouped"],[1,"control"],["type","date",1,"input",3,"change","value","max","disabled"],[1,"card"],[1,"card-header"],[1,"card-header-title"],["aria-label","more options",1,"card-header-icon"],[1,"icon",3,"click","ngClass"],["aria-hidden","true",1,"fas","fa-angle-up"],[1,"card-content",3,"ngClass"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","change","ngModel"],["value","Mystic"],["value","Qerametik"],[1,"radio"],["type","radio","name","evento","value","Impulso",3,"ngModelChange","ngModel"],["type","radio","name","evento","value","Evento",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["type","radio","name","Tipo_evento","value","Juega y Gana",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Color y estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Cabellos con estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Dale y gana",3,"ngModelChange","ngModel"],[1,"button","is-primary"],[1,"button","is-primary",3,"click"],[1,"icon"],[1,"fas","fa-long-arrow-alt-right"],[1,"field"],["type","text","placeholder","Buscar producto",1,"input",3,"ngModelChange","input","ngModel"],[1,"table","is-fullwidth","is-hoverable","is-striped"],[1,"table","is-fullwidth","is-striped"],[1,"notification","is-primary","is-light"],[2,"width","15px"],[1,"button","is-success","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-plus-square"],[1,"button","is-danger","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-trash-alt"],[2,"width","30px"],["type","number","placeholde","Cantidad vendida",1,"input",3,"ngModelChange","ngModel"],["placeholder","Observaci\xF3n",1,"textarea",3,"ngModelChange","ngModel"],[1,"fas","fa-check"]],template:function(e,r){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),c(4),n(),u(5,"br"),a(6,"b",4),c(7,"Zona: "),n(),c(8),u(9,"br"),a(10,"span",5)(11,"div",6)(12,"div",7)(13,"input",8),f("change",function(i){return r.verFormato(i.target)}),n()()()()()(),u(14,"hr"),a(15,"div",9)(16,"header",10)(17,"p",11),c(18,"Informaci\xF3n del reporte"),n(),a(19,"button",12)(20,"span",13),f("click",function(){return r.toggleInformacion()}),u(21,"i",14),n()()(),a(22,"div",15)(23,"div",6)(24,"div",7)(25,"label",16),c(26,"Marca"),n(),a(27,"div",17)(28,"select",18),C("ngModelChange",function(i){return g(r.marca_seleccionada,i)||(r.marca_seleccionada=i),i}),f("change",function(){return r.establecimiento=""}),a(29,"option",19),c(30,"Mystic"),n(),a(31,"option",20),c(32,"Qerametik"),n()()()(),S(33,ne,7,1,"div",7),n(),a(34,"div",6)(35,"div",7)(36,"label",21)(37,"input",22),C("ngModelChange",function(i){return g(r.tipo,i)||(r.tipo=i),i}),n(),c(38," Impulso "),n()(),a(39,"div",7)(40,"label",21)(41,"input",23),C("ngModelChange",function(i){return g(r.tipo,i)||(r.tipo=i),i}),n(),c(42," Evento "),n()()(),S(43,oe,16,4,"div",9)(44,le,2,1),n()(),S(45,_e,20,5,"div",9),n()),e&2&&(d(4),E(" ",r.loginSevice.usuario.nombre," ",r.loginSevice.usuario.apellido," "),d(4),k("",r.loginSevice.usuario.region," "),d(5),w("value",r.date_log)("max",r.date_log)("disabled",r.loginSevice.usuario.restringido),d(7),w("ngClass",F(15,ee,r.isRotated())),d(2),w("ngClass",L(17,te,!r.Informacion(),r.Informacion())),d(6),_("ngModel",r.marca_seleccionada),d(5),v(r.marca_seleccionada?33:-1),d(4),_("ngModel",r.tipo),d(4),_("ngModel",r.tipo),d(2),v(r.tipo==="Evento"?43:-1),d(),v(r.establecimiento&&r.tipo&&r.marca_seleccionada?44:-1),d(),v(r.CargadaInformacion()?45:-1))},dependencies:[N,D,U,z,H,A,J,j,Q,q,G],styles:['@charset "UTF-8";.oculto[_ngcontent-%COMP%]{overflow:hidden;max-height:0px;padding:0;margin:0;transition:max-height .9s ease-out,padding .9s ease-out,margin 1s ease-out}.activo[_ngcontent-%COMP%]{overflow:hidden;max-height:1000px;transition:max-height .9s ease-out,padding .3s ease-out,margin .3s ease-out}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.icon.rotado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:rotate(180deg)}']})};export{T as default};