import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MySpaceView from '@/views/MySpaceView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/register', component: RegisterView },
  { path: '/dashboard', component: MySpaceView }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router