import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Perche from './views/Perche.vue'
import HommeAverti from './views/HommeAverti.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/perche',
      name: 'perche',
      component: Perche
    },
    {
      path: '/avertir',
      name: 'avertir',
      component: HommeAverti
    }
  ]
})
