import{a as ie}from"./chunk-P2YCEQQ3.js";import{a as $,b as ee}from"./chunk-4YLB6BMN.js";import{a as Q}from"./chunk-H4O6IPU4.js";import"./chunk-2LV7HNH4.js";import{a as K}from"./chunk-4DQSAP2D.js";import{a as X}from"./chunk-5A4UYOPG.js";import{b as j,c as U,d as q,e as z,f as G,g as H,h as J,i as Y,j as Z}from"./chunk-NNPNTJPV.js";import"./chunk-TZTC4YCF.js";import{$a as E,Fa as w,Ia as k,Na as v,Tb as N,Wa as x,X as S,Ya as h,Za as M,Zb as O,_a as R,ab as o,bb as n,cb as g,da as p,db as C,e as te,ea as m,eb as b,fb as s,gb as F,ib as c,jb as P,kb as V,lb as L,mb as D,nb as f,ob as _,pb as u,sb as W,tb as A,za as d}from"./chunk-BH4UYFV3.js";var y=te(ie());var ne=r=>({"is-active":r}),oe=r=>({rotado:r}),ae=(r,t)=>({oculto:r,activo:t});function re(r,t){if(r&1){let e=C();o(0,"tr")(1,"td")(2,"i",29),b("click",function(){let i=p(e).$implicit,a=s();return m(a.addCliente(i._id))}),n()(),o(3,"td"),c(4),n()()}if(r&2){let e=t.$implicit;d(4),P(e.cliente)}}function le(r,t){if(r&1&&(o(0,"option",34),c(1),n()),r&2){let e=t.$implicit;F("value",e._id),d(),P(e.cliente)}}function ce(r,t){if(r&1){let e=C();o(0,"div",14)(1,"label",23),c(2,"\xA0"),n(),o(3,"button",30),b("click",function(){p(e);let i=s();return m(i.modalCliente=!0)}),o(4,"span",31),g(5,"i",32),n()()(),o(6,"div",14)(7,"label",23),c(8,"Establecimiento"),n(),o(9,"div",24)(10,"select",33),u("ngModelChange",function(i){p(e);let a=s();return _(a.establecimiento,i)||(a.establecimiento=i),m(i)}),R(11,le,2,2,"option",34,M),n()()()}if(r&2){let e=s();d(3),x("disabled",e.planificado),d(7),f("ngModel",e.establecimiento),x("disabled",e.planificado),d(),E(e.ClientServices.clientes())}}function de(r,t){if(r&1){let e=C();o(0,"div",14)(1,"label",23),c(2,"Motivo"),n(),o(3,"div",24)(4,"select",35),u("ngModelChange",function(i){p(e);let a=s();return _(a.establecimiento,i)||(a.establecimiento=i),m(i)}),o(5,"option",36),c(6,"Reposo Medico"),n(),o(7,"option",37),c(8,"Malestar"),n(),o(9,"option",38),c(10,"Asunto Personal"),n()()()()}if(r&2){let e=s();d(4),f("ngModel",e.establecimiento)}}function se(r,t){if(r&1){let e=C();o(0,"div",16)(1,"div",9)(2,"div",13)(3,"div",14)(4,"input",42),u("ngModelChange",function(i){p(e);let a=s(3);return _(a.tipo_evento,i)||(a.tipo_evento=i),m(i)}),n(),c(5," Juega y Gana "),n(),o(6,"div",14)(7,"input",43),u("ngModelChange",function(i){p(e);let a=s(3);return _(a.tipo_evento,i)||(a.tipo_evento=i),m(i)}),n(),c(8," Color y estilo "),n()(),o(9,"div",13)(10,"div",14)(11,"input",44),u("ngModelChange",function(i){p(e);let a=s(3);return _(a.tipo_evento,i)||(a.tipo_evento=i),m(i)}),n(),c(12," Cabellos con estilo "),n(),o(13,"div",14)(14,"input",45),u("ngModelChange",function(i){p(e);let a=s(3);return _(a.tipo_evento,i)||(a.tipo_evento=i),m(i)}),n(),c(15," Dale y gana "),n()()()()}if(r&2){let e=s(3);d(4),f("ngModel",e.tipo_evento),d(3),f("ngModel",e.tipo_evento),d(4),f("ngModel",e.tipo_evento),d(3),f("ngModel",e.tipo_evento)}}function pe(r,t){if(r&1){let e=C();o(0,"div",9)(1,"div",13)(2,"div",14)(3,"input",46),u("ngModelChange",function(i){p(e);let a=s(3);return _(a.tipo_evento,i)||(a.tipo_evento=i),m(i)}),n(),c(4," Qerastyle "),n(),o(5,"div",14)(6,"input",47),u("ngModelChange",function(i){p(e);let a=s(3);return _(a.tipo_evento,i)||(a.tipo_evento=i),m(i)}),n(),c(7," Ruleta "),n()()()}if(r&2){let e=s(3);d(3),f("ngModel",e.tipo_evento),d(3),f("ngModel",e.tipo_evento)}}function me(r,t){if(r&1&&v(0,se,16,4,"div",16)(1,pe,8,2,"div",9),r&2){let e=s(2);h(e.marca_seleccionada==="Mystic"?0:1)}}function fe(r,t){if(r&1){let e=C();o(0,"button",49),b("click",function(){p(e);let i=s(3);return m(i.NextStep())}),o(1,"span",31),g(2,"i",50),n(),o(3,"span"),c(4,"Continuar"),n()()}}function _e(r,t){if(r&1){let e=C();o(0,"button",49),b("click",function(){p(e);let i=s(3);return m(i.NextStep())}),o(1,"span",31),g(2,"i",50),n(),o(3,"span"),c(4,"Continuar"),n()()}}function ue(r,t){if(r&1&&v(0,fe,5,0,"button",48)(1,_e,5,0,"button",48),r&2){let e=s(2);h(e.tipo!="Evento"?0:e.tipo_evento?1:-1)}}function ge(r,t){if(r&1){let e=C();o(0,"div",13)(1,"div",14)(2,"label",39)(3,"input",40),u("ngModelChange",function(i){p(e);let a=s();return _(a.tipo,i)||(a.tipo=i),m(i)}),n(),c(4," Impulso "),n()(),o(5,"div",14)(6,"label",39)(7,"input",41),u("ngModelChange",function(i){p(e);let a=s();return _(a.tipo,i)||(a.tipo=i),m(i)}),n(),c(8," Evento "),n()()(),v(9,me,2,1)(10,ue,2,1)}if(r&2){let e=s();d(3),f("ngModel",e.tipo),d(4),f("ngModel",e.tipo),d(2),h(e.tipo==="Evento"?9:-1),d(),h(e.establecimiento&&e.tipo&&e.marca_seleccionada?10:-1)}}function Ce(r,t){if(r&1){let e=C();o(0,"button",49),b("click",function(){p(e);let i=s(2);return m(i.reportarFalta())}),o(1,"span",31),g(2,"i",50),n(),o(3,"span"),c(4,"Reportar"),n()()}}function he(r,t){if(r&1&&v(0,Ce,5,0,"button",48),r&2){let e=s();h(e.establecimiento?0:-1)}}function be(r,t){r&1&&(o(0,"thead")(1,"tr")(2,"th"),c(3,"Producto"),n(),o(4,"th"),c(5,"Alm. Inicial"),n(),o(6,"th"),c(7,"Alm. Final"),n(),o(8,"th"),c(9,"Vendido"),n()()())}function ve(r,t){if(r&1){let e=C();o(0,"tr")(1,"td"),c(2),n(),o(3,"td",53)(4,"input",54),u("ngModelChange",function(i){let a=p(e).$implicit;return _(a.inicial,i)||(a.inicial=i),m(i)}),n()(),o(5,"td",53)(6,"input",54),u("ngModelChange",function(i){let a=p(e).$implicit;return _(a.final,i)||(a.final=i),m(i)}),n()(),o(7,"td"),c(8),n()()}if(r&2){let e=t.$implicit;d(2),D("",e.producto.marca," - ",e.producto.producto," (",e.producto.linea,")"),d(2),f("ngModel",e.inicial),d(2),f("ngModel",e.final),d(2),V("",e.inicial-e.final," Und.")}}function xe(r,t){r&1&&(o(0,"div",51),c(1," Aun no haz indicado ningun producto para reportar su venta. "),n())}function Se(r,t){if(r&1){let e=C();o(0,"div",52)(1,"div",14)(2,"textarea",55),u("ngModelChange",function(i){p(e);let a=s(2);return _(a.obervacion,i)||(a.obervacion=i),m(i)}),n()()()}if(r&2){let e=s(2);d(2),f("ngModel",e.obervacion)}}function ye(r,t){if(r&1){let e=C();o(0,"button",49),b("click",function(){p(e);let i=s(2);return m(i.Reportar())}),o(1,"span",31),g(2,"i",56),n(),o(3,"span"),c(4,"Reportar"),n()()}}function we(r,t){if(r&1&&(o(0,"div",16)(1,"div",9),g(2,"hr"),o(3,"table",6),v(4,be,10,0,"thead"),o(5,"tbody"),R(6,ve,9,6,"tr",null,M,!1,xe,2,0,"div",51),n()(),v(9,Se,3,1,"div",52)(10,ye,5,0,"button",48),n()()),r&2){let e=s();d(4),h(e.ProductosSelected.length>0?4:-1),d(2),E(e.ProductosSelected),d(3),h(e.ProductosSelected.length>0?9:-1),d(),h(e.ProductosSelected.length>0&&e.VerificarReporte()&&e.obervacion?10:-1)}}var B=class r{ClientServices=S(X);ProductosServices=S(K);ReportesServices=S(ee);loginSevice=S(Q);planificacion=S($);searchTerm="";filteredProductos=[];filteredClientes=[];Informacion=w(!0);isRotated=w(!1);ProductosSelected=[];establecimiento="";tipo="";tipo_evento="";obervacion="";date_log="";CargadaInformacion=w(!1);usarListaAntigua=!1;data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log};date_aja;marca_seleccionada="";cliente="";modalCliente=!1;estab=!1;planificado=!1;Mystic=["676c251affcb9efdbafe02f3","676c251affcb9efdbafe02f4","676c251affcb9efdbafe02f5","676c251affcb9efdbafe02f6","676c251affcb9efdbafe02f7","676c251affcb9efdbafe02f8","676c251affcb9efdbafe02f9","676c251affcb9efdbafe02fa","676c251affcb9efdbafe02fb","676c251affcb9efdbafe02fc","676c251affcb9efdbafe02fd","676c251affcb9efdbafe02fe","676c251affcb9efdbafe02ff","676c251affcb9efdbafe0300","676c251affcb9efdbafe02df","676c251affcb9efdbafe02e0","676c251affcb9efdbafe02e2","676c251affcb9efdbafe02e1","676c251affcb9efdbafe02e3","676c251affcb9efdbafe02e4","676c251affcb9efdbafe02e5","676c251affcb9efdbafe02e6","676c251affcb9efdbafe02e8","676c251affcb9efdbafe02e7","676c251affcb9efdbafe02ee","676c251affcb9efdbafe02ef","676c251affcb9efdbafe02f0","676c251affcb9efdbafe02f1","676c251affcb9efdbafe02f2","676c251affcb9efdbafe02e9","676c251affcb9efdbafe02ea","676c251affcb9efdbafe02eb","676c251affcb9efdbafe02ec","676c251affcb9efdbafe02ed"];Qerametik=["676c251affcb9efdbafe02d5","676c251affcb9efdbafe02d6","676c251affcb9efdbafe02d7","676c251affcb9efdbafe02d8","676c251affcb9efdbafe02d9","676c251affcb9efdbafe02da","676c251affcb9efdbafe02db","676c251affcb9efdbafe02dc","676c251affcb9efdbafe02dd","676c251affcb9efdbafe02de"];constructor(){this.date_log=this.getFormattedDate(),this.date_aja=new Date}addCliente(t){t?this.establecimiento=t:this.establecimiento="",this.modalCliente=!1}filterProductos(){this.searchTerm.trim()===""?this.filteredProductos=[]:this.usarListaAntigua?this.filteredProductos=this.ProductosServices.productos().filter(t=>t.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&t.marca===this.marca_seleccionada&&t.linea==="Antigua"):this.filteredProductos=this.ProductosServices.productos().filter(t=>t.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&t.marca===this.marca_seleccionada&&t.linea!="Antigua")}BuscarCliente(t){t.value.trim()===""?this.filteredClientes=[]:this.filteredClientes=this.ClientServices.clientes().filter(e=>e.cliente.toLowerCase().includes(t.value.toLowerCase())&&e.marca===this.marca_seleccionada)}getFormattedDate(){let t=new Date,e=String(t.getDate()).padStart(2,"0"),l=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear(),a=t.getHours(),I=String(t.getMinutes()).padStart(2,"0"),T=String(t.getSeconds()).padStart(2,"0"),Me=a>=12?"PM":"AM";return a=a%12,a=a||12,`${i}-${l}-${e}`}toggleInformacion(){this.Informacion.update(t=>!t),this.isRotated.update(t=>!t)}agregarProducto(t){let e=this.ProductosServices.productos().find(i=>i._id===t);if(!e){console.log(t),console.error("Producto no encontrado");return}this.ProductosSelected.some(i=>i.producto?._id===e._id)||this.ProductosSelected.push({producto:e,inicial:0,final:0})}VerificarReporte(){return this.ProductosSelected.some(t=>t.inicial>0&&t.inicial>0&&t.final<=t.inicial)}eliminarDeProductosSelected(t){this.ProductosSelected.splice(t,1)}resta=(t,e)=>t-e;Reportar(){y.default.fire({title:"\xBFReportar ventas de hoy?",text:"Recuerda verificar bien las cantidades que declaras y los productos seleccionados",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(t=>{t.isConfirmed&&(y.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente=this.establecimiento,this.data.tipo=this.tipo,this.data.evento=this.tipo_evento,this.data.productos=this.ProductosSelected.map(e=>({producto:e.producto._id,inicio:e.inicial,final:e.final,cantidad:this.resta(e.inicial,e.final)})),this.data.observacion=this.obervacion,this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}reportarFalta(){y.default.fire({title:"\xBFReportar falta el dia de hoy?",text:"No generaras puntos ni ventas el dia de hoy",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(t=>{t.isConfirmed&&(y.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"}),this.data.cliente="6756ef7ed60449fa9c3ee3fa",this.data.tipo=this.establecimiento,this.data.evento=this.tipo_evento,this.data.productos=[],this.data.observacion="Promotora reporto falta justificada por lo que no pudo realizar ventas hoy",this.data.fecha=this.date_log,this.ReportesServices.NuevoReporte(this.data),this.data={promotora:this.loginSevice.usuario._id,cliente:"",productos:[],tipo:"",observacion:"",fecha:this.date_log},this.ProductosSelected=[],this.establecimiento="",this.tipo="",this.tipo_evento="",this.obervacion="",this.CargadaInformacion.update(e=>!1),this.isRotated.update(e=>!1),this.Informacion.update(e=>!0))})}NextStep(){this.CargadaInformacion.update(t=>!0),this.isRotated.update(t=>!0),this.Informacion.update(t=>!1)}verFormato(t){console.log(t.value)}planification(t,e){let l=new Date(t),i=new Date(l.getTime()+0*60*60*1e3),a=i.toISOString();i.setUTCDate(t.getUTCDate()+1),i.setUTCHours(0,0,0,0);let I=i.toISOString();return this.planificacion.planificacion()[this.planificacion.planificacion().length-1].planificacion.find(T=>T.fecha===I&&T.promotora===e)}buscarClientePorNombre(){this.estab=!1,this.planificado=!1,setTimeout(()=>{if(this.ProductosSelected=[],this.marca_seleccionada==="Mystic")for(let t=0;t<this.Mystic.length;t++)this.agregarProducto(this.Mystic[t]);else if(this.marca_seleccionada==="Qerametik")for(let t=0;t<this.Qerametik.length;t++)this.agregarProducto(this.Qerametik[t]);if(this.planification(this.date_aja,this.loginSevice.usuario.nombre)){let t=this.planification(this.date_aja,this.loginSevice.usuario.nombre).cliente_nombre;this.establecimiento=this.ClientServices.clientes().find(e=>e.marca===this.marca_seleccionada&&e.cliente===t)?._id,this.establecimiento!=null&&(this.tipo=this.planification(this.date_aja,this.loginSevice.usuario.nombre).tipo,this.planificado=!0),this.estab=!0}else this.estab=!0},1e3)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=k({type:r,selectors:[["app-reporte"]],decls:57,vars:19,consts:[[1,"modal",3,"ngClass"],[1,"modal-background"],[1,"modal-card"],[1,"modal-card-body"],[1,"title"],["type","text","name","","id","",1,"input",3,"input"],[1,"table","is-fullwidth","is-striped"],[1,"formulario_envio_informacion"],[1,"card",2,"background-color","#34495E","color","rgb(212, 212, 212)"],[1,"card-content"],[1,"title",2,"color","rgb(212, 212, 212)"],[2,"font-weight","bold"],[1,"subtitle",2,"color","rgb(212, 212, 212)"],[1,"field","is-grouped"],[1,"control"],["type","date","disabled","",1,"input",3,"ngModelChange","change","ngModel","max"],[1,"card"],[1,"card-header"],[1,"card-header-title"],["aria-label","more options",1,"card-header-icon"],[1,"icon",3,"click","ngClass"],["aria-hidden","true",1,"fas","fa-angle-up"],[1,"card-content",3,"ngClass"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","change","ngModel"],["value","Mystic"],["value","Qerametik"],["value","Falta"],[1,"fas","fa-plus",2,"color","rgb(100, 180, 100)",3,"click"],[1,"button","is-success",3,"click","disabled"],[1,"icon"],[1,"fas","fa-search"],[3,"ngModelChange","ngModel","disabled"],[3,"value"],[3,"ngModelChange","ngModel"],["value","Reposo"],["value","Malestar"],["value","Asunto personal"],[1,"radio"],["type","radio","name","evento","value","Impulso",3,"ngModelChange","ngModel"],["type","radio","name","evento","value","Evento",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Juega y Gana",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Color y estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Cabellos con estilo",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Dale y gana",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Qerastyle",3,"ngModelChange","ngModel"],["type","radio","name","Tipo_evento","value","Ruleta",3,"ngModelChange","ngModel"],[1,"button","is-primary"],[1,"button","is-primary",3,"click"],[1,"fas","fa-long-arrow-alt-right"],[1,"notification","is-primary","is-light"],[1,"field"],[2,"width","100px"],["type","number","placeholde","Cantidad vendida",1,"input",3,"ngModelChange","ngModel"],["placeholder","Observaci\xF3n",1,"textarea",3,"ngModelChange","ngModel"],[1,"fas","fa-check"]],template:function(e,l){e&1&&(o(0,"div",0),g(1,"div",1),o(2,"div",2)(3,"div",3)(4,"p",4),c(5,"Buscar cliente"),n(),o(6,"input",5),b("input",function(a){return l.BuscarCliente(a.target)}),n(),g(7,"hr"),o(8,"table",6)(9,"thead")(10,"tr"),g(11,"th"),o(12,"th"),c(13,"Clientes"),n()()(),o(14,"tbody"),R(15,re,5,1,"tr",null,M),n()()()()(),o(17,"div",7)(18,"div",8)(19,"div",9)(20,"span",10),c(21),n(),g(22,"br"),o(23,"b",11),c(24,"Zona: "),n(),c(25),g(26,"br"),o(27,"span",12)(28,"div",13)(29,"div",14)(30,"input",15),u("ngModelChange",function(a){return _(l.date_log,a)||(l.date_log=a),a}),b("change",function(a){return l.verFormato(a.target)}),n()()()()()(),g(31,"hr"),o(32,"div",16)(33,"header",17)(34,"p",18),c(35,"Informaci\xF3n del reporte"),n(),o(36,"button",19)(37,"span",20),b("click",function(){return l.toggleInformacion()}),g(38,"i",21),n()()(),o(39,"div",22)(40,"div",13)(41,"div",14)(42,"label",23),c(43,"Marca"),n(),o(44,"div",24)(45,"select",25),u("ngModelChange",function(a){return _(l.marca_seleccionada,a)||(l.marca_seleccionada=a),a}),b("change",function(){return l.buscarClientePorNombre()}),o(46,"option",26),c(47,"Mystic"),n(),o(48,"option",27),c(49,"Qerametik"),n(),o(50,"option",28),c(51,"Falta"),n()()()(),v(52,ce,13,3)(53,de,11,1,"div",14),n(),v(54,ge,11,4)(55,he,1,1),n()(),v(56,we,11,4,"div",16),n()),e&2&&(x("ngClass",W(12,ne,l.modalCliente)),d(15),E(l.filteredClientes),d(6),L(" ",l.loginSevice.usuario.nombre," ",l.loginSevice.usuario.apellido," "),d(4),V("",l.loginSevice.usuario.region," "),d(5),f("ngModel",l.date_log),x("max",l.date_log),d(7),x("ngClass",W(14,oe,l.isRotated())),d(2),x("ngClass",A(16,ae,!l.Informacion(),l.Informacion())),d(6),f("ngModel",l.marca_seleccionada),d(7),h(l.marca_seleccionada&&l.marca_seleccionada!="Falta"&&l.estab?52:l.marca_seleccionada&&l.marca_seleccionada==="Falta"?53:-1),d(2),h(l.marca_seleccionada!="Falta"?54:55),d(2),h(l.CargadaInformacion()?56:-1))},dependencies:[O,N,Z,J,Y,j,z,H,G,U,q],styles:['@charset "UTF-8";.oculto[_ngcontent-%COMP%]{overflow:hidden;max-height:0px;padding:0;margin:0;transition:max-height .9s ease-out,padding .9s ease-out,margin 1s ease-out}.activo[_ngcontent-%COMP%]{overflow:hidden;max-height:1000px;transition:max-height .9s ease-out,padding .3s ease-out,margin .3s ease-out}.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.icon.rotado[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:rotate(180deg)}']})};export{B as default};