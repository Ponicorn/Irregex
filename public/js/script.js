const router = new VueRouter({
  routes: [
    { path: '/', component: Accueil },
    { path: '/perche', name: 'perche', component: Perche },
    { path: '/averti', name: 'averti', component: Averti },
  ]
})

let app = new Vue({
  router: router,
  el: '#app'
})