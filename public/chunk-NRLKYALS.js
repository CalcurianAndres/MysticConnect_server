import{a as d}from"./chunk-SJQBYHCF.js";import{Eb as u,Fa as p,R as a,X as e,a as r,b as s,f as i}from"./chunk-K6DX3A3E.js";var n=class c{http=e(d);#t=p({loading:!0,productos:[]});productos=u(()=>this.#t().productos);loading=u(()=>this.#t().loading);ruta="https://mysticconnectserver-production.up.railway.app/api";constructor(){this.cargarProductos()}cargarProductos(){this.http.get(`${this.ruta}/productos`).subscribe(t=>{let o=t.sort((h,l)=>h.producto.localeCompare(l.producto));this.#t.set({loading:!1,productos:o})})}NuevoProducto=t=>i(this,null,function*(){this.#t.set(s(r({},this.#t()),{loading:!0})),this.http.post(`${this.ruta}/productos`,t).subscribe(o=>{this.#t.set(s(r({},this.#t()),{loading:!1,productos:[...this.#t().productos,o]}))})});EditarPromotora=t=>i(this,null,function*(){this.#t.set(s(r({},this.#t()),{loading:!0})),this.http.put(`${this.ruta}/productos/${t._id}`,t).subscribe(o=>{this.cargarProductos()})});EliminarProducto=t=>i(this,null,function*(){this.#t.set(s(r({},this.#t()),{loading:!0})),this.http.delete(`${this.ruta}/productos/${t}`).subscribe(o=>{this.cargarProductos()})});static \u0275fac=function(o){return new(o||c)};static \u0275prov=a({token:c,factory:c.\u0275fac,providedIn:"root"})};export{n as a};
