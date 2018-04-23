import Vue from 'vue'
import Router from 'vue-router'
import navConfig from '@/nav.config.js'

Vue.use(Router)

// 路由配置
const route = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index')
  }
]
for(let nav of navConfig){
  for(let page of nav.list){
    route.push({
      name: page.name,
      path: page.path,
      component: () => import(`@/pages${page.path}`)
    })
  }
}

export default new Router({
  routes: route
})
