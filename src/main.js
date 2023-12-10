import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from '@/components/TheHeader.vue'
import FilterPanel from '@/components/FilterPanel.vue'
import CardsList from '@/components/CardsList.vue'
import HomePage from '@/pages/HomePage.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import CartHeader from "@/components/CartHeader.vue";
import CartList from "@/components/CartList.vue";

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('filter-panel', FilterPanel)
app.component('cards-list', CardsList)
app.component('home-page', HomePage)
app.component('shopping-cart', ShoppingCart)
app.component('cart-header', CartHeader)
app.component('cart-list', CartList)

app.mount('#app')
