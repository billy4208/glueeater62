import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Noon from '../views/Noon.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/noon',
    name: 'noon',
    component: Noon
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
