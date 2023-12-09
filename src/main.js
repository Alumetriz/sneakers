import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from '@/components/TheHeader.vue'
import FilterPanel from '@/components/FilterPanel.vue'
import CardsList from '@/components/CardsList.vue'
import HomePage from '@/pages/HomePage.vue'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('filter-panel', FilterPanel)
app.component('cards-list', CardsList)
app.component('home-page', HomePage)
app.mount('#app')
