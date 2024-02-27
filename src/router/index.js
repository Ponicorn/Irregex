import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Perche from '@/views/Perche.vue'
import HommeAverti from '@/views/HommeAverti.vue'
import MidiPorte from '@/views/MidiPorte.vue'

const router = createRouter({
  history: createWebHistory(),
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

export default router
