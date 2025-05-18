import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import GamesView from '@/components/GamesView.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/',
    name: 'Games',
    component: GamesView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

