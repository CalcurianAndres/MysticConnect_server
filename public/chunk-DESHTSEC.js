import{e as w,i as S}from"./chunk-SEVY662V.js";import{a as I}from"./chunk-3JJKJOSC.js";import{a as M,b as v,c as P,i as k}from"./chunk-X7V57MHS.js";import"./chunk-F2UG3DZ7.js";import{B as C,Ia as b,Sb as y,X as a,ab as o,bb as n,cb as r,e as L,eb as _,hb as m,mb as p,nb as d,ob as c,p as f,za as l}from"./chunk-TPQHVVYC.js";var E=L(I());var g=class u{loginService=a(S);router=a(w);ngOnInit(){this.session_email=this.loginService.Correo_session,this.session_name=this.loginService.Nombre_session}Correo="";Password="";session_email="";session_name="";login(){let s=document.getElementById("recuerdame");if(!this.Correo||!this.Password)return;let i={correo:this.Correo,password:this.Password};this.loginService.Login(i,s.checked).pipe(C(e=>(console.error("Error occurred:",e),f({error:!0,message:"Correo o contrase\xF1a incorrecta"})))).subscribe(e=>{e.error?E.default.fire({icon:"error",title:e.message,toast:!0,timer:5e3,showConfirmButton:!1,timerProgressBar:!0,position:"top-end"}):(localStorage.setItem("TOKEN_SESSION",e.token),this.router.navigateByUrl("/dashboard"))})}static \u0275fac=function(i){return new(i||u)};static \u0275cmp=b({type:u,selectors:[["app-login"]],decls:21,vars:2,consts:[[1,"cuerpo"],["src","../../assets/logo.jpg"],[1,"form"],[1,"field"],[1,"control"],["type","text","placeholder","Nombre de usuario",1,"input",3,"ngModelChange","ngModel"],["type","password","name","","id","","placeholder","Contrase\xF1a",1,"input",3,"ngModelChange","ngModel"],[1,"field","is-grouped"],[1,"button","is-primary",3,"click"],[1,"icon"],[1,"fa-solid","fa-right-to-bracket"],["type","checkbox","id","recuerdame"]],template:function(i,e){i&1&&(o(0,"span",0),r(1,"img",1)(2,"br"),o(3,"span",2)(4,"div",3)(5,"div",4)(6,"input",5),c("ngModelChange",function(t){return d(e.Correo,t)||(e.Correo=t),t}),n()()(),o(7,"div",3)(8,"div",4)(9,"input",6),c("ngModelChange",function(t){return d(e.Password,t)||(e.Password=t),t}),n()()(),o(10,"div",7)(11,"div",4)(12,"button",8),_("click",function(){return e.login()}),o(13,"span",9),r(14,"i",10),n(),o(15,"span"),m(16,"Ingresar"),n()()(),o(17,"div",4),r(18,"input",11),o(19,"span"),m(20," Recuerdame"),n()()()()()),i&2&&(l(6),p("ngModel",e.Correo),l(3),p("ngModel",e.Password))},dependencies:[y,k,M,v,P],styles:['@charset "UTF-8";.cuerpo[_ngcontent-%COMP%]{position:absolute;display:block;width:100%;height:100%;background-color:#302d40}.cuerpo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:auto;display:block;margin:20px auto 0;box-shadow:0 4px 8px #0003;border-radius:50%}.form[_ngcontent-%COMP%]{width:250px;height:auto;display:block;margin:20px auto 0}']})};export{g as default};
