<script setup>
import { onMounted, reactive, ref, watch } from 'vue'

import axios from 'axios'

let sneakers = ref([])

const fetchData = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://3beff67661303c60.mokky.dev/items`, {
      params
    })
    sneakers.value = data
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetchData()
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

watch(filters, () => fetchData())
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <home-page :sneakers="sneakers" @sort="onChangeSelect" @search="handleSearch"></home-page>
  </div>
</template>

<style scoped></style>
