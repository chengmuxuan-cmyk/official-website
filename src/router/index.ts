// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router