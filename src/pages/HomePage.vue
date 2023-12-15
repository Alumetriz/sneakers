<script setup>
import { onMounted, watch } from 'vue'
import { fetchData } from '@/api/api.js'
import { sneakers, filters } from '@/constans/constans.js'

onMounted(() => {
  fetchData()
})

const onChangeSelect = (value) => {
  filters.sortBy = value
}
const handleSearch = (value) => {
  filters.searchQuery = value
}

watch(filters, () => fetchData())
</script>

<template>
  <main class="p-11">
    <filter-panel @sort="onChangeSelect" @search="handleSearch"></filter-panel>

    <cards-list :sneakers="sneakers"></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
