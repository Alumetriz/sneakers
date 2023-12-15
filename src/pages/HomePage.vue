<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { fetchData, fetchFavorites, updateFavorite } from '@/api/api.js'

const emit = defineEmits(['update-cart'])

let sneakers = ref([])

const updateCart = (sneaker) => {
  emit('update-cart', sneaker)
}

onMounted(() => {
  fetchData(filters, sneakers)
  fetchFavorites(sneakers)
})

const filters = reactive({
  sortBy: 'name',
  searchQuery: ''
})

const onChangeSelect = (value) => {
  filters.sortBy = value
}
const handleSearch = (value) => {
  filters.searchQuery = value
}

watch(filters, () => fetchData(filters, sneakers))
</script>

<template>
  <main class="p-11">
    <filter-panel @sort="onChangeSelect" @search="handleSearch"></filter-panel>

    <cards-list
      :sneakers="sneakers"
      @update-favorite="updateFavorite"
      @update-cart="updateCart"
    ></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
