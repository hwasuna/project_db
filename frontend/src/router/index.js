import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import Games from '@/components/games.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/',
    name: 'Games',
    component: Games,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

