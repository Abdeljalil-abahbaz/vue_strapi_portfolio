import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '@/views/Skills.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/skills',
    name: 'skills',
    component:Skills
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition){
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      return { left: 0, top: 0, behavior: 'smooth' };
    }
  }
})

export default router
