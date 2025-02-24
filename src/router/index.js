import LandingPage from '@/components/LandingPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import MusicComponent from '@/components/MusicComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',component:LandingPage },
    { path: '/login',component:LoginPage},
    { path: '/home',component:MusicComponent}
  ],
})

export default router
