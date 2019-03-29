import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cartlist from '@/components/Cartlist'
import AddItem from '@/components/AddItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CartList',
      name: 'Cartlist',
      component: Cartlist
    },
    {
      path: '/AddItem',
      name: 'AddItem',
      component: AddItem
    }
  ]
})
