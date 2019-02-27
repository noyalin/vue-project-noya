import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'
import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import $ from 'jquery'

Vue.use(Router)

import Home from '../views/home'
import List from '../views/list'
import Detail from '../views/detail'
import ListB from '../views/listB'
import BlankLayout from '@/components/BlankLayout'
import ListBChild from '../views/ListBChild'

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/list', component: List},
    {path: '/list/detail/:id', name: 'detailA', component: Detail},
    {
      path: 'listB', component: BlankLayout, children: [
        {path: '/listB/child', component: ListBChild}
      ]
    },
  ]
})
