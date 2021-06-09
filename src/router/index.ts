import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Other from '@/views/other.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/other',
    name: 'Other',
    component: Other
  },
  {
    path: '/other2',
    name: 'Other2',
    component: () => import('@/views/other2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router