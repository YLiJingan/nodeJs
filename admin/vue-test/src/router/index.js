import Vue from 'vue'
import Router from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Index from '../views/Index.vue'
import Main from '../views/Main.vue'
import Table from '../views/Table.vue'
import Chart from '../views/Chart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'Signin',
      component:Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component:Signup
    },{
      path: '/',
      component: Index,
      name: '导航一',
      children: [
        { path: '/main', component: Main, name: '主页'},
        { path: '/table', component: Table, name: 'Table' },
        { path: '/chart', component: Chart, name: 'Chart' },
      ]
    },
  ]
})
