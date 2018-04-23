/**
 * Created by user on 2018/4/16.
 * author:chang.yan
 * toast弹层
 */
import toast from './toast.vue'
export default {
  install(Vue, options){
    //全局配置
    let opt = {
      position: "center",
      show: false,
      time: 2000
    }
    for (var optkey in options) {
      opt[optkey] = options[optkey]
    }
    Vue.prototype.$toast = function (message, type) {
      var curType = type ? type : opt.position;
      opt.content = message;
      let Toast1 = Vue.extend(toast);
      let newToast = new Toast1();
      newToast.$data.content = message
      newToast.$data.position = curType
      newToast.$data.show = true;
      setTimeout(function () {
        newToast.$data.show = false;
      }, opt.time)
      document.body.appendChild(newToast.$mount().$el);
      newToast.$data.content = message;
    };
    ["center", "top", "bottom"].forEach(function (item) {
      Vue.prototype.$toast[item] = function (tips) {
        return Vue.prototype.$toast(tips, item)
      }
    })
  }
}
