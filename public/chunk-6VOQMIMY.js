import{a as j}from"./chunk-DQYHYLGC.js";import{a as K}from"./chunk-L6TTEGQS.js";import{a as X}from"./chunk-VP6DO7M2.js";import{a as ie}from"./chunk-IU24C5VR.js";import{a as ee}from"./chunk-KGHPO2LI.js";import{a as $}from"./chunk-YDYGSQ3F.js";import"./chunk-HYUWSGKO.js";import{a as q,b as U,c as z,d as G,e as H,f as J,g as Q,h as Y,i as Z}from"./chunk-3KJL3C3X.js";import"./chunk-F5LWF3O4.js";import{$a as T,Fa as w,Ia as B,Na as x,Tb as O,Wa as y,X as S,Ya as f,Yb as A,Za as M,_a as R,ab as n,bb as o,cb as u,da as p,db as _,e as te,ea as m,eb as v,fb as s,gb as I,ib as d,jb as F,kb as k,lb as V,mb as D,ob as g,pb as C,qb as h,tb as L,ub as N,za as c}from"./chunk-FEZNDU67.js";var b=te(ie());var ne=a=>({rotado:a}),oe=(a,i)=>({oculto:a,activo:i});function ae(a,i){if(a&1&&(n(0,"option",23),d(1),o()),a&2){let e=i.$implicit;I("value",e._id),c(),F(e.cliente)}}function re(a,i){if(a&1){let e=_();n(0,"div",7)(1,"label",16),d(2,"Establecimiento"),o(),n(3,"div",17)(4,"select",22),h("ngModelChange",function(t){p(e);let r=s();return C(r.establecimiento,t)||(r.establecimiento=t),m(t)}),R(5,ae,2,2,"option",23,M),o()()()}if(a&2){let e=s();c(4),g("ngModel",e.establecimiento),c(),T(e.ClientServices.clientes())}}function le(a,i){if(a&1){let e=_();n(0,"div",7)(1,"label",16),d(2,"Motivo"),o(),n(3,"div",17)(4,"select",24),h("ngModelChange",function(t){p(e);let r=s();return C(r.establecimiento,t)||(r.establecimiento=t),m(t)}),n(5,"option",25),d(6,"Reposo Medico"),o(),n(7,"option",26),d(8,"Malestar"),o(),n(9,"option",27),d(10,"Asunto Personal"),o()()()()}if(a&2){let e=s();c(4),g("ngModel",e.establecimiento)}}function ce(a,i){if(a&1){let e=_();n(0,"div",9)(1,"div",2)(2,"div",6)(3,"div",7)(4,"input",31),h("ngModelChange",function(t){p(e);let r=s(2);return C(r.tipo_evento,t)||(r.tipo_evento=t),m(t)}),o(),d(5," Juega y Gana "),o(),n(6,"div",7)(7,"input",32),h("ngModelChange",function(t){p(e);let r=s(2);return C(r.tipo_evento,t)||(r.tipo_evento=t),m(t)}),o(),d(8," Color y estilo "),o()(),n(9,"div",6)(10,"div",7)(11,"input",33),h("ngModelChange",function(t){p(e);let r=s(2);return C(r.tipo_evento,t)||(r.tipo_evento=t),m(t)}),o(),d(12," Cabellos con estilo "),o(),n(13,"div",7)(14,"input",34),h("ngModelChange",function(t){p(e);let r=s(2);return C(r.tipo_evento,t)||(r.tipo_evento=t),m(t)}),o(),d(15," Dale y gana "),o()()()()}if(a&2){let e=s(2);c(4),g("ngModel",e.tipo_evento),c(3),g("ngModel",e.tipo_evento),c(4),g("ngModel",e.tipo_evento),c(3),g("ngModel",e.tipo_evento)}}function de(a,i){if(a&1){let e=_();n(0,"button",36),v("click",function(){p(e);let t=s(3);return m(t.NextStep())}),n(1,"span",37),u(2,"i",38),o(),n(3,"span"),d(4,"Continuar"),o()()}}function se(a,i){if(a&1){let e=_();n(0,"button",36),v("click",function(){p(e);let t=s(3);return m(t.NextStep())}),n(1,"span",37),u(2,"i",38),o(),n(3,"span"),d(4,"Continuar"),o()()}}function pe(a,i){if(a&1&&x(0,de,5,0,"button",35)(1,se,5,0,"button",35),a&2){let e=s(2);f(e.tipo!="Evento"?0:e.tipo_evento?1:-1)}}function me(a,i){if(a&1){let e=_();n(0,"div",6)(1,"div",7)(2,"label",28)(3,"input",29),h("ngModelChange",function(t){p(e);let r=s();return C(r.tipo,t)||(r.tipo=t),m(t)}),o(),d(4," Impulso "),o()(),n(5,"div",7)(6,"label",28)(7,"input",30),h("ngModelChange",function(t){p(e);let r=s();return C(r.tipo,t)||(r.tipo=t),m(t)}),o(),d(8," Evento "),o()()(),x(9,ce,16,4,"div",9)(10,pe,2,1)}if(a&2){let e=s();c(3),g("ngModel",e.tipo),c(4),g("ngModel",e.tipo),c(2),f(e.tipo==="Evento"?9:-1),c(),f(e.establecimiento&&e.tipo&&e.marca_seleccionada?10:-1)}}function ue(a,i){if(a&1){let e=_();n(0,"button",36),v("click",function(){p(e);let t=s(2);return m(t.reportarFalta())}),n(1,"span",37),u(2,"i",38),o(),n(3,"span"),d(4,"Reportar"),o()()}}function _e(a,i){if(a&1&&x(0,ue,5,0,"button",35),a&2){let e=s();f(e.establecimiento?0:-1)}}function ge(a,i){if(a&1){let e=_();n(0,"tr")(1,"td",44)(2,"button",45),v("click",function(){let t=p(e).$implicit,r=s(2);return m(r.agregarProducto(t._id))}),n(3,"span",37),u(4,"i",46),o()()(),n(5,"td"),d(6),o()()}if(a&2){let e=i.$implicit;c(6),V("",e.producto," (",e.linea,")")}}function Ce(a,i){a&1&&(n(0,"thead")(1,"tr"),u(2,"th"),n(3,"th"),d(4,"Producto"),o(),n(5,"th"),d(6,"Vendido"),o()()())}function he(a,i){if(a&1){let e=_();n(0,"tr")(1,"td",44)(2,"button",47),v("click",function(){let t=p(e).$index,r=s(2);return m(r.eliminarDeProductosSelected(t))}),n(3,"span",37),u(4,"i",48),o()()(),n(5,"td"),d(6),o(),n(7,"td",49)(8,"input",50),h("ngModelChange",function(t){let r=p(e).$implicit;return C(r.cantidad,t)||(r.cantidad=t),m(t)}),o()()()}if(a&2){let e=i.$implicit;c(6),D("",e.producto.marca," - ",e.producto.producto," (",e.producto.linea,")"),c(2),g("ngModel",e.cantidad)}}function fe(a,i){a&1&&(n(0,"div",43),d(1," Aun no haz indicado ningun producto para reportar su venta. "),o())}function ve(a,i){if(a&1){let e=_();n(0,"div",39)(1,"div",7)(2,"textarea",51),h("ngModelChange",function(t){p(e);let r=s(2);return C(r.obervacion,t)||(r.obervacion=t),m(t)}),o()()()}if(a&2){let e=s(2);c(2),g("ngModel",e.obervacion)}}function xe(a,i){if(a&1){let e=_();n(0,"button",36),v("click",function(){p(e);let t=s(2);return m(t.Reportar())}),n(1,"span",37),u(2,"i",52),o(),n(3,"span"),d(4,"Reportar"),o()()}}function Se(a,i){if(a&1){let e=_();n(0,"div",9)(1,"div",2)(2,"div",39)(3,"div",7)(4,"label",16),d(5,"Buscado de productos"),o(),n(6,"input",40),h("ngModelChange",function(t){p(e);let r=s();return C(r.searchTerm,t)||(r.searchTerm=t),m(t)}),v("input",function(){p(e);let t=s();return m(t.filterProductos())}),o()()(),u(7,"hr"),n(8,"table",41)(9,"thead"),R(10,ge,7,2,"tr",null,M),o()(),n(12,"table",42),x(13,Ce,7,0,"thead"),n(14,"tbody"),R(15,he,9,4,"tr",null,M,!1,fe,2,0,"div",43),o()(),x(18,ve,3,1,"div",39)(19,xe,5,0,"button",35),o()()}if(a&2){let e=s();c(6),g("ngModel",e.searchTerm),c(4),T(e.filteredProductos),c(3),f(e.ProductosSelected.length>0?13:-1),c(2),T(e.ProductosSelected),c(3),f(e.ProductosSelected.length>0?18:-1),c(),f(e.ProductosSelected.length>0&&e.VerificarReporte()&&e.obervacion?19:-1)}}var W=class a{ClientServices=S(X);ProductosServices=S(K);ReportesServices=S(ee);loginSevice=S(j);planificacion=S($);searchTerm="";filteredProductos=[];Informacion=w(!0);isRotated=w(!1);ProductosSelected=[];establecimiento="";tipo="";tipo_evento="";obervacion="";date_log="";CargadaInformacion=w(!1);data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log};date_aja;marca_seleccionada="";cliente="";constructor(){this.date_log=this.getFormattedDate(),this.date_aja=new Date,setTimeout(()=>{this.planification(this.date_aja,this.loginSevice.usuario.nombre).cliente&&(this.establecimiento=this.planification(this.date_aja,this.loginSevice.usuario.nombre).cliente,console.log(this.establecimiento))},1e3)}filterProductos(){this.searchTerm.trim()===""?this.filteredProductos=[]:this.filteredProductos=this.ProductosServices.productos().filter(i=>i.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&i.marca===this.marca_seleccionada)}getFormattedDate(){let i=new Date,e=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),t=i.getFullYear(),r=i.getHours(),E=String(i.getMinutes()).padStart(2,"0"),P=String(i.getSeconds()).padStart(2,"0"),be=r>=12?"PM":"AM";return r=r%12,r=r||12,`${t}-${l}-${e}`}toggleInformacion(){this.Informacion.update(i=>!i),this.isRotated.update(i=>!i)}agregarProducto(i){this.searchTerm="",this.filterProductos();let e=this.ProductosServices.productos().find(t=>t._id===i);if(!e){console.error("Producto no encontrado");return}this.ProductosSelected.some(t=>t.producto?._id===e._id)||this.ProductosSelected.push({producto:e,cantidad:0})}VerificarReporte(){return this.ProductosSelected.every(i=>i.cantidad>0)}eliminarDeProductosSelected(i){this.ProductosSelected.splice(i,1)}Reportar(){b.default.fire({title:"\xBFReportar ventas de hoy?",text:"Recuerda verificar bien las cantidades que declaras y los productos seleccionados",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(i=>{i.isConfirmed&&(b.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente=this.establecimiento,this.data.tipo=this.tipo,this.data.evento=this.tipo_evento,this.data.productos=this.ProductosSelected.map(e=>({producto:e.producto._id,cantidad:e.cantidad})),this.data.observacion=this.obervacion,this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}reportarFalta(){b.default.fire({title:"\xBFReportar falta el dia de hoy?",text:"No generaras puntos ni ventas el dia de hoy",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(i=>{i.isConfirmed&&(b.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente="6756ef7ed60449fa9c3ee3fa",this.data.tipo=this.establecimiento,this.data.evento=this.tipo_evento,this.data.productos=[],this.data.observacion="Promotora reporto falta justificada por lo que no pudo realizar ventas hoy",this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}NextStep(){this.CargadaInformacion.update(i=>!0),this.isRotated.update(i=>!0),this.Informacion.update(i=>!1)}verFormato(i){console.log(i.value)}planification(i,e){let l=new Date(i),t=new Date(l.getTime()+0*60*60*1e3),r=t.toISOString();t.setUTCDate(i.getUTCDate()+1),t.setUTCHours(0,0,0,0);let E=t.toISOString();return console.log(this.planificacion.planificacion()[this.planificacion.planificacion().length-1].planificacion,"<=>",E),this.planificacion.planificacion()[this.planificacion.planificacion().length-1].planificacion.find(P=>P.fecha===E&&P.promotora===e)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=B({type:a,selectors:[["app-reporte"]],decls:40,vars:17,consts:[[1,"formulario_envio_informacion"],[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],[1,"title",2,"color","rgb(212, 212, 212)"],[2,"font-weight","bold"],[1,"subtitle",2,"color","rgb(212, 212, 212)"],[1,"field","is-grouped"],[1,"control"],["type","date",1,"input",3,"change","value","max","disabled"],[1,"card"],[1,"card-header"],[1,"card-header-title"],["aria-label","more options",1,"card-header-icon"],[1,"icon",3,"click","ngClass"],["aria-hidden","true",1,"fas","fa-angle-up"],[1,"card-content",3,"ngClass"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","change","ngModel"],["value","Mystic"],["value","Qerametik"],["value","Falta"],["disabled","",3,"ngModelChange","ngModel"],[3,"value"],[3,"ngModelChange","ngModel"],["value","Reposo"],["value","Malestar"],["value","Asunto personal"],[1,"radio"],["type","radio","name","evento","value","Impulso",3,"ngModelChange","ngModel"],["type","radio","name","evento","value","Evento",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Juega y Gana",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Color y estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Cabellos con estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Dale y gana",3,"ngModelChange","ngModel"],[1,"button","is-primary"],[1,"button","is-primary",3,"click"],[1,"icon"],[1,"fas","fa-long-arrow-alt-right"],[1,"field"],["type","text","placeholder","Buscar producto",1,"input",3,"ngModelChange","input","ngModel"],[1,"table","is-fullwidth","is-hoverable","is-striped"],[1,"table","is-fullwidth","is-striped"],[1,"notification","is-primary","is-light"],[2,"width","15px"],[1,"button","is-success","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-plus-square"],[1,"button","is-danger","is-small","is-outlined",2,"border","none",3,"click"],[1,"fas","fa-trash-alt"],[2,"width","30px"],["type","number","placeholde","Cantidad vendida",1,"input",3,"ngModelChange","ngModel"],["placeholder","Observaci\xF3n",1,"textarea",3,"ngModelChange","ngModel"],[1,"fas","fa-check"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),d(4),o(),u(5,"br"),n(6,"b",4),d(7,"Zona: "),o(),d(8),u(9,"br"),n(10,"span",5)(11,"div",6)(12,"div",7)(13,"input",8),v("change",function(r){return l.verFormato(r.target)}),o()()()()()(),u(14,"hr"),n(15,"div",9)(16,"header",10)(17,"p",11),d(18,"Informaci\xF3n del reporte"),o(),n(19,"button",12)(20,"span",13),v("click",function(){return l.toggleInformacion()}),u(21,"i",14),o()()(),n(22,"div",15)(23,"div",6)(24,"div",7)(25,"label",16),d(26,"Marca"),o(),n(27,"div",17)(28,"select",18),h("ngModelChange",function(r){return C(l.marca_seleccionada,r)||(l.marca_seleccionada=r),r}),v("change",function(){return l.establecimiento=""}),n(29,"option",19),d(30,"Mystic"),o(),n(31,"option",20),d(32,"Qerametik"),o(),n(33,"option",21),d(34,"Falta"),o()()()(),x(35,re,7,1,"div",7)(36,le,11,1,"div",7),o(),x(37,me,11,4)(38,_e,1,1),o()(),x(39,Se,20,5,"div",9),o()),e&2&&(c(4),V(" ",l.loginSevice.usuario.nombre," ",l.loginSevice.usuario.apellido," "),c(4),k("",l.loginSevice.usuario.region," "),c(5),y("value",l.date_log)("max",l.date_log)("disabled",l.loginSevice.usuario.restringido),c(7),y("ngClass",L(12,ne,l.isRotated())),c(2),y("ngClass",N(14,oe,!l.Informacion(),l.Informacion())),c(6),g("ngModel",l.marca_seleccionada),c(7),f(l.marca_seleccionada!="Falta"?35:l.marca_seleccionada&&l.marca_seleccionada==="Falta"?36:-1),c(2),f(l.marca_seleccionada!="Falta"?37:38),c(2),f(l.CargadaInformacion()?39:-1))},dependencies:[A,O,Z,Q,Y,q,G,J,H,U,z],styles:['@charset "UTF-8";.oculto[_ngcontent-%COMP%]{overflow:hidden;max-height:0px;padding:0;margin:0;transition:max-height .9s ease-out,padding .9s ease-out,margin 1s ease-out}.activo[_ngcontent-%COMP%]{overflow:hidden;max-height:1000px;transition:max-height .9s ease-out,padding .3s ease-out,margin .3s ease-out}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.icon.rotado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:rotate(180deg)}']})};export{W as default};
