import{a as le}from"./chunk-YQSJE2MY.js";import{a as te}from"./chunk-3J6JI56C.js";import{a as ne,b as ae}from"./chunk-DHG24SYD.js";import{a as $}from"./chunk-WSD7WZDE.js";import"./chunk-AWU2QWKU.js";import{a as G}from"./chunk-OECI3Y5V.js";import{b as q,c as L,d as A,e as ee,g as O,h as j,i as R,j as U}from"./chunk-UIEJ76RJ.js";import"./chunk-RHUNMPRV.js";import{a as ie}from"./chunk-P6E5DH65.js";import{$a as y,Ia as V,Na as S,Tb as I,Wa as E,Wb as B,X as P,Ya as b,Za as v,Zb as N,_a as w,a as X,ab as n,bb as o,cb as C,da as m,db as x,e as re,ea as p,eb as h,fb as d,gb as Q,hb as Y,ib as l,ja as M,jb as J,kb as k,lb as T,nb as u,ob as f,pb as g,rb as Z,sb as W,ub as F,wb as D,za as s}from"./chunk-6AB4XWDR.js";var pe=c=>({"is-active":c});function _e(c,r){if(c&1){let e=x();n(0,"option",22),h("click",function(){let t=m(e).$implicit,a=d();return p(a.plan.cliente_nombre=t.cliente)}),l(1),o()}if(c&2){let e=r.$implicit;Y("value","",e._id,"__",e.cliente,"(",e.marca,")"),s(),T(" ",e.cliente," (",e.marca,")")}}function ue(c,r){if(c&1){let e=x();n(0,"button",23),h("click",function(){m(e);let t=d();return p(t.onAgregarPlanificacion.emit())}),n(1,"span"),l(2,"Listo"),o()()}}var z=class c{newPlanificacion;plan;onCloseModal=new M;onAgregarPlanificacion=new M;Clientes=P(G);qlo="";cerrar(){this.onCloseModal.emit()}addCliente(r){let e=r.value.split("__"),i=e[0],t=e[1];this.plan.cliente=i,this.plan.cliente_nombre=t}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=V({type:c,selectors:[["app-new-planificacion"]],inputs:{newPlanificacion:"newPlanificacion",plan:"plan"},outputs:{onCloseModal:"onCloseModal",onAgregarPlanificacion:"onAgregarPlanificacion"},decls:35,vars:13,consts:[[1,"modal",3,"ngClass"],[1,"modal-background"],[1,"modal-card"],[1,"modal-card-head"],[1,"modal-card-title"],["aria-label","close",1,"delete",3,"click"],[1,"modal-card-body"],[1,"field"],[1,"control"],[1,"label"],[1,"select"],[3,"ngModelChange","ngModel"],["value","Evento"],["value","Impulso"],["for","",1,"label"],[3,"ngModelChange","change","ngModel"],[3,"value"],[1,"field","is-grouped"],["type","text",1,"input",3,"ngModelChange","ngModel"],[1,"control",2,"width","360px",3,"ngModelChange","ngModel"],["rows","2","placeholder","Escribe una observaci\xF3n",1,"textarea"],[1,"button","is-primary"],[3,"click","value"],[1,"button","is-primary",3,"click"]],template:function(e,i){e&1&&(n(0,"div",0),C(1,"div",1),n(2,"div",2)(3,"header",3)(4,"p",4),l(5),F(6,"date"),o(),n(7,"button",5),h("click",function(){return i.cerrar()}),o()(),n(8,"div",6)(9,"div",7)(10,"div",8)(11,"label",9),l(12,"Tipo"),o(),n(13,"div",10)(14,"select",11),g("ngModelChange",function(a){return f(i.plan.tipo,a)||(i.plan.tipo=a),a}),n(15,"option",12),l(16,"Evento"),o(),n(17,"option",13),l(18,"Impulso"),o()()()()(),n(19,"div",7)(20,"div",8)(21,"label",14),l(22,"Cliente"),o(),n(23,"div",10)(24,"select",15),g("ngModelChange",function(a){return f(i.qlo,a)||(i.qlo=a),a}),h("change",function(a){return i.addCliente(a.target)}),w(25,_e,2,6,"option",16,v),o()()()(),n(27,"div",17)(28,"div",8)(29,"label",14),l(30,"Ejec. de venta"),o(),n(31,"input",18),g("ngModelChange",function(a){return f(i.plan.ejecutivo,a)||(i.plan.ejecutivo=a),a}),o()(),n(32,"div",19),g("ngModelChange",function(a){return f(i.plan.observacion,a)||(i.plan.observacion=a),a}),C(33,"textarea",20),o()(),S(34,ue,3,0,"button",21),o()()()),e&2&&(E("ngClass",W(11,pe,i.newPlanificacion)),s(5),T("Planificaci\xF3n ",i.plan.promotora," ",D(6,8,i.plan.fecha,"dd/MM/yyyy"),""),s(9),u("ngModel",i.plan.tipo),s(10),u("ngModel",i.qlo),s(),y(i.Clientes.clientes()),s(6),u("ngModel",i.plan.ejecutivo),s(),u("ngModel",i.plan.observacion),s(2),b(i.plan.cliente&&i.plan.ejecutivo?34:-1))},dependencies:[N,I,B,U,j,R,q,O,L,A],encapsulation:2})};var H=re(le());var oe=()=>[],fe=c=>({"is-active":c});function ge(c,r){c&1&&C(0,"app-loadings")}function Ce(c,r){if(c&1&&(n(0,"option",31),l(1),o()),c&2){let e=r.$implicit,i=r.$index;Q("value",i),s(),J(e.mes)}}function he(c,r){if(c&1&&(n(0,"option",31),l(1),o()),c&2){let e=r.$implicit;Q("value",e),s(),J(e)}}function xe(c,r){if(c&1){let e=x();n(0,"div",6)(1,"select",30),h("change",function(t){m(e);let a=d(2);return p(a.cambiarPlanificacion(t.target))}),w(2,Ce,2,2,"option",31,v),w(4,he,2,2,"option",31,v),o()()}if(c&2){let e=d(2);s(2),y(e.servicePlanificacion.planificacion()),s(2),y(e.filtrarMese())}}function ve(c,r){if(c&1){let e=x();n(0,"div",4)(1,"label",5),l(2,"\xA0"),o(),n(3,"button",35),h("click",function(){m(e);let t=d(2).$index,a=d(2);return p(a.removeMeta(t))}),n(4,"span",33),C(5,"i",36),o()()()}}function we(c,r){if(c&1){let e=x();n(0,"div",4)(1,"label",5),l(2,"\xA0"),o(),n(3,"button",22),h("click",function(){m(e);let t=d(3);return p(t.addMeta())}),n(4,"span",33),C(5,"i",34),o()()(),S(6,ve,6,0,"div",4)}if(c&2){let e=d().$index;s(6),b(e>0?6:-1)}}function ye(c,r){if(c&1){let e=x();n(0,"div",23)(1,"div",4)(2,"label",5),l(3,"de (puntos)"),o(),n(4,"input",32),g("ngModelChange",function(t){let a=m(e).$index,_=d(2);return f(_.data.incentivos[a].de,t)||(_.data.incentivos[a].de=t),p(t)}),o()(),n(5,"div",4)(6,"label",5),l(7,"hasta (puntos)"),o(),n(8,"input",32),g("ngModelChange",function(t){let a=m(e).$index,_=d(2);return f(_.data.incentivos[a].hasta,t)||(_.data.incentivos[a].hasta=t),p(t)}),o()(),n(9,"div",4)(10,"label",5),l(11,"Incentivo (USD)"),o(),n(12,"input",32),g("ngModelChange",function(t){let a=m(e).$index,_=d(2);return f(_.data.incentivos[a].incentivo,t)||(_.data.incentivos[a].incentivo=t),p(t)}),o()(),S(13,we,7,1),o()}if(c&2){let e=r.$index,i=d(2);s(4),u("ngModel",i.data.incentivos[e].de),s(4),u("ngModel",i.data.incentivos[e].hasta),s(4),u("ngModel",i.data.incentivos[e].incentivo),s(),b(e===i.metas-1?13:-1)}}function Se(c,r){if(c&1){let e=x();n(0,"div",4)(1,"label",5),l(2,"\xA0"),o(),n(3,"button",35),h("click",function(){m(e);let t=d(2).$index,a=d(2);return p(a.removeMeta_(t))}),n(4,"span",33),C(5,"i",36),o()()()}}function be(c,r){if(c&1){let e=x();n(0,"div",4)(1,"label",5),l(2,"\xA0"),o(),n(3,"button",22),h("click",function(){m(e);let t=d(3);return p(t.addMeta_())}),n(4,"span",33),C(5,"i",34),o()()(),S(6,Se,6,0,"div",4)}if(c&2){let e=d().$index;s(6),b(e>0?6:-1)}}function Pe(c,r){if(c&1){let e=x();n(0,"div",23)(1,"div",4)(2,"label",5),l(3,"de (puntos)"),o(),n(4,"input",32),g("ngModelChange",function(t){let a=m(e).$index,_=d(2);return f(_.data.incentivos_qerametik[a].de,t)||(_.data.incentivos_qerametik[a].de=t),p(t)}),o()(),n(5,"div",4)(6,"label",5),l(7,"hasta (puntos)"),o(),n(8,"input",32),g("ngModelChange",function(t){let a=m(e).$index,_=d(2);return f(_.data.incentivos_qerametik[a].hasta,t)||(_.data.incentivos_qerametik[a].hasta=t),p(t)}),o()(),n(9,"div",4)(10,"label",5),l(11,"Incentivo (USD)"),o(),n(12,"input",32),g("ngModelChange",function(t){let a=m(e).$index,_=d(2);return f(_.data.incentivos_qerametik[a].incentivo,t)||(_.data.incentivos_qerametik[a].incentivo=t),p(t)}),o()(),S(13,be,7,1),o()}if(c&2){let e=r.$index,i=d(2);s(4),u("ngModel",i.data.incentivos_qerametik[e].de),s(4),u("ngModel",i.data.incentivos_qerametik[e].hasta),s(4),u("ngModel",i.data.incentivos_qerametik[e].incentivo),s(),b(e===i.metas_-1?13:-1)}}function Me(c,r){if(c&1){let e=x();n(0,"span",2),l(1,"Plan mensual"),o(),C(2,"hr"),n(3,"div",23)(4,"div",4)(5,"label",5),l(6,"Mes"),o(),S(7,xe,6,0,"div",6),o(),n(8,"div",4)(9,"label",5),l(10,"Inicio"),o(),n(11,"input",24),h("change",function(){m(e);let t=d();return p(t.calcularSemanas())}),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.inicio,t)||(a.data.inicio=t),p(t)}),o()(),n(12,"div",4)(13,"label",5),l(14,"Cierre"),o(),n(15,"input",24),h("change",function(){m(e);let t=d();return p(t.calcularSemanas())}),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.cierre,t)||(a.data.cierre=t),p(t)}),o()()(),C(16,"hr"),n(17,"span",25),l(18,"Metas"),o(),C(19,"br")(20,"br"),n(21,"div",26)(22,"div",27)(23,"span",28),l(24,"Mystic (Promotoras fijas)"),o(),n(25,"div",23)(26,"div",4)(27,"label",5),l(28,"Impulso (Diario)"),o(),n(29,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.tradicional.mystic.impulso,t)||(a.data.metas.tradicional.mystic.impulso=t),p(t)}),o()(),n(30,"div",4)(31,"label",5),l(32,"Evento"),o(),n(33,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.tradicional.mystic.evento,t)||(a.data.metas.tradicional.mystic.evento=t),p(t)}),o()()(),n(34,"span",28),l(35,"Qerametik (Promotoras fijas)"),o(),n(36,"div",23)(37,"div",4)(38,"label",5),l(39,"Impulso (Diario)"),o(),n(40,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.tradicional.qerametik.impulso,t)||(a.data.metas.tradicional.qerametik.impulso=t),p(t)}),o()(),n(41,"div",4)(42,"label",5),l(43,"Evento"),o(),n(44,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.tradicional.qerametik.evento,t)||(a.data.metas.tradicional.qerametik.evento=t),p(t)}),o()()()(),n(45,"div",27)(46,"span",28),l(47,"Mystic (Promotoras por destajo)"),o(),n(48,"div",23)(49,"div",4)(50,"label",5),l(51,"Impulso (Diario)"),o(),n(52,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.rebranding.mystic.impulso,t)||(a.data.metas.rebranding.mystic.impulso=t),p(t)}),o()(),n(53,"div",4)(54,"label",5),l(55,"Evento"),o(),n(56,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.rebranding.mystic.evento,t)||(a.data.metas.rebranding.mystic.evento=t),p(t)}),o()()(),n(57,"span",28),l(58,"Qerametik (Promotoras por destajo)"),o(),n(59,"div",23)(60,"div",4)(61,"label",5),l(62,"Impulso (Diario)"),o(),n(63,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.rebranding.qerametik.impulso,t)||(a.data.metas.rebranding.qerametik.impulso=t),p(t)}),o()(),n(64,"div",4)(65,"label",5),l(66,"Evento"),o(),n(67,"input",29),g("ngModelChange",function(t){m(e);let a=d();return f(a.data.metas.rebranding.qerametik.evento,t)||(a.data.metas.rebranding.qerametik.evento=t),p(t)}),o()()()()(),C(68,"hr"),n(69,"span",25),l(70," Incentivos por ventas "),o(),C(71,"br")(72,"br"),n(73,"div",26)(74,"div",27)(75,"span",2),l(76,"Incentivos Mystic"),o(),w(77,ye,14,4,"div",23,v),o(),n(79,"div",27)(80,"span",2),l(81,"Incentivos Qerametik"),o(),w(82,Pe,14,4,"div",23,v),o()(),C(84,"br")}if(c&2){let e=d();s(7),b(e.servicePlanificacion.loading()?-1:7),s(4),u("ngModel",e.data.inicio),s(4),u("ngModel",e.data.cierre),s(14),u("ngModel",e.data.metas.tradicional.mystic.impulso),s(4),u("ngModel",e.data.metas.tradicional.mystic.evento),s(7),u("ngModel",e.data.metas.tradicional.qerametik.impulso),s(4),u("ngModel",e.data.metas.tradicional.qerametik.evento),s(8),u("ngModel",e.data.metas.rebranding.mystic.impulso),s(4),u("ngModel",e.data.metas.rebranding.mystic.evento),s(7),u("ngModel",e.data.metas.rebranding.qerametik.impulso),s(4),u("ngModel",e.data.metas.rebranding.qerametik.evento),s(10),y(Z(11,oe).constructor(e.metas)),s(5),y(Z(12,oe).constructor(e.metas_))}}function Ee(c,r){if(c&1){let e=x();n(0,"li",37),h("click",function(){let t=m(e).$index,a=d();return p(a.semana_selected=t)}),n(1,"a"),l(2),o()()}if(c&2){let e=r.$index,i=d();E("ngClass",W(2,fe,i.Aja(e))),s(2),k("Semana ",e+1,"")}}function Te(c,r){if(c&1&&(n(0,"th",42),l(1),C(2,"br"),l(3),F(4,"date"),o()),c&2){let e=r.$implicit;s(),k(" ",e.dia," "),s(2),k(" ",D(4,2,e.fecha,"dd/MM/yyyy")," ")}}function Ve(c,r){if(c&1){let e=x();n(0,"button",22),h("click",function(){m(e);let t=d().$implicit,a=d().$implicit,_=d();return p(_.generarPlan(a.nombre,t.fecha))}),n(1,"span",33),C(2,"i",34),o(),n(3,"span"),l(4,"Asignar"),o()()}}function ke(c,r){if(c&1&&(n(0,"td",42),S(1,Ve,5,0,"button",43),o()),c&2){let e=r.$implicit,i=d().$implicit,t=d();s(),b(t.existe(e.fecha,i.nombre)?-1:1)}}function We(c,r){if(c&1&&(n(0,"div",21)(1,"div",38)(2,"p",39),l(3),o()(),n(4,"div",40)(5,"table",41)(6,"thead")(7,"tr"),w(8,Te,5,5,"th",42,v),o()(),n(10,"tbody")(11,"tr"),w(12,ke,2,1,"td",42,v),o()()()()()),c&2){let e=r.$implicit,i=d();s(3),T("",e.nombre," ",e.apellido,""),s(5),y(i.semanas[i.semana_selected]),s(4),y(i.semanas[i.semana_selected])}}var K=class c{servicePlanificacion=P(ne);promotoras=P(te);clientes=P(G);login=P($);reportes=P(ae);aprobado=[];_aprobados_={};newPlanificacion=!1;indexPlanificacion=0;Region="";active;onCloseModal=new M;plan={cliente:"",fecha:"",promotora:"",ejecutivo:"",observacion:"",tipo:"",cliente_nombre:""};data={mes:"",inicio:"",cierre:"",metas:{tradicional:{mystic:{impulso:0,evento:0},qerametik:{impulso:0,evento:0}},rebranding:{mystic:{impulso:0,evento:0},qerametik:{impulso:0,evento:0}}},incentivos:[{de:0,hasta:0,incentivo:0}],incentivos_qerametik:[{de:0,hasta:0,incentivo:0}],planificacion:[]};constructor(){setTimeout(()=>{this.servicePlanificacion.planificacion().length>0&&(this.Region=this.login.usuario.region,this.data=this.servicePlanificacion.planificacion()[this.servicePlanificacion.planificacion().length-1],this.metas=this.data.incentivos.length,this.metas_=this.data.incentivos_qerametik.length,this.data.inicio=new Date(this.data.inicio).toISOString().slice(0,10),this.data.cierre=new Date(this.data.cierre).toISOString().slice(0,10),this.calcularSemanas(),this.indexPlanificacion=this.servicePlanificacion.planificacion().length-1)},500)}metas=1;metas_=1;semana_selected=0;Aja(r){return r===this.semana_selected}semanas=[];calcularSemanas(){if(this.data.inicio&&this.data.cierre){let r=new Date(this.data.inicio),e=new Date(this.data.cierre),i=new Date(r),t=[],a=[];for(;i.getDay()!==0;)a.push({dia:this.diaSemana(i.getDay()),fecha:new Date(i)}),i.setDate(i.getDate()+1);for(a.length>0&&(t.push(a),a=[]);i<=e;)a.push({dia:this.diaSemana(i.getDay()),fecha:new Date(i)}),i.getDay()===6&&(t.push(a),a=[]),i.setDate(i.getDate()+1);a.length>0&&t.push(a),this.semanas=t,console.log(this.semanas)}}diaSemana(r){return["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"][r]}filtrarMese(){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].filter(r=>!this.servicePlanificacion.planificacion().some(e=>e.mes===r))}cambiarPlanificacion(r){isNaN(Number(r.value))?(this.data.mes=r.value,this.data.inicio="",this.data.cierre="",this.data.planificacion=[],this.data._id&&delete this.data._id,this.semanas=[]):(this.data=X({},this.servicePlanificacion.planificacion()[r.value]),this.data.inicio=this.servicePlanificacion.planificacion()[r.value].inicio.split("T")[0],this.data.cierre=this.servicePlanificacion.planificacion()[r.value].cierre.split("T")[0],this.calcularSemanas())}cerrar(){this.onCloseModal.emit()}addMeta(){this.metas++,this.data.incentivos.push({de:0,hasta:0,incentivo:0})}addMeta_(){this.metas_++,this.data.incentivos_qerametik.push({de:0,hasta:0,incentivo:0})}removeMeta(r){this.metas--,this.data.incentivos.length>1&&this.data.incentivos.splice(r,1)}removeMeta_(r){this.metas_--,this.data.incentivos_qerametik.length>1&&this.data.incentivos_qerametik.splice(r,1)}sumarMetas(){this.metas++}crearPlanificacion(){console.log(this.data),this.servicePlanificacion.NuevaPlanificacion(this.data),setTimeout(()=>{H.default.fire({title:"Guardado cambios en la planificaci\xF3n",showConfirmButton:!1,timer:5e3,toast:!0,position:"top-end",timerProgressBar:!0,icon:"success"})},1e3),this.cerrar()}togle_Aprobados(r,e,i,t){if(this._aprobados_[r]||(this._aprobados_[r]=[]),this._aprobados_[r][e]=!this._aprobados_[r][e],!this.data.planificacion[i]){let a=new Date(t).toISOString().split("T")[0];this.data.planificacion[i]={fecha:a,cliente:""}}}generarPlan(r,e){let i=new Date(e),a=new Date(i.getTime()+0*60*60*1e3).toISOString();this.plan.promotora=r,this.plan.fecha=a,this.newPlanificacion=!0}cerrar_(){this.newPlanificacion=!1,this.plan={cliente:"",fecha:"",promotora:"",ejecutivo:"",observacion:"",tipo:"",cliente_nombre:""}}addplanificacion(){this.data.planificacion.push(this.plan),this.cerrar_(),console.log(this.data),H.default.fire({title:"Se agreg\xF3 plan a promotora",icon:"success",timer:5e3,showConfirmButton:!1,toast:!0,position:"top-end",timerProgressBar:!0})}existe(r,e){let i=new Date(r),a=new Date(i.getTime()+0*60*60*1e3).toISOString();return this.data.planificacion.some(_=>_.fecha==a&&_.promotora===e)}planification(r,e){let i=new Date(r),a=new Date(i.getTime()+0*60*60*1e3).toISOString();return this.data.planificacion.find(_=>_.fecha===a&&_.promotora===e)}existe_(r,e){return this.data.planificacion.some(i=>i.fecha==r&&i.promotora===e)}planification_(r,e){return this.data.planificacion.find(i=>i.fecha===r&&i.promotora===e)}planificacion(r,e){let i=new Date(r),a=new Date(i.getTime()+0*60*60*1e3).toISOString();return this.data.planificacion.filter(_=>_.fecha==a&&_.promotora===e)}FiltroPorRegion(){return console.log(this.promotoras.users().filter(r=>r.region===this.Region)),this.promotoras.users().filter(r=>r.region===this.Region)}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=V({type:c,selectors:[["app-planificacion"]],inputs:{active:"active"},outputs:{onCloseModal:"onCloseModal"},decls:49,vars:4,consts:[[3,"onCloseModal","onAgregarPlanificacion","newPlanificacion","plan"],[1,"banner"],[1,"title"],[1,"field"],[1,"control"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","ngModel"],["value","Caracas"],["value","Miranda"],["value","Guaira"],["value","Oriente"],["value","Valencia"],["value","Lara"],["value","Tachira"],["value","Valera"],["value","Zulia"],["value","Acarigua"],["value","Merida"],[1,"tabs"],[3,"ngClass"],[1,"card"],[1,"button","is-success",3,"click"],[1,"field","is-grouped"],["type","date","name","","id","",1,"input",3,"change","ngModelChange","ngModel"],[2,"font-size","x-large"],[1,"columns"],[1,"column"],[2,"font-weight","bolder"],["type","number","name","","id","",1,"input",3,"ngModelChange","ngModel"],[3,"change"],[3,"value"],["type","number","name","","id","",1,"input",2,"width","100px",3,"ngModelChange","ngModel"],[1,"icon"],[1,"fas","fa-plus"],[1,"button","is-danger",3,"click"],[1,"fas","fa-minus"],[3,"click","ngClass"],[1,"card-header"],[1,"card-header-title"],[1,"card-content"],[1,"table","is-fullwidth","is-striped"],[2,"text-align","center"],[1,"button","is-success"]],template:function(e,i){e&1&&(n(0,"app-new-planificacion",0),h("onCloseModal",function(){return i.cerrar_()})("onAgregarPlanificacion",function(){return i.addplanificacion()}),o(),n(1,"div",1),S(2,ge,1,0,"app-loadings")(3,Me,85,13),o(),C(4,"br"),n(5,"span",2),l(6,"Planificaci\xF3n por semana"),o(),C(7,"br")(8,"br"),n(9,"div",3)(10,"div",4)(11,"label",5),l(12,"Selecciona regi\xF3n"),o(),n(13,"div",6)(14,"select",7),g("ngModelChange",function(a){return f(i.Region,a)||(i.Region=a),a}),n(15,"option",8),l(16,"Caracas"),o(),n(17,"option",9),l(18,"Miranda"),o(),n(19,"option",10),l(20,"Guaira"),o(),n(21,"option",11),l(22,"Oriente"),o(),n(23,"option",12),l(24,"Valencia"),o(),n(25,"option",13),l(26,"Lara"),o(),n(27,"option",14),l(28,"Tachira"),o(),n(29,"option",15),l(30,"Valera"),o(),n(31,"option",16),l(32,"Zulia"),o(),n(33,"option",17),l(34,"Acarigua"),o(),n(35,"option",18),l(36,"Merida"),o()()()()(),C(37,"br")(38,"br"),n(39,"div",19)(40,"ul"),w(41,Ee,3,4,"li",20,v),o()(),w(43,We,14,2,"div",21,v),C(45,"br"),n(46,"button",22),h("click",function(){return i.crearPlanificacion()}),n(47,"span"),l(48,"Guardar"),o()()),e&2&&(E("newPlanificacion",i.newPlanificacion)("plan",i.plan),s(2),b(i.servicePlanificacion.loading()?2:3),s(12),u("ngModel",i.Region),s(27),y(i.semanas),s(2),y(i.FiltroPorRegion()))},dependencies:[U,j,R,q,ee,O,L,A,N,I,B,ie,z],styles:['@charset "UTF-8";.asignado[_ngcontent-%COMP%]{position:relative;text-decoration:underline dotted;cursor:pointer}.asignado[_ngcontent-%COMP%]:hover   .popup[_ngcontent-%COMP%]{display:block}.popup[_ngcontent-%COMP%]{display:none;position:absolute;top:100%;left:50%;transform:translate(-50%);background-color:#fff;color:#333;padding:10px;border:1px solid #ccc;border-radius:5px;box-shadow:0 4px 6px #0000001a;z-index:100;white-space:nowrap}']})};export{K as default};
