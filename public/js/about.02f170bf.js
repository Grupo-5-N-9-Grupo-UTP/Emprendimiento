(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(s,e,t){var o=t("d039"),n=t("b622"),r=t("2d00"),i=n("species");s.exports=function(s){return r>=51||!o((function(){var e=[],t=e.constructor={};return t[i]=function(){return{foo:1}},1!==e[s](Boolean).foo}))}},8418:function(s,e,t){"use strict";var o=t("a04b"),n=t("9bf2"),r=t("5c6c");s.exports=function(s,e,t){var i=o(e);i in s?n.f(s,i,r(0,t)):s[i]=t}},a434:function(s,e,t){"use strict";var o=t("23e7"),n=t("23cb"),r=t("5926"),i=t("07fa"),a=t("7b0b"),u=t("65f0"),c=t("8418"),d=t("1dde"),l=d("splice"),f=Math.max,m=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!l},{splice:function(s,e){var t,o,d,l,v,g,w=a(this),x=i(w),b=n(s,x),C=arguments.length;if(0===C?t=o=0:1===C?(t=0,o=x-b):(t=C-2,o=m(f(r(e),0),x-b)),x+t-o>h)throw TypeError(p);for(d=u(w,o),l=0;l<o;l++)v=b+l,v in w&&c(d,l,w[v]);if(d.length=o,t<o){for(l=b;l<x-o;l++)v=l+o,g=l+t,v in w?w[g]=w[v]:delete w[g];for(l=x;l>x-o+t;l--)delete w[l-1]}else if(t>o)for(l=x-o;l>b;l--)v=l+o-1,g=l+t-1,v in w?w[g]=w[v]:delete w[g];for(l=0;l<t;l++)w[l+b]=arguments[l+2];return w.length=x-o+t,d}})},c740:function(s,e,t){"use strict";var o=t("23e7"),n=t("b727").findIndex,r=t("44d2"),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),o({target:"Array",proto:!0,forced:a},{findIndex:function(s){return n(this,s,arguments.length>1?arguments[1]:void 0)}}),r(i)},ed81:function(s,e,t){"use strict";t.r(e);var o=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container"},[t("h1",[s._v("Inicio de Sesión")]),t("b-alert",{attrs:{show:s.dismissCountDown,dismissible:"",variant:s.mensaje.color},on:{dismissed:function(e){s.dismissCountDown=0},"dismiss-count-down":s.countDownChanged}},[s._v(" "+s._s(s.mensaje.texto)+" ")]),t("div",{staticClass:"subMenu",attrs:{id:"user"}}),s.editar?s._e():t("form",{on:{submit:function(e){return e.preventDefault(),s.agregarNota()}}},[t("h3",[s._v("Registro de Usuario")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.userName,expression:"user.userName"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre de Usuario"},domProps:{value:s.user.userName},on:{input:function(e){e.target.composing||s.$set(s.user,"userName",e.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Contraseña"},domProps:{value:s.user.password},on:{input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}}),t("b-button",{staticClass:"btn-success my-2",attrs:{type:"submit"}},[s._v("Registrar")])],1)],1)},n=[],r=(t("c740"),t("a434"),{name:"Users",props:{msg:String},data:function(){return{usuarios:[],mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,usuario:{userName:"",password:""},editar:!1,usuarioEditar:{}}},created:function(){this.listarUsuarios()},methods:{listarUsuarios:function(){var s=this;this.axios.get("/user").then((function(e){console.log(e.data),s.users=e.data})).catch((function(s){console.log(s.response)}))},iniciarSesion:function(){var s=this,e=document.getElementById("username"),t=document.getElementById("password"),o={userName:e.value,password:t.value};this.axios.post("/login",o).then((function(e){console.log(e),s.mensaje.color="success",s.mensaje.texto="Inicio de Sesión",s.showAlert()})).catch((function(s){console.log(s.response)}))},registrarUsuario:function(){var s=this;this.axios.post("/nuevo-usuario",this.user).then((function(e){s.users.push(e.data),s.user.userName="",s.user.password="",s.mensaje.color="success",s.mensaje.texto="Usuario Registrado",s.showAlert()})).catch((function(s){console.log(s.response)}))},eliminarUsuario:function(s){var e=this;this.axios.delete("/user/".concat(s)).then((function(s){var t=e.users.findIndex((function(e){return e._id===s.data._id}));e.users.splice(t,1),e.mensaje.color="success",e.mensaje.texto="Usuario Eliminado",e.showAlert()})).catch((function(s){console.log(s.response)}))},activarEdicion:function(s){var e=this;this.editar=!0,this.axios.get("/user/".concat(s)).then((function(s){e.usuarioEditar=s.data})).catch((function(s){console.log(s.response)}))},editarUsuario:function(s){var e=this;this.axios.put("/user/".concat(s._id),s).then((function(s){var t=e.users.findIndex((function(e){return e._id===s.data._id}));e.users[t].userName=s.data.userName,e.users[t].password=s.data.password,e.mensaje.color="success",e.mensaje.texto="Usuario Actualizado",e.showAlert(),e.editar=!1})).catch((function(s){console.log(s.response)}))},countDownChanged:function(s){this.dismissCountDown=s},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),i=r,a=t("2877"),u=Object(a["a"])(i,o,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.02f170bf.js.map