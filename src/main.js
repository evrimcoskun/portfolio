import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
