import{a as y}from"./chunk-TA66JFPR.js";import{a as M}from"./chunk-HUNMWK37.js";import{Fa as R,Gb as b,R as v,X as h,t as g}from"./chunk-5XISTBJQ.js";var $=class m{http=h(M);#o=R({loading:!0,reportes:[]});reportes=b(()=>this.#o().reportes);loading=b(()=>this.#o().loading);planificacionService=h(y);ruta="https://mysticconnectserver-production.up.railway.app/api";constructor(){this.cargarReportes()}cargarReportes(){this.http.get(`${this.ruta}/reportes`).subscribe(e=>{this.#o.set({loading:!1,reportes:e})})}cargarReportes_(e,r){return this.http.get(`${this.ruta}/reportes?inicio=${e}&fin=${r}`)}getReportesAgrupados_(e,r,d){return this.http.get(`${this.ruta}/reportes?inicio=${r}&fin=${d}`).pipe(g(p=>{let l=p.reduce((t,o)=>{let i=o.promotora?._id;if(!i)return console.warn("Reporte sin promotora v\xE1lida:",o),t;if(console.log(o.promotora.fija,e),o.promotora.fija!==e)return console.warn("reportes que no coincidan con el tipoPromotora:",o),t;t[i]||(t[i]={promotora:`${o.promotora.nombre} ${o.promotora.apellido}`,puntosAcumulados:0,totalGastado:0,productosVendidos:0,conteoMetaUnidades:0,productosMystic:0,productosQerametik:0,puntosMystic:0,puntosQerametik:0,reportes:[]});let n=o.productos.reduce((a,s)=>a+s.producto.puntos*s.cantidad,0);o.promotora.correo==="usuario"&&console.log(o.productos.reduce((a,s)=>a+s.producto.precio*s.cantidad,0));let u=o.productos.reduce((a,s)=>a+s.producto.precio*s.cantidad,0),f=o.productos.reduce((a,s)=>a+s.cantidad,0),c=o.productos.reduce((a,s)=>a+(s.cantidad>=10?1:0),0);return o.productos.forEach(a=>{a.producto.marca==="Mystic"?(t[i].productosMystic+=a.cantidad,t[i].puntosMystic+=a.producto.puntos*a.cantidad):a.producto.marca==="Qerametik"&&(t[i].productosQerametik+=a.cantidad,t[i].puntosQerametik+=a.producto.puntos*a.cantidad)}),o.promotora.fija===!0?o.tipo==="Impulso"?o.productos[0].producto.marca==="Mystic"?n>=this.planificacionService.planificacion()[1].metas.tradicional.mystic.impulso&&(t[i].conteoMetaUnidades+=1):n>=this.planificacionService.planificacion()[1].metas.tradicional.qerametik.impulso&&(t[i].conteoMetaUnidades+=1):o.productos[0].producto.marca==="Mystic"?n>=this.planificacionService.planificacion()[1].metas.tradicional.mystic.evento&&(t[i].conteoMetaUnidades+=1):n>=this.planificacionService.planificacion()[1].metas.tradicional.qerametik.evento&&(t[i].conteoMetaUnidades+=1):o.tipo==="Impulso"?o.productos[0].producto.marca==="Mystic"?n>=this.planificacionService.planificacion()[1].metas.rebranding.mystic.impulso&&(t[i].conteoMetaUnidades+=1):n>=this.planificacionService.planificacion()[1].metas.rebranding.qerametik.impulso&&(t[i].conteoMetaUnidades+=1):o.productos[0].producto.marca==="Mystic"?n>=this.planificacionService.planificacion()[1].metas.rebranding.mystic.evento&&(t[i].conteoMetaUnidades+=1):n>=this.planificacionService.planificacion()[1].metas.rebranding.qerametik.evento&&(t[i].conteoMetaUnidades+=1),t[i].puntosAcumulados+=n,t[i].totalGastado+=u,t[i].productosVendidos+=f,t[i].reportes.push({cliente:o.cliente.cliente,marca:o.cliente.marca,tipo:o.tipo,observacion:o.observacion,productos:o.productos.map(a=>({producto:a.producto.producto,linea:a.producto.linea,marca:a.producto.marca,cantidad:a.cantidad,subtotal:a.producto.precio*a.cantidad,puntosTotales:a.producto.puntos*a.cantidad})),fecha:o.fecha,totalPuntos:n,totalSubtotal:u}),t},{});return Object.values(l).sort((t,o)=>o.productosVendidos-t.productosVendidos)}))}getReportesAgrupados(e,r,d){return this.http.get(`${this.ruta}/reportes?inicio=${r}&fin=${d}`).pipe(g(p=>{let l=p.reduce((t,o)=>{let i=o.promotora?._id;if(!i)return console.warn("Reporte sin promotora v\xE1lida:",o),t;if(console.log(o.promotora.fija,e),o.promotora.fija!==e)return console.warn("reportes que no coincidan con el tipoPromotora:",o),t;t[i]||(t[i]={promotora:`${o.promotora.nombre} ${o.promotora.apellido}`,puntosAcumulados:0,totalGastado:0,productosVendidos:0,conteoMetaUnidades:0,productosMystic:0,productosQerametik:0,puntosMystic:0,puntosQerametik:0,reportes:[]});let n=o.productos.reduce((c,a)=>c+a.producto.puntos*a.cantidad,0),u=o.productos.reduce((c,a)=>c+a.producto.precio*a.cantidad,0),f=o.productos.reduce((c,a)=>c+a.cantidad,0);return o.productos.forEach(c=>{c.producto.marca==="Mystic"?(t[i].productosMystic+=c.cantidad,t[i].puntosMystic+=c.producto.puntos*c.cantidad):c.producto.marca==="Qerametik"&&(t[i].productosQerametik+=c.cantidad,t[i].puntosQerametik+=c.producto.puntos*c.cantidad)}),t[i].puntosAcumulados+=n,t[i].totalGastado+=u,t[i].productosVendidos+=f,t[i].reportes.push({cliente:o.cliente.cliente,marca:o.cliente.marca,tipo:o.tipo,observacion:o.observacion,productos:o.productos.map(c=>({producto:c.producto.producto,linea:c.producto.linea,marca:c.producto.marca,cantidad:c.cantidad,subtotal:c.producto.precio*c.cantidad,puntosTotales:c.producto.puntos*c.cantidad})),fecha:o.fecha,totalPuntos:n,totalSubtotal:u}),t},{});return Object.values(l).sort((t,o)=>o.productosVendidos-t.productosVendidos)}))}NuevoReporte(e){this.http.post(`${this.ruta}/reportes`,e).subscribe(r=>{this.cargarReportes()})}formatFecha(e){let r=("0"+e.getDate()).slice(-2),d=("0"+(e.getMonth()+1)).slice(-2),p=e.getFullYear();return`${r}/${d}/${p}`}static \u0275fac=function(r){return new(r||m)};static \u0275prov=v({token:m,factory:m.\u0275fac,providedIn:"root"})};export{$ as a};
