import{a as g}from"./chunk-2T3NZPXG.js";import{Cb as i,Fa as b,R as l,X as m,t as d}from"./chunk-XBXOYP5X.js";var h=class c{http=m(g);#t=b({loading:!0,reportes:[]});productos=i(()=>this.#t().reportes);loading=i(()=>this.#t().loading);ruta="http://10.0.0.13:8080/api";constructor(){}cargarReportes(){this.http.get(`${this.ruta}/reportes`).subscribe(r=>{this.#t.set({loading:!1,reportes:r})})}getReportesAgrupados(){return this.http.get(`${this.ruta}/reportes`).pipe(d(r=>{let p=r.reduce((e,o)=>{let a=o.promotora?._id;if(!a)return console.warn("Reporte sin promotora v\xE1lida:",o),e;e[a]||(e[a]={promotora:`${o.promotora.nombre} ${o.promotora.apellido}`,puntosAcumulados:0,totalGastado:0,reportes:[]});let n=o.productos.reduce((t,s)=>t+s.producto.puntos*s.cantidad,0),u=o.productos.reduce((t,s)=>t+s.producto.precio*s.cantidad,0);return e[a].puntosAcumulados+=n,e[a].totalGastado+=u,e[a].reportes.push({cliente:o.cliente.cliente,tipo:o.tipo,observacion:o.observacion,productos:o.productos.map(t=>({producto:t.producto.producto,linea:t.producto.linea,marca:t.producto.marca,cantidad:t.cantidad,subtotal:t.producto.precio*t.cantidad,puntosTotales:t.producto.puntos*t.cantidad})),fecha:o.createdAt,totalPuntos:n,totalSubtotal:u}),e},{});return Object.values(p)}))}NuevoReporte(r){this.http.post(`${this.ruta}/reportes`,r).subscribe(p=>{this.cargarReportes()})}static \u0275fac=function(p){return new(p||c)};static \u0275prov=l({token:c,factory:c.\u0275fac,providedIn:"root"})};export{h as a};