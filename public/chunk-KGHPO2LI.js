import{a as R}from"./chunk-F5LWF3O4.js";import{Fa as h,Fb as m,R as g,X as b,t as l}from"./chunk-FEZNDU67.js";var f=class u{http=b(R);#o=h({loading:!0,reportes:[]});reportes=m(()=>this.#o().reportes);loading=m(()=>this.#o().loading);ruta="https://mysticconnectserver-production.up.railway.app/api";constructor(){this.cargarReportes()}cargarReportes(){this.http.get(`${this.ruta}/reportes`).subscribe(r=>{this.#o.set({loading:!1,reportes:r})})}getReportesAgrupados_(r){return this.http.get(`${this.ruta}/reportes`).pipe(l(n=>{let e=n.filter(o=>o.promotora.fija===r).reduce((o,t)=>{let c=t.promotora?._id;if(!c)return console.warn("Reporte sin promotora v\xE1lida:",t),o;o[c]||(o[c]={promotora:`${t.promotora.nombre} ${t.promotora.apellido}`,puntosAcumulados:0,totalGastado:0,productosVendidos:0,conteoMetaUnidades:0,reportes:[]});let i=t.productos.reduce((a,d)=>a+d.producto.puntos*d.cantidad,0),p=t.productos.reduce((a,d)=>a+d.producto.precio*d.cantidad,0),s=t.productos.reduce((a,d)=>a+d.cantidad,0);return s>=30&&(o[c].conteoMetaUnidades+=1),o[c].puntosAcumulados+=i,o[c].totalGastado+=p,o[c].productosVendidos+=s,o[c].reportes.push({cliente:t.cliente.cliente,marca:t.cliente.marca,tipo:t.tipo,observacion:t.observacion,productos:t.productos.map(a=>({producto:a.producto.producto,linea:a.producto.linea,marca:a.producto.marca,cantidad:a.cantidad,subtotal:a.producto.precio*a.cantidad,puntosTotales:a.producto.puntos*a.cantidad})),fecha:t.fecha,totalPuntos:i,totalSubtotal:p}),o},{});return Object.values(e).sort((o,t)=>t.productosVendidos-o.productosVendidos)}))}getReportesAgrupados(){return this.http.get(`${this.ruta}/reportes`).pipe(l(r=>{let n=r.reduce((e,o)=>{let t=o.promotora?._id;if(!t)return console.warn("Reporte sin promotora v\xE1lida:",o),e;e[t]||(e[t]={promotora:`${o.promotora.nombre} ${o.promotora.apellido}`,puntosAcumulados:0,totalGastado:0,productosVendidos:0,conteoMetaUnidades:0,reportes:[]});let c=o.productos.reduce((s,a)=>s+a.producto.puntos*a.cantidad,0),i=o.productos.reduce((s,a)=>s+a.producto.precio*a.cantidad,0),p=o.productos.reduce((s,a)=>s+a.cantidad,0);return p>=30&&(e[t].conteoMetaUnidades+=1),e[t].puntosAcumulados+=c,e[t].totalGastado+=i,e[t].productosVendidos+=p,e[t].reportes.push({cliente:o.cliente.cliente,marca:o.cliente.marca,tipo:o.tipo,observacion:o.observacion,productos:o.productos.map(s=>({producto:s.producto.producto,linea:s.producto.linea,marca:s.producto.marca,cantidad:s.cantidad,subtotal:s.producto.precio*s.cantidad,puntosTotales:s.producto.puntos*s.cantidad})),fecha:o.fecha,totalPuntos:c,totalSubtotal:i}),e},{});return console.log(Object.values(n).sort((e,o)=>o.productosVendidos-e.productosVendidos)),Object.values(n).sort((e,o)=>o.productosVendidos-e.productosVendidos)}))}NuevoReporte(r){this.http.post(`${this.ruta}/reportes`,r).subscribe(n=>{this.cargarReportes()})}formatFecha(r){let n=("0"+r.getDate()).slice(-2),e=("0"+(r.getMonth()+1)).slice(-2),o=r.getFullYear();return`${n}/${e}/${o}`}static \u0275fac=function(n){return new(n||u)};static \u0275prov=g({token:u,factory:u.\u0275fac,providedIn:"root"})};export{f as a};
