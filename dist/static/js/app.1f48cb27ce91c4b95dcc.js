webpackJsonp([6],{"4P4m":function(t,e){},"88hr":function(t,e,n){"use strict";e.a={comp:[{title:"组件",list:[{path:"/calendar",name:"Calendar"},{path:"/pull-to-refresh",name:"Pull To Refresh"},{path:"/toast",name:"Toast"},{path:"/loading",name:"Loading"}]}],otherComp:[{title:"第三方组件",list:[{path:"https://peachscript.github.io/vue-infinite-loading/#!/",name:"无限滚动加载更多"}]}]}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-content",attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("4P4m")},null,null).exports,i=n("BO1k"),s=n.n(i),p=n("/ocq"),u=n("88hr");a.a.use(p.a);var c=[{path:"/",name:"Index",component:function(){return n.e(0).then(n.bind(null,"2NXm"))}}],l=!0,h=!1,d=void 0;try{for(var f,m=s()(u.a.comp);!(l=(f=m.next()).done);l=!0){var v=f.value,g=function(t){c.push({name:t.name,path:t.path,component:function(){return n("r07X")("./pages"+t.path)}})},w=!0,y=!1,$=void 0;try{for(var x,X=s()(v.list);!(w=(x=X.next()).done);w=!0){g(x.value)}}catch(t){y=!0,$=t}finally{try{!w&&X.return&&X.return()}finally{if(y)throw $}}}}catch(t){h=!0,d=t}finally{try{!l&&m.return&&m.return()}finally{if(h)throw d}}var _=new p.a({routes:c}),b={render:function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"lx-toast",class:"lx-toast-"+this.position},[this._v("\n  "+this._s(this.content)+"\n")]):this._e()},staticRenderFns:[]};var C=n("VU/8")({data:function(){return{show:!1,content:"",position:"center"}}},b,!1,function(t){n("w1k9")},"data-v-1509be33",null).exports,k={install:function(t,e){var n={position:"center",show:!1,time:2e3};for(var a in e)n[a]=e[a];t.prototype.$toast=function(e,a){var o=a||n.position;n.content=e;var r=new(t.extend(C));r.$data.content=e,r.$data.position=o,r.$data.show=!0,setTimeout(function(){r.$data.show=!1},n.time),document.body.appendChild(r.$mount().$el),r.$data.content=e},["center","top","bottom"].forEach(function(e){t.prototype.$toast[e]=function(n){return t.prototype.$toast(n,e)}})}};a.a.use(k),a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:r},template:"<App/>"})},r07X:function(t,e,n){var a={"./pages":["2NXm",0],"./pages/":["2NXm",0],"./pages/calendar":["OL4i",1],"./pages/calendar.vue":["OL4i",1],"./pages/index":["2NXm",0],"./pages/index.vue":["2NXm",0],"./pages/loading":["CmAY",3],"./pages/loading.vue":["CmAY",3],"./pages/pull-to-refresh":["0RJX",2],"./pages/pull-to-refresh.vue":["0RJX",2],"./pages/toast":["/31G",4],"./pages/toast.vue":["/31G",4]};function o(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(a)},o.id="r07X",t.exports=o},w1k9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1f48cb27ce91c4b95dcc.js.map