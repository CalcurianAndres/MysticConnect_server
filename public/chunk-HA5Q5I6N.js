import{a as h}from"./chunk-F2UG3DZ7.js";import{Cb as r,Fa as o,R as l,X as a,a as i,b as s,f as n}from"./chunk-TPQHVVYC.js";var p=class c{http=a(h);#t=o({loading:!0,clientes:[]});clientes=r(()=>this.#t().clientes);loading=r(()=>this.#t().loading);ruta="https://mysticconnectserver-production.up.railway.app/api";constructor(){this.cargarClientes()}cargarClientes(){this.http.get(`${this.ruta}/clientes`).subscribe(t=>{let e=t.sort((u,d)=>u.cliente.localeCompare(d.cliente));this.#t.set({loading:!1,clientes:e})})}ClientePorMarca(t){return this.clientes().filter(e=>e.marca===t)}NuevoCliente=t=>n(this,null,function*(){this.#t.set(s(i({},this.#t()),{loading:!0})),this.http.post(`${this.ruta}/clientes`,t).subscribe(e=>{this.#t.set(s(i({},this.#t()),{loading:!1,clientes:[...this.#t().clientes,e]}))})});EliminarCliente=t=>n(this,null,function*(){this.#t.set(s(i({},this.#t()),{loading:!0})),this.http.delete(`${this.ruta}/clientes/${t}`).subscribe(e=>{this.cargarClientes()})});EditarClientes=t=>n(this,null,function*(){this.#t.set(s(i({},this.#t()),{loading:!0})),this.http.put(`${this.ruta}/clientes/${t._id}`,t).subscribe(e=>{this.cargarClientes()})});static \u0275fac=function(e){return new(e||c)};static \u0275prov=l({token:c,factory:c.\u0275fac,providedIn:"root"})};export{p as a};
