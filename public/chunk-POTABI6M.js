import{a as V}from"./chunk-KDI34TYX.js";import{a as Bt}from"./chunk-DO5URY5W.js";import{a as zt}from"./chunk-SAV3IXQI.js";import{a as Qt,b as Dt}from"./chunk-6RHDT22X.js";import{a as gt}from"./chunk-TX7DGLL3.js";import{d as bt,g as yt,i as Ct}from"./chunk-LAJQBY6U.js";import{a as Tt}from"./chunk-XYPWKQDW.js";import{a as wt}from"./chunk-HCO3TYPA.js";import{c as xt,d as vt,g as Pt,h as Rt,i as St,j as Mt}from"./chunk-2ENZ3PA2.js";import"./chunk-HUYOMWR4.js";import{a as kt}from"./chunk-FMOI5WBO.js";import{a as Et}from"./chunk-6FTYGNKF.js";import{$a as H,Aa as rt,Ia as st,Na as T,Vb as ut,Wa as q,X as M,Xb as ft,Ya as F,Yb as ht,Za as Y,_a as j,_b as _t,a as J,ab as o,b as K,bb as n,cb as h,da as D,db as W,e as Ut,ea as L,eb as G,fb as x,ib as c,jb as v,lb as U,mb as lt,ob as ct,pb as dt,qb as pt,tb as mt,vb as k,xb as E,za as d}from"./chunk-Q6JVZMQ3.js";var P=Ut(zt());var Jt=r=>["/dashboard/cliente",r];function Kt(r,a){if(r&1&&(o(0,"option",7),c(1),n()),r&2){let t=a.$implicit,f=a.$index;q("value",f),d(),v(t.mes)}}function Xt(r,a){if(r&1){let t=W();o(0,"tr")(1,"td"),c(2),k(3,"date"),n(),o(4,"td"),c(5),n(),o(6,"td"),c(7),n(),o(8,"td")(9,"button",17),G("click",function(){let p=D(t).$implicit,_=x(3);return L(_.EditarReporte_Mystic(p._id))}),o(10,"span",18),h(11,"i",19),n()()()()}if(r&2){let t=a.$implicit;d(2),v(E(3,3,t.fecha,"dd/MM/YYYY")),d(3),v(t.puntuacionTotal),d(2),v(t.totalCantidad)}}function Zt(r,a){if(r&1&&(o(0,"table",14)(1,"thead")(2,"th"),c(3,"Fecha"),n(),o(4,"th"),c(5,"Puntuacion obtenida"),n(),o(6,"th"),c(7,"Productos vendidos"),n(),o(8,"th"),c(9,"Eliminar"),n()(),o(10,"tbody"),j(11,Xt,12,6,"tr",null,Y),n()()),r&2){let t=x(2);d(11),H(t.ReportesFiltradosMystic)}}function te(r,a){r&1&&h(0,"app-loadings")}function ee(r,a){if(r&1){let t=W();o(0,"tr")(1,"td"),c(2),k(3,"date"),n(),o(4,"td"),c(5),n(),o(6,"td"),c(7),n(),o(8,"td")(9,"button",17),G("click",function(){let p=D(t).$implicit,_=x(3);return L(_.EditarReporte_Qera(p._id))}),o(10,"span",18),h(11,"i",19),n()()()()}if(r&2){let t=a.$implicit;d(2),v(E(3,3,t.fecha,"dd/MM/YYYY")),d(3),v(t.puntuacionTotal),d(2),v(t.totalCantidad)}}function ie(r,a){if(r&1&&(o(0,"table",14)(1,"thead")(2,"th"),c(3,"Fecha"),n(),o(4,"th"),c(5,"Puntuacion obtenida"),n(),o(6,"th"),c(7,"Productos vendidos"),n(),o(8,"th"),c(9,"Eliminar"),n()(),o(10,"tbody"),j(11,ee,12,6,"tr",null,Y),n()()),r&2){let t=x(2);d(11),H(t.ReportesFiltradosQerametik)}}function ae(r,a){r&1&&h(0,"app-loadings")}function oe(r,a){if(r&1&&(o(0,"tr")(1,"th")(2,"a",21),c(3),n()(),o(4,"td"),c(5),n()()),r&2){let t=a.$implicit;d(2),q("routerLink",mt(5,Jt,t.nombre)),d(),v(t.nombre),d(2),lt("",t.totalProductosVendidos," Productos - (",t.totalMystic," Mystic) (",t.totalQerametik," Qerametik)")}}function ne(r,a){if(r&1&&(o(0,"table",14)(1,"tbody"),T(2,oe,6,7,"tr",20),n()()),r&2){let t=x(2);d(2),q("ngForOf",t.Separado_por_clientes)}}function re(r,a){if(r&1){let t=W();o(0,"div",0)(1,"div",1),h(2,"app-title",2),c(3),n()(),o(4,"div",3)(5,"label",4),c(6,"Mes"),n(),o(7,"div",5)(8,"select",6),pt("ngModelChange",function(p){D(t);let _=x();return dt(_.indexPlanificacion,p)||(_.indexPlanificacion=p),L(p)}),G("change",function(){D(t);let p=x();return L(p.cambiar())}),j(9,Kt,2,2,"option",7,Y),n()()(),h(11,"hr"),o(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",1)(16,"span",11),c(17,"Marca mas vendedia"),n(),h(18,"canvas",12),n()()(),o(19,"div",9)(20,"div",10)(21,"div",1)(22,"span",11),c(23,"Venta por linea"),n(),h(24,"canvas",13),n()()()(),o(25,"span",11),c(26),k(27,"number"),k(28,"number"),n(),h(29,"hr"),T(30,Zt,13,0,"table",14)(31,te,1,0,"app-loadings"),o(32,"span",11),c(33),k(34,"number"),k(35,"number"),n(),h(36,"hr"),T(37,ie,13,0,"table",14)(38,ae,1,0,"app-loadings"),o(39,"span",11),c(40,` Ventas por cliente
`),n(),h(41,"hr"),T(42,ne,3,1,"table",14),h(43,"br")(44,"hr"),o(45,"div",10)(46,"div",1),h(47,"canvas",15),n()(),o(48,"div",10)(49,"div",1),h(50,"canvas",16),n()(),h(51,"hr")}if(r&2){let t=x();d(3),U(" ",t.perfil.nombre," ",t.perfil.apellido," "),d(5),ct("ngModel",t.indexPlanificacion),d(),H(t.planificacion.planificacion()),d(17),U(" Progreso Mystic (",E(27,10,t.totalCantidadMystic,"2.0-0")," Productos - ",E(28,13,t.totalPuntosMystic,"2.2-2"),` Puntos)
`),d(4),F(t.loading?30:31),d(3),U(" Progreso Qerametik (",E(34,16,t.totalCantidadQerametik,"2.0-0")," Productos - ",E(35,19,t.totalPuntosQerametik,"2.2-2"),` Puntos)
`),d(4),F(t.loading?37:38),d(5),F(t.loading_clientes?42:-1)}}function se(r,a){r&1&&c(0,`
Cargando perfil...
`)}var X=class r{constructor(a){this.route=a;this.route.paramMap.subscribe(t=>{let f=t.get("id");setTimeout(()=>{this.indexPlanificacion=this.planificacion.planificacion().length-1,this.loading_perfil=!0,this.perfil=this.promotora.users().find(p=>p._id===f),this.RefreshPage()},1e3)})}login=M(gt);reportes=M(Dt);planificacion=M(Qt);clientes=M(wt);productoService=M(Tt);promotora=M(Bt);ReportesFiltradosMystic=[];ReportesFiltradosQerametik=[];loading=!1;EditarReporte=!1;ReporteSeleccionado;MarcaSelected="Mystic";searchTerm="";filteredProductos=[];usarListaAntigua=!1;modalCliente=!1;filteredClientes=[];totalCantidadMystic=0;totalPuntosMystic=0;totalCantidadQerametik=0;totalPuntosQerametik=0;perfil;loading_perfil=!1;loading_clientes=!1;indexPlanificacion=0;Separado_por_clientes=[];marcas_chart;lineas_chart;linea;marcas;Qerametik=[];Mystic=[];qerametik_chart;mystic_chart;BuscarCliente(a){a.value.trim()===""?this.filteredClientes=[]:this.filteredClientes=this.clientes.clientes().filter(t=>t.cliente.toLowerCase().includes(a.value.toLowerCase())&&t.marca===this.MarcaSelected)}addCliente(a){this.ReporteSeleccionado.cliente=a,this.modalCliente=!1}RefreshPage(){this.lineas_chart&&this.lineas_chart.destroy(),this.marcas_chart&&this.marcas_chart.destroy(),this.qerametik_chart&&this.qerametik_chart.destroy(),this.mystic_chart&&this.mystic_chart.destroy(),this.loading=!1,setTimeout(()=>{if(!this.planificacion.loading()){let a=this.planificacion.planificacion()[this.indexPlanificacion];this.reportes.cargarReportes_(a.inicio,a.cierre).subscribe(t=>{let f=document.getElementById("marcas"),p=document.getElementById("lineas"),_=document.getElementById("qerametik"),z=document.getElementById("mystic"),I=0,Z=0,A=0,tt=0,N=0;this.ReportesFiltradosMystic=t.filter(e=>e.promotora._id===this.perfil._id&&e.productos[0]?.producto?.marca==="Mystic"),this.ReportesFiltradosQerametik=t.filter(e=>e.promotora._id===this.perfil._id&&e.productos[0]?.producto?.marca==="Qerametik");let et=0,it=0,at=0,ot=0,O={},$={};this.ReportesFiltradosMystic.forEach(e=>{let i=e.productos.reduce((s,l)=>s+l.cantidad,0),m=e.productos.reduce((s,l)=>s+l.producto.puntos*l.cantidad,0);e.totalCantidad=i,e.puntuacionTotal=m,et+=i,it+=m,e.productos.forEach(s=>{let l=s.producto.producto;I+=s.cantidad,s.producto.linea==="Tradicional"?A+=s.cantidad:s.producto.linea==="Rebranding"&&(N+=s.cantidad),O[l]||(O[l]={producto:l,cantidad:0}),O[l].cantidad+=s.cantidad})}),this.ReportesFiltradosQerametik.forEach(e=>{let i=e.productos.reduce((s,l)=>s+l.cantidad,0),m=e.productos.reduce((s,l)=>s+l.producto.puntos*l.cantidad,0);e.totalCantidad=i,e.puntuacionTotal=m,at+=i,ot+=m,e.productos.forEach(s=>{let l=s.producto.producto;Z+=s.cantidad,s.producto.linea==="Tradicional"&&(tt+=s.cantidad),$[l]||($[l]={producto:l,cantidad:0}),$[l].cantidad+=s.cantidad})});let w=Object.values($).map(e=>{let i=Math.floor(Math.random()*360);return{label:e.producto,data:e.cantidad,backgroundColor:`hsl(${i}, 70%, 50%)`,borderColor:`hsl(${i}, 80%, 40%)`}});w.sort((e,i)=>i.data-e.data);let Lt=w.map(e=>e.label),Ft=w.map(e=>e.data),Vt=w.map(e=>e.backgroundColor),It=w.map(e=>e.borderColor),B=Object.values(O).map(e=>{let i=Math.floor(Math.random()*360);return{label:e.producto,data:e.cantidad,backgroundColor:`hsl(${i}, 70%, 50%)`,borderColor:`hsl(${i}, 80%, 40%)`}});B.sort((e,i)=>i.data-e.data);let At=B.map(e=>e.label),Nt=B.map(e=>e.data),Ot=B.map(e=>e.backgroundColor),$t=B.map(e=>e.borderColor);this.Qerametik={labels:Lt,datasets:[{label:"Productos vendidos",data:Ft,backgroundColor:Vt,borderColor:It,hoverOffset:4}]};let qt={id:"customDataLabelsQerametik",afterDatasetsDraw(e){let{ctx:i,data:m}=e;e.data.datasets.forEach((s,l)=>{e.getDatasetMeta(l).data.forEach((b,Q)=>{let y=s.data[Q];i.save(),i.font="12px Arial",i.fillStyle="#000",i.textAlign="center",i.fillText(y,b.x,b.y-10),i.restore()})})}};this.qerametik_chart=new V(_,{type:"bar",data:this.Qerametik,options:{plugins:{legend:{display:!0}}},plugins:[qt]});let Yt={id:"customDataLabels",afterDatasetsDraw(e){let{ctx:i,data:m}=e;e.data.datasets.forEach((s,l)=>{e.getDatasetMeta(l).data.forEach((b,Q)=>{let y=s.data[Q];i.save(),i.font="12px Arial",i.fillStyle="#000",i.textAlign="center",i.fillText(y,b.x,b.y-10),i.restore()})})}};this.Mystic={labels:At,datasets:[{label:"Productos vendidos",data:Nt,backgroundColor:Ot,borderColor:$t,hoverOffset:4}]},this.mystic_chart=new V(z,{type:"bar",data:this.Mystic,options:{plugins:{legend:{display:!0}}},plugins:[Yt]});let nt=A+N,jt=A/nt*100,Ht=N/nt*100;this.linea={labels:[`Tradicional Mystic (${jt.toFixed(2)}%)`,"Tradicional Qerametik",`Rebranding (${Ht.toFixed(2)}%)`],datasets:[{label:"Productos vendidos",data:[A,tt,N],backgroundColor:["#001a72","#6bcaba","#fe5000"],borderColor:["#fe5000","#c99700","#001a72"],hoverOffset:4}]};let Wt={id:"customDoughnutLabels",afterDatasetsDraw(e){let{ctx:i,data:m}=e,s=m.datasets[0];e.getDatasetMeta(0).data.forEach((l,R)=>{let b=s.data[R],Q=m.labels[R],{x:y,y:S}=l.tooltipPosition();i.save(),i.fillStyle="rgba(255, 255, 255, 0.8)";let u=6,C=i.measureText(b).width,g=14;i.fillRect(y-C/2-u/2,S-g/2-u/2,C+u,g+u),i.strokeStyle="rgba(0, 0, 0, 0.3)",i.lineWidth=1,i.strokeRect(y-C/2-u/2,S-g/2-u/2,C+u,g+u),i.fillStyle="#000",i.font="12px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(b,y,S),i.restore()})}};this.lineas_chart=new V(p,{type:"doughnut",data:this.linea,options:{plugins:{legend:{display:!0}}},plugins:[Wt]}),this.marcas={labels:["Mystic","Qerametik"],datasets:[{label:"Productos vendidos",data:[I,Z],backgroundColor:["#001a72","#6bcaba"],borderColor:["#fe5000","#c99700"],hoverOffset:4}]};let Gt={id:"customDoughnutLabels",afterDatasetsDraw(e){let{ctx:i,data:m}=e,s=m.datasets[0];e.getDatasetMeta(0).data.forEach((l,R)=>{let b=s.data[R],Q=m.labels[R],{x:y,y:S}=l.tooltipPosition();i.save(),i.fillStyle="rgba(255, 255, 255, 0.8)";let u=6,C=i.measureText(b).width,g=14;i.fillRect(y-C/2-u/2,S-g/2-u/2,C+u,g+u),i.strokeStyle="rgba(0, 0, 0, 0.3)",i.lineWidth=1,i.strokeRect(y-C/2-u/2,S-g/2-u/2,C+u,g+u),i.fillStyle="#000",i.font="12px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(b,y,S),i.restore()})}};this.marcas_chart=new V(f,{type:"doughnut",data:this.marcas,options:{plugins:{legend:{display:!0}}},plugins:[Gt]}),this.totalCantidadMystic=et,this.totalPuntosMystic=it,this.totalCantidadQerametik=at,this.totalPuntosQerametik=ot,this.loading=!0,this.Separado_por_clientes=this.agruparYCalcularTotales(t.filter(e=>e.promotora._id===this.perfil._id)),this.Separado_por_clientes=Object.entries(this.Separado_por_clientes).map(([e,i])=>{if(typeof i=="object"&&i!==null){let m=i;return{nombre:e,cantidadReportes:m.cantidadReportes||0,totalMystic:m.totalMystic||0,totalProductosVendidos:m.totalProductosVendidos||0,totalQerametik:m.totalQerametik||0}}return{nombre:e,id:0,cantidadReportes:0,totalMystic:0,totalProductosVendidos:0,totalQerametik:0}}).sort((e,i)=>i.totalProductosVendidos-e.totalProductosVendidos),this.loading_clientes=!0})}},1e3)}EditarReporte_Mystic(a){setTimeout(()=>{this.EditarReporte=!this.EditarReporte,this.ReporteSeleccionado=this.ReportesFiltradosMystic.find(t=>t._id===a),this.MarcaSelected=this.ReporteSeleccionado.productos[0].producto.marca,P.default.fire({title:"\xBFQuieres eliminar este reporte?",icon:"question",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Eliminar",denyButtonText:"No, conservar"}).then(t=>{t.isConfirmed?(this.ReporteSeleccionado.borrado=!0,this.reportes.NuevoReporte(this.ReporteSeleccionado),P.default.fire({timer:2e3,icon:"success",title:"Reporte eliminado",showConfirmButton:!1,toast:!0,position:"top-end",timerProgressBar:!0}),this.RefreshPage()):t.isDenied&&P.default.fire({timer:2e3,icon:"info",title:"No hubo cambios",showConfirmButton:!1,toast:!0,position:"top-end",timerProgressBar:!0})})},500)}EditarReporte_Qera(a){setTimeout(()=>{this.EditarReporte=!this.EditarReporte,this.ReporteSeleccionado=this.ReportesFiltradosQerametik.find(t=>t._id===a),this.MarcaSelected=this.ReporteSeleccionado.productos[0].producto.marca,P.default.fire({title:"\xBFQuieres eliminar este reporte?",icon:"question",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Eliminar",denyButtonText:"No, conservar"}).then(t=>{t.isConfirmed?(this.ReporteSeleccionado.borrado=!0,this.reportes.NuevoReporte(this.ReporteSeleccionado),P.default.fire({timer:2e3,icon:"success",title:"Reporte eliminado",showConfirmButton:!1,toast:!0,position:"top-end",timerProgressBar:!0}),this.RefreshPage()):t.isDenied&&P.default.fire({timer:2e3,icon:"info",title:"No hubo cambios",showConfirmButton:!1,toast:!0,position:"top-end",timerProgressBar:!0})})},500)}BorrarReporte(a){P.default.fire({title:"\xBFReportar ventas de hoy?",text:"Recuerda verificar bien las cantidades que declaras y los productos seleccionados",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reportar!"}).then(t=>{t.isConfirmed&&P.default.fire({title:"Listo",text:"La informaci\xF3n fue enviada con exito",icon:"success",showConfirmButton:!1,timer:5e3,toast:!0,timerProgressBar:!0,position:"top-end"})})}filterProductos(){this.searchTerm.trim()===""?this.filteredProductos=[]:this.usarListaAntigua?this.filteredProductos=this.productoService.productos().filter(a=>a.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&a.marca===this.MarcaSelected&&a.linea==="Antigua"):this.filteredProductos=this.productoService.productos().filter(a=>a.producto.toLowerCase().includes(this.searchTerm.toLowerCase())&&a.marca===this.MarcaSelected&&a.linea!="Antigua")}AgregarProducto(a){this.ReporteSeleccionado.productos.find(t=>t.producto._id===a._id)||(this.ReporteSeleccionado.productos.push({producto:a,inicio:0,final:0,cantidad:0}),this.filterProductos())}EliminarProducto(a){this.ReporteSeleccionado.productos.splice(a,1)}cambiar(){this.loading=!1,this.RefreshPage()}GuardarReporte(){this.loading=!1,this.reportes.NuevoReporte(this.formatearReporte(this.ReporteSeleccionado)),this.RefreshPage(),this.EditarReporte=!1}formatearReporte(a){return K(J({},a),{cliente:a.cliente._id,promotora:a.promotora._id,productos:a.productos.map(t=>K(J({},t),{producto:t.producto._id}))})}agruparYCalcularTotales=a=>a.reduce((t,f)=>{let p=f.cliente.cliente;t[p]||(t[p]={cantidadReportes:0,totalProductosVendidos:0,totalMystic:0,totalQerametik:0}),t[p].cantidadReportes++;let _=f.productos.reduce((z,I)=>z+I.cantidad,0);return f.cliente.marca==="Mystic"?t[p].totalMystic+=_:f.cliente.marca==="Qerametik"&&(t[p].totalQerametik+=_),t[p].totalProductosVendidos+=_,t},{});static \u0275fac=function(t){return new(t||r)(rt(bt))};static \u0275cmp=st({type:r,selectors:[["app-promotoras"]],decls:2,vars:1,consts:[[1,"card",2,"background","linear-gradient(to right, #001a72, #003c99, #005ebf, #4a9dc1, #6bcaba)","color","rgb(212, 212, 212)"],[1,"card-content"],["title","Progreso"],[1,"control"],["for","",1,"label"],[1,"select"],[3,"ngModelChange","change","ngModel"],[3,"value"],[1,"columns"],[1,"column","is-4"],[1,"card"],[1,"title"],["id","marcas"],["id","lineas"],[1,"table","is-fullwidth","is-striped"],["id","mystic"],["id","qerametik"],[1,"button",2,"background-color","transparent","border","none","color","rgb(192, 102, 102)",3,"click"],[1,"icon"],[1,"fas","fa-trash-alt"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,f){t&1&&T(0,re,52,22)(1,se,1,0),t&2&&F(f.loading_perfil?0:1)},dependencies:[_t,ut,ht,ft,kt,Et,Mt,Rt,St,Pt,xt,vt,Ct,yt],encapsulation:2})};export{X as default};
