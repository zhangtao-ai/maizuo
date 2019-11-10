import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Customers
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})

export default router
