<script setup>
import { onMounted, watch } from 'vue'
import {fetchData, sendFavorite, sendOrder} from '@/api/api.js'
import { sneakers, filters, favorites, orders } from '@/constans/constans.js'

onMounted(() => {
  fetchData(sneakers, 'items')
})

const onChangeSelect = (value) => {
  filters.sortBy = value
}
const handleSearch = (value) => {
  filters.searchQuery = value
}
</script>

<template>
  <main class="p-11">
    <filter-panel @sort="onChangeSelect" @search="handleSearch"></filter-panel>

    <cards-list
      :sneakers="sneakers"
      @send-favorites-data="sendFavorite(favorites, 'favorites', $event)"
      @send-orders-data="sendOrder(orders, 'orders', $event)"
    ></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
