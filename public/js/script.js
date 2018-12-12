const router = new VueRouter({
  routes: [
    { path: '/', component: Accueil },
    { path: '/perche', name: 'perche', component: Perche },
    { path: '/averti', name: 'averti', component: Averti },
    { path: '/porte', name: 'porte', component: Porte },
  ]
})

let app = new Vue({
  router: router,
  el: '#app'
})