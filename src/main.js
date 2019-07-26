import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NewWord from './components/NewWord'
import Word from './components/Word'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/addwords', component: NewWord },
  { path: '/', component: Word }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
