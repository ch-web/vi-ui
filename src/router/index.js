import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/pages/index')
const Calendar = () => import('@/pages/calendar')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    /*组件*/
    // 日历组件
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
