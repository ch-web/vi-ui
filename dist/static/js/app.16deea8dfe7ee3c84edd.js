webpackJsonp([7],{"88hr":function(t,e,n){"use strict";e.a={comp:[{title:"组件",list:[{path:"/calendar",name:"Calendar"},{path:"/pull-to-refresh",name:"Pull To Refresh"},{path:"/toast",name:"Toast"},{path:"/loading",name:"Loading"},{path:"/photo-browser",name:"Photo-browser"}]}],otherComp:[{title:"第三方组件",list:[{path:"https://peachscript.github.io/vue-infinite-loading/#!/",name:"无限滚动加载更多"}]}]}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("MVMM"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-content",attrs:{id:"appss"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var r=n("Z0/y")({name:"App"},o,!1,function(t){n("uOZI")},null,null).exports,i=n("HzJ8"),s=n.n(i),p=n("zO6J"),u=n("88hr");a.a.use(p.a);var c=[{path:"/",name:"Index",component:function(){return n.e(0).then(n.bind(null,"2NXm"))}}],l=!0,h=!1,d=void 0;try{for(var f,m=s()(u.a.comp);!(l=(f=m.next()).done);l=!0){var v=f.value,g=function(t){c.push({name:t.name,path:t.path,component:function(){return n("r07X")("./pages"+t.path)}})},w=!0,y=!1,X=void 0;try{for(var $,b=s()(v.list);!(w=($=b.next()).done);w=!0){g($.value)}}catch(t){y=!0,X=t}finally{try{!w&&b.return&&b.return()}finally{if(y)throw X}}}}catch(t){h=!0,d=t}finally{try{!l&&m.return&&m.return()}finally{if(h)throw d}}var x=new p.a({routes:c}),_={render:function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"lx-toast",class:"lx-toast-"+this.position},[this._v("\n  "+this._s(this.content)+"\n")]):this._e()},staticRenderFns:[]};var C=n("Z0/y")({data:function(){return{show:!1,content:"",position:"center"}}},_,!1,function(t){n("kuaL")},"data-v-1f729836",null).exports,J={install:function(t,e){var n={position:"center",show:!1,time:2e3};for(var a in e)n[a]=e[a];t.prototype.$toast=function(e,a){var o=a||n.position;n.content=e;var r=new(t.extend(C));r.$data.content=e,r.$data.position=o,r.$data.show=!0,setTimeout(function(){r.$data.show=!1},n.time),document.body.appendChild(r.$mount().$el),r.$data.content=e},["center","top","bottom"].forEach(function(e){t.prototype.$toast[e]=function(n){return t.prototype.$toast(n,e)}})}};a.a.use(J),a.a.config.productionTip=!1,new a.a({el:"#apprr",router:x,components:{App:r},template:"<App/>"})},kuaL:function(t,e){},r07X:function(t,e,n){var a={"./pages":["2NXm",0],"./pages/":["2NXm",0],"./pages/calendar":["OL4i",1],"./pages/calendar.vue":["OL4i",1],"./pages/index":["2NXm",0],"./pages/index.vue":["2NXm",0],"./pages/loading":["CmAY",4],"./pages/loading.vue":["CmAY",4],"./pages/photo-browser":["XKrJ",2],"./pages/photo-browser.vue":["XKrJ",2],"./pages/pull-to-refresh":["0RJX",3],"./pages/pull-to-refresh.vue":["0RJX",3],"./pages/toast":["/31G",5],"./pages/toast.vue":["/31G",5]};function o(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(a)},o.id="r07X",t.exports=o},uOZI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.16deea8dfe7ee3c84edd.js.map