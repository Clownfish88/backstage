import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Goods from '@/page/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
