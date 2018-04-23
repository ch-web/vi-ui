import Vue from 'vue'
import App from './App'
import router from './router'

/*引入组件*/
import toast from '@/components/toast/toast'

Vue.use(toast);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
