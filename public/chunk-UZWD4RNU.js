import{a as U}from"./chunk-K2Y2NB2L.js";import{a as X}from"./chunk-4AFXCQIJ.js";import{a as $}from"./chunk-LHB4DLZO.js";import{a as ne}from"./chunk-ET5GL3KV.js";import{a as te}from"./chunk-2JR42MEI.js";import{a as ee}from"./chunk-TA66JFPR.js";import"./chunk-AQIQSVC7.js";import{a as q,b as j,c as z,d as G,e as H,f as J,g as Q,h as Y,i as Z,j as K}from"./chunk-UYLEAET2.js";import"./chunk-HUNMWK37.js";import{$a as E,Fa as b,Ia as B,Na as x,Ub as N,Wa as y,X as S,Ya as v,Za as M,Zb as O,_a as R,ab as o,bb as n,cb as C,da as p,db as f,e as ie,ea as m,eb as h,fb as d,gb as I,ib as s,jb as k,kb as F,lb as V,mb as L,ob as u,pb as _,qb as g,tb as A,ub as D,za as c}from"./chunk-5XISTBJQ.js";var w=ie(ne());var oe=r=>({rotado:r}),ae=(r,i)=>({oculto:r,activo:i});function re(r,i){if(r&1&&(o(0,"option",23),s(1),n()),r&2){let e=i.$implicit;I("value",e._id),c(),k(e.cliente)}}function le(r,i){if(r&1){let e=f();o(0,"div",7)(1,"label",16),s(2,"Establecimiento"),n(),o(3,"div",17)(4,"select",22),g("ngModelChange",function(t){p(e);let a=d();return _(a.establecimiento,t)||(a.establecimiento=t),m(t)}),R(5,re,2,2,"option",23,M),n()()()}if(r&2){let e=d();c(4),u("ngModel",e.establecimiento),c(),E(e.ClientServices.ClientePorMarca(e.marca_seleccionada))}}function ce(r,i){if(r&1){let e=f();o(0,"div",7)(1,"label",16),s(2,"Motivo"),n(),o(3,"div",17)(4,"select",22),g("ngModelChange",function(t){p(e);let a=d();return _(a.establecimiento,t)||(a.establecimiento=t),m(t)}),o(5,"option",24),s(6,"Reposo Medico"),n(),o(7,"option",25),s(8,"Malestar"),n(),o(9,"option",26),s(10,"Asunto Personal"),n()()()()}if(r&2){let e=d();c(4),u("ngModel",e.establecimiento)}}function se(r,i){if(r&1){let e=f();o(0,"div",9)(1,"div",2)(2,"div",6)(3,"div",7)(4,"input",30),g("ngModelChange",function(t){p(e);let a=d(2);return _(a.tipo_evento,t)||(a.tipo_evento=t),m(t)}),n(),s(5," Juega y Gana "),n(),o(6,"div",7)(7,"input",31),g("ngModelChange",function(t){p(e);let a=d(2);return _(a.tipo_evento,t)||(a.tipo_evento=t),m(t)}),n(),s(8," Color y estilo "),n()(),o(9,"div",6)(10,"div",7)(11,"input",32),g("ngModelChange",function(t){p(e);let a=d(2);return _(a.tipo_evento,t)||(a.tipo_evento=t),m(t)}),n(),s(12," Cabellos con estilo "),n(),o(13,"div",7)(14,"input",33),g("ngModelChange",function(t){p(e);let a=d(2);return _(a.tipo_evento,t)||(a.tipo_evento=t),m(t)}),n(),s(15," Dale y gana "),n()()()()}if(r&2){let e=d(2);c(4),u("ngModel",e.tipo_evento),c(3),u("ngModel",e.tipo_evento),c(4),u("ngModel",e.tipo_evento),c(3),u("ngModel",e.tipo_evento)}}function de(r,i){if(r&1){let e=f();o(0,"button",35),h("click",function(){p(e);let t=d(3);return m(t.NextStep())}),o(1,"span",36),C(2,"i",37),n(),o(3,"span"),s(4,"Continuar"),n()()}}function pe(r,i){if(r&1){let e=f();o(0,"button",35),h("click",function(){p(e);let t=d(3);return m(t.NextStep())}),o(1,"span",36),C(2,"i",37),n(),o(3,"span"),s(4,"Continuar"),n()()}}function me(r,i){if(r&1&&x(0,de,5,0,"button",34)(1,pe,5,0,"button",34),r&2){let e=d(2);v(e.tipo!="Evento"?0:e.tipo_evento?1:-1)}}function ue(r,i){if(r&1){let e=f();o(0,"div",6)(1,"div",7)(2,"label",27)(3,"input",28),g("ngModelChange",function(t){p(e);let a=d();return _(a.tipo,t)||(a.tipo=t),m(t)}),n(),s(4," Impulso "),n()(),o(5,"div",7)(6,"label",27)(7,"input",29),g("ngModelChange",function(t){p(e);let a=d();return _(a.tipo,t)||(a.tipo=t),m(t)}),n(),s(8," Evento "),n()()(),x(9,se,16,4,"div",9)(10,me,2,1)}if(r&2){let e=d();c(3),u("ngModel",e.tipo),c(4),u("ngModel",e.tipo),c(2),v(e.tipo==="Evento"?9:-1),c(),v(e.establecimiento&&e.tipo&&e.marca_seleccionada?10:-1)}}function _e(r,i){if(r&1){let e=f();o(0,"button",35),h("click",function(){p(e);let t=d(2);return m(t.reportarFalta())}),o(1,"span",36),C(2,"i",37),n(),o(3,"span"),s(4,"Reportar"),n()()}}function ge(r,i){if(r&1&&x(0,_e,5,0,"button",34),r&2){let e=d();v(e.establecimiento?0:-1)}}function Ce(r,i){if(r&1){let e=f();o(0,"tr")(1,"td",44)(2,"button",45),h("click",function(){let t=p(e).$implicit,a=d(2);return m(a.agregarProducto(t._id))}),o(3,"span",36),C(4,"i",46),n()()(),o(5,"td"),s(6),n()()}if(r&2){let e=i.$implicit;c(6),V("",e.producto," (",e.linea,")")}}function fe(r,i){r&1&&(o(0,"thead")(1,"tr"),C(2,"th"),o(3,"th"),s(4,"Producto"),n(),o(5,"th"),s(6,"Alm. Inicial"),n(),o(7,"th"),s(8,"Alm. Final"),n()()())}function he(r,i){if(r&1){let e=f();o(0,"tr")(1,"td",44)(2,"button",47),h("click",function(){let t=p(e).$index,a=d(2);return m(a.eliminarDeProductosSelected(t))}),o(3,"span",36),C(4,"i",48),n()()(),o(5,"td"),s(6),n(),o(7,"td",49)(8,"input",50),g("ngModelChange",function(t){let a=p(e).$implicit;return _(a.inicial,t)||(a.inicial=t),m(t)}),n()(),o(9,"td",49)(10,"input",50),g("ngModelChange",function(t){let a=p(e).$implicit;return _(a.final,t)||(a.final=t),m(t)}),n()()()}if(r&2){let e=i.$implicit;c(6),L("",e.producto.marca," - ",e.producto.producto," (",e.producto.linea,")"),c(2),u("ngModel",e.inicial),c(2),u("ngModel",e.final)}}function ve(r,i){r&1&&(o(0,"div",43),s(1," Aun no haz indicado ningun producto para reportar su venta. "),n())}function xe(r,i){if(r&1){let e=f();o(0,"div",38)(1,"div",7)(2,"textarea",51),g("ngModelChange",function(t){p(e);let a=d(2);return _(a.obervacion,t)||(a.obervacion=t),m(t)}),n()()()}if(r&2){let e=d(2);c(2),u("ngModel",e.obervacion)}}function Se(r,i){if(r&1){let e=f();o(0,"button",35),h("click",function(){p(e);let t=d(2);return m(t.Reportar())}),o(1,"span",36),C(2,"i",52),n(),o(3,"span"),s(4,"Reportar"),n()()}}function we(r,i){if(r&1){let e=f();o(0,"div",9)(1,"div",2)(2,"div",38)(3,"div",7)(4,"label",16),s(5,"Buscado de productos"),n(),o(6,"input",39),g("ngModelChange",function(t){p(e);let a=d();return _(a.searchTerm,t)||(a.searchTerm=t),m(t)}),h("input",function(){p(e);let t=d();return m(t.filterProductos())}),n()()(),o(7,"div",38)(8,"div",7)(9,"label",16),s(10,"\xA0"),n(),o(11,"input",40),g("ngModelChange",function(t){p(e);let a=d();return _(a.usarListaAntigua,t)||(a.usarListaAntigua=t),m(t)}),h("click",function(){p(e);let t=d();return m(t.filterProductos())}),n(),s(12," Utilizar lista antigua "),n()(),C(13,"hr"),o(14,"table",41)(15,"thead"),R(16,Ce,7,2,"tr",null,M),n()(),o(18,"table",42),x(19,fe,9,0,"thead"),o(20,"tbody"),R(21,he,11,5,"tr",null,M,!1,ve,2,0,"div",43),n()(),x(24,xe,3,1,"div",38)(25,Se,5,0,"button",34),n()()}if(r&2){let e=d();c(6),u("ngModel",e.searchTerm),c(5),u("ngModel",e.usarListaAntigua),c(5),E(e.filteredProductos),c(3),v(e.ProductosSelected.length>0?19:-1),c(2),E(e.ProductosSelected),c(3),v(e.ProductosSelected.length>0?24:-1),c(),v(e.ProductosSelected.length>0&&e.VerificarReporte()&&e.obervacion?25:-1)}}var W=class r{ClientServices=S($);ProductosServices=S(X);ReportesServices=S(te);loginSevice=S(U);planificacion=S(ee);searchTerm="";filteredProductos=[];Informacion=b(!0);isRotated=b(!1);ProductosSelected=[];establecimiento="";tipo="";tipo_evento="";obervacion="";date_log="";CargadaInformacion=b(!1);usarListaAntigua=!1;data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log};date_aja;marca_seleccionada="";cliente="";constructor(){this.date_log=this.getFormattedDate(),this.date_aja=new Date}filterProductos(){this.searchTerm.trim()===""?this.filteredProductos=[]:this.usarListaAntigua?this.filteredProductos=this.ProductosServices.productos().filter(i=>i.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&i.marca===this.marca_seleccionada&&i.linea==="Antigua"):this.filteredProductos=this.ProductosServices.productos().filter(i=>i.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&i.marca===this.marca_seleccionada&&i.linea!="Antigua")}getFormattedDate(){let i=new Date,e=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),t=i.getFullYear(),a=i.getHours(),T=String(i.getMinutes()).padStart(2,"0"),P=String(i.getSeconds()).padStart(2,"0"),be=a>=12?"PM":"AM";return a=a%12,a=a||12,`${t}-${l}-${e}`}toggleInformacion(){this.Informacion.update(i=>!i),this.isRotated.update(i=>!i)}agregarProducto(i){this.searchTerm="",this.filterProductos();let e=this.ProductosServices.productos().find(t=>t._id===i);if(!e){console.error("Producto no encontrado");return}this.ProductosSelected.some(t=>t.producto?._id===e._id)||this.ProductosSelected.push({producto:e,inicial:0,final:0})}VerificarReporte(){return this.ProductosSelected.every(i=>i.inicial>0&&i.inicial>0&&i.final<=i.inicial)}eliminarDeProductosSelected(i){this.ProductosSelected.splice(i,1)}resta=(i,e)=>i-e;Reportar(){w.default.fire({title:"\xBFReportar ventas de hoy?",text:"Recuerda verificar bien las cantidades que declaras y los productos seleccionados",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(i=>{i.isConfirmed&&(w.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente=this.establecimiento,this.data.tipo=this.tipo,this.data.evento=this.tipo_evento,this.data.productos=this.ProductosSelected.map(e=>({producto:e.producto._id,inicio:e.inicial,final:e.final,cantidad:this.resta(e.inicial,e.final)})),this.data.observacion=this.obervacion,this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}reportarFalta(){w.default.fire({title:"\xBFReportar falta el dia de hoy?",text:"No generaras puntos ni ventas el dia de hoy",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(i=>{i.isConfirmed&&(w.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente="6756ef7ed60449fa9c3ee3fa",this.data.tipo=this.establecimiento,this.data.evento=this.tipo_evento,this.data.productos=[],this.data.observacion="Promotora reporto falta justificada por lo que no pudo realizar ventas hoy",this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}NextStep(){this.CargadaInformacion.update(i=>!0),this.isRotated.update(i=>!0),this.Informacion.update(i=>!1)}verFormato(i){console.log(i.value)}planification(i,e){let l=new Date(i),t=new Date(l.getTime()+0*60*60*1e3),a=t.toISOString();t.setUTCDate(i.getUTCDate()+1),t.setUTCHours(0,0,0,0);let T=t.toISOString();return console.log(this.planificacion.planificacion()[this.planificacion.planificacion().length-1].planificacion,"<=>",T),this.planificacion.planificacion()[this.planificacion.planificacion().length-1].planificacion.find(P=>P.fecha===T&&P.promotora===e)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["app-reporte"]],decls:40,vars:16,consts:[[1,"formulario_envio_informacion"],[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],[1,"title",2,"color","rgb(212, 212, 212)"],[2,"font-weight","bold"],[1,"subtitle",2,"color","rgb(212, 212, 212)"],[1,"field","is-grouped"],[1,"control"],["type","date",1,"input",3,"change","value","max"],[1,"card"],[1,"card-header"],[1,"card-header-title"],["aria-label","more options",1,"card-header-icon"],[1,"icon",3,"click","ngClass"],["aria-hidden","true",1,"fas","fa-angle-up"],[1,"card-content",3,"ngClass"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","change","ngModel"],["value","Mystic"],["value","Qerametik"],["value","Falta"],[3,"ngModelChange","ngModel"],[3,"value"],["value","Reposo"],["value","Malestar"],["value","Asunto personal"],[1,"radio"],["type","radio","name","evento","value","Impulso",3,"ngModelChange","ngModel"],["type","radio","name","evento","value","Evento",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Juega y Gana",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Color y estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Cabellos con estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Dale y gana",3,"ngModelChange","ngModel"],[1,"button","is-primary"],[1,"button","is-primary",3,"click"],[1,"icon"],[1,"fas","fa-long-arrow-alt-right"],[1,"field"],["type","text","placeholder","Buscar producto",1,"input",3,"ngModelChange","input","ngModel"],["type","checkbox",3,"ngModelChange","click","ngModel"],[1,"table","is-fullwidth","is-hoverable","is-striped"],[1,"table","is-fullwidth","is-striped"],[1,"notification","is-primary","is-light"],[2,"width","15px"],[1,"button","is-success","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-plus-square"],[1,"button","is-danger","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-trash-alt"],[2,"width","100px"],["type","number","placeholde","Cantidad vendida",1,"input",3,"ngModelChange","ngModel"],["placeholder","Observaci\xF3n",1,"textarea",3,"ngModelChange","ngModel"],[1,"fas","fa-check"]],template:function(e,l){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),s(4),n(),C(5,"br"),o(6,"b",4),s(7,"Zona: "),n(),s(8),C(9,"br"),o(10,"span",5)(11,"div",6)(12,"div",7)(13,"input",8),h("change",function(a){return l.verFormato(a.target)}),n()()()()()(),C(14,"hr"),o(15,"div",9)(16,"header",10)(17,"p",11),s(18,"Informaci\xF3n del reporte"),n(),o(19,"button",12)(20,"span",13),h("click",function(){return l.toggleInformacion()}),C(21,"i",14),n()()(),o(22,"div",15)(23,"div",6)(24,"div",7)(25,"label",16),s(26,"Marca"),n(),o(27,"div",17)(28,"select",18),g("ngModelChange",function(a){return _(l.marca_seleccionada,a)||(l.marca_seleccionada=a),a}),h("change",function(){return l.establecimiento=""}),o(29,"option",19),s(30,"Mystic"),n(),o(31,"option",20),s(32,"Qerametik"),n(),o(33,"option",21),s(34,"Falta"),n()()()(),x(35,le,7,1,"div",7)(36,ce,11,1,"div",7),n(),x(37,ue,11,4)(38,ge,1,1),n()(),x(39,we,26,6,"div",9),n()),e&2&&(c(4),V(" ",l.loginSevice.usuario.nombre," ",l.loginSevice.usuario.apellido," "),c(4),F("",l.loginSevice.usuario.region," "),c(5),y("value",l.date_log)("max",l.date_log),c(7),y("ngClass",A(11,oe,l.isRotated())),c(2),y("ngClass",D(13,ae,!l.Informacion(),l.Informacion())),c(6),u("ngModel",l.marca_seleccionada),c(7),v(l.marca_seleccionada&&l.marca_seleccionada!="Falta"?35:l.marca_seleccionada&&l.marca_seleccionada==="Falta"?36:-1),c(2),v(l.marca_seleccionada!="Falta"?37:38),c(2),v(l.CargadaInformacion()?39:-1))},dependencies:[O,N,K,Y,Z,j,H,q,Q,J,z,G],styles:['@charset "UTF-8";.oculto[_ngcontent-%COMP%]{overflow:hidden;max-height:0px;padding:0;margin:0;transition:max-height .9s ease-out,padding .9s ease-out,margin 1s ease-out}.activo[_ngcontent-%COMP%]{overflow:hidden;max-height:1000px;transition:max-height .9s ease-out,padding .3s ease-out,margin .3s ease-out}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.icon.rotado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:rotate(180deg)}']})};export{W as default};
