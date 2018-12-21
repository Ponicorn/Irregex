import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Perche from './views/Perche.vue'
import HommeAverti from './views/HommeAverti.vue'
import MidiPorte from './views/MidiPorte.vue'

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
      component: Perche,
      props: { precedent: false, suivant: 'avertir' }
    },
    {
      path: '/avertir',
      name: 'avertir',
      component: HommeAverti,
      props: { precedent: 'perche', suivant: 'midi' }
    },
    {
      path: '/midi',
      name: 'midi',
      component: MidiPorte,
      props: { precedent: 'avertir', suivant: false }
    }
  ]
})
