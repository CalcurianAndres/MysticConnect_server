import{a as h}from"./chunk-TZTC4YCF.js";import{Fa as o,Fb as c,R as l,X as a,a as i,b as s,f as n}from"./chunk-BH4UYFV3.js";var u=class r{http=a(h);#t=o({loading:!0,clientes:[]});clientes=c(()=>this.#t().clientes);loading=c(()=>this.#t().loading);ruta="https://mysticconnect-server.onrender.com/api";constructor(){this.cargarClientes()}cargarClientes(){this.http.get(`${this.ruta}/clientes`).subscribe(t=>{let e=t.sort((p,d)=>p.cliente.localeCompare(d.cliente));this.#t.set({loading:!1,clientes:e})})}ClientePorMarca(t){return this.clientes().filter(e=>e.marca===t)}clienteBuscarPorId(t){return this.clientes().find(e=>e._id===t)}NuevoCliente=t=>n(this,null,function*(){this.#t.set(s(i({},this.#t()),{loading:!0})),this.http.post(`${this.ruta}/clientes`,t).subscribe(e=>{this.#t.set(s(i({},this.#t()),{loading:!1,clientes:[...this.#t().clientes,e]}))})});EliminarCliente=t=>n(this,null,function*(){this.#t.set(s(i({},this.#t()),{loading:!0})),this.http.delete(`${this.ruta}/clientes/${t}`).subscribe(e=>{this.cargarClientes()})});EditarClientes=t=>n(this,null,function*(){this.#t.set(s(i({},this.#t()),{loading:!0})),this.http.put(`${this.ruta}/clientes/${t._id}`,t).subscribe(e=>{this.cargarClientes()})});static \u0275fac=function(e){return new(e||r)};static \u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"})};export{u as a};
