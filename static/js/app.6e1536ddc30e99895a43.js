webpackJsonp([1],{"1uuo":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper green"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("User Manager")])],1)])])},staticRenderFns:[]},r={name:"App",components:{Navbar:a("VU/8")(null,s,!1,null,null,null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},l=a("VU/8")(r,i,!1,null,null,null).exports,o=a("/ocq"),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports,d=a("kxiW"),m=a.n(d),v=(a("881v"),m.a.initializeApp({apiKey:"AIzaSyBa0fx4Rvdr3YdnvPKQriJ5c3XzaPUwmI4",authDomain:"is4302.firebaseapp.com",databaseURL:"https://is4302.firebaseio.com",projectId:"is4302",storageBucket:"is4302.appspot.com",messagingSenderId:"332381728433"}).firestore()),_={name:"dashboard",data:function(){return{users:[]}},created:function(){var t=this;v.collection("users").orderBy("email","desc").get().then(function(e){e.forEach(function(e){var a={id:e.data().user_id,name:e.data().name,email:e.data().email,contact_number:e.data().contact_number};t.users.push(a)})})}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.users,function(e){return a("li",{key:e.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[t._v(t._s(e.id))]),t._v(" "),a("div",{staticClass:"chip"},[t._v(t._s(e.email))]),t._v("\n      "+t._s(e.name)+", "+t._s(e.contact_number)+"\n        "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-user",params:{user_id:e.id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Users")])])}]},h=a("VU/8")(_,p,!1,null,null,null).exports,f={name:"ViewUser",data:function(){return{user_id:null,name:null,email:null,contact_number:null}},methods:{saveUser:function(){var t=this;v.collection("users").add({user_id:this.user_id,name:this.name,email:this.email,contact_number:this.contact_number}).then(function(e){console.log("Client added: ",e.id),t.$router.push("/")}).catch(function(t){console.error("Error adding employee: ",t)})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-user"}},[a("h3",[t._v("New User")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveUser(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{type:"text",required:""},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}}),t._v(" "),a("label",[t._v("User ID#")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("label",[t._v("Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",[t._v("Email")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_number,expression:"contact_number"}],attrs:{type:"text",required:""},domProps:{value:t.contact_number},on:{input:function(e){e.target.composing||(t.contact_number=e.target.value)}}}),t._v(" "),a("label",[t._v("Contact Number")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1),t._v("\\\n  ")])])},staticRenderFns:[]},g=a("VU/8")(f,b,!1,null,null,null).exports,C={name:"view-user",data:function(){return{id:null,name:null,email:null,contact_number:null}},beforeRouteEnter:function(t,e,a){v.collection("users").where("user_id","==",t.params.user_id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.data().user_id,e.name=t.data().name,e.contact_number=t.data().contact_number,e.email=t.data().email})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;v.collection("users").where("user_id","==",this.$route.params.user_id).get().then(function(e){e.forEach(function(e){t.id=e.data().user_id,t.name=e.data().name,t.email=e.data().email,t.contact_number=e.data().contact_number})})},deleteUser:function(){var t=this;confirm("Are you sure?")&&v.collection("users").where("user_id","==",this.$route.params.user_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-user"},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("ID#: "+t._s(t.id))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("E-mail: "+t._s(t.email))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Tel: "+t._s(t.contact_number))])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn red",on:{click:t.deleteUser}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-user",params:{user_id:t.id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},x=a("VU/8")(C,w,!1,null,null,null).exports,E={name:"editUser",data:function(){return{user_id:null,name:null,email:null,contact_number:null}},beforeRouteEnter:function(t,e,a){v.collection("users").where("user_id","==",t.params.user_id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.data().user_id,e.name=t.data().name,e.contact_number=t.data().contact_number,e.email=t.data().email})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;v.collection("users").where("user_id","==",this.$route.params.user_id).get().then(function(e){e.forEach(function(e){t.id=e.data().user_id,t.name=e.data().name,t.email=e.data().email,t.contact_number=e.data().contact_number})})},updateUser:function(){var t=this;v.collection("users").where("user_id","==",this.$route.params.user_id).get().then(function(e){e.forEach(function(e){e.ref.update({user_id:t.id,contact_number:t.contact_number,email:t.email,name:t.name}).then(function(){t.$router.push({name:"view-user",params:{user_id:t.id}})})})})}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Edit User")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateUser(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",placeholder:"User ID#",required:"",disabled:""},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_number,expression:"contact_number"}],attrs:{type:"text",placeholder:"Contact Number",required:""},domProps:{value:t.contact_number},on:{input:function(e){e.target.composing||(t.contact_number=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1),t._v("\\\n  ")])])},staticRenderFns:[]},y=a("VU/8")(E,k,!1,null,null,null).exports;n.a.use(o.a);var U=new o.a({routes:[{path:"/hello",name:"HelloWorld",component:c},{path:"/",name:"dashboard",component:h},{path:"/new",name:"new-user",component:g},{path:"/:user_id",name:"view-user",component:x},{path:"/edit/:user_id",name:"edit-user",component:y}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:U,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.6e1536ddc30e99895a43.js.map