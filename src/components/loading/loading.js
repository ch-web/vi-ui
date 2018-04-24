/**
 * Created by user on 2018/4/17.
 * author:chang.yan
 * 加载中
 */
import load from '@/plugins/loading/loading.vue'
let loading=null;
let tmp=null;
export default {
  install(Vue,options){
    Vue.prototype.loading=(flag)=>{
      let ele = document.getElementById("loading");
      if(ele){
        ele.remove();
      }
      tmp = Vue.extend(load);
      loading = new tmp();
      document.body.appendChild(loading.$mount().$el)
      loading.show = flag?true:false;
	  ele=null;
    }
  }
}
