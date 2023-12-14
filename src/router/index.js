import HomePage from '@/pages/HomePage.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/Favorites', component: FavoritesPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
